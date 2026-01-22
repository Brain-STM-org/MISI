# Book Viewer Development Plan

Development roadmap for the SWE Fundamentals book viewer.

## Design Personas

- **Dr. Elena Vasquez** (Curriculum Designer) — Pedagogical structure, learning science
- **Alvin & Theodore Willison** (LLM Influencers) — Technical implementation, practical features

## Version Roadmap

### v1.0 — Foundation (Current)

**Status: Complete**

Core infrastructure and basic pedagogical features.

| Feature | Status | Notes |
|---------|--------|-------|
| Astro + React + Tailwind setup | ✅ Done | Static-first with partial hydration |
| Chapter navigation (sidebar) | ✅ Done | Organized by tier |
| Progress tracking (localStorage) | ✅ Done | Persists across sessions |
| Dark/light mode | ✅ Done | System preference + toggle |
| Reading progress bar | ✅ Done | Scroll-based tracking |
| Chapter completion marking | ✅ Done | Manual + auto at 100% scroll |
| Mobile responsive layout | ✅ Done | Sidebar toggle on mobile |
| ConceptCard component | ✅ Done | Key concept highlighting |
| QuestionBlock component | ✅ Done | Active recall with reveal |
| Checkpoint component | ✅ Done | Self-assessment with confidence |
| TryBlock component | ✅ Done | Exercises with hints |

---

### v1.1 — Content Integration

**Status: Not Started**

Wire markdown content to pedagogical components.

| Feature | Status | Notes |
|---------|--------|-------|
| Remark plugin for :::concept | ⬜ Todo | Parse custom syntax |
| Remark plugin for :::question | ⬜ Todo | Parse question/reveal blocks |
| Remark plugin for :::checkpoint | ⬜ Todo | Parse checklist items |
| Remark plugin for :::try | ⬜ Todo | Parse exercise/hint blocks |
| Content collection from ../book/ | ⬜ Todo | Symlink or copy strategy |
| Proper MDX rendering | ⬜ Todo | Full markdown support |
| Code syntax highlighting | ⬜ Todo | Shiki integration |
| Table of contents per chapter | ⬜ Todo | Auto-generated from headings |

---

### v1.2 — Enhanced Learning Features

**Status: Not Started**

Spaced repetition and review system.

| Feature | Status | Notes |
|---------|--------|-------|
| Concept review sidebar | ⬜ Todo | Shows concepts from current chapter |
| Spaced repetition prompts | ⬜ Todo | Surface due concepts on homepage |
| Review session mode | ⬜ Todo | Dedicated review interface |
| Search functionality | ⬜ Todo | Search across all chapters |
| Reading time estimates | ⬜ Todo | Per-section estimates |
| Bookmark/highlight system | ⬜ Todo | Personal annotations |

---

### v1.3 — Polish & Accessibility

**Status: Not Started**

Refinements and accessibility compliance.

| Feature | Status | Notes |
|---------|--------|-------|
| Keyboard navigation | ⬜ Todo | Full keyboard support |
| Screen reader support | ⬜ Todo | ARIA labels, semantic HTML |
| Focus mode | ⬜ Todo | Hide navigation while reading |
| Font size settings | ⬜ Todo | sm/md/lg options |
| Print stylesheet | ⬜ Todo | Clean printing |
| Export/import progress | ⬜ Todo | JSON backup/restore |
| Offline support (PWA) | ⬜ Todo | Service worker caching |

---

### v2.0 — Advanced Features

**Status: Future**

Advanced pedagogical and social features.

| Feature | Status | Notes |
|---------|--------|-------|
| Quiz mode | ⬜ Future | Aggregate questions into quizzes |
| Learning analytics | ⬜ Future | Time spent, completion patterns |
| Instructor dashboard | ⬜ Future | View cohort progress |
| Discussion/comments | ⬜ Future | Per-section discussions |
| Multi-book support | ⬜ Future | LLM Fundamentals book |

---

## Technical Decisions

### Why Astro?

- **Content-focused** — Built for content sites like documentation/books
- **Partial hydration** — Only interactive components ship JS
- **Fast builds** — Static generation for quick deployment
- **MDX support** — Markdown with React components

### Why localStorage for Progress?

- **Privacy** — No backend, no data collection
- **Simplicity** — No auth, no database
- **Offline** — Works without internet
- **Portable** — Export/import for backup

### Why Nanostores?

- **Lightweight** — ~1KB vs Redux/Zustand
- **Framework agnostic** — Works with Astro + React
- **Simple API** — Atoms and computed values

---

## Content Strategy

### Markdown Extensions

Custom syntax that degrades gracefully on GitHub:

```markdown
:::concept{#id}
Content renders as blockquote on GitHub
:::
```

On GitHub: Displays as fenced block (readable)
In viewer: Renders as interactive ConceptCard

### Chapter Metadata

Frontmatter optional — metadata derived from filename:
- `00-your-development-environment.md` → Chapter 00, slug derived

---

## Open Questions

1. **Symlink vs copy for content?**
   - Symlink: Single source of truth, but build complexity
   - Copy: Simpler builds, but sync issues

2. **How to handle chapter updates?**
   - Need strategy for content changes affecting progress data

3. **Should checkpoints be required for completion?**
   - Currently completion is manual/scroll-based
   - Could require checkpoint confidence ≥3

---

## References

- [Astro Documentation](https://docs.astro.build)
- [Nanostores](https://github.com/nanostores/nanostores)
- [Tailwind CSS](https://tailwindcss.com)
- [SM-2 Spaced Repetition Algorithm](https://www.supermemo.com/en/archives1990-2015/english/ol/sm2)
