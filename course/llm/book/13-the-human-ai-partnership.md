# The Human-AI Partnership

> *"You can mass-produce code now. You cannot mass-produce good judgment."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Apply** vibe engineering principles consistently
2. **Recognize** when to override AI suggestions
3. **Maintain** professional accountability while using AI
4. **Build** sustainable AI collaboration habits
5. **Articulate** what makes AI use professional vs. unprofessional

---

## Vibe Engineering Revisited

In Module 04, we introduced the distinction:

| Approach | Characteristics | Outcome |
|----------|-----------------|---------|
| **Vibe Coding** | Accept AI output without verification | Fast but fragile |
| **Vibe Engineering** | Use AI with professional rigor | Sustainable and responsible |

This module goes deeper. What does vibe engineering actually look like in practice?

---

## The Professional Standard

### What Stays the Same

Using AI doesn't change fundamental professional responsibilities:

| Responsibility | Still Yours |
|----------------|-------------|
| **Correctness** | Code must work as intended |
| **Security** | No vulnerabilities introduced |
| **Maintainability** | Others can understand and modify |
| **Performance** | Meets requirements |
| **Documentation** | Appropriate for the codebase |

AI is a tool. You're still the engineer.

### What Changes

Some practices adapt to accommodate AI:

| Practice | Traditional | With AI |
|----------|-------------|---------|
| Code review | Review human code | Review human + AI code |
| Testing | Test what you wrote | Test what you wrote + accepted |
| Documentation | Document your decisions | Document your decisions + AI's role |
| Learning | Learn by doing | Learn by doing + evaluating AI |

The bar doesn't lower. The workflow adapts.

---

## The Accountability Question

### Who's Responsible?

When AI writes buggy code that you ship, who's accountable?

**Answer**: You are.

This isn't philosophical — it's practical:
- AI can't be fired, sued, or held responsible
- AI doesn't have professional reputation
- AI isn't part of your team's accountability structure

**Every line of code you commit is your code**, regardless of origin.

### The Test

Before committing any AI-generated code, ask:

> "Am I comfortable explaining this code in a code review? Could I defend why it's written this way?"

If no: don't commit it yet. Understand it first.

### Documentation Practices

When AI played a significant role:

```python
# Note: Initial implementation generated with AI assistance.
# Reviewed and tested by [your name] on [date].
# Key modifications: [what you changed and why]
```

This isn't required everywhere — use judgment. For complex logic or unusual approaches, transparency helps future maintainers.

**Emerging practice**: Some organizations now require AI disclosure in commits or pull requests. Even where not required, transparency about significant AI assistance builds team trust. Check your team's norms.

---

## When to Override AI

AI makes mistakes. Knowing when to override requires judgment.

### Override When: The Code Doesn't Match Intent

AI understood something differently than you meant:

**You asked**: "Make this function faster"
**AI did**: Changed the algorithm but broke edge cases
**Override**: "The original edge case handling was intentional. Optimize without changing that behavior."

### Override When: The Approach Is Wrong

AI chose a suboptimal path:

**AI suggests**: Custom implementation of common pattern
**Better**: Use the established library your team already uses
**Override**: "Use the xyz library we already have as a dependency instead."

### Override When: It Violates Standards

AI doesn't know your team's conventions:

**AI suggests**: CamelCase variable names
**Your codebase**: snake_case everywhere
**Override**: "Follow snake_case convention for this codebase."

### Override When: Security Concerns

AI may generate vulnerable patterns:

**AI suggests**: Interpolating user input directly into SQL
**Reality**: SQL injection vulnerability
**Override**: "Use parameterized queries instead."

### Don't Override Just Because

Sometimes AI's approach is unfamiliar but valid:

**AI suggests**: Approach you haven't seen before
**Before overriding**: Research it. It might be better.

Unfamiliar ≠ wrong.

---

## Building Good Habits

### Habit 1: Read Before Accepting

**The temptation**: AI generated code → Tab → move on

**The practice**: AI generated code → read → understand → then accept or modify

Even for simple completions, a quick read catches subtle issues.

### Habit 2: Test What You Accept

**The temptation**: AI says it works → assume it works

**The practice**: AI says it works → run the tests → verify it works

Trust but verify. Always.

### Habit 3: Maintain Your Skills

**The risk**: Rely on AI so much that your own skills atrophy

**The practice**:
- Sometimes write code without AI
- Challenge yourself to understand before asking AI
- Use AI as augmentation, not replacement

You should be able to code without AI. AI makes you faster, not capable.

### Habit 4: Stay Critical

**The temptation**: AI sounds confident → must be right

**The practice**: Confidence is performance. Evaluate claims independently.

AI doesn't know when it's wrong. You must.

### Habit 5: Learn from AI

**The opportunity**: AI shows patterns you don't know

**The practice**: When AI suggests something unfamiliar, learn it. Ask "why this approach?"

AI can be a teacher, not just a typist.

---

## The Partnership Model

### Good Partnership

```
You                          AI
────                         ────
Define goals                 Suggest approaches
Make decisions               Provide options
Set constraints              Work within them
Review output                Generate output
Take responsibility          Assist
Learn                        Demonstrate patterns
```

### Bad Partnership

```
You                          AI
────                         ────
Accept everything            Generate everything
No review                    Confident errors
Blame AI                     Can't be blamed
Don't learn                  Enables avoidance
No accountability            No accountability
```

The difference is you, not the AI.

---

## Communication Patterns

### Pattern 1: Explicit Constraints

Don't assume AI knows your requirements:

```markdown
Write a function to parse dates.

Constraints:
- Must handle ISO 8601 format
- Must return None for invalid dates (not raise exception)
- Must handle timezone-aware and naive datetimes
- Use only standard library (no dateutil)
```

Constraints prevent the "but I didn't want that" problem.

### Pattern 2: Iterative Refinement

First attempt rarely perfect:

```
You: Write a user authentication function
AI: [generates code]
You: Good start. Add rate limiting for failed attempts.
AI: [adds rate limiting]
You: The lockout should be 15 minutes, not permanent.
AI: [adjusts]
You: Now add logging for security audits.
AI: [adds logging]
```

Each iteration improves the result.

### Pattern 3: Explain Then Generate

For complex tasks, understanding before coding:

```
You: Before writing code, explain how you would approach
     implementing a job queue with retry logic.

AI: [explains approach]

You: That makes sense, but we need to handle poison messages
     differently. They should go to a dead letter queue.

AI: [adjusts understanding]

You: Now implement it.
```

Align understanding before investing in code.

### Pattern 4: Review and Critique

Use AI to review its own work:

```
You: Here's the code you just wrote. What are potential
     problems or edge cases it doesn't handle?

AI: [identifies issues]

You: Fix issue #2, the others are acceptable for our use case.
```

AI can often spot issues in its own output when asked directly.

---

## When AI Isn't the Answer

### Don't Use AI When:

**You need to learn**: If understanding the problem is the goal, struggle through it yourself first.

**Novel/unprecedented**: AI learns from existing patterns. Truly new problems need human creativity.

**High-stakes one-shot**: When you can't iterate and failure is costly, human expertise is safer.

**Team knowledge transfer**: Teaching teammates requires human explanation, not AI generation.

### Do Use AI When:

**You understand the problem**: AI accelerates implementation of understood solutions.

**Patterns exist**: AI excels at recognized patterns with variations.

**Iteration is possible**: You can test, refine, and improve.

**Time is valuable**: Boilerplate and scaffolding benefit from acceleration.

---

## Practical Exercises

### Exercise 1: The Accountability Audit

Review code you recently accepted from AI:

1. Can you explain every line?
2. What would you say if asked "why this approach?" in review?
3. Are there parts you accepted without understanding?

For any you can't explain: go back and learn them.

### Exercise 2: Override Practice

Give AI a task with deliberate constraints it might miss:

```markdown
Write a sorting function.
- Must be stable (preserve order of equal elements)
- Must not use more than O(1) extra space
- Must handle the case where array contains None values
```

When AI produces code:
1. Does it meet all constraints?
2. If not, practice overriding with clear corrections
3. Iterate until all constraints are met

### Exercise 3: Skill Maintenance

Complete a meaningful coding task without AI assistance:

1. Choose something you'd normally use AI for
2. Complete it yourself
3. Then ask AI how it would do it
4. Compare approaches — what did you learn?

### Exercise 4: Partnership Reflection

For your next project session:

1. Keep a log of every AI interaction
2. For each: did you review before accepting?
3. For each: could you explain the code?
4. At the end: what patterns do you notice?

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Accountability | You own all code you commit, regardless of origin |
| Professional standards | Don't lower them; adapt workflow around them |
| Override judgment | AI makes mistakes; knowing when is key |
| Good habits | Read, test, stay critical, keep learning |
| Partnership | You decide, AI assists — not the reverse |

---

## Connection to What's Next

You understand the relationship. Final Tier 3 module:

- **Module 14**: Iterating with AI — patterns for complex, multi-step projects

Then Tier 4 covers ethics: bias, privacy, and the future of work.

---

## Reflection Questions

1. Have you ever committed code you didn't fully understand? How did that turn out? How would you handle it differently now?

2. "AI makes you faster, not capable." Do you agree? What's the difference between speed and capability?

3. How would you explain to a non-technical person why you're responsible for AI-generated code that you ship?

---

*Next module: Iterating with AI — superpowers patterns for complex projects.*
