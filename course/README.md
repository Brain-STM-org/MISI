# MISI Course Materials

This folder contains curriculum for the Machine Intelligence Senior Internship (MISI) bootcamp and 4-week program.

## Two Parallel Tracks

MISI curriculum is organized into two complementary tracks that can be studied independently but are woven together during delivery:

| Track | Focus | Modules | Time |
|-------|-------|---------|------|
| **[SWE Fundamentals](swe/)** | Core engineering principles, tools, and practices | 16 | ~8-10 hours |
| **[LLM-Assisted Development](llm/)** | Effective use of AI coding assistants | 18 | ~13-15 hours |

**Total curriculum time**: ~21-25 hours, distributed across the 4-week program.

---

## Track Summaries

### SWE Fundamentals (`swe/`)

Establishes shared vocabulary and practices for software engineering:

- **Tier 1**: Development environment, source code, GitHub, diffs, commits
- **Tier 2**: Branches, pull requests, testing, debugging, dependencies
- **Tier 3**: Build pipelines, observability, iterative design, principles, communication, ethics

**Key outcome**: Students can collaborate on code with professional practices.

### LLM-Assisted Development (`llm/`)

Teaches effective, responsible use of AI coding assistants:

- **Tier 1**: What AI is, how LLMs work, capabilities and limitations
- **Tier 2**: Reading AI code, prompting, multi-modal, reasoning, context
- **Tier 3**: Security (prompt injection), agentic loops, workflows, partnership, iteration
- **Tier 4**: Bias, privacy, future of work

**Key outcome**: Students can use AI tools professionally while maintaining judgment and accountability.

---

## Weaving the Tracks: Bootcamp Schedule

The bootcamp (Week 1, Days 1-2) interleaves both tracks. Here's how they complement each other:

### Day 1: Foundations (~4-5 hours each track)

| Time Block | SWE Track | LLM Track |
|------------|-----------|-----------|
| **Morning** | Dev environment (00), Source code (01), GitHub setup (02) | What is MI? (00), How LLMs work (01), Capability inflection (02) |
| **Afternoon** | Understanding diffs (03), First commit (04) | Capabilities & limits (03), First conversation (04) |

**Integration point**: The LLM track's "Reading AI Code" (05) directly builds on SWE's "Understanding Diffs" (03). Students learn to read code changes, then apply that skill to AI-generated code.

### Day 2: Collaboration & Practical Skills (~4-5 hours each track)

| Time Block | SWE Track | LLM Track |
|------------|-----------|-----------|
| **Morning** | Branches (05), Pull requests (06), Debugging (08) | Reading AI code (05), Prompting fundamentals (06) |
| **Afternoon** | Iterative design (12) | Multi-modal (07), Reasoning models (08) |

**Integration point**: SWE's "Pull Requests" (06) emphasizes code review. LLM track reinforces that AI code must be reviewed with the same rigor as human code.

### Weeks 2-3: Just-in-Time Delivery

Both tracks have modules delivered as teams encounter relevant needs:

| Trigger | SWE Module | LLM Module |
|---------|------------|------------|
| First test written | Testing Fundamentals (07) | — |
| First agentic task | — | Prompt Injection (10) *REQUIRED FIRST* |
| Using Claude Code/Cursor | — | Agentic Loops (11), Workflows (12) |
| Long context issues | — | Context & Memory (09) |
| Over-reliance concerns | — | Human-AI Partnership (13) |
| Code complexity growing | Timeless Principles (13) | Iterating with AI (14) |
| First deployment | Build Pipelines (10) | — |

### Week 4: Capstone (Day 4)

| SWE Track | LLM Track |
|-----------|-----------|
| Ethics in Software (15) | Bias & Fairness (15), Privacy & Data (16), Future of Work (17) |

**Integration point**: Ethics discussions from both tracks can be combined into a single capstone session, examining both traditional software ethics and AI-specific ethical considerations.

---

## Key Cross-Track Connections

| SWE Concept | LLM Concept | How They Connect |
|-------------|-------------|------------------|
| Reading diffs | Reading AI code | Same skill, applied to AI output |
| Code review | Verification | AI code needs same review rigor |
| Testing | Trust but verify | Tests verify AI-generated code |
| Iterative design | Iterating with AI | Both emphasize cycles of refinement |
| Ethics | Bias, privacy, future | Complementary ethical frameworks |

---

## Delivery Notes

### For Instructors

1. **Don't rush security**: LLM Module 10 (Prompt Injection) MUST precede Module 11 (Agentic Loops). Students need the Rule of Two framework before using agents.

2. **Reinforce cross-references**: When teaching SWE debugging, reference LLM reasoning. When teaching LLM verification, reference SWE testing.

3. **Combined exercises**: Have students:
   - Generate code with AI, then create a pull request for peer review
   - Write tests for AI-generated code
   - Use AI to help debug, but verify with systematic techniques

4. **Ethics integration**: The capstone ethics discussion benefits from combining both tracks' perspectives.

### For Students

Both tracks are valuable independently:
- SWE track is useful even without AI tools
- LLM track is useful even with existing coding experience

The combination is more powerful than either alone.

---

## Supporting Files

| File | Purpose |
|------|---------|
| `PLAN.md` | Slide presentation development plan |
| `swe/PLAN.md` | SWE curriculum development status |
| `llm/PLAN.md` | LLM curriculum development status |
| `swe/SCHEDULE.md` | Detailed SWE bootcamp schedule |

---

## Development Status

| Track | Modules | Content Status | Slides |
|-------|---------|----------------|--------|
| SWE | 16/16 | Complete | Pending |
| LLM | 18/18 | Complete (pending review) | Pending |

**Next phase**: Convert markdown modules to HTML+TypeScript slide presentations. See `PLAN.md` for details.
