const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('supabase-progress.js', 'utf8');
const key = 'jlptQuickRef.syncQueue.v1';
const storage = new Map([
  ['jlptQuickRef.lastSyncUser.v1', JSON.stringify({ id: 'a', email: 'a@example.com' })],
  ['jlptQuickRef.cloudMigrated.v1', JSON.stringify({ a: true })],
  ['jlptQuickRef.localProgressClaimedBy.v1', 'a'],
]);
const settle = () => new Promise(resolve => setImmediate(resolve));
function setup(user = 'a') {
  const listeners = {};
  const navigator = { onLine: false };
  const nodes = new Map();
  const document = { addEventListener() {}, getElementById(id) {
    if (!nodes.has(id)) nodes.set(id, { hidden: false, dataset: {}, classList: { toggle() {} }, addEventListener() {}, setAttribute() {} });
    return nodes.get(id);
  } };
  let sessionReads = 0, applied;
  const deletes = [], upserts = [];
  const client = {
    auth: {
      onAuthStateChange() {}, startAutoRefresh() {}, stopAutoRefresh() {},
      async getSession() { sessionReads++; return { data: { session: { user: { id: user } } } }; },
    },
    from() { return {
      select() { return { order() { return { range: async () => ({ data: [{ item_id: 'g1', mastered: true, followed: false }], error: null }) }; } }; },
      async upsert(rows) { upserts.push(...rows); return { error: null }; },
      delete() { return { eq: (column, id) => ({ in: async (field, ids) => { deletes.push({ user: id, ids }); return { error: null }; } }) }; },
    }; },
  };
  const window = { supabase: { createClient: () => client }, addEventListener(name, fn) { listeners[name] = fn; } };
  vm.runInNewContext(source, { window, document, navigator, console, Date, Math,
    localStorage: { getItem: k => storage.get(k) ?? null, setItem: (k, value) => storage.set(k, String(value)) },
    setTimeout() { return 1; }, clearTimeout() {},
  });
  return { api: window.JLPT_PROGRESS_SYNC, get reads() { return sessionReads; }, get applied() { return applied; },
    adapters: { getProgress: () => ({ mastered: [], followed: [] }), applyProgress: value => { applied = value; } },
    online() { navigator.onLine = true; listeners.online(); }, deletes, upserts };
}
(async () => {
  let t = setup(); await t.api.init(t.adapters);
  assert.equal(t.reads, 0, 'offline startup must not wait on an expired token refresh');
  t.api.saveItem('g1', { mastered: false, followed: false });
  t.api.saveItem('v2', { mastered: true, followed: true });
  assert.equal(JSON.parse(storage.get(key))['a:g1'].mastered, false);
  // Reopen while still offline: pending changes and their owner survive.
  t = setup(); await t.api.init(t.adapters);
  t.online(); await settle(); await settle();
  assert.deepEqual([...t.applied.mastered], ['v2']);
  assert.deepEqual([...t.applied.followed], ['v2']);
  assert.equal(t.deletes[0].user, 'a');
  assert.deepEqual([...t.deletes[0].ids], ['g1']);
  assert.deepEqual(JSON.parse(storage.get(key)), {});
  // A later login to another account must never consume the first user's queue.
  t = setup(); await t.api.init(t.adapters);
  t.api.saveItem('only-a', { followed: true });
  t = setup('b'); await t.api.init(t.adapters); t.online(); await settle(); await settle();
  assert.ok(JSON.parse(storage.get(key))['a:only-a']);
  assert.ok(!t.applied.followed.includes('only-a'));
  assert.equal(t.upserts.length, 0);
  console.log('PASS: offline cold-start queue ownership, false-state edits, reopen/reconnect merge, cloud writes and account isolation');
})().catch(error => { console.error(error); process.exitCode = 1; });
