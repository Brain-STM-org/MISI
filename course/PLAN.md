# Course Presentation Development Plan

## Overview

Convert markdown curriculum modules into interactive slide presentations using **Slidev** — a markdown-based presentation framework that separates content from presentation logic while allowing Vue/TypeScript customization when needed.

**Key decisions:**
- **Framework**: Slidev (markdown-native, Vue-based, offline-capable)
- **Demos**: Launched in separate browser windows, not embedded
- **Notes**: Speaker notes included for async viewers
- **Density**: Lighter slides, more speaker notes (per Dr. Vasquez judgment)
- **Animation**: Reveals only when pedagogically appropriate
- **Development order**: SWE track first, deep dive

---

## Architecture

```
course/
├── README.md                 # Track overview and integration guide
├── PLAN.md                   # This file
├── swe/
│   ├── *.md                  # Source curriculum (reference)
│   ├── deck/                 # Slidev presentation
│   │   ├── package.json      # Slidev + dependencies
│   │   ├── slides.md         # Module selector / index
│   │   ├── modules/          # Individual module decks
│   │   │   ├── 00-environment.md
│   │   │   ├── 01-source-code.md
│   │   │   └── ...
│   │   ├── components/       # Custom Vue components
│   │   ├── styles/           # Theme customization
│   │   └── public/           # Static assets
│   └── *.html                # Interactive demos (existing)
└── llm/
    ├── *.md                  # Source curriculum (reference)
    └── deck/                 # Slidev presentation (future)
        └── ...
```

Each module deck works in isolation AND can be accessed from a master selector page.

---

## Shared Infrastructure (`course/slides/`)

### Core Engine

The slide engine provides:

| Component | Purpose |
|-----------|---------|
| **Deck** | Navigation (next/prev/jump), keyboard shortcuts, URL routing |
| **Slide** | Individual slide rendering, transitions |
| **CodeBlock** | Syntax highlighting, line numbers, copy button |
| **Diagram** | Render ASCII art diagrams or convert to SVG |
| **Progress** | Progress bar, slide counter, table of contents |

### Reusable Components

Map common markdown patterns to slide components:

| Markdown Pattern | Component | Behavior |
|------------------|-----------|----------|
| `## Learning Objectives` | `LearningObjectives` | Numbered list with reveal animation |
| `> *"Quote..."*` | `Quote` | Styled blockquote with attribution |
| `## Key Insights` (table) | `KeyInsights` | Two-column summary table |
| `### Exercise N:` | `Exercise` | Interactive exercise card |
| `## Reflection Questions` | `ReflectionQuestions` | Discussion prompts |

### Theme

MISI visual identity:
- Clean, readable typography
- High contrast for projected displays
- Code-friendly monospace fonts
- Consistent color scheme across tracks
- Print/PDF export capability

---

## Conversion Strategy

### Phase 1: Infrastructure Setup

1. Initialize Vite project with TypeScript
2. Build core slide engine
3. Create base theme
4. Set up GitHub Actions deployment
5. Create one example deck per track as proof of concept

### Phase 2: Automated Conversion

Build tooling to parse markdown and generate initial slide structure:

```
md2slides swe/00-your-development-environment.md → swe/slides/00-environment/
```

Conversion heuristics:
- `## Section` → New slide
- `### Subsection` → Slide with header
- Tables → Formatted table component
- Code blocks → CodeBlock component
- ASCII diagrams → Diagram component
- Bulleted lists → Animated reveals

### Phase 3: Manual Refinement

Automated conversion gets us 70-80%. Human refinement for:
- Slide pacing and grouping
- Animation and transition choices
- Interactive elements
- Speaker notes
- Visual polish

### Phase 4: Interactive Enhancements

Leverage existing interactive demos and add new ones:
- Embed `diffs-demo.html` and `branches-demo.html` from SWE track
- Create prompt injection sandbox for LLM track
- Add live code execution where appropriate

---

## Build & Deploy

### Vite Configuration

```typescript
// vite.config.ts (conceptual)
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Each deck is a separate entry point
        'swe-00': 'swe/slides/00-environment/index.html',
        'swe-01': 'swe/slides/01-source-code/index.html',
        // ...
        'llm-00': 'llm/slides/00-machine-intelligence/index.html',
        'llm-01': 'llm/slides/01-how-llms-work/index.html',
        // ...
      }
    }
  }
});
```

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy-slides.yml (conceptual)
name: Deploy Slides

on:
  push:
    branches: [main]
    paths:
      - 'course/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: cd course/slides && npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: course/slides/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

### URL Structure

```
https://[org].github.io/misi/
├── swe/
│   ├── 00-environment/
│   ├── 01-source-code/
│   └── ...
└── llm/
    ├── 00-machine-intelligence/
    ├── 01-how-llms-work/
    └── ...
```

---

## Development Tasks

### Infrastructure

- [ ] Initialize Vite + TypeScript project in `course/slides/`
- [ ] Build core Deck component (navigation, keyboard, routing)
- [ ] Build core Slide component (rendering, transitions)
- [ ] Build CodeBlock component (syntax highlighting)
- [ ] Build Diagram component (ASCII → rendered)
- [ ] Create MISI theme (CSS)
- [ ] Set up GitHub Actions deployment workflow
- [ ] Create index page listing all decks

### Conversion Tooling

- [ ] Build markdown parser for module structure
- [ ] Map markdown patterns to slide components
- [ ] Create `md2slides` CLI tool
- [ ] Test on one SWE module
- [ ] Test on one LLM module

### SWE Track Conversion (16 modules)

- [ ] 00: Your Development Environment
- [ ] 01: What is Source Code?
- [ ] 02: GitHub Setup Guide
- [ ] 03: Understanding Diffs (+ embed demo)
- [ ] 04: Your First Commit
- [ ] 05: Branches and Merging (+ embed demo)
- [ ] 06: Pull Requests
- [ ] 07: Testing Fundamentals
- [ ] 08: Debugging Techniques
- [ ] 09: Dependencies & Packages
- [ ] 10: Build Pipelines
- [ ] 11: O11y: Understanding Your Code
- [ ] 12: Iterative Design
- [ ] 13: Timeless Principles
- [ ] 14: Communication
- [ ] 15: Ethics in Software

### LLM Track Conversion (18 modules)

- [ ] 00: What Is Machine Intelligence?
- [ ] 01: How LLMs Work (Conceptually)
- [ ] 02: The Capability Inflection Point
- [ ] 03: Capabilities & Limitations
- [ ] 04: Your First Conversation
- [ ] 05: Reading AI-Generated Code
- [ ] 06: Prompting Fundamentals
- [ ] 07: Multi-Modal Models
- [ ] 08: Reasoning Models
- [ ] 09: Context & Memory
- [ ] 10: Prompt Injection & AI Security (+ sandbox?)
- [ ] 11: Agentic Loops
- [ ] 12: Developer Workflows
- [ ] 13: The Human-AI Partnership
- [ ] 14: Iterating with AI
- [ ] 15: Bias & Fairness
- [ ] 16: Privacy & Data
- [ ] 17: The Future of Work

### Polish & QA

- [ ] Review all decks for visual consistency
- [ ] Test keyboard navigation across browsers
- [ ] Test print/PDF export
- [ ] Add speaker notes where needed
- [ ] Create facilitator guide for using slides

---

## Open Questions

### Technical Decisions Needed

1. **Slide framework choice**: Build custom or use existing?
   - **Custom**: Full control, minimal dependencies, tailored to our needs
   - **reveal.js**: Popular, feature-rich, well-documented
   - **Slidev**: Vue-based, markdown-native, modern DX
   - **Recommendation**: Start custom + simple, add library if needed

2. **Interactivity approach**: How interactive should slides be?
   - Embedded demos (iframe existing HTML)
   - Live code execution (sandboxed)
   - Just presentation (animations, navigation)

3. **Build output**: Single bundle or per-deck bundles?
   - Single: Shared caching, larger initial load
   - Per-deck: Smaller loads, more files to manage

4. **Offline support**: Should slides work offline?
   - Service worker for PWA
   - Just static files (already works)

5. **Presenter mode**: Do we need separate presenter view?
   - Notes visible only to presenter
   - Timer, next slide preview

### Content Decisions Needed

6. **Slide density**: How much content per slide?
   - Dense (more reading, fewer slides)
   - Sparse (less per slide, more slides)

7. **Animation level**: How much animation?
   - Minimal (faster, less distraction)
   - Progressive reveal (guides attention)

8. **Interactive exercises**: In-slide or separate?
   - Some exercises work well in slides
   - Complex exercises may need separate pages

---

## Dual-Persona Development Process

This slide conversion work continues the dual-persona agentic loop:

**Elena Vasquez (Curriculum Designer)**
- Ensures pedagogical effectiveness of slide structure
- Reviews content pacing and grouping
- Validates learning objective coverage

**Alvin & Theodore Willison (LLM Influencers)**
- Technical accuracy of code examples
- Ensures security content is appropriately scoped
- Reviews LLM-specific content for currency

**Loop Protocol**
1. Elena drafts slide structure for a module
2. Willisons review technical accuracy
3. Iterate until both approve
4. Human stakeholder review at milestones

---

## Timeline

| Phase | Scope | Estimate |
|-------|-------|----------|
| Infrastructure | Core engine, theme, CI/CD | First |
| Proof of Concept | 1 SWE + 1 LLM module | Second |
| Conversion Tooling | md2slides automation | Third |
| Bulk Conversion | Remaining 32 modules | Fourth |
| Polish | Visual consistency, speaker notes | Fifth |

---

## Notes

- Markdown source remains authoritative; slides are derived
- Interactive HTML demos (diffs, branches) already exist in SWE track
- LLM track may need new interactive demos (prompt injection sandbox)
- Print/PDF export enables offline handouts
- Slides should work on projectors (high contrast, large text)
