# LLM Curriculum Development Plan

## Overview

LLM-Assisted Development curriculum for MISI's bootcamp week and embedded throughout the 4-week program. Materials teach students to work effectively with AI coding assistants while maintaining judgment, security awareness, and professional practices.

This is one of two parallel content tracks:
- **SWE Fundamentals** (separate track) - Core engineering principles, tools, and practices
- **LLM-Assisted Development** (this track) - Effective use of AI coding assistants

Both tracks are designed to be followed independently. The bootcamp syllabus weaves them together appropriately. The LLM track assumes students have access to Claude (via Claude Code or web interface) from Day 1.

---

## 4-Week Program Structure

| Week | Theme | LLM Curriculum Role |
|------|-------|---------------------|
| **Weekend Before** | Kick-off | Intro to AI tools (Module 00) |
| **Week 1** | Bootcamp + Team Formation | Core concepts (Tiers 1-2), First conversations |
| **Weeks 2-3** | Build | Agentic workflows, security, iteration patterns |
| **Week 4** | Polish + Present | Ethics consolidation, reflection |

### Module Delivery Classification

| Delivery | Modules | When |
|----------|---------|------|
| **Front-loaded** (Days 1-2) | 00, 01, 02, 03, 04, 05, 06 | Before heavy AI-assisted project work |
| **Just-in-time** (Weeks 2-3) | 07, 08, 09, 10, 11, 12, 13, 14 | As teams encounter agentic workflows |
| **Capstone** (Week 4) | 15, 16, 17 | Ethics consolidation before Demo Day |

---

## Detailed Delivery Timeline

### Pre-Program: Kick-off Weekend

Light-touch welcome event:
- Introductions and tone-setting
- **Homework assigned**: Ensure Claude access (account setup, API key if needed)
- Brief intro: "What is Machine Intelligence?" teaser
- Arrive Day 1 ready to have first AI conversation

### Week 1, Days 1-2: Core Concepts Bootcamp

**Day 1: Foundations** (~4-5 hours)

| Time | Content | Module |
|------|---------|--------|
| Morning | What is Machine Intelligence? | 00 |
| | How LLMs Work (Conceptually) | 01 |
| | The Capability Inflection Point | 02 |
| Afternoon | Capabilities & Limitations | 03 |
| | Your First Conversation (vibe engineering intro) | 04 |

**Day 2: Practical Skills** (~4-5 hours)

| Time | Content | Module |
|------|---------|--------|
| Morning | Reading AI-Generated Code | 05 |
| | Prompting Fundamentals | 06 |
| Afternoon | Multi-Modal Models (demo) | 07 |
| | Reasoning Models (when to use them) | 08 |

### Week 1, Days 3-5: Ideation & Project Launch

- Days 3-4: Project ideation, team formation, scoping — **using AI assistants**
- Day 5: Projects begin — first AI-assisted commits
- Students apply Modules 04-06 immediately in project context

### Weeks 2-3: Just-in-Time Learning

Embed 30-45 minute sessions as teams encounter relevant needs:

| Trigger | Module | Topic |
|---------|--------|-------|
| Long context issues | 09 | Context & Memory |
| First agentic task | 10 | Prompt Injection & AI Security (REQUIRED FIRST) |
| Setting up Claude Code/Cursor | 11 | Agentic Loops |
| Choosing workflows | 12 | Developer Workflows |
| Over-reliance concerns | 13 | The Human-AI Partnership |
| Stuck in iteration loops | 14 | Iterating with AI |

**Critical**: Module 10 (Security) must precede Module 11 (Agentic Loops). Students need the Rule of Two framework before using agents with tool access.

### Week 4: Polish & Present

| Day | Focus |
|-----|-------|
| Days 1-3 | Final development, bug fixes, polish (AI-assisted) |
| Day 4 | Ethics consolidation (Modules 15-17) + demo prep |
| Day 5 | **Demo Day** |

---

## Module Inventory

### Tier 1: Foundations (Front-loaded)

| # | Module | Time | Status |
|---|--------|------|--------|
| 00 | What Is Machine Intelligence? | 25 min | Not started |
| 01 | How LLMs Work (Conceptually) | 30 min | Not started |
| 02 | The Capability Inflection Point | 20 min | Not started |
| 03 | Capabilities & Limitations | 25 min | Not started |
| 04 | Your First Conversation | 35 min | Not started |

### Tier 2: Practical Skills (Front-loaded + Just-in-time)

| # | Module | Time | Delivery | Status |
|---|--------|------|----------|--------|
| 05 | Reading AI-Generated Code | 30 min | Front-loaded | Not started |
| 06 | Prompting Fundamentals | 35 min | Front-loaded | Not started |
| 07 | Multi-Modal Models | 25 min | Front-loaded | Not started |
| 08 | Reasoning Models | 25 min | Front-loaded | Not started |
| 09 | Context & Memory | 20 min | Just-in-time | Not started |

### Tier 3: Agentic Development (Just-in-time)

| # | Module | Time | Delivery | Status |
|---|--------|------|----------|--------|
| 10 | Prompt Injection & AI Security | 40 min | Just-in-time (REQUIRED) | Not started |
| 11 | Agentic Loops | 30 min | Just-in-time | Not started |
| 12 | Developer Workflows | 25 min | Just-in-time | Not started |
| 13 | The Human-AI Partnership | 30 min | Just-in-time | Not started |
| 14 | Iterating with AI | 25 min | Just-in-time | Not started |

### Tier 4: Judgment & Ethics (Woven + Capstone)

| # | Module | Time | Delivery | Status |
|---|--------|------|----------|--------|
| 15 | Bias & Fairness | 30 min | Capstone | Not started |
| 16 | Privacy & Data | 25 min | Capstone | Not started |
| 17 | The Future of Work | 30 min | Capstone | Not started |

---

## Time Budget Summary

| Phase | LLM Content | Notes |
|-------|-------------|-------|
| Pre-program prep | ~30 min | Account setup, teaser |
| Days 1-2 bootcamp | ~8-9 hours | Core concepts + practical skills |
| Weeks 2-3 embedded | ~3-4 hours | As-needed mini-sessions |
| Week 4 capstone | ~1.5 hours | Ethics consolidation |
| **Total** | **~13-15 hours** | Distributed across 4 weeks |

---

## Key Frameworks to Teach

Per Simon Willison research (Jan 2026):

### Vibe Engineering vs. Vibe Coding
- **Vibe coding**: Fast, loose, irresponsible — accepting AI output without verification
- **Vibe engineering**: Professional AI use requiring testing, planning, documentation, code review
- Introduced in Module 04, deepened in Module 13

### The Rule of Two (Security)
Agents must have ≤2 of:
- [A] Process untrustworthy inputs
- [B] Access to sensitive systems or private data
- [C] Change state or communicate externally

Taught in Module 10 with hands-on exercises.

### Superpowers Patterns
- TDD with agents
- Planning before delegation
- Self-updating memory notes
- Root cause debugging
- Sub-agent delegation

Referenced in Module 14.

---

## Development Tasks

### Completed
- [x] Research Simon Willison's recent work (Oct 2025 - Jan 2026)
- [x] Define topic coverage and module structure (18 modules, 4 tiers)
- [x] Document key frameworks in MEMORY.md
- [x] Record stakeholder decisions (security depth, tool choices, etc.)

### In Progress
- [ ] Develop Module 00: What Is Machine Intelligence?
- [ ] Develop Module 01: How LLMs Work (Conceptually)

### Remaining
- [ ] Complete all 18 modules
- [ ] Design hands-on exercises for each module
- [ ] Build interactive demos (prompt injection sandbox, etc.)
- [ ] Create security exercise environment (controlled prompt injection)
- [ ] Assessment/quiz materials
- [ ] Instructor notes and facilitation guides
- [ ] Integrate with SWE track syllabus

---

## Tools & Prerequisites

### Required (all students)
- Claude account (web interface minimum)
- VS Code or similar editor

### Recommended (project work)
- Claude Code CLI
- Cursor or GitHub Copilot

### Optional (demos/exploration)
- Simon's `llm` CLI (for multi-model exploration)

---

## Open Questions

1. **Claude access model?**
   - Will students have individual Claude Pro accounts?
   - Shared API key with usage limits?
   - Free tier only (context limits apply)?

2. **Security exercise environment?**
   - Need sandboxed environment for prompt injection exercises
   - Options: Local Docker, cloud sandbox, simulated scenarios

3. **Assessment strategy?**
   - Completion-based (did they do it?)
   - Reflection-based (can they explain their AI collaboration?)
   - Portfolio evidence (show effective AI partnership in project)

4. **Integration with SWE track?**
   - How tightly to weave Day 1-2 bootcamp schedules?
   - Cross-references between testing (SWE) and AI verification (LLM)?

---

## Notes

- All materials work for students with zero AI tool experience
- Assumes some will have used ChatGPT casually; formalizes effective practices
- Security content is non-negotiable — must precede agentic work
- Environmental cost mentioned in ethics but not dwelt upon (stakeholder decision)
- Skilled mentor support assumed; materials support, not replace, guidance
- 4-week duration (GHS requirement: minimum 25 hours/week, logged via SchoolLinks)
