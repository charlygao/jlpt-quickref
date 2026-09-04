(() => {
  'use strict';

  const SUPABASE_URL = 'https://snznbkzheisitjiabfjg.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_vy3_kLHPZmNGhUuQ-BP8ow_468tVROf';
  const QUEUE_KEY = 'jlptQuickRef.syncQueue.v1';
  const MIGRATED_KEY = 'jlptQuickRef.cloudMigrated.v1';
  const CLAIMED_BY_KEY = 'jlptQuickRef.localProgressClaimedBy.v1';

  let client = null;
  let adapters = null;
  let currentUser = null;
  let initialized = false;
  let reconciledUserId = null;
  let flushTimer = 0;
  let flushPromise = null;
  let authBusy = false;
  let lockedScrollY = 0;

  const els = {};

  function readJson(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || '') || fallback; }
    catch (_) { return fallback; }
  }

  function writeJson(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) {}
  }

  function setMessage(message = '', kind = '') {
    if (!els.message) return;
    els.message.textContent = message;
    els.message.classList.toggle('is-error', kind === 'error');
    els.message.classList.toggle('is-success', kind === 'success');
  }

  function setSyncState(state, message) {
    if (els.accountButton) {
      els.accountButton.dataset.syncState = state;
      const label = currentUser ? `${currentUser.email || '已登录'}，${message}` : '登录并同步学习进度';
      els.accountButton.setAttribute('aria-label', label);
      els.accountButton.title = label;
    }
    if (els.syncIndicator) els.syncIndicator.dataset.state = state;
    if (els.syncStatus) els.syncStatus.textContent = message;
  }

  function renderSession() {
    const signedIn = Boolean(currentUser);
    if (els.signedOut) els.signedOut.hidden = signedIn;
    if (els.signedIn) els.signedIn.hidden = !signedIn;
    if (els.currentEmail) els.currentEmail.textContent = currentUser?.email || '';
    if (!signedIn) setSyncState('local', '未登录，仅保存在本机');
  }

  function usesPageScrollRoot() {
    const pageShell = document.querySelector('.page-shell');
    return pageShell && /^(auto|scroll)$/.test(getComputedStyle(pageShell).overflowY);
  }

  function openModal() {
    if (!els.modal) return;
    lockedScrollY = window.scrollY || window.pageYOffset || 0;
    els.modal.hidden = false;
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    if (!usesPageScrollRoot()) document.body.style.top = `-${lockedScrollY}px`;
    setMessage();
    requestAnimationFrame(() => (currentUser ? els.signout : els.email)?.focus({ preventScroll: true }));
  }

  function closeModal() {
    if (!els.modal || els.modal.hidden) return;
    els.modal.hidden = true;
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    const hadFixedBody = Boolean(document.body.style.top);
    document.body.style.top = '';
    if (hadFixedBody) window.scrollTo({ top: lockedScrollY, behavior: 'auto' });
    els.accountButton?.focus({ preventScroll: true });
  }

  function setAuthBusy(busy) {
    authBusy = busy;
    [els.login, els.signup, els.signout].forEach(button => { if (button) button.disabled = busy; });
  }

  function queueMap() {
    const value = readJson(QUEUE_KEY, {});
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  function queueKey(userId, itemId) {
    return `${userId}:${itemId}`;
  }

  function enqueue(userId, itemId, progress) {
    const queue = queueMap();
    addQueueEntry(queue, userId, itemId, progress);
    writeJson(QUEUE_KEY, queue);
  }

  function addQueueEntry(queue, userId, itemId, progress) {
    queue[queueKey(userId, itemId)] = {
      userId,
      itemId,
      mastered: Boolean(progress.mastered),
      followed: Boolean(progress.followed),
      version: Date.now() + Math.random(),
    };
  }

  function enqueueMap(userId, progressMap) {
    const queue = queueMap();
    progressMap.forEach((progress, itemId) => addQueueEntry(queue, userId, itemId, progress));
    writeJson(QUEUE_KEY, queue);
  }

  function chunks(items, size = 500) {
    const result = [];
    for (let index = 0; index < items.length; index += size) result.push(items.slice(index, index + size));
    return result;
  }

  function pendingFor(userId) {
    return Object.values(queueMap()).filter(item => item?.userId === userId && item.itemId);
  }

  function progressMapFromRows(rows) {
    const result = new Map();
    (rows || []).forEach(row => {
      if (!row?.item_id) return;
      result.set(row.item_id, { mastered: Boolean(row.mastered), followed: Boolean(row.followed) });
    });
    return result;
  }

  function progressMapFromLocal(progress) {
    const result = new Map();
    (progress?.mastered || []).forEach(itemId => {
      const current = result.get(itemId) || {};
      result.set(itemId, { mastered: true, followed: Boolean(current.followed) });
    });
    (progress?.followed || []).forEach(itemId => {
      const current = result.get(itemId) || {};
      result.set(itemId, { mastered: Boolean(current.mastered), followed: true });
    });
    return result;
  }

  function applyMap(progressMap) {
    const mastered = [];
    const followed = [];
    progressMap.forEach((progress, itemId) => {
      if (progress.mastered) mastered.push(itemId);
      if (progress.followed) followed.push(itemId);
    });
    adapters?.applyProgress({ mastered, followed });
  }

  function overlay(target, source, union = false) {
    source.forEach((progress, itemId) => {
      if (!union) {
        target.set(itemId, { mastered: Boolean(progress.mastered), followed: Boolean(progress.followed) });
        return;
      }
      const current = target.get(itemId) || {};
      target.set(itemId, {
        mastered: Boolean(current.mastered || progress.mastered),
        followed: Boolean(current.followed || progress.followed),
      });
    });
    return target;
  }

  async function fetchAllProgress() {
    const rows = [];
    const pageSize = 1000;
    for (let from = 0; ; from += pageSize) {
      const { data, error } = await client
        .from('user_progress')
        .select('item_id,mastered,followed')
        .order('item_id')
        .range(from, from + pageSize - 1);
      if (error) return { data: null, error };
      rows.push(...(data || []));
      if (!data || data.length < pageSize) return { data: rows, error: null };
    }
  }

  async function flushQueue(userId = currentUser?.id) {
    if (!client || !userId || !navigator.onLine) {
      if (userId) setSyncState('syncing', '等待网络后同步');
      return false;
    }
    if (flushPromise) return flushPromise;

    flushPromise = (async () => {
      const pending = pendingFor(userId);
      if (!pending.length) {
        setSyncState('synced', '已同步到云端');
        return true;
      }

      setSyncState('syncing', '正在同步…');
      const active = pending.filter(item => item.mastered || item.followed);
      const removed = pending.filter(item => !item.mastered && !item.followed);
      let error = null;

      if (active.length) {
        const rows = active.map(item => ({
          user_id: userId,
          item_id: item.itemId,
          mastered: item.mastered,
          followed: item.followed,
          updated_at: new Date().toISOString(),
        }));
        for (const batch of chunks(rows)) {
          ({ error } = await client.from('user_progress').upsert(batch, { onConflict: 'user_id,item_id' }));
          if (error) break;
        }
      }

      if (!error && removed.length) {
        const ids = removed.map(item => item.itemId);
        for (const batch of chunks(ids, 200)) {
          ({ error } = await client.from('user_progress').delete().eq('user_id', userId).in('item_id', batch));
          if (error) break;
        }
      }

      if (error) {
        console.warn('Progress sync failed:', error.message);
        setSyncState('error', '同步失败，将自动重试');
        if (els.modal && !els.modal.hidden) setMessage(`同步失败：${error.message}`, 'error');
        return false;
      }

      const latest = queueMap();
      pending.forEach(item => {
        const key = queueKey(userId, item.itemId);
        if (latest[key]?.version === item.version) delete latest[key];
      });
      writeJson(QUEUE_KEY, latest);
      const hasNewerChanges = pendingFor(userId).length > 0;
      setSyncState(hasNewerChanges ? 'syncing' : 'synced', hasNewerChanges ? '正在同步最新修改…' : '已同步到云端');
      if (hasNewerChanges) setTimeout(() => flushQueue(userId), 0);
      return true;
    })().finally(() => { flushPromise = null; });

    return flushPromise;
  }

  async function reconcile(session) {
    const nextUser = session?.user || null;
    const nextUserId = nextUser?.id || null;
    currentUser = nextUser;
    renderSession();

    if (!nextUserId) {
      reconciledUserId = null;
      return;
    }
    if (reconciledUserId === nextUserId) return;
    reconciledUserId = nextUserId;
    setSyncState('syncing', '正在读取云端进度…');

    const { data, error } = await fetchAllProgress();

    if (currentUser?.id !== nextUserId) return;
    if (error) {
      reconciledUserId = null;
      console.warn('Progress load failed:', error.message);
      setSyncState('error', '无法读取云端进度');
      setMessage(`无法读取云端进度：${error.message}`, 'error');
      return;
    }

    const merged = progressMapFromRows(data);
    const migrated = readJson(MIGRATED_KEY, {});
    const claimedBy = localStorage.getItem(CLAIMED_BY_KEY);
    const shouldClaimLocal = !migrated[nextUserId] && (!claimedBy || claimedBy === nextUserId);

    if (shouldClaimLocal) {
      const local = progressMapFromLocal(adapters?.getProgress());
      overlay(merged, local, true);
      localStorage.setItem(CLAIMED_BY_KEY, nextUserId);
      enqueueMap(nextUserId, merged);
    }

    pendingFor(nextUserId).forEach(item => {
      merged.set(item.itemId, { mastered: item.mastered, followed: item.followed });
    });
    applyMap(merged);

    const synced = await flushQueue(nextUserId);
    if (synced) {
      migrated[nextUserId] = true;
      writeJson(MIGRATED_KEY, migrated);
      if (!claimedBy) localStorage.setItem(CLAIMED_BY_KEY, nextUserId);
    }
  }

  async function submitAuth(mode) {
    if (!client || authBusy) return;
    if (!els.form.reportValidity()) return;
    const email = els.email.value.trim();
    const password = els.password.value;
    setAuthBusy(true);
    setMessage(mode === 'signup' ? '正在创建账号…' : '正在登录…');

    try {
      const result = mode === 'signup'
        ? await client.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: new URL('.', location.href).href },
          })
        : await client.auth.signInWithPassword({ email, password });

      if (result.error) throw result.error;
      if (mode === 'signup' && !result.data.session) {
        setMessage('账号已创建，请查收确认邮件后再登录。', 'success');
      } else {
        setMessage(mode === 'signup' ? '注册并登录成功。' : '登录成功，正在同步进度…', 'success');
        await reconcile(result.data.session);
      }
    } catch (error) {
      setMessage(error?.message || '操作失败，请稍后重试。', 'error');
    } finally {
      setAuthBusy(false);
    }
  }

  function bindUi() {
    Object.assign(els, {
      accountButton: document.getElementById('accountButton'),
      modal: document.getElementById('authModal'),
      close: document.getElementById('authModalClose'),
      signedOut: document.getElementById('authSignedOut'),
      signedIn: document.getElementById('authSignedIn'),
      form: document.getElementById('authForm'),
      email: document.getElementById('authEmail'),
      password: document.getElementById('authPassword'),
      login: document.getElementById('authLogin'),
      signup: document.getElementById('authSignup'),
      signout: document.getElementById('authSignout'),
      currentEmail: document.getElementById('authCurrentEmail'),
      syncIndicator: document.getElementById('authSyncIndicator'),
      syncStatus: document.getElementById('authSyncStatus'),
      message: document.getElementById('authMessage'),
    });

    els.accountButton?.addEventListener('click', openModal);
    els.close?.addEventListener('click', closeModal);
    els.modal?.addEventListener('click', event => { if (event.target === els.modal) closeModal(); });
    els.form?.addEventListener('submit', event => { event.preventDefault(); submitAuth('login'); });
    els.signup?.addEventListener('click', () => submitAuth('signup'));
    els.signout?.addEventListener('click', async () => {
      if (!client || authBusy) return;
      setAuthBusy(true);
      setMessage('正在退出…');
      const { error } = await client.auth.signOut();
      setAuthBusy(false);
      if (error) { setMessage(error.message, 'error'); return; }
      currentUser = null;
      reconciledUserId = null;
      renderSession();
      setMessage('已退出登录；当前进度仍保留在本机。', 'success');
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && els.modal && !els.modal.hidden) closeModal();
    });
  }

  async function init(nextAdapters) {
    if (initialized) return;
    initialized = true;
    adapters = nextAdapters;
    bindUi();

    if (!window.supabase?.createClient) {
      setSyncState('error', '登录组件加载失败');
      setMessage('登录组件加载失败，请检查网络后刷新页面。', 'error');
      return;
    }

    client = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    });

    client.auth.onAuthStateChange((event, session) => {
      if (event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') return;
      setTimeout(() => reconcile(session), 0);
    });

    const { data, error } = await client.auth.getSession();
    if (error) {
      setSyncState('error', '登录状态读取失败');
      setMessage(error.message, 'error');
      return;
    }
    await reconcile(data.session);
    window.addEventListener('online', () => flushQueue());
  }

  function saveItem(itemId, progress) {
    if (!currentUser?.id || !itemId) return;
    enqueue(currentUser.id, itemId, progress);
    setSyncState('syncing', navigator.onLine ? '等待同步…' : '等待网络后同步');
    clearTimeout(flushTimer);
    flushTimer = setTimeout(() => flushQueue(), 220);
  }

  window.JLPT_PROGRESS_SYNC = { init, saveItem };
})();
