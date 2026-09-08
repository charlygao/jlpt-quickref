(() => {
  // Explicit, local-only diagnostics. Never enabled for normal visitors.
  if (document.body?.dataset.viewportDebug !== '1' &&
      new URLSearchParams(window.location.search).get('viewport-debug') !== '1') return;
  const started = Date.now();
  const rows = [];
  let guardState = () => null;
  let frozen = false;
  let scheduled = false;
  let previousSample;
  const panel = document.createElement('aside');
  panel.setAttribute('aria-label', '屏幕位置诊断');
  const panelHost = document.querySelector('.topbar') || document.body;
  panel.style.cssText = `position:absolute;z-index:200;left:12px;top:${panelHost === document.body ? '12px' : 'calc(100% + 8px)'};width:calc(100% - 84px);max-width:360px;box-sizing:border-box;padding:10px;border:1px solid #64748b;border-radius:10px;background:#0f172a;color:#f8fafc;font:12px/1.5 monospace;`;
  const readout = document.createElement('div');
  readout.style.whiteSpace = 'pre-wrap';
  const copy = document.createElement('button');
  copy.type = 'button';
  copy.textContent = '空区出现后，复制诊断';
  copy.style.cssText = 'margin-top:6px;min-height:36px;width:100%;border:0;border-radius:6px;background:#334155;color:#fff;font:inherit;';
  panel.append(readout, copy);
  panelHost.appendChild(panel);

  const number = value => Number.isFinite(value) ? Math.round(value * 100) / 100 : null;
  const rect = node => {
    if (!node) return null;
    const r = node.getBoundingClientRect();
    return { top: number(r.top), bottom: number(r.bottom), height: number(r.height) };
  };
  const geometry = node => node ? {
    rect: rect(node), scrollTop: number(node.scrollTop),
    clientHeight: number(node.clientHeight), scrollHeight: number(node.scrollHeight),
  } : null;
  function snapshot() {
    const v = window.visualViewport;
    const bodyStyle = getComputedStyle(document.body);
    const header = document.querySelector('.topbar');
    return {
      scrollY: number(window.scrollY), pageYOffset: number(window.pageYOffset),
      innerHeight: number(window.innerHeight), innerWidth: number(window.innerWidth),
      viewport: v ? { offsetTop: number(v.offsetTop), pageTop: number(v.pageTop), height: number(v.height), width: number(v.width), scale: number(v.scale) } : null,
      html: geometry(document.documentElement), body: geometry(document.body),
      scrollingElement: geometry(document.scrollingElement),
      header: rect(header), content: geometry(document.querySelector('.page-shell')),
      bodyCSS: { position: bodyStyle.position, top: bodyStyle.top, height: bodyStyle.height, overflow: bodyStyle.overflow },
      headerCSS: header ? { position: getComputedStyle(header).position, paddingTop: getComputedStyle(header).paddingTop } : null,
      actionOffset: getComputedStyle(document.documentElement).getPropertyValue('--action-bottom-offset'),
      modal: document.body.classList.contains('modal-open'),
      compact: document.body.classList.contains('compact-header'),
      focusTag: document.activeElement?.tagName || null,
      guard: guardState(),
    };
  }
  function record(event) {
    if (frozen || document.hidden) return;
    const data = snapshot();
    const signature = JSON.stringify(data);
    if (event === 'sample' && signature === previousSample) return;
    previousSample = signature;
    rows.push({ ms: Date.now() - started, event, ...data });
    if (rows.length > 40) rows.splice(1, 1); // Keep the initial baseline too.
    readout.textContent = `诊断已开启 · ${rows.length} 条\nY ${data.scrollY} / VV ${data.viewport?.offsetTop ?? '-'} / 顶栏 ${data.header?.top ?? '-'}\n可视高 ${data.viewport?.height ?? data.innerHeight}`;
  }
  function schedule(event) {
    if (scheduled || frozen) return;
    scheduled = true;
    setTimeout(() => { scheduled = false; record(event); }, 80);
  }
  window.JLPT_VIEWPORT_DEBUG = {
    setGuard(getState) { guardState = getState; },
    record,
  };
  window.addEventListener('scroll', () => schedule('window.scroll'), { passive: true });
  window.addEventListener('resize', () => schedule('window.resize'), { passive: true });
  window.addEventListener('pageshow', () => record('pageshow'), { passive: true });
  window.visualViewport?.addEventListener('scroll', () => schedule('viewport.scroll'), { passive: true });
  window.visualViewport?.addEventListener('resize', () => schedule('viewport.resize'), { passive: true });
  document.querySelector('.page-shell')?.addEventListener('scroll', () => schedule('content.scroll'), { passive: true });
  document.addEventListener('touchend', () => schedule('touchend'), { passive: true });
  document.addEventListener('visibilitychange', () => record('visibilitychange'));
  // Sampling catches a visible shift even if Safari sends no scroll event.
  const interval = setInterval(() => record('sample'), 1000);

  function showFallback(report) {
    const field = document.createElement('textarea');
    field.readOnly = true;
    field.value = report;
    field.setAttribute('aria-label', '诊断报告，长按全选并复制');
    field.style.cssText = 'width:100%;height:80px;margin-top:6px;font-size:16px;box-sizing:border-box;';
    panel.appendChild(field);
    copy.textContent = '请长按下方文本，全选并复制';
    copy.disabled = true;
  }
  copy.addEventListener('click', () => {
    record('capture');
    frozen = true;
    clearInterval(interval);
    const report = JSON.stringify({
      version: 'viewport-debug-2', userAgent: navigator.userAgent,
      screen: { width: window.screen.width, height: window.screen.height, pixelRatio: window.devicePixelRatio },
      rows,
    });
    if (!navigator.clipboard?.writeText) { showFallback(report); return; }
    navigator.clipboard.writeText(report).then(() => {
      copy.textContent = '已复制，请粘贴到对话中';
      copy.disabled = true;
    }).catch(() => showFallback(report));
  });
  record('initial');
  const status = document.getElementById('viewportDebugStatus');
  if (status) status.textContent = '诊断 v2 · 已开启';
})();
