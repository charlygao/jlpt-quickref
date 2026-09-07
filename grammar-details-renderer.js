// Pure HTML rendering shared by the modal and the content validation script.
(() => {
  const escapeHtml = value => String(value ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  function sentence(example) {
    const jp = String(example.jp || '');
    const focus = example.focus;
    const index = focus ? jp.indexOf(focus) : -1;
    if (index < 0) return escapeHtml(jp);
    return escapeHtml(jp.slice(0, index)) + '<mark>' + escapeHtml(focus) + '</mark>' + escapeHtml(jp.slice(index + focus.length));
  }

  function examples(values, legacy = false) {
    return (values || []).map((example, index) => {
      const incorrect = example.verdict === 'incorrect';
      const badge = incorrect ? '<span class="grammar-example-verdict">语法错误</span>' : legacy ? `<span>例 ${index + 1}</span>` : '';
      const cover = example.covers ? `<code>${escapeHtml(example.covers)}</code>` : '';
      return `<div class="grammar-detail-example${incorrect ? ' grammar-example-incorrect' : ''}">
        ${badge || cover ? `<div class="grammar-detail-example-head">${badge}${cover}</div>` : ''}
        <p class="grammar-detail-example-jp" lang="ja">${sentence(example)}</p>
        <p class="grammar-detail-example-zh">${escapeHtml(example.zh)}</p>
        ${example.note ? `<p class="grammar-example-note">${escapeHtml(example.note)}</p>` : ''}
      </div>`;
    }).join('');
  }

  const list = values => `<ul>${(values || []).map(value => `<li>${escapeHtml(value)}</li>`).join('')}</ul>`;
  const section = (title, body) => body ? `<section class="modal-section grammar-detail-section"><h4>${escapeHtml(title)}</h4>${body}</section>` : '';

  function blocks(values) {
    return (values || []).map(block => `<article class="grammar-lesson-block">
      <h5>${escapeHtml(block.title)}</h5>
      <p class="grammar-lesson-explanation">${escapeHtml(block.explanation)}</p>
      <div class="grammar-detail-examples">${examples(block.examples)}</div>
    </article>`).join('');
  }

  function formation(detail) {
    return `<dl class="grammar-formation-rows">${detail.formationRows.map(row => `<div class="grammar-formation-row">
      <dt>${escapeHtml(row.label)}</dt>
      <dd><p class="grammar-formation-form">${escapeHtml(row.form)}</p><p class="grammar-formation-derivation">${escapeHtml(row.derivation)}</p></dd>
    </div>`).join('')}</dl>`;
  }

  function render(item) {
    const d = item.detail;
    const revised = d.version === 2;
    const meta = `<div class="grammar-detail-meta"><span class="grammar-detail-chip">${escapeHtml(item.level)}</span><span class="grammar-detail-chip">${escapeHtml(d.category)}</span><span class="grammar-detail-chip">${escapeHtml(d.register.label)}</span></div>`;
    const lead = `<p class="grammar-detail-lead">${escapeHtml(d.overview)}</p>`;
    if (revised) {
      return `<div class="grammar-lesson">${meta}${lead}
        ${d.register.note ? `<p class="grammar-register-note">${escapeHtml(d.register.note)}</p>` : ''}
        ${section('接续与构成', formation(d))}
        ${section('常见用法', blocks(d.usages))}
        ${section('易错点与比较', blocks(d.cautions))}
        ${section('特殊情况', blocks(d.specialCases))}
      </div>`;
    }
    return `${meta}${lead}
      ${section('接续与构成', `<div class="grammar-detail-connection">${escapeHtml(d.formation)}</div>${list(d.formationNotes)}`)}
      ${section('常见用法', list(d.usages))}
      ${section('易错点', list(d.cautions))}
      ${(d.specialCases || []).length ? section('特殊情况', list(d.specialCases)) : ''}
      ${section('例句', `<div class="grammar-detail-examples">${examples(item.examples, true)}</div>`)}`;
  }

  window.JLPT_RENDER_GRAMMAR_DETAIL = render;
})();
