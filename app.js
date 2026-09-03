(() => {
  const DATA = window.JLPT_DATA;
  const STORAGE_KEY = 'jlptQuickRef.v1';
  const THEME_KEY = 'jlptQuickRef.theme';
  const VOCAB_BATCH_SIZE = 80;

  const state = {
    type: 'grammar',
    level: 'N5',
    query: '',
    read: new Set(),
    lastSeen: {},
    startIndex: 0,
    visibleCount: VOCAB_BATCH_SIZE,
  };

  const els = {
    contentList: document.getElementById('contentList'),
    emptyState: document.getElementById('emptyState'),
    searchInput: document.getElementById('searchInput'),
    grammarCount: document.getElementById('grammarCount'),
    vocabCount: document.getElementById('vocabCount'),
    readCount: document.getElementById('readCount'),
    progressLabel: document.getElementById('progressLabel'),
    progressPercent: document.getElementById('progressPercent'),
    progressBar: document.getElementById('progressBar'),
    resumeBanner: document.getElementById('resumeBanner'),
    resumeText: document.getElementById('resumeText'),
    resumeButton: document.getElementById('resumeButton'),
    loadMoreWrap: document.getElementById('loadMoreWrap'),
    loadMoreText: document.getElementById('loadMoreText'),
    loadMoreButton: document.getElementById('loadMoreButton'),
    themeToggle: document.getElementById('themeToggle'),
    backToTop: document.getElementById('backToTop'),
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      if (saved.type && DATA[saved.type]) state.type = saved.type;
      if (saved.level && DATA.grammar[saved.level]) state.level = saved.level;
      state.read = new Set(Array.isArray(saved.read) ? saved.read : []);
      state.lastSeen = saved.lastSeen || {};
    } catch (_) {}

    const theme = localStorage.getItem(THEME_KEY);
    if (theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark');
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      type: state.type,
      level: state.level,
      read: [...state.read],
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
      return [
        item.title,
        item.meaning,
        item.connection,
        ...(item.examples || []).flatMap(ex => [ex.jp, ex.zh]),
      ].join('\n').toLowerCase();
    }
    return [
      item.word,
      item.reading,
      item.meaning,
      item.pos,
      item.example?.jp,
      item.example?.zh,
    ].join('\n').toLowerCase();
  }

  function getCurrentItems() {
    const items = DATA[state.type][state.level] || [];
    const q = state.query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(item => itemSearchText(item).includes(q));
  }

  function grammarCard(item, index) {
    const read = state.read.has(item.id);
    return `
      <article class="card track-card" id="${item.id}" data-id="${item.id}">
        <div class="card-head">
          <div class="card-title-wrap">
            <div class="card-kicker"><span class="badge">${item.level}</span><span class="card-index">语法 ${String(index + 1).padStart(2, '0')}</span></div>
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          <button class="read-btn ${read ? 'is-read' : ''}" data-read-id="${item.id}">${read ? '✓ 已读' : '标记已读'}</button>
        </div>
        <p class="meaning">${escapeHtml(item.meaning)}</p>
        <div class="meta-grid">
          <div class="meta-box"><label>接续</label><span>${escapeHtml(item.connection)}</span></div>
          <div class="meta-box"><label>级别</label><span>${item.level} · 快速参考</span></div>
        </div>
        <div class="examples">
          ${(item.examples || []).map(ex => `<div class="example"><div class="example-jp">${escapeHtml(ex.jp)}</div><div class="example-zh">${escapeHtml(ex.zh)}</div></div>`).join('')}
        </div>
      </article>`;
  }

  function vocabCard(item, index) {
    const read = state.read.has(item.id);
    const exampleHtml = item.example?.jp ? `
        <div class="examples">
          <div class="example"><div class="example-jp">${escapeHtml(item.example.jp)}</div><div class="example-zh">${escapeHtml(item.example.zh)}</div></div>
        </div>` : '';
    return `
      <article class="card track-card" id="${item.id}" data-id="${item.id}">
        <div class="card-head">
          <div class="card-title-wrap">
            <div class="card-kicker"><span class="badge">${item.level}</span><span class="card-index">词汇 ${String(index + 1).padStart(2, '0')}</span></div>
            <div class="vocab-line"><span class="vocab-word">${escapeHtml(item.word)}</span><span class="vocab-reading">${escapeHtml(item.reading)}</span><span class="vocab-pos">${escapeHtml(item.pos || '词汇')}</span></div>
          </div>
          <button class="read-btn ${read ? 'is-read' : ''}" data-read-id="${item.id}">${read ? '✓ 已读' : '标记已读'}</button>
        </div>
        <p class="meaning">${escapeHtml(item.meaning || '—')}</p>
        ${exampleHtml}
      </article>`;
  }

  function updateControls() {
    document.querySelectorAll('.segment').forEach(btn => btn.classList.toggle('is-active', btn.dataset.type === state.type));
    document.querySelectorAll('.level-chip').forEach(btn => btn.classList.toggle('is-active', btn.dataset.level === state.level));
    els.progressLabel.textContent = `${state.level} · ${state.type === 'grammar' ? '语法' : '词汇'}`;
  }

  function updateStats() {
    els.grammarCount.textContent = flatCount(DATA.grammar).toLocaleString('zh-CN');
    els.vocabCount.textContent = flatCount(DATA.vocab).toLocaleString('zh-CN');
    els.readCount.textContent = state.read.size.toLocaleString('zh-CN');

    const all = DATA[state.type][state.level] || [];
    const read = all.filter(x => state.read.has(x.id)).length;
    const pct = all.length ? Math.round(read / all.length * 100) : 0;
    els.progressPercent.textContent = `${pct}% · ${read}/${all.length}`;
    els.progressBar.style.width = `${pct}%`;
  }

  function updateLoadMore(total, start, end) {
    if (!els.loadMoreWrap) return;
    const hasMore = state.type === 'vocab' && end < total;
    els.loadMoreWrap.hidden = !hasMore;
    if (!hasMore) return;

    const remaining = total - end;
    const next = Math.min(VOCAB_BATCH_SIZE, remaining);
    els.loadMoreText.textContent = start > 0
      ? `从第 ${start + 1} 条继续 · 当前显示到 ${end}/${total}`
      : `当前显示 ${end}/${total}`;
    els.loadMoreButton.textContent = `再显示 ${next} 条`;
  }

  let observer;
  let observationTimer;
  function attachObserver() {
    observer?.disconnect();
    observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
      if (!visible.length || state.query) return;
      clearTimeout(observationTimer);
      observationTimer = setTimeout(() => {
        const id = visible[0].target.dataset.id;
        state.lastSeen[currentKey()] = id;
        saveState();
      }, 250);
    }, { rootMargin: '-28% 0px -55% 0px', threshold: 0.01 });
    document.querySelectorAll('.track-card').forEach(card => observer.observe(card));
  }

  function render({ reset = false } = {}) {
    if (reset) resetWindow();
    updateControls();

    const allItems = getCurrentItems();
    const start = state.type === 'vocab' ? Math.min(state.startIndex, allItems.length) : 0;
    const end = state.type === 'vocab'
      ? Math.min(allItems.length, start + state.visibleCount)
      : allItems.length;
    const visibleItems = allItems.slice(start, end);

    els.contentList.innerHTML = visibleItems
      .map((item, i) => state.type === 'grammar'
        ? grammarCard(item, start + i)
        : vocabCard(item, start + i))
      .join('');
    els.emptyState.hidden = allItems.length !== 0;
    updateLoadMore(allItems.length, start, end);
    updateStats();
    attachObserver();
    updateResumeBanner();
  }

  function updateResumeBanner() {
    const id = state.lastSeen[currentKey()];
    if (!id || state.query || !DATA[state.type][state.level].some(x => x.id === id)) {
      els.resumeBanner.hidden = true;
      return;
    }
    const item = DATA[state.type][state.level].find(x => x.id === id);
    const label = state.type === 'grammar' ? item.title : `${item.word}（${item.reading}）`;
    els.resumeText.textContent = `${state.level} · ${label}`;
    els.resumeBanner.hidden = false;
  }

  function ensureSavedItemRendered(id) {
    if (document.getElementById(id) || state.type !== 'vocab' || state.query) return;
    const items = getCurrentItems();
    const index = items.findIndex(item => item.id === id);
    if (index < 0) return;

    state.startIndex = Math.max(0, index - 8);
    state.visibleCount = VOCAB_BATCH_SIZE;
    render();
  }

  function jumpToSaved({ auto = false } = {}) {
    const id = state.lastSeen[currentKey()];
    if (!id) return;
    ensureSavedItemRendered(id);
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: auto ? 'auto' : 'smooth', block: 'start' });
    if (auto) {
      setTimeout(() => target.animate([
        { boxShadow: '0 0 0 0 rgba(91,91,214,0)' },
        { boxShadow: '0 0 0 5px rgba(91,91,214,.20)' },
        { boxShadow: '' }
      ], { duration: 900, easing: 'ease-out' }), 80);
    }
  }

  document.querySelectorAll('.segment').forEach(btn => btn.addEventListener('click', () => {
    state.type = btn.dataset.type;
    state.query = '';
    els.searchInput.value = '';
    resetWindow();
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  document.querySelectorAll('.level-chip').forEach(btn => btn.addEventListener('click', () => {
    state.level = btn.dataset.level;
    state.query = '';
    els.searchInput.value = '';
    resetWindow();
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  let searchTimer;
  els.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = e.target.value;
      render({ reset: true });
    }, 120);
  });

  els.contentList.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-read-id]');
    if (!btn) return;
    const id = btn.dataset.readId;
    state.read.has(id) ? state.read.delete(id) : state.read.add(id);
    saveState();
    btn.classList.toggle('is-read', state.read.has(id));
    btn.textContent = state.read.has(id) ? '✓ 已读' : '标记已读';
    updateStats();
  });

  els.loadMoreButton?.addEventListener('click', () => {
    state.visibleCount += VOCAB_BATCH_SIZE;
    render();
  });
  els.resumeButton.addEventListener('click', () => jumpToSaved());
  els.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, document.body.classList.contains('dark') ? 'dark' : 'light');
  });
  els.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => els.backToTop.classList.toggle('show', scrollY > 600), { passive: true });

  loadState();
  render();

  // Returning users are restored after layout is ready. For large vocabulary
  // levels, restoration renders a small window around the saved card instead
  // of creating thousands of cards first.
  requestAnimationFrame(() => requestAnimationFrame(() => jumpToSaved({ auto: true })));
})();
