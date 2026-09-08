'use strict';
const RELEASE = /* RELEASE */ null;
const ASSETS = /* ASSETS */ [];
const SCOPE = self.registration.scope;
const PREFIX = `jlpt-offline:${new URL(SCOPE).pathname}:`;
const CACHE = PREFIX + RELEASE;
const READY = new URL('__offline_ready__', SCOPE).href;
let downloading = null;
const listeners = new Set();
const absolute = url => new URL(url, SCOPE).href;

async function readyBundle(name) {
  const cache = await caches.open(name);
  const marker = await cache.match(READY);
  if (!marker) return null;
  const data = await marker.json();
  // A marker alone is insufficient: storage eviction can remove resources.
  const present = await Promise.all(data.urls.map(url => cache.match(url)));
  return present.every(Boolean) ? { ...data, name, cache } : null;
}
async function bundles() {
  const names = (await caches.keys()).filter(name => name.startsWith(PREFIX));
  return (await Promise.all(names.map(readyBundle))).filter(Boolean).sort((a, b) => b.completedAt - a.completedAt);
}
async function status() {
  const list = await bundles();
  const bundle = list.find(item => item.release === RELEASE) || list[0];
  return { ready: !!bundle, release: RELEASE, downloadedRelease: bundle?.release,
    updateAvailable: !!bundle && bundle.release !== RELEASE,
    bytes: ASSETS.reduce((sum, asset) => sum + asset.bytes, 0),
    files: ASSETS.length, completedAt: bundle?.completedAt };
}
async function valid(response, asset) {
  if (!response?.ok) return false;
  const bytes = await response.clone().arrayBuffer();
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hex = [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hex === asset.sha256;
}
function progress(done, bytes) {
  for (const port of listeners) port.postMessage({ type: 'progress', done, total: ASSETS.length, bytes });
}
async function download() {
  const cache = await caches.open(CACHE);
  let next = 0, done = 0, bytes = 0, failure = null;
  // Partial downloads can resume, but are never advertised/served as ready.
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (!failure && next < ASSETS.length) {
      const asset = ASSETS[next++];
      try {
        const url = absolute(asset.url);
        let response = await cache.match(url);
        if (!await valid(response, asset)) {
          response = await fetch(url, { cache: 'no-store', credentials: 'omit', signal: AbortSignal.timeout(30000) });
          if (!await valid(response, asset)) throw new Error('资源版本不一致，请稍后重试');
          await cache.put(url, response);
        }
        done++; bytes += asset.bytes; progress(done, bytes);
      } catch (error) { failure = error; }
    }
  }));
  if (failure) throw failure;
  // Publish completion only after every resource has been verified and saved.
  await cache.put(READY, new Response(JSON.stringify({ release: RELEASE,
    completedAt: Date.now(), bytes, urls: ASSETS.map(asset => absolute(asset.url)) })));
  return status();
}
self.addEventListener('install', event => { event.waitUntil(self.skipWaiting()); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('message', event => {
  const port = event.ports?.[0];
  if (!port) return;
  event.waitUntil((async () => {
    try {
      let result;
      if (event.data?.type === 'STATUS') result = await status();
      else if (event.data?.type === 'DOWNLOAD') {
        listeners.add(port);
        if (!downloading) downloading = download().finally(() => { downloading = null; });
        result = await downloading;
      } else if (event.data?.type === 'CLEAR') {
        if (downloading) throw new Error('请等待下载完成');
        const names = (await caches.keys()).filter(name => name.startsWith(PREFIX));
        await Promise.all(names.map(name => caches.delete(name)));
        result = await status();
      } else return;
      port.postMessage({ type: 'done', ...result });
    } catch (error) {
      port.postMessage({ type: 'error', message: error.name === 'QuotaExceededError' ? '浏览器存储空间不足，请清理空间后重试' : (error.message || '下载失败，请检查网络后重试') });
    } finally { listeners.delete(port); }
  })());
});
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  // Cache only this project's static files. Auth/API requests are never cached.
  if (request.method !== 'GET' || url.origin !== new URL(SCOPE).origin || !url.href.startsWith(SCOPE)) return;
  const relative = url.pathname.slice(new URL(SCOPE).pathname.length);
  if (request.mode === 'navigate' && ['', 'index.html', 'viewport-diagnostics.html'].includes(relative)) {
    event.respondWith((async () => {
      const list = await bundles();
      const bundle = list.find(item => item.release === RELEASE) || list[0];
      if (bundle) return bundle.cache.match(absolute(relative === 'viewport-diagnostics.html' ? relative : 'index.html'));
      return fetch(request);
    })());
  } else if (url.searchParams.has('offlinev')) {
    event.respondWith((async () => {
      // Versioned HTML always receives assets from that exact release, even
      // when another tab finishes downloading an update during page loading.
      const name = PREFIX + url.searchParams.get('offlinev');
      if ((await caches.keys()).includes(name)) {
        const hit = await (await caches.open(name)).match(request);
        if (hit) return hit;
      }
      return fetch(request);
    })());
  }
});
