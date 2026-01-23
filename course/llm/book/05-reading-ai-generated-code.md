# Reading AI-Generated Code

> *"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."*
> — Martin Fowler

## Learning Objectives

By the end of this module, you will be able to:

1. **Read** AI-generated code systematically, not just skim it
2. **Identify** common patterns and potential issues in generated code
3. **Verify** that code does what it claims to do
4. **Assess** code quality beyond "does it run?"
5. **Develop** the critical eye that separates vibe engineering from vibe coding

---

## Why This Skill Matters

Here's an uncomfortable truth: **most people don't read AI-generated code.**

They prompt, they get code, they copy-paste, they run it. If it works, they move on. If it doesn't, they prompt again.

This is vibe coding. It's fast. It's also dangerous.

Reading AI-generated code is the foundational skill of vibe engineering. It's how you:
- Catch bugs before they ship
- Understand what you're putting in your project
- Learn from what the AI produces
- Take responsibility for your output

This module teaches you *how* to read code — not to become an expert programmer, but to be an effective reviewer of AI output.

---

## The Reading Process

Don't just glance at code. Follow a systematic process:

```
┌─────────────────────────────────────────────────────────────┐
│                    CODE READING PROCESS                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. OVERVIEW                                               │
│      └─ What is this code supposed to do?                   │
│      └─ How is it structured? (functions, classes, flow)    │
│                                                             │
│   2. TRACE                                                  │
│      └─ Follow the main path through the code               │
│      └─ What happens with typical input?                    │
│                                                             │
│   3. EDGE CASES                                             │
│      └─ What happens with unusual input?                    │
│      └─ Empty? Null? Huge? Negative? Wrong type?            │
│                                                             │
│   4. VERIFY CLAIMS                                          │
│      └─ Does the code match the comments/docstrings?        │
│      └─ Does it do what was asked?                          │
│                                                             │
│   5. QUALITY CHECK                                          │
│      └─ Is it readable? Maintainable? Efficient enough?     │
│      └─ Any obvious improvements?                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Let's practice each step.

---

## Step 1: Overview

Before reading line-by-line, get the big picture.

### Questions to Ask

- **What's the purpose?** What problem does this code solve?
- **What's the structure?** How many functions/classes? What's the flow?
- **What are the inputs and outputs?** What goes in? What comes out?
- **What dependencies are used?** Any imports or external libraries?

### Example: Getting the Overview

```python
import re
from typing import Optional

def extract_email(text: str) -> Optional[str]:
    """Extract the first email address from text."""
    pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    match = re.search(pattern, text)
    return match.group(0) if match else None

def extract_all_emails(text: str) -> list[str]:
    """Extract all email addresses from text."""
    pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
    return re.findall(pattern, text)
```

**Overview**:
- Purpose: Extract email addresses from text
- Structure: Two functions — one for first email, one for all emails
- Inputs: String of text
- Outputs: Single email (or None) / List of emails
- Dependencies: `re` (regex), `typing` (type hints)

This takes 30 seconds and tells you what you're dealing with.

---

## Step 2: Trace the Main Path

Walk through the code with typical input.

### Mental Execution

Pick a realistic input and trace what happens:

```python
text = "Contact us at support@example.com or sales@example.com"
```

**Tracing `extract_email(text)`**:
1. `pattern` is assigned the regex
2. `re.search(pattern, text)` looks for first match
3. Finds "support@example.com"
4. Returns `match.group(0)` → "support@example.com"

**Tracing `extract_all_emails(text)`**:
1. Same pattern
2. `re.findall(pattern, text)` finds all matches
3. Returns `["support@example.com", "sales@example.com"]`

The code does what it claims for normal input. ✓

---

## Step 3: Edge Cases

Now think adversarially. What could go wrong?

### Common Edge Cases to Check

| Category | Examples |
|----------|----------|
| **Empty input** | `""`, `[]`, `None` |
| **Boundary values** | 0, -1, max int, empty string |
| **Invalid input** | Wrong type, malformed data |
| **Special characters** | Unicode, newlines, quotes |
| **Large input** | Performance with big data |
| **Missing data** | `None`, missing keys, empty fields |

### Testing Our Example

```python
# Empty input
extract_email("")  # Returns None ✓

# No email present
extract_email("No email here")  # Returns None ✓

# Weird but valid email
extract_email("test@sub.domain.co.uk")  # Returns it ✓

# Email at start/end
extract_email("start@test.com is first")  # Returns "start@test.com" ✓

# Multiple @ symbols in text
extract_email("@@weird@@test@example.com@@")  # What happens?
```

That last one is interesting — the regex might match unexpected things. Testing reveals behavior that reading alone doesn't.

---

## Step 4: Verify Claims

Does the code actually do what comments/docstrings claim?

### Common Mismatches

| Claim | Reality |
|-------|---------|
| "Handles all edge cases" | Only handles some |
| "Returns None if not found" | Actually raises exception |
| "Validates input" | Only partial validation |
| "Thread-safe" | Not actually thread-safe |
| "Efficient" | O(n²) hidden inside |

### Checking Our Example

The docstring says "Extract the first email address from text."

Does it?
- ✓ It extracts an email
- ✓ It returns the first one (due to `re.search`)
- ✓ Returns None if not found

Claims verified. But notice: the docstring doesn't say what counts as a "valid" email. The regex defines that implicitly. Is that regex correct for your needs?

---

## Step 5: Quality Check

Beyond "does it work?" — is it *good* code?

### Quality Dimensions

**Readability**
- Are variable names clear?
- Is the logic easy to follow?
- Are there helpful comments (where needed)?

**Maintainability**
- Could someone else modify this?
- Is it DRY (Don't Repeat Yourself)?
- Are there magic numbers or hardcoded values?

**Efficiency**
- Is it fast enough for expected use?
- Any obvious performance issues?
- Does it scale?

**Robustness**
- Does it handle errors gracefully?
- Are edge cases covered?
- Does it fail safely?

### Quality Issues in Our Example

Looking more critically:

```python
# Issue 1: Duplicated regex pattern
pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
# This appears in BOTH functions — should be a constant

# Issue 2: Regex might be too permissive or restrictive
# Does it handle new TLDs? International characters?

# Issue 3: No input validation
# What if text is None? (Would crash)
```

These aren't bugs — the code works. But they're quality issues worth noting, especially if this code will be maintained.

---

## Red Flags in AI-Generated Code

Watch for these patterns:

### 1. Over-Engineering

AI sometimes produces more complex code than needed:

```python
# AI might generate this:
def add_numbers(a, b):
    """Add two numbers with comprehensive validation."""
    if not isinstance(a, (int, float)):
        raise TypeError(f"Expected number, got {type(a)}")
    if not isinstance(b, (int, float)):
        raise TypeError(f"Expected number, got {type(b)}")
    result = a + b
    if isinstance(a, int) and isinstance(b, int):
        return int(result)
    return float(result)

# When you needed this:
def add_numbers(a, b):
    return a + b
```

Ask: Is this complexity necessary for my use case?

### 2. Outdated Patterns

AI training data includes old code. Watch for:
- Python 2 syntax in Python 3 code
- Deprecated library functions
- Old API patterns

```python
# Outdated:
print "Hello"  # Python 2

# Current:
print("Hello")  # Python 3
```

### 3. Security Issues

AI doesn't automatically write secure code:

```python
# Dangerous: SQL injection vulnerability
query = f"SELECT * FROM users WHERE name = '{user_input}'"

# Safe: Parameterized query
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (user_input,))
```

### 4. Hallucinated APIs

AI might use functions that don't exist:

```python
# AI might write:
result = string.remove_whitespace(text)  # This method doesn't exist

# Actual Python:
result = text.strip()  # or ''.join(text.split())
```

### 5. Subtle Logic Errors

Code that looks right but isn't:

```python
# Looks correct:
def is_even(n):
    return n % 2 == 0

# But what about negative numbers? Floats?
is_even(-3)    # False ✓
is_even(2.5)   # False (is that what you want?)
```

---

## Practical Reading Strategies

### Strategy 1: Read Aloud (Mentally)

Translate code to English in your head:

```python
if len(items) > 0 and items[0] is not None:
```

"If the list has items AND the first item isn't None..."

This catches logic errors your eyes might skip.

### Strategy 2: Rubber Duck Debugging

Explain the code to someone (or something) else. The act of explaining reveals gaps in understanding.

"This function takes a list and... wait, what happens if the list is empty?"

### Strategy 3: Test-First Verification

Before trusting code, write tests:

```python
# Don't just read — test
assert extract_email("test@example.com") == "test@example.com"
assert extract_email("no email") is None
assert extract_email("") is None
```

If you can't write tests, you don't understand the code well enough.

### Strategy 4: Diff Review

When AI modifies existing code, focus on what changed:

```diff
- def process(data):
-     return data.strip()
+ def process(data):
+     if data is None:
+         return ""
+     return data.strip().lower()
```

Ask: Why these changes? Are they all correct? Are they all wanted?

---

## Practical Exercises

### Exercise 1: Full Code Review

Review this AI-generated code using the 5-step process:

```python
def find_duplicates(lst):
    """Find duplicate elements in a list."""
    seen = set()
    duplicates = set()
    for item in lst:
        if item in seen:
            duplicates.add(item)
        seen.add(item)
    return list(duplicates)
```

Questions to answer:
1. What's the overview?
2. Trace it with `[1, 2, 2, 3, 3, 3]`
3. What edge cases might fail?
4. Does it match the docstring?
5. Any quality issues?

### Exercise 2: Spot the Bug

This code has a subtle bug. Find it:

```python
def calculate_average(numbers):
    """Calculate the average of a list of numbers."""
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)
```

(Hint: What happens with an empty list?)

### Exercise 3: Security Review

Find the security issue:

```python
import os

def read_user_file(filename):
    """Read a file from the user's documents folder."""
    path = f"/home/user/documents/{filename}"
    with open(path, 'r') as f:
        return f.read()
```

(Hint: What if `filename` is `"../../../etc/passwd"`?)

---

## When to Ask for Changes

After reading code, you might want modifications. Good reasons to iterate:

| Issue | Request |
|-------|---------|
| Missing edge case handling | "Add handling for empty input" |
| Unclear variable names | "Use more descriptive names" |
| Missing error handling | "Add try/except for file operations" |
| Over-complicated | "Simplify this — I don't need X feature" |
| Security concern | "Use parameterized queries instead" |
| Missing tests | "Add test cases for edge cases" |

Don't accept code you don't understand or aren't comfortable with.

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Systematic reading | Follow Overview → Trace → Edge Cases → Verify → Quality |
| Edge case thinking | Always ask "what if empty/null/huge/wrong?" |
| Verify claims | Comments lie; code doesn't (but code can be wrong) |
| Red flags | Watch for over-engineering, outdated patterns, security holes |
| Test don't trust | If you can't test it, you don't understand it |

---

## Connection to What's Next

Reading code is verification. You'll use this skill constantly:
- When AI generates code (every day)
- When reviewing pull requests
- When debugging issues
- When learning from examples

**Module 06** builds on this with advanced prompting techniques — how to get *better* code from AI in the first place, so there's less to fix.

---

## Reflection Questions

1. Think of code you've copy-pasted without fully reading. What risks did you take? Would you do it differently now?

2. "Comments lie; code doesn't." What does this mean? When might code also "lie"?

3. The exercise about path traversal (`../../../etc/passwd`) shows a security issue. Why might AI generate insecure code, and whose responsibility is it to catch this?

---

## Quick Reference: Code Review Checklist

```markdown
## Overview
- [ ] I understand what this code is supposed to do
- [ ] I can identify the main functions/classes
- [ ] I know what inputs and outputs to expect

## Trace
- [ ] I've mentally walked through the main path
- [ ] I understand the control flow

## Edge Cases
- [ ] Empty input handled?
- [ ] Null/None handled?
- [ ] Invalid input handled?
- [ ] Large input considered?

## Verification
- [ ] Code matches docstrings/comments
- [ ] Code does what was requested
- [ ] No hallucinated APIs

## Quality
- [ ] Readable and maintainable
- [ ] No obvious security issues
- [ ] Appropriate complexity for the task
```

---

*Next module: Prompting Fundamentals — advanced techniques to get better code from AI in the first place.*
