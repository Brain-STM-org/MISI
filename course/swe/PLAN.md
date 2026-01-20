# SWE Curriculum Development Plan

## Overview

Develop software engineering fundamentals curriculum for MISI's first days. Materials should establish shared vocabulary and practices that teams use throughout their 5-week projects.

This is one of two parallel content tracks:
- **SWE Fundamentals** (this track) - Core engineering principles, tools, and practices
- **LLM-Assisted Development** (separate track) - Effective use of AI coding assistants

Both tracks are designed to be followed independently. The bootcamp syllabus weaves them together appropriately, but the SWE track is valuable for anyone (including experienced SWEs new to LLM-assisted workflows).

## Delivery Timeline (Program Days 1-3)

### Day 1: Foundations
- What is software? What is source code?
- GitHub account creation and configuration
- First repository: clone, edit, commit, push
- Understanding diffs and change tracking

### Day 2: Collaboration & Quality
- Branches and pull requests
- Code review basics
- Introduction to testing concepts
- Debugging mindset and techniques

### Day 3: Professional Practices
- Build pipelines and automated checks
- O11y: understanding what your code is doing
- Iterative design principles
- Communication: writing for future humans
- Ethics in software development

## Topic Modules to Develop

### Tier 1: Essential (must complete first)
| Topic | Format | Status |
|-------|--------|--------|
| GitHub Setup Guide | Markdown + screenshots | **Draft complete** |
| What is Source Code? | Markdown + interactive demo | **Draft complete** |
| Your First Commit | Step-by-step tutorial | **Draft complete** |
| Understanding Diffs | Interactive HTML/TS | **Draft complete** |

### Tier 2: Core Concepts
| Topic | Format | Status |
|-------|--------|--------|
| Revision Control Concepts | Markdown | Not started |
| Branches and Merging | Interactive visualization | Not started |
| Pull Requests | Tutorial + exercise | Not started |
| Dependencies & Packages | Markdown (npm, pip, why they exist) | Not started |
| Testing Fundamentals | Markdown + examples | Not started |
| Debugging Techniques | Markdown + exercises | Not started |
| Reading Error Messages | Markdown + exercises | Not started |

### Tier 3: Professional Practices
| Topic | Format | Status |
|-------|--------|--------|
| Build Pipelines | Markdown (concept focus, light on tooling) | Not started |
| O11y: Understanding Your Code | Markdown (logs, metrics, Grafana basics) | Not started |
| Iterative Design | Markdown + case studies | Not started |
| Timeless Principles | Markdown (KISS, DRY, GIGO, YAGNI, etc.) | Not started |
| Communication | Markdown (READMEs, comments, commit messages) | Not started |
| Ethics in Software | Discussion guide | Not started |

## Topic Details

### Build Pipelines (formerly CI)
Focus on the concept: computers automatically verify your work. Students should understand:
- What happens when you push code
- Why automated checks catch problems early
- Basic awareness of GitHub Actions (mentors help with configuration)

### O11y: Understanding What Your Code Is Doing
Observability for beginners. Cover:
- Print debugging and logging
- Reading and understanding error messages
- Introduction to metrics and dashboards
- Grafana basics (LLMs make setup accessible now)
- Applies to web services students will deploy

### Timeless Principles
Engineering wisdom that transcends any specific technology:
- **KISS** - Keep It Simple, Stupid
- **DRY** - Don't Repeat Yourself
- **GIGO** - Garbage In, Garbage Out
- **YAGNI** - You Aren't Gonna Need It
- **Separation of Concerns**
- **Fail Fast**

These principles predate and will outlast any framework or language.

### Communication
Writing for humans (including your future self):
- README files that actually help
- Commit messages that explain "why"
- Comments: when to write them, when not to
- Documentation as a form of respect

### Dependencies & Packages
Nearly every project uses external code:
- What `npm install` / `pip install` actually does
- Why dependencies exist (don't reinvent wheels)
- Risks: security, maintenance, bloat
- Lock files and reproducibility

## Explicitly Out of Scope

These topics are deferred or handled through mentorship and inquiry-based learning:

- **Advanced Git** (rebasing, cherry-picking, complex merges) - mentors or LLMs assist as needed
- **Design Patterns** - emerge naturally through project work and guided inquiry
- **Language-specific deep dives** - covered in project context, not abstractly

## Development Tasks

### Immediate
- [x] Review and finalize topic inclusion list
- [x] Create GitHub setup guide (highest priority for Day 1)
- [x] Develop "What is Source Code?" module
- [x] Build interactive diff viewer demo

### Near-term
- [x] Complete Tier 1 modules
- [ ] Draft Tier 2 content
- [ ] Design hands-on exercises for each module

### Later
- [ ] Interactive presentations (HTML/TS)
- [ ] Assessment/quiz materials
- [ ] Instructor notes and facilitation guides

## Open Questions

1. **Programming language for examples?**
   - Python is accessible but may not match all project types
   - Could use pseudocode or multiple languages
   - TypeScript aligns with web-focused projects

2. **Ethics module approach?**
   - Case study discussion vs. structured curriculum
   - Topics: AI bias, environmental impact, privacy, accessibility

3. **Assessment strategy?**
   - Completion-based (did they do it?)
   - Competency-based (can they explain it?)
   - Portfolio evidence (apply it to their project)

## Notes

- All materials should work for students with zero programming background
- Skilled mentor support assumed; materials support, not replace, human guidance
- Principles apply beyond coding: marketing, science, business projects all benefit
- LLM curriculum is a parallel track; bootcamp syllabus integrates both appropriately
