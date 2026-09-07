// Deterministic event tests; no network, dependencies, or browser required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
class Node {
  constructor() { this.listeners = {}; this.dataset = {}; this.style = {}; this.children = new Map(); this.isConnected = true; this.hidden = false; this.classes = new Set(); this.classList = { add: x => this.classes.add(x), remove: x => this.classes.delete(x), contains: x => this.classes.has(x), toggle: (x, on) => on ? this.classes.add(x) : this.classes.delete(x) }; }
  addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
  emit(name, event = {}) { event.cancelable ??= true; event.preventDefault ||= () => { event.prevented = true; }; event.stopImmediatePropagation ||= () => { event.stopped = true; }; for (const fn of this.listeners[name] || []) { fn(event); if (event.stopped) break; } return event; }
  setAttribute(name, value) { this[name] = value; }
  getAttribute(name) { return this[name]; }
  querySelector(key) { if (!this.children.has(key)) this.children.set(key, new Node()); return this.children.get(key); }
  querySelectorAll(key) { if (key === '[data-action]') return ['mastered', 'followed'].map(action => { const node = this.querySelector(action); node.dataset.action = action; return node; }); return []; }
  appendChild(node) { (this.appended ||= []).push(node); }
  contains() { return true; }
  closest(selector) { return selector === '.track-card' ? this : null; }
  setPointerCapture(id) { this.capture = id; }
  hasPointerCapture(id) { return this.capture === id; }
  releasePointerCapture() { this.capture = null; }
  focus() {}
}
const document = new Node(); document.body = new Node(); document.documentElement = new Node();
document.createElement = () => new Node(); document.getElementById = id => document.querySelector(id);
const window = new Node(); window.innerWidth = 390; window.innerHeight = 844;
let now = 0; let nextTimer = 0; const timers = new Map();
const context = vm.createContext({ window, document, console, Date: { now: () => now }, setTimeout: (fn, ms) => { const id = ++nextTimer; timers.set(id, { fn, at: now + ms }); return id; }, clearTimeout: id => timers.delete(id), getComputedStyle: () => ({ overflowY: 'visible' }), localStorage: { getItem: () => null, setItem() {} }, matchMedia: () => ({ matches: false }), requestAnimationFrame() {}, IntersectionObserver: class { observe() {} disconnect() {} } });
function tick(ms) { now += ms; for (const [id, timer] of [...timers]) if (timer.at <= now) { timers.delete(id); timer.fn(); } }
vm.runInContext(fs.readFileSync('card-gestures.js', 'utf8'), context);
const content = document.getElementById('contentList'); const card = new Node(); card.dataset.id = 'g1';
const status = { mastered: false, followed: false }; const calls = [];
const controller = window.JLPT_INSTALL_CARD_GESTURES({ content, getStatus: () => status, toggle: (id, key) => { calls.push([id, key]); status[key] = !status[key]; } });
const wheel = document.body.appended[0];
const point = (x = 180, y = 360) => ({ clientX: x, clientY: y, identifier: 1 });
function start(x, y) { content.emit('touchstart', { target: card, touches: [point(x, y)] }); }
function move(x, y) { return document.emit('touchmove', { touches: [point(x, y)] }); }
function end(x, y) { return document.emit('touchend', { changedTouches: [point(x, y)] }); }
start(); tick(100); end(); assert.equal(calls.length, 0); assert.equal(wheel.hidden, true);
start(); move(180, 390); tick(500); end(180, 390); assert.equal(calls.length, 0); assert.equal(wheel.hidden, true);
start(); tick(450); assert.equal(wheel.hidden, false); assert.equal(move(130, 360).prevented, true); end(130, 360); assert.equal(status.mastered, true); assert.equal(calls.length, 1);
assert.equal(document.emit('click').stopped, true, 'hold must suppress example/status click');
start(); tick(450); move(230, 360); end(230, 360); assert.equal(status.followed, true); assert.equal(calls.length, 2);
start(); tick(450); move(130, 360); end(130, 360); assert.equal(status.mastered, false, 'left swipe toggles off');
start(); tick(450); move(230, 360); end(230, 360); assert.equal(status.followed, false, 'right swipe toggles off');
start(); tick(450); move(130, 360); end(180, 360); assert.equal(calls.length, 4, 'return to center cancels');
start(); tick(450); end(230, 450); assert.equal(calls.length, 4, 'vertical movement does not select');
for (const name of ['touchcancel', 'scroll', 'visibilitychange']) { start(); tick(450); move(130, 360); document.emit(name); end(130, 360); assert.equal(calls.length, 4, name); assert.equal(wheel.hidden, true); }
start(); tick(450); document.emit('touchstart', { touches: [point(), { ...point(), identifier: 2 }] }); end(130, 360); assert.equal(calls.length, 4, 'multitouch cancels');
start(); tick(450); controller.cancel(); end(130, 360); assert.equal(calls.length, 4, 'render cancellation');
start(); end(); assert.equal(document.emit('click').stopped, undefined, 'fresh tap works immediately after hold');
const pointer = (x = 180) => ({ target: card, pointerType: 'mouse', button: 0, pointerId: 7, clientX: x, clientY: 360 });
content.emit('pointerdown', pointer()); tick(450); document.emit('pointermove', pointer(130)); document.emit('pointerup', pointer(130)); assert.equal(status.mastered, true); assert.equal(card.capture, null);
content.emit('pointerdown', pointer()); tick(450); document.emit('pointercancel', pointer()); document.emit('pointerup', pointer(230)); assert.equal(calls.length, 5);
for (const x of [4, 386]) { start(x, 15); tick(450); assert.ok(parseFloat(wheel.style.left) >= 12); assert.ok(parseFloat(wheel.style.left) + parseFloat(wheel.style.width) <= 378); assert.ok(parseFloat(wheel.style.top) >= 12); end(x, 15); }
// Exercise production render/filter/pagination/save paths with small fixture data.
const grammar = Array.from({ length: 3 }, (_, i) => ({ id: `g${i + 1}`, level: 'N5', title: `文法${i}`, meaning: `meaning${i}`, connection: 'N', examples: [{ jp: '例文一。', zh: '例句一。' }, { jp: '例文二。', zh: '例句二。' }] }));
const vocab = Array.from({ length: 100 }, (_, i) => ({ id: `v${i}`, level: 'N5', word: `単語${i}`, reading: 'たんご', pos: '名词', meaning: `word${i}` }));
window.JLPT_DATA = { grammar: { N5: grammar }, vocab: { N5: vocab } };
let sync;
window.JLPT_PROGRESS_SYNC = { init() {}, saveItem: (id, data) => { sync = { id, ...data }; } };
// Expose closure references in this test context only; execute the real app startup.
const app = fs.readFileSync('app.js', 'utf8').replace(/\}\)\(\);\s*$/, 'window.testApp = { state, render, toggleStudyStatus }; })();');
vm.runInContext(app, context);
const api = window.testApp;
assert.equal((content.innerHTML.match(/data-grammar-detail-id=/g) || []).length, 6);
assert.match(content.innerHTML, /语法 03\/3/);
api.state.query = 'meaning2'; api.render(); assert.match(content.innerHTML, /语法 03\/3/); assert.doesNotMatch(content.innerHTML, /语法 01\/3/);
api.state.query = ''; api.state.filter = 'followed'; api.state.followed.add('g2'); api.render(); assert.match(content.innerHTML, /语法 02\/3/);
api.toggleStudyStatus('g2', 'followed'); assert.equal(content.innerHTML, ''); assert.equal(sync.id, 'g2'); assert.equal(sync.followed, false);
api.state.type = 'vocab'; api.state.filter = 'all'; api.state.startIndex = 80; api.render(); assert.match(content.innerHTML, /词汇 81\/100/); assert.match(content.innerHTML, /词汇 100\/100/);
api.state.query = 'word99'; api.state.startIndex = 0; api.render(); assert.match(content.innerHTML, /词汇 100\/100/);
console.log('PASS: hold/swipe/toggle/cancel, scrolling, multitouch, click suppression, edge placement, mouse, category totals, filtering, pagination and progress sync');
// Exercise delegated details, backdrop dismissal, focus return, and Escape.
Node.prototype.focus = function () { document.activeElement = this; };
window.scrollTo = () => {};
window.JLPT_RENDER_GRAMMAR_DETAIL = item => `<p>${item.title}</p>`;
grammar.forEach(item => { item.detail = { category: '基础' }; });
vm.runInContext(fs.readFileSync('grammar-details-ui.js', 'utf8'), context);
const trigger = new Node(); trigger.dataset.grammarDetailId = 'g3';
trigger.closest = selector => selector === '[data-grammar-detail-id]' ? trigger : null;
content.emit('click', { target: trigger });
const modal = document.body.appended.at(-1);
assert.equal(modal.hidden, false);
assert.equal(modal.querySelector('#grammarDetailTitle').textContent, '文法2');
assert.match(modal.querySelector('.grammar-detail-body').innerHTML, /文法2/);
modal.emit('click', { target: modal.querySelector('.grammar-detail-body') });
assert.equal(modal.hidden, false, 'inside clicks keep details open');
modal.emit('click', { target: modal }); assert.equal(modal.hidden, true); assert.equal(document.activeElement, trigger);
content.emit('click', { target: trigger }); document.emit('keydown', { key: 'Escape' }); assert.equal(modal.hidden, true);
console.log('PASS: example details, inside/outside dismissal, focus restoration and Escape');
