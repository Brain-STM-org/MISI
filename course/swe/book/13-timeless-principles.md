# Timeless Principles

> *"Fashions change, but principles endure."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** each principle and why it matters
2. **Recognize** violations in code and design
3. **Apply** these principles to your own work
4. **Balance** principles when they conflict

---

## Why "Timeless"?

Programming languages come and go. Frameworks rise and fall. The hot technology of today is the legacy system of tomorrow.

But some ideas persist across decades:

- The principle of simplicity predates computing
- DRY was articulated in 1999 and remains essential
- GIGO dates to the 1960s mainframe era

These principles work because they're rooted in how humans think and how complex systems behave — not in any particular technology.

Learn them once. Apply them forever.

---

## KISS: Keep It Simple, Stupid

**The principle:** Simplicity is a virtue. Complexity is a cost.

The name sounds insulting, but it's self-directed: "Don't be clever. Be clear."

### Why Simplicity Matters

- **Reading**: Simple code is easier to understand
- **Debugging**: Fewer interactions mean fewer hiding places for bugs
- **Changing**: Simple systems adapt more easily
- **Teaching**: Simple code can be explained to teammates

### Simplicity in Practice

**Complex:**
```python
def get_user_status(user):
    return "active" if user and user.is_verified and not user.is_suspended and \
           (user.last_login and (datetime.now() - user.last_login).days < 30) else \
           "inactive" if user and not user.is_suspended else "suspended" if user else "unknown"
```

**Simple:**
```python
def get_user_status(user):
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

Same logic. The second is readable. Each condition is clear. Debugging is straightforward.

### The Trap of Cleverness

Clever code impresses no one who has to maintain it.

```python
# "Clever"
result = [x for x in (y.value for y in items if y.active) if x > threshold]

# Clear
active_items = [item for item in items if item.active]
values = [item.value for item in active_items]
result = [value for value in values if value > threshold]
```

The clever version is one line. The clear version is three. The clear version is better.

**Ask:** "Will I understand this in six months?"

---

## DRY: Don't Repeat Yourself

**The principle:** Every piece of knowledge should have a single, authoritative source.

If you find yourself copying and pasting code, something is wrong.

### Why Repetition Hurts

```python
# Order processing
tax = price * 0.08
total = price + tax

# Invoice generation (different file)
tax = price * 0.08
total = price + tax

# Report calculation (yet another file)
tax = price * 0.08
total = price + tax
```

Three copies of the same calculation. Now:
- Tax rate changes to 9%
- You update order processing
- You forget to update invoices
- Reports show different numbers than invoices
- Hours of debugging

### DRY in Practice

**Extract the knowledge:**
```python
# config.py
TAX_RATE = 0.08

def calculate_total(price):
    tax = price * TAX_RATE
    return price + tax
```

**Use it everywhere:**
```python
# order.py
from config import calculate_total
total = calculate_total(price)

# invoice.py
from config import calculate_total
total = calculate_total(price)
```

One source of truth. Change it once, updated everywhere.

### DRY Beyond Code

DRY applies to:
- **Configuration**: Don't hardcode the same value in multiple places
- **Documentation**: Don't document the same thing twice (it will drift)
- **Data**: Don't store the same data in multiple places

### When DRY Can Be Wrong

Premature abstraction is also a problem. If two pieces of code look similar but represent different concepts, forcing them into one function creates coupling.

```python
# These look similar but are different concepts
def calculate_employee_salary(hours, rate):
    return hours * rate

def calculate_project_cost(hours, rate):
    return hours * rate
```

Should these be one function? Maybe not. Employee salary and project cost might evolve differently. Sometimes repetition is acceptable if the concepts are distinct.

**Rule of three:** Wait until you have three instances before abstracting.

---

## GIGO: Garbage In, Garbage Out

**The principle:** A system's output quality is determined by its input quality.

If you feed bad data into a perfect algorithm, you get bad results.

### Why This Matters

```python
def calculate_average(numbers):
    return sum(numbers) / len(numbers)

# Looks fine. But...
data = [100, 200, -999, 300, 400]  # -999 is an error code, not a value!
average = calculate_average(data)   # Returns 0.2 — completely wrong
```

The function worked correctly. The input was garbage.

### Validate at the Boundaries

Don't trust incoming data. Check it:

```python
def calculate_average(numbers):
    if not numbers:
        raise ValueError("Cannot calculate average of empty list")

    for n in numbers:
        if not isinstance(n, (int, float)):
            raise TypeError(f"Expected number, got {type(n)}")
        if n < 0:
            raise ValueError(f"Unexpected negative value: {n}")

    return sum(numbers) / len(numbers)
```

Now garbage input produces a clear error instead of a silent wrong answer.

### GIGO and AI

This principle is especially relevant for AI-assisted development:

- **Garbage prompts → Garbage code**: Vague instructions produce vague results
- **Garbage code → Garbage output**: AI-generated code working on bad data produces bad results
- **Garbage review → Garbage merged**: Not checking AI output lets bugs through

Quality in, quality out. At every stage.

---

## YAGNI: You Aren't Gonna Need It

**The principle:** Don't build features until you need them.

### The Temptation

You're building a to-do app:

*"What if users want to share lists? I should build sharing."*
*"What if they want to export to PDF? I should build that."*
*"What if they want to integrate with calendars? Better add that."*

You spend weeks on features. Then you discover:
- 80% of users just want a simple list
- No one asked for PDF export
- You never shipped because you were building hypotheticals

### YAGNI in Practice

**Don't:**
- Build features because you might need them
- Add configuration options "just in case"
- Create abstractions for hypothetical future requirements

**Do:**
- Build what's needed now
- Make it easy to change later (simple code is changeable code)
- Add features when there's actual demand

### YAGNI and AI

AI assistants love to add features you didn't ask for:

```
You: "Write a function to validate email addresses"

AI: "Here's an email validator with:
    - Format validation
    - DNS MX record checking
    - Disposable email detection
    - Spam trap identification
    - ..."
```

You asked for format validation. AI gave you an enterprise email security suite.

Review AI output through YAGNI lens: "Did I ask for this? Do I need it now?"

---

## Fail Fast

**The principle:** When something goes wrong, fail immediately and loudly.

### The Alternative: Fail Slow

```python
def process_payment(amount, user):
    if amount is None:
        amount = 0  # "Handle" the problem by using default

    # Much later...
    charge_card(user.card, amount)  # Charges $0, user gets product free
```

The error was hidden. The system "worked" but did the wrong thing.

### Fail Fast in Practice

```python
def process_payment(amount, user):
    if amount is None:
        raise ValueError("Amount cannot be None")
    if amount <= 0:
        raise ValueError(f"Amount must be positive, got {amount}")
    if not user.card:
        raise ValueError("User has no card on file")

    charge_card(user.card, amount)
```

Bad input? Immediate, clear failure. No silent corruption.

### Why Fast Failure is Good

- **Closer to the cause**: The error happens where the problem is, not three functions later
- **Clear message**: You know exactly what went wrong
- **No corruption**: Bad data doesn't spread through the system
- **Easier debugging**: Stack trace points to the actual issue

---

## Separation of Concerns

**The principle:** Different responsibilities should be in different places.

### The Monolith Problem

```python
def handle_order(request):
    # Parse the request
    data = json.loads(request.body)

    # Validate the data
    if not data.get('items'):
        return {"error": "No items"}

    # Calculate prices
    total = sum(item['price'] * item['quantity'] for item in data['items'])
    tax = total * 0.08
    final = total + tax

    # Save to database
    order = Order(items=data['items'], total=final)
    db.save(order)

    # Send confirmation email
    email_body = f"Thank you for your order of ${final}"
    send_email(data['email'], email_body)

    # Log for analytics
    analytics.log('order_placed', {'value': final})

    return {"order_id": order.id}
```

This function does everything: parsing, validation, calculation, storage, email, analytics.

Problems:
- Hard to test (how do you test just the calculation?)
- Hard to change (what if email logic changes?)
- Hard to understand (too much in one place)

### Separated Concerns

```python
def handle_order(request):
    data = parse_request(request)
    validate_order_data(data)

    order = create_order(data)
    save_order(order)

    send_confirmation(order)
    track_order_analytics(order)

    return {"order_id": order.id}
```

Each function has one job. Each can be tested independently. Each can change without affecting others.

### Separation Heuristics

- **If you're describing a function with "and", it might do too much**
  - "Validates and processes and saves and emails" → Split it
- **If a change requires modifying multiple unrelated things, they're coupled**
- **If you can't test something in isolation, it has too many responsibilities**

---

## When Principles Conflict

Principles are guidelines, not laws. Sometimes they conflict:

**DRY vs. KISS**: Abstracting to avoid repetition can make code more complex.
- Judgment: Is the abstraction worth the complexity?

**YAGNI vs. Good Design**: Building only what's needed might create technical debt.
- Judgment: Is this a foundation we'll build on, or a throwaway experiment?

**Fail Fast vs. User Experience**: Crashing on every error is unfriendly.
- Judgment: Fail fast internally; present graceful errors to users.

**The meta-principle:** Use judgment. Principles inform decisions; they don't make them for you.

---

## Quick Reference

| Principle | Summary | Anti-Pattern |
|-----------|---------|--------------|
| **KISS** | Simplicity over cleverness | Complex one-liners |
| **DRY** | Single source of truth | Copy-pasted code |
| **GIGO** | Validate input quality | Trust all data blindly |
| **YAGNI** | Build only what's needed | Speculative features |
| **Fail Fast** | Immediate, clear errors | Silent failures |
| **Separation of Concerns** | One job per component | God functions |

---

## Exercise: Spot the Violations

### Exercise 1: Which Principle?

For each code smell, identify which principle is violated:

1. A function that's 300 lines long
2. The tax rate `0.08` appears in 12 different files
3. A form accepts any input without checking
4. A feature nobody requested took two weeks to build
5. An error is silently logged and execution continues

<details>
<summary>Answers</summary>

1. KISS / Separation of Concerns (too complex, too many responsibilities)
2. DRY (magic number repeated)
3. GIGO (no input validation)
4. YAGNI (built something not needed)
5. Fail Fast (should have raised an error)

</details>

### Exercise 2: Apply to Your Code

Review code you've written (or AI has generated for you).

Find one example of each:
- Something that could be simpler (KISS)
- Something that's repeated (DRY)
- A place that should validate input (GIGO)

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| KISS | Complexity is a cost; pay it only when necessary |
| DRY | One source of truth prevents inconsistency |
| GIGO | Validate inputs; don't trust data blindly |
| YAGNI | Build for actual needs, not hypothetical ones |
| Fail Fast | Clear errors beat silent corruption |
| Separation of Concerns | One job per component enables change |

---

## Reflection Questions

1. Why might an experienced developer write more code to keep things simple?

2. You see the same 5 lines of code in 3 places. Should you always abstract it into a function? What would make you say no?

3. How do these principles apply to working with AI assistants?

---

*Next module: Communication — writing for humans, including your future self.*
