# Your First Conversation

> *"Prompting an LLM is like directing an improv actor — give context, roles, and constraints for magic."*
> — Alvin Willison

## Learning Objectives

By the end of this module, you will be able to:

1. **Conduct** an effective AI conversation using structured prompts
2. **Distinguish** between vibe coding and vibe engineering
3. **Apply** the iteration pattern: prompt → evaluate → refine
4. **Recognize** when a conversation is going well vs. off track
5. **Develop** your own prompting instincts through practice

---

## From Theory to Practice

You've learned:
- What LLMs are (Module 00)
- How they work conceptually (Module 01)
- What changed in late 2025 (Module 02)
- When to trust them (Module 03)

Now it's time to use them. This module is hands-on — you'll have actual conversations with AI and develop the instincts that theory alone can't provide.

---

## Two Approaches: Vibe Coding vs. Vibe Engineering

Before we start, let's name something important.

There are two fundamentally different ways to use AI assistants. Simon Willison calls them **vibe coding** and **vibe engineering**.

### Vibe Coding

**Definition**: Fast, loose, and irresponsible. Accepting AI output without verification.

**Looks like**:
- "Give me code for X" → copy-paste without reading
- Trust whatever the AI says
- No testing, no review
- "It works" = good enough
- Blame the AI when things break

**When it's acceptable**: Quick experiments, throwaway scripts, learning exploration (with awareness).

**When it's dangerous**: Anything that matters — production code, public content, decisions with consequences.

### Vibe Engineering

**Definition**: Professional AI use requiring expertise, testing, planning, and accountability.

**Looks like**:
- Clear goals before prompting
- Reading and understanding AI output
- Testing and verification
- Iteration toward quality
- Taking responsibility for the result

**The key insight**: AI tools amplify existing expertise. The better your judgment, the more effectively you can use them. Vibe engineering means staying at the top of your game while leveraging AI acceleration.

### Which Will You Practice?

In this program, we teach **vibe engineering**. That means:
- You understand what AI gives you
- You verify before trusting
- You maintain judgment and accountability
- You use AI to go faster, not to avoid thinking

This module starts building those habits.

---

## The Conversation Structure

Good AI conversations follow a pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                  THE CONVERSATION LOOP                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   1. ORIENT                                                 │
│      └─ What am I trying to accomplish?                     │
│      └─ What does the AI need to know?                      │
│                                                             │
│   2. PROMPT                                                 │
│      └─ Give context, task, constraints                     │
│      └─ Be specific about what you want                     │
│                                                             │
│   3. EVALUATE                                               │
│      └─ Does the output match intent?                       │
│      └─ Is it accurate? Complete? Appropriate?              │
│                                                             │
│   4. ITERATE                                                │
│      └─ Refine the prompt based on results                  │
│      └─ Ask follow-ups, corrections, expansions             │
│      └─ Or start fresh if the conversation went wrong       │
│                                                             │
│   5. VERIFY                                                 │
│      └─ Test code; check facts; review for quality          │
│      └─ Apply trust-but-verify from Module 03               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Let's practice each step.

---

## Step 1: Orient

Before you type anything, answer these questions:

**What am I trying to accomplish?**
Be specific. Not "help with my project" but "write a function that validates email addresses."

**What context does the AI need?**
- What language/framework?
- What constraints or requirements?
- What does "good" look like?

**What tier is this task?** (From Module 03)
- Tier 1 (AI excels): Trust with light verification
- Tier 2 (AI helps): Trust with careful verification
- Tier 3 (AI assists): Use as input, not output
- Tier 4 (AI unsuitable): Don't rely on it

### Practical Exercise: Orientation

Think of a task you want AI help with. Write down:

1. The specific goal (one sentence)
2. Three pieces of context the AI needs
3. What tier this task falls into
4. How you'll verify the result

Don't prompt yet — just orient.

---

## Step 2: Prompt

Now you write your prompt. Good prompts have structure:

### The Anatomy of a Good Prompt

```markdown
[CONTEXT]
What the AI needs to know to help effectively.
Background, constraints, environment.

[TASK]
What you want the AI to do.
Be specific and actionable.

[FORMAT] (optional)
How you want the output structured.
Code style, response length, format requirements.

[EXAMPLES] (optional)
Show what you want through examples.
Input → Output pairs help enormously.
```

### Example: Poor Prompt vs. Good Prompt

**Poor prompt**:
> "Help me with Python"

Problems: No context, no specific task, no constraints. The AI has to guess what you want.

**Good prompt**:
> "I'm building a command-line tool in Python 3.11. I need a function that takes a file path as input and returns the number of lines in the file. The function should handle the case where the file doesn't exist by returning -1 rather than raising an exception. Please include a docstring."

This prompt has:
- Context (Python 3.11, command-line tool)
- Specific task (count lines in file)
- Constraints (handle missing file, return -1)
- Format request (include docstring)

### The "Improv Actor" Model

Think of the AI as an improv actor. They're skilled and willing, but they need:
- **Context**: The scene setting
- **Role**: What character to play
- **Constraints**: The rules of the game
- **Clear direction**: What scene you want to play out

Without these, even a talented actor improvises randomly.

---

## Step 3: Evaluate

The AI responds. Now what?

**Read the entire response.** Don't just grab the code and run.

**Check against your intent:**
- Does it do what you asked?
- Does it follow your constraints?
- Is anything missing?
- Is anything extra (that you didn't want)?

**Apply appropriate skepticism:**
- Tier 1 tasks: Skim for obvious issues
- Tier 2 tasks: Read carefully, test before trusting
- Tier 3 tasks: Treat as suggestion, not answer

### Red Flags to Watch For

| Red Flag | What It Means |
|----------|---------------|
| Extremely long response | May have overcomplicated; check if it matches your needs |
| Confidence about facts | Verify independently — confidence ≠ accuracy |
| "As an AI, I..." preamble | Usually fine, but watch for hedging that avoids your question |
| Code without explanation | May not understand what it generated |
| Different approach than asked | May be better, or may have misunderstood; evaluate deliberately |

---

## Step 4: Iterate

Rarely is the first response perfect. Iteration is normal.

### Iteration Strategies

**Refine**: "That's close, but I also need it to handle empty files by returning 0."

**Clarify**: "When you said X, did you mean Y or Z?"

**Challenge**: "Are you sure about that? The documentation says..."

**Expand**: "Good. Now also add logging."

**Restart**: If the conversation has gone off track, sometimes it's better to start fresh with a refined prompt than to try to correct course.

### When to Restart vs. Continue

**Continue when**:
- The AI understood your intent
- Issues are minor refinements
- The conversation is productive

**Restart when**:
- The AI fundamentally misunderstood
- You've gone several exchanges without progress
- The context is polluted with errors
- You realize your original prompt was wrong

### Practical Exercise: Deliberate Iteration

1. Start a conversation with this prompt:
   > "Write a Python function that checks if a string is a palindrome."

2. Whatever you get, iterate THREE times:
   - First iteration: Add a constraint (e.g., "ignore spaces and punctuation")
   - Second iteration: Ask for something different (e.g., "add type hints")
   - Third iteration: Challenge something (e.g., "is this the most efficient approach?")

3. Notice how iteration shapes the output.

---

## Step 5: Verify

Before using AI output, verify appropriately.

### Verification by Output Type

| Output Type | Verification |
|-------------|--------------|
| **Code** | Run it. Test edge cases. Read it to understand what it does. |
| **Facts** | Cross-reference with authoritative sources. |
| **Explanations** | Check against your understanding or documentation. |
| **Plans** | Evaluate against your actual constraints and context. |
| **Creative content** | Read for quality and appropriateness. |

### The Verification Mindset

Verification isn't about distrusting AI — it's about **taking responsibility**.

The AI doesn't know your context. It doesn't know if the code will run in your environment. It doesn't know if the facts matter for your use case. It doesn't know your standards.

**You do.** Verification is you exercising that knowledge.

---

## Putting It Together: Complete Example

Let's walk through a full conversation:

### Orient

**Goal**: Create a function to validate email addresses
**Context**: Python, basic validation (not RFC-compliant), for a form
**Tier**: Tier 1-2 (code generation, needs testing)
**Verification**: Test with valid and invalid emails

### Prompt

> "I need a Python function that validates email addresses for a web form. It should check for basic format (something@something.something) but doesn't need to be RFC-compliant. Return True for valid, False for invalid. Include a docstring and a few test cases."

### Evaluate (AI response)

```python
def is_valid_email(email: str) -> bool:
    """
    Validate basic email format.

    Checks for: non-empty local part, @ symbol,
    domain with at least one dot, non-empty parts.

    Args:
        email: The email address to validate

    Returns:
        True if valid format, False otherwise
    """
    if not email or '@' not in email:
        return False

    local, domain = email.rsplit('@', 1)

    if not local or not domain:
        return False

    if '.' not in domain:
        return False

    # Check that domain parts aren't empty (catches ".com" or "example.")
    domain_parts = domain.split('.')
    if any(part == '' for part in domain_parts):
        return False

    return True

# Test cases
assert is_valid_email("user@example.com") == True
assert is_valid_email("user@example") == False
assert is_valid_email("@example.com") == False
assert is_valid_email("user@.com") == False
assert is_valid_email("") == False
```

**Evaluation**:
- ✓ Does what I asked
- ✓ Includes docstring
- ✓ Includes test cases
- ? Uses rsplit — is that correct? (Yes, handles multiple @)
- ? Missing edge cases (spaces, special characters)

### Iterate

> "Good start. Can you add test cases for: emails with spaces, emails with multiple @ symbols, and emails where the domain part has multiple dots (like user@mail.example.com)?"

### Verify

Run the code. Try additional test cases:
- `"user @example.com"` (space in middle)
- `"user@@example.com"` (double @)
- `"user@sub.domain.example.com"` (multiple dots)

Does it behave as expected? If not, iterate further.

---

## Common Beginner Mistakes

| Mistake | Better Approach |
|---------|-----------------|
| Vague prompts ("help me code") | Specific prompts with context and constraints |
| Accepting first response | Read, evaluate, iterate |
| Not testing code | Always run AI-generated code before trusting |
| Blaming AI for bad output | Take responsibility; refine your prompts |
| Never iterating | Iteration is normal; use it |
| Iterating forever | Know when to restart or accept "good enough" |
| Copying without reading | Understand what you're using |

---

## A Note on Different AI Tools

Different AI assistants have different "personalities":

- **Claude** tends toward thorough, careful responses; sometimes verbose
- **ChatGPT** often aims for concise, direct answers
- **Gemini** may emphasize different aspects or formats

These differences are fine. The core skills — orient, prompt, evaluate, iterate, verify — work with any AI. You'll develop preferences, and you'll learn which tools work best for which tasks.

Don't worry about using the "right" AI. Focus on developing effective collaboration skills that transfer across tools.

---

## Building Your Instincts

Prompting is a skill. You'll develop instincts through practice:

- **Pattern recognition**: You'll learn what prompts work
- **Error prediction**: You'll anticipate where AI might fail
- **Iteration efficiency**: You'll get better at refining
- **Verification calibration**: You'll know when to trust more or less

This takes time. Be patient with yourself. The goal isn't perfect prompts — it's effective collaboration.

---

## Practical Exercises

### Exercise 1: The Full Loop

Complete one full conversation loop:

1. **Orient**: Choose a task (suggest: "Write a function that finds the most common word in a string")
2. **Prompt**: Write a structured prompt with context and constraints
3. **Evaluate**: Read the full response; note what's good and what's missing
4. **Iterate**: Make at least two refinements
5. **Verify**: Run the code; test edge cases

Document your process — what worked? What didn't?

### Exercise 2: Vibe Coding vs. Vibe Engineering

Do the same task twice:

**First time (vibe coding)**:
- Quick prompt: "Write code to sort a list of names"
- Accept whatever you get
- Don't test it

**Second time (vibe engineering)**:
- Structured prompt with context
- Evaluate the response
- Test and verify

Compare the results. Which would you trust in production?

### Exercise 3: Prompt Comparison

Ask three different ways:

1. "Help me with Python dictionaries"
2. "Explain how Python dictionaries work"
3. "I'm confused about when to use a Python dictionary vs. a list. I'm building a contact book app where I need to look up people by name. Which should I use and why?"

Compare the responses. Which prompt got the most useful answer?

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Vibe engineering | Professional AI use = judgment + verification + accountability |
| Orient first | Know your goal before you prompt |
| Structure prompts | Context + Task + Constraints = better results |
| Evaluate always | Read the full response before using it |
| Iterate normally | Refinement is expected, not failure |
| Verify appropriately | Match verification to task tier |

---

## Connection to What's Next

Congratulations — you've completed Tier 1: Foundations.

You now understand:
- What AI is (and isn't)
- How it works conceptually
- What changed recently
- When to trust it
- How to have effective conversations

**Tier 2** builds practical skills:
- Module 05: Reading AI-generated code (verification skill)
- Module 06: Prompting fundamentals (advanced techniques)
- Module 07-08: Multi-modal and reasoning models
- Module 09: Context and memory management

The foundation is set. Now we build on it.

---

## Reflection Questions

1. When you used AI before this module, were you closer to vibe coding or vibe engineering? What will you do differently?

2. Think of a time when iteration would have helped (in any context, not just AI). What's the cost of accepting "first draft" as final?

3. "AI tools amplify existing expertise." What expertise do you have that AI might amplify? What expertise do you need to develop?

---

## Quick Reference: Prompting Checklist

Before you prompt:
- [ ] I know what I'm trying to accomplish
- [ ] I know what context the AI needs
- [ ] I know what tier this task is
- [ ] I know how I'll verify the result

While prompting:
- [ ] I included relevant context
- [ ] I specified the task clearly
- [ ] I mentioned constraints and requirements
- [ ] I indicated desired format (if relevant)

After the response:
- [ ] I read the entire response
- [ ] I evaluated against my intent
- [ ] I identified what needs iteration
- [ ] I verified before using

---

*Next module: Reading AI-Generated Code — the verification skill you'll use constantly.*
