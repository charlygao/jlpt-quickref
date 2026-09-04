(() => {
  const godanRuExceptions = new Set([
    '入る','走る','帰る','切る','知る','要る','減る','滑る','喋る','焦る','限る','握る','参る','混じる','交じる','遮る','覆る','翻る','嘲る','罵る','捻る','練る','蹴る','照る','散る','茂る','湿る','蘇る','滅入る'
  ]);

  const godanMap = {
    'う': {a:'わ',i:'い',e:'え',o:'お',te:'って',ta:'った'},
    'く': {a:'か',i:'き',e:'け',o:'こ',te:'いて',ta:'いた'},
    'ぐ': {a:'が',i:'ぎ',e:'げ',o:'ご',te:'いで',ta:'いだ'},
    'す': {a:'さ',i:'し',e:'せ',o:'そ',te:'して',ta:'した'},
    'つ': {a:'た',i:'ち',e:'て',o:'と',te:'って',ta:'った'},
    'ぬ': {a:'な',i:'に',e:'ね',o:'の',te:'んで',ta:'んだ'},
    'ぶ': {a:'ば',i:'び',e:'べ',o:'ぼ',te:'んで',ta:'んだ'},
    'む': {a:'ま',i:'み',e:'め',o:'も',te:'んで',ta:'んだ'},
    'る': {a:'ら',i:'り',e:'れ',o:'ろ',te:'って',ta:'った'},
  };

  const specialMasuStem = {
    'くださる':'ください',
    'なさる':'なさい',
    'いらっしゃる':'いらっしゃい',
    'おっしゃる':'おっしゃい',
    'ござる':'ござい',
  };

  function replaceLast(word, ending) {
    return word.slice(0, -1) + ending;
  }

  function inferClass(item) {
    const word = String(item.word || '');
    const reading = String(item.reading || word);
    const pos = String(item.pos || '');
    if (pos.includes('名词・サ变') || pos.includes('名词/する')) return 'suru-noun';
    if (pos.includes('五段')) return 'godan';
    if (pos.includes('一段')) return 'ichidan';
    if (pos.includes('サ变') || pos.includes('サ変')) return 'suru';
    if (pos.includes('カ变') || pos.includes('カ変')) return 'kuru';
    if (pos.includes('い形容词') || pos.includes('い形')) return 'i-adj';
    if (pos.includes('な形容词') || pos.includes('な形')) return 'na-adj';
    if (pos === '形容词') return word.endsWith('い') ? 'i-adj' : 'na-adj';
    if (!pos.includes('动词') && !pos.includes('動詞')) return null;
    if (word.endsWith('する')) return 'suru';
    if (word === '来る' || reading === 'くる') return 'kuru';
    if (!reading.endsWith('る') || godanRuExceptions.has(word)) return 'godan';
    const prev = [...reading].at(-2) || '';
    const ieRow = 'いきしちにひみりぎじびぴえけせてねへめれげぜでべぺ';
    return ieRow.includes(prev) ? 'ichidan' : 'godan';
  }

  function verbRows({dict, stem, politeStem, negative, te, ta, potential, volitional, imperative, conditional, passive, causative, causativePassive, causativePassiveShort = null}) {
    const rows = [
      ['辞书形', dict],
      ['ます词干 / 连用形', stem],
      ['ます形', politeStem + 'ます'],
      ['ない形', negative],
      ['て形', te],
      ['た形', ta],
      ['可能形', potential],
      ['意向形', volitional],
      ['命令形', imperative],
      ['禁止形', dict + 'な'],
      ['ば形', conditional],
      ['たら形', ta + 'ら'],
      ['被动形', passive],
      ['使役形', causative],
      ['使役被动形', causativePassive],
      ['たい形', stem + 'たい'],
    ];
    if (causativePassiveShort !== null) {
      rows.splice(rows.length - 1, 0, ['使役被动形（简化）', causativePassiveShort]);
    }
    return rows;
  }

  function godanRows(word) {
    const m = godanMap[word.at(-1)];
    if (!m) return [];
    const a = replaceLast(word, m.a);
    const i = replaceLast(word, m.i);
    const e = replaceLast(word, m.e);
    const o = replaceLast(word, m.o);
    let te = replaceLast(word, m.te);
    let ta = replaceLast(word, m.ta);
    if (word === '行く') { te = '行って'; ta = '行った'; }
    if (['問う','請う','乞う'].includes(word)) {
      te = word.slice(0,-1) + 'うて';
      ta = word.slice(0,-1) + 'うた';
    }
    const negative = word === 'ある' ? 'ない' : a + 'ない';
    const potential = word === 'ある' ? '—' : e + 'る';
    const passive = word === 'ある' ? '—' : a + 'れる';
    const causative = word === 'ある' ? '—' : a + 'せる';
    const causativePassive = word === 'ある' ? '—' : a + 'せられる';
    const causativePassiveShort = word === 'ある'
      ? '—'
      : word.endsWith('す')
        ? causativePassive + '（す结尾不缩约）'
        : a + 'される';
    const politeStem = specialMasuStem[word] || i;
    return verbRows({
      dict: word, stem: i, politeStem, negative, te, ta,
      potential, volitional: o + 'う', imperative: e,
      conditional: e + 'ば', passive, causative, causativePassive, causativePassiveShort
    });
  }

  function ichidanRows(word) {
    const stem = word.endsWith('る') ? word.slice(0,-1) : word;
    return verbRows({
      dict: word, stem, politeStem: stem,
      negative: stem + 'ない', te: stem + 'て', ta: stem + 'た',
      potential: stem + 'られる', volitional: stem + 'よう',
      imperative: stem + 'ろ', conditional: stem + 'れば', passive: stem + 'られる',
      causative: stem + 'させる', causativePassive: stem + 'させられる'
    });
  }

  function suruRows(word, nounMode) {
    const prefix = nounMode ? word : (word.endsWith('する') ? word.slice(0,-2) : '');
    const dict = prefix + 'する';
    return verbRows({
      dict, stem: prefix + 'し', politeStem: prefix + 'し',
      negative: prefix + 'しない', te: prefix + 'して', ta: prefix + 'した',
      potential: prefix + 'できる', volitional: prefix + 'しよう',
      imperative: prefix + 'しろ／' + prefix + 'せよ', conditional: prefix + 'すれば', passive: prefix + 'される',
      causative: prefix + 'させる', causativePassive: prefix + 'させられる'
    });
  }

  function kuruRows(word) {
    const prefix = word && word.endsWith('来る') ? word.slice(0,-2) : '';
    const dict = prefix + '来る（くる）';
    return [
      ['辞书形', dict],
      ['ます词干 / 连用形', prefix + '来（き）'],
      ['ます形', prefix + '来ます（きます）'],
      ['ない形', prefix + '来ない（こない）'],
      ['て形', prefix + '来て（きて）'],
      ['た形', prefix + '来た（きた）'],
      ['可能形', prefix + '来られる（こられる）'],
      ['意向形', prefix + '来よう（こよう）'],
      ['命令形', prefix + '来い（こい）'],
      ['禁止形', prefix + '来るな（くるな）'],
      ['ば形', prefix + '来れば（くれば）'],
      ['たら形', prefix + '来たら（きたら）'],
      ['被动形', prefix + '来られる（こられる）'],
      ['使役形', prefix + '来させる（こさせる）'],
      ['使役被动形', prefix + '来させられる（こさせられる）'],
      ['たい形', prefix + '来たい（きたい）'],
    ];
  }

  function iAdjectiveRows(word) {
    const special = word === 'いい' || word === '良い';
    const stem = special ? 'よ' : word.slice(0,-1);
    return [
      ['基本形', word],
      ['礼貌形', word + 'です'],
      ['否定形', stem + 'くない'],
      ['礼貌否定', stem + 'くないです／' + stem + 'くありません'],
      ['过去形', stem + 'かった'],
      ['礼貌过去', stem + 'かったです'],
      ['过去否定', stem + 'くなかった'],
      ['礼貌过去否定', stem + 'くなかったです／' + stem + 'くありませんでした'],
      ['て形', stem + 'くて'],
      ['副词形', stem + 'く'],
      ['ば形', stem + 'ければ'],
      ['そう形（样态）', stem + 'そうだ'],
      ['すぎる形', stem + 'すぎる'],
    ];
  }

  function naAdjectiveRows(word) {
    return [
      ['基本形', word + 'だ'],
      ['礼貌形', word + 'です'],
      ['否定形', word + 'ではない／' + word + 'じゃない'],
      ['礼貌否定', word + 'ではありません／' + word + 'じゃありません'],
      ['过去形', word + 'だった'],
      ['礼貌过去', word + 'でした'],
      ['过去否定', word + 'ではなかった／' + word + 'じゃなかった'],
      ['礼貌过去否定', word + 'ではありませんでした／' + word + 'じゃありませんでした'],
      ['连体形', word + 'な + N'],
      ['て形', word + 'で'],
      ['副词形', word + 'に'],
      ['条件形', word + 'なら（ば）'],
      ['そう形（样态）', word + 'そうだ'],
      ['すぎる形', word + 'すぎる'],
    ];
  }

  function rows(item) {
    const klass = inferClass(item);
    const word = String(item.word || '');
    if (klass === 'godan') return godanRows(word);
    if (klass === 'ichidan') return ichidanRows(word);
    if (klass === 'suru') return suruRows(word, false);
    if (klass === 'suru-noun') return suruRows(word, true);
    if (klass === 'kuru') return kuruRows(word);
    if (klass === 'i-adj') return iAdjectiveRows(word);
    if (klass === 'na-adj') return naAdjectiveRows(word);
    return [];
  }

  window.JLPT_CONJUGATION = { rows, inferClass };
})();
