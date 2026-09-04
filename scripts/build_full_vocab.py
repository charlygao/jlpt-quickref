#!/usr/bin/env python3
import json
import sqlite3
import sys
from collections import OrderedDict
from pathlib import Path

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
    texts = [str(tag or "").lower() for tag in tags]
    joined = " | ".join(texts)

    # Verb classes first: these are needed by the browser conjugator.
    if "godan verb" in joined:
        core = "五段动词"
    elif "ichidan verb" in joined:
        core = "一段动词"
    elif "kuru verb" in joined or "irregular verb - kuru" in joined:
        core = "カ变动词"
    elif "suru verb" in joined or "takes the auxiliary verb suru" in joined:
        core = "サ变动词"
    elif "auxiliary verb" in joined:
        core = "助动词"
    elif "verb" in joined:
        core = "动词"
    elif "adjective (keiyoushi)" in joined or "i-adjective" in joined or "keiyoushi" in joined:
        core = "い形容词"
    elif "adjectival nouns or quasi-adjectives" in joined or "na-adjective" in joined or "keiyodoshi" in joined:
        core = "な形容词"
    elif "nouns which may take the genitive case particle" in joined or "no-adjective" in joined:
        core = "の形容词"
    elif "taru adjective" in joined:
        core = "タルト形容词"
    elif "pre-noun adjectival" in joined:
        core = "连体词"
    elif "auxiliary adjective" in joined:
        core = "补助形容词"
    elif "pronoun" in joined:
        core = "代词"
    elif "noun" in joined:
        core = "名词"
    elif "adverb" in joined:
        core = "副词"
    elif "conjunction" in joined:
        core = "接续词"
    elif "interjection" in joined:
        core = "感叹词"
    elif "counter" in joined:
        core = "助数词"
    elif "prefix" in joined:
        core = "接头词"
    elif "suffix" in joined:
        core = "接尾词"
    elif "expression" in joined:
        core = "表达"
    elif any(t.strip().startswith("particle") or t.strip() == "particle" for t in texts):
        core = "助词"
    else:
        core = "词汇"

    # A noun that can take suru is more useful to learners as 名词・サ变.
    has_noun = "noun" in joined
    has_suru = "suru verb" in joined or "takes the auxiliary verb suru" in joined
    if has_noun and has_suru:
        core = "名词・サ变"

    qualifiers = []
    if "transitive verb" in joined:
        qualifiers.append("他动词")
    if "intransitive verb" in joined:
        qualifiers.append("自动词")

    if qualifiers and ("动词" in core or core == "名词・サ变"):
        return core + "・" + "・".join(qualifiers)
    return core


def pos_label(entry):
    # JMdict senses are ordered. Use the first sense with POS tags, but inspect
    # all tags on that sense so class + transitivity can be preserved.
    for sense in entry.get("senses") or []:
        tags = sense.get("pos") or []
        if tags:
            return detailed_pos(tags)
    return "词汇"


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
        if key not in grouped[level]:
            grouped[level][key] = [word, reading, meaning, pos]
        else:
            existing = grouped[level][key]
            existing_parts = existing[2].split("；")
            for gloss in glosses:
                if gloss not in existing_parts and len(existing_parts) < 10:
                    existing_parts.append(gloss)
            existing[2] = "；".join(existing_parts)

    conn.close()

    lines = [
        "// Generated from Tomoshi Dictionary Open Data; see FULL_VOCAB_NOTICE.md.",
        "// The adapted data in this file is CC BY-SA 4.0.",
        "(() => {",
        "  const { addVocab } = window.JLPT_EXT;",
    ]
    total = 0
    for level in LEVELS:
        values = list(grouped[level].values())
        total += len(values)
        payload = json.dumps(values, ensure_ascii=False, separators=(",", ":"))
        lines.append(f"  addVocab('{level}', {payload});")
        print(f"{level}: {len(values)} full-list vocabulary entries")
    lines.append("})();")
    Path(output_path).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"TOTAL: {total} generated entries; skipped: {skipped}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: build_full_vocab.py INPUT.db OUTPUT.js")
    build(sys.argv[1], sys.argv[2])
