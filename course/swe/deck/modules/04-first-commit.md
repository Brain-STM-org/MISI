---
theme: default
title: "Module 04: Your First Commit"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 04: Your First Commit
drawings:
  persist: false
transition: slide-left
---

# Module 04

## Your First Commit

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
This is a hands-on module. Students will make their first commit.

The cycle learned here (edit → stage → commit → push) will be repeated
thousands of times throughout their careers.

Estimated time: 30 minutes
Delivery: Day 1 Bootcamp
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-8">
"A journey of a thousand miles begins with a single step."
</div>
<div class="mt-2 text-gray-500">— Laozi</div>

<v-click>

<div class="text-xl italic text-gray-300 mt-8">
"A project of a thousand commits begins with editing a README."
</div>
<div class="mt-2 text-gray-500">— Every developer, at some point</div>

</v-click>

<!--
The pairing of ancient wisdom with developer humor sets the tone.
This really is how every project starts.
-->

---

# Learning Objectives

By the end of this module, you will have:

<v-clicks>

1. **Made** an actual change to a file in a repository
2. **Staged** that change for commit
3. **Written** a clear commit message explaining why
4. **Committed** the change to history
5. **Pushed** your commit to GitHub
6. **Verified** your contribution appears online

</v-clicks>

<!--
These are "have done" objectives, not "understand" objectives.
Students will complete each step.
-->

---
layout: section
---

# What is a Commit?

Snapshots in time

---

# A Commit is a Snapshot

A **commit** is a snapshot of your project at a moment in time.

<v-click>

Think of it like a **save point in a video game**:

</v-click>

<v-clicks>

- You can always return to any save point
- Each save captures everything exactly as it was
- You can see what changed between saves (that's the diff!)
- If something goes wrong, roll back to a good save

</v-clicks>

<!--
The video game analogy resonates with students.
Unlike games, Git keeps EVERY save point forever.
-->

---

# Unlike a Video Game...

<div class="text-2xl mt-8">
Git keeps <strong>every</strong> save point forever.
</div>

<v-click>

Your project's complete history — every change, by everyone, since the beginning — is preserved.

</v-click>

<!--
This is a powerful idea.
Nothing is ever truly lost in Git (unless you try very hard to lose it).
-->

---

# Anatomy of a Commit

Every commit contains:

| Component | Purpose |
|-----------|---------|
| **Snapshot** | The state of all files at that moment |
| **Parent** | Which commit came before (linking history) |
| **Author** | Who made this commit |
| **Timestamp** | When it was made |
| **Message** | Why this change exists (written by you) |
| **Hash** | A unique ID (like `a1b2c3d`) |

<v-click>

<div class="mt-4 text-gray-400">
The message is the only part <strong>you</strong> write. Git handles everything else.
</div>

</v-click>

<!--
The message is their creative contribution to every commit.
We'll emphasize message quality later.
-->

---
layout: section
---

# The Three Stages

How changes become commits

---

# Changes Flow Through Three Stages

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

<!--
This mental model is fundamental to Git.
Walk through each stage: edit, stage, commit.
-->

---

# Why the Staging Area?

You might wonder: why not just commit directly?

<v-click>

Suppose you:
- Fixed a bug
- Also cleaned up some formatting
- Also added a comment

</v-click>

<v-click>

These are **three different reasons** for change.

The staging area lets you commit them separately, with separate messages.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Clean history makes debugging easier later.
</div>

</v-click>

<!--
For first commits, students will likely stage everything at once.
The power of selective staging becomes clear as projects grow.
-->

---
layout: section
---

# Let's Do It

Enough theory — time to make history

---

# Step 0: Open Your Repository

You should have a cloned repository from the GitHub Setup guide.

<div class="grid grid-cols-3 gap-4 mt-8">
<div>

### GitHub Desktop

File → Open Repository

</div>
<div>

### VS Code

File → Open Folder

</div>
<div>

### Terminal

```bash
cd path/to/repo
```

</div>
</div>

<!--
Students should already have a repository from Module 02.
If not, they need to go back and complete the setup.
-->

---

# Step 1: Make a Change

Open the `README.md` file (every repository has one).

<v-click>

Add something small:
- Add your name to a contributors section
- Fix a typo (there's always a typo)
- Add a line describing what you're learning

</v-click>

<!--
The change should be real but small.
README.md is a safe place to make first changes.
-->

---

# Example Change

**Before:**

```markdown
# Project Name

A cool project.
```

**After:**

```markdown
# Project Name

A cool project.

## Contributors

- Your Name (learning Git!)
```

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
<strong>Save the file.</strong>
</div>

</v-click>

<!--
Have students make their actual change now.
Walk around and help anyone who gets stuck.
-->

---

# Step 2: See What Changed

Before committing, always verify what you changed.

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">
<div>

### GitHub Desktop

Left sidebar shows modified files.
Click to see diff on right.

</div>
<div>

### VS Code

Source Control icon shows badge.
Click file to see diff.

</div>
<div>

### Terminal

```bash
git status
git diff
```

</div>
</div>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
You should see your addition highlighted in <strong>green</strong>.<br>
This is the diff you learned to read!
</div>

</v-click>

<!--
This connects to Module 03 (Understanding Diffs).
Students should recognize the format.
-->

---

# Step 3: Stage Your Changes

Tell Git: "I want to include these changes in my next commit."

<div class="grid grid-cols-3 gap-4 mt-8">
<div>

### GitHub Desktop

Changes staged by default (checkbox checked).

</div>
<div>

### VS Code

Click `+` next to file to stage.

</div>
<div>

### Terminal

```bash
git add README.md
# or
git add .
```

</div>
</div>

<!--
For first commits, staging all changes is fine.
More selective staging comes with experience.
-->

---

# Step 4: Write Your Commit Message

This is where you communicate to the future.

<v-click>

A good commit message answers:

<div class="text-2xl mt-4 text-center">
Why does this change exist?
</div>

</v-click>

<!--
The message is the human element of every commit.
It's your chance to explain context that the code doesn't show.
-->

---

# Good vs. Bad Messages

| Bad Message | Good Message |
|-------------|--------------|
| `update` | `Add contributors section to README` |
| `fix` | `Fix typo in installation instructions` |
| `changes` | `Add tax calculation to checkout flow` |
| `asdfasdf` | Please don't. |

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">

**Guidelines:**
- Start with a verb: Add, Fix, Update, Remove, Refactor
- Keep the first line under 50 characters
- If you need more detail, add a blank line then explain

</div>

</v-click>

<!--
The contrast is stark.
Good messages tell a story; bad messages tell nothing.
-->

---

# Enter Your Message

<div class="grid grid-cols-3 gap-4 mt-8">
<div>

### GitHub Desktop

Type in "Summary" field at bottom left.

</div>
<div>

### VS Code

Type in message box at top of Source Control.

</div>
<div>

### Terminal

```bash
git commit -m "Your message"
```

</div>
</div>

<v-click>

<div class="mt-8 text-gray-400">
Example: "Add contributors section to README"
</div>

</v-click>

<!--
Students should type their actual message now.
-->

---

# Step 5: Commit

Lock in your snapshot.

<div class="grid grid-cols-3 gap-4 mt-8">
<div>

### GitHub Desktop

Click blue "Commit to main" button.

</div>
<div>

### VS Code

Click checkmark icon above message.
Or: `Cmd/Ctrl + Enter`

</div>
<div>

### Terminal

```bash
git commit -m "Message"
```

</div>
</div>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
You should see a confirmation.<br>
Your change is now part of <strong>local history</strong>.
</div>

</v-click>

<!--
The commit is now permanent locally.
But it's not on GitHub yet.
-->

---

# Step 6: Push to GitHub

Your commit exists locally, but not on GitHub yet.

**Push** sends your commits to the remote repository.

<div class="grid grid-cols-3 gap-4 mt-4">
<div>

### GitHub Desktop

Click "Push origin" (top right).

</div>
<div>

### VS Code

Click sync icon (circular arrows) in status bar.

</div>
<div>

### Terminal

```bash
git push
```

</div>
</div>

<!--
Pushing is what makes your work visible to others.
Local commits don't help teammates.
-->

---

# Step 7: Verify on GitHub

<div class="text-lg">

1. Open your repository on github.com
2. Look at the file you changed — your edit is there
3. Click "commits" (or clock icon) — your commit appears in history
4. Click your commit to see the diff

</div>

<v-click>

<div class="mt-8 p-4 bg-purple-900 rounded text-2xl text-center">
You just contributed to a codebase.
</div>

</v-click>

<!--
This is a celebratory moment.
Students have completed the full cycle.
-->

---
layout: section
---

# The Cycle

The rhythm of development

---

# The Fundamental Rhythm

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

<v-click>

<div class="mt-4 text-gray-400">
Every feature, every fix, every improvement follows this pattern.<br>
You'll do it thousands of times. It becomes automatic.
</div>

</v-click>

<!--
This cycle should become as natural as saving a document.
The repetition builds muscle memory.
-->

---
layout: section
---

# Troubleshooting

When things go wrong

---

# "I committed the wrong thing"

Don't panic.

<v-click>

**If you haven't pushed yet:**

```bash
git reset --soft HEAD~1    # Undo last commit, keep changes staged
```

Now restage differently and commit again.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
If you've already pushed, talk to your mentor. There are options, but they require care.
</div>

</v-click>

<!--
The soft reset is a safe recovery.
Post-push recovery is more complex.
-->

---

# "I want to undo my changes"

Before committing:

```bash
git checkout -- filename    # Discard changes to one file
git restore filename        # Same thing (newer syntax)
```

Or in GitHub Desktop: right-click file → "Discard Changes"

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
<strong>Warning:</strong> This permanently deletes uncommitted changes.<br>
Make sure that's what you want.
</div>

</v-click>

<!--
Discarding changes is destructive.
But sometimes it's exactly what you need.
-->

---

# "It says I need to pull first"

Someone else pushed changes since you last synced.

<v-click>

```bash
git pull
```

Then push your changes.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
If changes conflict (you both edited same lines), ask your mentor for help the first time.
</div>

</v-click>

<!--
Conflicts are covered in Module 05 (Branches and Merging).
For now, mentors help with conflicts.
-->

---

# "I have no idea what state I'm in"

```bash
git status
```

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded">
This command always tells you what's happening.<br>
Read it carefully — it even suggests what to do next.
</div>

</v-click>

<!--
git status is the universal answer to "what's going on?"
Students should learn to use it freely.
-->

---
layout: section
---

# Commit Message Philosophy

A letter to the future

---

# Commit Messages Matter

<div class="text-2xl mt-8">
A commit message is a letter to the future.
</div>

<v-click>

Six months from now, something will break.

Someone will trace through history, looking at commits, asking:

<div class="text-xl italic mt-4">
"Why did this change?"
</div>

Your message is the answer.

</v-click>

<!--
This perspective shift is important.
Messages aren't for now — they're for later.
-->

---

# Compare These Messages

**Bad:**
```
commit a1b2c3d
Author: you
Date: January 2026

    stuff
```

<v-click>

**Good:**
```
commit a1b2c3d
Author: you
Date: January 2026

    Increase session timeout from 30s to 60s

    Users on slow connections were getting logged out during
    normal usage. This matches the timeout used in the mobile app.
```

</v-click>

<!--
The contrast is stark.
The first tells nothing; the second tells everything.
-->

---

# The Good Message Tells You...

<v-clicks>

- **What changed**: timeout value
- **Why**: users getting logged out
- **Context**: matches mobile app

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-yellow-900 rounded">
When you're tired and want to type "fix bug" — pause.<br>
Take 30 seconds to explain <em>which</em> bug and <em>why</em> your fix works.<br>
<strong>Your future self will thank you.</strong>
</div>

</v-click>

<!--
This advice is practical and actionable.
30 seconds of thought saves hours of confusion.
-->

---
layout: section
---

# Exercises

Practice the cycle

---

# Exercise 1: The Complete Cycle

<div class="text-lg">

1. Create a new file called `notes.txt` in your repository
2. Add one sentence about what you learned today
3. Stage it, commit with a message, push
4. Verify it appears on GitHub

</div>

<!--
This exercises reinforces the cycle.
Students should do this independently.
-->

---

# Exercise 2: Multiple Commits

<div class="text-lg">

1. Make three separate changes to `notes.txt`:
   - Add a second line
   - Add a third line
   - Fix a typo (intentionally make one first)
2. Commit **each change separately** with appropriate messages
3. Push all three
4. View the commit history on GitHub — you should see three commits

</div>

<!--
This exercise shows that commits can be granular.
One change, one commit, one message.
-->

---

# Exercise 3: Reading History

<div class="text-lg">

1. Go to any public repository on GitHub
   - Try [github.com/torvalds/linux](https://github.com/torvalds/linux)
2. Click "Commits" to see history
3. Read some commit messages
4. Click one to see the diff
5. Notice: message explains **why**, diff shows **what**

</div>

<!--
This connects commits to real-world projects.
The Linux kernel is a great example of good commit messages.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Commits are snapshots | You can always go back |
| Staging is preparation | Craft commits deliberately |
| Messages are communication | Write for humans, not machines |
| Push shares your work | Local history doesn't help teammates |
| The cycle repeats | Edit → Stage → Commit → Push, forever |

<!--
These are the takeaways.
The cycle will become second nature.
-->

---
layout: section
---

# Reflection

---

# Reflection Questions

<v-clicks>

1. Why might you want to make several small commits instead of one large commit?

2. A teammate's commit message says "fixed it". What questions would you have?

3. If you could only keep one — the code changes OR the commit messages — which would be more valuable? Why might this be a hard question?

</v-clicks>

<!--
These questions probe deeper understanding.
Question 3 is genuinely hard — both have value.
-->

---
layout: center
class: text-center
---

# Module 04 Complete

You've made your first commit — the first of many.

<div class="mt-8 text-xl text-gray-400">
Next: Module 05 — Branches and Merging
</div>

<div class="mt-8">
  <a href="./05-branches-merging" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 05 →
  </a>
</div>

<!--
Congratulations! Students have completed the fundamental Git cycle.
The next module covers how teams collaborate without conflicts.
-->
