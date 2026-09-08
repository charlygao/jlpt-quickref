const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

function build(root, output) {
  const htmlFiles = ['index.html', 'viewport-diagnostics.html'];
  const files = new Map(htmlFiles.map(file => [file, fs.readFileSync(path.join(root, file))]));
  const references = new Set();
  for (const file of htmlFiles) {
    for (const [, url] of files.get(file).toString().matchAll(/(?:src|href)="([^"]+)"/g)) {
      if (url.startsWith('#')) continue;
      if (/^(https?:)?\/\//.test(url)) throw new Error(`Offline dependency must be local: ${url}`);
      const pathname = url.split('?')[0];
      if (!pathname || pathname.includes('..') || pathname.startsWith('/')) throw new Error(`Unsafe asset: ${url}`);
      references.add(url);
      files.set(pathname, fs.readFileSync(path.join(root, pathname)));
    }
  }
  const template = fs.readFileSync(path.join(root, 'scripts/service-worker.template.js'), 'utf8');
  references.add('vendor/supabase-LICENSE');
  files.set('vendor/supabase-LICENSE', fs.readFileSync(path.join(root, 'vendor/supabase-LICENSE')));
  const release = hash([...files].sort().map(([name, bytes]) => `${name}:${hash(bytes)}`).join('\n') + template + fs.readFileSync(__filename)).slice(0, 20);
  const versionURL = url => `${url}${url.includes('?') ? '&' : '?'}offlinev=${release}`;
  for (const file of htmlFiles) {
    const html = files.get(file).toString().replace('</head>', `  <meta name="jlpt-release" content="${release}" />\n</head>`).replace(/((?:src|href)=")([^"]+)(")/g,
      (all, start, url, end) => references.has(url) ? `${start}${versionURL(url)}${end}` : all);
    files.set(file, Buffer.from(html));
  }
  const assets = htmlFiles.map(url => ({ url, path: url })).concat([...references].map(url => ({ url: versionURL(url), path: url.split('?')[0] })))
    .map(asset => ({ url: asset.url, sha256: hash(files.get(asset.path)), bytes: files.get(asset.path).length }));
  fs.mkdirSync(output, { recursive: true });
  for (const [file, bytes] of files) {
    const destination = path.join(output, file);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, bytes);
  }
  fs.writeFileSync(path.join(output, 'sw.js'), template
    .replace('/* RELEASE */ null', JSON.stringify(release))
    .replace('/* ASSETS */ []', JSON.stringify(assets)));
  return { release, assets, bytes: assets.reduce((sum, asset) => sum + asset.bytes, 0) };
}
module.exports = { build };
if (require.main === module) {
  const result = build(process.cwd(), path.join(process.cwd(), 'dist'));
  console.log(`Offline bundle: ${result.assets.length} files, ${(result.bytes / 1024 / 1024).toFixed(1)} MB, release ${result.release}`);
}
