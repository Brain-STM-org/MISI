# Ethics in Software

> *"With great power comes great responsibility."*
> — Yes, from Spider-Man. Also: true.

## What This Module Is

This isn't a lecture with right answers. It's a discussion guide.

Software shapes how people live, work, and interact. The choices you make — what to build, how to build it, what data to collect — affect real humans.

These questions don't have easy answers. That's precisely why they're worth discussing.

---

## Why Ethics Matters Now

You're entering software development at a particular moment:

**AI is accelerating everything.** You can build faster than ever. So can everyone else. The gap between "possible" and "deployed" has collapsed.

**Software touches everything.** Healthcare, finance, education, relationships, democracy. Your code might affect millions of people you'll never meet.

**Mistakes scale.** A bug isn't just embarrassing — it might deny someone a loan, show them harmful content, or leak their personal data.

The leverage is enormous. The responsibility follows.

---

## Topic 1: Bias and Fairness

### The Problem

Algorithms make decisions: who gets a loan, what content you see, who gets hired. These algorithms are trained on historical data. Historical data reflects historical biases.

**Example:** A hiring algorithm trained on past hiring decisions learns that successful candidates look like people who were hired before — who, due to historical discrimination, were mostly men. The algorithm perpetuates the bias automatically, at scale, with a veneer of objectivity.

**Example:** Facial recognition systems trained primarily on lighter-skinned faces perform worse on darker-skinned faces. When deployed in policing, this disparity has real consequences.

### Discussion Questions

1. If an AI system reflects biases present in its training data, who is responsible — the people who created the data, the engineers who built the system, or the company that deployed it?

2. A model performs well "on average" but poorly for a minority group. Is it ethical to deploy? What if not deploying means the minority group gets no service at all?

3. How would you test for bias in a system you're building? What kinds of bias might be invisible to you?

---

## Topic 2: Privacy and Data

### The Problem

Every app wants your data. Location, contacts, browsing history, purchases, messages. Data enables features. Data also enables surveillance.

**Example:** A fitness app tracks your runs. Aggregated data reveals the locations of secret military bases (soldiers run, soldiers use fitness apps).

**Example:** A period-tracking app stores sensitive health data. After law changes, that data could theoretically be subpoenaed.

### The Tradeoffs

| More Data | Less Data |
|-----------|-----------|
| Better personalization | More privacy |
| More features possible | Fewer features |
| More business value | Less risk if breached |
| More responsibility | Less you can misuse |

### Discussion Questions

1. You're building an app that would be better with location data. How do you decide whether to collect it?

2. A company offers to pay you for user data. Users agreed to a terms of service they didn't read. Is selling the data ethical?

3. You discover your company is using data in ways users wouldn't expect. What do you do?

---

## Topic 3: Accessibility

### The Problem

The web and software are visual, dynamic, and complex. Not everyone experiences them the same way:

- **Visual impairments**: Can't see images, colors, small text
- **Motor impairments**: Can't use a mouse, need keyboard navigation
- **Cognitive differences**: Need clear language, predictable interfaces
- **Temporary impairments**: Broken arm, lost glasses, noisy environment

### The Reality

Most software ignores accessibility until required by law. Then it's bolted on poorly.

Building accessibly from the start is:
- Easier than retrofitting
- Often legally required
- A larger market (15% of people have some disability)
- Simply ethical — why would you exclude people?

### Discussion Questions

1. Your team is rushing to ship. Accessibility testing would delay launch by two weeks. What do you argue for?

2. AI can generate alt-text for images automatically, but it's sometimes wrong. Is auto-generated alt-text better than none?

3. What accessibility considerations might apply to your project?

---

## Topic 4: Dark Patterns

### The Problem

**Dark patterns** are design choices that trick users into doing things they didn't intend.

**Examples:**
- "Confirm shaming": The opt-out button says "No, I don't want to save money"
- Hidden unsubscribe: 15 clicks to cancel, 1 click to sign up
- Forced continuity: Free trial requires credit card, auto-charges when you forget
- Misdirection: The "Accept All Cookies" button is bright; "Manage Settings" is gray

These patterns work. They increase conversion rates. They also manipulate people.

### The Business Pressure

You will face pressure to implement dark patterns. They make numbers go up. Bosses like numbers going up.

But: numbers going up through manipulation isn't the same as numbers going up through value.

### Discussion Questions

1. Your manager asks you to make the unsubscribe link smaller and the same color as the background. Do you do it?

2. Where's the line between "good marketing" and "manipulation"?

3. A dark pattern increases revenue by 10% but causes customer support complaints to rise 50%. Is it worth it?

---

## Topic 5: Environmental Impact

### The Problem

Software runs on physical infrastructure:
- Data centers consume ~2% of global electricity
- Training large AI models emits tons of CO2
- Cryptocurrency mining has the energy footprint of small countries
- Every server, every query, every computation has a cost

Digital doesn't mean immaterial.

### The Complexity

More efficient code = less energy. But:
- Optimization takes time
- "Good enough" ships faster
- Climate impact is diffuse and delayed

How much should you factor environmental cost into technical decisions?

### Discussion Questions

1. You can optimize code to use 50% less compute, but it would take an extra week. The code runs on renewable-energy servers anyway. Is it worth the week?

2. Your company wants to add AI features to everything. Each feature increases server load. How do you weigh innovation against environmental cost?

3. Should users be told the environmental cost of their actions? ("This search used 0.2g of CO2"?)

---

## Topic 6: AI-Generated Content and Attribution

### The Problem

AI can generate text, code, images, and more. Questions arise:

- **Ownership**: Who owns AI-generated code? You? The AI company? No one?
- **Attribution**: If AI trained on others' work, should they be credited?
- **Authenticity**: Should AI-generated content be labeled?
- **Replacement**: If AI does the work, what happens to the humans who did it before?

### The MISI Context

You'll use AI assistants heavily. Consider:
- The AI was trained on vast amounts of human-created code
- Someone wrote that code; they aren't credited in the output
- Your project benefits from their work

### Discussion Questions

1. AI generates code that closely resembles a specific open-source project. Should you check for licensing issues? How would you even know?

2. You use AI to write 80% of your code. Is it "your" project?

3. An AI-generated image wins an art contest. Is that fair to human artists?

---

## Topic 7: The Developer's Responsibility

### The Question

How much responsibility do developers bear for how their software is used?

**Consider:**
- A kitchen knife can be used to cook or kill. The knifemaker isn't blamed for murders.
- A social media platform can connect communities or spread misinformation. Is the platform responsible?

**The Spectrum:**
```
Tool makers bear              Creators bear full
no responsibility ◄───────────────────────────► responsibility
   (knife model)                                   (?)
```

Where does software fall? It's not as passive as a knife. Algorithms actively shape what users see and do.

### The Nuances

- You may not control how your employer uses your work
- You may not foresee how your creation gets misused
- Refusal has costs (job, career, livelihood)
- Complicity has costs (conscience, society)

### Discussion Questions

1. Your company builds surveillance software. They say it's for safety. Authoritarian governments are customers. Do you stay?

2. You build a feature. It's misused in ways you didn't anticipate. Are you responsible? What could you have done differently?

3. Is there software you would refuse to build? Where's your line?

---

## Group Discussion Format

For the MISI cohort, consider these formats for ethics discussions:

### Case Study Analysis (45 min)
1. Present a real-world case (examples throughout this module)
2. Small groups discuss (15 min)
3. Groups share conclusions (15 min)
4. Full group discussion of disagreements (15 min)

### Role Play (30 min)
Assign roles:
- Developer who wants to do the right thing
- Manager pressuring for dark patterns
- User advocate
- Business stakeholder

Play out a scenario. Debrief.

### Project Reflection (20 min)
For each team's project:
- What ethical considerations apply?
- What data do you collect? Do you need it?
- Who might be excluded or harmed?
- What could go wrong?

---

## No Easy Answers

Some of these questions have clearer answers than others. Many don't have answers at all — only tradeoffs.

The point isn't to give you a rulebook. It's to:

1. **Raise awareness**: These issues exist. You will encounter them.
2. **Build the muscle**: Practice thinking through ethical implications.
3. **Establish norms**: In this program, we talk about these things openly.
4. **Empower dissent**: You can push back when something feels wrong.

You won't always be able to act on your ethics — organizations have politics, livelihoods are at stake. But you should always be *thinking* about ethics. The alternative is sleepwalking into harm.

---

## Resources for Further Exploration

- **ACM Code of Ethics**: [ethics.acm.org](https://ethics.acm.org)
- **Weapons of Math Destruction** by Cathy O'Neil (book on algorithmic harm)
- **Design Justice** by Sasha Costanza-Chock (design and equity)
- **The Social Dilemma** (documentary on social media design)
- **Dark Patterns Hall of Shame**: [darkpatterns.org](https://darkpatterns.org)

---

## Final Reflection

As you build your MISI projects, carry these questions:

- Who benefits from what we're building?
- Who might be harmed?
- What data do we really need?
- Are we making something we'd want used on us?
- What's the best version of this? What's the worst-case misuse?

You're not just building software. You're shaping a small piece of how the world works.

Build thoughtfully.

---

*This concludes the Software Engineering Fundamentals curriculum. Go build something meaningful.*
