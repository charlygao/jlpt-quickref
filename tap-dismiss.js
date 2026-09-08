// Close on a tap, never on a drag, native scroll, pinch, or canceled gesture.
(() => {
  window.JLPT_INSTALL_TAP_DISMISS = (surface, close, enabled = () => true) => {
    let start = null;
    let blocked = false;
    function begin(point) {
      start = { x: point.clientX, y: point.clientY, time: Date.now() };
      blocked = false;
    }
    function move(point) {
      if (start && Math.hypot(point.clientX - start.x, point.clientY - start.y) > 8) blocked = true;
    }
    function finish(point) {
      if (point) move(point);
      if (start && Date.now() - start.time > 500) blocked = true;
      start = null;
    }
    function cancel() { blocked = true; start = null; }
    surface.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') return;
      if (event.button !== 0 || event.isPrimary === false) { cancel(); return; }
      begin(event);
    }, { passive: true });
    surface.addEventListener('pointermove', event => {
      if (event.pointerType !== 'touch') move(event);
    }, { passive: true });
    surface.addEventListener('pointerup', event => {
      if (event.pointerType !== 'touch') finish(event);
    }, { passive: true });
    surface.addEventListener('pointercancel', event => {
      if (event.pointerType !== 'touch') cancel();
    }, { passive: true });
    surface.addEventListener('touchstart', event => {
      if (event.touches.length === 1) begin(event.touches[0]);
      else cancel();
    }, { passive: true });
    surface.addEventListener('touchmove', event => {
      if (event.touches.length === 1) move(event.touches[0]);
      else cancel();
    }, { passive: true });
    surface.addEventListener('touchend', event => finish(event.changedTouches[0]), { passive: true });
    surface.addEventListener('touchcancel', cancel, { passive: true });
    surface.addEventListener('scroll', () => { blocked = true; }, { capture: true, passive: true });
    surface.addEventListener('contextmenu', cancel);
    surface.addEventListener('click', event => {
      if (!enabled()) return;
      const keyboardClose = event.detail === 0 && event.target.closest('.modal-close');
      if (blocked && !keyboardClose) return;
      event.preventDefault();
      event.stopPropagation();
      close();
    });
  };
})();
