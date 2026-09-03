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

    # Entry JSON already carries Chinese glosses in current Tomoshi releases.
    for sense in entry.get("senses") or []:
        for gloss in sense.get("glosses") or []:
            if gloss.get("lang") in ("zho", "zh", "zh-CN"):
                add(gloss.get("text"))

    # Prefer/complete with the dedicated Simplified-Chinese layer when present.
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

    # Keep cards concise while retaining several common senses.
    return out[:8]


def tag_to_pos(tag):
    text = str(tag or "").lower()
    # Map each JMdict POS tag independently. This avoids a secondary sense such
    # as an adverbial/particle use overriding the primary noun/verb sense.
    if "pronoun" in text:
        return "代词"
    if "noun" in text:
        return "名词"
    if "verb" in text:
        return "动词"
    if "adjective" in text or "adjectival" in text:
        return "形容词"
    if "adverb" in text:
        return "副词"
    if "conjunction" in text:
        return "接续词"
    if "interjection" in text:
        return "感叹词"
    if "counter" in text:
        return "助数词"
    if "prefix" in text:
        return "接头词"
    if "suffix" in text:
        return "接尾词"
    if "expression" in text:
        return "表达"
    if text.strip().startswith("particle") or text.strip() == "particle":
        return "助词"
    return None


def pos_label(entry):
    # JMdict senses are ordered. Prefer the first recognizable POS on the first
    # sense that provides one, rather than concatenating every sense together.
    for sense in entry.get("senses") or []:
        for tag in sense.get("pos") or []:
            label = tag_to_pos(tag)
            if label:
                return label
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
