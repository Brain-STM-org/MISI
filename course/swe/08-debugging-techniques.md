# Debugging Techniques

> *"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."*
> — Brian Kernighan

## Learning Objectives

By the end of this module, you will be able to:

1. **Read** error messages and extract useful information
2. **Apply** a systematic debugging process (not random guessing)
3. **Use** print statements and logging effectively
4. **Form** hypotheses and test them methodically
5. **Know** when and how to ask for help
6. **Leverage** AI assistants for debugging support

---

## The Debugging Mindset

Something isn't working. What do you do?

**Wrong approach:**
- Randomly change things
- Hope it magically fixes itself
- Panic
- Delete everything and start over

**Right approach:**
- Observe the symptoms precisely
- Form a hypothesis about the cause
- Test the hypothesis
- Repeat until solved

Debugging is **investigation**, not luck.

---

## Reading Error Messages

The most important debugging skill: actually reading the error message.

This sounds obvious. It's not. When code explodes with a wall of red text, the instinct is to look away. Don't.

### Anatomy of an Error

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

Let's decode this:

| Part | What It Tells You |
|------|-------------------|
| `Traceback (most recent call last)` | Read bottom-up for the actual error |
| File, line, function | Exact location in your code |
| The arrow of calls | How we got there: `main` → `process_data` → `calculate_average` |
| `ZeroDivisionError` | The type of error (very specific!) |
| `division by zero` | The exact problem |

**The error is telling you:** In `utils.py`, line 12, inside `calculate_average`, you divided by zero.

The call stack shows how you got there: `main` called `process_data` with `user_input`, which called `calculate_average` with `numbers`, and `numbers` was empty (length zero).

### Common Error Types

Learn to recognize these:

| Error | Meaning | Common Cause |
|-------|---------|--------------|
| `SyntaxError` | Code isn't valid | Typo, missing colon, unmatched bracket |
| `NameError` | Variable doesn't exist | Typo in variable name, not defined yet |
| `TypeError` | Wrong type | Called function with wrong argument type |
| `AttributeError` | Object doesn't have that attribute | Typo, or wrong object type |
| `KeyError` | Dictionary key doesn't exist | Key spelled wrong, or not added yet |
| `IndexError` | List index out of range | Off-by-one error, empty list |
| `ZeroDivisionError` | Divided by zero | Didn't check for zero denominator |
| `FileNotFoundError` | File doesn't exist | Wrong path, typo, file not created |
| `ImportError` | Can't import module | Not installed, typo in name |

Each error type points you toward the category of problem.

### The Error Message Contains the Answer

Really. Read it again, slowly.

```
TypeError: can't multiply sequence by non-int of type 'str'
```

Translation: You tried to multiply something (a sequence, like a list or string) by a string. You probably meant to use an integer.

```
KeyError: 'username'
```

Translation: You asked for the key `'username'` but it doesn't exist in the dictionary. Check spelling. Check if the data has that key.

```
AttributeError: 'NoneType' object has no attribute 'split'
```

Translation: You called `.split()` on something that is `None`. A function probably returned `None` when you expected a string.

---

## The Scientific Method of Debugging

### Step 1: Reproduce the Error

Before fixing, ensure you can consistently trigger the bug.

- What input causes it?
- What steps lead to it?
- Does it happen every time?

If you can't reproduce it, you can't verify your fix.

### Step 2: Understand the Expected vs. Actual

Clearly state:
- **Expected**: "This function should return 42"
- **Actual**: "It returns None"

Or:
- **Expected**: "The page should show user's name"
- **Actual**: "It shows 'undefined'"

The gap between expected and actual is what you're investigating.

### Step 3: Form a Hypothesis

Based on the error and symptoms, guess what's wrong:

- "The variable `user` is None because the database query returned nothing"
- "The loop is running one too many times"
- "The config file isn't being read"

Be specific. Vague hypotheses ("something is broken") aren't testable.

### Step 4: Test the Hypothesis

Add code that would confirm or reject your hypothesis:

```python
# Hypothesis: user is None
print(f"DEBUG: user = {user}")  # Let's see what it actually is
```

Run the code. What do you observe?

- If `user` is indeed `None`, hypothesis confirmed. Now investigate why.
- If `user` has a valid value, hypothesis rejected. Form a new one.

### Step 5: Fix and Verify

Once you know the cause:
1. Make the fix
2. Run the code again
3. Verify the bug is gone
4. Check you didn't break anything else

---

## Print Debugging

The oldest debugging technique: make the code tell you what it's doing.

### Basic Print Debugging

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

Run this, and you see exactly what's happening:

```
DEBUG: Starting process_order with Order(id=123, items=[...])
DEBUG: total = 150.00
DEBUG: discount = None      # <-- Aha! discount is None, not a number
DEBUG: final = ...          # Crashes here
```

Found it: `get_discount` returns `None` sometimes.

### Strategic Print Placement

Don't print everything. Print at **decision points**:

- Before and after function calls
- Inside conditionals (which branch did we take?)
- Loop iterations (what values? how many times?)
- Right before the crash

### Upgrade: Logging

For real projects, use logging instead of print:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def process_order(order):
    logger.debug(f"Processing order {order.id}")
    # ...
```

Benefits:
- Can turn off without deleting lines
- Includes timestamps
- Can write to files
- Different levels (DEBUG, INFO, WARNING, ERROR)

---

## Common Bug Patterns

Experienced debuggers recognize patterns. Here are the greatest hits:

### Off-By-One Errors

```python
# Bug: doesn't include the last item
for i in range(len(items) - 1):  # Should be range(len(items))
    process(items[i])
```

Whenever loops or indices are involved, check the boundaries.

### None Returns

```python
# Bug: find_user returns None if not found, but we don't check
user = find_user(user_id)
print(user.name)  # Crash: 'NoneType' has no attribute 'name'
```

Always consider: what if this function returns `None`?

### Mutable Default Arguments

```python
# Bug: the default list is shared across all calls!
def add_item(item, items=[]):
    items.append(item)
    return items
```

This is a Python-specific gotcha, but every language has traps.

### String vs. Number

```python
# Bug: input returns a string
age = input("Enter age: ")  # age = "25" (string)
if age > 18:  # Comparing string to int — doesn't work right
```

Know your types. When in doubt, print the type: `print(type(age))`

### Async/Order Issues

```python
# Bug: data isn't loaded yet when we try to use it
fetch_data()  # Starts loading (async)
display(data) # data is still empty!
```

With AI-assisted development, async bugs are common because AI might not handle timing correctly.

---

## Debugging with AI Assistants

AI can be a powerful debugging partner. Use it wisely.

### What to Share with AI

Give AI:
1. The **error message** (full, not summarized)
2. The **relevant code** (not your entire codebase)
3. **What you expected** vs. **what happened**
4. **What you've already tried**

### Effective Prompts

**Poor:**
> "My code doesn't work, fix it"

**Better:**
> "I'm getting a TypeError: can't multiply sequence by non-int of type 'str' on line 23. Here's the function:
> [code]
> I expect it to multiply the price by quantity, but quantity seems to be a string. Why might that be?"

**Best:**
> "I've narrowed down a bug to this function. The error is [error]. I've verified that:
> - `price` is correctly a float (I printed it)
> - `quantity` is unexpectedly a string (I printed it)
> This value comes from user input. How should I convert it, and where's the best place to do that conversion?"

The more you narrow down, the better AI can help.

### AI Limitations

AI might:
- Suggest fixes that work but miss the real issue
- Not understand your project's specific context
- Confidently give wrong answers

Always verify AI suggestions. Run the code. Check if it actually fixes the problem.

### AI as Rubber Duck

Even if you don't use AI's answer, explaining the problem often helps you solve it. This is called "rubber duck debugging" — explaining your problem to an inanimate object (or AI) forces you to articulate it clearly, often revealing the answer.

---

## When to Ask for Help

Debugging alone has limits. Know when to escalate.

### Ask for Help When

- You've spent more than 30 minutes stuck
- You've tried at least 3 hypotheses
- You can clearly describe the problem and what you've tried
- The error message means nothing even after searching

### How to Ask Effectively

**Poor:**
> "It doesn't work. Help."

**Good:**
> "I'm getting a 'connection refused' error when trying to connect to the database. Here's what I've tried:
> 1. Verified the database is running (it is)
> 2. Checked the connection string (matches config)
> 3. Tried connecting with a database client (works)
> So the problem seems to be in how my code connects, not the database itself. Here's my connection code: [code]"

This tells your helper:
- The specific error
- What you've eliminated
- Where you think the problem is
- The relevant code

Good questions get fast answers.

---

## Exercise: Debug These

### Exercise 1: Read the Error

```python
Traceback (most recent call last):
  File "shop.py", line 34, in checkout
    total = sum(item.price for item in cart.items)
  File "shop.py", line 34, in <genexpr>
    total = sum(item.price for item in cart.items)
AttributeError: 'dict' object has no attribute 'price'
```

Questions:
1. What type of error is this?
2. What line is the problem on?
3. What's the actual issue?
4. What would you print to investigate?

<details>
<summary>Answer</summary>

1. `AttributeError` — accessing an attribute that doesn't exist
2. Line 34 in `shop.py`
3. `cart.items` contains dictionaries, not objects with a `.price` attribute. Probably should be `item['price']` or the items should be objects.
4. Print `cart.items` to see what's actually in there

</details>

### Exercise 2: Form Hypotheses

A function should return a user's full name, but it returns `None`.

```python
def get_full_name(user_id):
    user = database.find(user_id)
    if user:
        return user.first_name + " " + user.last_name
```

List 3 hypotheses for why it returns `None`.

<details>
<summary>Possible Hypotheses</summary>

1. `database.find(user_id)` returns `None` (user not found)
2. The `if user:` check passes, but there's no `return` when concatenation fails
3. (Subtle) The function has no explicit return at the end, so if `user` is falsy, it returns `None` implicitly

The third is actually the bug — if `user` is falsy, there's no return statement, so Python returns `None`.

</details>

### Exercise 3: Debug with AI

Take any error you've encountered (or manufacture one). Practice writing a good debugging prompt for an AI assistant including:
- The exact error
- The relevant code
- What you expected
- What you've tried

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Read the error message | It's usually telling you exactly what's wrong |
| Debugging is systematic | Hypothesis → test → repeat |
| Print strategically | Make the code reveal its state |
| Know the patterns | Off-by-one, None returns, type mismatches |
| Ask for help well | Clear problem + what you tried = fast answers |

---

## Reflection Questions

1. Why do experienced developers often find bugs faster than beginners?

2. You've fixed a bug, but you're not sure why your fix works. Is that okay?

3. What's the risk of asking AI to "fix this" without understanding the problem yourself?

---

*Next module: Dependencies & Packages — using code that others have written.*
