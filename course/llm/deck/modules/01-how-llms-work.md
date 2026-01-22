---
theme: default
title: "Module 01: How LLMs Work (Conceptually)"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 01: How LLMs Work (Conceptually)
drawings:
  persist: false
transition: slide-left
---

# Module 01

## How LLMs Work (Conceptually)

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Practical mental models, not math.
Tokens, context, temperature, generation.

Estimated time: 30 minutes
Delivery: Day 1 of bootcamp

Development: 5-iteration dual-persona process (Elena Vasquez + Willisons)
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"All models are wrong, but some are useful."
</div>

<div class="mt-4 text-gray-500">
— George Box
</div>

<v-click>

<div class="mt-8 text-gray-400">
These mental models are simplified. They're still useful for working effectively.
</div>

</v-click>

<!--
Setting expectations: useful simplifications, not deep CS.
-->

---

# Why This Matters

You don't need to understand internal combustion to drive a car.

<v-click>

But knowing that cars need fuel, have speed limits, and handle differently on wet roads makes you a **better driver**.

</v-click>

<v-click>

These concepts help you:

- Diagnose why the model "forgot" something
- Understand why longer prompts sometimes work worse
- Control how creative vs. predictable the output is
- Recognize fundamental limits vs. fixable problems

</v-click>

<!--
Practical frame for why mechanism matters.
-->

---
layout: section
---

# Concept 1: Tokens

What the model actually "sees"

---

# What Are Tokens?

LLMs don't read characters or words. They read **tokens** — chunks of text the model treats as single units.

<v-clicks>

- Whole word: `"hello"` → 1 token
- Parts of word: `"understanding"` → `"under"` + `"standing"` → 2 tokens
- Single character: `"?"` → 1 token
- Multiple characters: `"..."` → 1 token

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
The exact splitting depends on the model's <strong>tokenizer</strong>.
</div>

</v-click>

<!--
Tokens are the atomic unit of LLM processing.
-->

---

# Why Tokens Matter

<v-clicks>

**1. Pricing**: API costs are measured in tokens. More tokens = higher cost.

**2. Context limits**: Models have maximum token limits. Your input AND output must fit.

**3. Efficiency**: Common words use fewer tokens than rare words. Code often uses more tokens than prose.

</v-clicks>

<!--
Three practical implications.
-->

---

# Rough Token Estimates

For English text:

<v-clicks>

- **1 token ≈ 4 characters** (including spaces)
- **1 token ≈ 0.75 words**
- **100 tokens ≈ 75 words**

</v-clicks>

<v-click>

So a 1,000-word document is roughly **1,300 tokens**.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
<strong>Code is less predictable</strong> — variable names, syntax, and indentation all affect token count.
</div>

</v-click>

<!--
Practical estimation rules.
-->

---
layout: section
---

# Concept 2: Context Window

The model's "working memory"

---

# What Is the Context Window?

The **context window** is everything the model can "see" during a conversation.

<v-clicks>

This includes:
- System prompt (hidden instructions)
- Conversation history (all previous messages)
- Current prompt (what you just asked)
- Response being generated

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Everything must fit within the token limit.
</div>

</v-click>

<!--
Context window = working memory.
-->

---

# Modern Context Sizes

| Model (Late 2025) | Context Window |
|-------------------|----------------|
| Claude Opus 4.5 | 200,000 tokens |
| GPT-5.2 | 256,000 tokens |
| Gemini 3 Pro | 1,000,000 tokens |

<v-click>

200,000 tokens ≈ **300-page book**

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Large — but not infinite.
</div>

</v-click>

<!--
Current state of the art context sizes.
-->

---

# The Context Window Visualized

```
┌─────────────────────────────────────────────────────────────┐
│                     CONTEXT WINDOW                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ System Prompt (hidden instructions)                  │   │
│  │ [tokens...]                                          │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Conversation History                                 │   │
│  │ User: [tokens...] Assistant: [tokens...]             │   │
│  │ User: [tokens...] Assistant: [tokens...]             │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Current Turn                                         │   │
│  │ User: [tokens...]                                    │   │
│  │ Assistant: [generating...]                           │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

<!--
Visual representation of context structure.
-->

---

# What Happens at the Limit?

When the conversation exceeds the context window:

<v-clicks>

- **Truncation**: Older messages get dropped (you lose history)
- **Summarization**: System summarizes old content (you lose detail)
- **Error**: System refuses to continue (must start fresh)

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
<strong>Practical impact:</strong> The model can "forget" things you told it earlier. This isn't a bug — it's a fundamental limit.
</div>

</v-click>

<!--
Context limits explain "forgetting."
-->

---

# The "Lost in the Middle" Problem

Even within the context window, models don't treat all content equally.

<v-click>

Content at the **beginning and end** gets more "attention" than content in the **middle**.

</v-click>

<v-click>

```
┌─────────────────────────────────────────────────────┐
│  Beginning     ←── High attention                   │
│  ...                                                │
│  Middle        ←── Lower attention (lost!)          │
│  ...                                                │
│  End           ←── High attention                   │
└─────────────────────────────────────────────────────┘
```

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
<strong>Practical tip:</strong> Put important information at the beginning or end of prompts, not the middle.
</div>

</v-click>

<!--
Lost in the middle is still relevant at 200k+.
Research confirmed this in late 2025.
-->

---
layout: section
---

# Concept 3: Temperature

Controlling randomness

---

# What Is Temperature?

**Temperature** controls how random or deterministic the model's output is.

<v-click>

Remember: LLMs predict the next token by calculating probabilities.

Temperature affects how those probabilities translate to choices.

</v-click>

<!--
Temperature = randomness dial.
-->

---

# The Dice Roll Analogy

Imagine the model has a **weighted die** for each token position.

<v-clicks>

**Temperature 0**: Always pick the heaviest side (most probable token).

**Temperature 0.5**: Die is somewhat fair — less probable tokens have some chance.

**Temperature 1.0**: Die is much fairer — surprises happen.

</v-clicks>

<!--
Weighted dice makes temperature intuitive.
-->

---

# Temperature in Action

**Temperature 0**: "The capital of France is **Paris**"
- Always Paris. Every time. Guaranteed.

<v-click>

**Temperature 1.0**: "The capital of France is **[?]**"
- Usually Paris
- Sometimes "a beautiful city"
- Occasionally "Lyon" (wrong but plausible)
- Rarely something weird

</v-click>

<!--
Concrete example of temperature effect.
-->

---

# The Temperature Scale

| Temperature | Behavior | Use Case |
|-------------|----------|----------|
| 0.0 | Always highest-probability | Code, facts, consistency |
| 0.3-0.5 | Slight variation | Balanced writing |
| 0.7-0.9 | More creative | Brainstorming |
| 1.0+ | Highly random | Experimental |

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
<strong>Key insight:</strong> Temperature doesn't make the model "smarter" — it makes it more willing to take risks.
</div>

</v-click>

<!--
Temperature settings table.
-->

---

# When to Use Low vs. High

<div class="grid grid-cols-2 gap-8">

<div>

**Low (0.0-0.3)**

- Consistent output
- Code generation
- Factual accuracy
- Structured tasks

</div>

<div>

**High (0.7-1.0)**

- Brainstorming
- Creative writing
- Exploring options
- Want surprises

</div>

</div>

<v-click>

<div class="mt-4 text-gray-400">
Note: Web interfaces (Claude, ChatGPT) don't expose temperature directly — they choose appropriate settings automatically.
</div>

</v-click>

<!--
Practical guidance on temperature.
-->

---
layout: section
---

# Concept 4: The Generation Loop

One token at a time

---

# How Responses Are Built

LLMs don't generate entire responses at once.

<v-click>

They generate **one token at a time**, in a loop:

```
1. Take all input tokens (prompt + any previous output)
2. Predict the next token
3. Append that token to the output
4. Repeat until done
```

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
This is why you see responses "streaming" in — each token appears as it's generated.
</div>

</v-click>

<!--
Token-by-token generation.
-->

---

# Writing Without Erasing

Imagine writing an essay where you can **never use backspace**.

<v-clicks>

You write one word at a time, left to right.

Whatever you write stays.

You can add corrections later ("I meant X, not Y"), but you can't undo.

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
This is how LLMs generate text. Each token is committed immediately.
</div>

</v-click>

<!--
Writing without erasing analogy.
-->

---

# Early Mistakes Compound

<v-click>

If the model generates a **wrong token early**, all subsequent tokens are predicted based on that mistake.

</v-click>

<v-click>

The error **propagates**.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
<strong>Practical tip:</strong> If a response starts going wrong, it's often better to <strong>stop and regenerate</strong> rather than hoping the model will "recover."
</div>

</v-click>

<!--
Critical insight about compound errors.
-->

---

# Why Long Outputs Are Risky

<v-clicks>

More tokens = more chances for drift or error.

The model can't "go back" to fix earlier mistakes.

Long outputs accumulate small deviations.

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This is why breaking complex tasks into smaller pieces often works better.
</div>

</v-click>

<!--
Length risk.
-->

---
layout: section
---

# Concept 5: System vs. User Prompts

The two-layer structure

---

# Two Types of Prompts

**System Prompt**: Background instructions that set context, personality, constraints. Usually hidden. Persists across conversation.

<v-click>

*Example: "You are a helpful coding assistant. Always explain your code."*

</v-click>

<v-click>

**User Prompt**: What you actually type. Changes each turn.

*Example: "Write a function to sort a list."*

</v-click>

<!--
System vs user prompt distinction.
-->

---

# Why This Matters

<v-clicks>

**System prompts shape behavior**: Same user prompt, different responses depending on system prompt.

**You may not see it**: Claude and ChatGPT have system prompts you don't see.

**System prompts use tokens**: They count toward context, reducing effective space for your content.

</v-clicks>

<!--
Practical implications of hidden system prompts.
-->

---
layout: section
---

# Troubleshooting

When things go wrong

---

# Diagnosing Common Issues

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Model "forgot" earlier info | Context limit | Start fresh, summarize earlier content |
| Ignores my instructions | Instructions in middle | Move to beginning or end |
| Output repetitive/boring | Temperature too low | Increase temperature |
| Output nonsensical | Temperature too high | Decrease temperature |
| Different answers each time | Temperature > 0 | Set to 0 for consistency |
| Response cuts off | Output token limit | Ask to continue |
| Code has subtle errors | Compound errors | Review carefully, regenerate |

<!--
Troubleshooting table for common issues.
-->

---

# The Debugging Questions

When something isn't working, ask:

<v-clicks>

- **Did I hit the context limit?** (Model forgot earlier info)
- **Is important info buried in the middle?** (Lost in the middle)
- **Is temperature wrong for this task?** (Too random or too rigid)
- **Did an early mistake compound?** (Generation loop issue)

</v-clicks>

<!--
Diagnostic framework.
-->

---

# Key Insights

| Concept | Practical Implication |
|---------|----------------------|
| Tokens | Structure affects cost; code costs more |
| Context window | Long conversations hit limits; middle gets less attention |
| Temperature | Low = accuracy, high = creativity; affects randomness not quality |
| Generation loop | One token at a time; early mistakes compound |
| System prompts | Hidden instructions shape behavior; use tokens |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. You're working on a coding project and notice the model's suggestions are getting worse over time. What might be happening?

2. A friend says "I always use temperature 1.0 because I want the smartest output." What's wrong with this reasoning?

3. Why might a model perform worse on a 50,000-token prompt than a 5,000-token prompt, even though both fit in the context window?

</v-clicks>

<!--
Reflection questions.
Q1: Context limit, compound errors
Q2: Temperature affects randomness, not intelligence
Q3: Lost in the middle, attention diffusion
-->

---
layout: center
class: text-center
---

# Module 01 Complete

You now have the mental models for understanding how LLMs work.

<div class="mt-8 text-xl text-gray-400">
Next: Module 02 — The Capability Inflection Point
</div>

<div class="mt-8">
  <a href="./02/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 02 →
  </a>
</div>

<!--
Mechanism established.
Module 02 explains what changed recently.
-->
