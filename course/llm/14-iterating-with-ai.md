# Iterating with AI

> *"The first draft is just a starting point. The magic is in the iteration."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Apply** proven patterns for complex AI-assisted projects
2. **Use** TDD with AI agents effectively
3. **Maintain** context across long development sessions
4. **Debug** effectively with AI assistance
5. **Decide** when to continue vs. reset

---

## Why Iteration Matters

Simple tasks work on first try. Complex projects don't.

The difference between frustration and success with AI often comes down to:
- How you structure iterative work
- How you maintain context across sessions
- How you handle when things go wrong

This module covers patterns that work.

---

## Pattern 1: Test-Driven Development with AI

### The Basic Flow

TDD with AI is powerful because tests provide **objective verification**:

```
1. Write a failing test (you or AI)
2. Ask AI to make it pass
3. AI generates implementation
4. Run test — does it pass?
5. If not: AI sees error, tries again
6. Repeat until green
7. Refactor if needed
```

The test is the specification. AI implements to spec.

### Why TDD + AI Works

| TDD Benefit | AI Amplification |
|-------------|------------------|
| Clear specification | AI knows exactly what to achieve |
| Immediate feedback | AI can iterate on failures |
| Regression protection | AI changes don't break existing |
| Documentation | Tests show intended behavior |

### Example Session

```
You: Write a test for a function that calculates compound interest.
     Principal, rate (annual), years, and compounds per year.

AI: [Writes test]
```

```python
def test_compound_interest():
    # $1000 at 5% for 10 years, compounded monthly
    result = compound_interest(1000, 0.05, 10, 12)
    assert abs(result - 1647.01) < 0.01

    # Edge case: 0 years
    assert compound_interest(1000, 0.05, 0, 12) == 1000

    # Edge case: simple interest (compound once per year)
    result = compound_interest(1000, 0.10, 1, 1)
    assert result == 1100
```

```
You: Good tests. Now implement the function to pass them.

AI: [Writes implementation, runs tests]

Tests: 3 passed

You: Add a test for negative principal (should raise ValueError)

AI: [Adds test, runs — fails, implements validation, tests pass]
```

### TDD + AI Best Practices

1. **Write tests first** (or have AI write them for review)
2. **Review tests carefully** — bad tests = bad implementation
3. **Keep tests simple** — complex tests obscure the requirement
4. **Run tests yourself** — don't just trust "tests pass"
5. **Refactor after green** — passing tests enable safe cleanup

---

## Pattern 2: Planning Before Delegation

### The Anti-Pattern

```
You: Build me a user authentication system.
AI: [Generates 500 lines of code]
You: Wait, that's not what I wanted...
```

Underspecified requests produce wrong implementations.

### The Pattern

```
You: I need to build user authentication.
     Before writing any code, outline:
     1. What components are needed
     2. What decisions need to be made
     3. What trade-offs exist

AI: Components needed:
    - User model (storage)
    - Authentication endpoints (login, register, logout)
    - Session management (tokens or sessions)
    - Password hashing

    Decisions to make:
    - JWT vs session-based auth?
    - Email verification required?
    - OAuth providers to support?
    - Password requirements?

    Trade-offs:
    - JWT: Stateless but can't revoke
    - Sessions: Revocable but need storage
    - [etc.]

You: Let's use JWT, no email verification for v1,
     no OAuth yet, minimum 8 character passwords.
     Now implement step by step, starting with the User model.
```

### Why Planning Works

| Without Planning | With Planning |
|------------------|---------------|
| AI assumes | AI asks/confirms |
| Wrong direction taken | Direction agreed first |
| Rework needed | Implementation matches intent |
| Frustration | Collaboration |

### Planning Prompts

```markdown
Before implementing, create a plan:
1. What are the main components?
2. What are the dependencies between them?
3. What should we build first?
4. What edge cases should we handle?
```

```markdown
What questions do you need answered before you can
implement this correctly?
```

```markdown
What are three different approaches to this problem?
What are the trade-offs of each?
```

---

## Pattern 3: Memory Notes

### The Problem

Long sessions lose context. AI forgets earlier decisions.

### The Solution: External Memory

Maintain a document that tracks project state:

```markdown
# Project: Todo API

## Decisions Made
- Using Express + TypeScript
- PostgreSQL for storage
- JWT for auth (no refresh tokens v1)
- REST, not GraphQL

## Current State
- [x] User model and auth endpoints
- [x] Todo CRUD endpoints
- [ ] Sharing todos with other users
- [ ] Due date reminders

## Conventions
- Use Zod for validation
- Errors return { error: string, code: number }
- All dates in ISO 8601 format

## Known Issues
- Rate limiting not implemented
- No pagination on list endpoints

## Next Steps
1. Add sharing model
2. Create sharing endpoints
3. Update todo queries to include shared items
```

### Using Memory Notes

**Start of session**:
```
You: Here's the current state of my project: [paste memory notes]
     I want to continue with [next step].
```

**End of session**:
```
You: Summarize what we accomplished this session.
     I'll update my project notes.

AI: [Provides summary]
```

**When context drifts**:
```
You: Let me remind you of our project context: [paste relevant section]
     With that in mind, let's continue.
```

### Memory Note Benefits

- Survives session boundaries
- Can be shared with team
- Catches decisions that might be forgotten
- Provides continuity for any AI assistant

---

## Pattern 4: Root Cause Debugging

### The Anti-Pattern

```
You: This doesn't work. Fix it.
AI: [Tries random changes]
AI: [Still broken]
AI: [More random changes]
[Spiral continues]
```

### The Pattern

Systematic root cause analysis:

```
You: This function isn't working correctly.
     Before fixing anything:
     1. What is the expected behavior?
     2. What is the actual behavior?
     3. What are possible causes?
     4. How can we verify each cause?

AI: Expected: Function returns sorted array of users by name
    Actual: Array is not sorted

    Possible causes:
    1. Sort comparison function is wrong
    2. Sort is happening but result isn't returned
    3. Data is sorted then modified elsewhere

    Verification:
    1. Add console.log before and after sort
    2. Check comparison function logic
    3. Trace data flow after function returns

You: Let's verify cause #1 first.
```

### Debugging Prompts

```markdown
Don't fix this yet. First, explain:
1. What should this code do?
2. What is it actually doing?
3. What are three possible reasons for the discrepancy?
```

```markdown
Trace through this code with example input: [input]
Show me the value of each variable at each step.
```

```markdown
This test is failing: [test output]
What is the test expecting vs. what the code produces?
```

### Why Systematic Debugging Works

- Prevents thrashing on wrong causes
- Builds understanding, not just fixes
- Often reveals the real issue before trying fixes
- You learn more about the code

---

## Pattern 5: Sub-Agent Delegation

### When You Have Complex Tasks

For large tasks, use AI to break them down and potentially handle sub-pieces:

```
You: I need to migrate from MongoDB to PostgreSQL.
     This is a big task. Break it down:
     1. List all collections and their schemas
     2. For each, design the PostgreSQL equivalent
     3. Identify relationships to express as foreign keys
     4. Create migration script structure

AI: [Breaks down the task systematically]

You: Let's start with step 1. Analyze these MongoDB schemas: [schemas]

AI: [Analyzes]

You: Now step 2 for the User collection specifically.

AI: [Designs PostgreSQL User table]
```

### Delegation Guidelines

| Task Size | Approach |
|-----------|----------|
| Small | Single request |
| Medium | Plan → execute → verify |
| Large | Break down → handle pieces → integrate |
| Very large | Break down → delegate pieces in separate sessions |

### Avoiding Scope Creep

```
You: We're ONLY working on the User table right now.
     Don't modify or suggest changes to anything else.
     Focus on: [specific scope]
```

Explicit scope prevents the "while I'm here, I'll also change..." problem.

---

## Knowing When to Reset

### Signs You Should Continue

- Making steady progress
- AI remembers relevant context
- Errors are getting smaller
- Each iteration improves

### Signs You Should Reset

- Going in circles (same errors repeating)
- AI seems confused about the goal
- Responses are getting generic
- Context is polluted with wrong approaches

### The Reset Protocol

1. **Save what's working** — commit good code, note good decisions
2. **Identify what to keep** — what should transfer to new session?
3. **Write fresh context** — don't copy-paste the confused conversation
4. **Start clean** — new session with clear, focused goal

Sometimes a fresh start in 5 minutes beats another hour of confusion.

---

## Iteration Anti-Patterns

### Anti-Pattern: The Spiral

```
AI: [Code with bug]
You: Fix it
AI: [Different bug]
You: Fix it
AI: [Original bug again]
You: Fix it
[Forever]
```

**Solution**: Stop. Diagnose root cause. Start fresh if needed.

### Anti-Pattern: Scope Creep

```
You: Add user authentication
AI: [Adds auth + refactors database + changes API format + ...]
```

**Solution**: Explicit constraints. "ONLY add authentication. Don't change anything else."

### Anti-Pattern: Lost Context

```
You: [Long conversation]
AI: [Response that contradicts earlier decisions]
You: [Frustrated correction]
AI: [Still confused]
```

**Solution**: Memory notes. Periodic context reminders.

### Anti-Pattern: Premature Optimization

```
You: Write a simple hello world API
AI: [Adds caching, load balancing, microservices architecture]
```

**Solution**: "Keep it simple. We'll optimize later if needed."

---

## Practical Exercises

### Exercise 1: TDD Session

1. Choose a simple function (e.g., validate password strength)
2. Ask AI to write comprehensive tests first
3. Review and approve the tests
4. Ask AI to implement until tests pass
5. Add a new requirement via new test
6. Iterate

### Exercise 2: Planning Practice

Take a feature you want to build:

1. Ask AI to plan before implementing
2. Get clarifying questions answered
3. Agree on approach
4. Then implement step by step

Compare this to a session where you just said "build X."

### Exercise 3: Memory Notes

1. Create a memory notes template for a project
2. Use it across multiple sessions (or simulate with new chats)
3. Observe how explicit context helps

### Exercise 4: Debugging Drill

Find or create buggy code. Practice:

1. Having AI diagnose without fixing
2. Verifying hypotheses one at a time
3. Only fixing after root cause is confirmed

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| TDD + AI | Tests provide objective success criteria |
| Plan first | Agreement before implementation |
| Memory notes | External context survives sessions |
| Root cause debug | Diagnose before fixing |
| Know when to reset | Fresh start beats confused continuation |

---

## Tier 3 Complete

You've completed Agentic Development:

- **Module 10**: Security awareness for AI tools
- **Module 11**: How agents work
- **Module 12**: Tools of the trade
- **Module 13**: Professional partnership
- **Module 14**: Iteration patterns

**Next**: Tier 4 — Judgment & Ethics, delivered as capstone content.

---

## Reflection Questions

1. Think of a time when you got stuck in a debugging spiral. How could these patterns have helped?

2. "Sometimes a fresh start in 5 minutes beats another hour of confusion." When is reset the right choice? When is persistence better?

3. How do memory notes change the relationship between human and AI across time?

---

*Tier 4: Judgment & Ethics — the capstone modules before Demo Day.*
