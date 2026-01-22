---
theme: default
title: "Module 03: Capabilities & Limitations"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 03: Capabilities & Limitations
drawings:
  persist: false
transition: slide-left
---

# Module 03

## Capabilities & Limitations

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
When to trust, when to verify, when to skip AI.
The trust-but-verify framework.

Estimated time: 25 minutes
Delivery: Day 1 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Tier framework for categorizing tasks, practical decision-making
- Willisons: Accuracy on hallucination patterns, reasoning limits, knowledge cutoffs
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"It is not the strongest of the species that survives, nor the most intelligent, but the one most adaptable to change."
</div>

<div class="mt-4 text-gray-500">
— Often attributed to Darwin (though probably not his words — even quotes can be unreliable)
</div>

<!--
Meta-point: even authoritative-sounding quotes need verification.
-->

---

# Why This Matters

Every tool has a **sweet spot** and **failure modes**.

<v-click>

A hammer is great for nails, useless for screws, dangerous near glass.

</v-click>

<v-click>

This module is that guidance for AI:
- When to lean heavily on AI
- When to use cautiously
- When to skip it entirely

</v-click>

<!--
Practical decision-making framework.
-->

---
layout: section
---

# The Capability Spectrum

Four tiers of AI suitability

---

# Tier 1: AI Excels

Trust with light verification.

| Task Type | Examples |
|-----------|----------|
| **Text transformation** | Summarize, translate, reformat |
| **Bounded code generation** | Single functions, syntax conversion |
| **Information synthesis** | Combine sources, explain concepts |
| **Creative drafting** | Brainstorm, first drafts |
| **Format conversion** | JSON to YAML, data restructuring |

<v-click>

<div class="mt-4 text-gray-400">
<strong>Verification:</strong> Light — check output matches intent, spot-check for errors.
</div>

</v-click>

<!--
Tier 1: AI's sweet spot.
-->

---

# Tier 2: AI Helps

Trust with careful verification.

| Task Type | Why Caution Needed |
|-----------|-------------------|
| **Complex code** | Subtle bugs, integration issues |
| **Factual research** | Hallucination risk |
| **Analysis** | May miss context, edge cases |
| **Planning** | Lacks real-world constraints |

<v-click>

<div class="mt-4 text-gray-400">
<strong>Verification:</strong> Significant — verify facts, test code, check for gaps.
</div>

</v-click>

<!--
Tier 2: Useful but verify carefully.
-->

---

# Tier 3: AI Assists

Use as input, not output.

| Task Type | Why Heavy Caution |
|-----------|-------------------|
| **Decision-making** | AI lacks your context |
| **Novel problems** | Pattern-matching fails |
| **High-stakes accuracy** | Errors have consequences |
| **Current events** | Knowledge cutoff |

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
<strong>Use AI for:</strong> Options, possibilities, starting points<br>
<strong>Don't use for:</strong> Final decisions, authoritative answers
</div>

</v-click>

<!--
Tier 3: AI generates options, you decide.
-->

---

# Tier 4: AI Unsuitable

Don't rely on it.

| Task Type | Why AI Fails |
|-----------|--------------|
| **Real-time info** | No internet access, no live data |
| **Precise calculation** | LLMs make arithmetic errors |
| **Your private data** | AI only knows what you provide |
| **Subjective judgment** | Requires human values, context |

<v-click>

<div class="mt-4 text-gray-400">
For these tasks, use appropriate tools — calculators, databases, your own judgment.
</div>

</v-click>

<!--
Tier 4: Wrong tool for the job.
-->

---
layout: section
---

# Deep Dive: Hallucinations

When AI confidently lies

---

# What Are Hallucinations?

**Hallucination**: AI generates confident, plausible-sounding content that is factually incorrect.

<v-click>

This isn't "lying" — it's pattern completion without grounding.

</v-click>

<v-click>

The model generates text that *looks like* correct text, because correct text is what it was trained on.

</v-click>

<!--
Hallucination definition and mechanism.
-->

---

# Why Hallucinations Happen

If the answer is **in training data** → Usually accurate

<v-click>

If the answer can be **inferred** → Often accurate

</v-click>

<v-click>

If the answer **isn't in training data** → AI still generates something that looks right

</v-click>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
The model doesn't have an "I don't know" instinct — it completes the pattern.
</div>

</v-click>

<!--
Pattern completion without grounding.
-->

---

# Common Hallucination Patterns

<v-clicks>

**Fabricated citations**: "According to Smith et al. (2021)..." — paper doesn't exist

**Invented facts**: "The population is..." — sounds right, but wrong

**Confident errors**: "Returns an integer" — actually returns string

**Plausible names**: "Dr. Eleanor Whitmore at Stanford..." — no such person

**Version confusion**: Describes features from older versions

</v-clicks>

<!--
Specific patterns to watch for.
-->

---

# Hallucination Detection

| Strategy | How It Works |
|----------|--------------|
| **Cross-reference** | Check facts against authoritative sources |
| **Check specifics** | Verify names, dates, numbers, URLs |
| **Ask for sources** | Request citations, then verify they exist |
| **Test code** | Run it; don't assume it works |
| **Be suspicious of confidence** | High confidence ≠ high accuracy |

<!--
Practical detection strategies.
-->

---
layout: section
---

# Deep Dive: Reasoning Limits

Where logic fails

---

# When Reasoning Fails

LLMs are good at *appearing* to reason. But they have systematic weaknesses:

<v-clicks>

**Multi-step logic**: Error probability compounds over steps

**Counterfactuals**: Tracking hypotheticals conflicts with training

**Constraint satisfaction**: "Fruit with 6 letters" requires simultaneous checking

**Mathematical reasoning**: Pattern-matching on math text, not calculation

</v-clicks>

<!--
Systematic reasoning weaknesses.
-->

---

# The Arithmetic Problem

LLMs struggle with arithmetic, especially:
- Large numbers
- Multi-step calculations
- Unusual formats

<v-click>

**Why?** Trained on text, not calculation. "17 × 23 = 391" appears rarely in training data.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
<strong>Rule:</strong> Never trust raw AI for arithmetic. Use a calculator — or let AI use tools to verify.
</div>

</v-click>

<!--
The arithmetic limitation.
-->

---

# Testing Reasoning Limits

```
"What's 847 × 293?"
→ Often wrong. Use a calculator.

"If all bloops are razzles, and all razzles are lazzles,
 are all bloops lazzles?"
→ Usually gets simple syllogisms right

"A bat and ball cost $1.10. The bat costs $1 more than
 the ball. How much does the ball cost?"
→ Famous trick question; AI often wrong initially
```

<!--
Examples to test reasoning.
-->

---
layout: section
---

# Deep Dive: Knowledge Cutoffs

What AI doesn't know

---

# What's a Knowledge Cutoff?

AI models are trained on data up to a certain date. They don't know what happened after.

| Model | Approximate Cutoff |
|-------|-------------------|
| Claude Opus 4.5 | ~Mid-2025 |
| GPT-5.2 | ~Late 2025 |

<v-click>

<div class="mt-4 text-gray-400">
No recent events. Outdated info on fast-moving fields. Wrong if things changed.
</div>

</v-click>

<!--
Knowledge cutoff explanation.
-->

---

# What AI Knows vs. Doesn't

| AI Knows (If in Training) | AI Doesn't Know |
|---------------------------|-----------------|
| Historical facts | Recent news |
| Established science | Latest research |
| Popular libraries (older versions) | Your private codebase |
| Common patterns | Your specific context |
| Published docs | Internal company docs |

<!--
Knowledge scope.
-->

---
layout: section
---

# The Framework

Trust But Verify

---

# Trust But Verify

```
┌─────────────────────────────────────────────────────────────┐
│               TRUST BUT VERIFY FRAMEWORK                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. ASSESS THE TASK                                         │
│     └─ What tier is this? (Excels / Helps / Assists / No)   │
│                                                             │
│  2. GENERATE WITH AI                                        │
│     └─ Use AI for drafts, options, starting points          │
│                                                             │
│  3. VERIFY APPROPRIATELY                                    │
│     └─ Light check? Deep review? Independent verification?  │
│                                                             │
│  4. TAKE RESPONSIBILITY                                     │
│     └─ You own the output. AI doesn't.                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

<!--
The decision framework.
-->

---

# Verification by Task Type

| Task | Minimum Verification |
|------|---------------------|
| Creative writing | Read it; does it match intent? |
| Code generation | Run it; test edge cases |
| Factual claims | Check against authoritative source |
| Technical docs | Verify with official documentation |
| Calculations | Redo with a calculator |
| Current info | Check recent sources |

<!--
Verification requirements.
-->

---

# Quick Reference Card

<div class="grid grid-cols-2 gap-8 text-sm">

<div>

**Trust AI More:**
- Text transformation
- Well-defined code generation
- Brainstorming and drafting
- Explaining established concepts

</div>

<div>

**Verify Carefully:**
- Factual claims (names, dates, numbers)
- Complex code
- Analysis and planning
- Anything you'll deploy

</div>

</div>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded text-sm">
<strong>Skip AI:</strong> Real-time info, precise calculations, high-stakes decisions, tasks needing your specific context
</div>

</v-click>

<!--
Quick reference summary.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Capability tiers | Know when to trust vs. verify vs. avoid |
| Hallucinations | Confidence ≠ accuracy; verify independently |
| Reasoning limits | Don't trust arithmetic or long logic chains |
| Knowledge cutoffs | AI doesn't know recent events |
| Trust but verify | Generate with AI; you own verification |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Think of a task you've used AI for. Which tier does it fall into? Did you verify appropriately?

2. Why do models always generate an answer, even when they don't know? What would be the trade-offs of saying "I don't know" more?

3. "Trust but verify" takes time. When is verification worth it, and when would you be better off doing it yourself?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 03 Complete

You now have a map of when AI helps and when it fails.

<div class="mt-8 text-xl text-gray-400">
Next: Module 04 — Your First Conversation
</div>

<div class="mt-8">
  <a href="./04/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 04 →
  </a>
</div>

<!--
Capabilities mapped.
Module 04 puts it into practice.
-->
