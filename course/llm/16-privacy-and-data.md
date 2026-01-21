# Privacy & Data

> *"Data is the new oil — and like oil, it can spill."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Understand** how data flows when using AI tools
2. **Identify** privacy risks in AI-assisted development
3. **Apply** practical safeguards for sensitive data
4. **Evaluate** AI tools' data practices
5. **Make** informed decisions about what to share with AI

---

## Why Privacy Matters for Developers

When you use AI coding assistants, data moves:

- Your code → AI provider
- Your prompts → AI provider
- Your context → AI provider
- AI provider → trains on your data? → future users?

Understanding this flow is essential for responsible use.

---

## Data Flow in AI Tools

### What Gets Sent

When you interact with AI coding tools:

| Data Type | Examples | Typically Sent? |
|-----------|----------|-----------------|
| Your prompts | Questions, requests | Yes |
| Code context | Files open, recent code | Often |
| Project structure | File names, directories | Sometimes |
| Environment info | Language, framework | Sometimes |
| Error messages | Stack traces, logs | If you share |
| Credentials | API keys, passwords | Should be NO |

### What Happens to It

Different providers handle data differently:

| Practice | What It Means | Check For |
|----------|---------------|-----------|
| **Training opt-out** | Data not used for model improvement | Enterprise/API tiers |
| **Data retention** | How long data is stored | Privacy policy |
| **Third-party sharing** | Who else sees your data | Terms of service |
| **Encryption** | Data protected in transit/rest | Security documentation |
| **Geographic location** | Where data is processed | Compliance docs |

### Enterprise vs. Consumer

| Tier | Typical Data Practice |
|------|----------------------|
| Free/consumer | May train on data |
| Pro/individual | Often doesn't train, check terms |
| Enterprise/API | Usually doesn't train, contractual guarantees |

**Always check the specific terms** for tools you use.

---

## What NOT to Share

### Never Send to AI

| Data Type | Why Not | What Instead |
|-----------|---------|--------------|
| **Passwords/secrets** | Direct exposure | Use placeholders |
| **API keys** | Can be leaked/stored | Use `[API_KEY]` |
| **Personal identifiable info** | Privacy/legal risk | Anonymize first |
| **Health/financial data** | Regulatory issues | Sanitize completely |
| **Client confidential data** | Contractual breach | Check agreements |
| **Proprietary algorithms** | IP exposure | Abstract the problem |

### Placeholder Patterns

Instead of real secrets:

```python
# DON'T send:
API_KEY = "sk-abc123realkey456"
DATABASE_URL = "postgresql://user:realpassword@prod.company.com/db"

# DO send:
API_KEY = "[YOUR_API_KEY]"
DATABASE_URL = "postgresql://user:password@hostname/database"
```

### Anonymization Patterns

Instead of real user data:

```python
# DON'T send:
user_data = {"name": "John Smith", "ssn": "123-45-6789", "email": "john@company.com"}

# DO send:
user_data = {"name": "Example User", "ssn": "[REDACTED]", "email": "user@example.com"}
```

---

## Practical Safeguards

### Safeguard 1: Review Before Sending

Before pasting code or context:

1. **Scan for secrets**: API keys, passwords, tokens
2. **Check for PII**: Names, emails, phone numbers
3. **Consider proprietary info**: Trade secrets, client data
4. **Remove or replace**: Sanitize what shouldn't be shared

### Safeguard 2: Use Environment Variables

Keep secrets out of code entirely:

```python
# Code that can safely be shared:
import os
api_key = os.environ.get("API_KEY")  # No actual key in code

# vs. code you shouldn't share:
api_key = "sk-abc123"  # Actual key embedded
```

### Safeguard 3: Abstract the Problem

Often you can ask about the pattern without the specifics:

**Instead of**:
> "Debug this code that processes credit card data for our payments system: [actual code with real data handling]"

**Ask**:
> "How should I structure error handling for a payment processing function? Here's a simplified version: [generic example]"

### Safeguard 4: Check Tool Settings

Many tools have privacy settings:

- History on/off
- Training opt-out
- Data retention preferences
- Third-party integrations

Know what your tools are configured to do.

### Safeguard 5: Separate Sensitive Work

For highly sensitive projects:

- Use tools with enterprise data agreements
- Consider air-gapped development for critical code
- Have clear policies about what can use AI assistance

---

## Evaluating AI Tool Privacy

### Questions to Ask

Before using an AI tool professionally:

| Question | Why It Matters |
|----------|----------------|
| Is my data used for training? | Affects what you should share |
| How long is data retained? | Exposure window |
| Can I delete my data? | Control |
| Where is data processed? | Jurisdiction, compliance |
| What's the encryption standard? | Security in transit/rest |
| Any third-party sharing? | Expands exposure |

### Where to Find Answers

- Privacy policy
- Terms of service
- Security documentation
- Trust/compliance pages
- Enterprise sales teams (for detailed questions)

### Red Flags

- Vague privacy policy
- No opt-out for training
- Long or indefinite retention
- No ability to delete
- Data shared broadly with "partners"

### Green Flags

- Clear, specific privacy policy
- Training opt-out available
- Defined retention periods
- Data deletion options
- SOC 2, GDPR compliance
- Enterprise options with data agreements

---

## Regulatory Considerations

### Common Regulations

| Regulation | What It Covers | Relevance |
|------------|----------------|-----------|
| **GDPR** | EU personal data | Any EU users/data |
| **CCPA/CPRA** | California personal data | California users |
| **HIPAA** | US health data | Healthcare applications |
| **PCI-DSS** | Payment card data | Payment processing |
| **FERPA** | Education records | Educational software |

### Implications for AI Use

If you work with regulated data:

1. **Know your obligations**: What laws apply?
2. **Check AI tool compliance**: Does the tool meet requirements?
3. **Document your practices**: How data flows through AI
4. **Get guidance**: Legal/compliance team input for sensitive areas

### When in Doubt

For regulated data, default to:
- Don't send it to consumer AI tools
- Use enterprise tools with appropriate agreements
- Consult legal/compliance before establishing practices

---

## Your Data in AI Training

### The Training Question

Some AI providers train on user data. This means:

- Your code could influence future model outputs
- Similar code might appear for other users
- Your patterns become part of the model

### What This Means Practically

If training is enabled:
- Don't share unique proprietary code
- Assume your input could influence outputs for others
- Consider whether your client/employer would consent

If training is disabled:
- Still applies other safeguards (retention, security)
- More appropriate for professional use
- Verify the claim in documentation

### Making an Informed Choice

| Context | Suggested Approach |
|---------|-------------------|
| Personal projects, learning | Consumer tier often fine |
| Professional work, no sensitive data | Pro tier with training off |
| Client work, proprietary code | Enterprise with agreements |
| Regulated data | Enterprise + compliance verification |

---

## Practical Exercises

### Exercise 1: Data Flow Mapping

For one AI tool you use:

1. Draw the data flow: your input → ... → AI response
2. Identify what data is sent
3. Research: where does data go? How long kept?
4. Document what you learned

### Exercise 2: Sanitization Practice

Take this snippet and prepare it for sharing with AI:

```python
def process_payment(customer_email, amount):
    stripe.api_key = "sk_live_abc123realkey"
    customer = get_customer(customer_email)  # customer_email is real email
    charge = stripe.Charge.create(
        amount=amount,
        currency="usd",
        customer=customer.stripe_id
    )
    send_receipt("finance@ourcompany.com", charge.id)
    return charge
```

What needs to change before asking AI for help with this code?

### Exercise 3: Tool Evaluation

Choose an AI tool you don't currently use:

1. Find its privacy policy
2. Answer the evaluation questions from this module
3. Would you use it for professional work? Why or why not?

### Exercise 4: Policy Draft

Write a brief policy for AI tool use on a hypothetical project:

- What data can be shared?
- What data cannot be shared?
- What tools are approved?
- What review is required?

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Data flows to providers | Understand where your data goes |
| Never share secrets | Passwords, keys, PII — always sanitize |
| Check tool practices | Training, retention, sharing policies |
| Abstract when possible | Ask about patterns, not specifics |
| Match tool to sensitivity | Consumer → Enterprise based on data |

---

## Connection to What's Next

Privacy is one aspect of responsible AI use:

- **Module 15** (completed): Bias considerations
- **Module 17**: Broader societal implications

Together, these form your ethical foundation for AI-assisted development.

---

## Reflection Questions

1. Have you ever pasted code with secrets into an AI tool? What could the consequences be?

2. Different companies have very different data practices. How does this affect your choice of tools?

3. "Data is the new oil — and like oil, it can spill." What does this metaphor suggest about our responsibility with data?

---

*Next module: The Future of Work — societal implications and your role in an AI-augmented profession.*
