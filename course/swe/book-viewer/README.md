# SWE Fundamentals Book Viewer

Interactive viewer for the SWE Fundamentals textbook.

## Pedagogical Features

This viewer is designed based on learning science research:

| Feature | Research Basis | Implementation |
|---------|---------------|----------------|
| **Progress tracking** | Goal-gradient effect | Visual progress bars, chapter completion |
| **Key concepts** | Dual coding, spaced repetition | Highlighted cards, review tracking |
| **Reflection questions** | Active recall (Roediger & Karpicke) | Hide/reveal answers |
| **Self-assessment** | Metacognition (Flavell) | Confidence ratings, checklists |
| **Try It Yourself** | Desirable difficulties (Bjork) | Exercise prompts with optional hints |

### Component Mapping

| Feature | Component | Research Basis |
|---------|-----------|----------------|
| Progress tracking | `Sidebar`, `Header` | Goal-gradient effect |
| Key concepts | `ConceptCard` | Dual coding, spaced repetition |
| Reflection questions | `QuestionBlock` | Active recall (Roediger & Karpicke) |
| Self-assessment | `Checkpoint` | Metacognition (Flavell) |
| Exercises | `TryBlock` | Desirable difficulties (Bjork) |
| Dark mode | Global CSS | Reduce eye strain |
| Reading progress | `Header` | Progress motivation |

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
book-viewer/
├── src/
│   ├── components/       # React components for pedagogical features
│   │   ├── ConceptCard.tsx
│   │   ├── QuestionBlock.tsx
│   │   ├── Checkpoint.tsx
│   │   └── TryBlock.tsx
│   ├── layouts/          # Page layouts
│   │   └── BookLayout.astro
│   ├── lib/              # Utilities and state management
│   │   ├── types.ts
│   │   ├── progress.ts   # localStorage-based progress tracking
│   │   ├── chapters.ts   # Chapter metadata
│   │   └── spaced-repetition.ts
│   ├── pages/            # Route pages
│   │   ├── index.astro
│   │   └── chapters/[slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Content Integration

The viewer reads markdown content from `../book/`. To add pedagogical components to chapters, use the following markdown extensions:

### Key Concept
```markdown
:::concept{#unique-id}
**Key Concept**: Important idea here.
:::
```

### Reflection Question
```markdown
:::question{#unique-id}
What is the purpose of version control?
:::reveal
Version control tracks changes over time, enabling collaboration and recovery.
:::
```

### Self-Assessment Checkpoint
```markdown
:::checkpoint{#unique-id}
- [ ] I can explain what a commit is
- [ ] I understand the staging area
- [ ] I can create a branch
:::
```

### Try It Yourself
```markdown
:::try
Open your terminal and run `git status`. What do you see?
:::hint
You need to be in a git repository for this command to work.
:::
```

## Technology Stack

- **Astro** - Static site generator with partial hydration
- **React** - Interactive components
- **Tailwind CSS** - Styling
- **Nanostores** - Lightweight state management
- **TypeScript** - Type safety

## Progress Data

User progress is stored in `localStorage` under the key `swe-book-progress`. The data structure:

```typescript
interface UserProgress {
  chapters: Record<string, ChapterProgress>;
  settings: UserSettings;
  lastVisited?: string;
  startedAt?: string;
}
```

Users can export/import their progress for backup or transfer between devices.

## Development

### Adding New Pedagogical Features

1. Create a new React component in `src/components/`
2. Add corresponding CSS classes in `src/styles/global.css`
3. Update the markdown processing to recognize new syntax
4. Document the feature in this README

### Modifying Progress Tracking

The progress system is in `src/lib/progress.ts`. Key functions:
- `startChapter(slug)` - Mark chapter as started
- `completeChapter(slug)` - Mark chapter as completed
- `updateCheckpoint(...)` - Save self-assessment data
- `reviewConcept(...)` - Track concept review for spaced repetition

## Credits

Developed for the MISI (Machine Intelligence Senior Internship) Program.

Pedagogical design informed by:
- Cognitive Load Theory (Sweller)
- Spaced Repetition (Ebbinghaus)
- Active Recall (Roediger & Karpicke)
- Metacognition (Flavell)
- Desirable Difficulties (Bjork)
