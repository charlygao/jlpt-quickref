(() => {
  // Keep the iOS shell in normal flow and leave its inner scroller alone.
  // Safari has no DOM event for a status-bar tap. Recover only an observed
  // scroll of the normally stationary document, after native motion settles.
  window.JLPT_INSTALL_IOS_SCROLL_GUARD = ({ scrollRoot, onBackToTop, onRestore }) => {
    if (!scrollRoot) return null;
    const viewport = window.visualViewport;
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
      pending, nativeTop, suppressed, attempts, restoring,
    }));

    const displaced = () => Math.abs(window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0) > 1;
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
      if (displaced()) {
        pending = true;
        if (blocked() || Date.now() < interactionUntil) suppressed = true;
        if (fromDocumentScroll && !suppressed) nativeTop = true;
      }
      if (pending) schedule();
    }

    function restoreDocument() {
      if (!displaced()) return;
      restoring = true;
      // The document has scroll-behavior:smooth. An instant correction avoids
      // a second animation competing with Safari's native scroll animation.
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      restoring = false;
      window.JLPT_VIEWPORT_DEBUG?.record('guard.restore');
      onRestore?.();
    }

    function recover() {
      window.JLPT_VIEWPORT_DEBUG?.record('guard.recover');
      if (!pending) return;
      if (blocked()) { suppressed = true; return; }
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
    window.addEventListener('resize', () => { interaction(); observe(); }, { passive: true });
    window.addEventListener('pageshow', () => { interaction(); observe(); }, { passive: true });
    document.addEventListener('visibilitychange', () => { interaction(); observe(); });
    document.addEventListener('touchstart', () => { touching = true; interaction(); }, { passive: true });
    const endTouch = event => { touching = !!event.touches?.length; interaction(); observe(); };
    document.addEventListener('touchend', endTouch, { passive: true });
    document.addEventListener('touchcancel', endTouch, { passive: true });
    document.addEventListener('wheel', interaction, { passive: true });
    document.addEventListener('keydown', interaction);
    document.addEventListener('focusin', interaction);
    document.addEventListener('focusout', () => { interaction(); observe(); });
    new MutationObserver(() => {
      if (blocked() && pending) suppressed = true;
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
