# Software Engineering Fundamentals

This folder contains curriculum materials for teaching software engineering principles to MISI participants.

## Folder Structure

```
swe/
├── book/           # Textbook chapters (readable markdown)
├── deck/           # Slide presentations (Slidev format)
├── README.md       # This file - course overview
├── PLAN.md         # Curriculum development roadmap
├── SCHEDULE.md     # Detailed session timing
├── AGENTS.md       # AI assistant guidance
├── diffs-demo.html # Interactive diff exploration
└── branches-demo.html # Interactive branch visualization
```

## Audience

- High school seniors with strong STEM backgrounds
- Programming experience not assumed
- Guided by experienced software engineer mentors
- Project focus: computing, data analysis, science, business/marketing

## Philosophy

Software engineering principles are universal. Whether building a data pipeline, a marketing dashboard, or a scientific simulation, the same fundamentals apply:

- **Persistence matters**: Every professional domain uses some form of revision control (lawyers call it redlining, accountants call it audit trails)
- **Iteration is normal**: Good software emerges through cycles of build, test, learn, refine
- **Collaboration requires structure**: Teams need shared conventions to work together effectively
- **AI amplifies, humans direct**: LLM-assisted development makes these principles more important, not less

## Curriculum Overview

**Total estimated time: ~8-10 hours** (distributed across 4-week program)

This is one of two parallel content tracks:
- **SWE Fundamentals** (this track) — Core engineering principles, tools, and practices
- **LLM-Assisted Development** (separate track) — Effective use of AI coding assistants

### Delivery Model

| Phase | Modules | When |
|-------|---------|------|
| **Front-loaded** | 00, 01, 02, 03, 04, 05, 06, 08, 12 | Week 1, Days 1-2 |
| **Just-in-time** | 07, 09, 10, 11, 13, 14 | Weeks 2-3, as needed |
| **Capstone** | 15 | Week 4, Day 4 |

---

## Tier 1: Foundations (Week 1, Day 1)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Description |
|---|--------|------|-------------|
| 00 | [Your Development Environment](book/00-your-development-environment.md) | 20 min | Terminal basics, VS Code, GUI vs CLI |
| 01 | [What is Source Code?](book/01-what-is-source-code.md) | 20 min | Code as text, transformation to execution, code as communication |
| 02 | [GitHub Setup Guide](book/02-github-setup-guide.md) | 30 min | Account creation, 2FA, tools installation, first clone |
| 03 | [Understanding Diffs](book/03-understanding-diffs.md) | 25 min | Reading diffs, the essential skill for AI-assisted work |
| 04 | [Your First Commit](book/04-your-first-commit.md) | 30 min | The edit → stage → commit → push cycle |

**Interactive demos:**
- [diffs-demo.html](diffs-demo.html) — Explore diffs visually with multiple examples

---

## Tier 2: Collaboration & Quality (Week 1, Day 2 + Just-in-time)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Delivery | Description |
|---|--------|------|----------|-------------|
| 05 | [Branches and Merging](book/05-branches-and-merging.md) | 30 min | Day 2 | Parallel timelines, isolation, merging |
| 06 | [Pull Requests](book/06-pull-requests.md) | 30 min | Day 2 | The collaboration workflow, code review |
| 07 | [Testing Fundamentals](book/07-testing-fundamentals.md) | 25 min | Just-in-time | Why test, types of tests, the testing mindset |
| 08 | [Debugging Techniques](book/08-debugging-techniques.md) | 25 min | Day 2 | Reading errors, systematic debugging, using AI to help |
| 09 | [Dependencies & Packages](book/09-dependencies-packages.md) | 20 min | Just-in-time | npm, pip, evaluating when to add dependencies |

**Interactive demos:**
- [branches-demo.html](branches-demo.html) — Visualize branch creation, commits, and merging

---

## Tier 3: Professional Practices (Just-in-time + Capstone)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Delivery | Description |
|---|--------|------|----------|-------------|
| 10 | [Build Pipelines](book/10-build-pipelines.md) | 20 min | Just-in-time | Automated verification, CI/CD concepts |
| 11 | [O11y: Understanding Your Code](book/11-o11y-understanding-your-code.md) | 25 min | Just-in-time | Logs, metrics, dashboards, Grafana basics |
| 12 | [Iterative Design](book/12-iterative-design.md) | 20 min | Day 2 | MVPs, shipping early, fighting perfectionism |
| 13 | [Timeless Principles](book/13-timeless-principles.md) | 25 min | Just-in-time | KISS, DRY, GIGO, YAGNI, Fail Fast |
| 14 | [Communication](book/14-communication.md) | 20 min | Just-in-time | READMEs, commit messages, comments |
| 15 | [Ethics in Software](book/15-ethics-in-software.md) | 45 min | Capstone | Discussion guide: bias, privacy, accessibility, dark patterns |

---

## Delivery Notes

- Each module is self-contained and can be delivered independently
- Time estimates include reading and hands-on exercises
- Ethics module (15) is designed for facilitated group discussion
- Mentors should be available during hands-on portions
- Interactive HTML demos work offline (no internet required)

## Supporting Files

| File | Purpose |
|------|---------|
| [book/](book/) | Textbook chapters (readable markdown) |
| [deck/](deck/) | Slide presentations (Slidev format) |
| [PLAN.md](PLAN.md) | Curriculum development roadmap and status |
| [SCHEDULE.md](SCHEDULE.md) | Detailed session timing |
| [AGENTS.md](AGENTS.md) | AI assistant guidance for working in this folder |
| [diffs-demo.html](diffs-demo.html) | Interactive diff exploration tool |
| [branches-demo.html](branches-demo.html) | Interactive branch visualization |

## Related

- `/course/llm/` — LLM Fundamentals track (companion curriculum)
- `/docs/sell-sheet/` — Program overview materials
- `/personas/` — Personas used to develop this curriculum
