(() => {
  const DATA = window.JLPT_DATA;
  const REQUIRED_POS_COMPONENTS = new Map([
    ['幾つ\u0000いくつ', ['名词', '副词']],
    ['後悔\u0000こうかい', ['名词', 'サ变']],
    ['一時\u0000いちじ', ['名词', '副词']],
  ]);

  function hash(text) {
    let h = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(36);
  }

  function posSpecificity(pos) {
    const text = String(pos || '');
    if (/五段|一段|サ变|サ変|カ变|カ変|自动词|他动词|い形容词|な形容词|の形容词|タルト形容词|名词・サ变|连体词/.test(text)) return 3;
    if (/动词|形容词|名词|副词|代词|助词|接续词|感叹词|助数词|接头词|接尾词|表达/.test(text)) return 2;
    return 1;
  }

  function applyRequiredPos(word, reading, pos) {
    const required = REQUIRED_POS_COMPONENTS.get(`${word}\u0000${reading}`);
    if (!required) return pos;

    const parts = pos && pos !== '词汇' ? String(pos).split('・') : [];
    for (const component of required) {
      if (parts.includes(component)) continue;
      if (component === '名词') parts.unshift(component);
      else if (component === 'サ变' && parts.includes('名词')) parts.splice(parts.indexOf('名词') + 1, 0, component);
      else parts.push(component);
    }
    return parts.join('・') || pos;
  }

  function addVocab(level, rows) {
    const list = DATA.vocab[level] || (DATA.vocab[level] = []);
    const byKey = new Map(list.map(x => [`${x.word}\u0000${x.reading}`, x]));
    for (const row of rows) {
      // Vocabulary imports intentionally contain no example fields. Examples
      // are maintained only in explicit human-reviewed example data files.
      const [word, reading, meaning, pos = '词汇', frequency = null, frequencyRank = null] = row;
      const key = `${word}\u0000${reading}`;
      if (!word) continue;
      const normalizedPos = applyRequiredPos(word, reading, pos);

      const existing = byKey.get(key);
      if (existing) {
        existing.pos = applyRequiredPos(word, reading, existing.pos);
        if (posSpecificity(normalizedPos) > posSpecificity(existing.pos)) existing.pos = normalizedPos;
        if (Number.isFinite(frequency)) existing.frequency = frequency;
        if (Number.isInteger(frequencyRank) && frequencyRank > 0) existing.frequencyRank = frequencyRank;
        continue;
      }

      const item = {
        id: `vx-${level.toLowerCase()}-${hash(key)}`,
        level,
        word,
        reading: reading || word,
        meaning,
        pos: normalizedPos,
        frequency: Number.isFinite(frequency) ? frequency : null,
        frequencyRank: Number.isInteger(frequencyRank) && frequencyRank > 0 ? frequencyRank : null,
        example: null,
        extended: true,
      };
      list.push(item);
      byKey.set(key, item);
    }
  }

  function addGrammar(level, rows) {
    const list = DATA.grammar[level] || (DATA.grammar[level] = []);
    const normalize = s => String(s).replace(/[～〜\s]/g, '');
    const seen = new Set(list.map(x => normalize(x.title)));
    for (const row of rows) {
      const [title, meaning, connection, jp, zh] = row;
      const key = normalize(title);
      if (!title || seen.has(key)) continue;
      seen.add(key);
      list.push({
        id: `gx-${level.toLowerCase()}-${hash(title)}`,
        level,
        title,
        meaning,
        connection,
        examples: [{ jp, zh }],
        extended: true,
      });
    }
  }

  window.JLPT_EXT = { addVocab, addGrammar };
})();
