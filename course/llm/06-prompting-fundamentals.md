# Prompting Fundamentals

> *"The art of prompting is the art of communication — clarity, context, and constraint."*
> — Dr. Elena Vasquez

## Learning Objectives

By the end of this module, you will be able to:

1. **Construct** prompts using established patterns and structures
2. **Use** system prompts, roles, and personas effectively
3. **Apply** constraints to shape output format and content
4. **Employ** few-shot prompting with examples
5. **Debug** prompts that aren't working as expected

---

## Beyond Basic Prompting

Module 04 introduced the conversation loop. Now we go deeper into the craft of prompting itself.

Good prompting isn't magic — it's a set of techniques that consistently produce better results. These techniques are documented, learnable, and applicable across different AI tools.

---

## The Prompt Stack

Every AI conversation has layers:

```
┌─────────────────────────────────────────────────────────────┐
│                      THE PROMPT STACK                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ SYSTEM PROMPT (usually hidden)                       │   │
│   │ "You are a helpful assistant..."                     │   │
│   │ Sets overall behavior, constraints, personality      │   │
│   └─────────────────────────────────────────────────────┘   │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ CONTEXT (you provide)                                │   │
│   │ Background info, documents, code, examples          │   │
│   └─────────────────────────────────────────────────────┘   │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ USER PROMPT (your request)                           │   │
│   │ The specific task you want done                     │   │
│   └─────────────────────────────────────────────────────┘   │
│                          ▼                                  │
│   ┌─────────────────────────────────────────────────────┐   │
│   │ OUTPUT                                               │   │
│   │ The AI's response, shaped by all above              │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Understanding this stack helps you know where to apply different techniques.

---

## Technique 1: Role Assignment

Give the AI a persona or role to play. This shapes tone, expertise level, and approach.

### Basic Role Pattern

```
You are a [ROLE] with expertise in [DOMAIN].
Your goal is to [OBJECTIVE].
```

### Examples

**Technical Expert**:
> "You are a senior Python developer with 10 years of experience. Your goal is to help me write clean, well-tested code. Always suggest tests alongside implementations."

**Teacher**:
> "You are a patient programming tutor explaining concepts to a beginner. Use simple language, analogies, and step-by-step explanations. Check for understanding before moving on."

**Critic**:
> "You are a thorough code reviewer. Your job is to find problems, not praise good code. Be direct about issues. Suggest specific improvements."

### Why Roles Work

Roles activate different patterns from training data. A "senior developer" role tends to produce more sophisticated code patterns. A "teacher" role produces more explanations. A "critic" role produces more skeptical analysis.

The AI doesn't *become* these roles — it generates text that matches the pattern of how these roles communicate.

---

## Technique 2: Structured Prompts

Use clear structure to organize complex requests.

### The CRAFT Framework

**C**ontext — Background information the AI needs
**R**ole — Who the AI should be
**A**ction — What you want done
**F**ormat — How the output should look
**T**one — Communication style

### Example Using CRAFT

```markdown
**Context**: I'm building a Flask web application for a small business.
The app manages customer orders. I'm using Python 3.11 and SQLAlchemy.

**Role**: You are a senior backend developer who prioritizes security
and clean architecture.

**Action**: Write a function that retrieves all orders for a given
customer, with pagination support.

**Format**:
- Include type hints
- Add a docstring with Args and Returns
- Show example usage in a comment

**Tone**: Professional, concise code with minimal comments (code
should be self-documenting).
```

### Alternative: Markdown Sections

```markdown
## Background
[Context here]

## Task
[What you want]

## Requirements
- Requirement 1
- Requirement 2
- Requirement 3

## Output Format
[How you want it]
```

Both approaches work. The key is clear organization, not a specific format.

---

## Technique 3: Constraints

Constraints focus the AI and prevent unwanted output.

### Types of Constraints

**Length constraints**:
> "Respond in 3 sentences or less."
> "Keep the function under 20 lines."
> "Provide a brief summary (max 100 words)."

**Format constraints**:
> "Output only valid JSON."
> "Use bullet points, not paragraphs."
> "Format as a markdown table."

**Content constraints**:
> "Don't use any external libraries."
> "Only use Python standard library."
> "Avoid deprecated functions."

**Style constraints**:
> "Use snake_case for function names."
> "Include type hints on all functions."
> "No comments — code should be self-documenting."

### Negative Constraints (What NOT to Do)

Sometimes it's clearer to say what you don't want:

> "Don't include explanations — just the code."
> "Don't use any deprecated syntax."
> "Don't assume I have admin access."

### Example: Heavily Constrained Prompt

```markdown
Write a Python function to validate a phone number.

Constraints:
- Use only the `re` module (no external libraries)
- Support US phone formats: (XXX) XXX-XXXX, XXX-XXX-XXXX, XXXXXXXXXX
- Return True for valid, False for invalid
- No classes, just a single function
- Include type hints
- Max 15 lines of code
- No comments needed
```

The more constrained, the more predictable the output.

---

## Technique 4: Few-Shot Prompting

Show examples of what you want. The AI learns the pattern and applies it.

### Basic Few-Shot Pattern

```markdown
I want you to [TASK]. Here are examples:

Input: [example 1 input]
Output: [example 1 output]

Input: [example 2 input]
Output: [example 2 output]

Input: [example 3 input]
Output: [example 3 output]

Now do the same for:
Input: [actual input]
Output:
```

### Example: Custom Formatting

```markdown
Convert descriptions to function names using snake_case.

Description: "calculate the total price"
Function name: calculate_total_price

Description: "check if user is admin"
Function name: check_if_user_is_admin

Description: "send email notification"
Function name: send_email_notification

Description: "validate credit card number"
Function name:
```

The AI will follow the pattern: `validate_credit_card_number`

### Example: Style Matching

```markdown
Write error messages in this style:

Error: Invalid email format
User message: "Hmm, that doesn't look like an email address. Make sure it has an @ symbol and a domain (like you@example.com)."

Error: Password too short
User message: "Your password needs at least 8 characters. Try adding a few more!"

Error: Username taken
User message:
```

The AI will match the friendly, helpful tone of the examples.

### How Many Examples?

- **0-shot**: No examples (relies on instructions alone)
- **1-shot**: One example (minimal pattern)
- **3-5 shot**: Multiple examples (clearer pattern, more reliable)
- **More**: Diminishing returns; uses context space

For most tasks, 2-3 good examples are sufficient.

---

## Technique 5: Chain-of-Thought Prompting

Ask the AI to show its reasoning. This improves results on complex tasks.

### Basic Pattern

> "Think through this step by step before giving your final answer."

Or:

> "Let's work through this systematically:
> 1. First, analyze...
> 2. Then, consider...
> 3. Finally, decide..."

### Example: Problem Solving

**Without chain-of-thought**:
> "What's the most efficient way to find duplicates in a list?"

**With chain-of-thought**:
> "What's the most efficient way to find duplicates in a list? Think through the options:
> 1. What approaches exist?
> 2. What's the time complexity of each?
> 3. What's the space complexity of each?
> 4. Which is best for a typical use case?"

The second prompt produces more thorough, reasoned analysis.

### When to Use Chain-of-Thought

- Complex reasoning tasks
- Multi-step problems
- When you want to verify the AI's logic
- When you need to understand *why*, not just *what*

---

## Technique 6: Output Format Specification

Be explicit about the format you want.

### Common Format Requests

**JSON**:
```markdown
Return the result as JSON with this structure:
{
  "name": "string",
  "valid": boolean,
  "errors": ["string", ...]
}
```

**Markdown**:
```markdown
Format your response as markdown with:
- H2 headers for main sections
- Bullet points for lists
- Code blocks for any code
```

**Table**:
```markdown
Present the comparison as a markdown table with columns:
| Option | Pros | Cons | Recommendation |
```

**Code only**:
```markdown
Respond with only the code. No explanations, no markdown formatting,
just raw code I can copy directly.
```

### Structured Output Example

```markdown
Analyze this code for potential issues. Format your response exactly as:

## Issues Found

### Issue 1: [title]
- **Severity**: High/Medium/Low
- **Location**: [line number or function]
- **Description**: [what's wrong]
- **Fix**: [how to fix it]

[Repeat for each issue]

## Summary
[One sentence summary]
```

---

## Debugging Prompts

When prompts don't work as expected, debug systematically.

### Common Problems and Fixes

| Problem | Likely Cause | Fix |
|---------|--------------|-----|
| Too verbose | No length constraint | Add "be concise" or word limit |
| Wrong format | Unclear format spec | Show exact format with examples |
| Missing details | Too vague a request | Add specific requirements |
| Wrong approach | AI chose differently | Explicitly constrain approach |
| Inconsistent style | No style examples | Add few-shot examples |
| Hallucinated content | Asking for facts | Provide facts in context |

### The Debugging Loop

1. **Identify** what's wrong with the output
2. **Hypothesize** why (ambiguity? missing constraint? wrong context?)
3. **Modify** one thing in your prompt
4. **Test** and compare
5. **Repeat** until satisfied

### Prompt Iteration Example

**Version 1** (too verbose):
> "Write a Python function to check if a number is prime."

*Output*: 30 lines with extensive comments and edge case handling

**Version 2** (constrained):
> "Write a Python function to check if a number is prime. Maximum 10 lines, no comments."

*Output*: Clean 8-line function

**Version 3** (with style):
> "Write a Python function to check if a number is prime. Maximum 10 lines, no comments, include type hints."

*Output*: Exactly what we wanted

---

## Advanced: Combining Techniques

Real prompts often combine multiple techniques:

```markdown
## Role
You are a senior Python developer doing a code review.

## Context
I'm working on a REST API for a bookstore. Here's my current
endpoint for searching books:

[code block]

## Task
Review this code for:
1. Security issues
2. Performance concerns
3. Code style

## Format
For each category, provide:
- Issues found (if any)
- Severity (High/Medium/Low)
- Specific fix with code example

## Constraints
- Focus only on the three categories above
- Be direct — don't soften criticism
- If no issues in a category, just say "None found"
```

This combines: role, context, structured task, format specification, and constraints.

---

## Practical Exercises

### Exercise 1: Role Transformation

Write the same request with three different roles and compare outputs:

**Base request**: "Explain how hash tables work"

Try with:
1. "You are a computer science professor..."
2. "You are explaining to a 12-year-old..."
3. "You are a technical interviewer testing my knowledge..."

### Exercise 2: Few-Shot Practice

Create a few-shot prompt to transform sentences from passive to active voice:

```markdown
Transform from passive to active voice.

[Your examples here]

Transform: "The bug was fixed by the developer."
Active:
```

### Exercise 3: Format Specification

Ask for a code review in three different formats:
1. As a bulleted list
2. As a markdown table
3. As JSON

Which format is most useful for your workflow?

### Exercise 4: Constraint Experimentation

Generate the same function with different constraints:
1. "No constraints"
2. "Under 10 lines"
3. "Under 10 lines, no comments, with type hints"
4. "Under 10 lines, no comments, with type hints, using only standard library"

How does each constraint change the output?

---

## Key Insights

| Technique | When to Use |
|-----------|-------------|
| Role assignment | Shaping expertise level and tone |
| Structured prompts | Complex, multi-part requests |
| Constraints | Focusing output, preventing unwanted content |
| Few-shot examples | Teaching patterns, matching style |
| Chain-of-thought | Complex reasoning, wanting to see logic |
| Format specification | Needing specific output structure |

---

## Connection to What's Next

You now have a toolkit for crafting effective prompts. Next modules add more capabilities:

- **Module 07**: Multi-modal prompting (images, audio)
- **Module 08**: Reasoning models (when to use extended thinking)
- **Module 09**: Managing context and memory

These techniques layer on top of what you've learned here.

---

## Reflection Questions

1. Think of a prompt that didn't work well for you. Which technique from this module might have helped?

2. When might you *not* want to use constraints? Are there cases where less structure produces better results?

3. Few-shot prompting is powerful but uses context space. How would you decide between a detailed few-shot prompt vs. a simpler prompt with iteration?

---

## Quick Reference: Prompting Techniques

| Technique | Pattern |
|-----------|---------|
| **Role** | "You are a [role] with expertise in [domain]..." |
| **CRAFT** | Context, Role, Action, Format, Tone |
| **Constraints** | "Must/Must not...", "Maximum X lines", "Only use..." |
| **Few-shot** | Input→Output examples, then real input |
| **Chain-of-thought** | "Think through this step by step..." |
| **Format spec** | "Return as JSON/table/list with structure..." |

---

*Next module: Multi-Modal Models — working with images, audio, and beyond text.*
