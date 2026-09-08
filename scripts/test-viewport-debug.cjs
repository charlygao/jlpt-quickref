const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('viewport-debug.js', 'utf8');
// Normal visits must exit before reading DOM geometry or starting timers.
vm.runInNewContext(source, { URLSearchParams, window: { location: { search: '' } } });

class Node {
  constructor() { this.style = {}; this.listeners = {}; this.children = []; this.classList = { contains: () => false }; }
  setAttribute() {}
  addEventListener(name, fn) { this.listeners[name] = fn; }
  append(...nodes) { this.children.push(...nodes); }
  appendChild(node) { this.append(node); }
  getBoundingClientRect() { return { top: 64, bottom: 864, height: 800 }; }
}
(async () => {
  for (const clipboardWorks of [true, false]) {
    const document = new Node();
    document.body = new Node(); document.documentElement = new Node();
    document.createElement = () => new Node(); document.querySelector = () => new Node();
    const window = new Node(); window.location = { search: '?viewport-debug=1' };
    window.visualViewport = new Node(); window.visualViewport.offsetTop = 0;
    window.scrollY = 0; window.innerHeight = 800; window.screen = { width: 390, height: 844 };
    let report;
    let interval;
    let cleared = false;
    const context = {
      window, document, URLSearchParams, Date,
      navigator: { userAgent: 'test-ios', clipboard: { writeText(text) { report = text; return clipboardWorks ? Promise.resolve() : Promise.reject(); } } },
      getComputedStyle: () => ({ getPropertyValue: () => '0px' }),
      setInterval(fn) { interval = fn; return 1; },
      clearInterval() { cleared = true; },
      setTimeout(fn) { fn(); },
    };
    vm.runInNewContext(source, context);
    const panel = document.body.children[0]; const button = panel.children[1];
    window.JLPT_VIEWPORT_DEBUG.setGuard(() => ({ attempts: 2 }));
    for (let i = 0; i < 60; i++) window.JLPT_VIEWPORT_DEBUG.record('test');
    interval();
    button.listeners.click();
    await new Promise(resolve => setImmediate(resolve));
    const captured = JSON.parse(report);
    assert.equal(captured.rows.length, 40);
    assert.equal(captured.rows[0].event, 'initial');
    assert.equal(captured.rows.at(-1).event, 'capture');
    assert.equal(captured.rows.at(-1).scrollY, 0);
    assert.equal(captured.rows.at(-1).header.top, 64, 'capture geometry even with zero scrollY');
    assert.equal(captured.rows.at(-1).guard.attempts, 2);
    assert.equal(cleared, true);
    assert.equal(button.disabled, true);
    if (!clipboardWorks) {
      assert.equal(panel.children[2].readOnly, true);
      assert.equal(panel.children[2].value, report);
    }
  }
  console.log('PASS: opt-in viewport diagnostics, zero-scroll geometry, bounded history, clipboard and manual-copy fallback');
})().catch(error => { console.error(error); process.exitCode = 1; });
