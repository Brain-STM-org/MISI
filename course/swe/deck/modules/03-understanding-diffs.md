---
theme: default
title: "Module 03: Understanding Diffs"
info: |
  SWE Fundamentals - MISI
  Module 03: Understanding Diffs
drawings:
  persist: false
transition: slide-left
---

# Module 03

## Understanding Diffs

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
This is arguably the most important technical skill in the program.
If students learn one thing well, it should be reading diffs.

Diffs underpin everything: code review, version control, AI workflows.

Estimated time: 25 minutes
Delivery: Day 1 Bootcamp
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Show me the diff."
</div>

<div class="mt-4 text-gray-500">
— Every experienced developer, multiple times daily
</div>

<!--
This phrase is ubiquitous in software development.
It's the first thing professionals ask when reviewing any change.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Read** a diff and understand exactly what changed
2. **Interpret** the symbols and structure of unified diff format
3. **Explain** why diffs are essential for code review and collaboration
4. **Apply** diff reading to AI-assisted development workflows
5. **Use** diff tools to compare files and review changes

</v-clicks>

<!--
Objective 4 is key for MISI — AI assistants generate code changes.
Knowing what changed is how you stay in control.
-->

---
layout: section
---

# The Central Skill

If you learn one thing...

---

# Diffs Show Exactly What Changed

A **diff** (short for "difference") shows exactly what changed between two versions of a file.

<v-clicks>

Not vaguely. Not approximately. **Exactly** — line by line, character by character.

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded">
Everything in professional software development flows through diffs.<br>
<strong>Master this, and you'll never be lost in your own codebase.</strong>
</div>

</v-click>

<!--
Emphasize the precision. Diffs don't summarize — they show truth.
This is different from how students might think about "changes."
-->

---

# When You Use Diffs

<v-clicks>

- Ask an AI to modify code → **read the diff**
- Review a teammate's changes → **read the diff**
- Debug why something broke → **read the diff**
- Understand a project's history → **read the diffs**

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
The pattern is consistent: changes flow through diffs.
</div>

</v-click>

<!--
This repetition is intentional.
Students should internalize that diffs are the universal lens.
-->

---
layout: section
---

# Anatomy of a Diff

Reading the structure

---

# A Simple Change

Original file `greeting.py`:

```python
def greet(name):
    print("Hello, " + name)

greet("World")
```

<v-click>

Modified version:

```python
def greet(name, enthusiasm=1):
    exclamation = "!" * enthusiasm
    print(f"Hello, {name}{exclamation}")

greet("World", enthusiasm=3)
```

</v-click>

<!--
Walk through what changed in plain English:
- Added an enthusiasm parameter
- Changed how the greeting is built
- Updated the function call

Now let's see how a diff represents this.
-->

---

# The Diff

```diff
--- a/greeting.py
+++ b/greeting.py
@@ -1,4 +1,5 @@
-def greet(name):
-    print("Hello, " + name)
+def greet(name, enthusiasm=1):
+    exclamation = "!" * enthusiasm
+    print(f"Hello, {name}{exclamation}")

-greet("World")
+greet("World", enthusiasm=3)
```

<v-click>

<div class="mt-4 text-gray-400">
Let's decode every piece.
</div>

</v-click>

<!--
This is the complete diff. Students may find it intimidating at first.
We'll break it down piece by piece on the next slides.
-->

---

# The Header

```diff
--- a/greeting.py
+++ b/greeting.py
```

<v-clicks>

- `---` marks the **old version** (before)
- `+++` marks the **new version** (after)
- `a/` and `b/` are conventional prefixes ("version a" and "version b")

</v-clicks>

<!--
The header tells you which file and which direction.
a = old, b = new. This convention is universal.
-->

---

# The Hunk Header

```diff
@@ -1,4 +1,5 @@
```

This cryptic line is a **hunk header**. It tells you where in the file this change occurs.

<v-clicks>

- `-1,4` means: in the old file, starts at line 1, spans 4 lines
- `+1,5` means: in the new file, starts at line 1, spans 5 lines

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
The new version has more lines (5 vs 4) because we added content.
</div>

</v-click>

<!--
Hunk headers help locate changes in large files.
Students can usually ignore the numbers and focus on the content.
-->

---

# The Change Lines

```diff
-def greet(name):
+def greet(name, enthusiasm=1):
```

<v-clicks>

- Lines starting with `-` were **removed** (existed in old, not in new)
- Lines starting with `+` were **added** (exist in new, not in old)
- Lines with no prefix are **unchanged** (context)

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
In this case, the function signature changed: we added an <code>enthusiasm</code> parameter.
</div>

</v-click>

<!--
This is the core of diff reading.
Three symbols: minus, plus, space. That's the whole language.
-->

---

# The Three Line Types

<div class="text-2xl mt-8">
Memorize these:
</div>

| Symbol | Meaning | Color (typical) |
|--------|---------|-----------------|
| `-` | Removed (was in old, not in new) | Red |
| `+` | Added (in new, not in old) | Green |
| ` ` (space) | Unchanged context | Gray |

<v-click>

<div class="mt-8 p-4 bg-green-900 rounded text-xl">
Three symbols, infinite utility.
</div>

</v-click>

<!--
This is the most important slide in the module.
Students who remember this can read any diff.
-->

---

# Reading the Full Change

| Line | Meaning |
|------|---------|
| `-def greet(name):` | Old function signature removed |
| `+def greet(name, enthusiasm=1):` | New function signature added |
| `+    exclamation = "!" * enthusiasm` | New line added |
| `-    print("Hello, " + name)` | Old print removed |
| `+    print(f"Hello, {name}{exclamation}")` | New print added |
| `-greet("World")` | Old function call removed |
| `+greet("World", enthusiasm=3)` | New function call added |

<v-click>

**The story:** We enhanced the `greet` function to support variable enthusiasm levels.

</v-click>

<!--
Walk through line by line.
The diff tells a story — every change has meaning.
-->

---
layout: section
---

# Diffs and AI

Why this matters now

---

# AI-Assisted Development

When you work with an AI coding assistant, it generates or modifies code.

<v-click>

<div class="text-2xl mt-8">
But how do you know what it actually did?
</div>

</v-click>

<v-click>

<div class="text-2xl mt-4 text-green-400">
The diff tells you.
</div>

</v-click>

<!--
This connects diffs directly to LLM workflows.
Students will use AI to write code — diffs keep them informed.
-->

---

# Scenario: "Fix the Bug"

You ask AI to fix a bug. It returns new code. But did it:

<v-clicks>

- Fix only the bug? ✓
- Also refactor unrelated code? 🤔
- Change behavior you didn't intend? ⚠️
- Delete something important? ❌

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
Without reading the diff, you're accepting changes blindly. That's dangerous.
</div>

</v-click>

<!--
Students need to understand that AI doesn't always do what you expect.
The diff is the checkpoint for verifying intent.
-->

---

# Scenario: "Improve My Code"

You ask for a small improvement. The diff shows:

<v-clicks>

- 3 lines changed (expected)
- 47 lines added (wait, what?)
- 12 lines removed (hold on...)

</v-clicks>

<v-click>

<div class="mt-8 text-gray-400">
The diff reveals scope creep.<br>
Now you can ask: <em>"Why did you change all that? I only wanted X."</em>
</div>

</v-click>

<!--
Scope creep is common with AI assistants.
They sometimes "improve" more than asked.
The diff makes this visible and discussable.
-->

---

# The Professional Habit

Experienced developers **never** accept changes without reviewing the diff.

<v-clicks>

This applies whether changes come from:

- A human colleague
- An AI assistant
- Your past self
- A merge from another branch

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-purple-900 rounded text-xl">
<strong>"Show me the diff"</strong> is the universal checkpoint.
</div>

</v-click>

<!--
This habit should become automatic.
Changes → diff review → then decide.
-->

---
layout: section
---

# Diffs in Practice

Using your tools

---

# Viewing Diffs in Git

After making changes to a file:

```bash
# See what changed (unstaged changes)
git diff

# See what's staged for commit
git diff --staged

# Compare two commits
git diff abc123 def456

# See changes in a specific file
git diff path/to/file.py
```

<!--
These commands will become familiar through practice.
Students don't need to memorize — they'll learn by using.
-->

---

# Viewing Diffs in GitHub

<v-clicks>

When you look at:

- A **commit**: You see the diff of what that commit changed
- A **pull request**: You see the combined diff of all commits
- **File history**: Each entry shows that version's diff

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
GitHub colors diffs: <span class="text-red-400">red</span> for removals, <span class="text-green-400">green</span> for additions.
</div>

</v-click>

<!--
GitHub's visual diff viewer is excellent.
Students will spend a lot of time here.
-->

---

# Viewing Diffs in Editors

VS Code, GitHub Desktop, and most development tools show diffs visually:

<v-clicks>

- **Side-by-side view**: old on left, new on right
- **Inline view**: changes highlighted within the file
- **Color coding**: same red/green convention

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Choose whichever view helps you understand the change.
</div>

</v-click>

<!--
Different views suit different changes.
Large refactors work better side-by-side.
Small changes work well inline.
-->

---
layout: section
---

# Common Patterns

Recognize these at a glance

---

# Pattern 1: Pure Addition

```diff
 def process_data(data):
     validate(data)
+    log_incoming(data)  # New logging
     result = transform(data)
     return result
```

<v-click>

One new line inserted. No removals.

**Low risk** — nothing existing was touched.

</v-click>

<!--
Pure additions are usually safe.
Review that the new line makes sense in context.
-->

---

# Pattern 2: Pure Removal

```diff
 def process_data(data):
-    print("DEBUG:", data)  # Remove debug statement
     validate(data)
     result = transform(data)
     return result
```

<v-click>

One line deleted.

**Ask**: Was this intentional? Is anything depending on it?

</v-click>

<!--
Deletions deserve scrutiny.
Debug statements are usually safe to remove.
Other deletions might break things.
-->

---

# Pattern 3: Modification

```diff
-    timeout = 30  # seconds
+    timeout = 60  # seconds (increased for slow networks)
```

<v-click>

A value changed.

The diff shows both **what it was** and **what it became**.

</v-click>

<!--
Modifications are the most common pattern.
The before/after comparison makes reviewing easy.
-->

---

# Pattern 4: Rename/Move

```diff
-def calculate_total(items):
+def compute_order_total(items):
```

<v-click>

The function was renamed.

Diffs show this as remove + add.

**Important**: Search for other occurrences — callers need updating.

</v-click>

<!--
Renames can break things if callers aren't updated.
Most tools catch this, but it's worth checking.
-->

---

# Pattern 5: Large Restructuring

When you see:

<v-clicks>

- Many lines removed
- Many lines added
- Little overlap

</v-clicks>

<v-click>

This is a **rewrite**, not a small change.

**Review carefully.** Does the new version preserve the old behavior?

</v-click>

<!--
Large diffs require more careful review.
Consider asking the author (human or AI) to explain the changes.
-->

---
layout: section
---

# Exercises

Practice reading diffs

---

# Exercise 1: Read the Diff

What changed?

```diff
--- a/config.json
+++ b/config.json
@@ -2,7 +2,7 @@
   "app_name": "MyApp",
   "version": "1.0.0",
-  "debug": true,
+  "debug": false,
   "max_connections": 100
 }
```

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
<strong>Answer:</strong> The <code>debug</code> setting changed from <code>true</code> to <code>false</code>.<br>
This likely disables debug mode — appropriate for production.
</div>

</v-click>

<!--
Simple exercise to verify understanding.
Students should recognize this as a single value change.
-->

---

# Exercise 2: Spot the Risk

What might concern you about this diff?

```diff
--- a/database.py
+++ b/database.py
@@ -15,8 +15,7 @@
 def delete_user(user_id):
-    if confirm_deletion(user_id):
-        db.execute("DELETE FROM users WHERE id = ?", user_id)
+    db.execute("DELETE FROM users WHERE id = ?", user_id)
     log_action("user_deleted", user_id)
```

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
<strong>Risk:</strong> The confirmation check was removed!<br>
Users can now be deleted without confirmation.<br>
Intentional (batch processing) or a serious bug (data loss)?
</div>

</v-click>

<!--
This exercise teaches critical thinking.
Not all changes are good — diffs help you catch problems.
-->

---

# Exercise 3: AI Review

You asked AI to "add input validation." Here's the diff:

```diff {all|1-2|4-9|11-15}
+import re
+from typing import Optional

+def validate_email(email: str) -> bool:
+    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
+    return bool(re.match(pattern, email))
+
+def validate_name(name: str) -> bool:
+    return len(name) > 0 and len(name) <= 100

 def create_user(name, email):
+    if not validate_name(name):
+        raise ValueError("Invalid name")
+    if not validate_email(email):
+        raise ValueError("Invalid email")
     user = {"name": name, "email": email}
```

<!--
Use the code highlighting to walk through the diff piece by piece.
This is a realistic AI-generated change.
-->

---

# Exercise 3: Analysis

The AI added:

<v-clicks>

- Two new import statements
- Two new validation functions
- Two validation checks in `create_user`

</v-clicks>

<v-click>

<div class="mt-4">
Reasonable for "add input validation." But consider:

- Is the email regex appropriate?
- Is 100 characters the right name limit?
- Should invalid input raise `ValueError` or return an error response?

</div>

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
The diff enables this conversation. Accept, modify, or reject specific parts.
</div>

</v-click>

<!--
This shows how to critically evaluate AI-generated code.
The diff makes discussion possible.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Diffs show exact changes | No ambiguity about what happened |
| `-` = removed, `+` = added | Universal language across all tools |
| Context lines provide location | You know where in the file changes occurred |
| Review before accepting | Whether from humans or AI |
| Diffs are the unit of code review | Pull requests are just organized diffs |

<!--
These are the takeaways.
The last point previews Module 06 (Pull Requests).
-->

---

# The Habit to Build

Every time code changes — whether you changed it, a teammate changed it, or an AI changed it:

<v-clicks>

1. **Look at the diff first**
2. **Understand each change**
3. **Then** decide whether to accept

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-green-900 rounded text-lg">
This takes seconds and prevents hours of debugging mysteries.
</div>

</v-click>

<!--
This is the behavior we want to instill.
Diff review should become automatic.
-->

---

# Interactive Demo

<div class="text-xl mt-8">

Open the interactive demo to practice:

</div>

<v-clicks>

- See changes highlighted visually
- Toggle between unified and side-by-side views
- Practice reading real-world diffs

</v-clicks>

<v-click>

<div class="mt-8">
  <a href="../diffs-demo.html" target="_blank" class="px-4 py-2 bg-blue-600 text-white rounded">
    Open Diffs Demo →
  </a>
</div>

</v-click>

<!--
The demo opens in a separate window.
Students can experiment while the slides continue.
-->

---
layout: center
class: text-center
---

# Module 03 Complete

You can now read diffs — the universal language of code changes.

<div class="mt-8 text-xl text-gray-400">
Next: Module 04 — Your First Commit
</div>

<div class="mt-8">
  <a href="./04-first-commit" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 04 →
  </a>
</div>

<!--
Students now have the skill to review any code change.
This will be used constantly going forward.
-->
