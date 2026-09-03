# Full JLPT vocabulary data — attribution & license

`data/full-vocab.js` is an adapted data extract generated from **Tomoshi Dictionary — Open Data Layer**, release `v2026-08-12`.

Source repository: https://github.com/tomoshi-app/tomoshi-dict-data

The source tables used by this project are:

- `entries` — JMdict-derived entry/forms/POS data
- `zh_defs` — Simplified-Chinese gloss translations
- `vocab_jlpt` — community JLPT level estimates

These tables are licensed under **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**. Accordingly, the adapted vocabulary data contained in `data/full-vocab.js` is also distributed under CC BY-SA 4.0.

License: https://creativecommons.org/licenses/by-sa/4.0/

## Attribution

- **JMdict** © Electronic Dictionary Research and Development Group (EDRDG), used under its CC BY-SA-compatible licensing terms.
- JLPT vocabulary-level metadata: Jonathan Waller's JLPT Resources, via `stephenmk/yomitan-jlpt-vocab`, as documented by the Tomoshi open-data project.
- Simplified-Chinese derived dictionary layers and database restructuring: **Tomoshi (Y1Z)**.

Please also refer to the upstream licensing and notices:

- https://github.com/tomoshi-app/tomoshi-dict-data/blob/main/LICENSE.md
- https://github.com/tomoshi-app/tomoshi-dict-data/blob/main/NOTICE.md

## Modifications made by jlpt-quickref

Compared with the upstream database, this project:

1. filters entries to records present in `vocab_jlpt` for N5–N1;
2. selects one preferred display form and a compatible kana reading per entry;
3. condenses Simplified-Chinese glosses into a short quick-reference meaning field;
4. maps detailed JMdict POS tags into broad Chinese learner-facing categories such as 名词、动词、形容词、副词;
5. merges duplicate `(word, reading)` records inside each JLPT level;
6. converts the result into a browser-loadable static JavaScript data file;
7. overlays independently curated entries from this repository first, so curated examples/wording remain preferred when duplicates exist.

JLPT does not publish an official exhaustive vocabulary list. The level labels here are community estimates and should be treated as study guidance rather than an official syllabus.
