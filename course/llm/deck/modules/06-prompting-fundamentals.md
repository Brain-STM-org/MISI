---
theme: default
title: "Module 06: Prompting Fundamentals"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 06: Prompting Fundamentals
drawings:
  persist: false
transition: slide-left
---

# Module 06

## Prompting Fundamentals

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
The craft of effective communication with AI.
CRAFT framework, roles, constraints, few-shot, chain-of-thought.

Estimated time: 35 minutes
Delivery: Day 1 of bootcamp

Development: 5-iteration dual-persona process
- Elena: CRAFT framework structure, scaffolding techniques, practical exercises
- Willisons: Real prompt patterns from industry, debugging strategies, advanced combinations
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The art of prompting is the art of communication — clarity, context, and constraint."
</div>

<div class="mt-4 text-gray-500">
— Dr. Elena Vasquez
</div>

<!--
Prompting as communication, not magic.
-->

---

# Building on Module 04

Module 04 introduced the conversation loop. Now we go deeper:

<v-clicks>

- **Structure**: Frameworks for organizing prompts
- **Techniques**: Specific patterns that work
- **Debugging**: Fixing prompts that don't work

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
Good prompting isn't magic — it's a <strong>learnable craft</strong>.
</div>

</v-click>

<!--
From conversation loop to prompt craft.
-->

---
layout: section
---

# The Prompt Stack

Understanding the layers

---

# How Prompts Are Layered

```
┌─────────────────────────────────────────────────────────────┐
│                      THE PROMPT STACK                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ SYSTEM PROMPT (usually hidden)                       │   │
│   │ Sets overall behavior, constraints, personality      │   │
│   └─────────────────────────────────────────────────────┘   │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ CONTEXT (you provide)                                │   │
│   │ Background info, documents, code, examples          │   │
│   └─────────────────────────────────────────────────────┘   │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ USER PROMPT (your request)                           │   │
│   │ The specific task you want done                     │   │
│   └─────────────────────────────────────────────────────┘   │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ OUTPUT — shaped by all above                        │   │
│   └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

<!--
Layers of the prompt stack.
-->

---
layout: section
---

# The CRAFT Framework

A structure for effective prompts

---

# CRAFT: Five Elements

<v-clicks>

**C**ontext — Background information the AI needs

**R**ole — Who the AI should be

**A**ction — What you want done

**F**ormat — How the output should look

**T**one — Communication style

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Not every prompt needs all five — but knowing them helps you diagnose problems.
</div>

</v-click>

<!--
The CRAFT framework.
-->

---

# CRAFT Example

<div class="text-sm">

```markdown
**Context**: I'm building a Flask web application for a small business.
The app manages customer orders. I'm using Python 3.11 and SQLAlchemy.

**Role**: You are a senior backend developer who prioritizes security
and clean architecture.

**Action**: Write a function that retrieves all orders for a given
customer, with pagination support.

**Format**:
- Include type hints
- Add a docstring with Args and Returns
- Show example usage in a comment

**Tone**: Professional, concise code with minimal comments (code
should be self-documenting).
```

</div>

<!--
CRAFT in practice.
-->

---
layout: section
---

# Technique 1: Role Assignment

Shaping expertise and approach

---

# The Role Pattern

Give the AI a persona to shape tone, expertise, and approach:

```
You are a [ROLE] with expertise in [DOMAIN].
Your goal is to [OBJECTIVE].
```

<v-click>

### Why Roles Work

Roles activate different patterns from training data. A "senior developer" produces more sophisticated patterns. A "teacher" produces more explanations.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
The AI doesn't <em>become</em> the role — it generates text that matches how that role communicates.
</div>

</v-click>

<!--
Role assignment basics.
-->

---

# Role Examples

**Technical Expert**:
> "You are a senior Python developer with 10 years of experience. Your goal is to help me write clean, well-tested code."

<v-click>

**Teacher**:
> "You are a patient programming tutor explaining concepts to a beginner. Use simple language, analogies, and step-by-step explanations."

</v-click>

<v-click>

**Critic**:
> "You are a thorough code reviewer. Your job is to find problems, not praise good code. Be direct about issues."

</v-click>

<!--
Three different roles, three different outputs.
-->

---
layout: section
---

# Technique 2: Constraints

Focusing output, preventing unwanted content

---

# Types of Constraints

<v-clicks>

**Length**: "Respond in 3 sentences or less."

**Format**: "Output only valid JSON."

**Content**: "Don't use any external libraries."

**Style**: "Use snake_case for function names."

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
The more constrained, the more predictable the output.
</div>

</v-click>

<!--
Constraint categories.
-->

---

# Negative Constraints

Sometimes it's clearer to say what you DON'T want:

<v-clicks>

> "Don't include explanations — just the code."

> "Don't use any deprecated syntax."

> "Don't assume I have admin access."

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Negative constraints prevent common unwanted patterns.
</div>

</v-click>

<!--
What NOT to do.
-->

---

# Heavily Constrained Example

```markdown
Write a Python function to validate a phone number.

Constraints:
- Use only the `re` module (no external libraries)
- Support US phone formats: (XXX) XXX-XXXX, XXX-XXX-XXXX, XXXXXXXXXX
- Return True for valid, False for invalid
- No classes, just a single function
- Include type hints
- Max 15 lines of code
- No comments needed
```

<v-click>

<div class="mt-4 text-gray-400">
Each constraint eliminates variations you don't want.
</div>

</v-click>

<!--
Multiple constraints working together.
-->

---
layout: section
---

# Technique 3: Few-Shot Prompting

Teaching by example

---

# The Few-Shot Pattern

Show examples of what you want. The AI learns the pattern and applies it:

```markdown
I want you to [TASK]. Here are examples:

Input: [example 1 input]
Output: [example 1 output]

Input: [example 2 input]
Output: [example 2 output]

Now do the same for:
Input: [actual input]
Output:
```

<!--
Few-shot pattern structure.
-->

---

# Few-Shot Example: Custom Formatting

```markdown
Convert descriptions to function names using snake_case.

Description: "calculate the total price"
Function name: calculate_total_price

Description: "check if user is admin"
Function name: check_if_user_is_admin

Description: "send email notification"
Function name: send_email_notification

Description: "validate credit card number"
Function name:
```

<v-click>

Result: `validate_credit_card_number`

</v-click>

<!--
Few-shot for formatting.
-->

---

# How Many Examples?

| Count | Name | Use When |
|-------|------|----------|
| 0 | Zero-shot | Instructions alone are clear enough |
| 1 | One-shot | Minimal pattern demonstration |
| 2-3 | Few-shot | Clearer pattern, most common |
| 4+ | Many-shot | Diminishing returns, uses context |

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
For most tasks, <strong>2-3 good examples</strong> are sufficient.
</div>

</v-click>

<!--
How many examples to use.
-->

---
layout: section
---

# Technique 4: Chain-of-Thought

Getting AI to show its work

---

# Chain-of-Thought Prompting

Ask the AI to reason step by step:

<v-click>

**Basic**:
> "Think through this step by step before giving your final answer."

</v-click>

<v-click>

**Structured**:
> "Let's work through this systematically:
> 1. First, analyze...
> 2. Then, consider...
> 3. Finally, decide..."

</v-click>

<!--
Chain-of-thought basics.
-->

---

# Without vs. With Chain-of-Thought

**Without**:
> "What's the most efficient way to find duplicates in a list?"

<v-click>

**With**:
> "What's the most efficient way to find duplicates in a list? Think through:
> 1. What approaches exist?
> 2. What's the time complexity of each?
> 3. What's the space complexity of each?
> 4. Which is best for a typical use case?"

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
The second prompt produces more thorough, reasoned analysis.
</div>

</v-click>

<!--
Chain-of-thought comparison.
-->

---

# When to Use Chain-of-Thought

<v-clicks>

- Complex reasoning tasks
- Multi-step problems
- When you want to verify the AI's logic
- When you need to understand *why*, not just *what*

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Module 08 goes deeper into reasoning models that build on this.
</div>

</v-click>

<!--
When chain-of-thought helps.
-->

---
layout: section
---

# Technique 5: Format Specification

Controlling output structure

---

# Common Format Requests

**JSON**:
```markdown
Return the result as JSON with this structure:
{"name": "string", "valid": boolean, "errors": ["string", ...]}
```

<v-click>

**Markdown table**:
```markdown
Present the comparison as a markdown table with columns:
| Option | Pros | Cons | Recommendation |
```

</v-click>

<v-click>

**Code only**:
```markdown
Respond with only the code. No explanations, no markdown formatting.
```

</v-click>

<!--
Format specification examples.
-->

---

# Structured Output Template

```markdown
Analyze this code for potential issues. Format your response as:

## Issues Found

### Issue 1: [title]
- **Severity**: High/Medium/Low
- **Location**: [line number or function]
- **Description**: [what's wrong]
- **Fix**: [how to fix it]

[Repeat for each issue]

## Summary
[One sentence summary]
```

<v-click>

<div class="mt-4 text-gray-400">
Showing the exact format you want produces consistent output.
</div>

</v-click>

<!--
Structured output template.
-->

---
layout: section
---

# Debugging Prompts

When things don't work

---

# Common Problems and Fixes

| Problem | Likely Cause | Fix |
|---------|--------------|-----|
| Too verbose | No length constraint | Add "be concise" or word limit |
| Wrong format | Unclear format spec | Show exact format with examples |
| Missing details | Too vague | Add specific requirements |
| Wrong approach | AI chose differently | Explicitly constrain approach |
| Inconsistent style | No style examples | Add few-shot examples |

<!--
Debugging table.
-->

---

# The Prompt Debugging Loop

<v-clicks>

1. **Identify** what's wrong with the output
2. **Hypothesize** why (ambiguity? missing constraint? wrong context?)
3. **Modify** one thing in your prompt
4. **Test** and compare
5. **Repeat** until satisfied

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Change one thing at a time so you know what worked.
</div>

</v-click>

<!--
Debugging loop.
-->

---

# Iteration Example

**Version 1** (too verbose):
> "Write a Python function to check if a number is prime."

*Output*: 30 lines with extensive comments

<v-click>

**Version 2** (constrained):
> "Write a Python function to check if a number is prime. Maximum 10 lines, no comments."

*Output*: Clean 8-line function

</v-click>

<v-click>

**Version 3** (with style):
> "... Maximum 10 lines, no comments, include type hints."

*Output*: Exactly what we wanted

</v-click>

<!--
Iterative refinement example.
-->

---
layout: section
---

# Combining Techniques

Real prompts use multiple techniques

---

# Combined Example

<div class="text-sm">

```markdown
## Role
You are a senior Python developer doing a code review.

## Context
I'm working on a REST API for a bookstore. Here's my endpoint:
[code block]

## Task
Review this code for: 1. Security issues 2. Performance concerns 3. Code style

## Format
For each category: Issues found, Severity (High/Medium/Low), Specific fix

## Constraints
- Focus only on the three categories above
- Be direct — don't soften criticism
- If no issues in a category, just say "None found"
```

</div>

<v-click>

<div class="mt-2 text-gray-400">
Role + Context + Structured task + Format + Constraints = Effective prompt
</div>

</v-click>

<!--
Multiple techniques combined.
-->

---

# Exercise: Role Transformation

Write the same request with three different roles:

**Base request**: "Explain how hash tables work"

<v-clicks>

1. "You are a computer science professor..."
2. "You are explaining to a 12-year-old..."
3. "You are a technical interviewer testing my knowledge..."

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Same question, three very different responses.
</div>

</v-click>

<!--
Exercise: role transformation.
-->

---

# Key Insights

| Technique | When to Use |
|-----------|-------------|
| Role assignment | Shaping expertise level and tone |
| CRAFT structure | Complex, multi-part requests |
| Constraints | Focusing output, preventing unwanted content |
| Few-shot examples | Teaching patterns, matching style |
| Chain-of-thought | Complex reasoning, verifying logic |
| Format specification | Needing specific output structure |

<!--
Summary table.
-->

---

# Quick Reference Card

| Technique | Pattern |
|-----------|---------|
| **Role** | "You are a [role] with expertise in [domain]..." |
| **CRAFT** | Context, Role, Action, Format, Tone |
| **Constraints** | "Must/Must not...", "Maximum X lines", "Only use..." |
| **Few-shot** | Input→Output examples, then real input |
| **Chain-of-thought** | "Think through this step by step..." |
| **Format spec** | "Return as JSON/table/list with structure..." |

<!--
Quick reference.
-->

---

# Reflection Questions

<v-clicks>

1. Think of a prompt that didn't work well. Which technique from this module might have helped?

2. When might you *not* want constraints? Are there cases where less structure produces better results?

3. Few-shot uses context space. How would you decide between detailed few-shot vs. simpler prompt with iteration?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 06 Complete

You now have a toolkit for crafting effective prompts.

<div class="mt-8 text-xl text-gray-400">
Next: Module 07 — Multi-Modal Models
</div>

<div class="mt-8">
  <a href="./07/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 07 →
  </a>
</div>

<!--
Prompting fundamentals established.
Module 07 adds images, audio, video.
-->
