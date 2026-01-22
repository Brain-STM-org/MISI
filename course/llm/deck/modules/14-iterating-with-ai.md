---
theme: default
title: "Module 14: Iterating with AI"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 14: Iterating with AI
drawings:
  persist: false
transition: slide-left
---

# Module 14

## Iterating with AI

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Patterns for complex AI-assisted projects.
TDD, planning, memory notes, debugging.

Estimated time: 30 minutes
Delivery: Day 2 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Structured iteration patterns, anti-patterns to avoid
- Willisons: TDD with AI, memory notes system, debugging techniques
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The first draft is just a starting point. The magic is in the iteration."
</div>

<div class="mt-4 text-gray-500">
— Unknown
</div>

<!--
Iteration is where the real work happens.
-->

---

# Why Iteration Matters

Simple tasks work on first try. Complex projects don't.

<v-click>

The difference between frustration and success often comes down to:

</v-click>

<v-clicks>

- How you structure iterative work
- How you maintain context across sessions
- How you handle when things go wrong

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This module covers patterns that work.
</div>

</v-click>

<!--
Why iteration matters.
-->

---
layout: section
---

# Pattern 1: TDD with AI

Test-Driven Development

---

# TDD + AI Flow

```
1. Write a failing test (you or AI)
2. Ask AI to make it pass
3. AI generates implementation
4. Run test — does it pass?
5. If not: AI sees error, tries again
6. Repeat until green
7. Refactor if needed
```

<v-click>

<div class="mt-4 text-gray-400">
The test is the specification. AI implements to spec.
</div>

</v-click>

<!--
TDD with AI flow.
-->

---

# Why TDD + AI Works

| TDD Benefit | AI Amplification |
|-------------|------------------|
| Clear specification | AI knows exactly what to achieve |
| Immediate feedback | AI can iterate on failures |
| Regression protection | AI changes don't break existing |
| Documentation | Tests show intended behavior |

<!--
Why TDD + AI is powerful.
-->

---

# TDD Example Session

```
You: Write a test for compound interest calculation.
     Principal, rate, years, compounds per year.

AI: [Writes test]
```

<v-click>

```python
def test_compound_interest():
    # $1000 at 5% for 10 years, compounded monthly
    result = compound_interest(1000, 0.05, 10, 12)
    assert abs(result - 1647.01) < 0.01

    # Edge case: 0 years
    assert compound_interest(1000, 0.05, 0, 12) == 1000
```

</v-click>

<v-click>

```
You: Good tests. Now implement to pass them.
AI: [Writes implementation, runs tests, they pass]
```

</v-click>

<!--
TDD example session.
-->

---

# TDD Best Practices

<v-clicks>

1. **Write tests first** (or have AI write them for review)

2. **Review tests carefully** — bad tests = bad implementation

3. **Keep tests simple** — complex tests obscure the requirement

4. **Run tests yourself** — don't just trust "tests pass"

5. **Refactor after green** — passing tests enable safe cleanup

</v-clicks>

<!--
TDD best practices.
-->

---
layout: section
---

# Pattern 2: Planning Before Delegation

Think before generating

---

# The Anti-Pattern

```
You: Build me a user authentication system.
AI: [Generates 500 lines of code]
You: Wait, that's not what I wanted...
```

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
Underspecified requests produce wrong implementations.
</div>

</v-click>

<!--
Planning anti-pattern.
-->

---

# The Pattern

```
You: I need to build user authentication.
     Before writing any code, outline:
     1. What components are needed
     2. What decisions need to be made
     3. What trade-offs exist

AI: Components needed:
    - User model (storage)
    - Authentication endpoints (login, register, logout)
    - Session management (tokens or sessions)
    - Password hashing

    Decisions to make:
    - JWT vs session-based auth?
    - Email verification required?
    - OAuth providers to support?
    ...
```

<v-click>

```
You: Let's use JWT, no email verification for v1.
     Now implement step by step, starting with User model.
```

</v-click>

<!--
Planning pattern example.
-->

---

# Planning Prompts

```markdown
Before implementing, create a plan:
1. What are the main components?
2. What are the dependencies between them?
3. What should we build first?
4. What edge cases should we handle?
```

<v-click>

```markdown
What questions do you need answered before you can
implement this correctly?
```

</v-click>

<v-click>

```markdown
What are three different approaches to this problem?
What are the trade-offs of each?
```

</v-click>

<!--
Planning prompts.
-->

---
layout: section
---

# Pattern 3: Memory Notes

Maintaining context across sessions

---

# The Problem

Long sessions lose context. AI forgets earlier decisions.

<v-click>

**The Solution**: External memory that you maintain.

</v-click>

<!--
Memory notes problem.
-->

---

# Memory Notes Template

```markdown
# Project: Todo API

## Decisions Made
- Using Express + TypeScript
- PostgreSQL for storage
- JWT for auth (no refresh tokens v1)

## Current State
- [x] User model and auth endpoints
- [x] Todo CRUD endpoints
- [ ] Sharing todos with other users

## Conventions
- Use Zod for validation
- Errors return { error: string, code: number }

## Next Steps
1. Add sharing model
2. Create sharing endpoints
```

<!--
Memory notes template.
-->

---

# Using Memory Notes

**Start of session**:
```
You: Here's the current state of my project: [paste notes]
     I want to continue with [next step].
```

<v-click>

**End of session**:
```
You: Summarize what we accomplished this session.
     I'll update my project notes.
```

</v-click>

<v-click>

**When context drifts**:
```
You: Let me remind you of our project context: [paste relevant section]
```

</v-click>

<!--
Using memory notes.
-->

---
layout: section
---

# Pattern 4: Root Cause Debugging

Diagnose before fixing

---

# The Anti-Pattern

```
You: This doesn't work. Fix it.
AI: [Tries random changes]
AI: [Still broken]
AI: [More random changes]
[Spiral continues]
```

<!--
Debugging anti-pattern.
-->

---

# The Pattern

```
You: This function isn't working correctly.
     Before fixing anything:
     1. What is the expected behavior?
     2. What is the actual behavior?
     3. What are possible causes?
     4. How can we verify each cause?

AI: Expected: Function returns sorted array of users by name
    Actual: Array is not sorted

    Possible causes:
    1. Sort comparison function is wrong
    2. Sort is happening but result isn't returned
    3. Data is sorted then modified elsewhere

    Verification:
    1. Add console.log before and after sort
    2. Check comparison function logic
    ...

You: Let's verify cause #1 first.
```

<!--
Root cause debugging pattern.
-->

---

# Debugging Prompts

```markdown
Don't fix this yet. First, explain:
1. What should this code do?
2. What is it actually doing?
3. What are three possible reasons for the discrepancy?
```

<v-click>

```markdown
Trace through this code with example input: [input]
Show me the value of each variable at each step.
```

</v-click>

<v-click>

```markdown
This test is failing: [test output]
What is the test expecting vs. what the code produces?
```

</v-click>

<!--
Debugging prompts.
-->

---
layout: section
---

# Pattern 5: Sub-Agent Delegation

Breaking down large tasks

---

# Breaking It Down

For large tasks, use AI to decompose:

```
You: I need to migrate from MongoDB to PostgreSQL.
     This is big. Break it down:
     1. List all collections and their schemas
     2. For each, design the PostgreSQL equivalent
     3. Identify relationships to express as foreign keys
     4. Create migration script structure

AI: [Breaks down systematically]

You: Let's start with step 1. Analyze these schemas: [schemas]

AI: [Analyzes]

You: Now step 2 for the User collection specifically.
```

<!--
Sub-agent delegation pattern.
-->

---

# Delegation Guidelines

| Task Size | Approach |
|-----------|----------|
| Small | Single request |
| Medium | Plan → execute → verify |
| Large | Break down → handle pieces → integrate |
| Very large | Break down → delegate pieces in separate sessions |

<v-click>

**Avoiding scope creep**:
```
You: We're ONLY working on the User table right now.
     Don't modify or suggest changes to anything else.
```

</v-click>

<!--
Delegation guidelines.
-->

---
layout: section
---

# Knowing When to Reset

Continue vs. start fresh

---

# Signs to Continue

<v-clicks>

- Making steady progress
- AI remembers relevant context
- Errors are getting smaller
- Each iteration improves

</v-clicks>

<!--
Signs to continue.
-->

---

# Signs to Reset

<v-clicks>

- Going in circles (same errors repeating)
- AI seems confused about the goal
- Responses are getting generic
- Context is polluted with wrong approaches

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Sometimes a fresh start in 5 minutes beats another hour of confusion.
</div>

</v-click>

<!--
Signs to reset.
-->

---

# The Reset Protocol

<v-clicks>

1. **Save what's working** — commit good code, note good decisions

2. **Identify what to keep** — what should transfer to new session?

3. **Write fresh context** — don't copy the confused conversation

4. **Start clean** — new session with clear, focused goal

</v-clicks>

<!--
Reset protocol.
-->

---
layout: section
---

# Anti-Patterns to Avoid

What not to do

---

# Anti-Pattern: The Spiral

```
AI: [Code with bug]
You: Fix it
AI: [Different bug]
You: Fix it
AI: [Original bug again]
[Forever]
```

<v-click>

**Solution**: Stop. Diagnose root cause. Reset if needed.

</v-click>

<!--
Spiral anti-pattern.
-->

---

# Anti-Pattern: Scope Creep

```
You: Add user authentication
AI: [Adds auth + refactors database + changes API format + ...]
```

<v-click>

**Solution**: Explicit constraints. "ONLY add authentication."

</v-click>

<!--
Scope creep anti-pattern.
-->

---

# Anti-Pattern: Lost Context

```
You: [Long conversation]
AI: [Response contradicting earlier decisions]
You: [Frustrated correction]
AI: [Still confused]
```

<v-click>

**Solution**: Memory notes. Periodic context reminders.

</v-click>

<!--
Lost context anti-pattern.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| TDD + AI | Tests provide objective success criteria |
| Plan first | Agreement before implementation |
| Memory notes | External context survives sessions |
| Root cause debug | Diagnose before fixing |
| Know when to reset | Fresh start beats confused continuation |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Think of a time you got stuck in a debugging spiral. How could these patterns have helped?

2. "Sometimes a fresh start beats another hour of confusion." When is reset right? When is persistence better?

3. How do memory notes change the relationship between human and AI across time?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 14 Complete

**Tier 3 Complete!** You've finished Agentic Development.

<div class="mt-8 text-xl text-gray-400">
Next: Module 15 — Bias & Fairness (Tier 4: Ethics)
</div>

<div class="mt-8">
  <a href="./15/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 15 →
  </a>
</div>

<!--
Tier 3 complete.
Tier 4 covers ethics and the future.
-->
