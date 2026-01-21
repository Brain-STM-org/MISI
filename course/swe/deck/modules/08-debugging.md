---
theme: default
title: "Module 08: Debugging Techniques"
info: |
  SWE Fundamentals - MISI
  Module 08: Debugging Techniques
drawings:
  persist: false
transition: slide-left
---

# Module 08

## Debugging Techniques

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Debugging is a skill that separates beginners from professionals.
This module teaches systematic approaches to finding and fixing bugs.

Estimated time: 25 minutes
Delivery: Day 2 Bootcamp
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-8">
"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
</div>

<div class="mt-4 text-gray-500">
— Brian Kernighan
</div>

<!--
This quote explains why simple code is better than clever code.
If you can barely understand what you wrote, debugging is impossible.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Read** error messages and extract useful information
2. **Apply** a systematic debugging process (not random guessing)
3. **Use** print statements and logging effectively
4. **Form** hypotheses and test them methodically
5. **Know** when and how to ask for help
6. **Leverage** AI assistants for debugging support

</v-clicks>

<!--
This module focuses on process and technique.
Random guessing is the enemy; systematic investigation is the goal.
-->

---
layout: section
---

# The Debugging Mindset

Investigation, not luck

---

# Wrong vs. Right Approach

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Wrong Approach

<v-clicks>

- Randomly change things
- Hope it magically fixes itself
- Panic
- Delete everything and start over

</v-clicks>

</div>
<div>

### Right Approach

<v-clicks>

- Observe symptoms precisely
- Form a hypothesis about cause
- Test the hypothesis
- Repeat until solved

</v-clicks>

</div>
</div>

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded">
Debugging is <strong>investigation</strong>, not luck.
</div>

</v-click>

<!--
The right approach is the scientific method applied to code.
Students should resist the urge to randomly change things.
-->

---
layout: section
---

# Reading Error Messages

The most important skill

---

# Actually Read the Error

The most important debugging skill: **actually reading the error message**.

<v-click>

This sounds obvious. It's not.

When code explodes with a wall of red text, the instinct is to look away.

**Don't.**

</v-click>

<!--
Many beginners glance at errors and immediately ask for help.
The error message usually contains the answer.
-->

---

# Anatomy of an Error

```python
Traceback (most recent call last):
  File "app.py", line 45, in main
    result = process_data(user_input)
  File "app.py", line 23, in process_data
    return calculate_average(numbers)
  File "utils.py", line 12, in calculate_average
    return sum(numbers) / len(numbers)
ZeroDivisionError: division by zero
```

<!--
Let's decode this error message piece by piece.
-->

---

# Decoding the Error

| Part | What It Tells You |
|------|-------------------|
| `Traceback (most recent call last)` | Read bottom-up for actual error |
| File, line, function | Exact location in code |
| The call chain | How we got there: main → process_data → calculate_average |
| `ZeroDivisionError` | The type of error (specific!) |
| `division by zero` | The exact problem |

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
<strong>The error says:</strong> In utils.py, line 12, inside calculate_average, you divided by zero.
</div>

</v-click>

<!--
The error tells you exactly what happened and where.
The call chain shows how you got there.
-->

---

# Common Error Types

| Error | Meaning | Common Cause |
|-------|---------|--------------|
| `SyntaxError` | Code isn't valid | Typo, missing colon |
| `NameError` | Variable doesn't exist | Typo, not defined yet |
| `TypeError` | Wrong type | Wrong argument type |
| `AttributeError` | Object lacks attribute | Typo, wrong object |
| `KeyError` | Dict key missing | Key not added yet |
| `IndexError` | Index out of range | Off-by-one, empty list |

<!--
Each error type points to a category of problem.
Learn to recognize them.
-->

---

# The Error Contains the Answer

```
TypeError: can't multiply sequence by non-int of type 'str'
```

<v-click>

**Translation:** You tried to multiply something (list/string) by a string. You probably meant an integer.

</v-click>

<v-click>

```
AttributeError: 'NoneType' object has no attribute 'split'
```

**Translation:** You called `.split()` on `None`. A function probably returned `None` when you expected a string.

</v-click>

<!--
Train students to translate error messages into plain English.
The message tells you what happened.
-->

---
layout: section
---

# The Scientific Method

Systematic debugging

---

# Step 1: Reproduce the Error

Before fixing, ensure you can consistently trigger the bug.

<v-clicks>

- What input causes it?
- What steps lead to it?
- Does it happen every time?

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
If you can't reproduce it, you can't verify your fix.
</div>

</v-click>

<!--
Reproducibility is essential.
Random bugs are the hardest to fix.
-->

---

# Step 2: Expected vs. Actual

Clearly state the gap:

<v-clicks>

**Expected:** "This function should return 42"
**Actual:** "It returns None"

**Expected:** "The page should show user's name"
**Actual:** "It shows 'undefined'"

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
The gap between expected and actual is what you're investigating.
</div>

</v-click>

<!--
Clear problem statements guide investigation.
Vague problems lead to vague solutions.
-->

---

# Step 3: Form a Hypothesis

Based on the error and symptoms, guess what's wrong:

<v-clicks>

- "The variable `user` is None because the database query returned nothing"
- "The loop is running one too many times"
- "The config file isn't being read"

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
Be specific. Vague hypotheses ("something is broken") aren't testable.
</div>

</v-click>

<!--
Specific hypotheses can be tested.
Vague ones lead to random changes.
-->

---

# Step 4: Test the Hypothesis

Add code that would confirm or reject your hypothesis:

```python
# Hypothesis: user is None
print(f"DEBUG: user = {user}")  # Let's see what it actually is
```

<v-click>

Run the code. What do you observe?

- If `user` is `None`, hypothesis confirmed → investigate why
- If `user` has a value, hypothesis rejected → form a new one

</v-click>

<!--
This is the experimental part.
Let the code tell you what's true.
-->

---

# Step 5: Fix and Verify

Once you know the cause:

<v-clicks>

1. Make the fix
2. Run the code again
3. Verify the bug is gone
4. Check you didn't break anything else

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Tests help with step 4 — they catch new breaks.
</div>

</v-click>

<!--
Verification is essential.
A "fix" that causes new bugs isn't a fix.
-->

---
layout: section
---

# Print Debugging

Make the code talk

---

# Basic Print Debugging

The oldest technique: make the code tell you what it's doing.

```python
def process_order(order):
    print(f"DEBUG: Starting process_order with {order}")

    total = calculate_total(order.items)
    print(f"DEBUG: total = {total}")

    discount = get_discount(order.customer)
    print(f"DEBUG: discount = {discount}")

    final = total - discount
    print(f"DEBUG: final = {final}")

    return final
```

<!--
Print statements reveal what's actually happening.
They're simple but effective.
-->

---

# Print Output Reveals the Bug

```
DEBUG: Starting process_order with Order(id=123, items=[...])
DEBUG: total = 150.00
DEBUG: discount = None      # <-- Aha! discount is None
DEBUG: final = ...          # Crashes here
```

<v-click>

**Found it:** `get_discount` returns `None` sometimes.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
The print statements made the bug visible.
</div>

</v-click>

<!--
The bug was hiding. Prints exposed it.
This is simple but powerful.
-->

---

# Strategic Print Placement

Don't print everything. Print at **decision points**:

<v-clicks>

- Before and after function calls
- Inside conditionals (which branch?)
- Loop iterations (what values? how many?)
- Right before the crash

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Fewer strategic prints > many random prints
</div>

</v-click>

<!--
Strategic placement saves time.
Print at the boundaries where things might go wrong.
-->

---
layout: section
---

# Common Bug Patterns

Greatest hits

---

# Off-By-One Errors

```python
# Bug: doesn't include the last item
for i in range(len(items) - 1):  # Should be range(len(items))
    process(items[i])
```

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
Whenever loops or indices are involved, <strong>check the boundaries</strong>.
</div>

</v-click>

<!--
Off-by-one is the most common bug pattern.
Check: does this include the first? the last?
-->

---

# None Returns

```python
# Bug: find_user returns None if not found
user = find_user(user_id)
print(user.name)  # Crash: 'NoneType' has no attribute 'name'
```

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Always consider: <strong>what if this function returns None?</strong>
</div>

</v-click>

<!--
None returns are extremely common.
Defensive programming checks for None.
-->

---

# String vs. Number

```python
# Bug: input returns a string
age = input("Enter age: ")  # age = "25" (string)
if age > 18:  # Comparing string to int — doesn't work right
```

<v-click>

<div class="mt-4 text-gray-400">
Know your types. When in doubt: <code>print(type(age))</code>
</div>

</v-click>

<!--
Type mismatches are common, especially with user input.
Print the type when confused.
-->

---
layout: section
---

# Debugging with AI

A powerful partner

---

# What to Share with AI

Give AI:

<v-clicks>

1. The **error message** (full, not summarized)
2. The **relevant code** (not entire codebase)
3. **What you expected** vs. **what happened**
4. **What you've already tried**

</v-clicks>

<!--
Good context = good help.
Vague requests get vague answers.
-->

---

# Prompt Quality Comparison

**Poor:**
> "My code doesn't work, fix it"

<v-click>

**Better:**
> "I'm getting TypeError: can't multiply sequence by non-int of type 'str' on line 23. Here's the function: [code]. I expect it to multiply price by quantity, but quantity seems to be a string."

</v-click>

<v-click>

**Best:**
> "I've narrowed down a bug. Error is [error]. I've verified: price is float (printed it), quantity is unexpectedly string (printed it). This comes from user input. How should I convert it?"

</v-click>

<!--
The progression shows increasing specificity.
Narrow down before asking for help.
-->

---

# AI Limitations

AI might:

<v-clicks>

- Suggest fixes that work but miss the real issue
- Not understand your project's context
- Confidently give wrong answers

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
Always verify AI suggestions. Run the code. Check if it actually fixes the problem.
</div>

</v-click>

<!--
AI is a tool, not an oracle.
Human verification is essential.
-->

---

# AI as Rubber Duck

Even if you don't use AI's answer, explaining the problem often helps you solve it.

<v-click>

This is **"rubber duck debugging"** — explaining your problem to an inanimate object forces you to articulate it clearly.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Often, articulating the problem reveals the answer.
</div>

</v-click>

<!--
The act of explaining is valuable.
AI is a patient listener that sometimes helps.
-->

---
layout: section
---

# Asking for Help

Know when and how

---

# When to Ask for Help

Ask when:

<v-clicks>

- You've spent more than **30 minutes stuck**
- You've tried at least **3 hypotheses**
- You can **clearly describe** the problem and what you've tried
- The error message means nothing even after searching

</v-clicks>

<!--
These criteria prevent premature help requests
while also preventing excessive spinning.
-->

---

# How to Ask Effectively

**Poor:**
> "It doesn't work. Help."

<v-click>

**Good:**
> "I'm getting a 'connection refused' error connecting to the database. I've tried:
> 1. Verified database is running (it is)
> 2. Checked connection string (matches config)
> 3. Tried database client (works)
>
> Problem seems to be in my code's connection, not the database itself. Here's my connection code: [code]"

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Good questions get fast answers.
</div>

</v-click>

<!--
Show what you've tried and what you've eliminated.
This helps helpers help you faster.
-->

---
layout: section
---

# Exercises

Practice debugging

---

# Exercise 1: Read the Error

```python
Traceback (most recent call last):
  File "shop.py", line 34, in checkout
    total = sum(item.price for item in cart.items)
  File "shop.py", line 34, in <genexpr>
    total = sum(item.price for item in cart.items)
AttributeError: 'dict' object has no attribute 'price'
```

<v-click>

**Questions:**
1. What type of error is this?
2. What line is the problem on?
3. What's the actual issue?

</v-click>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded text-sm">
<strong>Answer:</strong> AttributeError on line 34. cart.items contains dictionaries, not objects. Should be <code>item['price']</code>.
</div>

</v-click>

<!--
This exercises error message reading.
Students should identify the type and cause.
-->

---

# Exercise 2: Form Hypotheses

A function should return a user's full name, but returns `None`.

```python
def get_full_name(user_id):
    user = database.find(user_id)
    if user:
        return user.first_name + " " + user.last_name
```

<v-click>

List 3 hypotheses for why it returns `None`.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded text-sm">
<strong>Hypotheses:</strong> (1) database.find returns None (user not found), (2) first_name or last_name is None, (3) No explicit return when user is falsy — Python returns None implicitly.
</div>

</v-click>

<!--
This exercises hypothesis formation.
The third hypothesis is the actual bug.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Read the error message | It usually tells you exactly what's wrong |
| Debugging is systematic | Hypothesis → test → repeat |
| Print strategically | Make the code reveal its state |
| Know the patterns | Off-by-one, None returns, type mismatches |
| Ask for help well | Clear problem + what you tried = fast answers |

<!--
These are the takeaways.
Systematic beats random every time.
-->

---
layout: section
---

# Reflection

---

# Reflection Questions

<v-clicks>

1. Why do experienced developers often find bugs faster than beginners?

2. You've fixed a bug, but you're not sure why your fix works. Is that okay?

3. What's the risk of asking AI to "fix this" without understanding the problem yourself?

</v-clicks>

<!--
Question 1: Pattern recognition, systematic approach
Question 2: No — you might have masked the bug, not fixed it
Question 3: You won't learn, might not actually fix it
-->

---
layout: center
class: text-center
---

# Module 08 Complete

You now have a systematic approach to debugging.

<div class="mt-8 text-xl text-gray-400">
Next: Module 09 — Dependencies & Packages
</div>

<div class="mt-8">
  <a href="./09-dependencies" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 09 →
  </a>
</div>

<!--
Students now have tools for when things go wrong.
The next module covers using others' code.
-->
