(() => {
  const DATA = window.JLPT_DATA;

  function hash(text) {
    let h = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
      h ^= text.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(36);
  }

  function addVocab(level, rows) {
    const list = DATA.vocab[level] || (DATA.vocab[level] = []);
    const seen = new Set(list.map(x => `${x.word}\u0000${x.reading}`));
    for (const row of rows) {
      const [word, reading, meaning, pos = '词汇', exampleJp = '', exampleZh = ''] = row;
      const key = `${word}\u0000${reading}`;
      if (!word || seen.has(key)) continue;
      seen.add(key);
      list.push({
        id: `vx-${level.toLowerCase()}-${hash(key)}`,
        level,
        word,
        reading: reading || word,
        meaning,
        pos,
        example: exampleJp ? { jp: exampleJp, zh: exampleZh } : null,
        extended: true,
      });
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
