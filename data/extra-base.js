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

  function posSpecificity(pos) {
    const text = String(pos || '');
    if (/五段|一段|サ变|サ変|カ变|カ変|自动词|他动词|い形容词|な形容词|の形容词|タルト形容词|名词・サ变|连体词/.test(text)) return 3;
    if (/动词|形容词|名词|副词|代词|助词|接续词|感叹词|助数词|接头词|接尾词|表达/.test(text)) return 2;
    return 1;
  }

  function addVocab(level, rows) {
    const list = DATA.vocab[level] || (DATA.vocab[level] = []);
    const byKey = new Map(list.map(x => [`${x.word}\u0000${x.reading}`, x]));
    for (const row of rows) {
      const [word, reading, meaning, pos = '词汇', exampleJp = '', exampleZh = ''] = row;
      const key = `${word}\u0000${reading}`;
      if (!word) continue;

      const existing = byKey.get(key);
      if (existing) {
        // Full dictionary data is loaded after the curated cards. Keep the
        // curated meaning/example, but use the more specific dictionary POS
        // (e.g. 动词 -> 五段动词・他动词) when it adds real information.
        if (posSpecificity(pos) > posSpecificity(existing.pos)) existing.pos = pos;
        continue;
      }

      const item = {
        id: `vx-${level.toLowerCase()}-${hash(key)}`,
        level,
        word,
        reading: reading || word,
        meaning,
        pos,
        example: exampleJp ? { jp: exampleJp, zh: exampleZh } : null,
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
