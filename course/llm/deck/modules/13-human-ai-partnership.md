---
theme: default
title: "Module 13: The Human-AI Partnership"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 13: The Human-AI Partnership
drawings:
  persist: false
transition: slide-left
---

# Module 13

## The Human-AI Partnership

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Vibe engineering in depth.
Accountability, habits, when to override AI.

Estimated time: 30 minutes
Delivery: Day 2 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Professional standards, accountability framework, habit building
- Willisons: Override patterns, communication techniques, partnership model
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"You can mass-produce code now. You cannot mass-produce good judgment."
</div>

<div class="mt-4 text-gray-500">
— Anonymous
</div>

<!--
Judgment remains the human contribution.
-->

---

# Vibe Engineering Revisited

From Module 04:

| Approach | Characteristics | Outcome |
|----------|-----------------|---------|
| **Vibe Coding** | Accept without verification | Fast but fragile |
| **Vibe Engineering** | Use with professional rigor | Sustainable and responsible |

<v-click>

<div class="mt-4 text-gray-400">
This module goes deeper. What does vibe engineering actually look like?
</div>

</v-click>

<!--
Revisiting vibe engineering.
-->

---
layout: section
---

# Professional Standards

What doesn't change

---

# Your Responsibilities Remain

Using AI doesn't change fundamental professional responsibilities:

| Responsibility | Still Yours |
|----------------|-------------|
| **Correctness** | Code must work as intended |
| **Security** | No vulnerabilities introduced |
| **Maintainability** | Others can understand and modify |
| **Performance** | Meets requirements |
| **Documentation** | Appropriate for the codebase |

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
AI is a tool. You're still the engineer.
</div>

</v-click>

<!--
Professional responsibilities don't change.
-->

---

# What Adapts

| Practice | Traditional | With AI |
|----------|-------------|---------|
| Code review | Review human code | Review human + AI code |
| Testing | Test what you wrote | Test what you wrote + accepted |
| Documentation | Document your decisions | Document decisions + AI's role |
| Learning | Learn by doing | Learn by doing + evaluating AI |

<v-click>

<div class="mt-4 text-gray-400">
The bar doesn't lower. The workflow adapts.
</div>

</v-click>

<!--
Adapted practices.
-->

---
layout: section
---

# Accountability

Who's responsible?

---

# The Accountability Question

When AI writes buggy code that you ship, who's accountable?

<v-click>

**Answer**: You are.

</v-click>

<v-click>

This isn't philosophical — it's practical:
- AI can't be fired, sued, or held responsible
- AI doesn't have professional reputation
- AI isn't part of your accountability structure

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
<strong>Every line of code you commit is your code</strong>, regardless of origin.
</div>

</v-click>

<!--
Accountability is always yours.
-->

---

# The Test

Before committing any AI-generated code, ask:

<v-click>

> "Am I comfortable explaining this code in a code review? Could I defend why it's written this way?"

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
If no: don't commit it yet. Understand it first.
</div>

</v-click>

<!--
The accountability test.
-->

---

# Documentation Practice

When AI played a significant role:

```python
# Note: Initial implementation generated with AI assistance.
# Reviewed and tested by [your name] on [date].
# Key modifications: [what you changed and why]
```

<v-click>

<div class="mt-4 text-gray-400">
Not required everywhere — use judgment. For complex logic or unusual approaches, transparency helps future maintainers.
</div>

</v-click>

<!--
Documentation for AI-assisted code.
-->

---
layout: section
---

# When to Override AI

Knowing when AI is wrong

---

# Override: Doesn't Match Intent

AI understood something differently than you meant:

<v-click>

**You asked**: "Make this function faster"

**AI did**: Changed the algorithm but broke edge cases

**Override**: "The original edge case handling was intentional. Optimize without changing that behavior."

</v-click>

<!--
Override when intent mismatched.
-->

---

# Override: Wrong Approach

AI chose a suboptimal path:

<v-click>

**AI suggests**: Custom implementation of common pattern

**Better**: Use the established library your team already uses

**Override**: "Use the xyz library we already have as a dependency instead."

</v-click>

<!--
Override when approach is wrong.
-->

---

# Override: Violates Standards

AI doesn't know your team's conventions:

<v-click>

**AI suggests**: CamelCase variable names

**Your codebase**: snake_case everywhere

**Override**: "Follow snake_case convention for this codebase."

</v-click>

<!--
Override when violates standards.
-->

---

# Override: Security Concerns

AI may generate vulnerable patterns:

<v-click>

**AI suggests**: Interpolating user input directly into SQL

**Reality**: SQL injection vulnerability

**Override**: "Use parameterized queries instead."

</v-click>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
Security issues are always grounds for override.
</div>

</v-click>

<!--
Override for security.
-->

---

# Don't Override Just Because

Sometimes AI's approach is unfamiliar but valid:

<v-click>

**AI suggests**: Approach you haven't seen before

**Before overriding**: Research it. It might be better.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
<strong>Unfamiliar ≠ wrong.</strong>
</div>

</v-click>

<!--
Don't override unfamiliar approaches.
-->

---
layout: section
---

# Building Good Habits

Sustainable practices

---

# Habit 1: Read Before Accepting

**The temptation**: AI generated code → Tab → move on

<v-click>

**The practice**: AI generated code → read → understand → then accept or modify

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Even for simple completions, a quick read catches subtle issues.
</div>

</v-click>

<!--
Habit: read before accepting.
-->

---

# Habit 2: Test What You Accept

**The temptation**: AI says it works → assume it works

<v-click>

**The practice**: AI says it works → run the tests → verify it works

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Trust but verify. Always.
</div>

</v-click>

<!--
Habit: test what you accept.
-->

---

# Habit 3: Maintain Your Skills

**The risk**: Rely on AI so much that your skills atrophy

<v-click>

**The practice**:
- Sometimes write code without AI
- Challenge yourself to understand before asking AI
- Use AI as augmentation, not replacement

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
You should be able to code without AI. AI makes you faster, not capable.
</div>

</v-click>

<!--
Habit: maintain skills.
-->

---

# Habit 4: Stay Critical

**The temptation**: AI sounds confident → must be right

<v-click>

**The practice**: Confidence is performance. Evaluate claims independently.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
AI doesn't know when it's wrong. You must.
</div>

</v-click>

<!--
Habit: stay critical.
-->

---

# Habit 5: Learn from AI

**The opportunity**: AI shows patterns you don't know

<v-click>

**The practice**: When AI suggests something unfamiliar, learn it. Ask "why this approach?"

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
AI can be a teacher, not just a typist.
</div>

</v-click>

<!--
Habit: learn from AI.
-->

---
layout: section
---

# The Partnership Model

How it should work

---

# Good Partnership

```
You                          AI
────                         ────
Define goals                 Suggest approaches
Make decisions               Provide options
Set constraints              Work within them
Review output                Generate output
Take responsibility          Assist
Learn                        Demonstrate patterns
```

<!--
Good partnership model.
-->

---

# Bad Partnership

```
You                          AI
────                         ────
Accept everything            Generate everything
No review                    Confident errors
Blame AI                     Can't be blamed
Don't learn                  Enables avoidance
No accountability            No accountability
```

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
The difference is you, not the AI.
</div>

</v-click>

<!--
Bad partnership model.
-->

---
layout: section
---

# Communication Patterns

Working effectively with AI

---

# Pattern 1: Explicit Constraints

Don't assume AI knows your requirements:

```markdown
Write a function to parse dates.

Constraints:
- Must handle ISO 8601 format
- Must return None for invalid dates (not raise exception)
- Must handle timezone-aware and naive datetimes
- Use only standard library (no dateutil)
```

<v-click>

<div class="mt-4 text-gray-400">
Constraints prevent the "but I didn't want that" problem.
</div>

</v-click>

<!--
Explicit constraints pattern.
-->

---

# Pattern 2: Iterative Refinement

First attempt rarely perfect:

```
You: Write a user authentication function
AI: [generates code]
You: Good start. Add rate limiting for failed attempts.
AI: [adds rate limiting]
You: The lockout should be 15 minutes, not permanent.
AI: [adjusts]
```

<v-click>

<div class="mt-4 text-gray-400">
Each iteration improves the result.
</div>

</v-click>

<!--
Iterative refinement pattern.
-->

---

# Pattern 3: Explain Then Generate

For complex tasks, understanding before coding:

```
You: Before writing code, explain how you would approach
     implementing a job queue with retry logic.

AI: [explains approach]

You: That makes sense, but we need to handle poison messages
     differently. They should go to a dead letter queue.

AI: [adjusts understanding]

You: Now implement it.
```

<v-click>

<div class="mt-4 text-gray-400">
Align understanding before investing in code.
</div>

</v-click>

<!--
Explain then generate pattern.
-->

---

# Pattern 4: Review and Critique

Use AI to review its own work:

```
You: Here's the code you just wrote. What are potential
     problems or edge cases it doesn't handle?

AI: [identifies issues]

You: Fix issue #2, the others are acceptable for our use case.
```

<v-click>

<div class="mt-4 text-gray-400">
AI can often spot issues when asked directly.
</div>

</v-click>

<!--
Review and critique pattern.
-->

---

# When AI Isn't the Answer

**Don't use AI when**:
- You need to learn (struggle builds understanding)
- Novel/unprecedented problems
- High-stakes one-shot situations
- Team knowledge transfer

<v-click>

**Do use AI when**:
- You understand the problem
- Patterns exist
- Iteration is possible
- Time is valuable

</v-click>

<!--
When AI isn't the answer.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Accountability | You own all code you commit, regardless of origin |
| Professional standards | Don't lower them; adapt workflow around them |
| Override judgment | AI makes mistakes; knowing when is key |
| Good habits | Read, test, stay critical, keep learning |
| Partnership | You decide, AI assists — not the reverse |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Have you ever committed code you didn't fully understand? How did that turn out?

2. "AI makes you faster, not capable." Do you agree? What's the difference?

3. How would you explain to a non-technical person why you're responsible for AI-generated code?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 13 Complete

You understand how to work as a professional with AI.

<div class="mt-8 text-xl text-gray-400">
Next: Module 14 — Iterating with AI
</div>

<div class="mt-8">
  <a href="./14/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 14 →
  </a>
</div>

<!--
Partnership model established.
Module 14 covers iteration patterns.
-->
