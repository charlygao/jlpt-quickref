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

  // Keep the existing ID so saved mastery/follow state continues to apply.
  // This review layer runs after curated examples and connection labels.
  const kaneru = (DATA.grammar.N2 || []).find(x => x.id === 'gx-n2-1h2hgee');
  if (kaneru) {
    kaneru.meaning = '因立场、规定或心理上的困难，表示“难以……／无法……”。常用于委婉拒绝。';
    kaneru.connection = 'Vます去ます + かねる（礼貌形：かねます）。无需额外加「し」：答える → 答え + かねます；判断する → 判断し + かねます。「し」来自前面的する。自谦表达「お + Vます去ます + する」也按此规则接续：応える → お応えする → お応えし + かねます。';
    kaneru.examples = [
      {
        jp: '個人情報に関わるため、その質問には答えかねます。',
        zh: '由于涉及个人信息，那个问题我无法回答。',
        covers: '普通动词：答える → 答えます → 答え + かねます'
      },
      {
        jp: 'その件については、私からは判断しかねます。',
        zh: '关于那件事，我这边难以作出判断。',
        covers: 'する动词：判断する → 判断します → 判断し + かねます'
      },
      {
        jp: 'そのご要望にはお応えしかねます。',
        zh: '您的这一要求，我们恐怕无法满足。',
        covers: '自谦表达：お応えする → お応えします → お応えし + かねます'
      }
    ];
  }
})();
