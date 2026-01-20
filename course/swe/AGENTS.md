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

### Tier 1: Foundations
1. **Source Code & Text Files** - What code actually is, why plain text matters
2. **Diffs & Changes** - Understanding what changed and why
3. **Revision Control** - Git basics, commits, branches, history
4. **GitHub Workflows** - Repos, pull requests, issues, collaboration

### Tier 2: Core Concepts
5. **Dependencies & Packages** - npm, pip, why external code matters, risks
6. **Testing** - Why test, types of tests, writing effective tests
7. **Debugging Techniques** - Systematic approaches to finding problems
8. **Reading Error Messages** - Practical skill, often undertaught

### Tier 3: Professional Practices
9. **Build Pipelines** - Automated checks (concept focus, light on tooling)
10. **O11y: Understanding Your Code** - Logs, metrics, Grafana basics for web services
11. **Iterative Design** - Ship early, learn, improve
12. **Timeless Principles** - KISS, DRY, GIGO, YAGNI, Fail Fast, Separation of Concerns
13. **Communication** - READMEs, commit messages, comments, writing for future humans
14. **Ethics** - Responsibility, bias, privacy, environmental impact

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
