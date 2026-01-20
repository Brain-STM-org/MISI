# Build Pipelines

> *"Trust, but verify."*
> — Russian proverb, adopted by software teams everywhere

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** what happens when code is pushed to a repository
2. **Describe** why automated verification matters
3. **Identify** common pipeline stages (lint, test, build, deploy)
4. **Read** pipeline results and understand what failed
5. **Appreciate** the confidence that comes from "green checks"

---

## The Big Idea

When you push code to GitHub, something magical happens:

**Computers automatically check your work.**

They run tests. They check for errors. They verify the code builds. They might even deploy it to a server.

All without you clicking anything.

This is a **build pipeline** (also called CI/CD — Continuous Integration / Continuous Deployment).

---

## Why Automate Verification?

### The Manual World (Painful)

Without automation:
1. You push code
2. You remember to run tests (maybe)
3. Your teammate pushes code
4. They forget to run tests
5. Someone merges to main
6. Production breaks
7. Angry users, late nights, regret

### The Automated World (Better)

With a pipeline:
1. You push code
2. Pipeline automatically runs tests
3. Tests fail? Merge is blocked. You find out immediately.
4. Tests pass? Green checkmark. Safe to merge.
5. Everyone's code gets the same treatment
6. Broken code can't sneak into main

The pipeline is an impartial guardian that never forgets, never gets tired, and never says "I'll test it later."

---

## What Happens When You Push

```
You: git push
        │
        ▼
┌─────────────────────────────────────────────────┐
│                    GitHub                       │
│                                                 │
│   "New code detected. Triggering pipeline..."   │
│                                                 │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐       │
│   │  Lint   │ → │  Test   │ → │  Build  │       │
│   └─────────┘   └─────────┘   └─────────┘       │
│        │             │             │            │
│        ▼             ▼             ▼            │
│   Check code    Run tests     Compile/          │
│   style         you wrote     package           │
│                                                 │
└─────────────────────────────────────────────────┘
        │
        ▼
   ✅ All passed      or      ❌ Something failed
   (green check)              (red X)
```

Each stage must pass before the next runs. If anything fails, the pipeline stops and tells you what went wrong.

---

## Pipeline Stages

### 1. Lint (Code Style)

A **linter** checks your code for style and potential errors without running it.

```
❌ Line 47: 'userName' is defined but never used
❌ Line 52: Missing semicolon
⚠️ Line 89: Function is too long (150 lines)
```

Linters catch:
- Unused variables
- Syntax issues
- Style inconsistencies
- Potential bugs (like using `=` instead of `==`)

Why automate this? Humans argue about code style. Linters don't.

### 2. Test (Does It Work?)

The pipeline runs your test suite:

```
Running tests...

✓ test_user_login (0.02s)
✓ test_user_logout (0.01s)
✗ test_password_reset (0.15s)
  AssertionError: Expected email to be sent, but none was sent

2 passed, 1 failed
```

If tests fail, you broke something. The pipeline stops. You fix it before anyone else is affected.

### 3. Build (Can It Compile/Package?)

For compiled languages or applications that need packaging:

```
Building application...
Compiling TypeScript...
Bundling assets...
Creating Docker image...

Build successful: app-v1.2.3.tar.gz
```

A failed build means the code can't even become a runnable program. Critical to catch.

### 4. Deploy (Optional: Ship It)

Some pipelines go further — if everything passes, automatically deploy:

```
All checks passed.
Deploying to staging environment...
Deployment successful: https://staging.myapp.com
```

This is the "CD" in CI/CD — Continuous Deployment.

---

## Reading Pipeline Results

On GitHub, you'll see pipeline status on:
- Commits (checkmark or X next to commit message)
- Pull requests (status checks section)
- The Actions tab (detailed run logs)

### Green: All Checks Passed ✅

```
All checks have passed
2 successful checks

✓ lint (12s)
✓ test (45s)
```

This means: the code meets quality standards. Safe to merge.

### Red: Something Failed ❌

```
Some checks were not successful
1 failing check

✓ lint (12s)
✗ test (23s) — Tests failed
```

Click the failing check to see details:

```
Run npm test

FAIL src/utils.test.js
  ● calculateTotal › should apply discount correctly

    expect(received).toBe(expected)

    Expected: 90
    Received: 100

    at Object.<anonymous> (src/utils.test.js:15:23)

npm ERR! Test failed.
```

The pipeline tells you exactly what failed and where. No guessing.

### Yellow: In Progress 🟡

```
Some checks haven't completed yet

◯ lint — In progress
◯ test — Queued
```

Wait for it to finish before making decisions.

---

## GitHub Actions: The Mechanism

GitHub's built-in pipeline system is called **GitHub Actions**.

Pipelines are defined in a file: `.github/workflows/something.yml`

Here's a simple example:

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

You don't need to understand every line right now. The key points:

- **`on: [push, pull_request]`** — run this when code is pushed or a PR is opened
- **`runs-on: ubuntu-latest`** — use a Linux machine
- **`steps`** — the sequence of commands to run

Your mentors (or AI assistants) can help set this up. What matters is understanding *what it does* and *how to read the results*.

---

## The Confidence of Green Checks

Once you've worked with pipelines, you'll feel the difference:

**Without pipeline:**
> "I think this code works. I tested it locally. Probably fine."

**With pipeline:**
> "The pipeline passed. Tests ran. Linter approved. It builds. This code meets our standards."

That second statement is confidence backed by evidence.

### The Team Effect

Pipelines create shared confidence:

- "Did you run the tests?" → "The pipeline did."
- "Is this safe to merge?" → "All checks passed."
- "Who broke the build?" → "The pipeline caught it before merge. No one broke anything."

Everyone trusts the pipeline. Arguments about quality decrease. Actual quality increases.

---

## Common Pipeline Scenarios

### Scenario: You Push, Tests Fail

```
✗ test (34s)
  2 tests failed
```

1. Click to see which tests failed
2. Read the error messages
3. Fix your code locally
4. Push again
5. Pipeline runs again
6. (Repeat until green)

This is normal. Pipelines catching failures is success, not failure.

### Scenario: Teammate's PR Has Red Checks

Their PR shows failing checks. What do you do?

- Don't merge it (merging red is bad hygiene)
- Let them know: "Hey, tests are failing on your PR"
- They fix and push
- Checks turn green
- Now it's safe to review and merge

### Scenario: Flaky Test

Sometimes tests fail randomly — network timeouts, race conditions, cosmic rays.

```
Run 1: ✗ test_api_connection — timeout
Run 2: ✓ test_api_connection — passed
```

Same code, different results. These are called **flaky tests**. They're frustrating and should be fixed, but they happen.

If a test fails and you're confident your code is right, re-run the pipeline. If it passes on retry, the test might be flaky.

---

## What Pipelines Won't Catch

Pipelines verify that code meets technical standards. They don't verify:

- **Requirements**: Code works, but does it do what users need?
- **Design**: Tests pass, but is the architecture sensible?
- **Security nuances**: Linters catch some issues, not all
- **Performance**: Code runs, but is it fast enough?

This is why code review still matters. Humans check what computers can't.

---

## Exercise: Explore GitHub Actions

### Exercise 1: Find a Pipeline

1. Go to any active open-source project on GitHub
2. Click the "Actions" tab
3. Look at recent workflow runs
4. Click one to see:
   - What triggered it (push, PR, schedule)
   - What steps ran
   - How long each took
   - Any failures

### Exercise 2: Read a Failure

1. Find a workflow run with a ❌ (failed)
2. Click into it
3. Find the failing step
4. Read the error log
5. Can you understand what went wrong?

### Exercise 3: Check Your Own Project

If your project has a pipeline:
1. Make a small change on a branch
2. Push it
3. Watch the Actions tab
4. See your pipeline run in real-time

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Pipelines automate verification | Humans forget; computers don't |
| Stages build on each other | Lint → Test → Build → Deploy |
| Red means stop and fix | Don't merge failing code |
| Green means confident | Evidence that code meets standards |
| Pipelines protect the team | Broken code can't sneak in |

---

## Reflection Questions

1. Why might a team require all pipeline checks to pass before merging?

2. You pushed code and the pipeline failed, but you're sure your code is correct. What might be happening?

3. A test takes 10 minutes to run. Should it be in the pipeline? What are the tradeoffs?

---

*Next module: O11y — understanding what your code is doing once it's running.*
