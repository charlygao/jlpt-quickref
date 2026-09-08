// Deterministic event tests; no network, dependencies, or browser required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('index.html', 'utf8');
const htmlIds = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
const appSource = fs.readFileSync('app.js', 'utf8');
for (const [, id] of appSource.matchAll(/document\.getElementById\('([^']+)'\)/g)) {
  assert.ok(htmlIds.has(id), `index.html is missing required app element #${id}`);
}
assert.doesNotMatch(html, /…\d+ tokens truncated…/, 'HTML must not contain truncated tool output');
class Node {
  constructor() { this.listeners = {}; this.dataset = {}; this.style = { setProperty(name, value) { this[name] = value; } }; this.value = ''; this.children = new Map(); this.isConnected = true; this.hidden = false; this.classes = new Set(); this.classList = { add: x => this.classes.add(x), remove: x => this.classes.delete(x), contains: x => this.classes.has(x), toggle: (x, on) => on ? this.classes.add(x) : this.classes.delete(x) }; }
  addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
  emit(name, event = {}) { event.cancelable ??= true; event.preventDefault ||= () => { event.prevented = true; }; event.stopImmediatePropagation ||= () => { event.stopped = true; }; for (const fn of this.listeners[name] || []) { fn(event); if (event.stopped) break; } return event; }
  setAttribute(name, value) { this[name] = value; }
  getAttribute(name) { return this[name]; }
  hasAttribute(name) { return this[name] !== undefined; }
  scrollIntoView(options) { this.lastScrollOptions = options; }
  querySelector(key) { if (!this.children.has(key)) this.children.set(key, new Node()); return this.children.get(key); }
  querySelectorAll(key) { if (key === '[data-action]') return ['mastered', 'followed'].map(action => { const node = this.querySelector(action); node.dataset.action = action; return node; }); return []; }
  appendChild(node) { (this.appended ||= []).push(node); }
  contains() { return true; }
  closest(selector) { return selector === '.track-card' ? this : null; }
  setPointerCapture(id) { this.capture = id; }
  hasPointerCapture(id) { return this.capture === id; }
  releasePointerCapture() { this.capture = null; }
  focus() { document.activeElement = this; }
  blur() { if (document.activeElement === this) document.activeElement = document.body; }
  getBoundingClientRect() { return { bottom: 844, top: 0 }; }
}
const document = new Node(); document.body = new Node(); document.documentElement = new Node();
document.createElement = () => new Node();
document.getElementById = id => {
  const rendered = document.children.get('contentList')?.innerHTML || '';
  const cardIds = [...rendered.matchAll(/<article[^>]*\bid="([^"]+)"/g)].map(match => match[1]);
  return htmlIds.has(id) || cardIds.includes(id) ? document.querySelector(id) : null;
};
for (const tag of html.matchAll(/<[^>]+\bid="([^"]+)"[^>]*>/g)) {
  if (/\bhidden(?:\s|>)/.test(tag[0])) document.getElementById(tag[1]).hidden = true;
}
assert.equal(document.getElementById('nonexistent-element'), null);
const window = new Node(); window.innerWidth = 390; window.innerHeight = 844; window.visualViewport = new Node(); window.visualViewport.height = 844; window.visualViewport.offsetTop = 0;
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
const app = appSource.replace(/\}\)\(\);\s*$/, 'window.testApp = { state, render, toggleStudyStatus, sessionResume, directoryHtml, selectDirectoryItem }; })();');
vm.runInContext(app, context);
const api = window.testApp;
assert.equal((content.innerHTML.match(/data-grammar-detail-id=/g) || []).length, 3);
assert.doesNotMatch(content.innerHTML, /grammar-example-trigger/);
assert.equal((content.innerHTML.match(/<div class="example">/g) || []).length, 6);
assert.match(content.innerHTML, /语法 03\/3/);
api.state.filter = 'followed'; api.state.followed.add('g2'); api.render(); assert.match(content.innerHTML, /语法 02\/3/);
api.toggleStudyStatus('g2', 'followed'); assert.equal(content.innerHTML, ''); assert.equal(sync.id, 'g2'); assert.equal(sync.followed, false);
api.state.type = 'vocab'; api.state.filter = 'all'; api.state.startIndex = 80; api.render(); assert.match(content.innerHTML, /词汇 81\/100/); assert.match(content.innerHTML, /词汇 100\/100/);
console.log('PASS: hold/swipe/toggle/cancel, scrolling, multitouch, click suppression, edge placement, mouse, category totals, filtering, pagination and progress sync');
// Exercise delegated details, backdrop dismissal, focus return, and Escape.
Node.prototype.focus = function () { document.activeElement = this; };
window.scrollTo = () => {};
window.JLPT_RENDER_GRAMMAR_DETAIL = item => `<p>${item.title}</p>`;
grammar.forEach(item => { item.detail = { category: '基础' }; });
vm.runInContext(fs.readFileSync('grammar-details-ui.js', 'utf8'), context);
const trigger = new Node(); trigger.dataset.grammarDetailId = 'g3';
trigger.closest = selector => selector === '.grammar-card[data-grammar-detail-id]' ? trigger : null;
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

// Hidden scroll containers ignore scrollTop writes, as in real browser layout.
const scroller = modal.querySelector('.grammar-detail-modal');
let detailScroll = 420;
Object.defineProperty(scroller, 'scrollTop', {
  get: () => detailScroll,
  set: value => { if (!modal.hidden) detailScroll = value; },
});
content.emit('click', { target: trigger });
assert.equal(detailScroll, 0, 'reopened details must reset after becoming visible');
scroller.scrollTop = 650;
modal.emit('click', { target: modal });
const nextCard = new Node(); nextCard.dataset.grammarDetailId = 'g2';
nextCard.closest = selector => selector === '.grammar-card[data-grammar-detail-id]' ? nextCard : null;
const bodyText = new Node(); bodyText.closest = selector => nextCard.closest(selector);
content.emit('click', { target: bodyText });
assert.equal(detailScroll, 0, 'different cards also start at the top');
assert.equal(modal.querySelector('#grammarDetailTitle').textContent, '文法1');
modal.emit('click', { target: modal });
// The delegated detail handler leaves nested controls to their own handlers.
const detailClick = content.listeners.click.at(-1);
for (const selector of ['button', 'a', 'input', 'summary', '[data-term]', '[data-conjugate-id]', '[data-status]', '[role="button"]']) {
  const control = new Node();
  control.closest = query => query === '.grammar-card[data-grammar-detail-id]' ? trigger : query.includes(selector) ? control : null;
  detailClick({ target: control });
  assert.equal(modal.hidden, true, `${selector} must not open grammar details`);
}
const vocabTarget = new Node();
content.emit('click', { target: vocabTarget });
assert.equal(modal.hidden, true, 'vocabulary cards have no grammar details');
content.emit('keydown', { target: trigger, key: 'Enter' });
assert.equal(modal.hidden, false, 'focused card opens with Enter');
modal.emit('click', { target: modal });
content.emit('keydown', { target: bodyText, key: ' ' });
assert.equal(modal.hidden, true, 'nested keyboard interactions do not open the card');
console.log('PASS: whole-card activation, nested-control exclusions, keyboard access and scroll reset on every open');

// The directory replaces search and the standalone bookmark.
tick(801);
assert.doesNotMatch(html, /searchToggle|searchPanel|searchInput|resumeBookmark|type="search"/);
const rail = html.match(/<aside class="floating-actions"[\s\S]*?<\/aside>/)[0];
assert.deepEqual([...rail.matchAll(/<button id="([^"]+)"/g)].map(match => match[1]), ['tocToggle', 'filterToggle', 'backToTop']);
api.state.type = 'grammar'; api.state.filter = 'followed';
api.state.followed.add('g2'); api.state.mastered.add('g1');
api.sessionResume['grammar:N5'] = 'g2'; api.state.lastSeen['grammar:N5'] = 'g3';
api.render();
const tocToggle = document.getElementById('tocToggle');
tocToggle.emit('click');
const tocModal = document.body.appended.at(-1);
assert.equal(tocModal.hidden, false);
assert.equal(tocModal.querySelector('#infoModalTitle').textContent, 'N5 · 语法目录');
let directory = tocModal.querySelector('.modal-body').innerHTML;
assert.equal((directory.match(/data-toc-id=/g) || []).length, 3, 'directory ignores card status filters');
assert.match(directory, /toc-mastered/); assert.match(directory, /toc-followed/);
assert.equal((directory.match(/class="toc-bookmark"/g) || []).length, 1);
assert.match(directory, /data-toc-id="g2"[^]*?class="toc-bookmark"/);
assert.doesNotMatch(directory.replace(/<[^>]*>/g, ''), /掌握|关注|上次|meaning/);
const row = new Node(); row.dataset.tocId = 'g1'; row.closest = selector => selector === '[data-toc-id]' ? row : null;
tocModal.emit('click', { target: row });
assert.equal(tocModal.hidden, true); assert.equal(api.state.filter, 'all');
assert.equal(document.getElementById('g1').lastScrollOptions.block, 'start');
assert.equal(document.activeElement, document.getElementById('g1'));
assert.equal(api.state.lastSeen['grammar:N5'], 'g1');
// Selecting a destination in the current filter preserves that filter.
api.state.filter = 'followed'; api.render(); tocToggle.emit('click');
api.selectDirectoryItem('g2'); assert.equal(api.state.filter, 'followed');
// A late vocabulary card must be materialized before scrolling to it.
api.state.type = 'vocab'; api.state.filter = 'unmastered'; api.state.mastered.add('v99');
api.state.startIndex = 0; api.state.visibleCount = 80; api.render();
assert.equal(document.getElementById('v99'), null);
tocToggle.emit('click');
directory = tocModal.querySelector('.modal-body').innerHTML;
assert.equal((directory.match(/data-toc-id=/g) || []).length, 100);
assert.equal(tocModal.querySelector('#infoModalTitle').textContent, 'N5 · 词汇目录');
api.selectDirectoryItem('v99');
assert.equal(tocModal.hidden, true); assert.equal(api.state.filter, 'all');
assert.ok(document.getElementById('v99')); assert.equal(api.state.startIndex, 91);
assert.equal(document.getElementById('v99').lastScrollOptions.behavior, 'auto');
assert.match(content.innerHTML, /词汇 100\/100/);
window.JLPT_DATA.grammar.N4 = [{ ...grammar[0], id: 'n4g1', level: 'N4' }];
api.state.type = 'grammar'; api.state.level = 'N4'; api.render(); tocToggle.emit('click');
assert.equal((tocModal.querySelector('.modal-body').innerHTML.match(/data-toc-id=/g) || []).length, 1);
assert.doesNotMatch(tocModal.querySelector('.modal-body').innerHTML, /class="toc-bookmark"/);
api.selectDirectoryItem('v99'); assert.equal(tocModal.hidden, false, 'reject destinations from other categories');
document.emit('keydown', { key: 'Escape' }); assert.equal(tocModal.hidden, true);
assert.equal(document.activeElement, tocToggle);
window.visualViewport.height = 510; window.visualViewport.offsetTop = 20; window.visualViewport.emit('resize');
assert.equal(document.documentElement.style['--action-bottom-offset'], '314px');
window.visualViewport.height = 844; window.visualViewport.offsetTop = 0; window.visualViewport.emit('resize');
assert.equal(document.documentElement.style['--action-bottom-offset'], '0px');
console.log('PASS: complete category directory, icon-only states, prior-read marker, filtered/lazy destinations and focus restoration');
// Compact navigation must initialize after its old search nodes are removed.
context.MutationObserver = class { observe() {} disconnect() {} };
context.queueMicrotask = fn => fn();
vm.runInContext(fs.readFileSync('compact-nav.js', 'utf8'), context);
// iOS's absolute rail measures the app-shell bottom, not the fixed viewport.
const iosDocument = new Node(); iosDocument.body = new Node(); iosDocument.documentElement = new Node();
iosDocument.createElement = () => new Node();
iosDocument.getElementById = id => htmlIds.has(id) ? iosDocument.querySelector(id) : null;
iosDocument.body.getBoundingClientRect = () => ({ bottom: 1000, top: 0 });
const iosWindow = new Node(); iosWindow.JLPT_DATA = window.JLPT_DATA;
iosWindow.innerHeight = 800; iosWindow.innerWidth = 390;
iosWindow.visualViewport = new Node(); iosWindow.visualViewport.height = 700; iosWindow.visualViewport.offsetTop = 10;
iosWindow.JLPT_INSTALL_CARD_GESTURES = () => ({ cancel() {} });
const iosContext = vm.createContext({ ...context, window: iosWindow, document: iosDocument, getComputedStyle: () => ({ overflowY: 'auto' }) });
vm.runInContext(appSource, iosContext);
assert.equal(iosDocument.documentElement.style['--action-bottom-offset'], '290px');
console.log('PASS: compact navigation startup and iOS absolute-rail positioning');
// Category totals now live in the switchable tabs; progress remains level-specific.
api.state.mastered = new Set(['g1', 'n4g1', 'v99']);
api.state.type = 'grammar'; api.state.level = 'N4'; api.state.filter = 'followed'; api.render();
assert.equal(document.getElementById('grammarCount').textContent, '4');
assert.equal(document.getElementById('vocabCount').textContent, '100');
assert.equal(document.getElementById('progressPercent').textContent, '100% · 1/1');
assert.doesNotMatch(html, /hero-stat|碎片时间|class="hero/);
for (const id of ['masteredCount', 'grammarMasteredCount', 'grammarFollowedCount', 'vocabMasteredCount', 'vocabFollowedCount']) {
  assert.equal(document.getElementById(id), null);
}
assert.match(html, /data-type="grammar"[^>]*>语法 <span id="grammarCount"/);
assert.match(html, /data-type="vocab"[^>]*>词汇 <span id="vocabCount"/);
console.log('PASS: tab totals across levels and filters, existing mastery progress, removed hero and extra progress counts');
