# AI Assistant Guidance for course/llm

This file provides context for AI assistants working on curriculum materials in this folder.

## Scope

This folder contains the Large-Language Model Assisted (LLM-Assisted) development curriculum for MISI (Machine Intelligence Senior Internship). Materials here teach foundational AI concepts to high school seniors who may have no prior programming experience. We often refer to it as Machine Intelligence because "AI" is so hyped.

## Content Guidelines

### Audience Awareness
- **No jargon without explanation**: Define terms on first use
- **Analogy-first**: Connect technical concepts to familiar experiences (autocomplete, spell-check, predictive text)
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

---

## Topic Coverage

This is the LLM-Assisted Development track. A parallel Software Engineering Fundamentals track exists in `course/swe/`. Both can be followed independently; the bootcamp syllabus weaves them together.

### Tier 1: Foundations (Week 1)
- **00 What Is Machine Intelligence?** - Brief history: ELIZA → neural nets → transformers → today; demystifying "AI"
- **01 How LLMs Work (Conceptually)** - Tokens, prediction, context windows, temperature — no math required, just mental models
- **02 The Capability Inflection Point** - What changed Nov-Dec 2025 (Opus 4.5, GPT-5.2); why agentic workflows are now practical; 100k+ token coherence
- **03 Capabilities & Limitations** - What LLMs excel at vs. where they fail; hallucinations, reasoning limits, knowledge cutoffs
- **04 Your First Conversation** - Hands-on: using Claude/ChatGPT effectively; introduces "vibe engineering" vs. "vibe coding" distinction

### Tier 2: Practical Skills (Week 1-2)
- **05 Reading AI-Generated Code** - Critical skill: reviewing, understanding, and verifying LLM output (moved up — foundational)
- **06 Prompting Fundamentals** - System prompts, user prompts, roles, constraints; the "improv actor" mental model
- **07 Multi-Modal Models** - Text + images + audio + video; when and why to use different modes
- **08 Reasoning Models** - Chain-of-thought, Claude's extended thinking, o1-style reasoning; when to use them
- **09 Context & Memory** - Long context windows, conversation history, RAG concepts (light touch)

### Tier 3: Agentic Development (Week 2-3)
- **10 Prompt Injection & AI Security** - The Rule of Two framework; Lethal Trifecta; evaluating AI system safety (REQUIRED before agentic work)
- **11 Agentic Loops** - What agents are, tool use, multi-step reasoning; Claude Code as case study
- **12 Developer Workflows** - Cursor, Claude Code, Copilot; how professionals actually use LLMs today; Claude Skills (Simon's `llm` CLI as optional demo)
- **13 The Human-AI Partnership** - Vibe engineering in depth; when to trust, when to verify, maintaining judgment and agency
- **14 Iterating with AI** - Debugging with LLMs, refining outputs, knowing when to start over; Superpowers patterns

### Tier 4: Judgment & Ethics (woven throughout, consolidated Week 4)
- **15 Bias & Fairness** - Where bias comes from, how to recognize it, mitigation strategies
- **16 Privacy & Data** - What you share with LLMs, enterprise vs. consumer, data handling
- **17 The Future of Work** - Honest discussion: what changes, what stays human, preparing for uncertainty

### Out of Scope
- **Fine-tuning & training** - Too deep for this program; students use pre-trained models
- **API integration code** - Mentors assist as needed; focus is on concepts not implementation
- **Specific model internals** - No transformer architecture deep-dives; conceptual understanding only

### Key Frameworks (per Simon Willison research, Jan 2026)
- **Vibe Engineering**: Professional AI use requiring testing, planning, documentation, code review — vs. "vibe coding" (accepting output without verification)
- **Rule of Two**: Agents must have ≤2 of: (A) untrusted inputs, (B) private data access, (C) external communication
- **Superpowers Patterns**: TDD with agents, planning steps, self-updating memory, root cause debugging

---

## Dual-Persona Development Process

This curriculum is developed using a structured alternation between two AI personas. This section documents the process for maintaining consistency across sessions.

### The Personas

**Dr. Elena Vasquez (Curriculum Designer)**
- Located at: `personas/CURRICULUM_DESIGNER.md`
- Role: Pedagogical structure, learning objectives, scaffolding, assessment design
- Strengths: Breaking complex ideas into learnable sequences, anticipating misconceptions, ensuring accessibility
- Focus: "How do students best learn this? What order? What exercises?"

**Alvin & Theodore Willison (LLM Influencers)**
- Located at: `personas/LLM_INFLUENCER.md`
- Role: Cutting-edge LLM knowledge, practical demonstrations, industry trends
- Strengths: Current best practices, Simon Willison's insights, hands-on demos, real-world applications
- Focus: "What's actually true about LLMs today? What should students know to be effective?"

### The Agentic Loop Protocol

```
┌─────────────────────────────────────────────────────────────────┐
│                    DUAL-PERSONA LOOP                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. ELENA proposes curriculum structure/content                 │
│          ↓                                                      │
│  2. ALVIN/THEODORE reviews for technical accuracy,              │
│     adds cutting-edge insights, suggests improvements           │
│          ↓                                                      │
│  3. ELENA refines based on feedback, ensures pedagogical        │
│     soundness, maintains audience-appropriateness               │
│          ↓                                                      │
│  4. Repeat until convergence OR human input needed              │
│          ↓                                                      │
│  5. PAUSE for human stakeholder review every 6-7 iterations     │
│     OR immediately if either persona identifies a decision      │
│     requiring human judgment                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Iteration Guidelines

**Starting an Iteration**
```markdown
## Iteration N — [ELENA|WILLISONS]

**Focus**: [What this iteration addresses]
**Building on**: [Reference to previous iteration's output]

[Persona-specific content here]

**Handoff to [next persona]**: [Specific questions or areas needing their expertise]
```

**When to Pause for Human Input**
Either persona should request a pause when:
- A decision requires stakeholder judgment (scope, emphasis, priorities)
- Technical accuracy is uncertain and verification is needed
- The personas have reached an impasse or fundamental disagreement
- Content touches on sensitive topics requiring human review (ethics, specific companies, controversial claims)
- 6-7 iterations have completed (mandatory checkpoint)

**Pause Format**
```markdown
## PAUSE REQUESTED — Human Input Needed

**Requesting Persona**: [Elena | Willisons]
**Issue**: [Clear statement of what needs human decision]
**Options Considered**: [What the personas have discussed]
**Recommendation**: [If any]
**Questions for Stakeholder**:
1. [Specific question]
2. [Specific question]
```

### Quality Checks Each Iteration Should Consider

**Elena's Checklist**
- [ ] Learning objectives are clear and measurable
- [ ] Content is appropriately scaffolded for the audience
- [ ] Exercises are practical and achievable
- [ ] No assumed knowledge beyond stated prerequisites
- [ ] Tone is warm but rigorous

**Willisons' Checklist**
- [ ] Technical content is accurate as of late 2025
- [ ] Reflects current best practices (not outdated patterns)
- [ ] Includes concrete, working examples
- [ ] Addresses common misconceptions
- [ ] References Simon Willison's work where relevant

### Session Continuity

When resuming curriculum development:
1. Read this AGENTS.md to restore context
2. Review any in-progress module files
3. Check the last iteration number and which persona was active
4. Continue from where the previous session ended

---

## Technical Standards

- HTML presentations should work offline (no CDN dependencies in final form)
- TypeScript for any interactive components
- Accessible design (semantic HTML, keyboard navigation, sufficient contrast)
- Mobile-friendly where practical

---

## Current Development Status

**Last Updated**: January 21, 2026
**Current Focus**: Beginning sequential module development
**Last Iteration**: 6 (Elena) — Kick-off meeting; stakeholder decisions recorded
**Next Action**: Develop Module 00: What Is Machine Intelligence?

---

## References

### Simon Willison Resources (Willisons should search/reference)
- **Blog**: https://simonwillison.net/
- **LLM CLI Tool**: https://github.com/simonw/llm
- **Prompt Injection Series**: https://simonwillison.net/series/prompt-injection/
- **Tags/LLM**: https://simonwillison.net/tags/llm/

### Key Posts (Oct 2025 - Jan 2026)
- Vibe Engineering: https://simonwillison.net/2025/Oct/7/vibe-engineering/
- Claude Skills: https://simonwillison.net/2025/Oct/16/claude-skills/
- Superpowers: https://simonwillison.net/2025/Oct/10/superpowers/
- Prompt Injection Papers: https://simonwillison.net/2025/Nov/2/new-prompt-injection-papers/
- Claude Cowork: https://simonwillison.net/2026/Jan/12/claude-cowork/

### External Resources
- Superpowers Plugin: https://github.com/obra/Superpowers
- Open Responses API Spec (vendor-neutral standard)

### Key Concepts to Emphasize (per program philosophy)
- LLMs as tools, not oracles
- Human judgment remains essential
- Iteration over perfection
- Reading/reviewing AI output is a critical skill
- Ethical awareness is non-negotiable
- **Vibe engineering over vibe coding** (professional vs. amateur AI use)
- **Security-first thinking** (Rule of Two for agent design)
