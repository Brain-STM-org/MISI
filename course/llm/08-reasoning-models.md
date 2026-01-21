# Reasoning Models

> *"Show your work."*
> — Every math teacher ever

## Learning Objectives

By the end of this module, you will be able to:

1. **Understand** how reasoning capabilities differ across models
2. **Identify** when a task requires extended reasoning
3. **Use** chain-of-thought and extended thinking effectively
4. **Recognize** when reasoning models help vs. waste time
5. **Choose** the right model/mode for reasoning-heavy tasks

---

## The Reasoning Challenge

Standard LLMs generate text token-by-token, predicting what comes next. This works brilliantly for many tasks — but can fail on complex reasoning.

**Why?** Each token is generated based on what came before, with limited "thinking ahead." For problems requiring:
- Multiple logical steps
- Considering and rejecting alternatives
- Checking work along the way
- Planning before executing

...standard generation can stumble.

**Solution**: Reasoning models and techniques that give AI "time to think."

---

## Types of Reasoning Approaches

### 1. Chain-of-Thought Prompting (You trigger it)

You explicitly ask the model to think step by step:

> "Solve this problem. Think through each step before giving your final answer."

This works with any model. You're using prompt engineering to encourage reasoning.

### 2. Extended Thinking (Built-in capability)

Some models have explicit "thinking" modes:

- **Claude**: Extended thinking mode
- **OpenAI o1/o3**: Reasoning-focused models
- **Other providers**: Similar features emerging

These models automatically "think longer" on complex problems, showing (or hiding) their reasoning process.

### 3. Multi-Turn Reasoning (Iterative)

Break complex problems into steps yourself:

```
Turn 1: "What are the key considerations for this problem?"
Turn 2: "Given those, what approaches could work?"
Turn 3: "Evaluate approach A vs B"
Turn 4: "Implement the better approach"
```

You control the reasoning flow explicitly.

---

## Chain-of-Thought Prompting

### The Technique

Add instructions that encourage step-by-step reasoning:

**Basic**:
> "Think step by step."

**Structured**:
> "Before answering, work through this systematically:
> 1. Identify what we know
> 2. Identify what we need to find
> 3. Consider approaches
> 4. Execute the best approach
> 5. Verify the answer"

**Domain-specific**:
> "Debug this code by:
> 1. First, identify what the code is supposed to do
> 2. Trace through with example input
> 3. Find where behavior diverges from expectation
> 4. Propose and verify a fix"

### When Chain-of-Thought Helps

| Task Type | Without CoT | With CoT |
|-----------|-------------|----------|
| Simple arithmetic | Often correct | Still correct |
| Multi-step word problems | Often wrong | Usually correct |
| Logic puzzles | Unreliable | More reliable |
| Complex debugging | Misses steps | More thorough |
| Planning tasks | Jumps to conclusions | More considered |

### Example: Math Problem

**Without chain-of-thought**:
> "A store has 3 shirts that cost $15 each and 2 pants that cost $25 each. There's a 10% discount on the total. What's the final price?"

AI might jump to an answer and get it wrong.

**With chain-of-thought**:
> "A store has 3 shirts that cost $15 each and 2 pants that cost $25 each. There's a 10% discount on the total. What's the final price? Show your calculation step by step."

```
Step 1: Calculate shirt total
3 × $15 = $45

Step 2: Calculate pants total
2 × $25 = $50

Step 3: Calculate subtotal
$45 + $50 = $95

Step 4: Calculate 10% discount
$95 × 0.10 = $9.50

Step 5: Calculate final price
$95 - $9.50 = $85.50

Final answer: $85.50
```

Now you can verify each step.

---

## Extended Thinking Models

### What's Different

Extended thinking models are designed to:
- Spend more "compute" on reasoning
- Explore multiple approaches internally
- Check their own work
- Handle more complex problems

### How to Use Them

**Claude Extended Thinking**:
Often automatic for complex tasks, or can be requested:
> "Take your time thinking through this carefully."

The model shows its reasoning process (or summarizes it).

**OpenAI o1/o3 Models**:
Explicitly designed for reasoning tasks. Use them when you need:
- Complex analysis
- Multi-step problem solving
- Code architecture decisions

### Visible vs. Hidden Thinking

Some models show their reasoning ("thinking out loud").
Others think internally and only show the final answer.

**Visible thinking advantages**:
- You can verify the reasoning
- You can catch errors in logic
- You learn from the process

**Hidden thinking advantages**:
- Cleaner output
- Faster to read
- Less token usage in some contexts

### When to Use Extended Thinking

**Use extended thinking for**:
- Complex coding problems
- Architectural decisions
- Multi-step analysis
- Problems where errors are costly
- When you need to verify reasoning

**Don't use extended thinking for**:
- Simple, quick tasks
- Creative writing (thinking doesn't help creativity)
- When speed matters more than depth
- Tasks with obvious solutions

---

## Practical Patterns

### Pattern 1: Think Then Execute

```markdown
First, think through the design for this feature without writing code.
Consider:
- What data structures do we need?
- What's the algorithm approach?
- What edge cases exist?

Then, implement the solution.
```

Separates planning from execution.

### Pattern 2: Checkpoint Reasoning

```markdown
Solve this in stages. After each stage, pause and verify before continuing.

Stage 1: [First part]
Verification: Is this correct so far?

Stage 2: [Second part]
Verification: Does this follow from Stage 1?

Final: [Complete solution]
```

Forces verification at each step.

### Pattern 3: Compare and Choose

```markdown
For this problem, consider three different approaches:

Approach A: [describe]
Approach B: [describe]
Approach C: [describe]

For each, analyze:
- Pros
- Cons
- Complexity
- When it's best suited

Then recommend the best approach for my specific situation.
```

Ensures alternatives are considered.

### Pattern 4: Devil's Advocate

```markdown
Here's my proposed solution: [solution]

Before accepting it, argue against this solution:
- What could go wrong?
- What am I missing?
- What's a better alternative?

Then, either defend the original or propose improvements.
```

Catches blind spots.

---

## Reasoning Limitations

Even reasoning models have limits:

### They Can Still Be Wrong

Longer thinking doesn't guarantee correctness. The model can:
- Make errors in any step
- Have incorrect premises
- Follow valid logic from wrong assumptions

**Always verify**, especially for important decisions.

### They Can Overthink

Sometimes simple is better:

```
Task: Add two numbers
Model: "Let me consider multiple approaches. First, I could use
       direct addition. But let me also consider logarithmic
       approaches for potential numerical stability..."
```

For simple tasks, reasoning overhead is wasteful.

### They Can Confabulate Reasoning

Models can generate convincing-sounding reasoning that's actually post-hoc justification, not genuine thought process.

The reasoning *looks* logical but may not reflect how the answer was actually generated.

---

## Choosing the Right Approach

### Decision Framework

```
Is this a simple, straightforward task?
├── Yes → Standard prompting (no special reasoning needed)
└── No → Continue...

Does it require multiple logical steps?
├── Yes → Use chain-of-thought prompting
└── No → Standard may suffice

Is it a complex, high-stakes decision?
├── Yes → Use extended thinking model
└── No → Chain-of-thought is probably enough

Do you need to verify the reasoning?
├── Yes → Request visible reasoning
└── No → Hidden/summarized is fine
```

### Effort vs. Benefit

| Task Complexity | Approach | Reasoning Overhead |
|-----------------|----------|-------------------|
| Simple | Standard | None |
| Moderate | Chain-of-thought prompt | Low |
| Complex | Extended thinking | Medium |
| Critical | Extended + verification | High |

Match the tool to the task.

---

## Practical Exercises

### Exercise 1: Chain-of-Thought Comparison

Take this problem:
> "You have 3 boxes. Box A has 5 red balls and 3 blue balls. Box B has 2 red balls and 6 blue balls. You randomly pick one box, then randomly pick one ball. It's red. What's the probability you picked from Box A?"

1. Ask without chain-of-thought
2. Ask with "think step by step"
3. Compare the answers and reasoning

### Exercise 2: Debugging with Reasoning

Find buggy code (or intentionally write some). Ask the AI to debug it:

1. First, without reasoning prompts
2. Then, with "trace through the code step by step with example input"

Compare thoroughness.

### Exercise 3: Architectural Reasoning

Describe a feature you want to build. Ask:

1. "How should I implement this?" (basic)
2. "Before recommending an approach, analyze at least 3 different options with tradeoffs, then recommend one" (reasoning)

Compare the depth of analysis.

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Chain-of-thought | Ask for step-by-step reasoning on complex problems |
| Extended thinking | Use dedicated reasoning modes for high-stakes decisions |
| Visible reasoning | Helps you verify; use when accuracy matters |
| Match to task | Don't over-reason simple tasks |
| Still verify | Reasoning models can still be wrong |

---

## Connection to What's Next

You now understand how to get AI to reason more carefully. Final module in Tier 2:

- **Module 09**: Context and memory — managing long conversations and large contexts

Then Tier 3 covers agentic development, where reasoning becomes crucial for autonomous operation.

---

## Reflection Questions

1. When have you accepted an AI answer too quickly that turned out to be wrong? Could reasoning techniques have helped?

2. "The model can generate convincing-sounding reasoning that's actually post-hoc justification." What are the implications of this for trusting AI explanations?

3. For your own work, which tasks would benefit most from extended reasoning? Which would be slowed down by it?

---

*Next module: Context & Memory — managing long conversations and large contexts effectively.*
