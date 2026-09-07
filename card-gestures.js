// Touch events preserve native scrolling until a stationary hold is recognized.
// Mouse and pen use pointer events; both paths share the same gesture state.
(() => {
  window.JLPT_INSTALL_CARD_GESTURES = ({ content, getStatus, toggle }) => {
    const HOLD_MS = 450;
    const MOVE_TOLERANCE = 10;
    const SELECT_DISTANCE = 34;
    let gesture = null;
    let suppressClickUntil = 0;
    const wheel = document.createElement('div');
    wheel.className = 'card-action-wheel';
    wheel.hidden = true;
    wheel.setAttribute('aria-hidden', 'true');
    wheel.innerHTML = `<div class="card-wheel-options">
      <div class="card-wheel-action" data-action="mastered"><span>✓</span><strong></strong><small>← 左滑</small></div>
      <div class="card-wheel-center">松手取消</div>
      <div class="card-wheel-action" data-action="followed"><span>★</span><strong></strong><small>右滑 →</small></div>
    </div><div class="card-wheel-hint">按住滑动 · 松手确认</div>`;
    const announcement = document.createElement('div');
    announcement.className = 'card-action-announcement';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    document.body.appendChild(wheel);
    document.body.appendChild(announcement);
    const options = [...wheel.querySelectorAll('[data-action]')];

    function cancel() {
      if (!gesture) return;
      const old = gesture;
      gesture = null;
      clearTimeout(old.timer);
      if (old.active) suppressClickUntil = Date.now() + 800;
      old.card.classList.remove('is-quick-action');
      wheel.hidden = true;
      if (old.kind === 'pointer' && old.card.hasPointerCapture?.(old.id)) {
        old.card.releasePointerCapture(old.id);
      }
    }

    function begin(event, point, kind, id) {
      if (gesture) { cancel(); return; }
      // A fresh physical press must never inherit suppression from a prior hold.
      suppressClickUntil = 0;
      const card = event.target.closest('.track-card');
      if (!card || !content.contains(card)) return;
      const current = { card, kind, id, x: point.clientX, y: point.clientY, active: false, selected: null };
      gesture = current;
      current.timer = setTimeout(() => {
        if (gesture !== current || !card.isConnected) { cancel(); return; }
        current.active = true;
        card.classList.add('is-quick-action');
        const status = getStatus(card.dataset.id);
        options.forEach(option => {
          const action = option.dataset.action;
          option.querySelector('strong').textContent = action === 'mastered'
            ? (status.mastered ? '取消掌握' : '标记掌握')
            : (status.followed ? '取消关注' : '标记关注');
          option.classList.remove('is-selected');
        });
        const viewport = window.visualViewport;
        const left = viewport?.offsetLeft || 0;
        const top = viewport?.offsetTop || 0;
        const width = viewport?.width || window.innerWidth;
        const height = viewport?.height || window.innerHeight;
        const wheelWidth = Math.min(264, width - 24);
        wheel.style.width = `${wheelWidth}px`;
        wheel.style.left = `${Math.max(left + 12, Math.min(current.x - wheelWidth / 2, left + width - wheelWidth - 12))}px`;
        wheel.style.top = `${Math.max(top + 12, Math.min(current.y - 150, top + height - 150))}px`;
        wheel.querySelector('.card-wheel-center').textContent = '松手取消';
        wheel.hidden = false;
        announcement.textContent = '左滑切换掌握，右滑切换关注，回到中间松手取消';
        if (kind === 'pointer') card.setPointerCapture?.(id);
      }, HOLD_MS);
    }

    function move(event, point) {
      if (!gesture) return;
      const dx = point.clientX - gesture.x;
      const dy = point.clientY - gesture.y;
      if (!gesture.active) {
        if (Math.hypot(dx, dy) > MOVE_TOLERANCE) cancel();
        return;
      }
      if (event.cancelable) event.preventDefault();
      gesture.selected = Math.abs(dx) >= SELECT_DISTANCE && Math.abs(dx) > Math.abs(dy) * 1.2
        ? (dx < 0 ? 'mastered' : 'followed') : null;
      options.forEach(option => option.classList.toggle('is-selected', option.dataset.action === gesture.selected));
      wheel.querySelector('.card-wheel-center').textContent = gesture.selected ? '松手确认' : '松手取消';
    }

    function finish(event, point) {
      if (!gesture) return;
      if (gesture.active && point) move(event, point);
      const { active, selected, card } = gesture;
      if (active && event.cancelable) event.preventDefault();
      cancel();
      if (active && selected && card.isConnected) {
        toggle(card.dataset.id, selected);
        const status = getStatus(card.dataset.id);
        announcement.textContent = selected === 'mastered'
          ? (status.mastered ? '已标记掌握' : '已取消掌握')
          : (status.followed ? '已关注' : '已取消关注');
      }
    }

    content.addEventListener('touchstart', event => {
      if (event.touches.length !== 1) { cancel(); return; }
      begin(event, event.touches[0], 'touch', event.touches[0].identifier);
    }, { passive: true });
    document.addEventListener('touchstart', event => { if (event.touches.length > 1) cancel(); }, { passive: true });
    document.addEventListener('touchmove', event => {
      if (gesture?.kind !== 'touch') return;
      if (event.touches.length !== 1) { cancel(); return; }
      const touch = [...event.touches].find(t => t.identifier === gesture.id);
      if (touch) move(event, touch);
    }, { passive: false });
    document.addEventListener('touchend', event => {
      if (gesture?.kind !== 'touch') return;
      const touch = [...event.changedTouches].find(t => t.identifier === gesture.id);
      if (touch) finish(event, touch);
    }, { passive: false });
    document.addEventListener('touchcancel', cancel, { passive: true });
    content.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') return;
      if (event.button !== 0 || event.isPrimary === false) { cancel(); return; }
      begin(event, event, 'pointer', event.pointerId);
    });
    document.addEventListener('pointermove', event => {
      if (gesture?.kind === 'pointer' && gesture.id === event.pointerId) move(event, event);
    });
    document.addEventListener('pointerup', event => {
      if (gesture?.kind === 'pointer' && gesture.id === event.pointerId) finish(event, event);
    });
    document.addEventListener('pointercancel', event => {
      if (gesture?.kind === 'pointer' && gesture.id === event.pointerId) cancel();
    });
    content.addEventListener('lostpointercapture', event => {
      if (gesture?.kind === 'pointer' && gesture.id === event.pointerId) cancel();
    });
    content.addEventListener('contextmenu', event => {
      if (event.target.closest('.track-card')) event.preventDefault();
    });
    content.addEventListener('dragstart', event => {
      if (gesture) { event.preventDefault(); cancel(); }
    });
    // Capture before example/term/status click handlers, including synthetic clicks
    // after a filtered card disappears from the list.
    document.addEventListener('click', event => {
      if (Date.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);
    document.addEventListener('scroll', cancel, { capture: true, passive: true });
    document.addEventListener('visibilitychange', cancel);
    document.addEventListener('keydown', event => { if (event.key === 'Escape') cancel(); });
    window.addEventListener('blur', cancel);
    window.addEventListener('resize', cancel);
    window.visualViewport?.addEventListener('resize', cancel);
    return { cancel };
  };
})();
