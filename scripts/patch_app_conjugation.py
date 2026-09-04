#!/usr/bin/env python3
from pathlib import Path

path = Path('app.js')
text = path.read_text(encoding='utf-8')
needle = "  function conjugationRows(item) {\n"
inject = "  function conjugationRows(item) {\n    if (window.JLPT_CONJUGATION?.rows) return window.JLPT_CONJUGATION.rows(item);\n"

if 'window.JLPT_CONJUGATION?.rows' in text:
    print('Integration already present.')
elif needle in text:
    path.write_text(text.replace(needle, inject, 1), encoding='utf-8')
    print('Integrated comprehensive conjugation library.')
else:
    raise SystemExit('conjugationRows function not found')
