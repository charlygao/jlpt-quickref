(() => {
  const DATA = window.JLPT_DATA;
  const TERM_DATA = window.JLPT_TERMS || { terms: {}, aliases: {} };
  const STORAGE_KEY = 'jlptQuickRef.v2';
  const THEME_KEY = 'jlptQuickRef.theme';
  const VOCAB_BATCH_SIZE = 80;

  const state = {
    type: 'grammar',
    level: 'N5',
    query: '',
    filter: 'all',
    mastered: new Set(),
    followed: new Set(),
    lastSeen: {},
    startIndex: 0,
    visibleCount: VOCAB_BATCH_SIZE,
  };
  const sessionResume = {};

  const els = {
    contentList: document.getElementById('contentList'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    grammarCount: document.getElementById('grammarCount'),
    vocabCount: document.getElementById('vocabCount'),
    masteredCount: document.getElementById('masteredCount'),
    progressLabel: document.getElementById('progressLabel'),
    progressPercent: document.getElementById('progressPercent'),
    progressBar: document.getElementById('progressBar'),
    loadMoreWrap: document.getElementById('loadMoreWrap'),
    loadMoreText: document.getElementById('loadMoreText'),
    loadMoreButton: document.getElementById('loadMoreButton'),
    themeToggle: document.getElementById('themeToggle'),
    backToTop: document.getElementById('backToTop'),
    filterToggle: document.getElementById('filterToggle'),
    filterIcon: document.getElementById('filterIcon'),
    filterLabel: document.getElementById('filterLabel'),
    filterMenu: document.getElementById('filterMenu'),
    resumeBookmark: document.getElementById('resumeBookmark'),
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (saved.type && DATA[saved.type]) state.type = saved.type;
      if (saved.level && DATA.grammar[saved.level]) state.level = saved.level;
      state.mastered = new Set(Array.isArray(saved.mastered) ? saved.mastered : []);
      state.followed = new Set(Array.isArray(saved.followed) ? saved.followed : []);
      state.lastSeen = saved.lastSeen || {};
    } catch (_) {}
    Object.assign(sessionResume, state.lastSeen);

    const theme = localStorage.getItem(THEME_KEY);
    if (theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark');
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      type: state.type,
      level: state.level,
      mastered: [...state.mastered],
      followed: [...state.followed],
      lastSeen: state.lastSeen,
    }));
  }

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  function flatCount(group) {
    return Object.values(group).reduce((n, items) => n + items.length, 0);
  }

  function currentKey() {
    return `${state.type}:${state.level}`;
  }

  function resetWindow() {
    state.startIndex = 0;
    state.visibleCount = VOCAB_BATCH_SIZE;
  }

  function itemSearchText(item) {
    if (state.type === 'grammar') {
      return [item.title, item.meaning, item.connection, ...(item.examples || []).flatMap(ex => [ex.jp, ex.zh, ex.covers])]
        .join('\n').toLowerCase();
    }
    return [item.word, item.reading, item.meaning, item.pos, detailedType(item), item.example?.jp, item.example?.zh]
      .join('\n').toLowerCase();
  }

  function getCurrentItems() {
    const items = DATA[state.type][state.level] || [];
    const q = state.query.trim().toLowerCase();
    return items.filter(item => {
      if (q && !itemSearchText(item).includes(q)) return false;
      if (state.filter === 'unmastered') return !state.mastered.has(item.id);
      if (state.filter === 'followed') return state.followed.has(item.id);
      return true;
    });
  }

  function studyButtons(item) {
    const mastered = state.mastered.has(item.id);
    const followed = state.followed.has(item.id);
    return `
      <button type="button" class="status-btn mastery-btn ${mastered ? 'is-active' : ''}" data-status="mastered" data-item-id="${escapeHtml(item.id)}" aria-pressed="${mastered}"><span aria-hidden="true">✓</span> 掌握</button>
      <button type="button" class="status-btn follow-btn ${followed ? 'is-active' : ''}" data-status="followed" data-item-id="${escapeHtml(item.id)}" aria-pressed="${followed}"><span aria-hidden="true">★</span> 关注</button>`;
  }

  // ---- Grammar-element quick reference -------------------------------------------------
  const termLabels = [...new Set([
    ...Object.keys(TERM_DATA.terms || {}),
    ...Object.keys(TERM_DATA.aliases || {}),
  ])].sort((a, b) => b.length - a.length);
  const termPattern = termLabels.length
    ? new RegExp(termLabels.map(x => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g')
    : null;

  function canonicalTerm(label) {
    return TERM_DATA.aliases?.[label] || label;
  }

  function decorateConnection(text) {
    text = String(text ?? '');
    if (!termPattern) return escapeHtml(text);
    let html = '';
    let last = 0;
    termPattern.lastIndex = 0;
    for (const match of text.matchAll(termPattern)) {
      const i = match.index;
      const label = match[0];
      html += escapeHtml(text.slice(last, i));
      html += `<button type="button" class="grammar-term" data-term="${escapeHtml(canonicalTerm(label))}">${escapeHtml(label)}</button>`;
      last = i + label.length;
    }
    html += escapeHtml(text.slice(last));
    return html;
  }

  function grammarCard(item, index) {
    return `
      <article class="card track-card" id="${item.id}" data-id="${item.id}">
        <div class="card-head">
          <div class="card-title-wrap">
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          <div class="card-actions">${studyButtons(item)}</div>
        </div>
        <p class="meaning">${escapeHtml(item.meaning)}</p>
        <div class="meta-grid single">
          <div class="meta-box connection-box"><label>接续</label><span>${decorateConnection(item.connection)}</span></div>
        </div>
        <div class="examples">
          ${(item.examples || []).map(ex => `<div class="example">
            ${ex.covers ? `<div class="example-cover">${escapeHtml(ex.covers)}</div>` : ''}
            <div class="example-jp">${escapeHtml(ex.jp)}</div>
            <div class="example-zh">${escapeHtml(ex.zh)}</div>
          </div>`).join('')}
        </div>
        <div class="card-internal-meta"><span>${item.level}</span><span aria-hidden="true">·</span><span>语法 ${String(index + 1).padStart(2, '0')}</span></div>
      </article>`;
  }

  // ---- Vocabulary detail type + conjugation ---------------------------------------------
  const godanRuExceptions = new Set([
    '入る','走る','帰る','切る','知る','要る','減る','滑る','喋る','焦る','限る','握る','参る','混じる','交じる','遮る','覆る','翻る','嘲る','罵る','捻る','練る','蹴る','照る','散る','茂る','湿る','蘇る','滅入る'
  ]);

  function inferVerbClass(item) {
    const word = String(item.word || '');
    const reading = String(item.reading || word);
    const p = String(item.pos || '');
    if (p.includes('五段')) return 'godan';
    if (p.includes('一段')) return 'ichidan';
    if (p.includes('サ变') || p.includes('サ変')) return 'suru';
    if (p.includes('カ变') || p.includes('カ変')) return 'kuru';
    if (p.includes('名词・サ变') || p.includes('名词/する')) return 'suru-noun';
    if (!p.includes('动词') && !p.includes('動詞')) return null;
    if (word.endsWith('する')) return 'suru';
    if (word === '来る' || reading === 'くる') return 'kuru';
    if (!reading.endsWith('る')) return 'godan';
    if (godanRuExceptions.has(word)) return 'godan';
    const prev = [...reading].at(-2) || '';
    const ieRow = 'いきしちにひみりぎじびぴえけせてねへめれげぜでべぺ';
    return ieRow.includes(prev) ? 'ichidan' : 'godan';
  }

  function detailedType(item) {
    const p = String(item.pos || '词汇');
    if (/五段|一段|サ变|サ変|カ变|カ変|い形容词|な形容词|の形容词|タルト形容词|连体词|名词・サ变/.test(p)) return p;
    if (p.includes('名词/する')) return '名词・サ变';
    if (p === '形容词') return String(item.word || '').endsWith('い') ? 'い形容词' : 'な形容词';
    if (p.includes('い形')) return 'い形容词';
    if (p.includes('な形')) return p.includes('名词') ? '名词・な形容词' : 'な形容词';
    const klass = inferVerbClass(item);
    if (klass === 'godan') return '五段动词';
    if (klass === 'ichidan') return '一段动词';
    if (klass === 'suru') return 'サ变动词';
    if (klass === 'kuru') return 'カ变动词';
    if (klass === 'suru-noun') return '名词・サ变';
    return p;
  }

  function isInflectable(item) {
    // Only show the control when the conjugator can really produce forms.
    // This prevents a malformed POS from creating a dead button.
    return conjugationRows(item).length > 0;
  }

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

  function replaceLast(word, kana) {
    return word.slice(0, -1) + kana;
  }

  function godanForms(word) {
    const end = word.at(-1);
    const m = godanMap[end];
    if (!m) return null;
    const a = replaceLast(word, m.a);
    const i = replaceLast(word, m.i);
    const e = replaceLast(word, m.e);
    const o = replaceLast(word, m.o);
    let te = replaceLast(word, m.te);
    let ta = replaceLast(word, m.ta);
    if (word === '行く') { te = '行って'; ta = '行った'; }
    if (['問う','請う','乞う'].includes(word)) { te = word.slice(0,-1) + 'うて'; ta = word.slice(0,-1) + 'うた'; }
    const honorificMasu = {
      'くださる':'くださいます','なさる':'なさいます','いらっしゃる':'いらっしゃいます','おっしゃる':'おっしゃいます','ござる':'ございます'
    };
    const negative = word === 'ある' ? 'ない' : a + 'ない';
    const potential = word === 'ある' ? '—' : e + 'る';
    const passive = word === 'ある' ? '—' : a + 'れる';
    const causative = word === 'ある' ? '—' : a + 'せる';
    const causativePassive = word === 'ある' ? '—' : a + 'せられる';
    return [
      ['辞书形', word], ['ます形', honorificMasu[word] || i + 'ます'], ['ない形', negative],
      ['て形', te], ['た形', ta], ['可能形', potential], ['意向形', o + 'う'],
      ['命令形', e], ['ば形', e + 'ば'], ['被动形', passive], ['使役形', causative], ['使役被动形', causativePassive]
    ];
  }

  function ichidanForms(word) {
    const stem = word.endsWith('る') ? word.slice(0,-1) : word;
    return [
      ['辞书形', word], ['ます形', stem + 'ます'], ['ない形', stem + 'ない'], ['て形', stem + 'て'], ['た形', stem + 'た'],
      ['可能形', stem + 'られる'], ['意向形', stem + 'よう'], ['命令形', stem + 'ろ'], ['ば形', stem + 'れば'],
      ['被动形', stem + 'られる'], ['使役形', stem + 'させる'], ['使役被动形', stem + 'させられる']
    ];
  }

  function suruForms(baseWord, nounMode = false) {
    const noun = nounMode ? baseWord : (baseWord.endsWith('する') ? baseWord.slice(0,-2) : '');
    const w = nounMode ? noun + 'する' : baseWord;
    const prefix = w.endsWith('する') ? w.slice(0,-2) : '';
    return [
      ['辞书形', w], ['ます形', prefix + 'します'], ['ない形', prefix + 'しない'], ['て形', prefix + 'して'], ['た形', prefix + 'した'],
      ['可能形', prefix + 'できる'], ['意向形', prefix + 'しよう'], ['命令形', prefix + 'しろ／' + prefix + 'せよ'], ['ば形', prefix + 'すれば'],
      ['被动形', prefix + 'される'], ['使役形', prefix + 'させる'], ['使役被动形', prefix + 'させられる']
    ];
  }

  function kuruForms(word) {
    const display = word || '来る';
    const prefix = display.endsWith('来る') ? display.slice(0,-2) : '';
    return [
      ['辞书形', prefix + '来る（くる）'], ['ます形', prefix + '来ます（きます）'], ['ない形', prefix + '来ない（こない）'],
      ['て形', prefix + '来て（きて）'], ['た形', prefix + '来た（きた）'], ['可能形', prefix + '来られる（こられる）'],
      ['意向形', prefix + '来よう（こよう）'], ['命令形', prefix + '来い（こい）'], ['ば形', prefix + '来れば（くれば）'],
      ['被动形', prefix + '来られる（こられる）'], ['使役形', prefix + '来させる（こさせる）'], ['使役被动形', prefix + '来させられる（こさせられる）']
    ];
  }

  function iAdjectiveForms(word) {
    const special = word === 'いい' || word === '良い';
    const stem = special ? 'よ' : word.slice(0,-1);
    return [
      ['基本形', word], ['礼貌形', word + 'です'], ['否定形', stem + 'くない'], ['过去形', stem + 'かった'],
      ['过去否定', stem + 'くなかった'], ['て形', stem + 'くて'], ['副词形', stem + 'く'], ['ば形', stem + 'ければ']
    ];
  }

  function naAdjectiveForms(word) {
    return [
      ['基本形', word + 'だ'], ['礼貌形', word + 'です'], ['否定形', word + 'ではない'], ['过去形', word + 'だった'],
      ['过去否定', word + 'ではなかった'], ['连体形', word + 'な + N'], ['て形', word + 'で'], ['副词形', word + 'に'], ['条件形', word + 'なら']
    ];
  }

  function conjugationRows(item) {
    if (window.JLPT_CONJUGATION?.rows) return window.JLPT_CONJUGATION.rows(item);
    const type = detailedType(item);
    const word = String(item.word || '');
    const klass = inferVerbClass(item);
    if (type.includes('名词・サ变') || klass === 'suru-noun') return suruForms(word, true);
    if (klass === 'godan') return godanForms(word) || [];
    if (klass === 'ichidan') return ichidanForms(word);
    if (klass === 'suru') return suruForms(word, false);
    if (klass === 'kuru') return kuruForms(word);
    if (type.includes('い形容词')) return iAdjectiveForms(word);
    if (type.includes('な形容词')) return naAdjectiveForms(word);
    return [];
  }

  function vocabCard(item, index) {
    const type = detailedType(item);
    const inflectable = isInflectable(item);
    const exampleHtml = item.example?.jp ? `
        <div class="examples">
          <div class="example"><div class="example-jp">${escapeHtml(item.example.jp)}</div><div class="example-zh">${escapeHtml(item.example.zh)}</div></div>
        </div>` : '';
    const posTag = inflectable
      ? `<button type="button" class="vocab-pos vocab-pos-action" data-conjugate-id="${escapeHtml(item.id)}" aria-label="${escapeHtml(type)}，查看${escapeHtml(item.word)}的变形一览" title="查看变形一览">${escapeHtml(type)}</button>`
      : `<span class="vocab-pos">${escapeHtml(type)}</span>`;
    return `
      <article class="card track-card" id="${item.id}" data-id="${item.id}">
        <div class="card-head">
          <div class="card-title-wrap">
            <div class="vocab-line"><span class="vocab-word">${escapeHtml(item.word)}</span><span class="vocab-reading">${escapeHtml(item.reading)}</span>${posTag}</div>
          </div>
          <div class="card-actions">${studyButtons(item)}</div>
        </div>
        <p class="meaning">${escapeHtml(item.meaning || '—')}</p>
        ${exampleHtml}
        <div class="card-internal-meta"><span>${item.level}</span><span aria-hidden="true">·</span><span>词汇 ${String(index + 1).padStart(2, '0')}</span></div>
      </article>`;
  }

  // ---- Shared modal --------------------------------------------------------------------
  let modal;
  let lockedScrollY = 0;
  let modalReturnFocus = null;
  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.hidden = true;
    modal.innerHTML = `
      <section class="info-modal" role="dialog" aria-modal="true" aria-labelledby="infoModalTitle">
        <div class="modal-handle"></div>
        <header class="modal-head"><div><span class="modal-eyebrow">Quick Reference</span><h3 id="infoModalTitle"></h3></div><button type="button" class="modal-close" aria-label="关闭">×</button></header>
        <div class="modal-body"></div>
      </section>`;
    document.body.appendChild(modal);
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    modal.addEventListener('touchmove', e => { if (e.target === modal) e.preventDefault(); }, { passive: false });
    return modal;
  }

  function openModal(title, html) {
    const el = ensureModal();
    const wasClosed = el.hidden;
    el.querySelector('#infoModalTitle').textContent = title;
    el.querySelector('.modal-body').innerHTML = html;
    el.querySelector('.info-modal').scrollTop = 0;
    el.hidden = false;
    if (wasClosed) {
      modalReturnFocus = document.activeElement;
      lockedScrollY = window.scrollY;
      document.documentElement.classList.add('modal-open');
      document.body.classList.add('modal-open');
      document.body.style.top = `-${lockedScrollY}px`;
    }
    el.querySelector('.modal-close').focus({ preventScroll: true });
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, lockedScrollY);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
    modalReturnFocus?.focus?.({ preventScroll: true });
    modalReturnFocus = null;
  }

  function openTermModal(term) {
    const info = TERM_DATA.terms?.[term];
    if (!info) return;
    const rules = (info.rules || []).map(x => `<li>${escapeHtml(x)}</li>`).join('');
    const examples = (info.examples || []).map(x => `<code>${escapeHtml(x)}</code>`).join('');
    openModal(term, `
      <p class="modal-summary">${escapeHtml(info.summary || '')}</p>
      ${rules ? `<section class="modal-section"><h4>定义与变形</h4><ul>${rules}</ul></section>` : ''}
      ${examples ? `<section class="modal-section"><h4>例</h4><div class="term-examples">${examples}</div></section>` : ''}
    `);
  }

  function findVocab(id) {
    for (const level of Object.keys(DATA.vocab)) {
      const item = DATA.vocab[level].find(x => x.id === id);
      if (item) return item;
    }
    return null;
  }

  function openConjugationModal(item) {
    const rows = conjugationRows(item);
    if (!rows.length) return;
    const type = detailedType(item);
    openModal(`${item.word} · 变形一览`, `
      <div class="conj-intro"><span class="vocab-reading">${escapeHtml(item.reading)}</span><span class="vocab-pos">${escapeHtml(type)}</span></div>
      <div class="conj-table">
        ${rows.map(([label, form]) => `<div class="conj-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(form)}</strong></div>`).join('')}
      </div>
      <p class="modal-note">现代标准日语速查。部分形式会因语义、语体或动词自身性质而较少实际使用；请结合例句判断。</p>
    `);
  }

  function updateStats() {
    els.grammarCount.textContent = flatCount(DATA.grammar).toLocaleString();
    els.vocabCount.textContent = flatCount(DATA.vocab).toLocaleString();
    els.masteredCount.textContent = state.mastered.size.toLocaleString();

    const items = DATA[state.type][state.level] || [];
    const mastered = items.filter(x => state.mastered.has(x.id)).length;
    const percent = items.length ? Math.round(mastered / items.length * 100) : 0;
    els.progressLabel.textContent = `${state.level} · ${state.type === 'grammar' ? '语法' : '词汇'}`;
    els.progressPercent.textContent = `${percent}% · ${mastered}/${items.length}`;
    els.progressBar.style.width = `${percent}%`;
  }

  const FILTER_LABELS = {
    all: '显示全部',
    unmastered: '仅显示未掌握',
    followed: '仅显示关注',
  };
  const FILTER_ICONS = {
    all: '☷',
    unmastered: '○',
    followed: '★',
  };

  function updateFilterControls() {
    const label = FILTER_LABELS[state.filter];
    els.filterIcon.textContent = FILTER_ICONS[state.filter];
    els.filterLabel.textContent = label;
    els.filterToggle.setAttribute('aria-label', `筛选：${label}`);
    els.filterToggle.title = `筛选：${label}`;
    document.querySelectorAll('[data-filter]').forEach(button => {
      const active = button.dataset.filter === state.filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-checked', String(active));
    });
  }

  function setFilterMenuOpen(open, { focus = false } = {}) {
    els.filterMenu.hidden = !open;
    els.filterToggle.setAttribute('aria-expanded', String(open));
    if (open && focus) {
      (els.filterMenu.querySelector('.is-active') || els.filterMenu.querySelector('button'))?.focus();
    }
  }

  function updateControls() {
    document.querySelectorAll('.segment').forEach(x => x.classList.toggle('is-active', x.dataset.type === state.type));
    document.querySelectorAll('.level-chip').forEach(x => x.classList.toggle('is-active', x.dataset.level === state.level));
  }

  function updateLoadMore(total, start, end) {
    if (!els.loadMoreWrap) return;
    const remaining = Math.max(0, total - end);
    const before = start;
    if (state.type !== 'vocab' || state.query || (!remaining && !before)) {
      els.loadMoreWrap.hidden = true;
      return;
    }
    els.loadMoreWrap.hidden = false;
    els.loadMoreText.textContent = before
      ? `从第 ${start + 1} 条继续 · 后面还有 ${remaining.toLocaleString()} 条`
      : `已显示 ${end.toLocaleString()} / ${total.toLocaleString()} · 还有 ${remaining.toLocaleString()} 条`;
    els.loadMoreButton.hidden = remaining === 0;
  }

  function itemDisplayLabel(item) {
    return state.type === 'grammar' ? item.title : `${item.word}（${item.reading}）`;
  }

  function updateBookmarkControl() {
    const resumeId = sessionResume[currentKey()];
    const item = resumeId
      ? (DATA[state.type][state.level] || []).find(candidate => candidate.id === resumeId)
      : null;
    const label = item
      ? `跳转到上次阅读位置：${itemDisplayLabel(item)}`
      : '暂无上次阅读位置';
    els.resumeBookmark.disabled = !item;
    els.resumeBookmark.setAttribute('aria-label', label);
    els.resumeBookmark.title = label;
  }

  let observer;
  function attachObserver() {
    observer?.disconnect();
    const cards = [...document.querySelectorAll('.track-card')];
    if (!cards.length) return;
    observer = new IntersectionObserver(entries => {
      const seen = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!seen) return;
      state.lastSeen[currentKey()] = seen.target.dataset.id;
      saveState();
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
    cards.forEach(c => observer.observe(c));
  }

  function render({ reset = false } = {}) {
    if (reset) resetWindow();
    updateControls();
    updateFilterControls();
    const allItems = getCurrentItems();
    const start = state.type === 'vocab' ? Math.min(state.startIndex, allItems.length) : 0;
    const end = state.type === 'vocab' ? Math.min(allItems.length, start + state.visibleCount) : allItems.length;
    const visibleItems = allItems.slice(start, end);
    els.contentList.innerHTML = visibleItems.map((item, i) => state.type === 'grammar' ? grammarCard(item, start + i) : vocabCard(item, start + i)).join('');
    els.emptyState.hidden = allItems.length !== 0;
    updateLoadMore(allItems.length, start, end);
    updateStats();
    updateBookmarkControl();
    attachObserver();
  }

  function ensureItemRendered(id) {
    if (document.getElementById(id) || state.type !== 'vocab') return;
    const items = getCurrentItems();
    const index = items.findIndex(item => item.id === id);
    if (index < 0) return;
    state.startIndex = Math.max(0, index - 8);
    state.visibleCount = VOCAB_BATCH_SIZE;
    render();
  }

  function jumpToItem(id, { auto = false } = {}) {
    if (!id) return;
    ensureItemRendered(id);
    const target = document.getElementById(id);
    if (!target) return;
    if (auto) {
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (auto) {
      setTimeout(() => target.animate([
        { boxShadow: '0 0 0 0 rgba(91,91,214,0)' },
        { boxShadow: '0 0 0 5px rgba(91,91,214,.20)' },
        { boxShadow: '' }
      ], { duration: 900, easing: 'ease-out' }), 80);
    }
  }

  function jumpToSaved({ auto = false } = {}) {
    const id = sessionResume[currentKey()] || state.lastSeen[currentKey()];
    if (!id) return;
    if (state.query || state.filter !== 'all') {
      state.query = '';
      state.filter = 'all';
      els.searchInput.value = '';
      const compactSearchInput = document.getElementById('compactSearchInput');
      if (compactSearchInput) compactSearchInput.value = '';
      resetWindow();
      render();
    }
    jumpToItem(id, { auto });
  }

  function captureCurrentResumeMarker() {
    const id = state.lastSeen[currentKey()];
    if (id) sessionResume[currentKey()] = id;
  }

  document.querySelectorAll('.segment').forEach(btn => btn.addEventListener('click', () => {
    captureCurrentResumeMarker();
    state.type = btn.dataset.type;
    state.query = '';
    els.searchInput.value = '';
    resetWindow(); saveState(); render();
    if (!document.body.classList.contains('compact-header')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }));

  document.querySelectorAll('.level-chip').forEach(btn => btn.addEventListener('click', () => {
    captureCurrentResumeMarker();
    state.level = btn.dataset.level;
    state.query = '';
    els.searchInput.value = '';
    resetWindow(); saveState(); render();
    if (!document.body.classList.contains('compact-header')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }));

  let searchTimer;
  els.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.query = e.target.value; render({ reset: true }); }, 120);
  });

  els.contentList.addEventListener('click', (e) => {
    const term = e.target.closest('[data-term]');
    if (term) { openTermModal(term.dataset.term); return; }
    const conj = e.target.closest('[data-conjugate-id]');
    if (conj) { const item = findVocab(conj.dataset.conjugateId); if (item) openConjugationModal(item); return; }
    const btn = e.target.closest('[data-status][data-item-id]');
    if (!btn) return;
    const id = btn.dataset.itemId;
    const collection = btn.dataset.status === 'mastered' ? state.mastered : state.followed;
    collection.has(id) ? collection.delete(id) : collection.add(id);
    saveState();
    render();
  });

  els.filterToggle.addEventListener('click', () => {
    const open = els.filterToggle.getAttribute('aria-expanded') !== 'true';
    setFilterMenuOpen(open, { focus: open });
  });
  els.filterMenu.addEventListener('click', e => {
    const option = e.target.closest('[data-filter]');
    if (!option) return;
    state.filter = option.dataset.filter;
    setFilterMenuOpen(false);
    resetWindow();
    render();
    els.filterToggle.focus({ preventScroll: true });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.floating-actions')) setFilterMenuOpen(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (modal && !modal.hidden) closeModal();
    else setFilterMenuOpen(false);
  });
  els.loadMoreButton?.addEventListener('click', () => { state.visibleCount += VOCAB_BATCH_SIZE; render(); });
  els.resumeBookmark.addEventListener('click', () => jumpToSaved());
  els.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, document.body.classList.contains('dark') ? 'dark' : 'light');
  });
  els.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  loadState();
  render();
  requestAnimationFrame(() => requestAnimationFrame(() => jumpToSaved({ auto: true })));
})();
