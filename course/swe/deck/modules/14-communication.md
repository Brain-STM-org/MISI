---
theme: default
title: "Module 14: Communication"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 14: Communication
drawings:
  persist: false
transition: slide-left
---

# Module 14

## Communication

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Writing for humans who aren't in your head.
READMEs, commit messages, comments, documentation.

Estimated time: 25 minutes
Delivery: Just-in-time when teams need clear communication
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Programs must be written for people to read, and only incidentally for machines to execute."
</div>

<div class="mt-4 text-gray-500">
— Harold Abelson, Structure and Interpretation of Computer Programs
</div>

<!--
Code is read far more than it's written.
Communication is a core engineering skill.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Write** README files that actually help
2. **Craft** commit messages that explain the why
3. **Comment** code appropriately — not too much, not too little
4. **Recognize** that documentation is a form of respect

</v-clicks>

<!--
Communication skills are as important as coding skills.
This module covers the writing side of software.
-->

---
layout: section
---

# Writing for Future Humans

Your audience isn't in your head

---

# Every Text Has an Audience

| Text | Primary Audience |
|------|------------------|
| README | New people encountering your project |
| Commit messages | Future developers investigating history |
| Code comments | Someone reading this specific code |
| Documentation | Users trying to accomplish something |

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
The common thread: <strong>you're writing for humans who aren't in your head.</strong>
</div>

</v-click>

<!--
Different audiences, different needs.
All require clarity and empathy.
-->

---

# Your Future Self

<v-click>

Your future self counts as "not in your head."

</v-click>

<v-click>

In six months, you won't remember:
- Why you made that decision
- What that variable name means
- Why that workaround exists
- What problem this solved

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Write it down. Future you will thank present you.
</div>

</v-click>

<!--
We overestimate what we'll remember.
Documentation is a gift to yourself.
-->

---
layout: section
---

# READMEs

The welcome mat to your project

---

# What a README Answers

A README is the first file someone reads. It answers:

<v-clicks>

- **What is this?**
- **Why would I care?**
- **How do I get it running?**

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
If your README doesn't answer these in 30 seconds, it needs work.
</div>

</v-click>

<!--
READMEs are for first impressions.
Clarity matters more than comprehensiveness.
-->

---

# A Good README Template

<div class="text-sm">

```markdown
# Project Name

One-line description of what this project does.

## What It Does

2-3 sentences expanding on the purpose. What problem does it solve?

## Getting Started

### Prerequisites
What do I need installed?

### Installation
git clone https://github.com/you/project.git
cd project
npm install
npm start

## Usage

Basic examples of how to use it.

## License

MIT, Apache, etc.
```

</div>

<!--
Simple structure. Cover the essentials.
You can expand from here.
-->

---

# README Principles

<v-clicks>

**Assume nothing:**
- Don't assume they know your tech stack
- Don't assume they've read other docs
- Don't assume they have context

**Keep it current:**
- An outdated README is worse than none (it misleads)
- Update when things change
- If instructions don't work, fix them immediately

</v-clicks>

<!--
README maintenance is part of development.
Treat it like code.
-->

---

# Show, Don't Just Tell

<div class="grid grid-cols-2 gap-8">

<div>

**Vague:**
```markdown
The API supports various
query parameters.
```

</div>

<div>

**Specific:**
```markdown
Query parameters:
- `limit`: Max results (default: 10)
- `offset`: Skip results (default: 0)

Example:
`/api/users?limit=20&offset=40`
```

</div>

</div>

<v-click>

<div class="mt-4 text-gray-400">
Examples clarify more than explanations.
</div>

</v-click>

<!--
Concrete examples beat abstract descriptions.
Show the actual usage.
-->

---

# The 30-Second Test

Someone should be able to:

<v-clicks>

1. Read your README
2. Understand what your project does
3. Get it running locally

...in under **30 seconds of reading** + **5 minutes of setup**.

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Try it on a friend. Can they get your project running?
</div>

</v-click>

<!--
Real test: have someone try it.
Their confusion reveals your gaps.
-->

---
layout: section
---

# Commit Messages

Letters to the future

---

# The Audience

Six months from now, something breaks. Someone investigates. They find:

```
commit a1b2c3d
Author: You
Date:   January 2024

    Update stuff
```

<v-click>

**Useless.** What stuff? Why? What changed?

</v-click>

<!--
Bad commit messages waste future time.
"Update stuff" tells nothing.
-->

---

# A Good Commit Message

```
commit a1b2c3d
Author: You
Date:   January 2024

    Increase session timeout from 30s to 60s

    Users on slow connections were getting logged out during
    normal usage. This matches the timeout used by our mobile app.

    Fixes: ISSUE-1234
```

<v-click>

Future-you can now understand:
- **What** changed (timeout value)
- **Why** (users getting logged out)
- **Context** (mobile app does the same)
- **Reference** (issue tracker)

</v-click>

<!--
Good messages explain the reasoning.
The diff shows what; the message explains why.
-->

---

# The Format

```
Short summary (50 chars or less)

Longer explanation if needed. Wrap at 72 characters.
Explain what and why, not how (the diff shows how).

- Bullet points are fine for listing changes
- Reference issues: Fixes #123

Co-authored-by: Partner <partner@example.com>
```

<v-click>

<div class="mt-4 text-gray-400">
First line is the subject. Body explains the context.
</div>

</v-click>

<!--
Standard format makes history scannable.
Subject line is most important.
-->

---

# Good Commit Message Verbs

Start with an imperative verb:

| Verb | When to Use |
|------|-------------|
| **Add** | New feature or file |
| **Fix** | Bug repair |
| **Update** | Enhance existing feature |
| **Remove** | Delete feature or file |
| **Refactor** | Change structure, not behavior |
| **Rename** | Change names |
| **Document** | Add/update documentation |
| **Test** | Add or fix tests |

<v-click>

<div class="mt-4 text-gray-400">
"Add user authentication" — imperative mood reads as a command the commit performs.
</div>

</v-click>

<!--
Imperative verbs are the convention.
"Add" not "Added" or "Adding".
-->

---
layout: section
---

# Code Comments

The right amount

---

# The Spectrum

```
No comments ◄─────────────────────────────────► Everything commented
   (bad)           (sweet spot)                      (bad)
```

<v-clicks>

**Too few comments:** readers struggle to understand intent.

**Too many comments:** noise drowns signal; comments become lies as code changes.

</v-clicks>

<!--
Comments need balance.
Both extremes cause problems.
-->

---

# When TO Comment

**Comment the why, not the what:**

```python
# Bad: describes what the code does (we can read the code)
# Increment counter by one
counter += 1

# Good: explains why
# Use counter for rate limiting; reset every hour
counter += 1
```

<!--
Code shows what. Comments explain why.
-->

---

# More "When to Comment"

**Comment non-obvious decisions:**

```python
# We sort in reverse because the API returns oldest-first
# but the UI expects newest-first
items.sort(reverse=True)
```

<v-click>

**Comment workarounds and hacks:**

```python
# HACK: Sleep to avoid rate limit on external API
# TODO: Implement proper backoff (tracked in ISSUE-456)
time.sleep(1)
```

</v-click>

<!--
Decisions that aren't obvious need explanation.
TODOs should reference issues.
-->

---

# When NOT to Comment

**Don't comment obvious code:**

```python
# Bad: adds nothing
# Create a new user
user = User()

# Set the username
user.name = username
```

<v-click>

**Don't comment bad code — fix it:**

```python
# Bad: comment compensates for poor naming
# Check if user can access resource
if u.p >= r.ml:

# Good: clear names make comment unnecessary
if user.permission_level >= resource.minimum_level:
```

</v-click>

<!--
If you need a comment to explain, maybe fix the code.
Good names reduce need for comments.
-->

---

# Comments as Code Smell

If you need many comments to explain code, the code might be too complex.

<v-click>

Consider:
- Better variable names
- Smaller functions
- Clearer structure

</v-click>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Comments should be <strong>seasoning</strong>, not the main dish.
</div>

</v-click>

<!--
Comments hint at complexity.
Prefer readable code over explained code.
-->

---
layout: section
---

# Writing Style

Technical communication that works

---

# Be Concise

**Wordy:**
> "In order to facilitate the process of user authentication, it will be necessary for the application to first validate the credentials that have been provided by the user."

<v-click>

**Concise:**
> "The app validates user credentials before authenticating."

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Cut unnecessary words. Respect the reader's time.
</div>

</v-click>

<!--
Shorter is almost always better.
Every word should earn its place.
-->

---

# Be Specific

**Vague:**
> "The system may sometimes experience performance issues."

<v-click>

**Specific:**
> "Response time exceeds 2 seconds when more than 100 users are concurrent."

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Vague statements don't help anyone debug or decide.
</div>

</v-click>

<!--
Specifics enable action.
Vagueness creates confusion.
-->

---

# Be Direct

**Passive:**
> "It was decided that the feature would be removed."

<v-click>

**Direct:**
> "We removed the feature because..."

</v-click>

<v-click>

**Use examples:**

Instead of: *"The function accepts various configuration options."*

Write: *"Configure with `{ timeout: 5000, retries: 3 }`"*

</v-click>

<!--
Direct writing assigns responsibility.
Examples beat abstractions.
-->

---
layout: section
---

# Documentation as Respect

Why this matters

---

# Documentation is Care

Documentation is an act of respect:

<v-clicks>

- **Respect for users**: They shouldn't have to guess how things work
- **Respect for teammates**: They shouldn't have to interrupt you with questions
- **Respect for future self**: You shouldn't have to rediscover your own decisions
- **Respect for contributors**: They shouldn't face a wall of inscrutable code

</v-clicks>

<!--
Documentation is empathy in action.
It shows you care about others' experience.
-->

---

# Two Messages

<div class="grid grid-cols-2 gap-8">

<div>

**Undocumented code says:**

<div class="mt-4 text-xl text-red-400">
"Figure it out yourself."
</div>

</div>

<div>

**Documented code says:**

<div class="mt-4 text-xl text-green-400">
"I want to help you succeed."
</div>

</div>

</div>

<!--
Documentation communicates values.
Which message do you want to send?
-->

---

# The Bus Factor

"Bus factor" is a (morbid) metric:

<v-click>

**How many people could be hit by a bus before the project stalls?**

</v-click>

<v-click>

If only one person knows how something works, the bus factor is **1**. Dangerous.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
Documentation spreads knowledge. It raises the bus factor. It makes the team <strong>resilient</strong>.
</div>

</v-click>

<!--
Knowledge should not be siloed.
Documentation distributes understanding.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Write for future humans | You won't remember; they never knew |
| README is the welcome mat | 30 seconds to understand, 5 minutes to run |
| Commit messages explain why | The diff shows what; you explain the reason |
| Comment the why, not the what | Code shows what it does; comments explain purpose |
| Documentation is respect | Care for people who encounter your work |

<!--
These are the takeaways.
Communication is engineering.
-->

---

# Reflection Questions

<v-clicks>

1. You're rushed for time. Should you skip writing the README? What are the consequences?

2. A commit message says "fix Alex's bug." Why is this bad? What information is missing?

3. When does code become self-documenting enough that comments are unnecessary?

</v-clicks>

<!--
Q1: Technical debt accumulates
Q2: No description of what bug, why it happened
Q3: When names and structure reveal intent
-->

---
layout: center
class: text-center
---

# Module 14 Complete

Writing for humans is a core engineering skill.

<div class="mt-8 text-xl text-gray-400">
Next: Module 15 — Ethics in Software
</div>

<div class="mt-8">
  <a href="./15/" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 15 →
  </a>
</div>

<!--
Students understand communication as craft.
Next: the responsibility that comes with building.
-->
