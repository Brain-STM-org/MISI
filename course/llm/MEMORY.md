# MEMORY: LLM-Assisted Development Curriculum

Long-term concepts, decisions, and research findings for the LLM track of MISI.

---

## Research Session: January 21, 2026

### Kick-Off Meeting Participants
- Dr. Elena Vasquez (Curriculum Designer)
- Alvin & Theodore Willison (LLM Influencers)

### Research Focus
Comprehensive review of Simon Willison's work (October 2025 - January 2026) to ensure curriculum reflects current state of LLM-assisted development.

---

## Key Insights from Simon Willison

### 1. The Capability Inflection Point (January 2026)

**Source**: simonwillison.net, January 4, 2026

GPT-5.2 (December 2025) and Claude Opus 4.5 (November 2025) crossed a capability threshold enabling:
- Coherent reasoning across 100k+ token contexts
- Reliable tool use (code execution, computer use, file operations)
- Practical sub-agent orchestration
- Complex multi-file codebase generation (Cursor's agent swarm built a browser in 1M+ lines)

**Curriculum Implication**: Module 02 must explain *why* November 2025 changed everything — not just "new models" but "new capabilities that enable agentic workflows."

### 2. Vibe Engineering vs. Vibe Coding (October 2025)

**Source**: simonwillison.net/2025/Oct/7/vibe-engineering/

**Vibe Coding**: Fast, loose, irresponsible. Accepting AI output without verification. Amateur approach.

**Vibe Engineering**: Professional-grade AI use requiring:
- Automated testing (agents verify their own work)
- Advance planning before delegating
- Strong documentation
- Code review discipline
- Research skills to evaluate solutions
- Judgment about what to outsource vs. handle yourself

**Key Quote**: "AI tools amplify existing expertise" — the better your engineering skills, the more effectively you harness these tools.

**Curriculum Implication**: This becomes a central framework. Introduced in Module 04, deepened in Module 12. Answers: "How do I use AI without becoming dependent on it?"

### 3. Prompt Injection & The Rule of Two (November 2025)

**Source**: simonwillison.net/2025/Nov/2/new-prompt-injection-papers/

**The Lethal Trifecta**: Systems with all three are vulnerable:
1. Access to private data
2. Exposure to untrusted content
3. Ability to exfiltrate/communicate externally

**The Agents Rule of Two** (more actionable framework):
An agent must satisfy **no more than two** of:
- [A] Process untrustworthy inputs
- [B] Access to sensitive systems or private data
- [C] Change state or communicate externally

If all three are needed, human supervision is required.

**Key Quote**: "In application security, 99% is a failing grade. If there's a way to get past the guardrails, no matter how obscure, a motivated adversarial attacker is going to figure that out."

**Curriculum Implication**: New module required — "Prompt Injection & AI Security." Students must be able to audit any AI system using this framework.

### 4. Claude Skills vs. MCP (October 2025)

**Source**: simonwillison.net/2025/Oct/16/claude-skills/

**Claude Skills**: Folders with markdown instructions + scripts that Claude loads on demand.
- Token-efficient (dozens of tokens vs. tens of thousands for MCP)
- Model-agnostic
- Lower barrier to entry (anyone can create with a markdown file)
- Requires a coding environment (Claude Code)

**Curriculum Implication**: Cover Skills *after* students have Claude Code working. Positions MCP as heavier-weight alternative for enterprise use.

### 5. Superpowers Plugin Patterns (October 2025)

**Source**: simonwillison.net/2025/Oct/10/superpowers/

Jesse Vincent's Superpowers plugin demonstrates professional agent patterns:
- Test-driven development with agents (tests fail first)
- Planning steps before implementation
- Self-updating memory notes
- Root cause debugging (trace backward to source, fix there)
- Sub-agent delegation for token-heavy work
- Visual workflow specs (Graphviz DOT graphs)

**Curriculum Implication**: Advanced content for students who want professional patterns. Reference in Module 11 (Developer Workflows).

### 6. Simon's LLM CLI Tool

**Source**: github.com/simonw/llm

Unified command-line interface for multiple LLM providers:
- Works with OpenAI, Anthropic, Gemini, Llama, and dozens of others
- Tool support added in v0.26 (May 2025)
- Stores prompts/responses in SQLite for analysis
- Plugin ecosystem for extensibility

**Curriculum Implication**: Students should install and use this. Most educational way to understand multi-model access and experimentation.

### 7. Claude Cowork (January 2026)

**Source**: simonwillison.net/2026/Jan/12/claude-cowork/

Anthropic's agent for general office tasks (not just coding):
- Uses Apple's VZVirtualMachine for sandboxing
- Filesystem sandbox configured automatically
- Demonstrated prompt injection vulnerability within days of launch

**Curriculum Implication**: Example of agents expanding beyond coding. Also example of security challenges even in production systems.

### 8. Industry Shifts (Late 2025)

- Google Gemini reached 650M monthly active users by October 2025
- OpenAI introduced ads in free ChatGPT tier, launched $8/month "Go" tier
- "Open Responses" vendor-neutral API spec gaining traction (OpenRouter, Hugging Face)
- Anthropic invested $1.5M in Python Software Foundation

---

## Curriculum Decisions

### Decision 1: Adopt "Vibe Engineering" as Central Framework
**Date**: January 21, 2026
**Rationale**: Gives students a clear distinction between amateur and professional AI use. Empowers without moralizing.

### Decision 2: Add Prompt Injection Module
**Date**: January 21, 2026
**Rationale**: Security is non-negotiable for responsible practitioners. Rule of Two framework is teachable and actionable.

### Decision 3: Reorder Module 09 (Reading AI-Generated Code)
**Date**: January 21, 2026
**Rationale**: This skill is more foundational than initially placed. Consider moving to Tier 1.

### Decision 4: Weave Ethics Throughout (Not Just Tier 4)
**Date**: January 21, 2026
**Rationale**: Security, bias, and judgment should appear in context, not as an afterthought.

---

## Stakeholder Decisions (January 21, 2026)

1. **Environmental Cost**: Include in ethics module but don't dwell on it. Rationale: "The tech is here and we can't control the oligarchy but we can leverage their product to improve the world."

2. **Module Placement**: Confirmed — "Reading AI-Generated Code" moved to Tier 2 position 05 (foundational skill).

3. **Security Depth**: Include hands-on exercises. Students will attempt controlled prompt injections to understand the risks firsthand.

4. **Tool Requirements**: Simon's `llm` CLI is optional. Use for quick examples/demos if helpful, but not required. Claude Code and VSCode adaptations (Cursor, Copilot) are the primary tools since they have higher adoption.

5. **Development Order**: Work sequentially starting from Module 00.

---

## Reference Links

### Simon Willison's Key Resources
- Blog: https://simonwillison.net/
- Prompt Injection Series: https://simonwillison.net/series/prompt-injection/
- LLM CLI Tool: https://github.com/simonw/llm
- Tags/LLM: https://simonwillison.net/tags/llm/

### Specific Posts Referenced
- Vibe Engineering: https://simonwillison.net/2025/Oct/7/vibe-engineering/
- Claude Skills: https://simonwillison.net/2025/Oct/16/claude-skills/
- Superpowers: https://simonwillison.net/2025/Oct/10/superpowers/
- Prompt Injection Papers: https://simonwillison.net/2025/Nov/2/new-prompt-injection-papers/
- Claude Cowork: https://simonwillison.net/2026/Jan/12/claude-cowork/

### External Resources
- Superpowers Plugin: https://github.com/obra/Superpowers
- Open Responses Spec: (vendor-neutral API standard)
- Meta's "Agents Rule of Two" paper: Meta AI blog, October 31, 2025

---

## Session Notes

This research session was conducted using the dual-persona agentic loop documented in `course/llm/AGENTS.md`. The Willisons provided technical research; Dr. Vasquez synthesized for curriculum implications.

**Next Steps**: Update AGENTS.md topic coverage and PLAN.md with LLM curriculum development tasks.
