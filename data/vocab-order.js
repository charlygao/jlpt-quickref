(() => {
  const DATA = window.JLPT_DATA;
  for (const level of ['N5', 'N4', 'N3', 'N2', 'N1']) {
    const list = DATA.vocab[level] || [];
    DATA.vocab[level] = list
      .map((item, index) => ({ item, index }))
      .sort((a, b) => {
        const ar = Number.isInteger(a.item.frequencyRank) && a.item.frequencyRank > 0 ? a.item.frequencyRank : Infinity;
        const br = Number.isInteger(b.item.frequencyRank) && b.item.frequencyRank > 0 ? b.item.frequencyRank : Infinity;
        if (ar !== br) return ar - br;
        const af = Number.isFinite(a.item.frequency) ? a.item.frequency : -1;
        const bf = Number.isFinite(b.item.frequency) ? b.item.frequency : -1;
        if (bf !== af) return bf - af;
        return a.index - b.index;
      })
      .map(x => x.item);
  }
})();
