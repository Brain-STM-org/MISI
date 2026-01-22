---
theme: default
title: "Module 13: Timeless Principles"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 13: Timeless Principles
drawings:
  persist: false
transition: slide-left
---

# Module 13

## Timeless Principles

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Principles that outlast any framework.
KISS, DRY, GIGO, YAGNI, Fail Fast.

Estimated time: 25 minutes
Delivery: Just-in-time when code complexity grows
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Fashions change, but principles endure."
</div>

<!--
Languages and frameworks change.
These principles remain relevant.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** each principle and why it matters
2. **Recognize** violations in code
3. **Apply** principles to your own work
4. **Balance** principles when they conflict

</v-clicks>

<!--
Principles are guidelines, not laws.
Understanding enables judgment.
-->

---

# Why "Timeless"?

<v-clicks>

- KISS predates computing
- DRY was articulated in 1999
- GIGO dates to 1960s mainframes

</v-clicks>

<v-click>

These work because they're rooted in **how humans think** and **how complex systems behave** — not in any particular technology.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Learn them once. Apply them forever.
</div>

</v-click>

<!--
These principles transcend technology.
They're about human cognition and systems.
-->

---
layout: section
---

# KISS

Keep It Simple, Stupid

---

# The Principle

**Simplicity is a virtue. Complexity is a cost.**

<v-click>

The name sounds insulting, but it's self-directed:

*"Don't be clever. Be clear."*

</v-click>

<!--
KISS is about self-discipline.
Resist the urge to be clever.
-->

---

# Why Simplicity Matters

<v-clicks>

- **Reading**: Simple code is easier to understand
- **Debugging**: Fewer hiding places for bugs
- **Changing**: Simple systems adapt more easily
- **Teaching**: Can be explained to teammates

</v-clicks>

<!--
Simplicity has practical benefits.
Complexity pays compound interest.
-->

---

# Complex vs Simple

<div class="text-sm">

**Complex:**
```python
def get_status(user):
    return "active" if user and user.is_verified and not user.is_suspended and \
           (user.last_login and (datetime.now() - user.last_login).days < 30) else \
           "inactive" if user and not user.is_suspended else "suspended" if user else "unknown"
```

</div>

<v-click>

<div class="text-sm mt-4">

**Simple:**
```python
def get_status(user):
    if not user:
        return "unknown"
    if user.is_suspended:
        return "suspended"
    if not user.is_verified:
        return "inactive"
    if not user.last_login:
        return "inactive"
    if (datetime.now() - user.last_login).days >= 30:
        return "inactive"
    return "active"
```

</div>

</v-click>

<!--
Same logic. Second is readable.
Each condition is clear and debuggable.
-->

---

# The Trap of Cleverness

```python
# "Clever"
result = [x for x in (y.value for y in items if y.active) if x > threshold]

# Clear
active_items = [item for item in items if item.active]
values = [item.value for item in active_items]
result = [value for value in values if value > threshold]
```

<v-click>

Clever: 1 line. Clear: 3 lines.

**The clear version is better.**

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Ask: "Will I understand this in six months?"
</div>

</v-click>

<!--
Cleverness impresses no one maintaining it.
Optimize for readability.
-->

---
layout: section
---

# DRY

Don't Repeat Yourself

---

# The Principle

**Every piece of knowledge should have a single, authoritative source.**

<v-click>

If you're copying and pasting code, something is wrong.

</v-click>

<!--
DRY is about single source of truth.
Repetition invites inconsistency.
-->

---

# Why Repetition Hurts

```python
# Order processing
tax = price * 0.08

# Invoice generation (different file)
tax = price * 0.08

# Report calculation (yet another file)
tax = price * 0.08
```

<v-click>

Tax rate changes to 9%:
- Update order processing ✓
- Forget to update invoices ✗
- Reports show different numbers ✗
- **Hours of debugging**

</v-click>

<!--
Repetition creates inconsistency.
Changes must happen in multiple places.
-->

---

# DRY in Practice

```python
# config.py
TAX_RATE = 0.08

def calculate_total(price):
    return price * (1 + TAX_RATE)

# order.py
from config import calculate_total
total = calculate_total(price)

# invoice.py
from config import calculate_total
total = calculate_total(price)
```

<v-click>

**One source of truth.** Change once, updated everywhere.

</v-click>

<!--
Extract shared knowledge.
Single point of change.
-->

---
layout: section
---

# GIGO

Garbage In, Garbage Out

---

# The Principle

**A system's output quality is determined by its input quality.**

<v-click>

Feed bad data into a perfect algorithm → bad results.

</v-click>

<!--
GIGO is about input validation.
Perfect code can't fix bad data.
-->

---

# The Problem

```python
def calculate_average(numbers):
    return sum(numbers) / len(numbers)

# Looks fine. But...
data = [100, 200, -999, 300, 400]  # -999 is an error code!
average = calculate_average(data)  # Returns 0.2 — wrong!
```

<v-click>

The function worked correctly. The input was garbage.

</v-click>

<!--
Garbage input, garbage output.
The function can't know -999 is invalid.
-->

---

# Validate at Boundaries

```python
def calculate_average(numbers):
    if not numbers:
        raise ValueError("Cannot average empty list")

    for n in numbers:
        if not isinstance(n, (int, float)):
            raise TypeError(f"Expected number, got {type(n)}")
        if n < 0:
            raise ValueError(f"Unexpected negative: {n}")

    return sum(numbers) / len(numbers)
```

<v-click>

Garbage input → **clear error** instead of silent wrong answer.

</v-click>

<!--
Validation turns garbage into errors.
Errors are better than wrong answers.
-->

---

# GIGO and AI

<v-clicks>

- **Garbage prompts → Garbage code**
- **Garbage code → Garbage output**
- **Garbage review → Garbage merged**

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Quality in, quality out. <strong>At every stage.</strong>
</div>

</v-click>

<!--
GIGO applies to AI workflows too.
Your prompts and reviews matter.
-->

---
layout: section
---

# YAGNI

You Aren't Gonna Need It

---

# The Principle

**Don't build features until you need them.**

<!--
YAGNI fights speculative coding.
Build what's needed now.
-->

---

# The Temptation

Building a to-do app:

<v-clicks>

*"What if users want sharing? I should build it."*

*"What if they want PDF export? Better add that."*

*"What if they want calendar integration?"*

</v-clicks>

<v-click>

Weeks later:
- 80% of users just want a simple list
- No one asked for PDF export
- You never shipped

</v-click>

<!--
Speculative features waste time.
Build what users actually need.
-->

---

# YAGNI and AI

AI loves adding features you didn't ask for:

```
You: "Write a function to validate email addresses"

AI: "Here's an email validator with:
    - Format validation
    - DNS MX record checking
    - Disposable email detection
    - Spam trap identification..."
```

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Review AI output through YAGNI lens: <strong>"Did I ask for this? Do I need it now?"</strong>
</div>

</v-click>

<!--
AI over-engineers enthusiastically.
Human judgment filters what's needed.
-->

---
layout: section
---

# Fail Fast

When things go wrong, fail immediately

---

# Fail Slow (Bad)

```python
def process_payment(amount, user):
    if amount is None:
        amount = 0  # "Handle" the problem

    # Much later...
    charge_card(user.card, amount)  # Charges $0!
```

<v-click>

The error was hidden. The system "worked" but did the wrong thing.

</v-click>

<!--
Hiding errors causes silent corruption.
The wrong thing happens.
-->

---

# Fail Fast (Good)

```python
def process_payment(amount, user):
    if amount is None:
        raise ValueError("Amount cannot be None")
    if amount <= 0:
        raise ValueError(f"Amount must be positive: {amount}")
    if not user.card:
        raise ValueError("User has no card on file")

    charge_card(user.card, amount)
```

<v-click>

Bad input? **Immediate, clear failure.** No silent corruption.

</v-click>

<!--
Fast failure is explicit and debuggable.
Clear errors beat wrong behavior.
-->

---

# Why Fast Failure is Good

<v-clicks>

- **Closer to cause**: Error happens where problem is
- **Clear message**: You know what went wrong
- **No corruption**: Bad data doesn't spread
- **Easier debugging**: Stack trace points to issue

</v-clicks>

<!--
Fast failure aids debugging.
Slow failure obscures problems.
-->

---

# Quick Reference

| Principle | Summary | Anti-Pattern |
|-----------|---------|--------------|
| **KISS** | Simplicity over cleverness | Complex one-liners |
| **DRY** | Single source of truth | Copy-pasted code |
| **GIGO** | Validate input quality | Trust all data blindly |
| **YAGNI** | Build only what's needed | Speculative features |
| **Fail Fast** | Immediate, clear errors | Silent failures |

<!--
Reference card for the principles.
-->

---

# When Principles Conflict

<v-clicks>

**DRY vs. KISS**: Abstracting can make code more complex.

**YAGNI vs. Good Design**: Building only what's needed might create debt.

**Fail Fast vs. UX**: Crashing on every error is unfriendly.

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
<strong>The meta-principle:</strong> Use judgment. Principles inform decisions; they don't make them for you.
</div>

</v-click>

<!--
Principles can conflict.
Judgment resolves conflicts.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| KISS | Complexity is a cost; pay only when necessary |
| DRY | One source of truth prevents inconsistency |
| GIGO | Validate inputs; don't trust data blindly |
| YAGNI | Build for actual needs, not hypothetical ones |
| Fail Fast | Clear errors beat silent corruption |

<!--
These are the takeaways.
Principles guide good decisions.
-->

---

# Reflection Questions

<v-clicks>

1. Why might an experienced developer write *more* code to keep things simple?

2. You see the same 5 lines in 3 places. Should you always abstract it?

3. How do these principles apply to working with AI assistants?

</v-clicks>

<!--
Q1: Clarity over cleverness
Q2: Maybe not - depends if concepts are truly the same
Q3: YAGNI for AI suggestions, GIGO for prompts
-->

---
layout: center
class: text-center
---

# Module 13 Complete

Timeless principles for every project.

<div class="mt-8 text-xl text-gray-400">
Next: Module 14 — Communication
</div>

<div class="mt-8">
  <a href="./14/" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 14 →
  </a>
</div>

<!--
Students now have a toolkit of principles.
Next: writing for humans.
-->
