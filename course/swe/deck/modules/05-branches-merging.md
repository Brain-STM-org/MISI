---
theme: default
title: "Module 05: Branches and Merging"
info: |
  SWE Fundamentals - MISI
  Module 05: Branches and Merging
drawings:
  persist: false
transition: slide-left
---

# Module 05

## Branches and Merging

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Branches are how teams work in parallel without conflicts.
This is the foundation for collaboration.

Estimated time: 30 minutes
Delivery: Day 2 Bootcamp
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Branching is cheap. Merge conflicts are not. Therefore: branch often, merge small."
</div>

<div class="mt-4 text-gray-500">
— Collective wisdom of developers everywhere
</div>

<!--
This encapsulates the key insight: branches are free, problems come from avoiding them.
The "merge small" part is crucial — short-lived branches are easier.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** why branches exist and what problem they solve
2. **Create** a new branch for your work
3. **Switch** between branches
4. **Visualize** how branches diverge and reconnect
5. **Merge** your branch back to main
6. **Recognize** when conflicts occur (and get help resolving them)

</v-clicks>

<!--
This module is both conceptual and hands-on.
Students will create and work with branches.
-->

---
layout: section
---

# The Problem

Why do branches exist?

---

# Without Branches

Imagine you and a teammate are both working on the same project.

<v-clicks>

- You edit `app.py` to add feature A
- They edit `app.py` to add feature B
- You both try to save your work

</v-clicks>

<v-click>

<div class="text-4xl text-center mt-8">
💥 Collision
</div>

<div class="text-xl text-center mt-4 text-gray-400">
Whose version wins?
</div>

</v-click>

<!--
This is the coordination problem.
The more people working simultaneously, the worse it gets.
-->

---

# Branches Solve This

Branches let everyone work in **parallel universes** that can be merged back together when ready.

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded text-lg">
Your work is isolated. You can experiment, break things, try ideas.<br>
When ready, merge back to the shared reality.
</div>

</v-click>

<!--
The "parallel universes" metaphor helps students understand isolation.
Branches are independent until you choose to combine them.
-->

---
layout: section
---

# The Mental Model

Timelines that diverge and reconnect

---

# A Simple Timeline

Think of your project's history as a timeline:

```
main:  ●───●───●───●───●  (commits over time)
```

Each `●` is a commit — a snapshot you created.

<!--
Build up the mental model step by step.
Start with a single linear timeline.
-->

---

# Creating a Branch

When you create a branch, you create a **parallel timeline**:

```
main:      ●───●───●───●───●
                    \
feature-a:           ●───●───●  (your work)
```

<v-clicks>

- Your branch has its own commits
- Changes on your branch don't affect `main`
- Changes on `main` don't affect your branch
- You're isolated — free to experiment

</v-clicks>

<!--
Isolation is the key benefit.
Students can't break the main project while learning.
-->

---

# Merging

When your feature is ready, you **merge** — combining the timelines:

```
main:      ●───●───●───●───●───────●  (merge commit)
                    \             /
feature-a:           ●───●───●───┘
```

<v-click>

The merge commit incorporates your changes into `main`.

**Now everyone has your feature.**

</v-click>

<!--
Merging is the moment of truth.
Your isolated work becomes shared reality.
-->

---
layout: section
---

# The Main Branch

The source of truth

---

# Why "main"?

The `main` branch (sometimes called `master` in older projects) represents:

<v-clicks>

- The **official version** of the project
- What gets **deployed/released**
- The **shared foundation** everyone builds from

</v-clicks>

<!--
Main is special because it's the agreed-upon truth.
Everyone starts from main, everyone merges back to main.
-->

---

# The Pattern

<v-clicks>

1. Create a branch from `main`
2. Do your work on the branch
3. Merge your branch back to `main` (via pull request)
4. Delete your branch

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-green-900 rounded">
This keeps <code>main</code> stable while allowing experimentation.
</div>

</v-click>

<!--
This pattern is universal.
Students will follow it throughout their careers.
-->

---
layout: section
---

# Creating a Branch

Hands-on practice

---

# Create a Branch

<div class="grid grid-cols-3 gap-4">
<div>

### GitHub Desktop

1. Click "Current Branch" dropdown
2. Click "New Branch"
3. Enter a name
4. Click "Create Branch"

</div>
<div>

### VS Code

1. Click branch name (bottom-left)
2. Select "Create new branch..."
3. Enter name
4. Press Enter

</div>
<div>

### Terminal

```bash
git checkout -b add-login
# or newer:
git switch -c add-login
```

</div>
</div>

<!--
Show all three methods.
Students can choose what feels comfortable.
-->

---

# Branch Naming

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Good Names

- `add-shopping-cart`
- `fix-login-bug`
- `feature/user-profile`
- `experiment/new-design`

</div>
<div>

### Bad Names

- `my-branch`
- `test`
- `stuff`
- `asdf`

</div>
</div>

<v-click>

<div class="mt-8 p-4 bg-gray-800 rounded">
<strong>Rule of thumb:</strong> Could you explain this branch to a teammate?
</div>

</v-click>

<!--
Good branch names are self-documenting.
They tell you what the branch is for at a glance.
-->

---
layout: section
---

# Working on Your Branch

Same workflow, different timeline

---

# The Workflow is Familiar

Once you're on a branch, work as before:

<v-clicks>

1. Edit files
2. Stage changes
3. Commit with a message
4. Repeat

</v-clicks>

<v-click>

The only difference: your commits go to **your branch**, not `main`.

</v-click>

<!--
This connects to Module 04.
The cycle is the same; the destination is different.
-->

---

# Verify Your Branch

```bash
# Shows all branches, * marks current
git branch

# Also shows current branch
git status
```

<v-click>

<div class="mt-8">

Example output:

```
* add-user-login
  main
```

The `*` shows you're on `add-user-login`.

</div>

</v-click>

<!--
Students should verify they're on the right branch before committing.
This prevents accidentally committing to main.
-->

---
layout: section
---

# Switching Branches

Changing context

---

# Switch Branches

<div class="grid grid-cols-3 gap-4">
<div>

### GitHub Desktop

Click "Current Branch" dropdown and select.

</div>
<div>

### VS Code

Click branch name (bottom-left) and select.

</div>
<div>

### Terminal

```bash
git checkout main
# or newer:
git switch main
```

</div>
</div>

<!--
Switching is how you change context.
You might need to check something on main, or work on another feature.
-->

---

# Important: Commit First

If you have uncommitted changes, Git will warn you before switching.

<v-click>

Two options:

**1. Commit** your work (even a work-in-progress commit)

**2. Stash** your changes temporarily:

```bash
git stash           # Save changes aside
git switch main     # Now you can switch
git switch feature
git stash pop       # Restore your changes
```

</v-click>

<!--
Stashing is like a temporary pocket for changes.
GitHub Desktop handles this more gracefully with prompts.
-->

---
layout: section
---

# Merging

Combining timelines

---

# The Simple Case: Fast-Forward

If `main` hasn't changed since you branched:

```
Before:
main:      ●───●───●
                    \
feature:             ●───●───●

After merge:
main:      ●───●───●───●───●───●  (main moves forward)
```

<v-click>

Git simply moves the `main` pointer forward.

Your commits become part of `main` directly.

</v-click>

<!--
Fast-forward is the simplest merge.
No new commit created — just pointer movement.
-->

---

# The Common Case: Merge Commit

If `main` has new commits since you branched:

```
Before:
main:      ●───●───●───●───●  (new commits from others)
                \
feature:         ●───●───●

After merge:
main:      ●───●───●───●───●───●  (merge commit)
                \             /
feature:         ●───●───●───┘
```

<v-click>

Git creates a **merge commit** that has two parents — combining both timelines.

</v-click>

<!--
Merge commits are the most common case in team environments.
They preserve the full history of both branches.
-->

---

# When Merging Gets Complicated

What if you and a teammate both edited the same lines of the same file?

<v-click>

Git can't automatically decide whose version wins.

This is a **merge conflict**.

```
‹‹‹‹‹‹‹ HEAD
    return price * 1.08  # Your version: 8% tax
=======
    return price * 1.10  # Their version: 10% tax
››››››› feature-tax-update
```

</v-click>

<!--
Conflicts happen when Git can't automatically merge.
This isn't an error — it's Git asking for human judgment.
-->

---

# Handling Conflicts

<div class="text-xl mt-8">
For your first conflict: <strong>ask your mentor</strong>.
</div>

<v-clicks>

- It's not hard once you've done it
- Guidance the first time prevents frustration
- You'll manually choose (or combine) the changes

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
Conflicts are normal, not scary.
</div>

</v-click>

<!--
Don't frighten students about conflicts.
They're a normal part of collaboration.
Mentors should help with the first one.
-->

---
layout: section
---

# Pull Requests Preview

The professional workflow

---

# The Pull Request Workflow

In professional work, you rarely merge locally. Instead:

<v-clicks>

1. Push your branch to GitHub
2. Open a Pull Request
3. Teammates review your changes (using diffs!)
4. Discuss and refine
5. Merge on GitHub when approved

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This workflow is the subject of the next module.
</div>

</v-click>

<!--
This is a preview of Module 06.
Branches enable collaboration; Pull Requests structure it.
-->

---
layout: section
---

# Common Patterns

How teams use branches

---

# Short-Lived Feature Branches

```
main:  ●───●───●───●───●───●───●
            \     /   \     /
feat-a:      ●───●     │     │
                       │     │
feat-b:                ●─────●
```

<v-click>

Create a branch, do focused work, merge, delete.

**Days, not weeks.**

</v-click>

<!--
This is the ideal pattern.
Short branches are easier to review and merge.
-->

---

# Long-Running Branches (Avoid)

```
main:  ●───●───●───●───●───●───●───●───●
            \                         /
big-feat:    ●───●───●───●───●───●───●
```

<v-click>

The longer a branch lives, the more `main` diverges, the harder the merge.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
If you must work on something large, merge <code>main</code> into your branch regularly to stay current.
</div>

</v-click>

<!--
Long-running branches accumulate debt.
Students should aim for short, focused branches.
-->

---
layout: section
---

# Exercises

Practice branching

---

# Exercise 1: Create and Use a Branch

<div class="text-lg">

1. In your repository, create a branch called `add-about-section`
2. Add a new section to `README.md` about yourself
3. Make two commits:
   - First: Add the section header
   - Second: Add the content
4. Switch back to `main` — notice your changes aren't there
5. Switch back to your branch — they're back

</div>

<!--
This exercise demonstrates branch isolation.
Changes exist on the branch, not on main.
-->

---

# Exercise 2: Visualize History

After the previous exercise:

```bash
git log --oneline --graph --all
```

<v-click>

You should see something like:

```
* a1b2c3d (HEAD -> add-about-section) Add about content
* d4e5f6g Add about section header
| * 7h8i9j0 (main) Previous main commit
|/
* k1l2m3n Earlier commit
```

This is your project's timeline, visualized.

</v-click>

<!--
The visual log helps students see the branching structure.
ASCII art shows how branches diverge.
-->

---

# Exercise 3: Push Your Branch

```bash
git push -u origin add-about-section
```

<v-click>

Go to your repository on GitHub.

You should see a banner:

> "add-about-section had recent pushes"

with a **"Compare & pull request"** button.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
<em>Don't click it yet</em> — that's the next module.
</div>

</v-click>

<!--
This sets up for Module 06.
Students see that GitHub knows about their branch.
-->

---

# Interactive Demo

<div class="text-xl mt-8">

Open the interactive demo to visualize branching:

</div>

<v-clicks>

- See branches diverge and merge
- Understand the timeline visually
- Experiment with different scenarios

</v-clicks>

<v-click>

<div class="mt-8">
  <a href="../branches-demo.html" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded">
    Open Branches Demo →
  </a>
</div>

</v-click>

<!--
The demo opens in a separate window.
Students can explore branching interactively.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Branches are parallel timelines | Work without fear of breaking `main` |
| `main` is the source of truth | Keep it stable; don't commit directly |
| Branch often, merge small | Short-lived branches are easier |
| Merging combines timelines | Usually automatic, sometimes needs judgment |
| Conflicts happen | They're normal — ask for help the first time |

<!--
These are the takeaways.
Branches are tools for safety and collaboration.
-->

---
layout: section
---

# Reflection

---

# Reflection Questions

<v-clicks>

1. Why is it important that branches are "cheap" (fast to create and delete)?

2. A teammate has been working on a branch for three weeks without merging. What problems might arise?

3. If you're working alone on a project, do you still need branches? Why or why not?

</v-clicks>

<!--
Question 1: Encourages frequent branching
Question 2: Long branches accumulate merge debt
Question 3: Yes — branches protect main even when working alone
-->

---
layout: center
class: text-center
---

# Module 05 Complete

You can now work in parallel universes.

<div class="mt-8 text-xl text-gray-400">
Next: Module 06 — Pull Requests
</div>

<div class="mt-8">
  <a href="./06-pull-requests" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 06 →
  </a>
</div>

<!--
Students now understand branching.
The next module shows how to turn branches into collaboration.
-->
