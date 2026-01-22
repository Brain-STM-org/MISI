---
theme: default
title: "Module 10: Build Pipelines"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 10: Build Pipelines
drawings:
  persist: false
transition: slide-left
---

# Module 10

## Build Pipelines

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Pipelines automate verification so humans don't forget.
This module introduces CI/CD concepts.

Estimated time: 20 minutes
Delivery: Just-in-time when teams start using CI
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Trust, but verify."
</div>

<div class="mt-4 text-gray-500">
— Russian proverb, adopted by software teams everywhere
</div>

<!--
Pipelines are how teams verify automatically.
They encode trust in automation.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** what happens when code is pushed
2. **Describe** why automated verification matters
3. **Identify** common pipeline stages
4. **Read** pipeline results and understand failures
5. **Appreciate** the confidence of green checks

</v-clicks>

<!--
Focus on understanding, not configuring.
Students need to read pipelines, not write them yet.
-->

---
layout: section
---

# The Big Idea

Computers automatically check your work

---

# When You Push Code

```
You: git push
        │
        ▼
┌─────────────────────────────────────────────┐
│                  GitHub                      │
│                                              │
│  "New code detected. Triggering pipeline..." │
│                                              │
│  ┌──────┐    ┌──────┐    ┌───────┐          │
│  │ Lint │ →  │ Test │ →  │ Build │          │
│  └──────┘    └──────┘    └───────┘          │
└─────────────────────────────────────────────┘
        │
        ▼
   ✅ All passed    or    ❌ Something failed
```

<v-click>

This is **CI/CD** — Continuous Integration / Continuous Deployment

</v-click>

<!--
The pipeline runs automatically on every push.
No human intervention needed.
-->

---

# The Manual World (Painful)

Without automation:

<v-clicks>

1. You push code
2. You remember to run tests *(maybe)*
3. Your teammate pushes code
4. They forget to run tests
5. Someone merges to main
6. **Production breaks** 💥
7. Angry users, late nights, regret

</v-clicks>

<!--
Manual processes rely on human memory.
Humans forget. Humans get tired.
-->

---

# The Automated World (Better)

With a pipeline:

<v-clicks>

1. You push code
2. Pipeline automatically runs tests
3. Tests fail? **Merge blocked.** You find out immediately.
4. Tests pass? **Green checkmark.** Safe to merge.
5. Everyone's code gets the same treatment
6. Broken code can't sneak into main

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
The pipeline never forgets, never gets tired, never says "I'll test it later."
</div>

</v-click>

<!--
Automation is an impartial guardian.
It enforces standards consistently.
-->

---
layout: section
---

# Pipeline Stages

What gets checked?

---

# Stage 1: Lint (Code Style)

A **linter** checks code for style and potential errors:

```
❌ Line 47: 'userName' is defined but never used
❌ Line 52: Missing semicolon
⚠️ Line 89: Function is too long (150 lines)
```

<v-clicks>

Catches:
- Unused variables
- Syntax issues
- Style inconsistencies
- Potential bugs

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Humans argue about code style. Linters don't.
</div>

</v-click>

<!--
Linting is fast and catches obvious issues.
Standardizes style across the team.
-->

---

# Stage 2: Test (Does It Work?)

The pipeline runs your test suite:

```
Running tests...

✓ test_user_login (0.02s)
✓ test_user_logout (0.01s)
✗ test_password_reset (0.15s)
  AssertionError: Expected email to be sent

2 passed, 1 failed
```

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
Tests fail? Pipeline stops. You fix it before anyone else is affected.
</div>

</v-click>

<!--
Tests catch functional regressions.
Fast feedback on broken functionality.
-->

---

# Stage 3: Build (Can It Compile?)

For apps that need compiling or packaging:

```
Building application...
Compiling TypeScript...
Bundling assets...
Creating Docker image...

✓ Build successful: app-v1.2.3.tar.gz
```

<v-click>

A failed build means the code can't even become a runnable program.

**Critical to catch early.**

</v-click>

<!--
Build stage catches compilation errors.
Ensures deployable artifacts can be created.
-->

---

# Stage 4: Deploy (Ship It)

Some pipelines go further — if everything passes, deploy automatically:

```
All checks passed.
Deploying to staging environment...

✓ Deployment successful: https://staging.myapp.com
```

<v-click>

This is the **"CD"** in CI/CD — Continuous Deployment.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Automated deployment means changes reach users faster.
</div>

</v-click>

<!--
CD completes the automation loop.
Validated code ships automatically.
-->

---
layout: section
---

# Reading Pipeline Results

Green, red, or yellow?

---

# Green: All Passed ✅

```
All checks have passed
2 successful checks

✓ lint (12s)
✓ test (45s)
```

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded text-lg">
<strong>Meaning:</strong> Code meets quality standards. Safe to merge.
</div>

</v-click>

<!--
Green is the goal.
Evidence that code meets standards.
-->

---

# Red: Something Failed ❌

```
Some checks were not successful
1 failing check

✓ lint (12s)
✗ test (23s) — Tests failed
```

<v-click>

Click the failing check to see details:

```
FAIL src/utils.test.js
  ● calculateTotal › should apply discount

    expect(received).toBe(expected)

    Expected: 90
    Received: 100

    at src/utils.test.js:15:23
```

</v-click>

<!--
Red tells you exactly what failed and where.
No guessing. Investigate and fix.
-->

---

# Yellow: In Progress 🟡

```
Some checks haven't completed yet

◯ lint — In progress
◯ test — Queued
```

<v-click>

<div class="mt-4 text-gray-400">
Wait for it to finish before making decisions.
</div>

</v-click>

<!--
Yellow means patience.
Don't merge until you have a verdict.
-->

---

# The Fix Cycle

When tests fail:

```
1. See red ❌
2. Click to find which test failed
3. Read the error message
4. Fix your code locally
5. Push again
6. Pipeline runs again
7. (Repeat until green ✅)
```

<v-click>

<div class="mt-4 text-gray-400">
This cycle is normal. Pipelines catching failures is success, not failure.
</div>

</v-click>

<!--
Red → Fix → Push → Repeat is the expected workflow.
Fast feedback accelerates learning.
-->

---
layout: section
---

# The Confidence of Green

Why this matters

---

# Before vs After Pipelines

<div class="grid grid-cols-2 gap-8">

<div>

**Without pipeline:**

<div class="text-gray-400 italic mt-2">
"I think this code works. I tested it locally. Probably fine."
</div>

</div>

<div>

**With pipeline:**

<div class="text-gray-400 italic mt-2">
"The pipeline passed. Tests ran. Linter approved. It builds. This code meets our standards."
</div>

</div>

</div>

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded">
The second statement is confidence backed by <strong>evidence</strong>.
</div>

</v-click>

<!--
Pipelines provide evidence, not just hope.
Confidence you can justify.
-->

---

# The Team Effect

<v-clicks>

- "Did you run the tests?" → *"The pipeline did."*
- "Is this safe to merge?" → *"All checks passed."*
- "Who broke the build?" → *"Pipeline caught it before merge."*

</v-clicks>

<v-click>

<div class="mt-8 text-gray-400">
Everyone trusts the pipeline. Arguments about quality decrease. Actual quality increases.
</div>

</v-click>

<!--
Pipelines become the objective standard.
Reduces interpersonal friction about quality.
-->

---

# What Pipelines Won't Catch

Pipelines verify technical standards. They don't verify:

<v-clicks>

- **Requirements**: Code works, but does it do what users need?
- **Design**: Tests pass, but is the architecture sensible?
- **Security nuances**: Linters catch some issues, not all
- **Performance**: Code runs, but is it fast enough?

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This is why code review still matters. Humans check what computers can't.
</div>

</v-click>

<!--
Pipelines complement human review, not replace it.
Technical correctness ≠ good software.
-->

---
layout: section
---

# GitHub Actions

The mechanism behind the magic

---

# How It Works

Pipelines are defined in `.github/workflows/something.yml`:

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

<!--
YAML defines the pipeline configuration.
Steps are commands run in sequence.
-->

---

# The Key Parts

```yaml
on: [push, pull_request]    # When to run
runs-on: ubuntu-latest      # Where to run (Linux machine)
steps:                      # What to run
  - run: npm install
  - run: npm test
```

<v-click>

<div class="mt-4 text-gray-400">
You don't need to write these yet. What matters is understanding <strong>what they do</strong> and <strong>how to read results</strong>.
</div>

</v-click>

<!--
Understanding > configuration for now.
Mentors or AI can help with setup.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Pipelines automate verification | Humans forget; computers don't |
| Stages build on each other | Lint → Test → Build → Deploy |
| Red means stop and fix | Don't merge failing code |
| Green means confident | Evidence that code meets standards |
| Pipelines protect the team | Broken code can't sneak in |

<!--
These are the takeaways.
Pipelines are about confidence and protection.
-->

---
layout: section
---

# Exercises

---

# Exercise: Explore GitHub Actions

<div class="text-lg">

1. Go to any active open-source project on GitHub
2. Click the **"Actions"** tab
3. Look at recent workflow runs
4. Click one to see:
   - What triggered it
   - What steps ran
   - Any failures

</div>

<v-click>

<div class="mt-4 text-gray-400">
Try: <a href="https://github.com/facebook/react" target="_blank">React</a>, <a href="https://github.com/expressjs/express" target="_blank">Express</a>, or any project you use
</div>

</v-click>

<!--
Real projects show real pipeline patterns.
Students see how professionals use CI.
-->

---

# Reflection Questions

<v-clicks>

1. Why might a team require all pipeline checks to pass before merging?

2. You pushed code and the pipeline failed, but you're sure your code is correct. What might be happening?

3. A test takes 10 minutes to run. Should it be in the pipeline? What are the tradeoffs?

</v-clicks>

<!--
Q1: Protecting main branch, enforcing standards
Q2: Flaky test, environment difference, missed edge case
Q3: Slow feedback vs. comprehensive checking
-->

---
layout: center
class: text-center
---

# Module 10 Complete

You now understand automated verification.

<div class="mt-8 text-xl text-gray-400">
Next: Module 11 — O11y: Understanding Your Code
</div>

<div class="mt-8">
  <a href="./11/" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 11 →
  </a>
</div>

<!--
Students understand what pipelines do and why.
Next: understanding code in production.
-->
