#!/usr/bin/env python3
import json
import sqlite3
import sys
from collections import OrderedDict
from pathlib import Path

from wordfreq import zipf_frequency

LEVELS = ["N5", "N4", "N3", "N2", "N1"]


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


def detailed_pos(tags):
    """Map JMdict POS labels to learner-facing Chinese classes."""
    texts = [str(tag or "").strip().lower() for tag in tags if str(tag or "").strip()]

    def starts(prefix):
        return any(t.startswith(prefix) for t in texts)

    def contains(fragment):
        return any(fragment in t for t in texts)

    has_godan = starts("godan verb")
    has_ichidan = starts("ichidan verb")
    has_kuru = any("kuru verb" in t or t.startswith("irregular verb - kuru") for t in texts)
    has_suru = any("suru verb" in t or "takes the auxiliary verb suru" in t for t in texts)
    has_aux_verb = starts("auxiliary verb")
    has_transitive = starts("transitive verb")
    has_intransitive = starts("intransitive verb")
    has_real_verb = any(
        "verb" in t
        and "adverb" not in t
        and not t.startswith("transitive verb")
        and not t.startswith("intransitive verb")
        and not t.startswith("auxiliary verb")
        for t in texts
    )

    has_noun = any("noun" in t for t in texts)
    has_pronoun = starts("pronoun")
    has_i_adj = any("adjective (keiyoushi)" in t or "i-adjective" in t or "keiyoushi" in t for t in texts)
    has_na_adj = any("adjectival nouns or quasi-adjectives" in t or "na-adjective" in t or "keiyodoshi" in t for t in texts)
    has_no_adj = any("nouns which may take the genitive case particle" in t or "no-adjective" in t for t in texts)

    if has_godan:
        core = "五段动词"
    elif has_ichidan:
        core = "一段动词"
    elif has_kuru:
        core = "カ变动词"
    elif has_noun and has_suru:
        core = "名词・サ变"
    elif has_suru:
        core = "サ变动词"
    elif has_aux_verb:
        core = "助动词"
    elif has_real_verb:
        core = "动词"
    elif has_i_adj:
        core = "い形容词"
    elif has_na_adj:
        core = "な形容词"
    elif has_no_adj:
        core = "の形容词"
    elif contains("taru adjective"):
        core = "タルト形容词"
    elif contains("pre-noun adjectival"):
        core = "连体词"
    elif contains("auxiliary adjective"):
        core = "补助形容词"
    elif has_pronoun:
        core = "代词"
    elif has_noun:
        core = "名词"
    elif starts("adverb"):
        core = "副词"
    elif starts("conjunction"):
        core = "接续词"
    elif starts("interjection"):
        core = "感叹词"
    elif starts("counter"):
        core = "助数词"
    elif starts("prefix"):
        core = "接头词"
    elif starts("suffix"):
        core = "接尾词"
    elif starts("expression"):
        core = "表达"
    elif starts("particle"):
        core = "助词"
    else:
        core = "词汇"

    qualifiers = []
    if has_transitive:
        qualifiers.append("他动词")
    if has_intransitive:
        qualifiers.append("自动词")

    if qualifiers and ("动词" in core or core == "名词・サ变"):
        return core + "・" + "・".join(qualifiers)
    return core


def pos_label(entry):
    for sense in entry.get("senses") or []:
        tags = sense.get("pos") or []
        if tags:
            return detailed_pos(tags)
    return "词汇"


def usage_frequency(word):
    """Return a corpus-based Japanese Zipf frequency score.

    wordfreq combines several corpora; higher is more frequent. We only store
    the resulting score/order, never generated example sentences.
    """
    try:
        return round(float(zipf_frequency(word, "ja", wordlist="best")), 2)
    except Exception:
        return 0.0


def build(db_path, output_path):
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    rows = conn.execute(
        """
        SELECT v.entry_id, v.level, e.data AS entry_data, z.data AS zh_data
        FROM vocab_jlpt v
        JOIN entries e ON e.id = v.entry_id
        LEFT JOIN zh_defs z ON z.entry_id = v.entry_id AND z.locale = 'zh-CN'
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
        pos = pos_label(entry)
        frequency = usage_frequency(word)
        if key not in grouped[level]:
            grouped[level][key] = [word, reading, meaning, pos, frequency]
        else:
            existing = grouped[level][key]
            existing_parts = existing[2].split("；")
            for gloss in glosses:
                if gloss not in existing_parts and len(existing_parts) < 10:
                    existing_parts.append(gloss)
            existing[2] = "；".join(existing_parts)
            existing[4] = max(existing[4], frequency)

    conn.close()

    lines = [
        "// Generated from Tomoshi Dictionary Open Data; see FULL_VOCAB_NOTICE.md.",
        "// Frequency ordering is derived from wordfreq; see FREQUENCY_NOTICE.md.",
        "// Adapted dictionary/frequency data is distributed under CC BY-SA terms.",
        "(() => {",
        "  const { addVocab } = window.JLPT_EXT;",
    ]
    total = 0
    for level in LEVELS:
        values = list(grouped[level].values())
        values.sort(key=lambda x: (-x[4], x[1], x[0]))
        total += len(values)
        payload = json.dumps(values, ensure_ascii=False, separators=(",", ":"))
        lines.append(f"  addVocab('{level}', {payload});")
        print(f"{level}: {len(values)} full-list vocabulary entries")
        if values:
            print(f"  top frequency: {values[0][0]} {values[0][4]}")
    lines.append("})();")
    Path(output_path).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"TOTAL: {total} generated entries; skipped: {skipped}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: build_full_vocab.py INPUT.db OUTPUT.js")
    build(sys.argv[1], sys.argv[2])
