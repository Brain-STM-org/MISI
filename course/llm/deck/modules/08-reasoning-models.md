---
theme: default
title: "Module 08: Reasoning Models"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 08: Reasoning Models
drawings:
  persist: false
transition: slide-left
---

# Module 08

## Reasoning Models

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
When and how to use extended thinking.
Chain-of-thought, reasoning modes, verification.

Estimated time: 25 minutes
Delivery: Day 2 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Scaffolded reasoning patterns, when to use vs. avoid
- Willisons: Extended thinking modes (Claude, o1/o3), practical tradeoffs
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Show your work."
</div>

<div class="mt-4 text-gray-500">
— Every math teacher ever
</div>

<!--
The same principle applies to AI reasoning.
-->

---

# The Reasoning Challenge

Standard LLMs generate text token-by-token, predicting what comes next.

<v-click>

This works brilliantly for many tasks — but can fail on complex reasoning.

</v-click>

<v-click>

**Why?** Limited "thinking ahead" for problems requiring:

</v-click>

<v-clicks>

- Multiple logical steps
- Considering and rejecting alternatives
- Checking work along the way
- Planning before executing

</v-clicks>

<!--
Why reasoning is hard for standard LLMs.
-->

---

# The Solution

**Give AI "time to think."**

<v-clicks>

Three approaches:

1. **Chain-of-thought prompting** — You trigger step-by-step reasoning
2. **Extended thinking modes** — Built-in model capabilities
3. **Multi-turn reasoning** — Break it up yourself

</v-clicks>

<!--
Three reasoning approaches.
-->

---
layout: section
---

# Approach 1: Chain-of-Thought Prompting

You trigger it with your prompt

---

# Chain-of-Thought Basics

Ask the model to reason step by step:

**Basic**:
> "Think step by step."

<v-click>

**Structured**:
> "Before answering, work through this systematically:
> 1. Identify what we know
> 2. Identify what we need to find
> 3. Consider approaches
> 4. Execute the best approach
> 5. Verify the answer"

</v-click>

<!--
Chain-of-thought patterns.
-->

---

# Domain-Specific Chain-of-Thought

> "Debug this code by:
> 1. First, identify what the code is supposed to do
> 2. Trace through with example input
> 3. Find where behavior diverges from expectation
> 4. Propose and verify a fix"

<v-click>

<div class="mt-4 text-gray-400">
Tailored reasoning steps for the specific task type.
</div>

</v-click>

<!--
Domain-specific CoT.
-->

---

# When Chain-of-Thought Helps

| Task Type | Without CoT | With CoT |
|-----------|-------------|----------|
| Simple arithmetic | Often correct | Still correct |
| Multi-step word problems | Often wrong | Usually correct |
| Logic puzzles | Unreliable | More reliable |
| Complex debugging | Misses steps | More thorough |
| Planning tasks | Jumps to conclusions | More considered |

<!--
CoT impact by task type.
-->

---

# Example: Math Problem

**Without chain-of-thought**:
> "A store has 3 shirts at $15 each and 2 pants at $25 each. There's a 10% discount. What's the final price?"

AI might jump to an answer and get it wrong.

<v-click>

**With chain-of-thought**:
> "...Show your calculation step by step."

```
Step 1: Shirt total: 3 × $15 = $45
Step 2: Pants total: 2 × $25 = $50
Step 3: Subtotal: $45 + $50 = $95
Step 4: Discount: $95 × 0.10 = $9.50
Step 5: Final: $95 - $9.50 = $85.50
```

</v-click>

<v-click>

Now you can verify each step.

</v-click>

<!--
Math problem example.
-->

---
layout: section
---

# Approach 2: Extended Thinking Models

Built-in reasoning capabilities

---

# What Extended Thinking Means

Some models have explicit "thinking" modes:

<v-clicks>

- **Claude**: Extended thinking mode
- **OpenAI o1/o3**: Reasoning-focused models
- **Other providers**: Similar features emerging

</v-clicks>

<v-click>

These models automatically "think longer" on complex problems, spending more compute on reasoning.

</v-click>

<!--
Extended thinking models.
-->

---

# How They Work

Extended thinking models:

<v-clicks>

- Spend more "compute" on reasoning
- Explore multiple approaches internally
- Check their own work
- Handle more complex problems

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Think of it as the model having an internal "scratch pad" before answering.
</div>

</v-click>

<!--
How extended thinking works.
-->

---

# Visible vs. Hidden Thinking

Some models show their reasoning ("thinking out loud"). Others think internally.

<v-click>

**Visible thinking advantages**:
- You can verify the reasoning
- You can catch errors in logic
- You learn from the process

</v-click>

<v-click>

**Hidden thinking advantages**:
- Cleaner output
- Faster to read
- Less token usage in some contexts

</v-click>

<!--
Visible vs hidden thinking.
-->

---

# When to Use Extended Thinking

**Use for**:

<v-clicks>

- Complex coding problems
- Architectural decisions
- Multi-step analysis
- Problems where errors are costly
- When you need to verify reasoning

</v-clicks>

<!--
When to use extended thinking.
-->

---

# When NOT to Use Extended Thinking

**Skip it for**:

<v-clicks>

- Simple, quick tasks
- Creative writing (thinking doesn't help creativity)
- When speed matters more than depth
- Tasks with obvious solutions

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Extended thinking has overhead. Don't use it when you don't need it.
</div>

</v-click>

<!--
When to skip extended thinking.
-->

---
layout: section
---

# Approach 3: Multi-Turn Reasoning

You control the steps

---

# Breaking It Up Yourself

Instead of one prompt, use multiple turns:

```
Turn 1: "What are the key considerations for this problem?"
Turn 2: "Given those, what approaches could work?"
Turn 3: "Evaluate approach A vs B"
Turn 4: "Implement the better approach"
```

<v-click>

<div class="mt-4 text-gray-400">
You explicitly control the reasoning flow.
</div>

</v-click>

<!--
Multi-turn reasoning.
-->

---
layout: section
---

# Practical Patterns

Reasoning techniques that work

---

# Pattern 1: Think Then Execute

```markdown
First, think through the design for this feature without writing code.
Consider:
- What data structures do we need?
- What's the algorithm approach?
- What edge cases exist?

Then, implement the solution.
```

<v-click>

<div class="mt-4 text-gray-400">
Separates planning from execution.
</div>

</v-click>

<!--
Think then execute pattern.
-->

---

# Pattern 2: Checkpoint Reasoning

```markdown
Solve this in stages. After each stage, verify before continuing.

Stage 1: [First part]
Verification: Is this correct so far?

Stage 2: [Second part]
Verification: Does this follow from Stage 1?

Final: [Complete solution]
```

<v-click>

<div class="mt-4 text-gray-400">
Forces verification at each step.
</div>

</v-click>

<!--
Checkpoint reasoning pattern.
-->

---

# Pattern 3: Compare and Choose

```markdown
For this problem, consider three different approaches.

For each, analyze:
- Pros
- Cons
- Complexity
- When it's best suited

Then recommend the best approach for my specific situation.
```

<v-click>

<div class="mt-4 text-gray-400">
Ensures alternatives are considered, not just the first idea.
</div>

</v-click>

<!--
Compare and choose pattern.
-->

---

# Pattern 4: Devil's Advocate

```markdown
Here's my proposed solution: [solution]

Before accepting it, argue against this solution:
- What could go wrong?
- What am I missing?
- What's a better alternative?

Then, either defend the original or propose improvements.
```

<v-click>

<div class="mt-4 text-gray-400">
Catches blind spots and weaknesses.
</div>

</v-click>

<!--
Devil's advocate pattern.
-->

---
layout: section
---

# Reasoning Limitations

What to watch for

---

# They Can Still Be Wrong

Longer thinking doesn't guarantee correctness.

<v-clicks>

The model can:
- Make errors in any step
- Have incorrect premises
- Follow valid logic from wrong assumptions

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
<strong>Always verify</strong>, especially for important decisions.
</div>

</v-click>

<!--
Reasoning can still be wrong.
-->

---

# They Can Overthink

Sometimes simple is better:

```
Task: Add two numbers
Model: "Let me consider multiple approaches. First, I could use
       direct addition. But let me also consider logarithmic
       approaches for potential numerical stability..."
```

<v-click>

<div class="mt-4 text-gray-400">
For simple tasks, reasoning overhead is wasteful.
</div>

</v-click>

<!--
Overthinking problem.
-->

---

# They Can Confabulate Reasoning

Models can generate convincing-sounding reasoning that's actually **post-hoc justification**, not genuine thought process.

<v-click>

The reasoning *looks* logical but may not reflect how the answer was actually generated.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Impressive reasoning doesn't mean correct reasoning.
</div>

</v-click>

<!--
Confabulated reasoning warning.
-->

---

# Decision Framework

```
Is this a simple, straightforward task?
├── Yes → Standard prompting (no special reasoning)
└── No → Continue...

Does it require multiple logical steps?
├── Yes → Use chain-of-thought prompting
└── No → Standard may suffice

Is it a complex, high-stakes decision?
├── Yes → Use extended thinking model
└── No → Chain-of-thought is probably enough

Do you need to verify the reasoning?
├── Yes → Request visible reasoning
└── No → Hidden/summarized is fine
```

<!--
Decision framework.
-->

---

# Effort vs. Benefit

| Task Complexity | Approach | Overhead |
|-----------------|----------|----------|
| Simple | Standard | None |
| Moderate | Chain-of-thought prompt | Low |
| Complex | Extended thinking | Medium |
| Critical | Extended + verification | High |

<v-click>

<div class="mt-4 text-gray-400">
Match the tool to the task.
</div>

</v-click>

<!--
Effort vs benefit.
-->

---

# Exercise: Chain-of-Thought Comparison

Try this problem both ways:

> "You have 3 boxes. Box A has 5 red balls and 3 blue balls. Box B has 2 red balls and 6 blue balls. You randomly pick one box, then randomly pick one ball. It's red. What's the probability you picked from Box A?"

1. Ask without chain-of-thought
2. Ask with "think step by step"
3. Compare answers and reasoning

<!--
Exercise: CoT comparison.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Chain-of-thought | Ask for step-by-step on complex problems |
| Extended thinking | Use dedicated modes for high-stakes decisions |
| Visible reasoning | Helps you verify; use when accuracy matters |
| Match to task | Don't over-reason simple tasks |
| Still verify | Reasoning models can still be wrong |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. When have you accepted an AI answer too quickly that turned out to be wrong? Could reasoning techniques have helped?

2. "The model can generate convincing reasoning that's actually post-hoc justification." What are the implications for trusting AI explanations?

3. For your own work, which tasks would benefit from extended reasoning? Which would be slowed down by it?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 08 Complete

You now know how and when to use reasoning capabilities.

<div class="mt-8 text-xl text-gray-400">
Next: Module 09 — Context & Memory
</div>

<div class="mt-8">
  <a href="./09/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 09 →
  </a>
</div>

<!--
Reasoning capabilities understood.
Module 09 covers managing long conversations.
-->
