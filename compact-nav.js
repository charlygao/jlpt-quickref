(() => {
  const body = document.body;
  const topbar = document.querySelector('.topbar');
  const controls = document.querySelector('.controls');
  const progressPanel = document.querySelector('.progress-panel');
  const compactTypeButtons = [...document.querySelectorAll('[data-compact-type]')];
  const compactLevelButtons = [...document.querySelectorAll('[data-compact-level]')];
  const pageShell = document.querySelector('.page-shell');

  if (!topbar || !controls) return;

  const pageScrollRoot = pageShell && /^(auto|scroll)$/.test(getComputedStyle(pageShell).overflowY)
    ? pageShell
    : null;
  const scrollEventTarget = pageScrollRoot || window;

  let ticking = false;
  let compact = false;
  let compactThreshold = 0;
  let progressThreshold = Infinity;
  let measuredWidth = window.innerWidth;

  function activeFullType() {
    return document.querySelector('.controls .segment.is-active')?.dataset.type || 'grammar';
  }

  function activeFullLevel() {
    return document.querySelector('.controls .level-chip.is-active')?.dataset.level || 'N5';
  }

  function syncCompactState() {
    const type = activeFullType();
    const level = activeFullLevel();
    compactTypeButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.compactType === type));
    compactLevelButtons.forEach(btn => btn.classList.toggle('is-active', btn.dataset.compactLevel === level));
  }

  function updateCompactMode() {
    ticking = false;
    const scrollTop = pageScrollRoot
      ? pageScrollRoot.scrollTop
      : window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const shouldCompact = scrollTop >= compactThreshold - 1;
    body.classList.toggle('compact-progress-visible', shouldCompact && scrollTop >= progressThreshold - 1);
    if (shouldCompact === compact) return;
    compact = shouldCompact;
    body.classList.toggle('compact-header', compact);
    syncCompactState();
  }

  function scheduleCompactModeUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateCompactMode);
  }

  function measureCompactThreshold() {
    if (pageScrollRoot) {
      const rootTop = pageScrollRoot.getBoundingClientRect().top;
      compactThreshold = controls.getBoundingClientRect().bottom - rootTop + pageScrollRoot.scrollTop;
      progressThreshold = progressPanel ? progressPanel.getBoundingClientRect().bottom - rootTop + pageScrollRoot.scrollTop : Infinity;
      return;
    }
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    compactThreshold = controls.getBoundingClientRect().bottom + scrollTop - topbar.offsetHeight;
    progressThreshold = progressPanel ? progressPanel.getBoundingClientRect().bottom + scrollTop - topbar.offsetHeight : Infinity;
  }

  function handleViewportResize() {
    if (Math.abs(window.innerWidth - measuredWidth) > 1) {
      measuredWidth = window.innerWidth;
      measureCompactThreshold();
    }
    scheduleCompactModeUpdate();
  }

  function proxyClickWithoutPageJump(target) {
    if (!target) return;
    const originalScrollTo = window.scrollTo;
    try {
      window.scrollTo = () => {};
      target.click();
    } finally {
      window.scrollTo = originalScrollTo;
    }
    syncCompactState();
  }

  compactTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(`.controls .segment[data-type="${btn.dataset.compactType}"]`);
      proxyClickWithoutPageJump(target);
    });
  });

  compactLevelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(`.controls .level-chip[data-level="${btn.dataset.compactLevel}"]`);
      proxyClickWithoutPageJump(target);
    });
  });

  // app.js changes active classes after every render. Observe those class changes so
  // full and compact controls stay synchronized after navigation and resume actions.
  const stateObserver = new MutationObserver(() => queueMicrotask(syncCompactState));
  document.querySelectorAll('.controls .segment, .controls .level-chip').forEach(el => {
    stateObserver.observe(el, { attributes: true, attributeFilter: ['class'] });
  });

  scrollEventTarget.addEventListener('scroll', scheduleCompactModeUpdate, { passive: true });
  window.addEventListener('resize', handleViewportResize, { passive: true });

  if (window.ResizeObserver) {
    const layoutObserver = new window.ResizeObserver(() => {
      measureCompactThreshold();
      scheduleCompactModeUpdate();
    });
    [topbar, controls, progressPanel].filter(Boolean).forEach(element => layoutObserver.observe(element));
  }
  measureCompactThreshold();
  syncCompactState();
  requestAnimationFrame(updateCompactMode);
})();

