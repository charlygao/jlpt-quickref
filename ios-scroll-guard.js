(() => {
  // Safari's status-bar shortcut targets the document, not our inner scroller.
  // At scrollY=0 it generates no movement/event. Park the document at 1px and
  // offset the normal-flow body by the same pixel, keeping the header at y=0.
  // A native 1 -> 0 transition can then invoke the existing back-to-top action.
  window.JLPT_INSTALL_IOS_SCROLL_GUARD = ({ scrollRoot, onBackToTop, onRestore }) => {
    if (!scrollRoot) return null;
    const viewport = window.visualViewport;
    const origin = 1;
    let armed = false;
    document.documentElement.style.setProperty('--ios-scroll-origin', `${origin}px`);
    let timer;
    let touching = false;
    let interactionUntil = 0;
    let pending = false;
    let nativeTop = false;
    let suppressed = false;
    let attempts = 0;
    let restoring = false;

    window.JLPT_VIEWPORT_DEBUG?.setGuard(() => ({
      touching, interactionRemaining: Math.max(0, interactionUntil - Date.now()),
      pending, nativeTop, suppressed, attempts, restoring, origin, armed,
    }));

    const outerY = () => window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop ?? 0;
    const displaced = () => Math.abs(outerY() - origin) > 0.25;
    const blocked = () => touching || document.hidden ||
      document.body.classList.contains('modal-open') ||
      document.documentElement.classList.contains('modal-open') ||
      !!document.activeElement?.closest?.('input, textarea, select, [contenteditable]:not([contenteditable="false"])') ||
      Math.abs((viewport?.scale || 1) - 1) > 0.01;

    function schedule() {
      clearTimeout(timer);
      timer = setTimeout(recover, 180);
    }

    function observe(fromDocumentScroll = false) {
      if (restoring) return;
      if (blocked()) armed = false;
      if (displaced()) {
        pending = true;
        if (blocked() || Date.now() < interactionUntil) suppressed = true;
        // Positive drift (e.g. scrollIntoView during reading restoration) only
        // needs normalization. Only an armed transition to the native top is
        // a back-to-top candidate; viewport resizes alone are never one.
        if (fromDocumentScroll && armed && outerY() <= 0 && !suppressed) nativeTop = true;
      } else if (!blocked()) armed = true;
      if (pending) schedule();
    }

    function restoreDocument() {
      if (!displaced()) { armed = true; return; }
      restoring = true;
      // Never animate the one-pixel marker or compete with a native animation.
      window.scrollTo({ top: origin, left: 0, behavior: 'instant' });
      armed = !displaced();
      restoring = false;
      window.JLPT_VIEWPORT_DEBUG?.record('guard.restore');
      onRestore?.();
    }

    function recover() {
      window.JLPT_VIEWPORT_DEBUG?.record('guard.recover');
      if (!pending) return;
      if (blocked()) { suppressed = true; armed = false; return; }
      if (Date.now() < interactionUntil) { suppressed = true; schedule(); return; }
      if (displaced() && attempts < 2) {
        attempts += 1;
        restoreDocument();
      }
      // Never run an unbounded scroll loop if WebKit refuses the correction.
      if (displaced()) {
        if (attempts < 2) schedule();
        return;
      }
      const returnToTop = nativeTop && !suppressed;
      pending = nativeTop = suppressed = false;
      attempts = 0;
      armed = true;
      if (returnToTop) onBackToTop();
      onRestore?.();
    }

    function interaction() {
      interactionUntil = Date.now() + 400;
      if (pending) suppressed = true;
      attempts = 0;
    }

    window.addEventListener('scroll', () => observe(true), { passive: true });
    viewport?.addEventListener('scroll', () => observe(), { passive: true });
    viewport?.addEventListener('resize', () => observe(), { passive: true });
    const lifecycle = () => { armed = false; interaction(); observe(); };
    window.addEventListener('resize', lifecycle, { passive: true });
    window.addEventListener('pageshow', lifecycle, { passive: true });
    document.addEventListener('visibilitychange', lifecycle);
    document.addEventListener('touchstart', () => { touching = true; interaction(); }, { passive: true });
    const endTouch = event => { touching = !!event.touches?.length; interaction(); observe(); };
    document.addEventListener('touchend', endTouch, { passive: true });
    document.addEventListener('touchcancel', endTouch, { passive: true });
    document.addEventListener('wheel', interaction, { passive: true });
    document.addEventListener('keydown', interaction);
    document.addEventListener('focusin', interaction);
    document.addEventListener('focusout', () => { interaction(); observe(); });
    new MutationObserver(() => {
      if (blocked()) { armed = false; if (pending) suppressed = true; }
      observe();
    }).observe(document.body, { attributes: true, attributeFilter: ['class'] });

    // Restoring a page from history must preserve its reading position.
    interaction();
    observe();
    return {
      reset() {
        clearTimeout(timer);
        pending = nativeTop = suppressed = false;
        attempts = 0;
        if (!blocked()) restoreDocument();
      },
    };
  };
})();
