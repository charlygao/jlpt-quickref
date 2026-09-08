const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { build } = require('./build-offline.cjs');
const template = fs.readFileSync('scripts/service-worker.template.js', 'utf8');
const scope = 'https://example.com/jlpt-quickref/';
const sha = body => crypto.createHash('sha256').update(body).digest('hex');
const key = request => typeof request === 'string' ? request : request.url;

class MemoryCaches {
  constructor() { this.stores = new Map(); }
  async keys() { return [...this.stores.keys()]; }
  async delete(name) { return this.stores.delete(name); }
  async open(name) {
    if (!this.stores.has(name)) this.stores.set(name, new Map());
    const store = this.stores.get(name);
    return { match: async request => store.get(key(request))?.clone(),
      put: async (request, response) => { store.set(key(request), response.clone()); },
      delete: async request => store.delete(key(request)) };
  }
}
function release(id) {
  const bodies = new Map([
    [new URL('index.html', scope).href, `<!doctype html><script src="data.js?offlinev=${id}"></script>`],
    [new URL(`data.js?offlinev=${id}`, scope).href, `window.data = '${id}';`],
    [new URL(`style.css?offlinev=${id}`, scope).href, `body { color: ${id === 'a' ? 'red' : 'blue'}; }`],
  ]);
  return { id, bodies, assets: [...bodies].map(([url, body]) => ({ url: url.slice(scope.length), sha256: sha(body), bytes: Buffer.byteLength(body) })) };
}
function worker(bundle, caches, network) {
  const events = {};
  let hits = 0;
  const self = { registration: { scope }, clients: { claim: async () => {} }, skipWaiting: async () => {}, addEventListener(name, fn) { events[name] = fn; } };
  vm.runInNewContext(template.replace('/* RELEASE */ null', JSON.stringify(bundle.id)).replace('/* ASSETS */ []', JSON.stringify(bundle.assets)), {
    self, caches, URL, Response, AbortSignal, crypto: crypto.webcrypto, Uint8Array, Date,
    fetch: async request => {
      hits++;
      if (network.offline) throw new TypeError('offline');
      const body = network.bodies.get(key(request));
      return new Response(body ?? 'not found', { status: body === undefined ? 404 : 200 });
    },
  });
  return {
    get hits() { return hits; },
    async message(type) {
      const messages = []; let task;
      events.message({ data: { type }, ports: [{ postMessage: value => messages.push(value) }], waitUntil: promise => { task = promise; } });
      await task;
      return messages.at(-1);
    },
    async request(url, mode = 'cors', method = 'GET') {
      let response;
      events.fetch({ request: { url, mode, method }, respondWith: value => { response = value; } });
      return response && await response;
    },
  };
}

(async () => {
  // Build the real app: every referenced local script, stylesheet and notice
  // must exist and be checksummed; data and vendor SDK are included too.
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'jlpt-offline-test-'));
  try {
    const result = build(process.cwd(), directory);
    const html = fs.readFileSync(path.join(directory, 'index.html'), 'utf8');
    assert.ok(result.assets.some(asset => asset.url.startsWith('data/full-vocab.js?offlinev=')));
    assert.ok(result.assets.some(asset => asset.url.startsWith('vendor/supabase-')));
    for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
      if (url.startsWith('#')) continue;
      assert.ok(result.assets.some(asset => asset.url === url), `uncached dependency: ${url}`);
    }
    for (const asset of result.assets) assert.equal(sha(fs.readFileSync(path.join(directory, asset.url.split('?')[0]))), asset.sha256);
    assert.equal(build(process.cwd(), directory).release, result.release, 'build must be deterministic');
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }

  const a = release('a'), b = release('b');
  const caches = new MemoryCaches();
  const network = { bodies: new Map(a.bodies), offline: false };
  const first = worker(a, caches, network);
  assert.equal((await first.message('STATUS')).ready, false);
  assert.equal((await first.message('DOWNLOAD')).ready, true);
  network.offline = true;
  // Cold reopening and refresh work under the GitHub Pages subdirectory.
  for (const url of [scope, scope + 'index.html', scope + '?viewport-debug=1']) {
    assert.equal(await (await first.request(url, 'navigate')).text(), a.bodies.get(scope + 'index.html'));
  }
  assert.equal(await (await first.request(scope + 'data.js?offlinev=a')).text(), "window.data = 'a';");
  // API requests and other repositories on the same origin remain untouched.
  assert.equal(await first.request('https://db.supabase.co/rest/v1/user_progress'), undefined);
  assert.equal(await first.request('https://example.com/other/index.html', 'navigate'), undefined);
  assert.equal(await first.request(scope + 'submit', 'cors', 'POST'), undefined);

  network.offline = false;
  network.bodies = new Map(b.bodies);
  network.bodies.set(scope + 'style.css?offlinev=b', '<html>stale CDN error page</html>');
  const next = worker(b, caches, network);
  assert.equal((await next.message('STATUS')).updateAvailable, true);
  assert.equal((await next.message('DOWNLOAD')).type, 'error', 'reject a corrupt/mixed deployment');
  network.offline = true;
  assert.equal(await (await next.request(scope, 'navigate')).text(), a.bodies.get(scope + 'index.html'), 'failed update retains the previous complete bundle');
  network.offline = false;
  network.bodies = new Map(b.bodies);
  const beforeResume = next.hits;
  assert.equal((await next.message('DOWNLOAD')).downloadedRelease, 'b');
  assert.equal(next.hits - beforeResume, 1, 'resume verifies/reuses previously downloaded files');
  network.offline = true;
  assert.equal(await (await next.request(scope, 'navigate')).text(), b.bodies.get(scope + 'index.html'));
  assert.equal(await (await next.request(scope + 'data.js?offlinev=a')).text(), "window.data = 'a';", 'an older open tab keeps its own asset version');

  // Deleted cache entries cannot produce a false "ready" status.
  await (await caches.open('jlpt-offline:/jlpt-quickref/:b')).delete(scope + 'data.js?offlinev=b');
  assert.equal((await next.message('STATUS')).downloadedRelease, 'a');
  await (await caches.open('unrelated-cache')).put(scope + 'keep', new Response('keep'));
  assert.equal((await next.message('CLEAR')).ready, false);
  assert.deepEqual(await caches.keys(), ['unrelated-cache']);
  console.log('PASS: complete offline build, cold offline navigation, subpath scope, version integrity, interrupted update/resume, old-tab assets, eviction and cache removal');
})().catch(error => { console.error(error); process.exitCode = 1; });
