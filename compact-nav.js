(() => {
  const body = document.body;
  const topbar = document.querySelector('.topbar');
  const controls = document.querySelector('.controls');
  const fullSearch = document.getElementById('searchInput');
  const compactInput = document.getElementById('compactSearchInput');
  const compactSearchButton = document.getElementById('compactSearchButton');
  const compactTypeButtons = [...document.querySelectorAll('[data-compact-type]')];
  const compactLevelButtons = [...document.querySelectorAll('[data-compact-level]')];
  const root = document.documentElement;
  const visualViewport = window.visualViewport;
  const isIOSWebKit = /AppleWebKit/i.test(navigator.userAgent) && (
    /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );

  if (!topbar || !controls || !fullSearch || !compactInput || !compactSearchButton) return;

  let ticking = false;
  let viewportTicking = false;
  let compact = false;
  let searchOpen = false;
  let compactThreshold = 0;
  let measuredWidth = window.innerWidth;

  if (isIOSWebKit) root.classList.add('ios-webkit');

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
    if (document.activeElement !== compactInput && compactInput.value !== fullSearch.value) {
      compactInput.value = fullSearch.value;
    }
  }

  function setSearchOpen(open, { focus = true } = {}) {
    searchOpen = Boolean(open && compact);
    body.classList.toggle('compact-search-open', searchOpen);
    compactSearchButton.textContent = searchOpen ? '×' : '⌕';
    compactSearchButton.setAttribute('aria-label', searchOpen ? '收起搜索' : '搜索');
    if (searchOpen) {
      compactInput.value = fullSearch.value;
      if (focus) requestAnimationFrame(() => compactInput.focus({ preventScroll: true }));
    } else if (document.activeElement === compactInput) {
      compactInput.blur();
    }
  }

  function updateCompactMode() {
    ticking = false;
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const shouldCompact = scrollTop >= compactThreshold - 1;
    if (shouldCompact === compact) return;
    compact = shouldCompact;
    body.classList.toggle('compact-header', compact);
    if (!compact) setSearchOpen(false, { focus: false });
    syncCompactState();
  }

  function scheduleCompactModeUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateCompactMode);
  }

  function measureCompactThreshold() {
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    compactThreshold = controls.getBoundingClientRect().bottom + scrollTop - topbar.offsetHeight;
  }

  function updateViewportOffset() {
    viewportTicking = false;
    if (!isIOSWebKit || !visualViewport) return;
    const atDefaultScale = Math.abs((visualViewport.scale || 1) - 1) < .01;
    const offset = atDefaultScale ? Math.min(80, Math.max(0, visualViewport.offsetTop || 0)) : 0;
    root.style.setProperty('--ios-viewport-offset-y', `${offset}px`);
  }

  function scheduleViewportOffsetUpdate() {
    if (viewportTicking) return;
    viewportTicking = true;
    requestAnimationFrame(updateViewportOffset);
  }

  function handleViewportResize() {
    if (Math.abs(window.innerWidth - measuredWidth) > 1) {
      measuredWidth = window.innerWidth;
      measureCompactThreshold();
    }
    scheduleCompactModeUpdate();
    scheduleViewportOffsetUpdate();
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

  compactSearchButton.addEventListener('click', () => setSearchOpen(!searchOpen));

  compactInput.addEventListener('input', () => {
    fullSearch.value = compactInput.value;
    fullSearch.dispatchEvent(new Event('input', { bubbles: true }));
  });

  fullSearch.addEventListener('input', () => {
    if (compactInput.value !== fullSearch.value) compactInput.value = fullSearch.value;
  });

  compactInput.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setSearchOpen(false, { focus: false });
    }
  });

  // app.js changes active classes after every render. Observe those class changes so
  // full and compact controls stay synchronized after navigation and resume actions.
  const stateObserver = new MutationObserver(() => queueMicrotask(syncCompactState));
  document.querySelectorAll('.controls .segment, .controls .level-chip').forEach(el => {
    stateObserver.observe(el, { attributes: true, attributeFilter: ['class'] });
  });

  window.addEventListener('scroll', () => {
    scheduleCompactModeUpdate();
    scheduleViewportOffsetUpdate();
  }, { passive: true });
  window.addEventListener('resize', handleViewportResize, { passive: true });
  visualViewport?.addEventListener('scroll', scheduleViewportOffsetUpdate, { passive: true });
  visualViewport?.addEventListener('resize', handleViewportResize, { passive: true });
  window.addEventListener('pageshow', scheduleViewportOffsetUpdate, { passive: true });
  document.addEventListener('focusout', () => {
    scheduleViewportOffsetUpdate();
    setTimeout(scheduleViewportOffsetUpdate, 300);
  });

  measureCompactThreshold();
  updateViewportOffset();
  syncCompactState();
  requestAnimationFrame(updateCompactMode);
})();
