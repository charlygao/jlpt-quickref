(() => {
  const DATA = window.JLPT_DATA;
  function addGrammarExamples(level, rows) {
    const byId = new Map((DATA.grammar[level] || []).map(item => [item.id, item]));
    for (const [id, examples] of rows) {
      const item = byId.get(id);
      if (!item) continue;
      item.examples ||= [];
      const seen = new Set(item.examples.map(ex => ex.jp));
      for (const ex of examples || []) {
        if (!ex?.jp || seen.has(ex.jp)) continue;
        seen.add(ex.jp);
        item.examples.push(ex);
      }
    }
  }
  window.JLPT_GRAMMAR_EXAMPLES = { addGrammarExamples };
})();
