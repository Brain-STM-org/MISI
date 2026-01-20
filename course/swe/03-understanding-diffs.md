# Understanding Diffs

> *"Show me the diff."*
> — Every experienced developer, multiple times daily

## Learning Objectives

By the end of this module, you will be able to:

1. **Read** a diff and understand exactly what changed
2. **Interpret** the symbols and structure of unified diff format
3. **Explain** why diffs are essential for code review and collaboration
4. **Apply** diff reading to AI-assisted development workflows
5. **Use** diff tools to compare files and review changes

---

## The Central Skill

If you learn one technical skill from this program, let it be reading diffs.

A **diff** (short for "difference") shows exactly what changed between two versions of a file. Not vaguely. Not approximately. *Exactly* — line by line, character by character.

When you:
- Ask an AI to modify code → read the diff
- Review a teammate's changes → read the diff
- Debug why something broke → read the diff
- Understand a project's history → read the diffs

Everything in professional software development flows through diffs. Master this, and you'll never be lost in your own codebase.

---

## Anatomy of a Diff

Let's look at a real diff. Suppose we have a file `greeting.py` that originally contained:

```python
def greet(name):
    print("Hello, " + name)

greet("World")
```

And we modify it to:

```python
def greet(name, enthusiasm=1):
    exclamation = "!" * enthusiasm
    print(f"Hello, {name}{exclamation}")

greet("World", enthusiasm=3)
```

Here's the diff:

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

Let's decode every piece.

### The Header

```diff
--- a/greeting.py
+++ b/greeting.py
```

- `---` marks the **old version** (before)
- `+++` marks the **new version** (after)
- `a/` and `b/` are conventional prefixes meaning "version a" and "version b"

### The Hunk Header

```diff
@@ -1,4 +1,5 @@
```

This cryptic line is a **hunk header**. It tells you where in the file this change occurs:

- `-1,4` means: in the old file, this section starts at line 1 and spans 4 lines
- `+1,5` means: in the new file, this section starts at line 1 and spans 5 lines

The new version has more lines (5 vs 4) because we added content.

### The Change Lines

```diff
-def greet(name):
+def greet(name, enthusiasm=1):
```

- Lines starting with `-` were **removed** (existed in old, not in new)
- Lines starting with `+` were **added** (exist in new, not in old)
- Lines with no prefix are **unchanged** (context)

In this case, the function signature changed: we added an `enthusiasm` parameter.

### Reading the Full Change

Walking through:

| Line | Meaning |
|------|---------|
| `-def greet(name):` | Old function signature removed |
| `-    print("Hello, " + name)` | Old print statement removed |
| `+def greet(name, enthusiasm=1):` | New function signature added |
| `+    exclamation = "!" * enthusiasm` | New line added |
| `+    print(f"Hello, {name}{exclamation}")` | New print statement added |
| (blank line) | Unchanged context |
| `-greet("World")` | Old function call removed |
| `+greet("World", enthusiasm=3)` | New function call added |

**The story:** We enhanced the `greet` function to support variable enthusiasm levels.

---

## The Three Line Types

Memorize these:

| Symbol | Meaning | Color (typical) |
|--------|---------|-----------------|
| `-` | Removed (was in old, not in new) | Red |
| `+` | Added (in new, not in old) | Green |
| ` ` (space) | Unchanged context | Gray/default |

That's it. Three symbols, infinite utility.

---

## Why Diffs Matter for AI-Assisted Development

When you work with an AI coding assistant, it generates or modifies code. But how do you know what it actually did?

**The diff tells you.**

### Scenario: You ask AI to "fix the bug"

The AI returns new code. But did it:
- Fix only the bug? ✓
- Also refactor unrelated code? 🤔
- Change behavior you didn't intend? ⚠️
- Delete something important? ❌

Without reading the diff, you're accepting changes blindly. That's dangerous.

### Scenario: AI "improves" your code

You ask for a small improvement. The diff shows:
- 3 lines changed (expected)
- 47 lines added (wait, what?)
- 12 lines removed (hold on...)

The diff reveals scope creep. Now you can ask: "Why did you change all that? I only wanted X."

### The Professional Habit

Experienced developers never accept changes without reviewing the diff. This applies whether the changes come from:
- A human colleague
- An AI assistant
- Your past self
- A merge from another branch

**"Show me the diff"** is the universal checkpoint.

---

## Diffs in Practice

### Viewing Diffs in Git

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

### Viewing Diffs in GitHub

When you look at:
- A **commit**: You see the diff of what that commit changed
- A **pull request**: You see the combined diff of all commits
- **File history**: Each entry shows that version's diff

GitHub colors diffs: red for removals, green for additions. Very readable.

### Viewing Diffs in Editors

VS Code, GitHub Desktop, and most development tools show diffs visually:
- Side-by-side view: old on left, new on right
- Inline view: changes highlighted within the file
- Color coding: same red/green convention

---

## Common Diff Patterns

Learn to recognize these patterns at a glance:

### Pattern 1: Pure Addition

```diff
 def process_data(data):
     validate(data)
+    log_incoming(data)  # New logging
     result = transform(data)
     return result
```

One new line inserted. No removals. Low risk — nothing existing was touched.

### Pattern 2: Pure Removal

```diff
 def process_data(data):
-    print("DEBUG:", data)  # Remove debug statement
     validate(data)
     result = transform(data)
     return result
```

One line deleted. Ask: was this intentional? Is anything else depending on it?

### Pattern 3: Modification (Remove + Add)

```diff
-    timeout = 30  # seconds
+    timeout = 60  # seconds (increased for slow networks)
```

A value changed. The diff shows both what it was and what it became.

### Pattern 4: Rename/Move

```diff
-def calculate_total(items):
+def compute_order_total(items):
```

The function was renamed. Diffs show this as remove + add. Search for other occurrences — any callers need updating.

### Pattern 5: Large Restructuring

When you see:
- Many lines removed
- Many lines added
- Little overlap

This is a rewrite, not a small change. Review carefully. Consider whether the new version preserves the old behavior.

---

## Exercises

### Exercise 1: Read the Diff

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

<details>
<summary>Answer</summary>

The `debug` setting changed from `true` to `false`. This likely disables debug mode — appropriate for production, but verify this is intentional.

</details>

### Exercise 2: Spot the Risk

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

<details>
<summary>Answer</summary>

The confirmation check was removed. Users can now be deleted without confirmation. This might be intentional (batch processing) or a serious bug (accidental data loss). The diff surfaces this for discussion.

</details>

### Exercise 3: AI Review

You asked an AI to "add input validation." Here's the diff:

```diff
--- a/api.py
+++ b/api.py
@@ -1,9 +1,25 @@
+import re
+from typing import Optional
+
+def validate_email(email: str) -> bool:
+    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
+    return bool(re.match(pattern, email))
+
+def validate_name(name: str) -> bool:
+    return len(name) > 0 and len(name) <= 100
+
 def create_user(name, email):
+    if not validate_name(name):
+        raise ValueError("Invalid name")
+    if not validate_email(email):
+        raise ValueError("Invalid email")
     user = {"name": name, "email": email}
     save_to_database(user)
     return user
```

Is this what you expected?

<details>
<summary>Analysis</summary>

The AI added:
- Two new import statements
- Two new validation functions
- Two validation checks in `create_user`

This is reasonable for "add input validation." But consider:
- Is the email regex appropriate for your needs?
- Is 100 characters the right name limit?
- Should invalid input raise `ValueError` or return an error response?

The diff enables this conversation. You can accept, modify, or reject specific parts.

</details>

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Diffs show exact changes | No ambiguity about what happened |
| `-` = removed, `+` = added | Universal language across all tools |
| Context lines provide location | You know where in the file changes occurred |
| Review before accepting | Whether from humans or AI |
| Diffs are the unit of code review | Pull requests are just organized diffs |

---

## The Habit to Build

Every time code changes — whether you changed it, a teammate changed it, or an AI changed it:

1. **Look at the diff first**
2. **Understand each change**
3. **Then** decide whether to accept

This takes seconds and prevents hours of debugging mysteries.

---

## Interactive Demo

Open [diffs-demo.html](./diffs-demo.html) to explore diffs interactively:
- See changes highlighted visually
- Toggle between unified and side-by-side views
- Practice reading real-world diffs

---

*Next module: Your First Commit — making changes and recording them in history.*
