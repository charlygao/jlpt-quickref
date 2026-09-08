// Keep the dedicated diagnostic route identical to the current app layout.
const fs = require('node:fs');
let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('<body class="dark">') || !html.includes('</header>')) {
  throw new Error('Cannot identify the app body/header for the diagnostic page');
}
html = html.replace('<body class="dark">', '<body class="dark" data-viewport-debug="1">');
html = html.replace('</header>', `<span id="viewportDebugStatus" role="status" style="position:absolute;left:18px;bottom:0;font:10px/1.3 sans-serif;color:#fbbf24;">诊断 v2 · 正在加载…</span></header>`);
html = html.replace('  <script src="viewport-debug.js', `  <script>
    window.addEventListener('error', function (event) {
      if (event.filename && event.filename.indexOf('viewport-debug.js') !== -1) {
        document.getElementById('viewportDebugStatus').textContent = '诊断 v2 · 启动失败：' + event.message;
      }
    });
  </script>
  <script onerror="document.getElementById('viewportDebugStatus').textContent='诊断 v2 · 脚本加载失败，请刷新'" src="viewport-debug.js`);
fs.writeFileSync('viewport-diagnostics.html', html);
