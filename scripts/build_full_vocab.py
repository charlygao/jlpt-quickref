#!/usr/bin/env python3
import json
import sqlite3
import sys
from collections import OrderedDict
from pathlib import Path

try:
    from wordfreq import zipf_frequency
except ImportError:  # Unit tests for POS mapping do not need the frequency model.
    zipf_frequency = None

LEVELS = ["N5", "N4", "N3", "N2", "N1"]

# A few JLPT rows point at narrower JMdict entries than the everyday headword.
# Preserve the learner-relevant usages confirmed during the vocabulary audit.
REQUIRED_POS_COMPONENTS = {
    ("幾つ", "いくつ"): ("名词", "副词"),
    ("後悔", "こうかい"): ("名词", "サ变"),
    ("一時", "いちじ"): ("名词", "副词"),
}


def preferred(items):
    if not items:
        return None
    return next((x for x in items if x.get("priority")), items[0])


def select_word_and_reading(entry):
    kanji = entry.get("kanji") or []
    kana = entry.get("kana") or []
    k = preferred(kanji)
    word = k.get("text") if k else None

    kana_candidates = kana
    if word:
        restricted = [
            x for x in kana
            if not x.get("restricted_to") or word in x.get("restricted_to", [])
        ]
        if restricted:
            kana_candidates = restricted

    r = preferred(kana_candidates)
    reading = r.get("text") if r else None
    if not word:
        word = reading
    return word, reading or word


def chinese_glosses(entry, zh_data):
    out = []
    seen = set()

    def add(text):
        if not isinstance(text, str):
            return
        text = " ".join(text.split()).strip(" ；;")
        if not text or text in seen:
            return
        seen.add(text)
        out.append(text)

    for sense in entry.get("senses") or []:
        for gloss in sense.get("glosses") or []:
            if gloss.get("lang") in ("zho", "zh", "zh-CN"):
                add(gloss.get("text"))

    if zh_data:
        try:
            obj = json.loads(zh_data)
            senses = obj.get("senses") or {}
            values = senses.values() if isinstance(senses, dict) else senses
            for sense in values:
                for gloss in (sense or {}).get("glosses") or []:
                    add(gloss.get("text"))
        except Exception:
            pass

    return out[:8]


def _tag_texts(value):
    """Yield normalized scalar values from string or structured POS tags."""
    if isinstance(value, str):
        text = value.strip().lower()
        if text:
            yield text
        return
    if isinstance(value, dict):
        # Tomoshi versions have represented JMdict tags both as strings and as
        # small objects. Read the fields instead of matching against repr(dict).
        for item in value.values():
            yield from _tag_texts(item)
        return
    if isinstance(value, (list, tuple, set)):
        for item in value:
            yield from _tag_texts(item)


def detailed_pos(tags):
    texts = list(dict.fromkeys(_tag_texts(tags)))
    codes = {
        text for text in texts
        if text and all(char.isascii() and (char.isalnum() or char in "-_") for char in text)
    }

    def starts(prefix):
        return any(t.startswith(prefix) for t in texts)

    def contains(fragment):
        return any(fragment in t for t in texts)

    def is_suru_tag(text):
        # JMdict descriptions have used both "auxiliary verb" and the shorter
        # "aux. verb" wording for サ変 nouns. Treat both as the same POS signal.
        return (
            "suru verb" in text
            or "takes the auxiliary verb suru" in text
            or "takes the aux. verb suru" in text
            or "takes aux. verb suru" in text
        )

    has_godan = any(code.startswith("v5") for code in codes) or starts("godan verb")
    has_ichidan = bool(codes & {"v1", "v1-s"}) or starts("ichidan verb")
    has_kuru = "vk" in codes or any("kuru verb" in t or t.startswith("irregular verb - kuru") for t in texts)
    has_suru_noun = "vs" in codes or any(
        "noun or participle which takes the aux" in t and "verb suru" in t
        for t in texts
    )
    has_suru_verb = bool(codes & {"vs-c", "vs-i", "vs-s"}) or any(
        is_suru_tag(t) and "noun or participle" not in t
        for t in texts
    )
    has_suru = has_suru_noun or has_suru_verb
    has_aux_verb = "aux-v" in codes or starts("auxiliary verb")
    has_transitive = "vt" in codes or starts("transitive verb")
    has_intransitive = "vi" in codes or starts("intransitive verb")
    has_real_verb = any(
        code.startswith(("v1", "v2", "v4", "v5"))
        or code in {"vk", "vn", "vr", "vz", "v-unspec"}
        for code in codes
    ) or any(
        (t.startswith("verb") or " verb " in f" {t} ")
        and "adverb" not in t
        and not t.startswith(("transitive verb", "intransitive verb", "auxiliary verb"))
        and not is_suru_tag(t)
        for t in texts
    )

    noun_codes = {"n", "n-adv", "n-pr", "n-pref", "n-suf", "n-t", "num", "unc"}
    has_noun = bool(codes & noun_codes) or any(
        t == "noun"
        or t.startswith("noun (")
        or t.startswith("noun, ")
        or t.startswith("adverbial noun")
        or t.startswith("temporal noun")
        or "noun or participle which takes the aux" in t
        for t in texts
    )
    has_pronoun = "pn" in codes or starts("pronoun")

    explicit_i_adj = bool(codes & {"adj-i", "adj-ix", "adj-kari", "adj-ku", "adj-shiku"})
    explicit_na_adj = "adj-na" in codes
    has_i_adj = explicit_i_adj or any(
        t == "i-adjective"
        or t.startswith("adjective (keiyoushi)")
        for t in texts
    )
    has_na_adj = explicit_na_adj or any(
        "adjectival nouns or quasi-adjectives" in t
        or t == "na-adjective"
        or "keiyodoshi" in t
        for t in texts
    )
    has_no_adj = "adj-no" in codes or any(
        "nouns which may take the genitive case particle" in t or t == "no-adjective"
        for t in texts
    )
    has_taru_adj = "adj-t" in codes or contains("taru adjective")
    has_prenominal = bool(codes & {"adj-pn", "adj-f"}) or contains("pre-noun adjectival")
    has_aux_adj = "aux-adj" in codes or contains("auxiliary adjective")
    has_adverb = bool(codes & {"adv", "adv-to", "n-adv"}) or starts("adverb")

    if has_godan:
        core = "五段动词"
    elif has_ichidan:
        core = "一段动词"
    elif has_kuru:
        core = "カ变动词"
    elif (has_noun or has_suru_noun) and has_suru:
        core = "名词・サ变"
    elif has_suru:
        core = "サ变动词"
    elif has_aux_verb:
        core = "助动词"
    elif has_real_verb:
        core = "动词"
    elif has_na_adj:
        # Some structured upstream tags contain a generic adjective parent
        # label alongside the precise adj-na value. The specific な signal must
        # win; otherwise every な-adjective is mislabeled as an い-adjective.
        core = "な形容词"
    elif has_i_adj:
        core = "い形容词"
    elif has_no_adj:
        core = "の形容词"
    elif has_taru_adj:
        core = "タルト形容词"
    elif has_prenominal:
        core = "连体词"
    elif has_aux_adj:
        core = "补助形容词"
    elif has_pronoun:
        core = "代词"
    elif has_noun:
        core = "名词"
    elif has_adverb:
        core = "副词"
    elif "conj" in codes or starts("conjunction"):
        core = "接续词"
    elif "int" in codes or starts("interjection"):
        core = "感叹词"
    elif "ctr" in codes or starts("counter"):
        core = "助数词"
    elif "pref" in codes or starts("prefix"):
        core = "接头词"
    elif "suf" in codes or starts("suffix"):
        core = "接尾词"
    elif "exp" in codes or starts("expression"):
        core = "表达"
    elif "prt" in codes or starts("particle"):
        core = "助词"
    else:
        core = "词汇"

    qualifiers = []
    if has_transitive:
        qualifiers.append("他动词")
    if has_intransitive:
        qualifiers.append("自动词")
    parts = [core]
    if qualifiers and ("动词" in core or core == "名词・サ变"):
        parts.extend(qualifiers)

    # Preserve frequent secondary usages instead of discarding every POS after
    # the first JMdict sense. This keeps labels such as 名词・サ变・な形容词 and
    # 名词・副词 useful to learners without weakening conjugation detection.
    if core == "名词・サ变":
        if has_na_adj:
            parts.append("な形容词")
        elif has_i_adj and not has_na_adj:
            parts.append("い形容词")
        if has_adverb:
            parts.append("副词")
    elif core in {"い形容词", "な形容词", "の形容词", "タルト形容词"}:
        if has_noun:
            parts.insert(0, "名词")
        if has_adverb:
            parts.append("副词")
    elif core == "名词" and has_adverb:
        parts.append("副词")

    return "・".join(dict.fromkeys(parts))


def pos_label(entry):
    tags = []
    inherited = []
    for sense in entry.get("senses") or []:
        current = sense.get("pos") or []
        if current:
            inherited = current
        tags.extend(inherited)
    return detailed_pos(tags) if tags else "词汇"


def apply_required_pos(word, reading, pos):
    required = REQUIRED_POS_COMPONENTS.get((word, reading))
    if not required:
        return pos

    parts = pos.split("・") if pos and pos != "词汇" else []
    for component in required:
        if component in parts:
            continue
        if component == "名词":
            parts.insert(0, component)
        elif component == "サ变" and "名词" in parts:
            parts.insert(parts.index("名词") + 1, component)
        else:
            parts.append(component)
    return "・".join(parts) or pos


def usage_frequency(word):
    """Surface-form corpus estimate used only as a secondary tie-breaker."""
    if zipf_frequency is None:
        return 0.0
    try:
        return round(float(zipf_frequency(word, "ja", wordlist="best")), 2)
    except Exception:
        return 0.0


def validate_pos_inventory(grouped):
    rows = [row for level in LEVELS for row in grouped[level].values()]
    i_adjectives = [row for row in rows if "い形容词" in row[3].split("・")]
    na_adjectives = [row for row in rows if "な形容词" in row[3].split("・")]
    suspicious_i = [row for row in i_adjectives if not row[0].endswith("い")]

    # A healthy JMdict import contains hundreds of both adjective classes. A
    # zero/near-zero な count is a parser regression, not a property of JLPT.
    if len(i_adjectives) < 50 or len(na_adjectives) < 50:
        raise ValueError(
            f"implausible adjective inventory: {len(i_adjectives)} い, "
            f"{len(na_adjectives)} な"
        )
    if len(suspicious_i) > max(10, len(i_adjectives) // 20):
        examples = "、".join(row[0] for row in suspicious_i[:10])
        raise ValueError(
            f"too many non-い forms labeled い形容词: {len(suspicious_i)}/"
            f"{len(i_adjectives)} ({examples})"
        )

    expected_na = {"本当", "綺麗", "特別", "可能", "高級", "活発", "増し", "タイムリー"}
    for row in rows:
        if row[0] in expected_na and "い形容词" in row[3]:
            raise ValueError(f"known な-adjective mislabeled as い形容词: {row[0]} ({row[3]})")

    for row in rows:
        required = REQUIRED_POS_COMPONENTS.get((row[0], row[1]))
        if required and not all(component in row[3].split("・") for component in required):
            raise ValueError(f"known POS usage missing for {row[0]}: {row[3]}")

    print(
        f"POS: {len(i_adjectives)} い-adjectives, {len(na_adjectives)} な-adjectives, "
        f"{len(suspicious_i)} non-い-form い-adjective candidates"
    )


def build(db_path, output_path):
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    rows = conn.execute(
        """
        SELECT v.entry_id, v.level, e.data AS entry_data, z.data AS zh_data,
               fr.rank AS frequency_rank
        FROM vocab_jlpt v
        JOIN entries e ON e.id = v.entry_id
        LEFT JOIN zh_defs z ON z.entry_id = v.entry_id AND z.locale = 'zh-CN'
        LEFT JOIN freq_rank fr ON fr.entry_id = v.entry_id
        WHERE v.level IN ('N5','N4','N3','N2','N1')
        """
    )

    grouped = {level: OrderedDict() for level in LEVELS}
    skipped = 0
    for row in rows:
        level = row["level"]
        try:
            entry = json.loads(row["entry_data"])
        except Exception:
            skipped += 1
            continue

        word, reading = select_word_and_reading(entry)
        glosses = chinese_glosses(entry, row["zh_data"])
        if not word or not reading or not glosses:
            skipped += 1
            continue

        key = (word, reading)
        meaning = "；".join(glosses)
        pos = apply_required_pos(word, reading, pos_label(entry))
        corpus_frequency = usage_frequency(word)
        entry_rank = int(row["frequency_rank"]) if row["frequency_rank"] is not None else None
        payload = [word, reading, meaning, pos, corpus_frequency, entry_rank]

        if key not in grouped[level]:
            grouped[level][key] = payload
        else:
            existing = grouped[level][key]
            existing_parts = existing[2].split("；")
            for gloss in glosses:
                if gloss not in existing_parts and len(existing_parts) < 10:
                    existing_parts.append(gloss)
            existing[2] = "；".join(existing_parts)
            existing[4] = max(existing[4], corpus_frequency)
            if entry_rank is not None:
                existing[5] = entry_rank if existing[5] is None else min(existing[5], entry_rank)

    conn.close()

    validate_pos_inventory(grouped)

    lines = [
        "// Generated from Tomoshi Dictionary Open Data; see FULL_VOCAB_NOTICE.md.",
        "// Primary ordering uses entry-level JMdict-derived freq_rank; wordfreq is a secondary signal.",
        "// See FREQUENCY_NOTICE.md. No example sentences are generated here.",
        "(() => {",
        "  const { addVocab } = window.JLPT_EXT;",
    ]
    total = 0
    for level in LEVELS:
        values = list(grouped[level].values())
        values.sort(key=lambda x: (
            x[5] is None,
            x[5] if x[5] is not None else 10**9,
            -x[4],
            x[1],
            x[0],
        ))
        total += len(values)
        payload = json.dumps(values, ensure_ascii=False, separators=(",", ":"))
        lines.append(f"  addVocab('{level}', {payload});")
        ranked = sum(1 for x in values if x[5] is not None)
        print(f"{level}: {len(values)} entries; {ranked} with entry-level frequency rank")
        if values:
            print(f"  top: {values[0][0]} rank={values[0][5]} zipf={values[0][4]}")
    lines.append("})();")
    Path(output_path).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"TOTAL: {total} generated entries; skipped: {skipped}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: build_full_vocab.py INPUT.db OUTPUT.js")
    build(sys.argv[1], sys.argv[2])
