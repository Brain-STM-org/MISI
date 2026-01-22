---
theme: default
title: "Module 05: Reading AI-Generated Code"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 05: Reading AI-Generated Code
drawings:
  persist: false
transition: slide-left
---

# Module 05

## Reading AI-Generated Code

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
The critical skill that separates vibe engineering from vibe coding.
Systematic code reading process.

Estimated time: 25 minutes
Delivery: Day 1 of bootcamp

Development: 5-iteration dual-persona process
- Elena: 5-step reading process, quality dimensions
- Willisons: Red flags (over-engineering, outdated patterns, security), practical exercises
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
</div>

<div class="mt-4 text-gray-500">
— Martin Fowler
</div>

<!--
Readability matters — for humans, not just machines.
-->

---

# Why This Skill Matters

Uncomfortable truth: **most people don't read AI-generated code.**

<v-click>

They prompt → get code → copy-paste → run it.

If it works, they move on. If not, they prompt again.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
This is vibe coding. It's fast. It's also <strong>dangerous</strong>.
</div>

</v-click>

<!--
The problem with not reading code.
-->

---

# Reading Is Vibe Engineering

Reading AI-generated code is how you:

<v-clicks>

- Catch bugs before they ship
- Understand what you're adding to your project
- Learn from what AI produces
- Take responsibility for your output

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This module teaches <em>how</em> to read — not to become expert, but to be effective reviewer.
</div>

</v-click>

<!--
Why reading matters.
-->

---
layout: section
---

# The Reading Process

Five systematic steps

---

# The Five Steps

```
┌─────────────────────────────────────────────────────────────┐
│                    CODE READING PROCESS                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. OVERVIEW                                               │
│      └─ What is this supposed to do? How structured?        │
│                                                             │
│   2. TRACE                                                  │
│      └─ Follow main path with typical input                 │
│                                                             │
│   3. EDGE CASES                                             │
│      └─ Empty? Null? Huge? Negative? Wrong type?            │
│                                                             │
│   4. VERIFY CLAIMS                                          │
│      └─ Does code match comments/docstrings?                │
│                                                             │
│   5. QUALITY CHECK                                          │
│      └─ Readable? Maintainable? Efficient? Secure?          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

<!--
The systematic process.
-->

---

# Step 1: Overview

Before reading line-by-line, get the big picture:

<v-clicks>

- **What's the purpose?** What problem does this solve?
- **What's the structure?** How many functions/classes?
- **Inputs and outputs?** What goes in, what comes out?
- **Dependencies?** Any imports or external libraries?

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This takes 30 seconds and tells you what you're dealing with.
</div>

</v-click>

<!--
Overview step.
-->

---

# Step 2: Trace the Main Path

Walk through with typical input:

<div class="text-sm">

```python
def extract_email(text: str) -> Optional[str]:
    """Extract the first email address from text."""
    pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    match = re.search(pattern, text)
    return match.group(0) if match else None
```

</div>

<v-click>

**Trace with**: `"Contact us at support@example.com"`

1. Pattern assigned
2. `re.search` finds "support@example.com"
3. Returns `match.group(0)` → "support@example.com" ✓

</v-click>

<!--
Tracing step.
-->

---

# Step 3: Edge Cases

Think adversarially. What could go wrong?

| Category | Examples |
|----------|----------|
| **Empty input** | `""`, `[]`, `None` |
| **Boundary values** | 0, -1, max int |
| **Invalid input** | Wrong type, malformed |
| **Special characters** | Unicode, newlines |
| **Large input** | Performance with big data |

<!--
Edge case categories.
-->

---

# Testing Edge Cases

```python
# Empty input
extract_email("")  # Returns None ✓

# No email present
extract_email("No email here")  # Returns None ✓

# Weird but valid
extract_email("test@sub.domain.co.uk")  # Works ✓

# Multiple @ in text
extract_email("@@weird@@test@example.com@@")  # What happens?
```

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Testing reveals behavior that reading alone doesn't.
</div>

</v-click>

<!--
Edge case testing.
-->

---

# Step 4: Verify Claims

Does code actually do what comments claim?

| Claim | Reality |
|-------|---------|
| "Handles all edge cases" | Only handles some |
| "Returns None if not found" | Actually raises exception |
| "Validates input" | Only partial validation |
| "Thread-safe" | Not actually thread-safe |
| "Efficient" | O(n²) hidden inside |

<v-click>

<div class="mt-4 text-gray-400">
<strong>Comments lie; code doesn't</strong> (but code can be wrong).
</div>

</v-click>

<!--
Verifying claims.
-->

---

# Step 5: Quality Check

Beyond "does it work?" — is it *good* code?

<v-clicks>

**Readability**: Clear names? Easy to follow?

**Maintainability**: Someone else could modify? DRY?

**Efficiency**: Fast enough? Scales?

**Robustness**: Handles errors? Fails safely?

</v-clicks>

<!--
Quality dimensions.
-->

---
layout: section
---

# Red Flags

What to watch for

---

# 1. Over-Engineering

AI sometimes produces more complex code than needed:

<div class="text-sm">

```python
# AI might generate this:
def add_numbers(a, b):
    if not isinstance(a, (int, float)):
        raise TypeError(f"Expected number, got {type(a)}")
    if not isinstance(b, (int, float)):
        raise TypeError(f"Expected number, got {type(b)}")
    result = a + b
    return int(result) if isinstance(a, int) and isinstance(b, int) else float(result)

# When you needed:
def add_numbers(a, b):
    return a + b
```

</div>

<v-click>

<div class="mt-2 text-gray-400">
Ask: Is this complexity necessary for my use case?
</div>

</v-click>

<!--
Over-engineering red flag.
-->

---

# 2. Outdated Patterns

AI training data includes old code:

<v-clicks>

- Python 2 syntax in Python 3 code
- Deprecated library functions
- Old API patterns

</v-clicks>

<div class="text-sm">

```python
# Outdated:
print "Hello"  # Python 2

# Current:
print("Hello")  # Python 3
```

</div>

<!--
Outdated patterns red flag.
-->

---

# 3. Security Issues

AI doesn't automatically write secure code:

<div class="text-sm">

```python
# Dangerous: SQL injection vulnerability
query = f"SELECT * FROM users WHERE name = '{user_input}'"

# Safe: Parameterized query
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (user_input,))
```

</div>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
Always review AI code for security implications.
</div>

</v-click>

<!--
Security issues red flag.
-->

---

# 4. Hallucinated APIs

AI might use functions that don't exist:

```python
# AI might write:
result = string.remove_whitespace(text)  # Doesn't exist!

# Actual Python:
result = text.strip()  # or ''.join(text.split())
```

<v-click>

<div class="mt-4 text-gray-400">
Run the code! Hallucinated APIs will error immediately.
</div>

</v-click>

<!--
Hallucinated APIs red flag.
-->

---

# 5. Subtle Logic Errors

Code that looks right but isn't:

```python
def is_even(n):
    return n % 2 == 0

is_even(-3)    # False ✓
is_even(2.5)   # False (is that what you want?)
```

<v-click>

<div class="mt-4 text-gray-400">
The code "works" but may not match your expectations.
</div>

</v-click>

<!--
Subtle logic errors red flag.
-->

---
layout: section
---

# Reading Strategies

Practical techniques

---

# Strategy 1: Read Aloud

Translate code to English in your head:

```python
if len(items) > 0 and items[0] is not None:
```

<v-click>

"If the list has items AND the first item isn't None..."

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
This catches logic errors your eyes might skip.
</div>

</v-click>

<!--
Read aloud strategy.
-->

---

# Strategy 2: Rubber Duck

Explain the code to someone (or something) else:

<v-click>

*"This function takes a list and... wait, what happens if the list is empty?"*

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
The act of explaining reveals gaps in understanding.
</div>

</v-click>

<!--
Rubber duck strategy.
-->

---

# Strategy 3: Test-First

Before trusting code, write tests:

```python
# Don't just read — test
assert extract_email("test@example.com") == "test@example.com"
assert extract_email("no email") is None
assert extract_email("") is None
```

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
If you can't write tests, you don't understand the code well enough.
</div>

</v-click>

<!--
Test-first strategy.
-->

---

# Strategy 4: Diff Review

When AI modifies existing code, focus on changes:

```diff
- def process(data):
-     return data.strip()
+ def process(data):
+     if data is None:
+         return ""
+     return data.strip().lower()
```

<v-click>

<div class="mt-4 text-gray-400">
Ask: Why these changes? All correct? All wanted?
</div>

</v-click>

<!--
Diff review strategy.
-->

---

# Exercise: Spot the Bug

This code has a subtle bug. Find it:

```python
def calculate_average(numbers):
    """Calculate the average of a list of numbers."""
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)
```

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
<strong>Bug:</strong> Division by zero when list is empty!
</div>

</v-click>

<!--
Bug-finding exercise.
-->

---

# Exercise: Security Review

Find the security issue:

```python
def read_user_file(filename):
    """Read a file from the user's documents folder."""
    path = f"/home/user/documents/{filename}"
    with open(path, 'r') as f:
        return f.read()
```

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
<strong>Vulnerability:</strong> Path traversal! filename could be <code>../../../etc/passwd</code>
</div>

</v-click>

<!--
Security review exercise.
-->

---

# Code Review Checklist

<div class="text-sm">

**Overview**: [ ] I understand purpose, structure, inputs/outputs

**Trace**: [ ] I've walked through the main path mentally

**Edge Cases**: [ ] Empty? Null? Invalid? Large?

**Verification**: [ ] Code matches claims? No hallucinated APIs?

**Quality**: [ ] Readable? Maintainable? Secure?

</div>

<!--
Quick reference checklist.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Systematic reading | Overview → Trace → Edge Cases → Verify → Quality |
| Edge case thinking | Always ask "what if empty/null/huge/wrong?" |
| Verify claims | Comments can lie; test to confirm |
| Red flags | Over-engineering, outdated, security, hallucinated APIs |
| Test don't trust | If you can't test it, you don't understand it |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Think of code you've copy-pasted without reading. What risks did you take? Would you do it differently now?

2. "Comments lie; code doesn't." What does this mean? When might code also "lie"?

3. The path traversal exercise shows a security issue. Why might AI generate insecure code, and whose responsibility is it to catch this?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 05 Complete

You now have the skills to read and verify AI-generated code.

<div class="mt-8 text-xl text-gray-400">
Next: Module 06 — Prompting Fundamentals
</div>

<div class="mt-8">
  <a href="./06/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 06 →
  </a>
</div>

<!--
Code reading skills established.
Module 06 covers advanced prompting.
-->
