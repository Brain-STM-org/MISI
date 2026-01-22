---
theme: default
title: "Module 07: Testing Fundamentals"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 07: Testing Fundamentals
drawings:
  persist: false
transition: slide-left
---

# Module 07

## Testing Fundamentals

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Testing is often skipped by beginners but is essential for professional work.
This module introduces the mindset and vocabulary of testing.

Estimated time: 25 minutes
Delivery: Just-in-time when teams need it
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"I don't write tests because I'm a good programmer. I write tests because I'm not a good enough programmer to get everything right the first time."
</div>

<div class="mt-4 text-gray-500">
— Adapted from various wise developers
</div>

<!--
This reframes testing as humility, not overhead.
Even experts write tests because everyone makes mistakes.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** why testing is essential, not optional
2. **Distinguish** between types of tests and when to use each
3. **Think** like a tester — finding edge cases before users do
4. **Read** a test and understand what it's verifying
5. **Evaluate** AI-generated tests for quality and coverage

</v-clicks>

<!--
This module focuses on mindset and reading, not writing tests.
Students will understand testing before they need to write tests.
-->

---
layout: section
---

# Why Test?

Code that works today can break tomorrow

---

# The Hidden Fragility

Code that works today can break tomorrow:

<v-clicks>

- You add a new feature → accidentally break an existing one
- A teammate modifies a shared function → your code stops working
- You update a dependency → subtle behavior changes
- You revisit code after a month → "improve" something, break something

</v-clicks>

<!--
Software is interconnected.
Changes in one place can break things elsewhere.
-->

---

# Discovery Without Tests

Without tests, you discover breaks from:

<v-clicks>

- Angry users
- Mysterious production failures
- Embarrassing demos

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-green-900 rounded text-lg">
With tests:<br>
Run tests → see red → <strong>know exactly what broke</strong>
</div>

</v-click>

<!--
Tests shift discovery from users to developers.
Finding bugs early is always better.
-->

---

# The Confidence Tests Provide

Tests let you change code **confidently**:

<v-clicks>

- "I can refactor this function because tests will catch if I break it"
- "I can merge this PR because the tests pass"
- "I can deploy on Friday because the test suite is green"

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Without tests, every change is a leap of faith.
</div>

</v-click>

<!--
Confidence is the real value of tests.
Changes without tests are anxiety-inducing.
-->

---

# Tests Are Specifications

Tests document what the code *should* do:

```python
def test_calculate_total_applies_discount():
    items = [Item(price=100), Item(price=50)]
    discount = 0.10  # 10%

    total = calculate_total(items, discount)

    assert total == 135  # (100 + 50) * 0.90
```

<v-click>

This test tells you:
- Function takes items and a discount
- Discount applies to the total, not per-item
- 10% discount on $150 gives $135

</v-click>

<!--
Tests are executable documentation.
They show expected behavior, not just describe it.
-->

---
layout: section
---

# The Testing Mindset

Try to break your own code

---

# Think Adversarially

When you write code, you imagine the **happy path**:

<v-click>

*"The user enters a valid email, clicks submit, sees success."*

</v-click>

<v-click>

When you test, imagine **everything that could go wrong**:

</v-click>

<v-clicks>

- What if the email is empty?
- What if it has no @ symbol?
- What if it's 10,000 characters long?
- What if the user clicks submit twice quickly?
- What if the network fails mid-submission?

</v-clicks>

<!--
Testing mindset is adversarial.
Ask "what could go wrong?" not "will this work?"
-->

---

# The Input Space

For any function, consider:

| Category | Examples |
|----------|----------|
| **Normal inputs** | Typical, expected values |
| **Boundary values** | 0, 1, max, min, empty |
| **Invalid inputs** | Wrong type, null, malformed |
| **Edge cases** | Unusual but possible scenarios |

<!--
These categories help systematically find test cases.
Most bugs hide in boundaries and edge cases.
-->

---

# Example: Testing `average(numbers)`

```python
def average(numbers):
    return sum(numbers) / len(numbers)
```

| Test Case | Input | Expected | Why Test This? |
|-----------|-------|----------|----------------|
| Normal | `[1, 2, 3]` | `2.0` | Basic functionality |
| Single element | `[5]` | `5.0` | Boundary |
| Empty list | `[]` | Error or 0? | Edge case |
| Negative numbers | `[-1, 1]` | `0.0` | Valid but unusual |

<v-click>

<div class="mt-4 text-gray-400">
The empty list case is interesting — current code crashes (division by zero). Is that acceptable?
</div>

</v-click>

<!--
The empty list case forces a design decision.
Tests often reveal ambiguity in requirements.
-->

---
layout: section
---

# Types of Tests

Different levels, different purposes

---

# Unit Tests

Test individual functions or classes **in isolation**.

```python
def test_is_palindrome():
    assert is_palindrome("radar") == True
    assert is_palindrome("hello") == False
```

<v-clicks>

**Characteristics:**
- Fast (milliseconds)
- Many of them (hundreds to thousands)
- Test one thing each
- No external dependencies

**Good for:** Verifying logic correctness

</v-clicks>

<!--
Unit tests are the foundation.
They're fast, numerous, and focused.
-->

---

# Integration Tests

Test how **components work together**.

```python
def test_user_signup_flow():
    response = api.post("/signup", {"email": "test@example.com"})

    user = database.find_user("test@example.com")
    assert user is not None

    assert email_queue.contains("test@example.com")
```

<v-clicks>

**Characteristics:**
- Slower (seconds)
- Fewer of them
- Test interactions
- May require setup (test databases)

**Good for:** Verifying components integrate correctly

</v-clicks>

<!--
Integration tests catch issues between components.
They're slower but test realistic scenarios.
-->

---

# End-to-End (E2E) Tests

Test the **entire application** as a user would experience it.

```python
def test_purchase_flow():
    browser.goto("https://shop.example.com")
    browser.click("Add to Cart", product="Widget")
    browser.click("Checkout")
    browser.fill("Credit Card", "4111111111111111")
    browser.click("Purchase")

    assert browser.text_contains("Order confirmed")
```

<v-clicks>

**Characteristics:**
- Slowest (seconds to minutes)
- Fewest of them
- Test real user scenarios
- Brittle (break when UI changes)

**Good for:** Verifying critical paths

</v-clicks>

<!--
E2E tests are expensive but catch real issues.
Use them sparingly for critical flows.
-->

---

# The Testing Pyramid

```
        /\
       /  \      E2E Tests (few)
      /----\
     /      \    Integration Tests (some)
    /--------\
   /          \  Unit Tests (many)
  /____________\
```

<v-click>

Most tests should be unit tests (fast, focused).

Fewer integration tests. Fewest E2E tests.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Why? Fast tests give quick feedback. Slow tests are expensive.
</div>

</v-click>

<!--
The pyramid is a guideline, not a rule.
Fast feedback is more valuable than comprehensive slow tests.
-->

---
layout: section
---

# Anatomy of a Test

Arrange → Act → Assert

---

# The AAA Pattern

Most tests follow this structure:

```python
def test_discount_calculation():
    # Arrange: Set up the test conditions
    cart = Cart()
    cart.add_item(Item("Widget", price=100))
    cart.add_item(Item("Gadget", price=50))

    # Act: Perform the action being tested
    total = cart.calculate_total(discount=0.20)

    # Assert: Verify the expected outcome
    assert total == 120  # (100 + 50) * 0.80
```

<v-click>

- **Arrange**: What's the starting state?
- **Act**: What action are we testing?
- **Assert**: What should be true afterward?

</v-click>

<!--
AAA makes tests readable and consistent.
Anyone can understand what a test does.
-->

---

# Good Tests Are...

| Quality | Meaning |
|---------|---------|
| **Focused** | Test one thing per test |
| **Readable** | Someone can understand intent at a glance |
| **Reliable** | Same result every time |
| **Fast** | Run in milliseconds when possible |
| **Independent** | Don't depend on other tests |

<!--
These qualities make tests valuable.
Bad tests waste time and give false confidence.
-->

---
layout: section
---

# Testing with AI

Powerful but dangerous

---

# AI-Generated Tests: The Good

```
You: "Write tests for this calculate_total function"

AI: Here are tests covering normal operation, empty input,
    negative prices, and discount boundaries...
```

<v-clicks>

AI can:
- Generate many test cases quickly
- Suggest edge cases you didn't think of
- Write boilerplate test structure

</v-clicks>

<!--
AI is efficient at generating test cases.
It can save significant time.
-->

---

# AI-Generated Tests: The Danger

AI-generated tests can be **dangerous**:

<v-click>

**Test the implementation, not the specification:**

```python
# Dangerous: Tests what code DOES, not what it SHOULD do
def test_calculate_total():
    # AI looked at implementation and wrote a test that passes
    # But is 108.0 actually correct? Who knows!
    assert calculate_total([100], 0.08) == 108.0
```

</v-click>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
AI might generate 50 tests that all pass but test the <strong>wrong things</strong>.
</div>

</v-click>

<!--
This is the critical danger.
AI tests what the code does, not what it should do.
-->

---

# Using AI for Testing Wisely

<v-clicks>

1. **Specify what you want tested**, don't just say "write tests"
   - "Write tests including edge cases for zero discount, 100% discount, and negative prices"

2. **Review generated tests critically**
   - Do they test *behavior* or just *implementation*?
   - Are the expected values correct?

3. **Add tests AI missed**
   - You know your domain better than AI

4. **Use AI to find edge cases**
   - "What edge cases should I test for email validation?"

</v-clicks>

<!--
AI is a tool, not a replacement.
Human review is essential.
-->

---
layout: section
---

# When Tests Fail

A failing test is a gift

---

# Test Failure Reasons

<v-clicks>

1. **The code is wrong** — fix the code
2. **The test is wrong** — fix the test
3. **The requirements changed** — update both
4. **The test is flaky** — fix the test infrastructure

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Investigate to determine which case you're in.
</div>

</v-click>

<!--
Not all test failures mean bugs in code.
Sometimes the test itself is wrong.
-->

---

# Reading Test Failures

```
FAILED test_user_signup.py::test_email_validation
   assert is_valid_email("user@test") == True
   AssertionError: assert False == True
```

<v-click>

This tells you:
- **Which test failed**: `test_email_validation`
- **What was asserted**: `is_valid_email("user@test") == True`
- **What happened**: `False` instead of `True`

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Now investigate: Is "user@test" a valid email? Should the function accept it?
</div>

</v-click>

<!--
Failure messages give you a starting point.
Read them carefully before investigating.
-->

---

# Regression Testing

When you find a bug:

<v-clicks>

1. Write a test that reproduces it (this test fails)
2. Fix the bug
3. Test passes
4. The bug can never sneak back undetected

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
This is <strong>regression testing</strong> — preventing old bugs from returning.
</div>

</v-click>

<!--
Tests lock in fixes.
Bugs that return are regression bugs.
-->

---
layout: section
---

# Exercises

Practice the testing mindset

---

# Exercise 1: Find the Edge Cases

Consider: `def calculate_shipping(weight, distance)`

<div class="text-lg">

List at least 8 test cases:
- The input values
- What you expect to happen
- Why this case matters

</div>

<v-click>

<div class="mt-4 text-sm text-gray-400">
Consider: zero values, negatives, very large numbers, decimals, boundary thresholds...
</div>

</v-click>

<!--
This exercises the adversarial mindset.
Students should think of many cases.
-->

---

# Exercise 2: Evaluate AI Tests

<div class="text-lg">

Ask an AI to generate tests for `is_leap_year(year)`.

Then critically evaluate:
- Did it cover years divisible by 4?
- Did it cover years divisible by 100 (not leap years)?
- Did it cover years divisible by 400 (leap years)?
- Did it handle year 0? Negative years?

</div>

<!--
This exercises critical evaluation of AI-generated tests.
Leap year rules are well-defined but tricky.
-->

---

# Exercise 3: Read a Test Suite

<div class="text-lg">

Find a well-known open source project on GitHub.

Navigate to their tests. Pick a test file and read:
- Can you understand what they're testing?
- What patterns do you notice?
- How are tests organized?

</div>

<v-click>

<div class="mt-4 text-gray-400">
Try: <a href="https://github.com/psf/requests" target="_blank">requests</a> (Python) or <a href="https://github.com/lodash/lodash" target="_blank">lodash</a> (JavaScript)
</div>

</v-click>

<!--
Reading real test suites shows professional patterns.
Students learn by example.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Tests prove behavior | Not that code runs, but that it does the right thing |
| Think adversarially | Try to break your own code |
| Many unit tests, fewer E2E | Fast feedback, broad coverage |
| AI helps but doesn't replace | Review generated tests critically |
| Failing tests are information | They tell you something changed |

<!--
These are the takeaways.
Testing is a mindset, not just a task.
-->

---
layout: section
---

# Reflection

---

# Reflection Questions

<v-clicks>

1. Why might a team require tests to pass before merging a PR?

2. You're short on time. Should you skip writing tests to ship faster? What are you trading off?

3. A test passes on your computer but fails on a teammate's. What might be happening?

</v-clicks>

<!--
Question 1: Gates quality, prevents regressions
Question 2: Speed vs. confidence, technical debt
Question 3: Environment differences, flaky tests
-->

---
layout: center
class: text-center
---

# Module 07 Complete

You now understand why and how we test.

<div class="mt-8 text-xl text-gray-400">
Next: Module 08 — Debugging Techniques
</div>

<div class="mt-8">
  <a href="./08-debugging" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 08 →
  </a>
</div>

<!--
Students now have the testing mindset.
The next module covers what to do when things go wrong.
-->
