# AI Assistant Guidance for course/swe/

This file provides context for AI assistants working on curriculum materials in this folder.

## Scope

This folder contains software engineering curriculum for MISI (Machine Intelligence Senior Internship). Materials here teach foundational SWE concepts to high school seniors who may have no prior programming experience.

## Content Guidelines

### Audience Awareness
- **No jargon without explanation**: Define terms on first use
- **Analogy-first**: Connect technical concepts to familiar experiences (redlining documents, saving game checkpoints, etc.)
- **Hands-on bias**: Every concept should have a practical exercise
- **Mentor-supported**: Materials assume a skilled engineer is available to help

### File Types
- **Markdown (.md)**: Concept explanations, reference materials, instructor notes
- **HTML + TypeScript**: Interactive presentations and exercises
- **Keep files focused**: One topic per file, prefer many small files over few large ones

### Tone
- Direct and practical, not academic
- Respect student intelligence while not assuming knowledge
- Emphasize "why" before "how"
- Acknowledge that these skills apply beyond coding (business, science, any collaborative work)

## Topic Coverage

This is the SWE Fundamentals track. A parallel LLM-Assisted Development track exists separately. Both can be followed independently; the bootcamp syllabus weaves them together.

### Tier 1: Foundations (Week 1, Day 1)
- **00 Development Environment** - Terminal basics, VS Code, GUI vs CLI
- **01 Source Code** - What code is, plain text, transformation to execution
- **02 GitHub Setup** - Account creation, 2FA, tools installation
- **03 Understanding Diffs** - Reading changes, essential for AI-assisted work
- **04 Your First Commit** - The edit → stage → commit → push cycle

### Tier 2: Collaboration & Quality (Week 1, Day 2 + Just-in-time)
- **05 Branches and Merging** - Parallel timelines, isolation, merging
- **06 Pull Requests** - Collaboration workflow, code review
- **07 Testing Fundamentals** - Why test, types of tests, testing mindset (just-in-time)
- **08 Debugging Techniques** - Reading errors, systematic debugging, AI assistance
- **09 Dependencies & Packages** - npm, pip, evaluating dependencies (just-in-time)

### Tier 3: Professional Practices (Just-in-time + Capstone)
- **10 Build Pipelines** - Automated verification, CI/CD concepts
- **11 O11y** - Logs, metrics, dashboards, Grafana basics
- **12 Iterative Design** - MVPs, shipping early, fighting perfectionism
- **13 Timeless Principles** - KISS, DRY, GIGO, YAGNI, Fail Fast, Separation of Concerns
- **14 Communication** - READMEs, commit messages, comments
- **15 Ethics** - Bias, privacy, accessibility, dark patterns (Week 4 capstone)

### Out of Scope
- Advanced Git (rebasing, cherry-picking) - mentors/LLMs assist as needed
- Design Patterns - emerge through inquiry-based learning
- Language-specific deep dives - covered in project context

## Development Priorities

1. GitHub account setup and basic workflow (immediate need)
2. Core concepts that apply to all projects
3. Interactive exercises that reinforce learning
4. Reference materials students can return to

## Technical Standards

- HTML presentations should work offline (no CDN dependencies in final form)
- TypeScript for any interactive components
- Accessible design (semantic HTML, keyboard navigation, sufficient contrast)
- Mobile-friendly where practical
