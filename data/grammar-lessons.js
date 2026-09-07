// Apply the explicit per-level lessons after the base catalog has loaded.
(() => {
  const DATA = window.JLPT_DATA;
  const lessons = window.JLPT_GRAMMAR_LESSONS;
  if (!DATA?.grammar || !Array.isArray(lessons)) throw new Error('Grammar lesson data is not loaded');
  const items = new Map(Object.values(DATA.grammar).flat().map(item => [item.id, item]));
  const covered = new Set();
  // Validate the complete mapping before changing any cards.
  for (const lesson of lessons) {
    for (const id of lesson.ids) {
      if (!items.has(id)) throw new Error(`Unknown grammar lesson ID: ${id}`);
      if (covered.has(id)) throw new Error(`Duplicate grammar lesson ID: ${id}`);
      covered.add(id);
    }
  }
  for (const id of items.keys()) {
    if (!covered.has(id)) throw new Error(`Missing grammar lesson: ${id}`);
  }
  for (const lesson of lessons) {
    for (const id of lesson.ids) {
      Object.assign(items.get(id), lesson.card, { detail: lesson.detail });
    }
  }
})();
