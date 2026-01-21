# Capabilities & Limitations

> *"It is not the strongest of the species that survives, nor the most intelligent, but the one most adaptable to change."*
> — Often attributed to Charles Darwin (though probably not his words — even quotes can be unreliable)

## Learning Objectives

By the end of this module, you will be able to:

1. **Categorize** tasks by how well-suited they are for current AI
2. **Recognize** hallucinations and understand why they occur
3. **Identify** reasoning limitations and when to expect failure
4. **Apply** the "trust but verify" principle appropriately
5. **Make informed decisions** about when to use AI vs. do it yourself

---

## Why This Matters

Every tool has a sweet spot — tasks it handles well — and failure modes — tasks where it breaks.

A hammer is great for nails, useless for screws, and dangerous near glass. You learn this through experience, but also through explicit guidance.

This module is that guidance for AI. By the end, you'll have a mental map of when to lean on AI heavily, when to use it cautiously, and when to skip it entirely.

---

## The Capability Spectrum

Not all tasks are equal. Here's a framework for thinking about AI suitability:

### Tier 1: AI Excels (Trust with Light Verification)

| Task Type | Examples | Why AI Excels |
|-----------|----------|---------------|
| **Text transformation** | Summarize, translate, reformat, explain | Direct pattern matching on well-defined inputs |
| **Code generation (bounded)** | Write a function, convert syntax, add boilerplate | Clear specification → clear output |
| **Information synthesis** | Combine sources, explain concepts, compare options | Broad training data, pattern completion |
| **Creative drafting** | Brainstorm ideas, write first drafts, generate variations | No "right" answer; exploration is valuable |
| **Format conversion** | JSON to YAML, markdown to HTML, data restructuring | Mechanical transformation with clear rules |

**Verification needed**: Light — check that output matches intent, spot-check for errors.

### Tier 2: AI Helps (Trust with Careful Verification)

| Task Type | Examples | Why Caution Is Needed |
|-----------|----------|----------------------|
| **Code generation (complex)** | Multi-file features, architectural decisions | Subtle bugs, integration issues, style drift |
| **Factual research** | Technical details, historical facts, statistics | Hallucination risk — AI may confidently fabricate |
| **Analysis** | Code review, document analysis, debugging | May miss context, edge cases, deeper issues |
| **Planning** | Project plans, technical designs, roadmaps | Lacks real-world constraints, may be generic |

**Verification needed**: Significant — verify facts independently, test code thoroughly, check for missing considerations.

### Tier 3: AI Assists (Use as Input, Not Output)

| Task Type | Examples | Why Heavy Caution Is Needed |
|-----------|----------|----------------------------|
| **Decision-making** | Choose a framework, prioritize features, assess risk | AI lacks context about your specific situation |
| **Novel problems** | Unprecedented situations, cutting-edge research | Training data may not cover it; pattern-matching fails |
| **High-stakes accuracy** | Legal documents, medical info, security-critical code | Errors have serious consequences; hallucination is unacceptable |
| **Current events** | Recent news, latest versions, live data | Knowledge cutoff means AI may not know |

**Use AI for**: Generating options, exploring possibilities, getting started.
**Don't use AI for**: Final decisions, authoritative answers, production without extensive verification.

### Tier 4: AI Unsuitable (Don't Rely On It)

| Task Type | Examples | Why AI Fails |
|-----------|----------|--------------|
| **Real-time information** | Stock prices, current weather, live scores | AI doesn't have internet access or live data |
| **Precise calculation** | Complex math, financial calculations | LLMs make arithmetic errors — use calculators |
| **Your specific data** | Your private files, your codebase (unless provided) | AI only knows what you give it |
| **Subjective judgment** | What you should do with your life, whether code is "good enough" | These require human values and context |

---

## Deep Dive: Hallucinations

### What Are Hallucinations?

**Hallucination**: When an AI generates confident, plausible-sounding content that is factually incorrect.

This isn't the AI "lying" — it's pattern completion without grounding. The model generates text that *looks like* correct text, because correct text is what it was trained on.

### Why Hallucinations Happen

Remember: LLMs predict what text comes next based on patterns in training data.

If you ask about a topic where:
- The answer appears in training data → Usually accurate
- The answer can be inferred from training data → Often accurate
- The answer isn't in training data → The model *still generates something* that looks right

The model doesn't have a "I don't know" instinct — it completes the pattern.

### Common Hallucination Patterns

**Fabricated citations**: "According to Smith et al. (2021)..." — the paper doesn't exist.

**Invented facts**: "The population of [city] is [number]" — sounds right, but wrong.

**Confident errors**: "This function returns an integer" — it actually returns a string.

**Plausible names**: "Dr. Eleanor Whitmore at Stanford studies..." — no such person.

**Version confusion**: "In Python 3.12, you should use..." — may describe features from older versions.

### Hallucination Detection Strategies

| Strategy | How It Works |
|----------|--------------|
| **Cross-reference** | Check facts against authoritative sources |
| **Check specifics** | Verify names, dates, numbers, URLs independently |
| **Ask for sources** | Request citations, then verify they exist |
| **Test code** | Run AI-generated code; don't assume it works |
| **Be suspicious of confidence** | High confidence ≠ high accuracy |
| **Ask follow-up questions** | Inconsistent answers reveal unreliability |

### Practical Exercise: Hallucination Hunting

1. Ask: "What are the three laws of thermodynamics?"
   - Verify: These are well-established; AI should be accurate

2. Ask: "What did Professor James Mitchell at MIT publish about quantum computing in 2022?"
   - Search for this person/paper — likely doesn't exist

3. Ask the AI to write a function, then ask "What does this function return if the input is empty?"
   - Check if the answer matches what the code actually does

---

## Deep Dive: Reasoning Limitations

### When Reasoning Fails

LLMs are remarkably good at *appearing* to reason. But they have systematic weaknesses:

**Multi-step logic**: Each step has some error probability. Chain enough steps, and errors compound.

**Counterfactuals**: "If X were different, what would happen?" requires tracking hypotheticals that may conflict with training data.

**Implicit constraints**: "Find a word that's a fruit and has 6 letters" — requires simultaneous constraint satisfaction.

**Mathematical reasoning**: Despite appearances, LLMs don't "do math" — they pattern-match on mathematical text.

### The Arithmetic Problem

LLMs famously struggle with arithmetic, especially:
- Large numbers
- Multi-step calculations
- Unusual number formats

Why? They're trained on text, not calculation. "17 × 23 = 391" appears in training data much less than common facts.

**Rule**: Never trust raw AI for arithmetic. Use a calculator — or use tools like Claude Code that can execute code to calculate precisely. The limitation is the text model, not necessarily tool-augmented agents that can verify their own math.

### Testing Reasoning Limits

Here are prompts that often expose limitations:

```
"What's 847 × 293?"
→ Often wrong. Use a calculator.

"If all bloops are razzles, and all razzles are lazzles,
 are all bloops lazzles?"
→ Usually gets simple syllogisms right

"A bat and ball cost $1.10 total. The bat costs $1 more
 than the ball. How much does the ball cost?"
→ Famous trick question; AI often gets it wrong initially
```

### When to Trust Reasoning

**More reliable**:
- Common logical patterns
- Well-established reasoning (seen in training)
- Short chains (2-3 steps)
- When the model shows its work

**Less reliable**:
- Novel logical structures
- Long reasoning chains
- Anything requiring precise calculation
- Constraint satisfaction puzzles

---

## Deep Dive: Knowledge Cutoffs

### What's a Knowledge Cutoff?

AI models are trained on data up to a certain date. They don't know what happened after that.

| Model | Approximate Cutoff |
|-------|-------------------|
| Claude Opus 4.5 | ~Mid-2025 |
| GPT-5.2 | ~Late 2025 |

*Note: Exact cutoff dates vary and change with updates. Check model documentation for current information.*

This means:
- No knowledge of recent events
- Outdated information about rapidly-changing fields
- Wrong information if things changed after the cutoff

### Detecting Cutoff Problems

**Warning signs**:
- Questions about recent events
- Rapidly-evolving technologies
- Current version numbers
- Recent API changes

**What to do**:
- Provide current information in your prompt
- Verify with up-to-date sources
- Use tools that can search the web (if available)

### What AI Does vs. Doesn't Know

| AI Knows (If in Training) | AI Doesn't Know |
|---------------------------|-----------------|
| Historical facts | Recent news |
| Established science | Latest research |
| Popular libraries (older versions) | Your private codebase |
| Common patterns | Your specific context |
| Published documentation | Internal company docs |

---

## The "Trust But Verify" Framework

Here's a practical decision framework:

```
┌─────────────────────────────────────────────────────────────┐
│               TRUST BUT VERIFY FRAMEWORK                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. ASSESS THE TASK                                         │
│     └─ What tier is this? (Excels / Helps / Assists / No)   │
│                                                             │
│  2. GENERATE WITH AI                                        │
│     └─ Use AI for drafts, options, starting points          │
│                                                             │
│  3. VERIFY APPROPRIATELY                                    │
│     └─ Light check? Deep review? Independent verification?  │
│                                                             │
│  4. TAKE RESPONSIBILITY                                     │
│     └─ You own the output. AI doesn't.                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Verification by Task Type

| Task | Minimum Verification |
|------|---------------------|
| Creative writing | Read it; does it match intent? |
| Code generation | Run it; test edge cases |
| Factual claims | Check against authoritative source |
| Technical docs | Verify with official documentation |
| Calculations | Redo with a calculator |
| Current info | Check recent sources |

---

## Practical Exercises

### Exercise 1: Capability Sorting

Categorize these tasks into Tiers 1-4:

1. "Summarize this article in three bullet points"
2. "Calculate my quarterly taxes"
3. "What's the best database for my project?"
4. "Convert this Python function to JavaScript"
5. "What did the president say yesterday?"
6. "Debug why this test is failing"

(Answers: 1=Tier 1, 2=Tier 4, 3=Tier 3, 4=Tier 1, 5=Tier 4, 6=Tier 2)

### Exercise 2: Hallucination Detection

Ask the AI these questions and verify the answers:

1. "What year was the Python programming language created?"
   - Verify: Should be ~1991 (Guido van Rossum)

2. "What is the current population of Tokyo?"
   - Verify: Check a current source; AI may have outdated numbers

3. "What's the main function of the `florpnax` library in Python?"
   - Verify: This library doesn't exist; see what AI says
   - Note: Newer models are getting better at saying "I don't have information about that" — but many will still fabricate something plausible

### Exercise 3: Reasoning Boundaries

Test these prompts:

1. "What's 1,234 × 5,678?"
   - Use a calculator to check

2. "If it takes 5 machines 5 minutes to make 5 widgets, how long does it take 100 machines to make 100 widgets?"
   - Classic reasoning puzzle; check the logic

3. "Write a function to check if a number is prime, then tell me if 7919 is prime"
   - Verify both the code AND the final answer

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Capability tiers | Know when to trust heavily vs. verify carefully vs. avoid |
| Hallucinations | AI confidence ≠ accuracy; verify independently |
| Reasoning limits | Don't trust arithmetic or long logic chains |
| Knowledge cutoffs | AI doesn't know recent events; provide context |
| Trust but verify | Use AI to generate, but you own the verification |

---

## Connection to What's Next

You now have a map of when AI helps and when it fails. Next:

- **Module 04**: Hands-on practice applying these insights in real conversations
- **Module 05**: Reading AI-generated code — the verification skill you'll use constantly
- **Module 10**: Security limitations — why AI can be manipulated and what to do about it

The theme: AI is powerful but not infallible. Your job is to harness the power while catching the failures.

---

## Reflection Questions

1. Think of a task you've used AI for. Which tier does it fall into? Did you verify appropriately?

2. Why do you think AI models are trained to always generate an answer, even when they don't know? What would be the trade-offs of making them say "I don't know" more often?

3. "Trust but verify" takes time. When is the verification time worth it, and when would you be better off just doing the task yourself?

---

## Quick Reference Card

**When to Trust AI More**:
- Text transformation and formatting
- Well-defined code generation
- Brainstorming and drafting
- Explaining established concepts

**When to Verify Carefully**:
- Factual claims (especially specific names, dates, numbers)
- Complex code
- Analysis and planning
- Anything you'll publish or deploy

**When to Skip AI**:
- Real-time information
- Precise calculations
- High-stakes decisions
- Tasks requiring your specific context

---

*Next module: Your First Conversation — putting these principles into practice.*
