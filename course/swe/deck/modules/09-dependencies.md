---
theme: default
title: "Module 09: Dependencies & Packages"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 09: Dependencies & Packages
drawings:
  persist: false
transition: slide-left
---

# Module 09

## Dependencies & Packages

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
Dependencies are how we build on the work of others.
Understanding them is essential for modern development.

Estimated time: 20 minutes
Delivery: Just-in-time when teams need it
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"Standing on the shoulders of giants is more efficient than reinventing the wheel. But check that the giant's shoulders are sturdy first."
</div>

<!--
Dependencies let us leverage others' work.
But they come with responsibilities and risks.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** what dependencies are and why they exist
2. **Use** a package manager to install dependencies
3. **Read** a project's dependency file
4. **Evaluate** whether to add a dependency or write code yourself
5. **Recognize** the risks of dependencies

</v-clicks>

<!--
This module covers the what, why, and how of dependencies.
Focus on evaluation skills, not just mechanics.
-->

---
layout: section
---

# What Are Dependencies?

Code you didn't write but your project needs

---

# The Problem: HTTP Requests

You need to make an HTTP request. Two options:

<v-click>

**Option A: Write it yourself**
- Implement socket connections
- Handle TCP/IP protocols
- Parse HTTP headers
- Manage TLS/SSL encryption
- Handle redirects, cookies, timeouts...

</v-click>

<v-click>

**Option B: Use a library**
```python
import requests
response = requests.get("https://api.example.com")
```

One line. Done.

</v-click>

<!--
Dependencies solve problems that have been solved before.
The requests library encapsulates massive complexity.
-->

---

# Why Use Dependencies?

<v-clicks>

- **Focus** on your actual problem, not reinventing solved problems
- **Use** battle-tested code that handles edge cases
- **Ship** faster with fewer bugs
- **Benefit** from community maintenance and security fixes

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded">
Dependencies let you build <strong>on top of</strong> others' work instead of <strong>from scratch</strong>.
</div>

</v-click>

<!--
Dependencies are leverage.
Thousands of developer-hours in one install command.
-->

---

# The Package Ecosystem

Every language has one:

| Language | Package Manager | Registry | Config File |
|----------|-----------------|----------|-------------|
| JavaScript | npm / yarn | npmjs.com | `package.json` |
| Python | pip | pypi.org | `requirements.txt` |
| Rust | cargo | crates.io | `Cargo.toml` |
| Go | go mod | pkg.go.dev | `go.mod` |

<v-click>

<div class="mt-4 text-gray-400">
The pattern: a tool to install, a place where packages live, a file listing what you need.
</div>

</v-click>

<!--
Different ecosystems, same concept.
Package managers standardize how we share code.
-->

---
layout: section
---

# Using Package Managers

The basic workflow

---

# Installing Dependencies

**JavaScript (npm)**

```bash
# Install a package
npm install axios

# Install for development only
npm install --save-dev jest
```

<v-click>

**Python (pip)**

```bash
# Install a package
pip install requests

# Install from requirements file
pip install -r requirements.txt
```

</v-click>

<!--
Installation is straightforward.
Development dependencies are separate (testing tools, etc.)
-->

---

# Where Do Packages Go?

When you install a package:

<v-clicks>

- **JavaScript**: Downloads to `node_modules/` folder
- **Python**: Downloads to site-packages (system or virtualenv)
- Package is added to your config file
- Lock file is updated with exact versions

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
<strong>Never commit node_modules/</strong> — it can be gigabytes. The lock file tracks what to install.
</div>

</v-click>

<!--
node_modules is the most famous black hole in software.
Git ignore it, let npm recreate it from lock file.
-->

---

# Understanding package.json

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "axios": "^1.4.0"
  },
  "devDependencies": {
    "jest": "^29.5.0"
  }
}
```

<v-clicks>

| Field | Meaning |
|-------|---------|
| `dependencies` | Required to run the app |
| `devDependencies` | Only needed during development |
| `^4.18.2` | Version 4.18.2 or compatible higher (< 5.0.0) |

</v-clicks>

<!--
package.json is the manifest of your project.
The caret (^) allows minor and patch updates.
-->

---

# Lock Files: Why They Matter

`package.json` says: `"axios": "^1.4.0"`

<v-clicks>

- Today: npm installs 1.4.0
- Next week: 1.5.0 is released → npm installs that
- Next month: 1.6.0 is released → npm installs that

Your code might break because a dependency changed!

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
<strong>Lock files</strong> (package-lock.json, yarn.lock) record exactly which versions were installed.
<br><br>
<strong>Always commit lock files.</strong> They ensure everyone gets identical dependencies.
</div>

</v-click>

<!--
Lock files are critical for reproducibility.
Without them, "works on my machine" becomes common.
-->

---
layout: section
---

# Evaluating Dependencies

Should you add it?

---

# The Five Questions

Before adding a dependency, ask:

<v-clicks>

1. **Do I really need this?**
2. **Is it well-maintained?**
3. **How big is it?**
4. **What does it depend on?**
5. **Is it trustworthy?**

</v-clicks>

<!--
Not every problem needs a library.
These questions help you decide.
-->

---

# 1. Do I Really Need This?

<v-click>

**Bad reason:** "I don't know how to do X"
- Maybe learn? Simple tasks don't need libraries.

</v-click>

<v-click>

**Good reason:** "This solves a genuinely complex problem"
- Cryptography, date handling, HTTP clients, parsing

</v-click>

<v-click>

```javascript
// Don't add lodash for this:
str.charAt(0).toUpperCase() + str.slice(1)

// Built-in JavaScript. No dependency needed.
```

</v-click>

<!--
AI assistants love suggesting libraries.
Often built-in solutions exist.
-->

---

# 2. Is It Well-Maintained?

Check on GitHub or the registry:

| Signal | Good | Concerning |
|--------|------|------------|
| Last update | Within 6 months | Over 2 years ago |
| Open issues | Some, being addressed | Hundreds, ignored |
| Contributors | Multiple | Just one |
| Downloads | Thousands/week | Dozens |

<v-click>

<div class="mt-4 text-gray-400">
An abandoned dependency is a future problem waiting to happen.
</div>

</v-click>

<!--
Maintenance signals reliability.
Unmaintained packages don't get security fixes.
-->

---

# 3 & 4: Size and Transitive Dependencies

<v-clicks>

**Size matters** (especially in JavaScript):
- Adding a big library for one function? Maybe write that function.
- Adding a date library? Probably worth it — dates are hard.

**Dependencies have dependencies:**

```bash
# See what you're really installing
npm ls        # JavaScript: show dependency tree
```

One package might pull in dozens of others.

</v-clicks>

<!--
Transitive dependencies multiply risk.
Each dependency is code you're trusting.
-->

---

# 5. Is It Trustworthy?

Packages can contain malicious code.

<v-clicks>

Prefer:
- Popular, well-known packages
- Packages from reputable organizations
- Packages with clear source code

Check for known vulnerabilities:

```bash
npm audit     # JavaScript
```

</v-clicks>

<!--
Supply chain attacks are real.
Typosquatting (misnamed packages) is a common vector.
-->

---

# The Tradeoff

```
More Dependencies              Fewer Dependencies
─────────────────              ─────────────────
✓ Faster development           ✓ Smaller codebase
✓ Solved problems              ✓ Fewer security concerns
✗ More security surface        ✓ More control
✗ More maintenance             ✗ Slower development
✗ Larger app size              ✗ Reinventing wheels
```

<v-click>

<div class="mt-4 text-gray-400">
There's no universal right answer. Judge case by case.
</div>

</v-click>

<!--
Balance is key.
Every dependency is a choice with tradeoffs.
-->

---
layout: section
---

# Dependencies and AI

Be thoughtful about AI suggestions

---

# AI Over-Suggests Libraries

```
You: "How do I capitalize a string?"

AI: "Install lodash:
     npm install lodash
     Use _.capitalize()"
```

<v-click>

But JavaScript has this built-in:

```javascript
str.charAt(0).toUpperCase() + str.slice(1)
```

**No dependency needed.**

</v-click>

<!--
AI defaults to libraries it knows.
Built-in solutions are often better.
-->

---

# AI Gets Packages Wrong

<v-clicks>

**Outdated packages:**
- AI's training has a cutoff
- Might suggest deprecated packages or old versions

**Hallucinated packages:**
- AI sometimes invents package names that don't exist
- Always verify on the actual registry

**Wrong APIs:**
- Package exists but the function doesn't
- Always test the actual code

</v-clicks>

<!--
Trust but verify with AI-suggested dependencies.
Check the registry, read the docs.
-->

---

# The left-pad Story

<v-click>

In 2016, an 11-line package called `left-pad` was removed from npm.

</v-click>

<v-click>

**Result:** Thousands of projects broke, including React and Babel.

</v-click>

<v-click>

**Lessons:**

- Even tiny dependencies create risk
- Transitive dependencies multiply the problem
- Consider whether you need a dependency for something simple

</v-click>

<!--
A cautionary tale.
An 11-line function took down major projects.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Dependencies are others' code | You benefit from their work and inherit their bugs |
| Lock files ensure reproducibility | Always commit them |
| Evaluate before adding | Not every problem needs a library |
| Maintenance matters | Abandoned packages become liabilities |
| AI suggests liberally | Verify necessity and quality |

<!--
These are the takeaways.
Dependencies are powerful but require judgment.
-->

---
layout: section
---

# Exercises

---

# Exercise 1: Evaluate a Dependency

You need to format dates in JavaScript.

Research these options:
- `moment` — the classic date library
- `date-fns` — functional date utilities
- `dayjs` — lightweight alternative

<div class="mt-4">

Find for each:
- Bundle size
- Last update
- Weekly downloads

Which would you choose? Why?

</div>

<!--
This exercises evaluation skills.
Students should discover moment is deprecated.
-->

---

# Exercise 2: Audit a Project

If you have a project with dependencies:

```bash
# JavaScript
npm ls       # List all dependencies
npm audit    # Check for vulnerabilities

# Python
pip list     # List installed packages
```

<div class="mt-4">

Questions:
- How many dependencies do you have?
- How many transitive dependencies?
- Any security vulnerabilities?

</div>

<!--
Real projects often have surprising dependency counts.
Students should explore their own projects.
-->

---

# Reflection Questions

<v-clicks>

1. A library has 1 million downloads but hasn't been updated in 3 years. Would you use it?

2. You can either write 20 lines of code or add a dependency. What factors influence your choice?

3. Your AI assistant suggests a package you've never heard of. What's your next step?

</v-clicks>

<!--
Q1: Depends on stability vs. security needs
Q2: Complexity, maintenance, team skills
Q3: Verify on registry, check stats, read docs
-->

---
layout: center
class: text-center
---

# Module 09 Complete

You can now evaluate and manage dependencies thoughtfully.

<div class="mt-8 text-xl text-gray-400">
Next: Module 10 — Build Pipelines
</div>

<div class="mt-8">
  <a href="./10/" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 10 →
  </a>
</div>

<!--
Students now understand the dependency tradeoff.
Next module covers automating verification with CI/CD.
-->
