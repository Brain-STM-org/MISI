---
theme: default
title: "Module 16: Privacy & Data"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 16: Privacy & Data
drawings:
  persist: false
transition: slide-left
---

# Module 16

## Privacy & Data

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Responsible data practices with AI tools.
Data flows, what not to share, safeguards.

Estimated time: 25 minutes
Delivery: Day 3 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Practical safeguards, decision frameworks
- Willisons: Data flow details, enterprise vs consumer, regulatory landscape
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Data is the new oil — and like oil, it can spill."
</div>

<div class="mt-4 text-gray-500">
— Unknown
</div>

<!--
Data has value and risk.
-->

---

# Why Privacy Matters

When you use AI coding assistants, data moves:

<v-clicks>

- Your code → AI provider
- Your prompts → AI provider
- Your context → AI provider
- AI provider → trains on your data? → future users?

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Understanding this flow is essential for responsible use.
</div>

</v-click>

<!--
Data flow overview.
-->

---
layout: section
---

# Data Flow in AI Tools

What gets sent where

---

# What Gets Sent

| Data Type | Examples | Typically Sent? |
|-----------|----------|-----------------|
| Your prompts | Questions, requests | Yes |
| Code context | Files open, recent code | Often |
| Project structure | File names, directories | Sometimes |
| Environment info | Language, framework | Sometimes |
| Error messages | Stack traces, logs | If you share |
| Credentials | API keys, passwords | **Should be NO** |

<!--
What data gets sent.
-->

---

# What Happens to Data

| Practice | What It Means |
|----------|---------------|
| **Training opt-out** | Data not used for model improvement |
| **Data retention** | How long data is stored |
| **Third-party sharing** | Who else sees your data |
| **Encryption** | Data protected in transit/rest |
| **Geographic location** | Where data is processed |

<v-click>

<div class="mt-4 text-gray-400">
<strong>Always check the specific terms</strong> for tools you use.
</div>

</v-click>

<!--
What happens to data.
-->

---

# Enterprise vs. Consumer

| Tier | Typical Data Practice |
|------|----------------------|
| Free/consumer | May train on data |
| Pro/individual | Often doesn't train, check terms |
| Enterprise/API | Usually doesn't train, contractual guarantees |

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Match the tool tier to your data sensitivity.
</div>

</v-click>

<!--
Enterprise vs consumer tiers.
-->

---
layout: section
---

# What NOT to Share

Critical safeguards

---

# Never Send to AI

| Data Type | Why Not | What Instead |
|-----------|---------|--------------|
| **Passwords/secrets** | Direct exposure | Use placeholders |
| **API keys** | Can be leaked/stored | Use `[API_KEY]` |
| **Personal info (PII)** | Privacy/legal risk | Anonymize first |
| **Health/financial data** | Regulatory issues | Sanitize completely |
| **Client confidential** | Contractual breach | Check agreements |
| **Proprietary algorithms** | IP exposure | Abstract the problem |

<!--
What never to share.
-->

---

# Placeholder Patterns

Instead of real secrets:

```python
# DON'T send:
API_KEY = "sk-abc123realkey456"
DATABASE_URL = "postgresql://user:realpassword@prod.company.com/db"

# DO send:
API_KEY = "[YOUR_API_KEY]"
DATABASE_URL = "postgresql://user:password@hostname/database"
```

<!--
Placeholder patterns.
-->

---

# Anonymization Patterns

Instead of real user data:

```python
# DON'T send:
user_data = {
    "name": "John Smith",
    "ssn": "123-45-6789",
    "email": "john@company.com"
}

# DO send:
user_data = {
    "name": "Example User",
    "ssn": "[REDACTED]",
    "email": "user@example.com"
}
```

<!--
Anonymization patterns.
-->

---
layout: section
---

# Practical Safeguards

Protecting sensitive data

---

# Safeguard 1: Review Before Sending

Before pasting code or context:

<v-clicks>

1. **Scan for secrets**: API keys, passwords, tokens
2. **Check for PII**: Names, emails, phone numbers
3. **Consider proprietary info**: Trade secrets, client data
4. **Remove or replace**: Sanitize what shouldn't be shared

</v-clicks>

<!--
Review before sending.
-->

---

# Safeguard 2: Use Environment Variables

Keep secrets out of code entirely:

```python
# Code that can safely be shared:
import os
api_key = os.environ.get("API_KEY")  # No actual key in code

# vs. code you shouldn't share:
api_key = "sk-abc123"  # Actual key embedded
```

<!--
Environment variables.
-->

---

# Safeguard 3: Abstract the Problem

Often you can ask about the pattern without the specifics:

<v-click>

**Instead of**:
> "Debug this code that processes credit card data: [actual code]"

</v-click>

<v-click>

**Ask**:
> "How should I structure error handling for a payment processing function? Here's a simplified version: [generic example]"

</v-click>

<!--
Abstract the problem.
-->

---

# Safeguard 4: Check Tool Settings

Many tools have privacy settings:

<v-clicks>

- History on/off
- Training opt-out
- Data retention preferences
- Third-party integrations

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Know what your tools are configured to do.
</div>

</v-click>

<!--
Check tool settings.
-->

---

# Safeguard 5: Separate Sensitive Work

For highly sensitive projects:

<v-clicks>

- Use tools with enterprise data agreements
- Consider air-gapped development for critical code
- Have clear policies about what can use AI assistance

</v-clicks>

<!--
Separate sensitive work.
-->

---
layout: section
---

# Evaluating AI Tools

Privacy due diligence

---

# Questions to Ask

Before using an AI tool professionally:

| Question | Why It Matters |
|----------|----------------|
| Is my data used for training? | Affects what you should share |
| How long is data retained? | Exposure window |
| Can I delete my data? | Control |
| Where is data processed? | Jurisdiction, compliance |
| Any third-party sharing? | Expands exposure |

<!--
Questions for tool evaluation.
-->

---

# Red Flags

<v-clicks>

- Vague privacy policy
- No opt-out for training
- Long or indefinite retention
- No ability to delete
- Data shared broadly with "partners"

</v-clicks>

<!--
Privacy red flags.
-->

---

# Green Flags

<v-clicks>

- Clear, specific privacy policy
- Training opt-out available
- Defined retention periods
- Data deletion options
- SOC 2, GDPR compliance
- Enterprise options with data agreements

</v-clicks>

<!--
Privacy green flags.
-->

---

# Match Tool to Sensitivity

| Context | Suggested Approach |
|---------|-------------------|
| Personal projects, learning | Consumer tier often fine |
| Professional work, no sensitive data | Pro tier with training off |
| Client work, proprietary code | Enterprise with agreements |
| Regulated data | Enterprise + compliance verification |

<!--
Matching tool to sensitivity.
-->

---
layout: section
---

# Regulatory Considerations

When compliance matters

---

# Common Regulations

| Regulation | What It Covers | Relevance |
|------------|----------------|-----------|
| **GDPR** | EU personal data | Any EU users/data |
| **CCPA/CPRA** | California personal data | California users |
| **HIPAA** | US health data | Healthcare applications |
| **PCI-DSS** | Payment card data | Payment processing |

<!--
Common regulations.
-->

---

# When in Doubt

For regulated data, default to:

<v-clicks>

- Don't send it to consumer AI tools
- Use enterprise tools with appropriate agreements
- Consult legal/compliance before establishing practices

</v-clicks>

<!--
When in doubt about regulated data.
-->

---

# Exercise: Sanitization Practice

Take this snippet and prepare it for sharing with AI:

```python
def process_payment(customer_email, amount):
    stripe.api_key = "sk_live_abc123realkey"
    customer = get_customer(customer_email)  # real email
    charge = stripe.Charge.create(
        amount=amount,
        customer=customer.stripe_id
    )
    send_receipt("finance@ourcompany.com", charge.id)
    return charge
```

<v-click>

**What needs to change before asking AI for help?**

</v-click>

<!--
Sanitization exercise.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Data flows to providers | Understand where your data goes |
| Never share secrets | Passwords, keys, PII — always sanitize |
| Check tool practices | Training, retention, sharing policies |
| Abstract when possible | Ask about patterns, not specifics |
| Match tool to sensitivity | Consumer → Enterprise based on data |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Have you ever pasted code with secrets into an AI tool? What could the consequences be?

2. Different companies have very different data practices. How does this affect your choice of tools?

3. "Data is the new oil — and like oil, it can spill." What does this suggest about our responsibility?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 16 Complete

You understand how to protect data when using AI tools.

<div class="mt-8 text-xl text-gray-400">
Next: Module 17 — The Future of Work
</div>

<div class="mt-8">
  <a href="./17/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 17 →
  </a>
</div>

<!--
Privacy practices established.
Module 17 looks at the future.
-->
