---
theme: default
title: "Module 00: What Is Machine Intelligence?"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 00: What Is Machine Intelligence?
drawings:
  persist: false
transition: slide-left
---

# Module 00

## What Is Machine Intelligence?

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Demystifying AI from Day 1.
This module establishes the mental models that guide everything else.

Estimated time: 25 minutes
Delivery: Day 1 of bootcamp (paired with SWE Module 00)

Development: 5-iteration dual-persona process (Elena Vasquez + Willisons)
-->

---

# You Already Use This

<v-click>

When you type on your phone, it suggests the next word.

</v-click>

<v-click>

**That's machine learning in action.**

</v-click>

<v-click>

- It learned patterns from billions of text messages
- It predicts what word probably comes next
- It gets better at predicting *your* patterns over time

</v-click>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
Large Language Models are this idea — <strong>scaled up massively</strong>.
</div>

</v-click>

<!--
Bridge from familiar to new.
Students have been using ML for years without knowing it.
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The question of whether a computer can think is no more interesting than the question of whether a submarine can swim."
</div>

<div class="mt-4 text-gray-500">
— Edsger W. Dijkstra
</div>

<v-click>

<div class="mt-8 text-gray-400">
The question isn't whether AI "thinks." It's whether AI is <strong>useful</strong>.
</div>

</v-click>

<!--
Reframe the conversation from philosophical to practical.
We care about capability, not consciousness.
-->

---

# The Naming Problem

"Artificial Intelligence" has become almost meaningless.

<v-clicks>

- Spam filters are "AI"
- Robot vacuums are "AI"
- Chatbots are "AI"
- Existential threats are "AI"

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
When a word means everything, it means nothing.
</div>

</v-click>

<!--
Setting up why we use different language.
-->

---

# Why "Machine Intelligence"

We use **Machine Intelligence** in this program for precision:

<v-clicks>

**"Artificial"** implies fake or lesser. But what these systems do is genuinely impressive — just different from human thinking.

**"Machine Intelligence"** describes what it is: machines exhibiting intelligent behavior in specific domains.

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
How you <strong>frame</strong> something shapes how you <strong>use</strong> it.
</div>

</v-click>

<!--
Language matters. Framing matters.
Neither magic nor hype serves students well.
-->

---

# Two Bad Mindsets

<div class="grid grid-cols-2 gap-8">

<div>

**"AI is magic"**

Trust it blindly.
Accept all outputs.
Don't question.

<div class="mt-2 text-red-400">→ Dangerous</div>

</div>

<div>

**"AI is hype"**

Dismiss it entirely.
Refuse to engage.
Miss the opportunity.

<div class="mt-2 text-red-400">→ Limiting</div>

</div>

</div>

<v-click>

<div class="mt-8 text-center text-xl text-green-400">
The goal: <strong>informed partnership</strong>
</div>

</v-click>

<!--
Setting up the partnership model.
Neither extreme serves students well.
-->

---
layout: section
---

# Timeline of Surprises

How we got here

<!--
History as "nobody expected THIS" moments.
Keep energy high.
-->

---

# The Dream: 1950s

**1950**: Alan Turing asks "Can machines think?"

<v-click>

**1956**: "Artificial Intelligence" is coined. Researchers predict human-level AI within 20 years.

</v-click>

<v-click>

**1966**: ELIZA — a simple chatbot — convinces users it understands them.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
ELIZA just reflected users' words as questions.<br>
<strong>"I'm sad"</strong> → <strong>"Why are you sad?"</strong><br><br>
Lesson: Humans <em>want</em> to believe machines understand.
</div>

</v-click>

<!--
The ELIZA lesson is crucial for working with modern LLMs.
We anthropomorphize readily.
-->

---

# The Winters: 1970s-1980s

AI research hit walls. Funding dried up. Twice.

<v-click>

**Why?**

The approach was **hand-coded rules**. "If X, then Y."

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
You can't write rules for everything. The world is too messy.
</div>

</v-click>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
<strong>Key lesson:</strong> Rigid, rule-based systems fail when facing novel situations.
</div>

</v-click>

<!--
The failure of symbolic AI explains why learning-based approaches won.
-->

---

# The Neural Turn: 1990s-2010s

New idea: instead of programming rules, let machines **learn patterns**.

<v-click>

**Neural networks** — loosely inspired by brain structure — find patterns humans can't specify.

</v-click>

<v-click>

Feed them thousands of cat photos and dog photos → they learn to distinguish cats from dogs.

**Without anyone defining "cat."**

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Progress was slow. Computers weren't powerful enough. Data wasn't available.
</div>

</v-click>

<!--
The core insight that enabled everything: learning > programming.
-->

---

# Deep Learning Arrives: 2012

Three things converged:

<v-clicks>

1. **GPUs**: Graphics cards turned out to be perfect for neural network math
2. **Big Data**: The internet generated massive training datasets
3. **Better Architectures**: Deep networks with many layers

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
<strong>2012:</strong> A neural network crushes the competition in ImageNet.<br>
<strong>2016:</strong> AlphaGo defeats the world champion at Go — a game too complex for brute-force.
</div>

</v-click>

<!--
The deep learning revolution.
ImageNet was the inflection point.
-->

---

# The Transformer: 2017

A paper titled **"Attention Is All You Need"** introduced a new architecture.

<v-click>

The key insight: when processing language, **some words matter more than others**.

</v-click>

<v-click>

*"The cat sat on the mat because **it** was tired"*

What does "it" refer to? The architecture lets the model **attend** to relevant context.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
This became the foundation for everything that followed.
</div>

</v-click>

<!--
Don't go deep on transformers here - that's Module 01.
Just establish that 2017 was a breakthrough.
-->

---

# The LLM Era: 2020-Present

Train a transformer on **enough text** with **enough parameters**...

<v-click>

It doesn't just learn grammar. It learns *a lot*:

- Factual knowledge (though unreliably)
- Reasoning patterns (though imperfectly)
- Code structure (surprisingly well)
- Writing styles (very well)
- Task-following (very well)

</v-click>

<!--
The emergence of capabilities from scale.
-->

---

# November 2022: ChatGPT

The raw model was fine-tuned using human feedback.

<v-click>

This made it not just capable, but **helpful** and **conversational**.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
Suddenly, millions of people were talking to an AI that actually tried to answer their questions usefully.
</div>

</v-click>

<v-click>

**2023-2025**: Rapid iteration. Claude, GPT-4, Gemini, Llama...

Multi-modal. Longer context. Better reasoning. Tool use.

</v-click>

<!--
ChatGPT was the "crossing into mainstream" moment.
RLHF made the difference.
-->

---
layout: section
---

# What LLMs Actually Are

The prediction engine

---

# The Basic Mechanism

A Large Language Model is a **text prediction system** trained on enormous amounts of text.

<v-click>

At its core, it does one thing:

<div class="text-2xl mt-4 text-center">
Given some text, predict what text should come next.
</div>

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
That's it. The magic emerges from scale.
</div>

</v-click>

<!--
This is the key mental model.
Everything else follows from this.
-->

---

# Why Prediction Creates Capability

To predict the next word across **trillions of words** of human writing, a model must learn:

<v-clicks>

- Grammar and syntax
- Facts and relationships
- Argument structures
- Coding patterns
- Stylistic conventions
- Task formats

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Not because anyone told it to. Because predicting what comes next <strong>requires</strong> understanding these patterns.
</div>

</v-click>

<!--
The emergence of capabilities from prediction.
This explains the "unreasonable effectiveness."
-->

---

# A Useful Analogy

Imagine someone who has **read everything ever written** but **experienced nothing directly**.

<v-clicks>

They can complete *"the capital of France is..."* → "Paris"

Because they've seen that pattern thousands of times.

They can structure a Python function because they've seen millions of them.

They can construct an argument because they've seen countless essays.

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
But they've never been to Paris. Never run a program. Never <em>believed</em> anything.
</div>

</v-click>

<!--
The "read everything, experienced nothing" analogy.
Useful but imperfect.
-->

---

# Pattern Reconstruction, Not Retrieval

<v-click>

**Important**: LLMs don't "remember" facts and retrieve them.

</v-click>

<v-click>

They **reconstruct patterns** — weights in a neural network make certain outputs more likely given inputs.

</v-click>

<v-click>

When an LLM produces "Paris" after "the capital of France is..."

It's **completing a pattern**, not recalling a fact.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
This explains both the power and the failure modes.<br>
The patterns are incredibly rich — but they're patterns, not understanding.
</div>

</v-click>

<!--
Critical distinction. Explains hallucinations.
-->

---

# What They Do Well

<v-clicks>

- **Text generation**: Writing, summarizing, translating, explaining
- **Code generation**: Producing functional code from descriptions
- **Pattern completion**: Following examples and formats
- **Information synthesis**: Combining knowledge from training data
- **Instruction following**: Completing tasks as specified

</v-clicks>

<!--
Strengths to leverage.
-->

---

# What They Do Poorly

<v-clicks>

- **Factual accuracy**: They can confidently state falsehoods ("hallucinations")
- **Complex reasoning**: Multi-step logic often fails
- **Math**: Arithmetic errors are common, especially with larger numbers
- **Current events**: Training data has a cutoff
- **Self-knowledge**: They don't reliably know what they know

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
We'll explore capabilities and limitations deeply in Module 03.
</div>

</v-click>

<!--
Weaknesses to watch for.
Module 03 goes deeper.
-->

---
layout: section
---

# Navigating the Noise

Hype vs. Reality

---

# The Extremes

<div class="grid grid-cols-2 gap-8">

<div>

**Doomsayers**

"AI will destroy humanity"
"AI will take all jobs"
"AI will end civilization"

</div>

<div>

**Boosters**

"AI will solve everything"
"AI will achieve consciousness"
"AI will surpass humans"

</div>

</div>

<v-click>

<div class="mt-8 p-4 bg-red-900 rounded">
Both treat AI as a single thing with a single trajectory.<br>
It's not. It's a collection of specific technologies with specific capabilities.
</div>

</v-click>

<!--
Give students vocabulary to navigate the discourse.
-->

---

# A More Useful Frame

Think of current AI as **powerful but narrow tools** that:

<v-clicks>

- Excel at specific tasks when properly directed
- Fail unpredictably outside their strengths
- Amplify human capabilities rather than replace human judgment
- Require skill to use effectively

</v-clicks>

<!--
The practical frame.
-->

---

# The Chainsaw Analogy

A chainsaw is a powerful tool.

<v-clicks>

In **skilled hands**, it transforms what's possible.

In **unskilled hands**, it's dangerous.

In **any hands**, it's useless for tasks it wasn't designed for.

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
LLMs are similar: powerful, requiring skill, suited for specific purposes.
</div>

</v-click>

<!--
Teens love this analogy.
Powerful + dangerous + requires skill.
-->

---
layout: section
---

# The Partnership Model

Human + AI

---

# What Each Brings

| Human Brings | AI Brings |
|--------------|-----------|
| Judgment | Speed |
| Accountability | Scale |
| Goals and values | Pattern matching |
| Real-world grounding | Tireless iteration |
| Verification | Generation |

<v-click>

<div class="mt-4 text-gray-400">
Neither is sufficient alone.
</div>

</v-click>

<!--
The partnership table.
Foundation for the whole course.
-->

---

# The Partnership in Action

<v-clicks>

**Human without AI**: Slower, more limited, doing everything manually

**AI without human**: Unreliable, purposeless, no judgment or accountability

**Human + AI**: Faster, more capable, with human judgment directing AI power

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
Your job isn't to be replaced by AI or to reject AI.<br>
It's to become skilled at <strong>directing AI effectively</strong> while maintaining your own judgment.
</div>

</v-click>

<!--
The thesis of the program.
-->

---

# Introducing: Vibe Engineering

<v-click>

**Vibe coding**: Accept AI output without verification. Hope it works.

</v-click>

<v-click>

**Vibe engineering**: Professional AI use with testing, planning, documentation, and review.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
This program teaches <strong>vibe engineering</strong> — the professional approach to AI collaboration.
</div>

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
More on this in Module 04.
</div>

</v-click>

<!--
Introduce the key framework that defines the program.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| LLMs predict text | They complete patterns, not "understand" |
| Scale creates emergence | Capabilities arise from training, not programming |
| Knowledge from text | They know what they've "read," not experienced |
| Tools amplify humans | Your judgment directs their power |
| Hype obscures reality | Stay curious but skeptical |

<!--
Summary table.
-->

---

# Exercises

<v-clicks>

1. **The Basic Interaction**: Ask an LLM "What are you?" then "What are you *not*?" — compare the responses

2. **The Limits**: Ask about yesterday's news, ask it to multiply 17 × 23, ask for a haiku about a concept that doesn't exist yet

3. **Prediction in Action**: Start typing incomplete sentences and watch it complete patterns

4. **Hallucination Detection**: Ask about a made-up historical event and try to spot the fabrication

</v-clicks>

<!--
Hands-on exercises.
Hallucination detection is where theory becomes real.
-->

---

# Which Model?

You'll hear about Claude, GPT-4, Gemini, Llama, and others.

<v-click>

**The truth**: They have similar core capabilities.

</v-click>

<v-click>

Choose based on:
- What you have access to
- Personal preference
- Specific strengths (coding, analysis, etc.)

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
We'll use Claude in this program, but the skills transfer to any LLM.
</div>

</v-click>

<!--
Preempt the "which is best?" question.
-->

---

# Reflection Questions

<v-clicks>

1. The Turing Test asks if a machine can fool a human into thinking it's human. Is that the right question about intelligence? What might be better?

2. ELIZA (1966) convinced users it understood them using simple tricks. How might your tendency to see understanding where there isn't any affect how you work with modern AI?

3. What's a task where an LLM is like a chainsaw — powerful and useful? What's a task where using an LLM would be like using a chainsaw to butter toast?

</v-clicks>

<!--
Reflection to cement concepts.
-->

---
layout: center
class: text-center
---

# Module 00 Complete

You now have the mental models for understanding what you're working with.

<div class="mt-8 text-xl text-gray-400">
Next: Module 01 — How LLMs Work (Conceptually)
</div>

<div class="mt-8">
  <a href="./01/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 01 →
  </a>
</div>

<!--
Foundation established.
Module 01 goes deeper into mechanism.
-->
