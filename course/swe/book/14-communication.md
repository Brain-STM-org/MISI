# Communication

> *"Programs must be written for people to read, and only incidentally for machines to execute."*
> — Harold Abelson, *Structure and Interpretation of Computer Programs*

## Learning Objectives

By the end of this module, you will be able to:

1. **Write** README files that actually help
2. **Craft** commit messages that explain the why
3. **Comment** code appropriately — not too much, not too little
4. **Recognize** that documentation is a form of respect

---

## Writing for Future Humans

Every piece of text in your project has an audience:

| Text | Primary Audience |
|------|------------------|
| README | New people encountering your project |
| Commit messages | Future developers (including you) investigating history |
| Code comments | Someone reading this specific code |
| Documentation | Users trying to accomplish something |

The common thread: **you're writing for humans who aren't in your head.**

Your future self counts as "not in your head." In six months, you won't remember why you made that decision. Write it down.

---

## READMEs: The Welcome Mat

A **README** is the first file someone reads when they encounter your project. It answers: "What is this and how do I use it?"

### A Good README Template

```markdown
# Project Name

One-line description of what this project does.

## What It Does

2-3 sentences expanding on the purpose. What problem does it solve?
Who is it for?

## Getting Started

### Prerequisites

What do I need installed before I begin?

### Installation

Step-by-step instructions to get the project running.

```bash
git clone https://github.com/you/project.git
cd project
npm install
npm start
```

### Usage

How do I actually use this thing? Basic examples.

## Contributing

How can someone contribute? Link to guidelines if they exist.

## License

What license applies? (MIT, Apache, etc.)
```

### README Principles

**Answer the first questions:**
- What is this?
- Why would I care?
- How do I get it running?

**Assume nothing:**
- Don't assume they know your tech stack
- Don't assume they've read other documentation
- Don't assume they have context on why this exists

**Keep it current:**
- An outdated README is worse than none (it misleads)
- Update when things change
- If instructions don't work, fix them immediately

**Show, don't just tell:**
```markdown
❌ "The API supports various query parameters."

✅ "Query parameters:
   - `limit`: Maximum results (default: 10)
   - `offset`: Skip this many results (default: 0)

   Example: `/api/users?limit=20&offset=40`"
```

### The 30-Second Test

Someone should be able to:
1. Read your README
2. Understand what your project does
3. Get it running locally

...in under 30 seconds of reading + 5 minutes of setup.

If they can't, your README needs work.

---

## Commit Messages: Letters to the Future

We covered commit messages in Module 04, but they're important enough to revisit here in the context of communication.

### The Audience

Six months from now, something breaks. Someone (maybe you) is investigating. They find a commit:

```
commit a1b2c3d
Author: You
Date:   January 2024

    Update stuff
```

Useless. What stuff? Why? What changed?

Now imagine:

```
commit a1b2c3d
Author: You
Date:   January 2024

    Increase session timeout from 30s to 60s

    Users on slow connections were getting logged out during
    normal usage. This matches the timeout used by our mobile app.

    Fixes: ISSUE-1234
```

Future-you can now understand:
- What changed (timeout value)
- Why (users getting logged out)
- Context (mobile app does the same)
- Reference (issue tracker)

### The Format

```
Short summary (50 chars or less)

Longer explanation if needed. Wrap at 72 characters.
Explain what and why, not how (the diff shows how).

- Bullet points are fine for listing multiple changes
- Reference issues: Fixes #123

Co-authored-by: Partner <partner@example.com>
```

### Good Commit Message Verbs

Start with an imperative verb:

| Verb | When to Use |
|------|-------------|
| Add | New feature or file |
| Fix | Bug repair |
| Update | Enhance existing feature |
| Remove | Delete feature or file |
| Refactor | Change structure without changing behavior |
| Rename | Change names |
| Document | Add/update documentation |
| Test | Add or fix tests |

**"Add user authentication"** not "Added" or "Adding" — imperative mood reads as a command the commit performs.

---

## Code Comments: The Right Amount

Comments explain code. But how much is right?

### The Spectrum

```
No comments ◄─────────────────────────────────► Everything commented
   (bad)           (sweet spot)                      (bad)
```

Too few comments: readers struggle to understand intent.
Too many comments: noise drowns signal; comments become lies as code changes.

### When to Comment

**Comment the why, not the what:**

```python
# Bad: describes what the code does (we can read the code)
# Increment counter by one
counter += 1

# Good: explains why
# Use counter for rate limiting; reset every hour
counter += 1
```

**Comment non-obvious decisions:**

```python
# We sort in reverse because the API returns oldest-first
# but the UI expects newest-first
items.sort(reverse=True)
```

**Comment workarounds and hacks:**

```python
# HACK: Sleep to avoid rate limit on external API
# TODO: Implement proper backoff (tracked in ISSUE-456)
time.sleep(1)
```

**Comment complex algorithms:**

```python
# Binary search for the insertion point
# Invariant: items[lo] < target <= items[hi]
while lo < hi:
    mid = (lo + hi) // 2
    if items[mid] < target:
        lo = mid + 1
    else:
        hi = mid
```

### When NOT to Comment

**Don't comment obvious code:**

```python
# Bad: adds nothing
# Create a new user
user = User()

# Set the username
user.name = username
```

**Don't comment bad code — fix it:**

```python
# Bad: comment compensates for bad naming
# Check if user can access resource
if u.p >= r.ml:

# Good: clear names make comment unnecessary
if user.permission_level >= resource.minimum_level:
```

**Don't leave dead comments:**

```python
# TODO: remove this after launch
#       (left in for 3 years)
```

### Comments as Code Smell

If you need many comments to explain code, the code might be too complex.

Consider:
- Better variable names
- Smaller functions
- Clearer structure

Comments should be seasoning, not the main dish.

---

## Writing Style for Technical Communication

### Be Concise

**Wordy:**
> "In order to facilitate the process of user authentication, it will be necessary for the application to first validate the credentials that have been provided by the user."

**Concise:**
> "The app validates user credentials before authenticating."

Cut unnecessary words. Respect the reader's time.

### Be Specific

**Vague:**
> "The system may sometimes experience performance issues."

**Specific:**
> "Response time exceeds 2 seconds when more than 100 users are concurrent."

Vague statements don't help anyone debug or decide.

### Be Direct

**Passive:**
> "It was decided that the feature would be removed."

**Direct:**
> "We removed the feature because..."

Say who did what and why.

### Use Examples

**Abstract:**
> "The function accepts various configuration options."

**With Example:**
> "Configure with options:
> ```javascript
> { timeout: 5000, retries: 3 }
> ```"

Examples clarify more than explanations.

---

## Documentation as Respect

Documentation is an act of care:

- **Respect for users**: They shouldn't have to guess how things work
- **Respect for teammates**: They shouldn't have to interrupt you with questions
- **Respect for future self**: You shouldn't have to rediscover your own decisions
- **Respect for contributors**: They shouldn't face a wall of inscrutable code

Undocumented code says: "Figure it out yourself."
Documented code says: "I want to help you succeed."

### The Bus Factor

"Bus factor" is a (morbid) metric: how many people could be hit by a bus before the project stalls?

If only one person knows how something works, the bus factor is 1. Dangerous.

Documentation spreads knowledge. It raises the bus factor. It makes the team resilient.

---

## Exercise: Practice Communication

### Exercise 1: README Review

Find a README (your project, or an open-source one).

Evaluate:
- Does it explain what the project does?
- Can I get it running from the instructions?
- What questions remain unanswered?
- What would you improve?

### Exercise 2: Commit Message Improvement

Take these commit messages and improve them:

1. `fix bug`
2. `update`
3. `changes`
4. `wip`

<details>
<summary>Possible Improvements</summary>

1. `Fix null pointer error when user has no profile picture`
2. `Update login page to use new authentication API`
3. `Refactor order processing to separate validation from persistence`
4. `[WIP] Add preliminary support for dark mode - incomplete`

</details>

### Exercise 3: Comment Audit

Take a function you've written. Check:
- Is there anything non-obvious that needs explaining?
- Are there any comments that describe the obvious?
- Would a stranger understand this?

Add or remove comments as appropriate.

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Write for future humans | You won't remember; they never knew |
| README is the welcome mat | 30 seconds to understand, 5 minutes to run |
| Commit messages explain why | The diff shows what; you explain the reason |
| Comment the why, not the what | Code shows what it does; comments explain purpose |
| Documentation is respect | Care for people who encounter your work |

---

## Reflection Questions

1. You're rushed for time. Should you skip writing the README? What are the consequences?

2. A commit message says "fix Alex's bug." Why is this bad? What information is missing?

3. When does code become self-documenting enough that comments are unnecessary?

---

*Next module: Ethics in Software — the responsibility that comes with building things people use.*
