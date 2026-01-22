---
theme: default
title: "Module 15: Ethics in Software"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 15: Ethics in Software
drawings:
  persist: false
transition: slide-left
---

# Module 15

## Ethics in Software

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
The responsibility that comes with building things people use.
Discussion-based, not lecture-based.

Estimated time: 30 minutes
Delivery: Scheduled discussion during project work
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"With great power comes great responsibility."
</div>

<div class="mt-4 text-gray-500">
— Yes, from Spider-Man. Also: true.
</div>

<!--
Software shapes how people live.
Your choices affect real humans.
-->

---

# What This Module Is

This isn't a lecture with right answers.

<v-click>

**It's a discussion guide.**

</v-click>

<v-click>

Software shapes how people live, work, and interact. The choices you make — what to build, how to build it, what data to collect — affect real humans.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
These questions don't have easy answers. That's precisely why they're worth discussing.
</div>

</v-click>

<!--
Ethics is about thinking, not rules.
We explore together.
-->

---

# Why Ethics Matters Now

<v-clicks>

**AI is accelerating everything.**
You can build faster than ever. So can everyone else. The gap between "possible" and "deployed" has collapsed.

**Software touches everything.**
Healthcare, finance, education, relationships, democracy. Your code might affect millions of people you'll never meet.

**Mistakes scale.**
A bug isn't just embarrassing — it might deny someone a loan, show them harmful content, or leak their personal data.

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
The leverage is enormous. The responsibility follows.
</div>

</v-click>

<!--
Software's reach has never been greater.
Neither has its potential for harm.
-->

---
layout: section
---

# Topic 1

Bias and Fairness

---

# The Problem

Algorithms make decisions:
- Who gets a loan
- What content you see
- Who gets hired

<v-click>

These algorithms are trained on historical data.

**Historical data reflects historical biases.**

</v-click>

<!--
Algorithms automate existing biases.
Often with a veneer of objectivity.
-->

---

# Example: Hiring

A hiring algorithm trained on past hiring decisions learns that successful candidates look like people who were hired before.

<v-click>

Due to historical discrimination, those were mostly men.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
The algorithm perpetuates the bias <strong>automatically</strong>, at <strong>scale</strong>, with a veneer of <strong>objectivity</strong>.
</div>

</v-click>

<!--
The algorithm isn't "neutral".
It encodes past discrimination.
-->

---

# Example: Facial Recognition

Facial recognition systems trained primarily on lighter-skinned faces perform worse on darker-skinned faces.

<v-click>

When deployed in policing, this disparity has real consequences.

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Technical accuracy isn't uniform. Neither is harm.
</div>

</v-click>

<!--
"Works well on average" can hide serious problems.
Who bears the cost of errors?
-->

---

# Discussion: Bias

<v-clicks>

1. If an AI system reflects biases present in its training data, who is responsible — the people who created the data, the engineers who built the system, or the company that deployed it?

2. A model performs well "on average" but poorly for a minority group. Is it ethical to deploy? What if not deploying means the minority group gets no service at all?

3. How would you test for bias in a system you're building? What kinds of bias might be invisible to you?

</v-clicks>

<!--
No single right answer.
The point is to think through it.
-->

---
layout: section
---

# Topic 2

Privacy and Data

---

# The Problem

Every app wants your data:
- Location
- Contacts
- Browsing history
- Purchases
- Messages

<v-click>

Data enables features.

Data also enables surveillance.

</v-click>

<!--
The same data that helps can also harm.
Context matters enormously.
-->

---

# Example: Fitness App

A fitness app tracks your runs. Harmless?

<v-click>

Aggregated data revealed the locations of secret military bases.

</v-click>

<v-click>

(Soldiers run. Soldiers use fitness apps.)

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Data reveals more in aggregate than any individual entry.
</div>

</v-click>

<!--
Individual data points combine into patterns.
Patterns reveal what was never shared.
-->

---

# The Tradeoffs

| More Data | Less Data |
|-----------|-----------|
| Better personalization | More privacy |
| More features possible | Fewer features |
| More business value | Less risk if breached |
| More responsibility | Less you can misuse |

<v-click>

<div class="mt-4 text-gray-400">
Every feature requiring data is a choice with consequences.
</div>

</v-click>

<!--
Data collection isn't neutral.
It's a tradeoff that should be explicit.
-->

---

# Discussion: Privacy

<v-clicks>

1. You're building an app that would be better with location data. How do you decide whether to collect it?

2. A company offers to pay you for user data. Users agreed to a terms of service they didn't read. Is selling the data ethical?

3. You discover your company is using data in ways users wouldn't expect. What do you do?

</v-clicks>

<!--
These scenarios happen in real companies.
What would you do?
-->

---
layout: section
---

# Topic 3

Accessibility

---

# The Problem

The web and software are visual, dynamic, and complex.

<v-clicks>

Not everyone experiences them the same way:

- **Visual impairments**: Can't see images, colors, small text
- **Motor impairments**: Can't use a mouse, need keyboard navigation
- **Cognitive differences**: Need clear language, predictable interfaces
- **Temporary impairments**: Broken arm, lost glasses, noisy environment

</v-clicks>

<!--
Disability is a spectrum.
Everyone will experience some form of it.
-->

---

# The Reality

Most software ignores accessibility until required by law.

Then it's bolted on poorly.

<v-click>

Building accessibly from the start is:

- **Easier** than retrofitting
- Often **legally required**
- A **larger market** (15% of people have some disability)
- Simply **ethical** — why would you exclude people?

</v-click>

<!--
Accessibility isn't an edge case.
It's a design principle.
-->

---

# Discussion: Accessibility

<v-clicks>

1. Your team is rushing to ship. Accessibility testing would delay launch by two weeks. What do you argue for?

2. AI can generate alt-text for images automatically, but it's sometimes wrong. Is auto-generated alt-text better than none?

3. What accessibility considerations might apply to your project?

</v-clicks>

<!--
Accessibility is often deprioritized.
How do you advocate for it?
-->

---
layout: section
---

# Topic 4

Dark Patterns

---

# The Problem

**Dark patterns** are design choices that trick users into doing things they didn't intend.

<v-clicks>

- **Confirm shaming**: The opt-out button says "No, I don't want to save money"
- **Hidden unsubscribe**: 15 clicks to cancel, 1 click to sign up
- **Forced continuity**: Free trial requires credit card, auto-charges when you forget
- **Misdirection**: "Accept All Cookies" is bright; "Manage Settings" is gray

</v-clicks>

<!--
Dark patterns work.
That's what makes them problematic.
-->

---

# The Business Pressure

<v-click>

You **will** face pressure to implement dark patterns.

</v-click>

<v-click>

They make numbers go up. Bosses like numbers going up.

</v-click>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
But: numbers going up through <strong>manipulation</strong> isn't the same as numbers going up through <strong>value</strong>.
</div>

</v-click>

<!--
Short-term metrics vs. long-term trust.
Dark patterns erode trust.
-->

---

# Discussion: Dark Patterns

<v-clicks>

1. Your manager asks you to make the unsubscribe link smaller and the same color as the background. Do you do it?

2. Where's the line between "good marketing" and "manipulation"?

3. A dark pattern increases revenue by 10% but causes customer support complaints to rise 50%. Is it worth it?

</v-clicks>

<!--
These are real scenarios.
Engineers face these decisions.
-->

---
layout: section
---

# Topic 5

Environmental Impact

---

# The Problem

Software runs on physical infrastructure:

<v-clicks>

- Data centers consume ~2% of global electricity
- Training large AI models emits tons of CO2
- Cryptocurrency mining has the energy footprint of small countries
- Every server, every query, every computation has a cost

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
<strong>Digital doesn't mean immaterial.</strong>
</div>

</v-click>

<!--
Software has physical impact.
We often forget this.
-->

---

# Discussion: Environment

<v-clicks>

1. You can optimize code to use 50% less compute, but it would take an extra week. The code runs on renewable-energy servers anyway. Is it worth the week?

2. Your company wants to add AI features to everything. Each feature increases server load. How do you weigh innovation against environmental cost?

3. Should users be told the environmental cost of their actions? ("This search used 0.2g of CO2"?)

</v-clicks>

<!--
Environmental impact is diffuse.
How much should it factor into decisions?
-->

---
layout: section
---

# Topic 6

AI-Generated Content

---

# The Questions

AI can generate text, code, images, and more. Questions arise:

<v-clicks>

- **Ownership**: Who owns AI-generated code? You? The AI company? No one?
- **Attribution**: If AI trained on others' work, should they be credited?
- **Authenticity**: Should AI-generated content be labeled?
- **Replacement**: If AI does the work, what happens to the humans who did it before?

</v-clicks>

<!--
AI raises novel questions about creation.
We don't have settled answers yet.
-->

---

# The MISI Context

You'll use AI assistants heavily. Consider:

<v-clicks>

- The AI was trained on vast amounts of human-created code
- Someone wrote that code; they aren't credited in the output
- Your project benefits from their work

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
How do you think about attribution in this context?
</div>

</v-click>

<!--
This isn't theoretical for you.
You're using AI right now.
-->

---

# Discussion: AI Content

<v-clicks>

1. AI generates code that closely resembles a specific open-source project. Should you check for licensing issues? How would you even know?

2. You use AI to write 80% of your code. Is it "your" project?

3. An AI-generated image wins an art contest. Is that fair to human artists?

</v-clicks>

<!--
These questions don't have settled answers.
But they need thinking about.
-->

---
layout: section
---

# Topic 7

Developer Responsibility

---

# The Question

How much responsibility do developers bear for how their software is used?

<v-click>

**Consider:**
- A kitchen knife can be used to cook or kill. The knifemaker isn't blamed for murders.
- A social media platform can connect communities or spread misinformation. Is the platform responsible?

</v-click>

<!--
Software isn't as passive as a knife.
Algorithms actively shape behavior.
-->

---

# The Spectrum

```
Tool makers bear              Creators bear full
no responsibility ◄───────────────────────────► responsibility
   (knife model)                                   (?)
```

<v-click>

Where does software fall?

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
It's not as passive as a knife. Algorithms actively shape what users see and do.
</div>

</v-click>

<!--
Software is somewhere in the middle.
But where exactly?
-->

---

# The Nuances

<v-clicks>

- You may not control how your employer uses your work
- You may not foresee how your creation gets misused
- Refusal has costs (job, career, livelihood)
- Complicity has costs (conscience, society)

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
There are no clean answers. Only tradeoffs you have to navigate.
</div>

</v-click>

<!--
Ethics isn't simple.
Real choices have real costs.
-->

---

# Discussion: Responsibility

<v-clicks>

1. Your company builds surveillance software. They say it's for safety. Authoritarian governments are customers. Do you stay?

2. You build a feature. It's misused in ways you didn't anticipate. Are you responsible? What could you have done differently?

3. Is there software you would refuse to build? Where's your line?

</v-clicks>

<!--
These are career questions, not just ethics questions.
Where do you draw lines?
-->

---
layout: section
---

# No Easy Answers

The point of this module

---

# Why We Discuss

Some of these questions have clearer answers than others. Many don't have answers at all — only tradeoffs.

<v-click>

The point isn't to give you a rulebook. It's to:

</v-click>

<v-clicks>

1. **Raise awareness**: These issues exist. You will encounter them.
2. **Build the muscle**: Practice thinking through ethical implications.
3. **Establish norms**: In this program, we talk about these things openly.
4. **Empower dissent**: You can push back when something feels wrong.

</v-clicks>

<!--
Ethics is a practice, not a checklist.
The goal is thoughtful engagement.
-->

---

# The Reality

You won't always be able to act on your ethics.

<v-clicks>

- Organizations have politics
- Livelihoods are at stake
- Power isn't evenly distributed

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
But you should always be <strong>thinking</strong> about ethics. The alternative is sleepwalking into harm.
</div>

</v-click>

<!--
Ethics doesn't mean you always win.
It means you always consider.
-->

---

# Resources

- **ACM Code of Ethics**: ethics.acm.org
- **Weapons of Math Destruction** by Cathy O'Neil
- **Design Justice** by Sasha Costanza-Chock
- **The Social Dilemma** (documentary)
- **Dark Patterns Hall of Shame**: darkpatterns.org

<!--
Further reading for interested students.
-->

---

# Final Reflection

As you build your MISI projects, carry these questions:

<v-clicks>

- Who benefits from what we're building?
- Who might be harmed?
- What data do we really need?
- Are we making something we'd want used on us?
- What's the best version of this? What's the worst-case misuse?

</v-clicks>

<!--
These questions should be ongoing.
Ethics is continuous, not a one-time consideration.
-->

---
layout: center
class: text-center
---

# Module 15 Complete

You're not just building software.

You're shaping a small piece of how the world works.

<div class="mt-8 text-xl text-green-400">
Build thoughtfully.
</div>

<div class="mt-8 text-gray-400">
This concludes the Software Engineering Fundamentals curriculum.
</div>

<!--
Students have completed the SWE track.
Now: go build something meaningful.
-->
