(() => {
  const DATA = window.JLPT_DATA;
  if (!DATA?.grammar || typeof document === 'undefined') return;

  const items = Object.values(DATA.grammar).flat();
  const byId = new Map(items.map(item => [item.id, item]));
  const pageShell = document.querySelector('.page-shell');
  const scrollRoot = pageShell && /^(auto|scroll)$/.test(getComputedStyle(pageShell).overflowY) ? pageShell : null;
  const scrollTop = () => scrollRoot ? scrollRoot.scrollTop : window.scrollY || document.documentElement.scrollTop || 0;
  const scrollTo = top => (scrollRoot || window).scrollTo({ top, left: 0, behavior: 'auto' });

  let modal;
  let lockedY = 0;
  let returnFocus;

  function ensureModal() {
    if (modal) return modal;
    modal = document.createElement('div');
    modal.className = 'modal-backdrop grammar-detail-backdrop';
    modal.hidden = true;
    modal.innerHTML = `
      <section class="info-modal grammar-detail-modal" role="dialog" aria-modal="true" aria-labelledby="grammarDetailTitle">
        <div class="modal-handle"></div>
        <header class="modal-head">
          <div><span class="modal-eyebrow" id="grammarDetailEyebrow">Grammar Detail</span><h3 id="grammarDetailTitle"></h3></div>
          <button type="button" class="modal-close" aria-label="关闭语法详情">×</button>
        </header>
        <div class="modal-body grammar-detail-body"></div>
      </section>`;
    document.body.appendChild(modal);
    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.addEventListener('click', event => { if (event.target === modal) close(); });
    modal.addEventListener('touchmove', event => { if (event.target === modal) event.preventDefault(); }, { passive: false });
    return modal;
  }

  function open(item) {
    const d = item.detail;
    const el = ensureModal();
    returnFocus = document.activeElement;
    lockedY = scrollTop();
    el.querySelector('#grammarDetailEyebrow').textContent = `${item.level} · ${d.category}`;
    el.querySelector('#grammarDetailTitle').textContent = item.title;
    el.querySelector('.grammar-detail-body').innerHTML = window.JLPT_RENDER_GRAMMAR_DETAIL(item);
    el.querySelector('.grammar-detail-modal').scrollTop = 0;
    el.hidden = false;
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    if (!scrollRoot) document.body.style.top = `-${lockedY}px`;
    el.querySelector('.modal-close').focus({ preventScroll: true });
  }

  function close() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    scrollTo(lockedY);
    returnFocus?.focus?.({ preventScroll: true });
    returnFocus = null;
  }

  function install(root = document) {
    root.querySelectorAll('.track-card').forEach(card => {
      const item = byId.get(card.dataset.id);
      if (!item) return;
      const actions = card.querySelector('.card-actions');
      if (!actions || actions.querySelector('[data-grammar-detail-id]')) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'status-btn grammar-detail-btn';
      button.dataset.grammarDetailId = item.id;
      button.setAttribute('aria-label', `查看${item.title}的详细解说`);
      button.title = `查看${item.title}的详细解说`;
      button.innerHTML = '<span aria-hidden="true">ⓘ</span> 详情';
      actions.prepend(button);
    });
  }

  const content = document.getElementById('contentList');
  if (!content) return;
  install(content);
  new MutationObserver(() => install(content)).observe(content, { childList: true });
  content.addEventListener('click', event => {
    const button = event.target.closest('[data-grammar-detail-id]');
    if (!button) return;
    const item = byId.get(button.dataset.grammarDetailId);
    if (item) open(item);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal && !modal.hidden) close();
  });
})();
