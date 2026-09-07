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

  function open(item, trigger) {
    const d = item.detail;
    const el = ensureModal();
    returnFocus = trigger || document.activeElement;
    lockedY = scrollTop();
    el.querySelector('#grammarDetailEyebrow').textContent = `${item.level} · ${d.category}`;
    el.querySelector('#grammarDetailTitle').textContent = item.title;
    el.querySelector('.grammar-detail-body').innerHTML = window.JLPT_RENDER_GRAMMAR_DETAIL(item);
    el.hidden = false;
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    if (!scrollRoot) document.body.style.top = `-${lockedY}px`;
    el.querySelector('.modal-close').focus({ preventScroll: true });
    // A display:none scroller has no layout box; resetting it before showing
    // the dialog can leave its previous scroll offset intact in the browser.
    el.querySelector('.grammar-detail-modal').scrollTop = 0;
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

  const content = document.getElementById('contentList');
  if (!content) return;
  const interactiveSelector = 'button, a, input, select, textarea, label, summary, [role="button"], [role="link"], [contenteditable]:not([contenteditable="false"]), [data-term], [data-conjugate-id], [data-status]';
  content.addEventListener('click', event => {
    if (event.defaultPrevented || event.target.closest(interactiveSelector)) return;
    const card = event.target.closest('.grammar-card[data-grammar-detail-id]');
    if (!card || !content.contains(card)) return;
    const item = byId.get(card.dataset.grammarDetailId);
    if (item) open(item, card);
  });
  content.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const card = event.target.closest('.grammar-card[data-grammar-detail-id]');
    if (!card || event.target !== card || !content.contains(card)) return;
    event.preventDefault();
    if (event.repeat) return;
    const item = byId.get(card.dataset.grammarDetailId);
    if (item) open(item, card);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && modal && !modal.hidden) {
      const focusable = [...modal.querySelectorAll('button, a[href], [tabindex="0"]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
    if (event.key === 'Escape' && modal && !modal.hidden) close();
  });
})();
