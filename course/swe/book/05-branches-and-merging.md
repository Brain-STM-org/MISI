# Branches and Merging

> *"Branching is cheap. Merge conflicts are not. Therefore: branch often, merge small."*
> — Collective wisdom of developers everywhere

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** why branches exist and what problem they solve
2. **Create** a new branch for your work
3. **Switch** between branches
4. **Visualize** how branches diverge and reconnect
5. **Merge** your branch back to main
6. **Recognize** when conflicts occur (and get help resolving them)

---

## The Problem Branches Solve

Imagine you and a teammate are both working on the same project.

Without branches:
- You edit `app.py` to add feature A
- They edit `app.py` to add feature B
- You both try to save your work
- 💥 Collision. Whose version wins?

This is the **coordination problem**. The more people working simultaneously, the worse it gets.

Branches solve this by letting everyone work in **parallel universes** that can be merged back together when ready.

---

## The Mental Model

Think of your project's history as a timeline:

```
main:  ●───●───●───●───●  (commits over time)
```

Each `●` is a commit — a snapshot you created.

When you create a branch, you're creating a **parallel timeline**:

```
main:      ●───●───●───●───●
                    \
feature-a:           ●───●───●  (your work)
```

Your branch has its own commits. Changes on your branch don't affect `main`. Changes on `main` don't affect your branch. You're isolated — free to experiment, break things, try ideas.

When your feature is ready, you **merge** — combining the timelines:

```
main:      ●───●───●───●───●───────●  (merge commit)
                    \             /
feature-a:           ●───●───●───┘
```

The merge commit incorporates your changes into `main`. Now everyone has your feature.

---

## Why "main"?

The `main` branch (sometimes called `master` in older projects) is the **source of truth**. It represents:

- The official version of the project
- What gets deployed/released
- The shared foundation everyone builds from

You don't work directly on `main`. Instead:

1. Create a branch from `main`
2. Do your work on the branch
3. Merge your branch back to `main` (via pull request — next module)
4. Delete your branch

This pattern keeps `main` stable while allowing experimentation.

---

## Creating a Branch

### GitHub Desktop

1. Click the "Current Branch" dropdown (shows "main")
2. Click "New Branch"
3. Name it descriptively: `add-user-login`, `fix-calculation-bug`, `experiment-new-design`
4. Click "Create Branch"

You're now on your new branch. Notice the dropdown now shows your branch name.

### VS Code

1. Click the branch name in the bottom-left corner (shows "main")
2. Select "Create new branch..."
3. Enter your branch name
4. Press Enter

### Command Line

```bash
# Create and switch to a new branch
git checkout -b add-user-login

# Or the newer syntax:
git switch -c add-user-login
```

### Branch Naming

Good branch names are:
- **Descriptive**: `add-shopping-cart` not `my-branch`
- **Lowercase with hyphens**: `fix-login-bug` not `FixLoginBug`
- **Prefixed by type** (optional): `feature/cart`, `fix/login`, `experiment/new-ui`

Bad branch names:
- `test`, `stuff`, `asdf`, `my-changes`
- Anything you couldn't explain to a teammate

---

## Working on Your Branch

Once you're on a branch, the workflow is identical to what you learned:

1. Edit files
2. Stage changes
3. Commit with a message
4. Repeat

The only difference: your commits go to *your branch*, not `main`.

```bash
# Verify which branch you're on
git branch          # Shows all branches, * marks current
git status          # Also shows current branch

# Make commits normally
git add .
git commit -m "Add login form HTML structure"
git commit -m "Add form validation logic"
git commit -m "Style the login form"
```

Each commit adds to your branch's timeline.

---

## Switching Branches

Sometimes you need to switch context — maybe to check something on `main`, or to work on a different feature.

### GitHub Desktop

Click the "Current Branch" dropdown and select the branch you want.

### VS Code

Click the branch name in the bottom-left and select from the list.

### Command Line

```bash
git checkout main           # Switch to main
git switch main             # Same thing (newer syntax)
git checkout add-user-login # Switch back to your branch
```

### Important: Commit or Stash First

If you have uncommitted changes, Git will warn you before switching. You have two options:

1. **Commit** your work (even a work-in-progress commit)
2. **Stash** your changes temporarily:
   ```bash
   git stash           # Save changes aside
   git switch main     # Now you can switch
   git switch my-branch
   git stash pop       # Restore your changes
   ```

GitHub Desktop handles this more gracefully with prompts.

---

## Seeing All Branches

### GitHub Desktop

The branch dropdown shows all local branches. Click "View on GitHub" to see remote branches too.

### VS Code

Click the branch name to see the full list.

### Command Line

```bash
git branch              # Local branches only
git branch -a           # All branches (including remote)
git log --oneline --graph --all  # Visual history of all branches
```

That last command produces something like:

```
* a1b2c3d (HEAD -> feature-login) Add form validation
* d4e5f6g Add login form HTML
| * 7h8i9j0 (main) Update README
|/
* k1l2m3n Initial commit
```

This ASCII art shows how branches diverge and relate.

---

## Merging

When your feature is complete, you merge it back to `main`.

In practice, you'll do this through a **Pull Request** (next module) for code review. But let's understand what merging actually does.

### The Simple Case: Fast-Forward

If `main` hasn't changed since you branched:

```
Before:
main:      ●───●───●
                    \
feature:             ●───●───●

After merge:
main:      ●───●───●───●───●───●  (main just moves forward)
```

Git simply moves the `main` pointer forward. Your commits become part of `main` directly. This is called a **fast-forward merge**.

### The Common Case: Merge Commit

If `main` has new commits since you branched (because teammates merged their work):

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

Git creates a **merge commit** that has two parents — combining both timelines.

### When Merging Gets Complicated

What if you and a teammate both edited the same lines of the same file?

Git can't automatically decide whose version wins. This is a **merge conflict**.

```
<<<<<<< HEAD
    return price * 1.08  # Your version: 8% tax
=======
    return price * 1.10  # Their version: 10% tax
>>>>>>> feature-tax-update
```

You must manually choose (or combine) the changes. For your first conflict, **ask your mentor**. It's not hard once you've done it, but guidance the first time prevents frustration.

---

## The Pull Request Workflow (Preview)

In professional work, you rarely merge locally. Instead:

1. Push your branch to GitHub
2. Open a Pull Request
3. Teammates review your changes (using diffs!)
4. Discuss and refine
5. Merge on GitHub when approved

This workflow is the subject of the next module. Branches enable it; Pull Requests structure it.

---

## Common Patterns

### Short-Lived Feature Branches

```
main:  ●───●───●───●───●───●───●
            \     /   \     /
feat-a:      ●───●     │     │
                       │     │
feat-b:                ●─────●
```

Create a branch, do focused work, merge, delete. Days, not weeks.

### Long-Running Feature Branches (Avoid When Possible)

```
main:  ●───●───●───●───●───●───●───●───●
            \                         /
big-feat:    ●───●───●───●───●───●───●
```

The longer a branch lives, the more `main` diverges, the harder the merge. If you must work on something large, merge `main` into your branch regularly to stay current.

---

## Practical Exercise

### Exercise 1: Create and Use a Branch

1. In your practice repository, create a branch called `add-about-section`
2. Add a new section to `README.md` with a few sentences about yourself
3. Make two commits:
   - First commit: Add the section header
   - Second commit: Add the content
4. Switch back to `main` — notice your changes aren't there
5. Switch back to your branch — they're back

### Exercise 2: Visualize History

After the above:

```bash
git log --oneline --graph --all
```

You should see your branch diverging from `main`. This is your project's timeline, visualized.

### Exercise 3: Push Your Branch

```bash
git push -u origin add-about-section
```

Go to your repository on GitHub. You should see a banner: "add-about-section had recent pushes" with a "Compare & pull request" button.

*Don't click it yet* — that's the next module. But notice: GitHub knows about your branch now.

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Branches are parallel timelines | Work without fear of breaking `main` |
| `main` is the source of truth | Keep it stable; don't commit directly |
| Branch often, merge small | Short-lived branches are easier to review |
| Merging combines timelines | Usually automatic, sometimes needs human judgment |
| Conflicts happen | They're normal, not scary — ask for help the first time |

---

## Reflection Questions

1. Why is it important that branches are "cheap" (fast to create and delete)?

2. A teammate has been working on a branch for three weeks without merging. What problems might arise?

3. If you're working alone on a project, do you still need branches? Why or why not?

---

*Next module: Pull Requests — the collaboration ceremony that turns your branch into shared reality.*
