const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('offline.js', 'utf8');
const ids = new Set([...fs.readFileSync('index.html', 'utf8').matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const [, id] of source.matchAll(/document\.getElementById\('([^']+)'\)/g)) assert.ok(ids.has(id), `Missing #${id}`);
class Target {
  constructor() { this.listeners = {}; this.hidden = false; }
  addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
  removeEventListener(name, fn) { this.listeners[name] = (this.listeners[name] || []).filter(item => item !== fn); }
  emit(name) { return Promise.all((this.listeners[name] || []).map(fn => fn())); }
}
const settle = async () => { await new Promise(resolve => setImmediate(resolve)); await new Promise(resolve => setImmediate(resolve)); };
function setup({ page = 'a', active = 'a', cached = 'a', online = true } = {}) {
  let now = 1000000, latest = active, cachedRelease = cached, activeRelease = active;
  let reloads = 0, downloads = 0, updates = 0, fail = false, defer = false, complete;
  const timers = new Map(), intervals = []; let timerId = 0;
  const nodes = new Map();
  const document = new Target();
  document.getElementById = id => { if (!nodes.has(id)) nodes.set(id, new Target()); return nodes.get(id); };
  document.querySelector = () => ({ content: page });
  document.hidden = false;
  const currentStatus = () => ({ type: 'done', release: activeRelease, downloadedRelease: cachedRelease,
    ready: !!cachedRelease, updateAvailable: !!cachedRelease && activeRelease !== cachedRelease, bytes: 4000000, files: 57, completedAt: 100000 });
  const worker = new Target(); worker.state = 'activated';
  worker.postMessage = ({ type }, [port]) => {
    if (type === 'STATUS') port.postMessage(currentStatus());
    else if (type === 'DOWNLOAD') {
      downloads++;
      port.postMessage({ type: 'progress', done: 1, total: 57, bytes: 100 });
      complete = () => {
        if (fail) port.postMessage({ type: 'error', message: '网络中断' });
        else { cachedRelease = activeRelease; port.postMessage(currentStatus()); }
      };
      if (!defer) complete();
    } else if (type === 'CLEAR') { cachedRelease = null; port.postMessage(currentStatus()); }
  };
  const registration = new Target(); registration.active = worker;
  registration.update = async () => { updates++; activeRelease = latest; };
  const serviceWorker = new Target();
  serviceWorker.getRegistration = async () => registration;
  serviceWorker.register = async () => registration;
  const navigator = { onLine: online, serviceWorker, storage: { persist: async () => true } };
  const window = new Target();
  window.isSecureContext = true;
  window.location = { href: 'https://example.com/jlpt-quickref/', reload() { reloads++; } };
  class Channel {
    constructor() {
      this.port1 = { close() { this.closed = true; } };
      this.port2 = { postMessage: data => queueMicrotask(() => { if (!this.port1.closed) this.port1.onmessage?.({ data }); }) };
    }
  }
  vm.runInNewContext(source, { window, document, navigator, URL, MessageChannel: Channel,
    Date: class extends Date { static now() { return now; } },
    setTimeout(fn) { const id = ++timerId; timers.set(id, fn); return id; }, clearTimeout(id) { timers.delete(id); },
    setInterval(fn, ms) { intervals.push({ fn, ms }); },
  });
  return {
    nodes, window, document, navigator, serviceWorker,
    get reloads() { return reloads; }, get downloads() { return downloads; }, get updates() { return updates; },
    publish(version) { latest = version; }, activate(version) { activeRelease = latest = version; return serviceWorker.emit('controllerchange'); },
    async poll() { now += 300000; for (const timer of intervals) { assert.equal(timer.ms, 300000); timer.fn(); } await settle(); },
    fail() { fail = true; }, defer() { defer = true; }, complete() { complete(); },
    click(id) { return nodes.get(id).emit('click'); },
  };
}
(async () => {
  // Updated content is announced even when the user never downloaded offline.
  const t = setup({ cached: null }); await settle();
  assert.equal(t.nodes.get('updateNotice').hidden, true);
  t.publish('b'); await t.poll();
  assert.equal(t.nodes.get('updateNotice').hidden, false);
  assert.equal(t.downloads, 0); assert.equal(t.reloads, 0, 'background checks must never refresh the page');
  await t.click('updateLater'); await t.poll();
  assert.equal(t.nodes.get('updateNotice').hidden, true, 'do not repeat the dismissed release');
  assert.equal(t.nodes.get('offlineRefresh').hidden, false, 'manual action stays available');
  await t.activate('c'); await settle();
  assert.equal(t.nodes.get('updateNotice').hidden, false, 'a subsequent release gets its own prompt');
  t.defer();
  const applying = t.click('updateApply'); await settle();
  assert.equal(t.reloads, 0, 'wait for complete verified download');
  assert.equal(t.nodes.get('updateApply').disabled, true);
  t.complete(); await applying;
  assert.equal(t.reloads, 1);

  const failed = setup({ active: 'b' }); await settle(); failed.fail();
  await failed.click('updateApply');
  assert.equal(failed.reloads, 0);
  assert.match(failed.nodes.get('updateMessage').textContent, /网络中断/);
  assert.equal(failed.nodes.get('updateApply').disabled, false);

  const offline = setup({ active: 'b', cached: 'b', online: false }); await settle();
  assert.equal(offline.nodes.get('updateApply').textContent, '立即刷新');
  await offline.click('updateApply');
  assert.equal(offline.reloads, 1); assert.equal(offline.downloads, 0); assert.equal(offline.updates, 0);

  const notReady = setup({ active: 'b', online: false }); await settle();
  await notReady.click('updateApply'); assert.equal(notReady.reloads, 0);
  assert.match(notReady.nodes.get('updateMessage').textContent, /需要联网/);
  notReady.navigator.onLine = true; notReady.publish('c'); await notReady.window.emit('online'); await settle();
  assert.ok(notReady.updates > 0);

  const manual = setup({ active: 'b' }); await settle();
  await manual.click('offlineDownload');
  assert.equal(manual.reloads, 0); assert.equal(manual.nodes.get('offlineRefresh').textContent, '立即刷新');
  await manual.click('offlineRefresh'); assert.equal(manual.reloads, 1);

  const visibility = setup(); await settle();
  visibility.document.hidden = true;
  const before = visibility.updates;
  visibility.publish('b'); await visibility.poll(); assert.equal(visibility.updates, before);
  visibility.document.hidden = false; await visibility.document.emit('visibilitychange'); await settle();
  assert.equal(visibility.nodes.get('updateNotice').hidden, false);
  console.log('PASS: automatic update discovery, loaded-page versions, later/reminder behavior, explicit reload, complete-download gate, failure/offline handling and visibility/network checks');
})().catch(error => { console.error(error); process.exitCode = 1; });
