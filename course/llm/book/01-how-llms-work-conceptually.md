# How LLMs Work (Conceptually)

> *"All models are wrong, but some are useful."*
> — George Box

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** what tokens are and why they matter for your work
2. **Describe** context windows and their practical implications
3. **Predict** how temperature settings affect output
4. **Visualize** the generation loop that produces LLM responses
5. **Apply** these mental models to troubleshoot common issues

---

## Why This Matters

You don't need to understand internal combustion to drive a car. But knowing that cars need fuel, have a speed limit, and respond differently on wet roads makes you a better driver.

Similarly, you don't need to understand neural network mathematics to use LLMs effectively. But understanding a few core concepts will help you:

- Diagnose why the model "forgot" something you told it earlier
- Understand why longer prompts cost more (and sometimes work worse)
- Control how creative vs. predictable the output is
- Recognize when you're hitting fundamental limits vs. fixable problems

These aren't deep technical details — they're practical mental models.

---

## Concept 1: Tokens

### What Are Tokens?

LLMs don't read characters or words. They read **tokens** — chunks of text that the model treats as single units.

A token might be:
- A whole word: `"hello"` → 1 token
- Part of a word: `"understanding"` → `"under"` + `"standing"` → 2 tokens
- A single character: `"?"` → 1 token
- Multiple characters: `"..."` → 1 token

The exact splitting depends on the model's **tokenizer** — a preprocessing step that converts text to tokens before the model sees it.

### Why Tokens Matter

**1. Pricing**: API costs are measured in tokens. More tokens = higher cost.

**2. Context limits**: Models have maximum token limits (more on this below). A 100,000-token context window means 100,000 tokens total — your input AND the model's output combined.

**3. Efficiency**: Common words use fewer tokens than rare words. Code often uses more tokens than prose because of special characters and unusual naming.

### Rough Token Estimates

For English text, a useful approximation:
- **1 token ≈ 4 characters** (including spaces)
- **1 token ≈ 0.75 words**
- **100 tokens ≈ 75 words**

So a 1,000-word document is roughly 1,300 tokens.

Code is less predictable — variable names, syntax, and indentation all affect token count.

### Practical Exercise: Token Counting

Most AI interfaces show token counts. Try this:

1. Write a short paragraph (50 words)
2. Check the token count (Claude shows this; ChatGPT has it in settings)
3. Now write the same information as bullet points
4. Compare token counts — which is more efficient?

**Key insight**: How you structure information affects token usage. This matters when working near context limits.

---

## Concept 2: The Context Window

### What Is It?

The **context window** is the model's "working memory" — everything it can "see" during a conversation.

This includes:
- The system prompt (instructions about how to behave)
- Your conversation history (all previous messages)
- The current prompt (what you just asked)
- The response being generated

Everything must fit within the token limit.

### Modern Context Sizes

| Model (Late 2025) | Context Window |
|-------------------|----------------|
| Claude Opus 4.5 | 200,000 tokens |
| GPT-5.2 | 256,000 tokens |
| Gemini 3 Pro | 1,000,000 tokens |

These are large — 200,000 tokens is roughly a 300-page book. But they're not infinite.

### What Happens When You Hit the Limit?

When the conversation exceeds the context window, something must go. Different systems handle this differently:

- **Truncation**: Older messages get dropped (you lose history)
- **Summarization**: The system summarizes old content (you lose detail)
- **Error**: The system refuses to continue (you must start fresh)

**The practical impact**: The model can "forget" things you told it earlier in a long conversation. This isn't a bug — it's a fundamental limit.

### The Attention Problem

Even within the context window, models don't treat all content equally. Content at the beginning and end of the context tends to get more "attention" than content in the middle.

This is called the **"lost in the middle"** problem. If you bury important information in the middle of a long prompt, the model may not weight it appropriately.

**Practical tip**: Put the most important information at the beginning or end of your prompts, not the middle.

---

## Concept 3: Temperature

### What Is It?

**Temperature** controls how random or deterministic the model's output is.

Remember: LLMs predict the next token by calculating probabilities for every possible token. Temperature affects how those probabilities translate to choices.

### The Temperature Scale

| Temperature | Behavior | Use Case |
|-------------|----------|----------|
| 0.0 | Always picks highest-probability token | Factual tasks, code, consistent outputs |
| 0.3-0.5 | Slight variation, mostly predictable | Balanced writing, explanations |
| 0.7-0.9 | More creative, some surprises | Creative writing, brainstorming |
| 1.0+ | Highly random, unpredictable | Experimental, artistic |

### A Mental Model: The Dice Roll

Imagine the model has a weighted die for each token position. At temperature 0, it always picks the heaviest side — the most probable token. At higher temperatures, the die becomes fairer — less probable tokens have better chances.

**Temperature 0**: "The capital of France is [Paris]" — always Paris

**Temperature 1.0**: "The capital of France is [Paris/Lyon/a beautiful city/unknown/...]" — might pick something unexpected

### When Temperature Matters

**Use low temperature (0.0-0.3) when**:
- You need consistent, reproducible output
- You're generating code
- You want factual accuracy
- You're doing structured tasks (formatting, extraction)

**Use higher temperature (0.7-1.0) when**:
- You're brainstorming ideas
- You want creative writing
- You're exploring possibilities
- You want the model to surprise you

### Practical Exercise: Temperature Comparison

**Note**: Not all interfaces expose temperature controls. The Claude and ChatGPT web interfaces don't let you set temperature directly — they choose appropriate settings automatically. This exercise works best with API access, Claude Code, or tools like Cursor that expose the setting.

**Alternative for web interfaces**: Ask the model the same question multiple times. You'll notice some variation (because temperature isn't 0) but responses will be generally consistent. Then ask it to "be more creative and unexpected" — you're essentially asking it to behave as if temperature were higher.

**With temperature control**:
1. Ask the same question at temperature 0: "Give me 3 names for a coffee shop"
2. Run it 3 times — notice the names are identical (or very similar)
3. Now set temperature to 1.0 and run 3 times
4. Compare the variation

**Key insight**: Temperature doesn't make the model "smarter" — it makes it more willing to take risks.

---

## Concept 4: The Generation Loop

### How Responses Are Built

LLMs don't generate entire responses at once. They generate **one token at a time**, in a loop:

```
1. Take all input tokens (your prompt + any previous output)
2. Predict the next token
3. Append that token to the output
4. Repeat until a stop condition (end token, max length, etc.)
```

This is why you see responses "streaming" in — each token appears as it's generated.

### Why This Matters

**1. Early mistakes compound**: If the model generates a wrong token early, all subsequent tokens are predicted based on that mistake. The error propagates.

**2. The model can't "go back"**: Once a token is generated, it's committed. The model can't reconsider earlier tokens (though it can say "actually, let me correct that" and generate new text).

**3. Long outputs are risky**: More tokens = more chances for drift or error.

### A Mental Model: Writing Without Erasing

Imagine writing an essay where you can never use backspace. You write one word at a time, left to right, and whatever you write stays. You can add corrections later ("I meant X, not Y"), but you can't undo.

This is how LLMs generate text. Each token is committed immediately.

**Practical tip**: If a response starts going wrong, it's often better to stop and start fresh rather than hoping the model will "recover."

---

## Concept 5: System Prompts vs. User Prompts

### The Two-Layer Structure

Most LLM applications have two types of prompts:

**System Prompt**: Background instructions that set context, personality, constraints. Usually hidden from users. Persists across the conversation.

Example: "You are a helpful coding assistant. Always explain your code. Never generate harmful content."

**User Prompt**: What you actually type. Changes each turn.

Example: "Write a function to sort a list."

### Why This Matters

1. **System prompts shape behavior**: The same user prompt can get very different responses depending on the system prompt

2. **You may not see the system prompt**: When using tools like Claude or ChatGPT, there's a system prompt you don't see. It explains some behaviors you might find puzzling.

3. **System prompts count toward context**: They use tokens too, which is why some tools have shorter effective context than advertised.

### Practical Exercise: Spotting System Prompt Effects

1. Ask Claude: "What instructions were you given?"
2. It won't reveal the full system prompt, but it will describe its general guidelines
3. Compare this to ChatGPT's response to the same question
4. Notice how different system prompts create different "personalities"

---

## Putting It Together: A Mental Model

Here's how these concepts connect:

```
┌─────────────────────────────────────────────────────────────┐
│                     CONTEXT WINDOW                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ System Prompt (hidden instructions)                  │   │
│  │ [tokens...]                                          │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Conversation History                                 │   │
│  │ User: [tokens...] Assistant: [tokens...]             │   │
│  │ User: [tokens...] Assistant: [tokens...]             │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Current Turn                                         │   │
│  │ User: [tokens...]                                    │   │
│  │ Assistant: [generating one token at a time...]       │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Temperature controls randomness of each token choice       │
│  Total tokens must stay under context limit                 │
└─────────────────────────────────────────────────────────────┘
```

When something goes wrong, ask:
- **Did I hit the context limit?** (Model forgot earlier info)
- **Is important info buried in the middle?** (Lost in the middle)
- **Is temperature wrong for this task?** (Too random or too rigid)
- **Did an early mistake compound?** (Generation loop issue)

---

## Common Issues Explained

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Model "forgot" what I said earlier | Context limit exceeded | Start fresh conversation, or summarize earlier content |
| Model ignores my instructions | Instructions in middle of long prompt | Move to beginning or end |
| Output is repetitive/boring | Temperature too low | Increase temperature |
| Output is nonsensical/random | Temperature too high | Decrease temperature |
| Same question, different answers | Temperature > 0 | Set temperature to 0 for consistency |
| Response cuts off mid-sentence | Hit output token limit | Ask model to continue, or set higher max tokens |
| Code has subtle errors | Generation loop compound errors | Review carefully, or regenerate |
| Model refuses a reasonable task | System prompt restrictions | Rephrase request, or use different tool/context |

---

## Key Insights

| Concept | Practical Implication |
|---------|----------------------|
| Tokens | Structure affects cost and efficiency; code often costs more |
| Context window | Long conversations hit limits; important info can be "lost in the middle" |
| Temperature | Low for accuracy, high for creativity; affects randomness not quality |
| Generation loop | One token at a time; early mistakes compound; can't go back |
| System prompts | Hidden instructions shape behavior; count toward context |

---

## Connection to What's Next

These mental models will help you understand:

- **Module 02 (Capability Inflection Point)**: Why larger context windows changed what's possible
- **Module 04 (Your First Conversation)**: How to structure prompts effectively
- **Module 06 (Prompting Fundamentals)**: Advanced prompt techniques based on these concepts

You don't need to think about tokens and temperature constantly. But when something isn't working, these concepts help you diagnose and fix the problem.

---

## Reflection Questions

1. You're working on a coding project and notice the model's suggestions are getting worse over time. Using the concepts from this module, what might be happening?

2. A friend says "I always use temperature 1.0 because I want the smartest output." What's wrong with this reasoning?

3. Why might a model perform worse on a 50,000-token prompt than a 5,000-token prompt, even though both fit in the context window?

---

## Further Reading (Optional)

- [What Is a Token?](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) — OpenAI's explanation
- [Lost in the Middle](https://arxiv.org/abs/2307.03172) — Research paper on attention distribution (technical)
- [Temperature in LLMs](https://lukesalamone.github.io/posts/what-is-temperature/) — Visual explanation

---

*Next module: The Capability Inflection Point — what changed in November 2025 and why it matters for your work.*
