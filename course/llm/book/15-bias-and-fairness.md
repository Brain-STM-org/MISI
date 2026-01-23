# Bias & Fairness

> *"The machine is only as unbiased as the data it learns from — and the humans who built it."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Identify** sources of bias in AI systems
2. **Recognize** when AI outputs may reflect harmful biases
3. **Apply** practical checks for bias in your AI-assisted work
4. **Consider** fairness implications in AI-enabled features
5. **Discuss** the responsibility of developers using AI tools

---

## Why Bias Matters

AI systems are increasingly making or influencing decisions that affect people:

- Who sees which job listings
- What content gets recommended
- How code suggestions shape applications
- What answers people receive to questions

Bias in these systems can cause real harm — often in ways that aren't immediately visible.

---

## Sources of Bias

### 1. Training Data Bias

AI learns patterns from data. If the data contains biases, the AI learns them:

| Data Characteristic | Resulting Bias |
|---------------------|----------------|
| Historical discrimination | AI perpetuates it |
| Underrepresented groups | AI performs worse for them |
| Stereotypical associations | AI reproduces them |
| Geographic/cultural gaps | AI defaults to dominant culture |

**Example**: An AI trained mostly on code from certain communities may suggest patterns that don't match other communities' conventions.

### 2. Selection Bias

What data gets collected affects what the AI knows:

- Internet text overrepresents certain demographics
- Code repositories favor certain languages and styles
- Feedback data comes from users who engage (not all users)

**Example**: AI coding assistants trained on popular open-source projects may not understand domain-specific patterns from underrepresented industries.

### 3. Algorithmic Amplification

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
Future training data is even more biased
```

**Example**: If AI slightly prefers certain naming conventions, developers may adopt them, making them more common, reinforcing the AI's preference.

### 4. Human Bias in Design

The humans building AI make choices that embed biases:

- What problems are worth solving?
- How is "success" defined?
- Whose feedback shapes improvements?
- What tradeoffs are acceptable?

**Example**: Deciding which languages to support first reflects whose needs are prioritized.

---

## Bias in Code Generation

AI coding assistants can exhibit bias in subtle ways:

### Variable Naming Assumptions

```python
# AI might default to assumptions:
def calculate_salary(employee):
    # Assumes certain salary structures
    # Assumes certain employment models
    pass

def parse_name(full_name):
    # Assumes name format (first/last)
    # May not handle non-Western name structures
    first, last = full_name.split()  # Fails for many names
```

### Default User Assumptions

```javascript
// AI might generate:
function getUserPreferences(user) {
    return {
        language: 'en-US',  // Why this default?
        timezone: 'America/New_York',  // Whose timezone?
        dateFormat: 'MM/DD/YYYY'  // Not universal
    };
}
```

### Example Data Bias

```python
# AI-generated example data often reflects biases:
users = [
    {"name": "John Smith", "role": "engineer"},
    {"name": "Jane Doe", "role": "designer"},  # Gender/role associations
    {"name": "Bob Johnson", "role": "manager"},
]
```

### Documentation Assumptions

```python
# AI might write:
def authenticate_user(username, password):
    """
    Authenticates a user with his credentials.  # Gendered language
    ...
    """
```

---

## Recognizing Bias in AI Outputs

### Questions to Ask

When reviewing AI-generated content:

| Question | What It Catches |
|----------|-----------------|
| Who is assumed to be the default user? | Exclusionary defaults |
| What examples are provided? | Stereotypical representations |
| What edge cases are missing? | Underrepresented scenarios |
| Whose perspective is centered? | Cultural assumptions |
| What language is used? | Gendered or exclusionary terms |

### Red Flags

Watch for:

- **Homogeneous examples**: All example users look the same
- **Assumed norms**: "Normal" that isn't universal
- **Missing considerations**: No accessibility, no i18n
- **Stereotypical patterns**: Roles/traits associated with demographics
- **Exclusive language**: "He" as default, jargon that excludes

### Green Flags

Look for:

- **Diverse examples**: Varied names, contexts, scenarios
- **Explicit configurability**: Defaults that can be changed
- **Inclusive language**: They/them, accessible explanations
- **Edge case awareness**: Different cultures, abilities, contexts

---

## Practical Bias Checks

### Check 1: The "Who's Missing?" Test

For any AI-generated feature or example:

1. List who's represented
2. Consider who's NOT represented
3. Ask: would this work for them?

```python
# AI generates user validation:
def validate_age(age):
    if age < 18 or age > 65:
        return False  # Why 65? What about users outside this range?
    return True
```

### Check 2: The "Default Swap" Test

Replace defaults with alternatives:

- Would this work in a different country?
- Would this work for a different gender?
- Would this work for a different ability level?
- Would this work for a different economic context?

### Check 3: The "Explain the Assumption" Test

For every assumption in generated code, ask:

> "Why this default? What's the justification?"

If the answer is "I don't know" or "that's just how it is," examine further.

### Check 4: The "Harm Scenario" Test

Consider how the code could cause harm:

- Could it exclude someone unfairly?
- Could it make incorrect assumptions about people?
- Could it perpetuate stereotypes?
- Could it disadvantage certain groups?

---

## Fairness in AI-Enabled Features

When building features that use AI, consider:

### Who Benefits?

| Question | Consideration |
|----------|---------------|
| Who does this feature help? | Ensure broad benefit |
| Who might it disadvantage? | Mitigate harm |
| Who was consulted in design? | Include affected groups |
| Who tests it? | Diverse testing |

### What Decisions Are Made?

If AI influences decisions about people:

- Can decisions be explained?
- Can decisions be appealed?
- Are decisions auditable?
- Is there human oversight for high-stakes decisions?

### What Data Is Used?

- Is the data representative?
- Does the data contain historical biases?
- Can users control their data?
- Are data limitations disclosed?

---

## Developer Responsibility

### You Can't Fix Everything

AI systems have biases. You can't eliminate all of them.

What you CAN do:

1. **Recognize** biases when they appear
2. **Question** assumptions in AI output
3. **Improve** code before accepting it
4. **Advocate** for inclusive practices
5. **Document** known limitations

### Professional Standards

As a professional using AI tools:

| Responsibility | Action |
|----------------|--------|
| Don't blindly accept biased output | Review critically |
| Don't ship known harmful biases | Fix before release |
| Don't ignore feedback about bias | Listen and respond |
| Don't assume bias is someone else's problem | Take ownership |

### When You Find Bias

1. **Fix it** if you can (in your code)
2. **Report it** if appropriate (to tool providers)
3. **Document it** for others (in your team)
4. **Learn from it** (improve your review process)

---

## Practical Exercises

### Exercise 1: Bias Audit

Take AI-generated code from your project:

1. List all assumptions in the code
2. For each assumption, consider who it might exclude
3. Identify at least one bias or oversight
4. Suggest a fix

### Exercise 2: Example Data Review

Ask AI to generate sample user data.

1. Review the names, roles, characteristics
2. What patterns do you notice?
3. Are any groups overrepresented or underrepresented?
4. Ask AI to regenerate with explicit diversity

Compare the results.

### Exercise 3: Default Analysis

Find three default values in code you've written or accepted:

1. Why that default?
2. Who does it serve well?
3. Who might it not serve?
4. Should it be configurable instead?

### Exercise 4: Inclusive Rewrite

Take this biased code:

```python
def greet_customer(customer):
    """Say hello to a customer.

    Welcomes the customer and asks if he needs help.
    """
    title = "Mr." if customer.gender == "male" else "Mrs."
    return f"Hello {title} {customer.last_name}! How can I help you, sir?"
```

Rewrite it to be more inclusive. What changes? What assumptions did the original make?

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Bias sources | Training data, selection, amplification, design |
| Code manifestation | Defaults, examples, assumptions, language |
| Detection | Ask "who's missing?" and "why this default?" |
| Responsibility | Review, fix, report, document |
| Perfection isn't possible | Improvement is always possible |

---

## Connection to What's Next

Bias connects to broader ethics:

- **Module 16**: Privacy & Data — how data practices affect fairness
- **Module 17**: The Future of Work — societal implications

---

## Reflection Questions

1. Think of a default in software you use regularly. Who does it serve? Who might it not serve?

2. "The machine is only as unbiased as the data it learns from." If this is true, what are the implications for using AI-generated code?

3. When you find bias in AI output, what factors determine how you respond? When is "fixing it locally" enough? When should you do more?

---

*Next module: Privacy & Data — responsible data practices in AI-assisted development.*
