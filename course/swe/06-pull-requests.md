# Pull Requests

> *"The Pull Request is not a gate to pass through. It's a conversation to have."*
> — A wise senior engineer

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** why Pull Requests exist and what they enable
2. **Create** a Pull Request from your branch
3. **Write** a clear description that helps reviewers
4. **Review** someone else's code constructively
5. **Respond** to feedback and update your PR
6. **Merge** your approved changes

---

## What is a Pull Request?

A **Pull Request** (PR) is a formal proposal to merge your branch into another branch (usually `main`).

It's called a "pull request" because you're asking the project to *pull* your changes in. (Some platforms call it a "Merge Request" — same concept.)

But a PR is more than a merge button. It's:

- **A conversation space** for discussing the changes
- **A review checkpoint** where others examine your code
- **A historical record** of why changes were made
- **An integration point** where automated checks run

Every significant change in professional software goes through a PR. Even if you're working alone, PRs create useful checkpoints and documentation.

---

## The Pull Request Workflow

```
1. Create branch     ──▶  2. Make commits     ──▶  3. Push branch
        │                         │                       │
        ▼                         ▼                       ▼
   git checkout -b          git commit -m           git push -u origin
   feature-name             "Add feature"           feature-name
                                                          │
                                                          ▼
4. Open PR on GitHub  ◀──  5. Review & discuss  ◀──  6. Merge & delete
        │                         │                       │
        ▼                         ▼                       ▼
   "Compare & Pull        Comments, suggestions,    Merge button,
    Request" button       maybe more commits        branch cleanup
```

Let's walk through each step.

---

## Step 1-3: Prepare Your Changes

You've already learned this:

```bash
# Create a branch
git checkout -b add-search-feature

# Make changes and commit
git add .
git commit -m "Add search input field"
git commit -m "Implement search logic"
git commit -m "Add search results display"

# Push your branch to GitHub
git push -u origin add-search-feature
```

The `-u` flag sets up tracking so future pushes are simpler (`git push` alone will work).

---

## Step 4: Open a Pull Request

### On GitHub

After you push, GitHub notices and offers a helpful banner:

```
🟢 add-search-feature had recent pushes less than a minute ago
                                          [Compare & pull request]
```

Click that button. Or navigate to the repository and click "Pull requests" → "New pull request".

### The PR Form

You'll see a form with:

**Title**: A one-line summary of what this PR does.

| Good Titles | Bad Titles |
|-------------|------------|
| Add search functionality to products page | Update |
| Fix crash when user enters empty email | Bug fix |
| Refactor authentication to use JWT tokens | Changes |

**Description**: The most important part. This is where you communicate.

---

## Writing a Good PR Description

A good PR description answers:

1. **What** does this change do?
2. **Why** is this change needed?
3. **How** can someone test/verify it works?
4. **Anything** reviewers should know?

### Template

```markdown
## Summary

Brief description of what this PR does and why.

## Changes

- Added search input component
- Implemented fuzzy search algorithm
- Added unit tests for search logic

## How to Test

1. Start the application
2. Navigate to the products page
3. Type in the search box
4. Verify results filter correctly

## Notes

- This uses the existing product data structure
- Search is case-insensitive
- Performance may need optimization for large datasets
```

### Why Bother?

Your reviewer isn't in your head. They're seeing these changes for the first time. A good description:

- Saves them time (they don't have to guess your intent)
- Gets you faster reviews (confused reviewers procrastinate)
- Creates documentation (future-you will read this)
- Demonstrates professionalism (this is what the industry expects)

---

## Step 5: Code Review

Once your PR is open, it's time for **code review** — others examining your changes.

### What Reviewers Look For

- **Correctness**: Does the code do what it claims?
- **Clarity**: Can I understand what's happening?
- **Consistency**: Does it match the project's patterns?
- **Completeness**: Are there edge cases missing?
- **Consequences**: Could this break something else?

### The Diff is Central

Remember diffs? This is where they matter most.

Reviewers read the diff line by line:
- "Why did this line change?"
- "What's this new function doing?"
- "This looks like it might break if X happens..."

Your commits tell a story. Clean commits with clear messages help reviewers understand your journey.

### Review Comments

Reviewers leave comments directly on lines of code:

```
📝 Reviewer on line 47:
   "Could this throw an exception if `user` is null?
    Might want to add a check."
```

Comments might be:
- **Questions**: Seeking to understand
- **Suggestions**: Proposing alternatives
- **Concerns**: Pointing out potential issues
- **Praise**: Acknowledging good work (yes, this happens!)

### Responding to Feedback

When you receive comments:

1. **Read carefully** — understand what they're asking
2. **Assume good intent** — reviewers want to help
3. **Respond thoughtfully** — explain your reasoning or acknowledge the point
4. **Make changes if needed** — commit fixes, push to the same branch
5. **Re-request review** — let them know you've addressed their feedback

The PR updates automatically when you push new commits.

### Disagreements

Sometimes you'll disagree with a reviewer. That's okay. The PR is a conversation:

```
📝 Reviewer: "I'd use a different algorithm here for performance."

💬 You: "Good point, but I chose this one for readability since
        this runs rarely. Want me to add a comment explaining
        the tradeoff?"

📝 Reviewer: "That makes sense. A comment would help, thanks!"
```

Professional disagreement is normal. Explain your reasoning, stay open to other perspectives, and find common ground.

---

## Reviewing Someone Else's Code

You'll review others' code too. Here's how to do it well:

### Before You Start

- Read the PR description first
- Understand the goal before judging the implementation

### While Reviewing

- **Be specific**: "Line 42 might crash if..." not "This is buggy"
- **Be constructive**: "Consider using X because..." not "This is wrong"
- **Ask questions**: "What happens if...?" invites discussion
- **Acknowledge effort**: "Nice approach to the caching problem"

### The Tone Matrix

| Ineffective | Effective |
|-------------|-----------|
| "This is wrong" | "I think this might not handle the case where..." |
| "Why did you do this?" | "Help me understand the reasoning behind..." |
| "You should use X" | "Have you considered X? It might help because..." |
| "This is confusing" | "I had trouble following this part. Could we add a comment?" |

Code review is about the code, not the person. Be direct about issues, kind about delivery.

### Approving

When you're satisfied:
- Click "Approve" (or "LGTM" — Looks Good To Me)
- Optionally add a summary comment

If you have concerns:
- "Request changes" — blocks merge until addressed
- "Comment" — shares thoughts without blocking

---

## Step 6: Merge and Clean Up

When approved, it's time to merge.

### Merge Strategies

GitHub offers several merge options:

**Create a merge commit**: Preserves all commits, adds a merge commit.
```
main:    ●───●───●─────────●  (merge commit)
              \           /
feature:       ●───●───●──┘
```

**Squash and merge**: Combines all your commits into one.
```
main:    ●───●───●───●  (single commit with all your changes)
```

**Rebase and merge**: Replays your commits onto main (linear history).
```
main:    ●───●───●───●───●───●  (your commits added linearly)
```

For most PRs, "Create a merge commit" or "Squash and merge" work well. Ask your team's preference.

### After Merging

1. **Delete the branch** — GitHub offers a button. Clean up after yourself.
2. **Pull the changes locally**:
   ```bash
   git checkout main
   git pull
   git branch -d add-search-feature  # Delete local branch
   ```
3. **Celebrate** — you shipped something!

---

## Pull Requests with AI-Generated Code

When your PR contains AI-generated code, additional considerations apply:

### You Are Still Responsible

The AI wrote it, but you're submitting it. You should:
- Understand what the code does
- Verify it works correctly
- Be able to explain it to reviewers

### Review the Diff Before Creating the PR

Before opening your PR, review the diff yourself:
- Did the AI change more than expected?
- Are there any obvious issues?
- Does it match the project's patterns?

### Disclose When Helpful

If the AI contributed significant code, mention it:

```markdown
## Notes

Used Claude to generate the initial search algorithm implementation.
I've verified the logic and adjusted the error handling for our use case.
```

This isn't about blame — it's about transparency and context for reviewers.

---

## Exercise: Your First Pull Request

Let's do this for real.

### Part 1: Create

1. Make sure you have a branch with at least one commit (from the branches module)
2. Push it to GitHub if you haven't:
   ```bash
   git push -u origin your-branch-name
   ```
3. Go to GitHub and click "Compare & pull request"
4. Write a title and description following the template above
5. Click "Create pull request"

### Part 2: Observe

1. Look at the "Files changed" tab — this is the diff
2. Look at the "Commits" tab — each commit in your branch
3. Notice the merge button (don't click yet if this is a team repo)

### Part 3: (If Working With Others)

1. Ask a teammate to review your PR
2. Respond to any comments
3. Review their PR in return
4. Practice the feedback loop

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| PRs are conversations | Engage, don't just click merge |
| Descriptions matter | Write for people who weren't in your head |
| Review is collaborative | Help each other, don't gatekeep |
| Small PRs get faster reviews | Many small PRs > one massive PR |
| You own what you submit | AI-assisted or not, you're responsible |

---

## Reflection Questions

1. Why might a team require PR reviews even for experienced developers?

2. You submitted a PR and a reviewer leaves ten comments. How do you feel? How *should* you feel?

3. What's the difference between reviewing code and judging a person?

---

*Next module: Testing Fundamentals — why tests matter and how to think about them.*
