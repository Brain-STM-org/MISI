# Testing Fundamentals

> *"I don't write tests because I'm a good programmer. I write tests because I'm not a good enough programmer to get everything right the first time."*
> — Adapted from various wise developers

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** why testing is essential, not optional
2. **Distinguish** between types of tests and when to use each
3. **Think** like a tester — finding edge cases before users do
4. **Read** a test and understand what it's verifying
5. **Evaluate** AI-generated tests for quality and coverage

---

## Why Test?

You've written code. It seems to work. Why write more code (tests) to verify it?

### The Hidden Fragility

Code that works today can break tomorrow:

- You add a new feature → accidentally break an existing one
- A teammate modifies a shared function → your code stops working
- You update a dependency → subtle behavior changes
- You revisit code after a month → "improve" something, break something

Without tests, you discover these breaks from:
- Angry users
- Mysterious production failures
- Embarrassing demos

With tests, you discover them immediately:
- Run tests → see red → know exactly what broke

### The Confidence Tests Provide

Tests let you change code **confidently**:

- "I can refactor this function because tests will catch if I break it"
- "I can merge this PR because the tests pass"
- "I can deploy on Friday because the test suite is green"

Without tests, every change is a leap of faith.

### Tests Are Specifications

Tests document what the code *should* do:

```python
def test_calculate_total_applies_discount():
    items = [Item(price=100), Item(price=50)]
    discount = 0.10  # 10%

    total = calculate_total(items, discount)

    assert total == 135  # (100 + 50) * 0.90
```

This test tells you:
- The function takes items and a discount
- Discount is applied to the total, not per-item
- A 10% discount on $150 gives $135

Even without reading the implementation, you understand the expected behavior.

---

## The Testing Mindset

Good testing isn't about proving your code works. It's about **trying to break it**.

### Think Adversarially

When you write code, you imagine the happy path:
- "The user enters a valid email, clicks submit, sees success."

When you test, imagine everything that could go wrong:
- What if the email is empty?
- What if it has no @ symbol?
- What if it's 10,000 characters long?
- What if the user clicks submit twice quickly?
- What if the network fails mid-submission?

Each "what if" is a potential test case.

### The Input Space

For any function, consider:

| Category | Examples |
|----------|----------|
| **Normal inputs** | Typical, expected values |
| **Boundary values** | 0, 1, max, min, empty |
| **Invalid inputs** | Wrong type, null, malformed |
| **Edge cases** | Unusual but possible scenarios |

Example for a function that calculates average:

```python
def average(numbers):
    return sum(numbers) / len(numbers)
```

| Test Case | Input | Expected | Why Test This? |
|-----------|-------|----------|----------------|
| Normal | `[1, 2, 3]` | `2.0` | Basic functionality |
| Single element | `[5]` | `5.0` | Boundary |
| Empty list | `[]` | Error or 0? | Edge case — what *should* happen? |
| Negative numbers | `[-1, 1]` | `0.0` | Valid but unusual |
| Large numbers | `[10**9, 10**9]` | `10**9` | Potential overflow? |
| Floats | `[1.5, 2.5]` | `2.0` | Type variation |

The empty list case is interesting — the current code will crash (division by zero). Is that acceptable? A test forces you to decide.

---

## Types of Tests

Tests exist at different levels, each serving a purpose.

### Unit Tests

Test individual functions or classes in isolation.

```python
def test_is_palindrome():
    assert is_palindrome("radar") == True
    assert is_palindrome("hello") == False
    assert is_palindrome("A man a plan a canal Panama") == True  # ?
```

**Characteristics:**
- Fast (milliseconds)
- Many of them (hundreds to thousands)
- Test one thing each
- No external dependencies (databases, networks, files)

**Good for:** Verifying logic correctness

### Integration Tests

Test how components work together.

```python
def test_user_signup_flow():
    # Create a user through the API
    response = api.post("/signup", {"email": "test@example.com", "password": "secure123"})

    # Verify database was updated
    user = database.find_user("test@example.com")
    assert user is not None

    # Verify welcome email was queued
    assert email_queue.contains("test@example.com")
```

**Characteristics:**
- Slower (seconds)
- Fewer of them (dozens to hundreds)
- Test interactions between components
- May require setup (test databases, mock services)

**Good for:** Verifying components integrate correctly

### End-to-End (E2E) Tests

Test the entire application as a user would experience it.

```python
def test_purchase_flow():
    browser.goto("https://shop.example.com")
    browser.click("Add to Cart", product="Widget")
    browser.click("Checkout")
    browser.fill("Credit Card", "4111111111111111")
    browser.click("Purchase")

    assert browser.text_contains("Order confirmed")
```

**Characteristics:**
- Slowest (seconds to minutes)
- Fewest (a handful to dozens)
- Test real user scenarios
- Brittle (break when UI changes)

**Good for:** Verifying critical paths work in production-like conditions

### The Testing Pyramid

```
        /\
       /  \      E2E Tests (few)
      /----\
     /      \    Integration Tests (some)
    /--------\
   /          \  Unit Tests (many)
  /____________\
```

Most tests should be unit tests (fast, focused). Fewer integration tests. Fewest E2E tests.

Why? Fast tests give quick feedback. Slow tests are expensive to run and maintain.

---

## Anatomy of a Test

Most tests follow the same structure:

### Arrange → Act → Assert

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

This pattern makes tests readable:
- **Arrange**: What's the starting state?
- **Act**: What action are we testing?
- **Assert**: What should be true afterward?

### Good Tests Are

| Quality | Meaning |
|---------|---------|
| **Focused** | Test one thing per test |
| **Readable** | Someone can understand intent at a glance |
| **Reliable** | Same result every time (no randomness) |
| **Fast** | Run in milliseconds when possible |
| **Independent** | Don't depend on other tests |

---

## Testing with AI Assistants

AI can generate tests quickly. This is powerful — and dangerous.

### AI-Generated Tests: The Good

```
You: "Write tests for this calculate_total function"

AI: Here are tests covering normal operation, empty input,
    negative prices, and discount boundaries...
```

AI can:
- Generate many test cases quickly
- Suggest edge cases you didn't think of
- Write boilerplate test structure

### AI-Generated Tests: The Danger

AI-generated tests can:

**Test the implementation, not the specification**

```python
# Dangerous: This tests what the code DOES, not what it SHOULD do
def test_calculate_total():
    # AI looked at the implementation and wrote a test that passes
    # But is 108.0 actually correct? Who knows!
    assert calculate_total([100], 0.08) == 108.0
```

**Miss important edge cases**

AI might generate ten tests for normal cases but miss the critical failure mode.

**Give false confidence**

"We have 50 tests!" — but do they test the right things?

### How to Use AI for Testing Wisely

1. **Specify what you want tested**, don't just say "write tests"
   - "Write tests for the discount function, including edge cases for zero discount, 100% discount, and negative prices"

2. **Review generated tests critically**
   - Do they test *behavior* or just *implementation*?
   - Are the expected values correct?
   - What's missing?

3. **Add tests AI missed**
   - You know your domain better than AI
   - Think about what could go wrong in your specific context

4. **Use AI to find edge cases**
   - "What edge cases should I test for a function that validates email addresses?"
   - AI's suggestions can spark your thinking

---

## When Tests Fail

A failing test is a gift. It's telling you something.

### Test Failure Reasons

1. **The code is wrong** — fix the code
2. **The test is wrong** — fix the test
3. **The requirements changed** — update both
4. **The test is flaky** — fix the test infrastructure

### Reading Test Failures

```
FAILED test_user_signup.py::test_email_validation
   assert is_valid_email("user@test") == True
   AssertionError: assert False == True
```

This tells you:
- Which test failed (`test_email_validation`)
- What was asserted (`is_valid_email("user@test") == True`)
- What actually happened (`False`)

Now you investigate: Is `user@test` a valid email? Should the function accept it?

### Tests as Bug Detectors

When you find a bug:
1. Write a test that reproduces it (this test will fail)
2. Fix the bug
3. Test passes
4. The bug can never sneak back undetected

This is **regression testing** — preventing old bugs from returning.

---

## Exercise: Thinking Like a Tester

### Exercise 1: Find the Edge Cases

Consider a function: `def calculate_shipping(weight, distance)`

List at least 8 test cases you'd want to write. For each, note:
- The input values
- What you expect to happen
- Why this case matters

<details>
<summary>Some cases to consider</summary>

- Normal: 5kg, 100km
- Zero weight: 0kg, 100km (is this valid?)
- Zero distance: 5kg, 0km (free shipping? error?)
- Negative weight: -5kg (error? or abs value?)
- Very heavy: 1000kg (different rate? rejection?)
- Very far: 10000km (international?)
- Decimal weight: 2.5kg
- Boundary: exactly at rate threshold weights

</details>

### Exercise 2: Evaluate AI Tests

Ask an AI to generate tests for a simple function like `is_leap_year(year)`.

Then critically evaluate:
- Did it cover years divisible by 4?
- Did it cover years divisible by 100 (not leap years)?
- Did it cover years divisible by 400 (leap years)?
- Did it handle year 0? Negative years? Non-integer input?

### Exercise 3: Read a Test Suite

Find a well-known open source project on GitHub (like [requests](https://github.com/psf/requests) for Python or [lodash](https://github.com/lodash/lodash) for JavaScript).

Navigate to their tests. Pick a test file and read a few tests:
- Can you understand what they're testing?
- What patterns do you notice?
- How are tests organized?

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Tests prove behavior | Not that code runs, but that it does the right thing |
| Think adversarially | Try to break your own code |
| Many unit tests, fewer E2E | Fast feedback, broad coverage |
| AI helps but doesn't replace | Review generated tests critically |
| Failing tests are information | They tell you something changed |

---

## Reflection Questions

1. Why might a team require tests to pass before merging a PR?

2. You're short on time. Should you skip writing tests to ship faster? What are you trading off?

3. A test passes on your computer but fails on a teammate's. What might be happening?

---

*Next module: Debugging Techniques — when things go wrong, how do you find out why?*
