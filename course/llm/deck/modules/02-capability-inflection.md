---
theme: default
title: "Module 02: The Capability Inflection Point"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 02: The Capability Inflection Point
drawings:
  persist: false
transition: slide-left
---

# Module 02

## The Capability Inflection Point

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
What changed in late 2025 and why it matters.
Threshold crossing, agentic AI, calibrating expectations.

Estimated time: 20 minutes
Delivery: Day 1 of bootcamp

Development: 5-iteration dual-persona process (Elena Vasquez + Willisons)
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The future is already here — it's just not evenly distributed."
</div>

<div class="mt-4 text-gray-500">
— William Gibson
</div>

<!--
The tools you're learning are the current frontier.
-->

---

# Why This Module Exists

If you'd taken this course in early 2024, we'd teach you to use AI as sophisticated autocomplete.

<v-click>

**That advice is now outdated.**

</v-click>

<v-click>

Something changed in late 2025. Not just "models got better" — they crossed **thresholds** that enable fundamentally different ways of working.

</v-click>

<!--
Setting up the "inflection point" frame.
-->

---

# The November-December 2025 Shift

Two major releases marked the inflection point:

<v-clicks>

**Claude Opus 4.5** (Anthropic, November 2025)

**GPT-5.2** (OpenAI, December 2025)

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
These weren't just version bumps. They represented capability thresholds being crossed.
</div>

</v-click>

<!--
The specific moment.
-->

---

# What Actually Changed

| Capability | Before Late 2025 | After Late 2025 |
|------------|------------------|-----------------|
| **Context coherence** | Degraded after ~30K tokens | Maintains across 200K+ |
| **Multi-step reasoning** | Failed on 5+ step problems | Handles 10-20 steps reliably |
| **Tool use** | Unreliable, hand-holding needed | Autonomous execution |
| **Code generation** | Single files, simple functions | Multi-file systems |
| **Self-correction** | Rare, often worse | Identifies and fixes errors |

<!--
The before/after contrast.
-->

---
layout: section
---

# The Threshold Concept

Why "inflection point" not just "improvement"

---

# Incremental vs. Threshold

**Incremental improvement**: A car that goes 5% faster is still a car. You use it the same way.

<v-click>

**Threshold crossing**: A car that can now **fly** isn't just faster — it changes what's possible. You plan trips differently.

</v-click>

<!--
The core conceptual distinction.
-->

---

# The Late 2025 Threshold

**Before**: AI could help you write a function. You had to architect, integrate, test.

<v-click>

**After**: AI can build and test a feature while you specify requirements. You focus on **what** to build, not **how** to build every piece.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
This isn't about AI replacing humans — it's about AI handling more of the <strong>mechanical</strong> work so humans can focus on <strong>judgment</strong> work.
</div>

</v-click>

<!--
Execution vs judgment frame.
-->

---
layout: section
---

# Five Key Capabilities

What crossed the threshold

---

# 1. Extended Coherent Context

**What it means**: The model can "hold in mind" an entire codebase without losing track.

<v-click>

**Before**: 50K tokens of context, middle ignored. Long conversations drifted.

</v-click>

<v-click>

**After**: 200K tokens actually works. Information from early in context used appropriately.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
<strong>Impact:</strong> Paste an entire codebase and ask questions. Day-long sessions without starting over.
</div>

</v-click>

<!--
Context coherence capability.
-->

---

# 2. Reliable Multi-Step Reasoning

**What it means**: Complex problems requiring many sequential steps.

<v-click>

**Before**: 7-step problem → fail at step 4 or 5. Skip steps, lose track.

</v-click>

<v-click>

**After**: 10-20 step chains handled reliably. Maintains goal orientation.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
<strong>Impact:</strong> Complex debugging, architectural planning, multi-stage transformations.
</div>

</v-click>

<!--
Multi-step reasoning capability.
-->

---

# 3. Autonomous Tool Use

**What it means**: Using tools (files, APIs, terminals) reliably without human intervention.

<v-click>

**Before**: Fragile. Called tools incorrectly, got stuck in loops. Required supervision.

</v-click>

<v-click>

**After**: Tools work. Reads files, executes code, checks results, iterates — autonomously.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
<strong>Impact:</strong> This enables <strong>agents</strong> — AI that doesn't just answer questions but performs tasks.
</div>

</v-click>

<!--
Tool use capability - key to agentic.
-->

---

# 4. Complex Code Generation

**What it means**: Entire systems with multiple interacting components.

<v-click>

**Before**: Single function, maybe a class. Multi-file coordination unreliable.

</v-click>

<v-click>

**After**: Multi-file projects with consistent architecture. Understands how pieces fit together.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
<strong>Extreme example:</strong> Cursor's agent swarm built a 1M+ line browser as a capability demonstration.
</div>

</v-click>

<!--
Complex code capability.
Demo caveat included.
-->

---

# 5. Self-Correction

**What it means**: Recognizes errors and fixes without human intervention.

<v-click>

**Before**: Pointing out mistakes often made things worse. Defend error or make new one.

</v-click>

<v-click>

**After**: Tests own output, recognizes failures, iterates toward working solutions.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
<strong>Impact:</strong> Set on a task and trust it to work through initial failures.
</div>

</v-click>

<!--
Self-correction capability.
-->

---
layout: section
---

# What This Enables

Agentic AI

---

# What "Agentic" Means

An **agent** is AI that:

<v-clicks>

- Takes a **goal**, not just a prompt
- **Plans** steps to achieve the goal
- **Executes** those steps using tools
- **Monitors** results and adjusts
- **Continues** until goal achieved (or determines it can't be)

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Different from chat-style: prompt → response → prompt again.
</div>

</v-click>

<!--
Agent definition.
-->

---

# The Agent Loop

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Goal: "Add user authentication to this app"      │
│                        │                            │
│                        ▼                            │
│   ┌─────────────────────────────────────────┐      │
│   │ PLAN: Identify what exists, design      │      │
│   │       approach, list steps              │      │
│   └─────────────────────────────────────────┘      │
│                        │                            │
│                        ▼                            │
│   ┌─────────────────────────────────────────┐      │
│   │ EXECUTE: Read files, write code,        │      │
│   │          run tests, check results       │      │
│   └─────────────────────────────────────────┘      │
│                        │                            │
│              ┌─────────┴─────────┐                 │
│              ▼                   ▼                  │
│         [Success]            [Failure]             │
│              │                   │                  │
│              ▼                   ▼                  │
│          Complete           Diagnose & Retry       │
└─────────────────────────────────────────────────────┘
```

<!--
Visual of the agent loop.
-->

---

# Tools That Use This

<v-clicks>

**Claude Code**: CLI agent that reads codebase, makes changes, runs tests

**Cursor Agent**: IDE-integrated agent implementing features across files

**GitHub Copilot Workspace**: Agent for planning and implementing issues

**Claude Cowork** (2026): Agent for general office tasks

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
These tools are practical <strong>because</strong> the underlying models crossed the capability thresholds.
</div>

</v-click>

<!--
Real tools using agentic approach.
-->

---

# The Mindset Shift

<div class="text-2xl text-center mt-8">

Before: **Give prompts, get responses**

</div>

<v-click>

<div class="text-2xl text-center mt-8 text-green-400">

After: **Give goals, AI handles execution**

</div>

</v-click>

<!--
The key mindset shift for students.
-->

---
layout: section
---

# Calibrating Expectations

What's realistic vs. unreliable

---

# What's Now Realistic

<v-clicks>

✓ "Build a REST API with these endpoints and tests"

✓ "Refactor this module, updating all call sites"

✓ "Debug why this test is failing and fix it"

✓ "Add this feature, following existing conventions"

✓ "Review this PR and identify potential issues"

</v-clicks>

<!--
Realistic expectations for agents.
-->

---

# What's Still Unreliable

<v-clicks>

✗ "Build me a startup" (too vague, requires judgment)

✗ "Make this code perfect" (no clear success criteria)

✗ "Figure out what users want" (requires real-world investigation)

✗ Tasks requiring private/recent information

✗ Tasks where 95% right isn't good enough (security, legal, medical)

</v-clicks>

<!--
What AI still can't do well.
-->

---

# The Key Insight

<v-click>

The inflection point didn't make AI **intelligent**.

</v-click>

<v-click>

It made AI **reliable enough to be useful for complex tasks**.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
No understanding, no judgment, no accountability. But for tasks that are <strong>well-specified</strong>, <strong>decomposable</strong>, and <strong>verifiable</strong> — current AI handles them with minimal supervision.
</div>

</v-click>

<!--
The nuanced takeaway.
-->

---
layout: section
---

# What Didn't Change

Staying grounded

---

# Costs Increased Too

<v-clicks>

**Higher API costs**: Most capable models cost more per token

**More compute**: Agentic tasks running for hours use many tokens

**Subscription tiers**: Advanced features require paid plans

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Powerful doesn't mean cheap.
</div>

</v-click>

<!--
Economic reality.
-->

---

# Fundamental Limitations Remain

<v-clicks>

**Hallucinations**: Still confidently state falsehoods. Verification essential.

**Knowledge cutoffs**: Don't know recent events unless told.

**No real understanding**: Still pattern matching, not comprehension.

**Brittleness**: Edge cases and unusual situations still cause failures.

**Security risks**: Prompt injection unsolved (Module 10).

</v-clicks>

<!--
What's still true.
-->

---

# Human Judgment Still Required

The models got better at **execution**, not **judgment**.

<v-click>

You still need to:

- Decide what to build
- Evaluate whether output is correct
- Make ethical and strategic choices
- Verify security implications
- **Take responsibility for the result**

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
This is what Simon Willison calls <strong>"vibe engineering"</strong> — the professional approach to AI collaboration. More in Module 04.
</div>

</v-click>

<!--
Execution vs judgment frame.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Threshold vs. incremental | Late 2025 enables *different* workflows, not just *faster* |
| Extended context | Work with entire codebases, not snippets |
| Reliable tool use | Agents are now practical |
| Agentic AI | Give goals, not prompts |
| Limitations persist | Hallucinations, judgment, security — still your job |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. The inflection point made certain tasks dramatically easier. What tasks in your own experience might now be approachable that weren't before?

2. "Reliable enough to be useful" is different from "reliable." When does 95% reliability matter, and when is it insufficient?

3. The 1M-line browser was built by AI agents. What do you think human engineers contributed that the AI couldn't provide?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 02 Complete

You understand what changed and what's now possible.

<div class="mt-8 text-xl text-gray-400">
Next: Module 03 — Capabilities & Limitations
</div>

<div class="mt-8">
  <a href="./03/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 03 →
  </a>
</div>

<!--
Inflection point understood.
Module 03 details specific capabilities and limits.
-->
