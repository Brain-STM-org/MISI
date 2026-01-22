# LLM Fundamentals

This folder contains curriculum materials for teaching effective AI-assisted development to MISI participants.

## Audience

- High school seniors with strong STEM backgrounds
- Programming experience not assumed (learned alongside AI tools)
- Guided by experienced software engineer mentors
- Project focus: computing, data analysis, science, business/marketing

## Philosophy

AI-assisted development is transforming how software is built. LLMs can generate code, explain concepts, and accelerate development—but they require human judgment to produce quality results. This track teaches students to:

- **Understand what AI is**: Mental models for how LLMs work, without requiring ML expertise
- **Direct AI with intent**: Effective prompting and iteration strategies
- **Verify and validate**: Critical evaluation of AI-generated output
- **Use AI responsibly**: Security awareness, ethical considerations, and professional accountability

## Curriculum Overview

**Total estimated time: ~8-10 hours** (distributed across 4-week program)

This is one of two parallel content tracks:
- **SWE Fundamentals** (separate track) — Core engineering principles, tools, and practices
- **LLM-Assisted Development** (this track) — Effective use of AI coding assistants

### Delivery Model

| Phase | Modules | When |
|-------|---------|------|
| **Front-loaded** | 00, 01, 02, 03, 04, 05, 06 | Week 1, Days 1-2 |
| **Just-in-time** | 07, 08, 09, 10, 11, 12, 13, 14 | Weeks 2-3, as needed |
| **Capstone** | 15, 16, 17 | Week 4, Day 4 |

---

## Tier 1: Foundations (Week 1, Day 1)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Description |
|---|--------|------|-------------|
| 00 | [What Is Machine Intelligence?](00-what-is-machine-intelligence.md) | 25 min | AI landscape, LLMs in context, mental models |
| 01 | [How LLMs Work (Conceptually)](01-how-llms-work-conceptually.md) | 30 min | Token prediction, training, emergent capabilities |
| 02 | [The Capability Inflection Point](02-the-capability-inflection-point.md) | 20 min | Why now matters, the acceleration of AI capabilities |
| 03 | [Capabilities & Limitations](03-capabilities-and-limitations.md) | 25 min | What AI can and cannot do, hallucinations, knowledge cutoffs |
| 04 | [Your First Conversation](04-your-first-conversation.md) | 30 min | Hands-on introduction to working with an LLM |

---

## Tier 2: Practical Skills (Week 1, Day 2 + Just-in-time)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Delivery | Description |
|---|--------|------|----------|-------------|
| 05 | [Reading AI-Generated Code](05-reading-ai-generated-code.md) | 25 min | Day 1 | Critical evaluation, verification strategies |
| 06 | [Prompting Fundamentals](06-prompting-fundamentals.md) | 30 min | Day 2 | Effective prompting, context, iteration |
| 07 | [Multi-Modal Models](07-multi-modal-models.md) | 20 min | Just-in-time | Images, diagrams, beyond text |
| 08 | [Reasoning Models](08-reasoning-models.md) | 20 min | Just-in-time | Chain-of-thought, reasoning capabilities |
| 09 | [Context & Memory](09-context-and-memory.md) | 20 min | Day 2 | Context windows, memory strategies |

---

## Tier 3: Advanced Topics (Just-in-time)

*Estimated time: 2.5-3 hours*

| # | Module | Time | Delivery | Description |
|---|--------|------|----------|-------------|
| 10 | [Prompt Injection & AI Security](10-prompt-injection-and-ai-security.md) | 30 min | Day 2 | Security risks, the Rule of Two, safe practices |
| 11 | [Agentic Loops](11-agentic-loops.md) | 25 min | Just-in-time | Autonomous AI agents, Claude Code patterns |
| 12 | [Developer Workflows](12-developer-workflows.md) | 25 min | Just-in-time | Integrating AI into daily development |
| 13 | [The Human-AI Partnership](13-the-human-ai-partnership.md) | 20 min | Day 2 | Balancing AI and human judgment |
| 14 | [Iterating with AI](14-iterating-with-ai.md) | 25 min | Just-in-time | Refinement, debugging with AI |

**Important**: Module 10 (Prompt Injection & AI Security) MUST be delivered before Module 11 (Agentic Loops). Students need the security framework before using autonomous agents.

---

## Tier 4: Ethics & Future (Capstone)

*Estimated time: 1-1.5 hours*

| # | Module | Time | Delivery | Description |
|---|--------|------|----------|-------------|
| 15 | [Bias & Fairness](15-bias-and-fairness.md) | 20 min | Week 3 | Sources of bias, mitigation strategies |
| 16 | [Privacy & Data](16-privacy-and-data.md) | 20 min | Week 3 | Data in AI systems, privacy considerations |
| 17 | [The Future of Work](17-the-future-of-work.md) | 25 min | Capstone | AI and the changing nature of work |

---

## Delivery Notes

- Each module is self-contained and can be delivered independently
- Time estimates include reading and hands-on exercises
- Ethics modules (15-17) benefit from facilitated group discussion
- Mentors should be available during hands-on portions
- Module 10 (Security) is a prerequisite for Module 11 (Agentic Loops)

### Integration with SWE Track

The LLM track is designed to complement and reinforce the SWE Fundamentals track:

| LLM Concept | SWE Connection |
|-------------|----------------|
| Reading AI-generated code | Builds on "Understanding Diffs" |
| Verifying AI output | Reinforces testing principles |
| Iterating with AI | Parallels iterative design |
| Ethics modules | Combined capstone with SWE Ethics |

## Supporting Files

| File | Purpose |
|------|---------|
| [PLAN.md](PLAN.md) | Curriculum development roadmap and status |
| [AGENTS.md](AGENTS.md) | AI assistant guidance for working in this folder |
| [MEMORY.md](MEMORY.md) | Long-term decisions and context |

## Related

- `/course/swe/` — SWE Fundamentals track (companion curriculum)
- `/docs/sell-sheet/` — Program overview materials
- `/personas/` — Personas used to develop this curriculum
