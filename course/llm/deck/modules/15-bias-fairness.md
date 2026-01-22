---
theme: default
title: "Module 15: Bias & Fairness"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 15: Bias & Fairness
drawings:
  persist: false
transition: slide-left
---

# Module 15

## Bias & Fairness

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Recognizing and addressing bias in AI systems.
Sources of bias, detection, developer responsibility.

Estimated time: 25 minutes
Delivery: Day 3 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Practical bias checks, actionable frameworks
- Willisons: Real examples in code generation, technical bias mechanisms
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The machine is only as unbiased as the data it learns from — and the humans who built it."
</div>

<div class="mt-4 text-gray-500">
— Unknown
</div>

<!--
Bias comes from data and design choices.
-->

---

# Why Bias Matters

AI systems influence decisions that affect people:

<v-clicks>

- Who sees which job listings
- What content gets recommended
- How code suggestions shape applications
- What answers people receive

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
Bias in these systems causes real harm — often invisibly.
</div>

</v-click>

<!--
Why bias matters.
-->

---
layout: section
---

# Sources of Bias

Where bias comes from

---

# 1. Training Data Bias

AI learns patterns from data. If data contains biases, AI learns them:

| Data Characteristic | Resulting Bias |
|---------------------|----------------|
| Historical discrimination | AI perpetuates it |
| Underrepresented groups | AI performs worse for them |
| Stereotypical associations | AI reproduces them |
| Geographic/cultural gaps | AI defaults to dominant culture |

<!--
Training data bias.
-->

---

# 2. Selection Bias

What data gets collected affects what AI knows:

<v-clicks>

- Internet text overrepresents certain demographics
- Code repositories favor certain languages and styles
- Feedback comes from users who engage (not all users)

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
AI coding assistants may not understand patterns from underrepresented industries.
</div>

</v-click>

<!--
Selection bias.
-->

---

# 3. Algorithmic Amplification

AI can amplify small biases into large effects:

```
Small bias in training data
         ↓
AI learns the pattern
         ↓
AI outputs reinforce the pattern
         ↓
Pattern becomes more prevalent
         ↓
Future training data even more biased
```

<!--
Algorithmic amplification.
-->

---

# 4. Human Bias in Design

Humans building AI make choices that embed biases:

<v-clicks>

- What problems are worth solving?
- How is "success" defined?
- Whose feedback shapes improvements?
- What tradeoffs are acceptable?

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Deciding which languages to support first reflects whose needs are prioritized.
</div>

</v-click>

<!--
Human bias in design.
-->

---
layout: section
---

# Bias in Code Generation

How it manifests

---

# Variable Naming Assumptions

```python
def parse_name(full_name):
    # Assumes name format (first/last)
    # May not handle non-Western name structures
    first, last = full_name.split()  # Fails for many names
```

<v-click>

<div class="mt-4 text-gray-400">
Many naming conventions don't follow first/last pattern.
</div>

</v-click>

<!--
Variable naming assumptions.
-->

---

# Default User Assumptions

```javascript
function getUserPreferences(user) {
    return {
        language: 'en-US',           // Why this default?
        timezone: 'America/New_York', // Whose timezone?
        dateFormat: 'MM/DD/YYYY'     // Not universal
    };
}
```

<v-click>

<div class="mt-4 text-gray-400">
Defaults encode assumptions about who the "typical" user is.
</div>

</v-click>

<!--
Default user assumptions.
-->

---

# Example Data Bias

```python
# AI-generated example data often reflects biases:
users = [
    {"name": "John Smith", "role": "engineer"},
    {"name": "Jane Doe", "role": "designer"},  # Gender/role association
    {"name": "Bob Johnson", "role": "manager"},
]
```

<v-click>

<div class="mt-4 text-gray-400">
Stereotypical associations in generated examples.
</div>

</v-click>

<!--
Example data bias.
-->

---

# Documentation Assumptions

```python
def authenticate_user(username, password):
    """
    Authenticates a user with his credentials.  # Gendered language
    ...
    """
```

<v-click>

<div class="mt-4 text-gray-400">
Subtle language choices reflect and reinforce assumptions.
</div>

</v-click>

<!--
Documentation assumptions.
-->

---
layout: section
---

# Recognizing Bias

Questions to ask

---

# Questions for AI Output

When reviewing AI-generated content:

| Question | What It Catches |
|----------|-----------------|
| Who is assumed to be the default user? | Exclusionary defaults |
| What examples are provided? | Stereotypical representations |
| What edge cases are missing? | Underrepresented scenarios |
| Whose perspective is centered? | Cultural assumptions |
| What language is used? | Gendered or exclusionary terms |

<!--
Questions for detecting bias.
-->

---

# Red Flags

Watch for:

<v-clicks>

- **Homogeneous examples**: All example users look the same
- **Assumed norms**: "Normal" that isn't universal
- **Missing considerations**: No accessibility, no i18n
- **Stereotypical patterns**: Roles/traits by demographics
- **Exclusive language**: "He" as default, jargon that excludes

</v-clicks>

<!--
Bias red flags.
-->

---

# Green Flags

Look for:

<v-clicks>

- **Diverse examples**: Varied names, contexts, scenarios
- **Explicit configurability**: Defaults that can be changed
- **Inclusive language**: They/them, accessible explanations
- **Edge case awareness**: Different cultures, abilities, contexts

</v-clicks>

<!--
Bias green flags.
-->

---
layout: section
---

# Practical Bias Checks

Actionable tests

---

# Check 1: "Who's Missing?" Test

For any AI-generated feature:

1. List who's represented
2. Consider who's NOT represented
3. Ask: would this work for them?

<v-click>

```python
def validate_age(age):
    if age < 18 or age > 65:
        return False  # Why 65? What about users outside this range?
    return True
```

</v-click>

<!--
Who's missing test.
-->

---

# Check 2: "Default Swap" Test

Replace defaults with alternatives:

<v-clicks>

- Would this work in a different country?
- Would this work for a different gender?
- Would this work for a different ability level?
- Would this work for a different economic context?

</v-clicks>

<!--
Default swap test.
-->

---

# Check 3: "Explain the Assumption" Test

For every assumption in generated code:

> "Why this default? What's the justification?"

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
If the answer is "I don't know" or "that's just how it is," examine further.
</div>

</v-click>

<!--
Explain the assumption test.
-->

---

# Check 4: "Harm Scenario" Test

Consider how the code could cause harm:

<v-clicks>

- Could it exclude someone unfairly?
- Could it make incorrect assumptions about people?
- Could it perpetuate stereotypes?
- Could it disadvantage certain groups?

</v-clicks>

<!--
Harm scenario test.
-->

---
layout: section
---

# Developer Responsibility

Your role

---

# You Can't Fix Everything

AI systems have biases. You can't eliminate all of them.

<v-click>

What you CAN do:

</v-click>

<v-clicks>

1. **Recognize** biases when they appear
2. **Question** assumptions in AI output
3. **Improve** code before accepting it
4. **Advocate** for inclusive practices
5. **Document** known limitations

</v-clicks>

<!--
What you can and can't do.
-->

---

# Professional Standards

| Responsibility | Action |
|----------------|--------|
| Don't blindly accept biased output | Review critically |
| Don't ship known harmful biases | Fix before release |
| Don't ignore feedback about bias | Listen and respond |
| Don't assume it's someone else's problem | Take ownership |

<!--
Professional standards for bias.
-->

---

# When You Find Bias

<v-clicks>

1. **Fix it** if you can (in your code)

2. **Report it** if appropriate (to tool providers)

3. **Document it** for others (in your team)

4. **Learn from it** (improve your review process)

</v-clicks>

<!--
When you find bias.
-->

---

# Exercise: Inclusive Rewrite

Take this biased code:

```python
def greet_customer(customer):
    """Welcomes the customer and asks if he needs help."""
    title = "Mr." if customer.gender == "male" else "Mrs."
    return f"Hello {title} {customer.last_name}! How can I help you, sir?"
```

<v-click>

**Task**: Rewrite to be more inclusive. What assumptions did the original make?

</v-click>

<!--
Inclusive rewrite exercise.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Bias sources | Training data, selection, amplification, design |
| Code manifestation | Defaults, examples, assumptions, language |
| Detection | Ask "who's missing?" and "why this default?" |
| Responsibility | Review, fix, report, document |
| Perfection isn't possible | Improvement is always possible |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Think of a default in software you use regularly. Who does it serve? Who might it not serve?

2. "The machine is only as unbiased as the data it learns from." If true, what are the implications for using AI-generated code?

3. When you find bias in AI output, what factors determine your response?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 15 Complete

You can now recognize and address bias in AI outputs.

<div class="mt-8 text-xl text-gray-400">
Next: Module 16 — Privacy & Data
</div>

<div class="mt-8">
  <a href="./16/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 16 →
  </a>
</div>

<!--
Bias awareness established.
Module 16 covers data privacy.
-->
