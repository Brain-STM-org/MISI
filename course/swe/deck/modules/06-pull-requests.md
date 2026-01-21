---
theme: default
title: "Module 06: Pull Requests"
info: |
  SWE Fundamentals - MISI
  Module 06: Pull Requests
drawings:
  persist: false
transition: slide-left
---

# Module 06

## Pull Requests

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Pull Requests are where branches become collaboration.
This is how professional teams work together.

Estimated time: 30 minutes
Delivery: Day 2 Bootcamp
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The Pull Request is not a gate to pass through. It's a conversation to have."
</div>

<div class="mt-4 text-gray-500">
— A wise senior engineer
</div>

<!--
PRs are often seen as obstacles. Reframe them as collaboration.
The conversation aspect is what makes them valuable.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** why Pull Requests exist and what they enable
2. **Create** a Pull Request from your branch
3. **Write** a clear description that helps reviewers
4. **Review** someone else's code constructively
5. **Respond** to feedback and update your PR
6. **Merge** your approved changes

</v-clicks>

<!--
This module covers both sides: creating PRs and reviewing them.
Students will practice both roles.
-->

---
layout: section
---

# What is a Pull Request?

More than a merge button

---

# Pull Request Definition

A **Pull Request** (PR) is a formal proposal to merge your branch into another branch (usually `main`).

<v-click>

It's called a "pull request" because you're asking the project to *pull* your changes in.

<div class="mt-4 text-gray-400">
(Some platforms call it a "Merge Request" — same concept.)
</div>

</v-click>

<!--
The name comes from the action: please pull my changes into the main codebase.
GitLab uses "Merge Request" which is arguably clearer.
-->

---

# A PR is More Than Merging

A PR is:

<v-clicks>

- **A conversation space** for discussing the changes
- **A review checkpoint** where others examine your code
- **A historical record** of why changes were made
- **An integration point** where automated checks run

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Every significant change in professional software goes through a PR.
</div>

</v-click>

<!--
PRs serve multiple purposes beyond just merging code.
They're documentation, review, and discussion all in one.
-->

---
layout: section
---

# The Workflow

From branch to merge

---

# The PR Workflow

```
1. Create branch  →  2. Make commits  →  3. Push branch
                                               │
                                               ▼
4. Open PR on GitHub  ←  5. Review & discuss  ←
        │
        ▼
6. Merge & delete
```

<v-click>

<div class="mt-4 text-gray-400">
Let's walk through each step.
</div>

</v-click>

<!--
This visual shows the complete flow.
Students already know steps 1-3 from previous modules.
-->

---

# Steps 1-3: Prepare Your Changes

You've already learned this:

```bash
# Create a branch
git checkout -b add-search-feature

# Make changes and commit
git add .
git commit -m "Add search input field"
git commit -m "Implement search logic"

# Push your branch to GitHub
git push -u origin add-search-feature
```

<v-click>

The `-u` flag sets up tracking so future pushes are simpler.

</v-click>

<!--
This is review from previous modules.
The -u flag is new — it simplifies future pushes.
-->

---

# Step 4: Open a Pull Request

After you push, GitHub notices and offers a helpful banner:

```
🟢 add-search-feature had recent pushes
                        [Compare & pull request]
```

<v-click>

Click that button.

Or: Repository → "Pull requests" → "New pull request"

</v-click>

<!--
GitHub makes it easy to create PRs from recent pushes.
The banner appears prominently after pushing a branch.
-->

---

# The PR Form

You'll see a form with two key parts:

<v-clicks>

**Title**: A one-line summary of what this PR does.

| Good Titles | Bad Titles |
|-------------|------------|
| Add search functionality to products page | Update |
| Fix crash when user enters empty email | Bug fix |
| Refactor authentication to use JWT tokens | Changes |

**Description**: Where you communicate the full context.

</v-clicks>

<!--
Titles should be clear and specific.
Bad titles force reviewers to guess what's happening.
-->

---
layout: section
---

# Writing Good Descriptions

Communicate to your reviewers

---

# A Good Description Answers...

<v-clicks>

1. **What** does this change do?
2. **Why** is this change needed?
3. **How** can someone test/verify it works?
4. **Anything** reviewers should know?

</v-clicks>

<!--
These four questions cover what reviewers need.
Answering them upfront saves back-and-forth.
-->

---

# Description Template

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

- Uses existing product data structure
- Search is case-insensitive
```

<!--
This template works for most PRs.
Students can adapt it to their needs.
-->

---

# Why Bother?

Your reviewer isn't in your head. They're seeing these changes for the first time.

<v-clicks>

A good description:

- **Saves them time** — they don't have to guess your intent
- **Gets you faster reviews** — confused reviewers procrastinate
- **Creates documentation** — future-you will read this
- **Demonstrates professionalism** — this is what industry expects

</v-clicks>

<!--
Descriptions are an investment that pays off.
Good descriptions lead to faster, better reviews.
-->

---
layout: section
---

# Code Review

Others examine your changes

---

# What Reviewers Look For

<v-clicks>

- **Correctness**: Does the code do what it claims?
- **Clarity**: Can I understand what's happening?
- **Consistency**: Does it match the project's patterns?
- **Completeness**: Are there edge cases missing?
- **Consequences**: Could this break something else?

</v-clicks>

<!--
The five C's of code review.
Reviewers are looking for problems you might have missed.
-->

---

# The Diff is Central

Remember diffs? This is where they matter most.

<v-click>

Reviewers read the diff line by line:

- "Why did this line change?"
- "What's this new function doing?"
- "This looks like it might break if X happens..."

</v-click>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
Your commits tell a story. Clean commits with clear messages help reviewers understand your journey.
</div>

</v-click>

<!--
This connects to Module 03 (Understanding Diffs).
Good commit messages help reviewers follow the story.
-->

---

# Review Comments

Reviewers leave comments directly on lines of code:

```
📝 Reviewer on line 47:
   "Could this throw an exception if `user` is null?
    Might want to add a check."
```

<v-clicks>

Comments might be:
- **Questions**: Seeking to understand
- **Suggestions**: Proposing alternatives
- **Concerns**: Pointing out potential issues
- **Praise**: Acknowledging good work

</v-clicks>

<!--
Comments are the core of PR conversations.
They're attached to specific lines of code.
-->

---

# Responding to Feedback

When you receive comments:

<v-clicks>

1. **Read carefully** — understand what they're asking
2. **Assume good intent** — reviewers want to help
3. **Respond thoughtfully** — explain your reasoning or acknowledge
4. **Make changes if needed** — commit fixes, push to same branch
5. **Re-request review** — let them know you've addressed feedback

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
The PR updates automatically when you push new commits.
</div>

</v-click>

<!--
This is the feedback loop.
PRs are conversations, not one-way submissions.
-->

---

# Handling Disagreements

Sometimes you'll disagree with a reviewer. That's okay.

<v-click>

```
📝 Reviewer: "I'd use a different algorithm here for performance."

💬 You: "Good point, but I chose this one for readability since
        this runs rarely. Want me to add a comment explaining
        the tradeoff?"

📝 Reviewer: "That makes sense. A comment would help, thanks!"
```

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Professional disagreement is normal. Explain reasoning, stay open, find common ground.
</div>

</v-click>

<!--
Disagreements are healthy.
The key is explaining your reasoning and staying open.
-->

---
layout: section
---

# Being a Reviewer

The other side of code review

---

# Before You Start

<v-clicks>

- Read the PR description first
- Understand the **goal** before judging the implementation

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Context matters. Know what the PR is trying to achieve.
</div>

</v-click>

<!--
Start with the description, not the diff.
Understand intent before evaluating code.
-->

---

# While Reviewing

<v-clicks>

- **Be specific**: "Line 42 might crash if..." not "This is buggy"
- **Be constructive**: "Consider using X because..." not "This is wrong"
- **Ask questions**: "What happens if...?" invites discussion
- **Acknowledge effort**: "Nice approach to the caching problem"

</v-clicks>

<!--
Good review comments are specific, constructive, and kind.
They focus on the code, not the person.
-->

---

# The Tone Matrix

| Ineffective | Effective |
|-------------|-----------|
| "This is wrong" | "I think this might not handle the case where..." |
| "Why did you do this?" | "Help me understand the reasoning behind..." |
| "You should use X" | "Have you considered X? It might help because..." |
| "This is confusing" | "I had trouble following this part. Could we add a comment?" |

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
Code review is about the code, not the person.<br>
<strong>Be direct about issues, kind about delivery.</strong>
</div>

</v-click>

<!--
The left column attacks; the right column collaborates.
Same information, different impact.
-->

---

# Approving

When you're satisfied:

<v-clicks>

- Click **"Approve"** (or "LGTM" — Looks Good To Me)
- Optionally add a summary comment

If you have concerns:
- **"Request changes"** — blocks merge until addressed
- **"Comment"** — shares thoughts without blocking

</v-clicks>

<!--
Three review outcomes: approve, request changes, or comment.
Request changes is strong — use it for real issues.
-->

---
layout: section
---

# Merging

The finish line

---

# Merge Strategies

GitHub offers several options:

<v-click>

**Create a merge commit**: Preserves all commits, adds merge commit.

```
main:    ●───●───●─────────●  (merge commit)
              \           /
feature:       ●───●───●──┘
```

</v-click>

<v-click>

**Squash and merge**: Combines all commits into one.

```
main:    ●───●───●───●  (single commit)
```

</v-click>

<!--
Different strategies for different needs.
Ask your team's preference.
-->

---

# After Merging

<v-clicks>

1. **Delete the branch** — GitHub offers a button. Clean up.
2. **Pull the changes locally**:
   ```bash
   git checkout main
   git pull
   git branch -d add-search-feature
   ```
3. **Celebrate** — you shipped something!

</v-clicks>

<!--
Clean up after yourself.
Leftover branches clutter the repository.
-->

---
layout: section
---

# PRs with AI-Generated Code

Special considerations

---

# You Are Still Responsible

The AI wrote it, but you're submitting it.

<v-clicks>

You should:
- Understand what the code does
- Verify it works correctly
- Be able to explain it to reviewers

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
"The AI wrote it" is not an acceptable answer in code review.
</div>

</v-click>

<!--
This connects to the LLM track.
Ownership doesn't transfer to the AI.
-->

---

# Review Before Submitting

Before opening your PR, review the diff yourself:

<v-clicks>

- Did the AI change more than expected?
- Are there any obvious issues?
- Does it match the project's patterns?

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
You're the first reviewer. Catch problems before others do.
</div>

</v-click>

<!--
Self-review is especially important with AI code.
AI can make unexpected changes.
-->

---

# Disclose When Helpful

If the AI contributed significant code, mention it:

```markdown
## Notes

Used Claude to generate the initial search algorithm implementation.
I've verified the logic and adjusted the error handling for our use case.
```

<v-click>

<div class="mt-4 text-gray-400">
This isn't about blame — it's about transparency and context.
</div>

</v-click>

<!--
Disclosure helps reviewers understand the context.
It's professional transparency, not an excuse.
-->

---
layout: section
---

# Exercise

Your first Pull Request

---

# Exercise Part 1: Create

<div class="text-lg">

1. Make sure you have a branch with at least one commit
2. Push it to GitHub:
   ```bash
   git push -u origin your-branch-name
   ```
3. Go to GitHub and click "Compare & pull request"
4. Write a title and description following the template
5. Click "Create pull request"

</div>

<!--
Students create their first real PR.
They should follow the description template.
-->

---

# Exercise Part 2: Observe

<div class="text-lg">

1. Look at the **"Files changed"** tab — this is the diff
2. Look at the **"Commits"** tab — each commit in your branch
3. Notice the merge button (don't click yet if team repo)

</div>

<!--
Explore the PR interface.
Understand what's visible to reviewers.
-->

---

# Exercise Part 3: Review

<div class="text-lg">

If working with others:

1. Ask a teammate to review your PR
2. Respond to any comments
3. Review their PR in return
4. Practice the feedback loop

</div>

<!--
Pair up if possible.
Reviewing others' code is as important as writing your own.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| PRs are conversations | Engage, don't just click merge |
| Descriptions matter | Write for people not in your head |
| Review is collaborative | Help each other, don't gatekeep |
| Small PRs get faster reviews | Many small PRs > one massive PR |
| You own what you submit | AI-assisted or not, you're responsible |

<!--
These are the takeaways.
PRs are collaboration, not bureaucracy.
-->

---
layout: section
---

# Reflection

---

# Reflection Questions

<v-clicks>

1. Why might a team require PR reviews even for experienced developers?

2. You submitted a PR and a reviewer leaves ten comments. How do you feel? How *should* you feel?

3. What's the difference between reviewing code and judging a person?

</v-clicks>

<!--
Question 1: Second pair of eyes catches issues, shares knowledge
Question 2: Reframe as helpful feedback, not criticism
Question 3: Code can be wrong; people are not their code
-->

---
layout: center
class: text-center
---

# Module 06 Complete

You can now collaborate through Pull Requests.

<div class="mt-8 text-xl text-gray-400">
Next: Module 07 — Testing Fundamentals
</div>

<div class="mt-8">
  <a href="./07-testing" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 07 →
  </a>
</div>

<!--
Students now understand the full collaboration workflow:
branches → PRs → reviews → merge.

The next module introduces testing.
-->
