(() => {
  const DATA = window.JLPT_DATA;
  const STORAGE_KEY = 'jlptQuickRef.v1';
  const THEME_KEY = 'jlptQuickRef.theme';

  const state = {
    type: 'grammar',
    level: 'N5',
    query: '',
    read: new Set(),
    lastSeen: {},
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

  function getCurrentItems() {
    const items = DATA[state.type][state.level] || [];
    const q = state.query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => JSON.stringify(item).toLowerCase().includes(q));
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
    els.grammarCount.textContent = flatCount(DATA.grammar);
    els.vocabCount.textContent = flatCount(DATA.vocab);
    els.readCount.textContent = state.read.size;

    const all = DATA[state.type][state.level] || [];
    const read = all.filter(x => state.read.has(x.id)).length;
    const pct = all.length ? Math.round(read / all.length * 100) : 0;
    els.progressPercent.textContent = `${pct}% · ${read}/${all.length}`;
    els.progressBar.style.width = `${pct}%`;
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

  function render() {
    updateControls();
    const items = getCurrentItems();
    els.contentList.innerHTML = items.map((item, i) => state.type === 'grammar' ? grammarCard(item, i) : vocabCard(item, i)).join('');
    els.emptyState.hidden = items.length !== 0;
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

  function jumpToSaved({ auto = false } = {}) {
    const id = state.lastSeen[currentKey()];
    if (!id) return;
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
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  document.querySelectorAll('.level-chip').forEach(btn => btn.addEventListener('click', () => {
    state.level = btn.dataset.level;
    state.query = '';
    els.searchInput.value = '';
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }));

  let searchTimer;
  els.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = e.target.value;
      render();
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

  els.resumeButton.addEventListener('click', () => jumpToSaved());
  els.themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, document.body.classList.contains('dark') ? 'dark' : 'light');
  });
  els.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => els.backToTop.classList.toggle('show', scrollY > 600), { passive: true });

  loadState();
  render();

  // Returning users are restored after layout is ready. The banner remains available for manual re-jump.
  requestAnimationFrame(() => requestAnimationFrame(() => jumpToSaved({ auto: true })));
})();
