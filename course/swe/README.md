# Software Engineering Fundamentals

This folder contains curriculum materials for teaching software engineering principles to MISI participants.

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

**Total estimated time: 9-10 hours** (delivered across Days 1-3)

This is one of two parallel content tracks:
- **SWE Fundamentals** (this track) — Core engineering principles, tools, and practices
- **LLM-Assisted Development** (separate track) — Effective use of AI coding assistants

---

## Tier 1: Foundations (Day 1)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Description |
|---|--------|------|-------------|
| 00 | [Your Development Environment](00-your-development-environment.md) | 20 min | Terminal basics, VS Code, GUI vs CLI |
| 01 | [What is Source Code?](01-what-is-source-code.md) | 20 min | Code as text, transformation to execution, code as communication |
| 02 | [GitHub Setup Guide](02-github-setup-guide.md) | 30 min | Account creation, 2FA, tools installation, first clone |
| 03 | [Understanding Diffs](03-understanding-diffs.md) | 25 min | Reading diffs, the essential skill for AI-assisted work |
| 04 | [Your First Commit](04-your-first-commit.md) | 30 min | The edit → stage → commit → push cycle |

**Interactive demos:**
- [diffs-demo.html](diffs-demo.html) — Explore diffs visually with multiple examples

---

## Tier 2: Collaboration & Quality (Day 2)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Description |
|---|--------|------|-------------|
| 05 | [Branches and Merging](05-branches-and-merging.md) | 30 min | Parallel timelines, isolation, merging |
| 06 | [Pull Requests](06-pull-requests.md) | 30 min | The collaboration workflow, code review |
| 07 | [Testing Fundamentals](07-testing-fundamentals.md) | 25 min | Why test, types of tests, the testing mindset |
| 08 | [Debugging Techniques](08-debugging-techniques.md) | 25 min | Reading errors, systematic debugging, using AI to help |
| 09 | [Dependencies & Packages](09-dependencies-packages.md) | 20 min | npm, pip, evaluating when to add dependencies |

**Interactive demos:**
- [branches-demo.html](branches-demo.html) — Visualize branch creation, commits, and merging

---

## Tier 3: Professional Practices (Day 3)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Description |
|---|--------|------|-------------|
| 10 | [Build Pipelines](10-build-pipelines.md) | 20 min | Automated verification, CI/CD concepts |
| 11 | [O11y: Understanding Your Code](11-o11y-understanding-your-code.md) | 25 min | Logs, metrics, dashboards, Grafana basics |
| 12 | [Iterative Design](12-iterative-design.md) | 20 min | MVPs, shipping early, fighting perfectionism |
| 13 | [Timeless Principles](13-timeless-principles.md) | 25 min | KISS, DRY, GIGO, YAGNI, Fail Fast |
| 14 | [Communication](14-communication.md) | 20 min | READMEs, commit messages, comments |
| 15 | [Ethics in Software](15-ethics-in-software.md) | 45 min | Discussion guide: bias, privacy, accessibility, dark patterns |

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
| [PLAN.md](PLAN.md) | Curriculum development roadmap and status |
| [AGENTS.md](AGENTS.md) | AI assistant guidance for working in this folder |
| [diffs-demo.html](diffs-demo.html) | Interactive diff exploration tool |
| [branches-demo.html](branches-demo.html) | Interactive branch visualization |

## Related

- `/docs/sell-sheet/` — Program overview materials
- `/personas/CURRICULUM_DESIGNER.md` — Persona used to develop this curriculum
- LLM-Assisted Development track (TBD)
