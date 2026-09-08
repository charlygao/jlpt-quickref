// Event-level regression checks; Safari compositor/status-bar behavior still
// requires a physical iOS device. No browser geometry is simulated here.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('ios-scroll-guard.js', 'utf8');

function setup(nested = true, refusesScroll = false) {
  const target = () => ({
    listeners: {},
    addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); },
    emit(name, event = {}) { for (const fn of this.listeners[name] || []) fn(event); },
  });
  const window = target();
  const document = target();
  let modal = false;
  let editable = false;
  document.body = { classList: { contains: () => modal } };
  document.documentElement = { scrollTop: 0, classList: { contains: () => modal }, style: { setProperty(name, value) { this[name] = value; } } };
  document.activeElement = { closest: () => editable };
  window.visualViewport = { ...target(), scale: 1, offsetTop: 0 };
  window.scrollY = 0;
  const root = { scrollTop: 1500 };
  const corrections = [];
  let topCalls = 0;
  let now = 0;
  let nextTimer = 0;
  const timers = new Map();
  let mutation;
  const context = vm.createContext({
    window, document, Date: { now: () => now },
    setTimeout(fn, delay) { const id = ++nextTimer; timers.set(id, { fn, at: now + delay }); return id; },
    clearTimeout(id) { timers.delete(id); },
    MutationObserver: class { constructor(fn) { mutation = fn; } observe() {} },
  });
  const tick = ms => {
    const until = now + ms;
    for (;;) {
      const next = [...timers].sort((a, b) => a[1].at - b[1].at)[0];
      if (!next || next[1].at > until) break;
      now = next[1].at; timers.delete(next[0]); next[1].fn();
    }
    now = until;
  };
  window.scrollTo = options => {
    corrections.push(options);
    assert.equal(options.behavior, 'instant');
    if (!refusesScroll) window.scrollY = options.top;
    window.emit('scroll');
  };
  vm.runInContext(source, context);
  const guard = window.JLPT_INSTALL_IOS_SCROLL_GUARD({
    scrollRoot: nested ? root : null,
    onBackToTop() { topCalls++; root.scrollTop = 0; },
  });
  tick(1000);
  if (nested && !refusesScroll) {
    assert.equal(window.scrollY, 1, 'arm the outer scroll marker after startup');
    assert.equal(root.scrollTop, 1500, 'arming must preserve the reading position');
    assert.equal(document.documentElement.style['--ios-scroll-origin'], '1px');
    corrections.length = 0;
  }
  return {
    window, document, root, guard, tick, corrections,
    get topCalls() { return topCalls; },
    drift(y) { window.scrollY = y; window.emit('scroll'); },
    modal(on) { modal = on; mutation(); },
    editable(on) { editable = on; document.emit(on ? 'focusin' : 'focusout'); },
  };
}

// A native 1 -> 0 transition works even without the old 40px displacement.
for (const y of [-64, 0]) {
  const t = setup();
  t.drift(y); t.tick(100); assert.equal(t.corrections.length, 0);
  t.drift(y / 2); t.tick(180);
  assert.equal(t.window.scrollY, 1);
  assert.equal(t.root.scrollTop, 0);
  assert.equal(t.topCalls, 1);
  t.tick(1000); assert.equal(t.corrections.length, 1);
}

// A native animation may normalize the outer position before the timer runs.
{
  const t = setup(); t.drift(-50); t.drift(0); t.tick(200);
  assert.equal(t.topCalls, 1); assert.equal(t.corrections.length, 1);
  t.root.scrollTop = 4296;
  t.drift(0); t.tick(200);
  assert.equal(t.topCalls, 2, 'repeated native taps rearm and continue to work');
  assert.equal(t.root.scrollTop, 0);
}

// The supplied diagnostic trace: positive drift during restore is not a tap.
{
  const t = setup();
  t.window.emit('pageshow');
  t.root.scrollTop = 2788;
  for (const y of [6, 24, 38, 40]) { t.drift(y); t.tick(90); }
  t.tick(1000);
  assert.equal(t.window.scrollY, 1);
  assert.equal(t.topCalls, 0); assert.equal(t.root.scrollTop, 2788);
  t.root.scrollTop = 4296; t.drift(0); t.tick(200);
  assert.equal(t.topCalls, 1); assert.equal(t.root.scrollTop, 0);
}

// Viewport chrome changes at a stationary document must not jump the reading.
{
  const t = setup();
  t.window.visualViewport.offsetTop = 60;
  t.window.visualViewport.emit('scroll');
  t.window.visualViewport.emit('resize'); t.window.emit('resize'); t.tick(1000);
  assert.equal(t.topCalls, 0); assert.equal(t.corrections.length, 0);
  assert.equal(t.root.scrollTop, 1500);
}

// Touch scrolling/bounce, including multiple fingers, never becomes a back-to-top action.
{
  const t = setup(); t.document.emit('touchstart'); t.drift(-30); t.tick(1000);
  assert.equal(t.corrections.length, 0);
  t.document.emit('touchend', { touches: [{}] }); t.tick(1000);
  assert.equal(t.corrections.length, 0);
  t.document.emit('touchend', { touches: [] }); t.tick(1000);
  assert.equal(t.window.scrollY, 1); assert.equal(t.topCalls, 0);
  assert.equal(t.root.scrollTop, 1500);
  t.drift(-30); t.tick(200); assert.equal(t.topCalls, 1, 'fresh native action is still handled');
}

// Keyboard/modal/zoom offsets are allowed until the protected interaction ends.
for (const mode of ['editable', 'modal', 'zoom']) {
  const t = setup();
  if (mode === 'zoom') t.window.visualViewport.scale = 2;
  else t[mode](true);
  t.drift(120); t.tick(1000);
  assert.equal(t.corrections.length, 0);
  if (mode === 'zoom') { t.window.visualViewport.scale = 1; t.window.visualViewport.emit('resize'); }
  else t[mode](false);
  t.tick(1000);
  assert.equal(t.window.scrollY, 1);
  assert.equal(t.topCalls, 0); assert.equal(t.root.scrollTop, 1500);
}

// History restore and rotation normalize only the shell, preserving position.
for (const event of ['pageshow', 'resize']) {
  const t = setup(); t.window.emit(event); t.drift(70); t.tick(1000);
  assert.equal(t.window.scrollY, 1); assert.equal(t.topCalls, 0);
}

// Explicit button recovery cancels any delayed native back-to-top request.
{
  const t = setup(); t.drift(-70); t.guard.reset(); t.tick(1000);
  assert.equal(t.window.scrollY, 1); assert.equal(t.topCalls, 0);
}

// No recurring correction loop if WebKit cannot apply the requested scroll.
{
  const t = setup(true, true); t.drift(-70); t.tick(10000);
  assert.equal(t.corrections.length, 2); assert.equal(t.topCalls, 0);
}

// Desktop/native-document layouts must never install the guard.
{
  const t = setup(false); assert.equal(t.guard, null); t.drift(500); t.tick(1000);
  assert.equal(t.corrections.length, 0); assert.equal(t.window.scrollY, 500);
}
console.log('PASS: iOS native top marker, repeated taps, recorded reading-restore sequence, outer-scroll recovery, debounce, bounded retries, gesture/keyboard/modal/zoom exclusions and history preservation');
