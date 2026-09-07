// Validate complete authored coverage using the actual page script order.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map(m => m[1].split('?')[0]);
const dataFiles = scripts.filter(file => file.startsWith('data/'));
const context = vm.createContext({ window: {}, console: { log() {} } });
const run = file => vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });

const applyIndex = dataFiles.indexOf('data/grammar-lessons.js');
assert(applyIndex >= 0);
assert(!dataFiles.includes('data/grammar-details.js'), 'Legacy boilerplate must not be loaded');
for (const level of ['n5', 'n4', 'n3', 'n2', 'n1']) {
  const index = dataFiles.indexOf(`data/grammar-lessons-${level}.js`);
  assert(index >= 0 && index < applyIndex, `Load ${level} lessons before applying them`);
}
assert(scripts.indexOf('data/grammar-lessons.js') < scripts.indexOf('app.js'));
assert(scripts.indexOf('grammar-details-renderer.js') < scripts.indexOf('grammar-details-ui.js'));
for (const file of scripts.filter(file => !/^https?:/.test(file))) assert(fs.existsSync(path.join(root, file)), `Missing script: ${file}`);

let before;
for (const file of dataFiles) {
  if (file === 'data/grammar-lessons.js') before = JSON.parse(JSON.stringify(context.window.JLPT_DATA));
  run(file);
}
run('grammar-details-renderer.js');
const data = context.window.JLPT_DATA;
const items = Object.values(data.grammar).flat();
const byId = new Map(items.map(item => [item.id, item]));
const lessons = context.window.JLPT_GRAMMAR_LESSONS;
const targets = lessons.flatMap(lesson => lesson.ids);
assert.equal(lessons.length, 336, 'Update the documented scope when adding a new lesson');
assert.equal(new Set(targets).size, targets.length, 'A card cannot receive two lessons');
assert.equal(items.length, 388);
assert.equal(byId.size, items.length);
assert.deepEqual(new Set(targets), new Set(byId.keys()), 'Every grammar card must have exactly one lesson');
assert.deepEqual(Object.values(before.grammar).flat().map(i => i.id), Array.from(items, i => i.id), 'IDs and ordering preserve study progress');
const catalog = grammar => Object.entries(grammar).flatMap(([level, rows]) => Array.from(rows, ({ meaning, connection, examples, detail, ...identity }) => ({ level, ...identity })));
assert.deepEqual(JSON.parse(JSON.stringify(catalog(data.grammar))), catalog(before.grammar), 'Titles, levels and other catalog metadata must remain unchanged');
assert.deepEqual(JSON.parse(JSON.stringify(data.vocab)), before.vocab, 'Vocabulary must remain unchanged');

const present = (text, where) => assert(typeof text === 'string' && text.trim(), `Missing text: ${where}`);
let exampleCount = 0;
for (const lesson of lessons) {
  const d = lesson.detail;
  present(lesson.card.meaning, 'card.meaning');
  present(lesson.card.connection, 'card.connection');
  assert.equal(d.version, 2);
  for (const key of ['overview', 'category', 'formation']) present(d[key], key);
  present(d.register.label, 'register.label');
  assert(d.formationRows.length > 0);
  for (const row of d.formationRows) for (const key of ['label', 'form', 'derivation']) present(row[key], `formation.${key}`);
  assert(d.usages.length > 0, 'At least one real use is required');
  for (const key of ['usages', 'cautions', 'specialCases']) {
    assert(Array.isArray(d[key]));
    for (const block of d[key]) {
      present(block.title, `${key}.title`);
      present(block.explanation, `${key}.explanation`);
      assert(block.examples.length > 0, `Rule without an example: ${block.title}`);
      for (const ex of block.examples) {
        for (const field of ['jp', 'zh', 'note', 'focus']) present(ex[field], `${block.title}.${field}`);
        assert(ex.jp.includes(ex.focus), `Highlight absent from example: ${ex.focus}`);
        assert(!ex.verdict || ex.verdict === 'incorrect');
        if (ex.verdict === 'incorrect') assert(ex.zh.startsWith('想表达：'), 'Incorrect examples must be clearly distinguished from usable Japanese');
        exampleCount++;
      }
    }
  }
  assert(d.references.length > 0);
  for (const reference of d.references) {
    present(reference.title, 'reference.title');
    assert.equal(new URL(reference.url).protocol, 'https:');
  }
  assert(!JSON.stringify(d).includes('斜线表示'), 'Do not repeat generic notation instructions');
  assert(!/\p{Script=Hangul}/u.test(JSON.stringify(d)), 'Unexpected script in Chinese/Japanese lesson');
  for (const id of lesson.ids) {
    const item = byId.get(id);
    assert.equal(item.detail, d, 'Spelling and politeness variants share the reviewed lesson');
    assert.equal(item.meaning, lesson.card.meaning);
    assert(item.examples.length >= 2 && item.examples.length <= 3, 'Keep list cards concise');
    assert(!/[\/／]/.test(item.examples[0].covers), 'First example needs one precise connection label');
    for (const ex of item.examples) {
      for (const field of ['jp', 'zh', 'covers']) present(ex[field], `card.${field}`);
    }
    assert.equal(new Set(item.examples.map(ex => ex.jp)).size, item.examples.length, 'Do not repeat a sentence on the same card');
  }
}

const render = context.window.JLPT_RENDER_GRAMMAR_DETAIL;
for (const item of items) {
  assert.equal(item.detail.version, 2, `Unconverted grammar card: ${item.id}`);
  const output = render(item);
  assert(!output.includes('[object Object]') && !output.includes('undefined'));
  assert(output.includes('接续与构成'));
  for (const block of [...item.detail.usages, ...item.detail.cautions, ...item.detail.specialCases]) {
    assert(output.includes(block.title));
    for (const ex of block.examples) assert(output.includes(ex.note));
  }
  if (!item.detail.specialCases.length) assert(!output.includes('<h4>特殊情况</h4>'), 'Empty sections must be omitted');
  assert(!output.includes('<h4>例句</h4>'), 'Examples belong next to their explanations');
}

// Lesson content is text, even when a future edit includes HTML-like characters.
const hostile = JSON.parse(JSON.stringify(byId.get(targets[0])));
const payload = '<img src=x onerror="alert(1)">';
hostile.detail.usages[0].title = payload;
hostile.detail.usages[0].examples[0] = { jp: payload, focus: payload, zh: payload, note: payload };
const escaped = render(hostile);
assert(!escaped.includes('<img'));
assert(escaped.includes('&lt;img'));
console.log(`Grammar lessons OK: ${lessons.length} lessons, ${targets.length} cards, ${exampleCount} contextual examples; complete coverage, escaping and empty sections OK.`);
