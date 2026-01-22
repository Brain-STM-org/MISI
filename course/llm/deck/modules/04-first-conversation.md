---
theme: default
title: "Module 04: Your First Conversation"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 04: Your First Conversation
drawings:
  persist: false
transition: slide-left
---

# Module 04

## Your First Conversation

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Hands-on practice with AI conversations.
Vibe coding vs vibe engineering distinction.

Estimated time: 30 minutes
Delivery: Day 1 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Conversation loop structure, practical exercises
- Willisons: Improv actor analogy (Alvin's quote), iteration strategies
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Prompting an LLM is like directing an improv actor — give context, roles, and constraints for magic."
</div>

<div class="mt-4 text-gray-500">
— Alvin Willison
</div>

<!--
The improv actor mental model for prompting.
-->

---

# From Theory to Practice

You've learned:

<v-clicks>

- What LLMs are (Module 00)
- How they work (Module 01)
- What changed in late 2025 (Module 02)
- When to trust them (Module 03)

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
Now it's time to <strong>use</strong> them. This module is hands-on.
</div>

</v-click>

<!--
Transition from theory to practice.
-->

---
layout: section
---

# Two Approaches

Vibe Coding vs. Vibe Engineering

---

# Vibe Coding

**Definition**: Fast, loose, and irresponsible. Accepting AI output without verification.

<v-clicks>

**Looks like**:
- "Give me code for X" → copy-paste without reading
- Trust whatever AI says
- No testing, no review
- "It works" = good enough
- Blame the AI when things break

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
<strong>Acceptable for:</strong> Quick experiments, throwaway scripts, learning exploration
</div>

</v-click>

<!--
Vibe coding definition.
-->

---

# Vibe Engineering

**Definition**: Professional AI use requiring expertise, testing, planning, and accountability.

<v-clicks>

**Looks like**:
- Clear goals before prompting
- Reading and understanding AI output
- Testing and verification
- Iteration toward quality
- Taking responsibility for the result

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
<strong>Key insight:</strong> AI tools amplify existing expertise. The better your judgment, the more effectively you use them.
</div>

</v-click>

<!--
Vibe engineering definition.
-->

---

# Which Will You Practice?

In this program, we teach **vibe engineering**:

<v-clicks>

- You understand what AI gives you
- You verify before trusting
- You maintain judgment and accountability
- You use AI to go faster, not to avoid thinking

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This module starts building those habits.
</div>

</v-click>

<!--
Program commitment to vibe engineering.
-->

---
layout: section
---

# The Conversation Loop

Orient → Prompt → Evaluate → Iterate → Verify

---

# The Loop Visualized

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
│                                                             │
│   3. EVALUATE                                               │
│      └─ Does output match intent? Accurate? Complete?       │
│                                                             │
│   4. ITERATE                                                │
│      └─ Refine, clarify, challenge, expand, or restart      │
│                                                             │
│   5. VERIFY                                                 │
│      └─ Test code; check facts; review for quality          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

<!--
The five-step loop.
-->

---

# Step 1: Orient

Before you type anything, answer:

<v-clicks>

**What am I trying to accomplish?**
- Be specific. Not "help with my project" but "write a function that validates emails."

**What context does the AI need?**
- Language/framework? Constraints? What does "good" look like?

**What tier is this task?** (From Module 03)

**How will I verify the result?**

</v-clicks>

<!--
Orientation before prompting.
-->

---

# Step 2: Prompt

Good prompts have structure:

```markdown
[CONTEXT]
What the AI needs to know. Background, constraints, environment.

[TASK]
What you want done. Specific and actionable.

[FORMAT] (optional)
How you want the output. Style, length, structure.

[EXAMPLES] (optional)
Show what you want. Input → Output pairs help enormously.
```

<!--
Prompt structure.
-->

---

# Poor vs. Good Prompts

**Poor**:
> "Help me with Python"

<v-click>

**Good**:
> "I'm building a CLI tool in Python 3.11. I need a function that takes a file path and returns the number of lines. Handle missing files by returning -1. Include a docstring."

</v-click>

<v-click>

The good prompt has:
- Context (Python 3.11, CLI tool)
- Specific task (count lines)
- Constraints (return -1 for missing)
- Format (include docstring)

</v-click>

<!--
Prompt quality comparison.
-->

---

# The Improv Actor Model

Think of AI as an improv actor:

<v-clicks>

**Context** → The scene setting

**Role** → What character to play

**Constraints** → The rules of the game

**Clear direction** → What scene you want

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Without these, even a talented actor improvises randomly.
</div>

</v-click>

<!--
Improv actor mental model.
-->

---

# Step 3: Evaluate

The AI responds. Now what?

<v-clicks>

**Read the entire response.** Don't just grab code and run.

**Check against intent:**
- Does it do what you asked?
- Follows constraints?
- Anything missing or extra?

**Apply appropriate skepticism** based on task tier.

</v-clicks>

<!--
Evaluation step.
-->

---

# Red Flags to Watch

| Red Flag | What It Means |
|----------|---------------|
| Extremely long response | May have overcomplicated |
| Confidence about facts | Verify — confidence ≠ accuracy |
| "As an AI..." preamble | Watch for hedging |
| Code without explanation | May not understand what it generated |
| Different approach than asked | May be better, or misunderstood |

<!--
Red flags during evaluation.
-->

---

# Step 4: Iterate

Rarely is the first response perfect. Iteration is normal.

<v-clicks>

**Refine**: "Also handle empty files by returning 0"

**Clarify**: "When you said X, did you mean Y or Z?"

**Challenge**: "Are you sure? The docs say..."

**Expand**: "Good. Now add logging."

**Restart**: If conversation went off track, start fresh.

</v-clicks>

<!--
Iteration strategies.
-->

---

# When to Restart vs. Continue

<div class="grid grid-cols-2 gap-8">

<div>

**Continue when:**
- AI understood your intent
- Issues are minor refinements
- Conversation is productive

</div>

<div>

**Restart when:**
- AI fundamentally misunderstood
- Several exchanges without progress
- Context polluted with errors
- Original prompt was wrong

</div>

</div>

<!--
Restart vs continue decision.
-->

---

# Step 5: Verify

Before using AI output:

| Output Type | Verification |
|-------------|--------------|
| **Code** | Run it. Test edge cases. Read to understand. |
| **Facts** | Cross-reference authoritative sources. |
| **Explanations** | Check against your understanding/docs. |
| **Plans** | Evaluate against your actual constraints. |

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Verification is you exercising judgment that AI doesn't have.
</div>

</v-click>

<!--
Verification step.
-->

---
layout: section
---

# Complete Example

Walking through the loop

---

# Orient

**Goal**: Create a function to validate email addresses

**Context**: Python, basic validation, for a web form

**Tier**: 1-2 (code generation, needs testing)

**Verification**: Test with valid and invalid emails

<!--
Example orientation.
-->

---

# Prompt

> "I need a Python function that validates email addresses for a web form. It should check for basic format (something@something.something) but doesn't need to be RFC-compliant. Return True for valid, False for invalid. Include a docstring and a few test cases."

<v-click>

Contains:
- Context ✓
- Specific task ✓
- Constraints ✓
- Format request ✓

</v-click>

<!--
Example prompt.
-->

---

# Evaluate (Response)

<div class="text-sm">

```python
def is_valid_email(email: str) -> bool:
    """Validate basic email format."""
    if not email or '@' not in email:
        return False
    local, domain = email.rsplit('@', 1)
    if not local or not domain:
        return False
    if '.' not in domain:
        return False
    domain_parts = domain.split('.')
    if any(part == '' for part in domain_parts):
        return False
    return True

assert is_valid_email("user@example.com") == True
assert is_valid_email("user@example") == False
```

</div>

<!--
Example AI response.
-->

---

# Evaluate (Analysis)

<v-clicks>

✓ Does what asked

✓ Includes docstring

✓ Includes test cases

? Uses `rsplit` — correct? (Yes, handles multiple @)

? Missing edge cases (spaces, special characters)

</v-clicks>

<!--
Example evaluation.
-->

---

# Iterate

> "Good start. Can you add test cases for: emails with spaces, emails with multiple @ symbols, and emails where domain has multiple dots (like user@mail.example.com)?"

<v-click>

<div class="mt-4 text-gray-400">
Then verify: Run the code. Try additional edge cases. Does it behave as expected?
</div>

</v-click>

<!--
Example iteration.
-->

---

# Common Beginner Mistakes

| Mistake | Better Approach |
|---------|-----------------|
| Vague prompts | Specific with context and constraints |
| Accepting first response | Read, evaluate, iterate |
| Not testing code | Always run before trusting |
| Blaming AI | Take responsibility; refine prompts |
| Never iterating | Iteration is normal |
| Copying without reading | Understand what you're using |

<!--
Common mistakes to avoid.
-->

---

# Building Your Instincts

Prompting is a skill. Through practice you'll develop:

<v-clicks>

**Pattern recognition**: What prompts work

**Error prediction**: Where AI might fail

**Iteration efficiency**: Better refinement

**Verification calibration**: When to trust more or less

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Be patient with yourself. The goal isn't perfect prompts — it's effective collaboration.
</div>

</v-click>

<!--
Skill development over time.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Vibe engineering | Judgment + verification + accountability |
| Orient first | Know your goal before you prompt |
| Structure prompts | Context + Task + Constraints |
| Evaluate always | Read full response before using |
| Iterate normally | Refinement is expected |

<!--
Summary table.
-->

---

# Prompting Checklist

<div class="text-sm">

**Before prompting:**
- [ ] I know what I'm trying to accomplish
- [ ] I know what context AI needs
- [ ] I know what tier this task is
- [ ] I know how I'll verify

**After response:**
- [ ] I read the entire response
- [ ] I evaluated against my intent
- [ ] I identified what needs iteration
- [ ] I verified before using

</div>

<!--
Quick reference checklist.
-->

---

# Reflection Questions

<v-clicks>

1. When you've used AI before, were you closer to vibe coding or vibe engineering? What will you do differently?

2. Think of a time iteration would have helped. What's the cost of accepting "first draft" as final?

3. "AI tools amplify existing expertise." What expertise do you have that AI might amplify? What do you need to develop?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 04 Complete

You've completed Tier 1: Foundations!

<div class="mt-8 text-xl text-gray-400">
Next: Module 05 — Reading AI-Generated Code
</div>

<div class="mt-8">
  <a href="./05/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 05 →
  </a>
</div>

<!--
Tier 1 complete.
Now building practical skills in Tier 2.
-->
