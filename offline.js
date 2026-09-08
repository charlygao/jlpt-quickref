(() => {
  const status = document.getElementById('offlineStatus');
  const download = document.getElementById('offlineDownload');
  const clear = document.getElementById('offlineClear');
  const progress = document.getElementById('offlineProgress');
  const reload = document.getElementById('offlineRefresh');
  const notice = document.getElementById('updateNotice');
  const message = document.getElementById('updateMessage');
  const apply = document.getElementById('updateApply');
  const later = document.getElementById('updateLater');
  const pageRelease = document.querySelector('meta[name="jlpt-release"]')?.content ||
    (document.currentScript?.src ? new URL(document.currentScript.src).searchParams.get('offlinev') : null);
  let dismissedRelease = null, checking = null, lastCheck = -Infinity;
  let registration, saved, busy = false;
  const mb = bytes => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  const supported = window.isSecureContext && 'serviceWorker' in navigator;
  if (!supported) {
    status.textContent = '当前浏览器无法保存离线资源，请使用 Safari 或 Chrome 的正常浏览模式。';
    return;
  }
  function render(data) {
    saved = data;
    clear.hidden = !data.ready;
    download.textContent = data.ready ? (data.updateAvailable ? '下载更新' : '检查并更新') : `下载全部资源 · ${mb(data.bytes)}`;
    if (data.ready) {
      const date = new Date(data.completedAt).toLocaleDateString();
      status.textContent = `${navigator.onLine ? '已可离线浏览' : '正在离线浏览'} · ${date}下载${data.updateAvailable ? '；有新资源可更新' : ''}。掌握和关注先保存在本机，联网后同步。`;
    } else status.textContent = `尚未下载 · 约 ${mb(data.bytes)}。请联网后下载。`;
    // Compare the loaded page too: a tab without an offline download can also
    // be out of date, and a newly cached release still needs a user-led reload.
    const newer = !!pageRelease && data.release !== pageRelease;
    const readyToReload = data.ready && data.downloadedRelease === data.release;
    reload.hidden = !newer;
    reload.textContent = readyToReload ? '立即刷新' : '更新并刷新';
    notice.hidden = !newer || dismissedRelease === data.release;
    apply.textContent = readyToReload ? '立即刷新' : '更新并刷新';
    message.textContent = readyToReload ? '新版本已准备好，刷新后使用。' : '有新的内容或样式可用，可更新后刷新。';
    if (newer && !data.updateAvailable) status.textContent += ' 当前页面有新版本可刷新。';
  }
  function setBusy(value) {
    busy = value;
    download.disabled = clear.disabled = value;
    reload.disabled = apply.disabled = later.disabled = value;
    progress.hidden = !value;
  }
  function call(worker, type) {
    return new Promise((resolve, reject) => {
      const channel = new MessageChannel();
      let timer;
      const finish = (fn, value) => { clearTimeout(timer); channel.port1.close(); fn(value); };
      const timeout = () => {
        clearTimeout(timer);
        timer = setTimeout(() => finish(reject, new Error('操作中断，请保持页面打开后重试；已有离线资源仍然保留。')), 45000);
      };
      channel.port1.onmessage = ({ data }) => {
        timeout();
        if (data.type === 'progress') {
          progress.value = data.done / data.total * 100;
          status.textContent = `正在下载 ${data.done}/${data.total} · ${mb(data.bytes)}，请保持页面打开…`;
          if (!notice.hidden) message.textContent = status.textContent;
        } else if (data.type === 'done') finish(resolve, data);
        else if (data.type === 'error') finish(reject, new Error(data.message));
      };
      timeout();
      worker.postMessage({ type }, [channel.port2]);
    });
  }
  async function worker(update = false) {
    if (!registration) throw new Error('离线功能尚未准备好，请联网后刷新重试。');
    if (update) await registration.update();
    const candidate = registration.installing || registration.waiting || registration.active;
    if (!candidate) throw new Error('离线功能尚未准备好，请刷新重试。');
    if (candidate.state !== 'activated') await new Promise((resolve, reject) => {
      const timer = setTimeout(() => { candidate.removeEventListener('statechange', change); reject(new Error('离线功能启动超时，请重试。')); }, 20000);
      function change() {
        if (candidate.state === 'activated' || candidate.state === 'redundant') {
          clearTimeout(timer); candidate.removeEventListener('statechange', change);
          candidate.state === 'activated' ? resolve() : reject(new Error('离线功能更新失败，请重试。'));
        }
      }
      candidate.addEventListener('statechange', change); change();
    });
    return candidate;
  }
  async function refresh(check = false) {
    if (busy || !registration) return;
    if (checking) return checking;
    checking = (async () => {
      try {
        if (check && navigator.onLine && Date.now() - lastCheck >= 60000) {
          lastCheck = Date.now();
          // A failed background check must not hide a usable offline bundle.
          try { await worker(true); } catch (_) {}
        }
        const data = await call(await worker(), 'STATUS');
        if (!busy) { render(data); download.disabled = false; }
      } catch (error) { status.textContent = error.message; }
    })().finally(() => { checking = null; });
    return checking;
  }
  download.addEventListener('click', async () => {
    if (busy) return;
    if (!navigator.onLine) { status.textContent = '下载或更新需要网络；已下载的内容仍可离线浏览。'; return; }
    setBusy(true); progress.value = 0; status.textContent = '正在检查最新资源…';
    // Ask for persistence only after the user's explicit download action.
    navigator.storage?.persist?.().catch(() => {});
    try {
      const current = await worker(true);
      render(await call(current, 'DOWNLOAD'));
      status.textContent += ' 刷新页面即可使用此离线包。';
      reload.hidden = false;
      reload.textContent = '立即刷新';
    } catch (error) { status.textContent = `${error.message}${saved?.ready ? ' 已有离线资源仍然保留。' : ' 可点击重试，继续未完成的下载。'}`; }
    finally { setBusy(false); }
  });
  async function updateAndReload() {
    if (busy) return;
    setBusy(true); progress.value = 0;
    try {
      // Already downloaded updates can be applied even in airplane mode.
      let current = await worker();
      let data = await call(current, 'STATUS');
      if (!data.ready || data.downloadedRelease !== data.release) {
        if (!navigator.onLine) throw new Error('需要联网下载新版本，当前内容仍可继续浏览。');
        current = await worker(true);
        data = await call(current, 'DOWNLOAD');
      }
      if (!data.ready || data.downloadedRelease !== data.release) throw new Error('新版本尚未完整下载，请重试。');
      window.location.reload();
    } catch (error) {
      const text = `${error.message} 当前页面和已有离线资源仍然保留。`;
      status.textContent = message.textContent = text;
    } finally { setBusy(false); }
  }
  apply.addEventListener('click', updateAndReload);
  reload.addEventListener('click', updateAndReload);
  later.addEventListener('click', () => {
    dismissedRelease = saved?.release;
    notice.hidden = true;
  });
  clear.addEventListener('click', async () => {
    if (busy) return;
    setBusy(true);
    try { render(await call(await worker(), 'CLEAR')); status.textContent = '离线资源已删除，掌握和关注进度仍保存在本机。'; }
    catch (error) { status.textContent = error.message; }
    finally { setBusy(false); }
  });
  window.addEventListener('online', () => { lastCheck = -Infinity; refresh(true); });
  window.addEventListener('offline', () => refresh());
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(true); });
  document.getElementById('accountButton').addEventListener('click', () => refresh(true));
  navigator.serviceWorker.addEventListener('controllerchange', () => refresh());
  const scope = new URL('./', window.location.href);
  (async () => {
    const existing = await navigator.serviceWorker.getRegistration(scope);
    if (!navigator.onLine && existing) return existing;
    try {
      return await navigator.serviceWorker.register(new URL('sw.js', scope), {
        scope: scope.pathname, updateViaCache: 'none',
      });
    } catch (error) { if (existing) return existing; throw error; }
  })().then(async result => {
    registration = result;
    registration.addEventListener('updatefound', () => {
      const installing = registration.installing;
      installing?.addEventListener('statechange', () => {
        if (installing.state === 'activated') refresh();
      });
    });
    await worker();
    await refresh(true);
    setInterval(() => { if (!document.hidden && navigator.onLine) refresh(true); }, 5 * 60 * 1000);
  }).catch(error => { status.textContent = `离线功能暂不可用，请联网后刷新重试。${error.message || ''}`; });
})();
