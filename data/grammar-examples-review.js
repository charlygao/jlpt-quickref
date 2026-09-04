(() => {
  const DATA = window.JLPT_DATA;
  const revisions = [
    ['N3', 'gx-n3-1lhydvj', '今日は春らしく暖かく、少し暑っぽく感じます。', {
      jp: '彼は忘れっぽいので、予定は必ずメモしています。',
      zh: '他很健忘，所以总会把安排记下来。',
      covers: 'Vます去ます + っぽい'
    }],
    ['N2', 'g-n2-031', '合格できてうれしくてたまりません。', {
      jp: '子供の帰りが遅くて、心配でたまりません。',
      zh: '孩子回来得很晚，我担心得不得了。',
      covers: 'な形 + で + たまらない'
    }],
    ['N1', 'gx-n1-1ty80o5', '久しぶりに故郷へ帰れるので、うれしくてたまらない。', {
      jp: '試験の結果が気になってたまらない。',
      zh: '考试结果让我在意得不得了。',
      covers: 'Vて + たまらない'
    }],
    ['N1', 'gx-n1-1m6h4oz', '工事の音が朝からうるさくてかなわない。', {
      jp: '隣の犬が夜中まで吠えてかなわない。',
      zh: '隔壁的狗一直叫到半夜，实在让人受不了。',
      covers: 'Vて + かなわない'
    }]
  ];

  for (const [level, id, oldJp, replacement] of revisions) {
    const item = (DATA.grammar[level] || []).find(x => x.id === id);
    if (!item) continue;
    const index = (item.examples || []).findIndex(ex => ex.jp === oldJp);
    if (index >= 0) item.examples[index] = replacement;
  }
})();
