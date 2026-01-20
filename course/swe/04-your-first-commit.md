# Your First Commit

> *"A journey of a thousand miles begins with a single step."*
> — Laozi
>
> *"A project of a thousand commits begins with editing a README."*
> — Every developer, at some point

## Learning Objectives

By the end of this module, you will have:

1. **Made** an actual change to a file in a repository
2. **Staged** that change for commit
3. **Written** a clear commit message explaining why
4. **Committed** the change to history
5. **Pushed** your commit to GitHub
6. **Verified** your contribution appears online

This is the cycle you'll repeat hundreds of times. Let's make the first one count.

---

## What is a Commit?

A **commit** is a snapshot of your project at a moment in time.

Think of it like a save point in a video game:
- You can always return to any save point
- Each save captures everything exactly as it was
- You can see what changed between saves (that's the diff!)
- If something goes wrong, you roll back to a good save

Unlike a video game, Git keeps *every* save point forever. Your project's complete history — every change, by everyone, since the beginning — is preserved.

### The Anatomy of a Commit

Every commit contains:

| Component | Purpose |
|-----------|---------|
| **Snapshot** | The state of all files at that moment |
| **Parent** | Which commit came before (linking history) |
| **Author** | Who made this commit |
| **Timestamp** | When it was made |
| **Message** | Why this change exists (written by you) |
| **Hash** | A unique ID (like `a1b2c3d`) |

The message is the only part you write. Everything else Git handles automatically.

---

## The Three Stages

Git has a mental model you need to internalize. Changes flow through three stages:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ Working         │     │ Staging         │     │ Repository      │
│ Directory       │ ──▶ │ Area            │ ──▶ │ (History)       │
│                 │     │                 │     │                 │
│ Your files      │     │ Changes you're  │     │ Permanent       │
│ as you edit     │     │ preparing to    │     │ snapshots       │
│ them            │     │ commit          │     │ (commits)       │
└─────────────────┘     └─────────────────┘     └─────────────────┘
      edit                   stage                  commit
```

### Why the Staging Area?

You might wonder: why not just commit directly?

The staging area lets you **craft commits deliberately**. Suppose you:
- Fixed a bug
- Also cleaned up some formatting
- Also added a comment

These are three different *reasons* for change. The staging area lets you commit them separately, with separate messages. Clean history makes debugging easier later.

For your first commits, you'll likely stage everything at once. That's fine. The power of selective staging becomes clear as projects grow.

---

## Let's Do It

Enough theory. Time to make history.

### Step 0: Open Your Repository

You should have a cloned repository from the GitHub Setup guide. Open it in:
- **GitHub Desktop**: File → Open Repository (or it's already there)
- **VS Code**: File → Open Folder → select the repository folder
- **Terminal**: `cd path/to/your/repository`

### Step 1: Make a Change

Open the `README.md` file (every repository has one).

Find a place to add something small. Perhaps:
- Add your name to a contributors section
- Fix a typo (there's always a typo)
- Add a line describing what you're learning

Example — before:
```markdown
# Project Name

A cool project.
```

Example — after:
```markdown
# Project Name

A cool project.

## Contributors

- Your Name (learning Git!)
```

**Save the file.**

### Step 2: See What Changed

Before committing, always verify what you changed.

**GitHub Desktop:**
- Look at the left sidebar — your file appears with a yellow dot (modified)
- Click it to see the diff on the right

**VS Code:**
- The Source Control icon (branch symbol) shows a badge with number of changes
- Click it to see changed files
- Click a file to see the diff

**Terminal:**
```bash
git status        # Shows which files changed
git diff          # Shows exactly what changed (the diff!)
```

You should see your addition highlighted in green. This is the diff you learned to read.

### Step 3: Stage Your Changes

Tell Git: "I want to include these changes in my next commit."

**GitHub Desktop:**
- Changes are staged by default (checkbox is checked)
- You can uncheck files to exclude them

**VS Code:**
- Hover over the file in Source Control
- Click the `+` icon to stage it
- Or click `+` next to "Changes" to stage all

**Terminal:**
```bash
git add README.md        # Stage specific file
# or
git add .                # Stage all changes
```

### Step 4: Write Your Commit Message

This is where you communicate to the future. Someone (maybe you) will read this message months from now, trying to understand why this change exists.

A good commit message answers: **Why does this change exist?**

| Bad Message | Good Message |
|-------------|--------------|
| `update` | `Add contributors section to README` |
| `fix` | `Fix typo in installation instructions` |
| `changes` | `Add tax calculation to checkout flow` |
| `asdfasdf` | Please don't. |

**Guidelines:**
- Start with a verb: Add, Fix, Update, Remove, Refactor
- Keep the first line under 50 characters
- If you need more detail, add a blank line then explain

**GitHub Desktop:**
- Type your message in the "Summary" field at bottom left
- Optional: add description in the "Description" field

**VS Code:**
- Type in the message box at top of Source Control panel

**Terminal:**
```bash
git commit -m "Add contributors section to README"
```

### Step 5: Commit

Lock in your snapshot.

**GitHub Desktop:**
- Click the blue "Commit to main" button

**VS Code:**
- Click the checkmark icon above the message box
- Or press Cmd+Enter (Mac) / Ctrl+Enter (Windows)

**Terminal:**
```bash
git commit -m "Add contributors section to README"
```

You should see a confirmation. Your change is now part of the local history.

### Step 6: Push to GitHub

Your commit exists on your computer, but not on GitHub yet. **Push** sends your commits to the remote repository.

**GitHub Desktop:**
- Click "Push origin" (top right, or Repository → Push)

**VS Code:**
- Click the sync icon (circular arrows) in the status bar
- Or click "..." in Source Control → Push

**Terminal:**
```bash
git push
```

### Step 7: Verify on GitHub

1. Open your repository on github.com
2. Look at the file you changed — your edit is there
3. Click "commits" (or the clock icon) — your commit appears in history
4. Click your commit to see the diff

*You just contributed to a codebase.*

---

## The Cycle

You now know the fundamental rhythm of software development:

```
    ┌──────────────────────────────────────┐
    │                                      │
    ▼                                      │
  Edit  ──▶  Stage  ──▶  Commit  ──▶  Push │
    │                        │             │
    │                        └─────────────┘
    │                      (repeat)
    │
    └──── (keep working)
```

Every feature, every fix, every improvement follows this pattern. You'll do it thousands of times. It becomes automatic, like saving a document — except better, because you can always go back.

---

## What Can Go Wrong (And How to Fix It)

### "I committed the wrong thing"

Don't panic. If you haven't pushed yet:
```bash
git reset --soft HEAD~1    # Undo last commit, keep changes staged
```
Now you can restage differently and commit again.

If you've already pushed, talk to your mentor. There are options, but they require care.

### "I want to undo my changes before committing"

```bash
git checkout -- filename    # Discard changes to one file
git restore filename        # Same thing (newer syntax)
```

Or in GitHub Desktop: right-click the file → "Discard Changes"

**Warning:** This permanently deletes your uncommitted changes. Make sure that's what you want.

### "It says I need to pull first"

Someone else pushed changes since you last synced. Git wants you to incorporate their changes before pushing yours.

```bash
git pull
```

Or in GitHub Desktop: "Pull origin" first, then push.

Most of the time this works automatically. If changes conflict (you both edited the same lines), you'll need to resolve the conflict — ask your mentor for help the first time.

### "I have no idea what state I'm in"

```bash
git status
```

This command always tells you what's happening. Read it carefully. It even suggests what to do next.

---

## Commit Message Philosophy

I want to dwell on messages because they matter more than people realize.

**A commit message is a letter to the future.**

Six months from now, something will break. Someone will trace through history, looking at commits, asking "why did this change?" Your message is the answer.

Compare:

```
commit a1b2c3d
Author: you
Date: January 2026

    stuff
```

vs.

```
commit a1b2c3d
Author: you
Date: January 2026

    Increase session timeout from 30s to 60s

    Users on slow connections were getting logged out during
    normal usage. This matches the timeout used in the mobile app.
```

The first tells you nothing. The second tells you:
- What changed (timeout value)
- Why (users getting logged out)
- Context (matches mobile app)

When you're tired and want to type "fix bug" — pause. Take 30 seconds to explain *which* bug and *why* your fix works. Your future self will thank you.

---

## Exercises

### Exercise 1: The Complete Cycle

1. Create a new file called `notes.txt` in your repository
2. Add one sentence about what you learned today
3. Stage it, commit with a message, push
4. Verify it appears on GitHub

### Exercise 2: Multiple Commits

1. Make three separate changes to `notes.txt`:
   - Add a second line
   - Add a third line
   - Fix a typo (intentionally make one first)
2. Commit each change separately with appropriate messages
3. Push all three
4. View the commit history on GitHub — you should see three commits

### Exercise 3: Reading History

1. Go to any public repository on GitHub (try [github.com/torvalds/linux](https://github.com/torvalds/linux))
2. Click "Commits" to see history
3. Read some commit messages
4. Click one to see the diff
5. Notice how the message explains the *why* while the diff shows the *what*

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Commits are snapshots | You can always go back |
| Staging is preparation | Craft commits deliberately |
| Messages are communication | Write for humans, not machines |
| Push shares your work | Local history doesn't help teammates |
| The cycle repeats | Edit → Stage → Commit → Push, forever |

---

## Reflection Questions

1. Why might you want to make several small commits instead of one large commit?

2. A teammate's commit message says "fixed it". What questions would you have?

3. If you could only keep one of these: the code changes OR the commit messages, which would be more valuable? Why might this be a hard question?

---

*Congratulations. You've made your first commit — the first of many. The next module covers branching and pull requests: how teams collaborate without stepping on each other's toes.*
