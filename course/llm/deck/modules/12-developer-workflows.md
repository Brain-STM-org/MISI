---
theme: default
title: "Module 12: Developer Workflows"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 12: Developer Workflows
drawings:
  persist: false
transition: slide-left
---

# Module 12

## Developer Workflows

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
AI coding tools and how to use them.
Copilot, Cursor, Claude Code, and workflow patterns.

Estimated time: 30 minutes
Delivery: Day 2 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Tool selection framework, workflow patterns for different tasks
- Willisons: Deep dives on specific tools, security considerations per tool
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The best developers aren't the ones who type the fastest. They're the ones who think the clearest."
</div>

<div class="mt-4 text-gray-500">
— Unknown
</div>

<!--
AI helps with typing speed. Thinking is still on you.
-->

---
layout: section
---

# The Tool Landscape

Categories of AI coding tools

---

# Tool Categories

| Category | Examples | How They Work |
|----------|----------|---------------|
| **Inline Assistants** | GitHub Copilot, Codeium | Autocomplete as you type |
| **Chat Interfaces** | Claude.ai, ChatGPT | Conversational help |
| **Agentic IDEs** | Cursor, Windsurf | Full IDE with agents |
| **CLI Agents** | Claude Code, Aider | Terminal-based agents |
| **API Access** | Claude API, OpenAI API | Build your own |

<v-click>

<div class="mt-4 text-gray-400">
Each category has tradeoffs. Let's understand them.
</div>

</v-click>

<!--
Tool category overview.
-->

---
layout: section
---

# Inline Assistants

Copilot & Friends

---

# How Inline Assistants Work

As you type, AI predicts what comes next:

```python
def calculate_shipping(weight, distance):
    # AI suggests completion as you type
    base_rate = 5.00
    per_pound = 0.50
    per_mile = 0.10
    return base_rate + (weight * per_pound) + (distance * per_mile)
```

<v-click>

Press Tab to accept, or keep typing to reject.

</v-click>

<!--
How inline assistants work.
-->

---

# Inline: Strengths & Limitations

<div class="grid grid-cols-2 gap-8">

<div>

**Strengths**

- Low friction
- Fast
- Good for boilerplate
- Learn patterns as you code

</div>

<div>

**Limitations**

- Limited context (often just current file)
- Can't explain
- Encourages acceptance
- Subtle bugs

</div>

</div>

<!--
Inline pros and cons.
-->

---

# Inline Best Practices

<v-clicks>

1. **Read before accepting** — Every Tab should be deliberate

2. **Use for patterns, verify for logic** — Trust structure, verify behavior

3. **Keep suggestions short** — Accept line-by-line when uncertain

4. **Turn off for complex logic** — Think first, then generate

</v-clicks>

<!--
Inline best practices.
-->

---
layout: section
---

# Chat Interfaces

Claude.ai & ChatGPT

---

# How Chat Interfaces Work

Conversational coding help:

```
You: How should I structure a REST API for a bookstore?
AI: [Explains architecture, provides examples, discusses tradeoffs]
You: Can you show me the models?
AI: [Provides code with explanation]
```

<v-click>

You copy relevant parts into your project.

</v-click>

<!--
How chat interfaces work.
-->

---

# Chat: Strengths & Limitations

<div class="grid grid-cols-2 gap-8">

<div>

**Strengths**

- Deep explanations
- Iterative refinement
- Large context
- Learning-focused

</div>

<div>

**Limitations**

- Manual integration (copy-paste)
- No file access
- Context loss over time
- Can't execute

</div>

</div>

<!--
Chat pros and cons.
-->

---

# Chat Best Practices

<v-clicks>

1. **Provide context** — Paste relevant code, explain your setup

2. **Ask for explanations** — Don't just get code, understand it

3. **Iterate** — "What if..." and "How would this change if..."

4. **Use for learning** — Best for concepts, not bulk generation

</v-clicks>

<!--
Chat best practices.
-->

---
layout: section
---

# Agentic IDEs

Cursor & Windsurf

---

# How Agentic IDEs Work

Full IDE with AI deeply integrated:

<v-clicks>

- AI can see your **entire codebase**
- AI can make **multi-file changes**
- AI can **run commands** (with permission)
- Inline + chat + agent modes combined

</v-clicks>

<!--
How agentic IDEs work.
-->

---

# Agentic IDE: Strengths & Limitations

<div class="grid grid-cols-2 gap-8">

<div>

**Strengths**

- Full codebase context
- Multi-file changes
- Integrated experience
- Agent capabilities

</div>

<div>

**Limitations**

- Learning curve
- Cost
- Vendor lock-in
- Security surface

</div>

</div>

<!--
Agentic IDE pros and cons.
-->

---

# Cursor-Specific Tips

```
@file src/models/user.py    # Reference specific file
@codebase                    # Search entire codebase
Cmd+K                        # Inline edit mode
Cmd+L                        # Open chat
```

<v-click>

<div class="mt-4 text-gray-400">
Start with chat mode. Discuss before delegating.
</div>

</v-click>

<!--
Cursor-specific features.
-->

---
layout: section
---

# CLI Agents

Claude Code

---

# How CLI Agents Work

Terminal-based AI with full system access:

```bash
$ claude

You: Add input validation to the registration endpoint

Claude: I'll examine the current endpoint, add validation,
        and verify with tests.

[Reads files, makes changes, runs tests]

Done. Here's what I changed: [summary]
```

<!--
How CLI agents work.
-->

---

# CLI Agent: Strengths & Limitations

<div class="grid grid-cols-2 gap-8">

<div>

**Strengths**

- Deep integration
- Powerful automation
- Transparent actions
- Git-aware

</div>

<div>

**Limitations**

- Terminal comfort required
- Requires trust
- Can make mistakes
- Resource usage

</div>

</div>

<!--
CLI agent pros and cons.
-->

---

# CLI Agent Best Practices

<v-clicks>

1. **Be specific** — Clear goals produce better results

2. **Watch it work** — Monitor actions in real-time

3. **Use git** — Easy rollback if things go wrong

4. **Start small** — Build trust before big tasks

</v-clicks>

<!--
CLI agent best practices.
-->

---
layout: section
---

# Choosing the Right Tool

Decision framework

---

# Tool Selection Framework

```
What kind of task is it?
│
├── Learning/understanding
│   └── Chat interfaces (Claude.ai, ChatGPT)
│
├── Quick code completion while typing
│   └── Inline assistants (Copilot)
│
├── Multi-file changes or refactoring
│   └── Agentic IDEs or CLI agents
│
├── Exploring unfamiliar codebase
│   └── CLI agents or agentic IDEs
│
└── Complex, multi-step automation
    └── CLI agents (Claude Code)
```

<!--
Tool selection decision tree.
-->

---

# Tool Combinations

Many developers use multiple tools:

| Combination | Use Case |
|-------------|----------|
| Copilot + Claude.ai | Quick completions + deep explanations |
| Cursor + Claude Code | IDE work + terminal automation |
| ChatGPT + Copilot | Learning + implementation |

<v-click>

<div class="mt-4 text-gray-400">
No single "best" setup. Experiment and find what works.
</div>

</v-click>

<!--
Tool combinations.
-->

---
layout: section
---

# Security Across Tools

Applying the Rule of Two

---

# Tool Risk Comparison

| Tool | Untrusted Input | Private Access | External Actions |
|------|-----------------|----------------|------------------|
| Copilot | Limited | Current file | None |
| Claude.ai | Your paste | What you share | None |
| Cursor | Codebase | Full project | Commands (w/ approval) |
| Claude Code | Codebase | Full system | Commands (w/ approval) |

<v-click>

<div class="mt-4 text-gray-400">
More capabilities = more caution needed.
</div>

</v-click>

<!--
Tool risk comparison.
-->

---

# Risk Mitigation by Tool

**Inline assistants**: Lower risk; still review all suggestions

<v-click>

**Chat interfaces**: Don't paste secrets or credentials

</v-click>

<v-click>

**Agentic tools**:
- Review before approving actions
- Use git for easy rollback
- Don't run on untrusted codebases blindly
- Be cautious with network-accessing commands

</v-click>

<!--
Risk mitigation strategies.
-->

---
layout: section
---

# Workflow Patterns

How to structure your work

---

# Pattern 1: Explore → Understand → Implement

```
1. Use chat to understand the problem
2. Use chat to discuss approaches
3. Use agent/IDE to implement
4. Review and test
```

<v-click>

<div class="mt-4 text-gray-400">
Good for: New features, unfamiliar territory
</div>

</v-click>

<!--
Explore-understand-implement pattern.
-->

---

# Pattern 2: Quick Implementation

```
1. Clear goal in mind
2. Use agent directly
3. Review changes
4. Test
```

<v-click>

<div class="mt-4 text-gray-400">
Good for: Well-understood tasks, boilerplate
</div>

</v-click>

<!--
Quick implementation pattern.
-->

---

# Pattern 3: Pair Programming

```
1. You write the structure
2. AI fills in details
3. You review and adjust
4. AI handles cleanup
```

<v-click>

<div class="mt-4 text-gray-400">
Good for: Complex logic where you want control
</div>

</v-click>

<!--
Pair programming pattern.
-->

---

# Pattern 4: Learning Mode

```
1. Ask chat to explain concept
2. Try implementing yourself
3. Compare with AI suggestion
4. Ask about differences
```

<v-click>

<div class="mt-4 text-gray-400">
Good for: Building understanding, skill development
</div>

</v-click>

<!--
Learning mode pattern.
-->

---

# Tools Evolve Fast

**What changes**:
- Specific tools and features
- Pricing and availability
- Capabilities and limits

<v-click>

**What stays the same**:
- Need to verify AI output
- Security considerations
- Value of understanding code
- Importance of clear communication

</v-click>

<!--
Tool evolution constants.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Tool categories | Inline, chat, agentic IDE, CLI — different strengths |
| Choose by task | Learning → chat; typing → inline; complex → agentic |
| Security scales | More power = more caution needed |
| Combine tools | No single tool does everything best |
| Principles persist | Verification and understanding transcend tools |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. What's your current AI tool setup? After this module, would you change anything?

2. "More power = more caution needed." How do you balance capability with risk?

3. As tools evolve rapidly, what strategies help you stay effective without constantly chasing new features?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 12 Complete

You now understand the AI coding tool landscape.

<div class="mt-8 text-xl text-gray-400">
Next: Module 13 — The Human-AI Partnership
</div>

<div class="mt-8">
  <a href="./13/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 13 →
  </a>
</div>

<!--
Tool landscape understood.
Module 13 covers vibe engineering in depth.
-->
