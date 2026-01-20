# Dependencies & Packages

> *"Standing on the shoulders of giants is more efficient than reinventing the wheel. But check that the giant's shoulders are sturdy first."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** what dependencies are and why they exist
2. **Use** a package manager to install dependencies
3. **Read** a project's dependency file and understand what it means
4. **Evaluate** whether to add a dependency or write the code yourself
5. **Recognize** the risks of dependencies (security, maintenance, bloat)

---

## What Are Dependencies?

A **dependency** is code that your project depends on but didn't write itself.

When you type `npm install express` or `pip install requests`, you're adding a dependency — downloading someone else's code to use in your project.

### Why Use Dependencies?

Consider: you need to make an HTTP request in your code.

**Option A: Write it yourself**
- Implement socket connections
- Handle TCP/IP protocols
- Parse HTTP headers
- Manage TLS/SSL encryption
- Handle redirects, cookies, timeouts, errors...

**Option B: Use a library**
```python
import requests
response = requests.get("https://api.example.com/data")
```

Done. One line. The `requests` library handles all the complexity.

Dependencies let you:
- Focus on your actual problem, not reinventing solved problems
- Use battle-tested code that handles edge cases
- Ship faster with fewer bugs
- Benefit from community maintenance and security fixes

### The Ecosystem

Every language has a package ecosystem:

| Language | Package Manager | Registry | Config File |
|----------|-----------------|----------|-------------|
| JavaScript | npm / yarn | npmjs.com | `package.json` |
| Python | pip | pypi.org | `requirements.txt` |
| Rust | cargo | crates.io | `Cargo.toml` |
| Go | go mod | pkg.go.dev | `go.mod` |
| Ruby | gem / bundler | rubygems.org | `Gemfile` |

The pattern is consistent: a tool to install packages, a registry where packages live, and a file listing what your project needs.

---

## Using Package Managers

### The Basic Workflow

1. **Find a package** that solves your problem
2. **Install it** using your package manager
3. **Import/require it** in your code
4. **Use it**

### JavaScript (npm)

```bash
# Create a new project (if needed)
npm init -y

# Install a package
npm install axios

# Install a development-only package
npm install --save-dev jest
```

This:
- Downloads the package to `node_modules/`
- Adds it to `package.json`
- Updates `package-lock.json`

Using it:
```javascript
const axios = require('axios');
// or in modern JavaScript:
import axios from 'axios';

const response = await axios.get('https://api.example.com');
```

### Python (pip)

```bash
# Install a package
pip install requests

# Install from a requirements file
pip install -r requirements.txt
```

Using it:
```python
import requests

response = requests.get('https://api.example.com')
```

---

## Understanding Dependency Files

### package.json (JavaScript)

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

| Field | Meaning |
|-------|---------|
| `dependencies` | Required to run the application |
| `devDependencies` | Only needed during development (testing, building) |
| `^4.18.2` | Version 4.18.2 or higher (but < 5.0.0) |

### requirements.txt (Python)

```
requests==2.31.0
flask>=2.0.0,<3.0.0
numpy
```

| Syntax | Meaning |
|--------|---------|
| `==2.31.0` | Exactly this version |
| `>=2.0.0,<3.0.0` | Version 2.x |
| `numpy` | Any version (risky!) |

---

## Lock Files: Reproducibility

A **lock file** records exactly which versions were installed.

### The Problem

`package.json` says: `"axios": "^1.4.0"`

This means "version 1.4.0 or any compatible higher version."

- Today: npm installs 1.4.0
- Next week: npm installs 1.5.0 (a new version was released)
- Next month: npm installs 1.6.0

Your code might break because a dependency changed.

### The Solution

Lock files (`package-lock.json`, `Pipfile.lock`, `yarn.lock`) record:
- The exact version installed
- The exact versions of sub-dependencies
- Checksums to verify integrity

**Always commit lock files to version control.** They ensure everyone gets the same versions.

```bash
# Install exactly what's in the lock file
npm ci          # JavaScript (clean install)
pip install -r requirements.txt  # Python (if pinned)
```

---

## Evaluating Dependencies

Not every problem needs a dependency. Before adding one, ask:

### 1. Do I Really Need This?

**Bad reason:** "I don't know how to do X"
- Maybe learn? Simple tasks don't need libraries.

**Good reason:** "This solves a genuinely complex problem I shouldn't reinvent"
- Cryptography, HTTP clients, date handling, parsing

### 2. Is It Well-Maintained?

Check on GitHub or the registry:

| Signal | Good | Concerning |
|--------|------|------------|
| Last update | Within past 6 months | Over 2 years ago |
| Open issues | Some, being addressed | Hundreds, ignored |
| Contributors | Multiple | Just one |
| Downloads | Thousands/millions per week | Dozens |
| Stars | Many | Few |

A abandoned dependency is a future problem.

### 3. How Big Is It?

For JavaScript especially, dependencies add to your bundle size:

- Adding `lodash` for one utility function? Maybe just write that function.
- Adding a date library? Probably worth it — date handling is genuinely hard.

### 4. What Does It Depend On?

Dependencies have dependencies (transitive dependencies). One package might pull in dozens of others.

```bash
# See the dependency tree
npm ls        # JavaScript
pip show <package>  # Python (shows dependencies)
```

More dependencies = more potential security vulnerabilities and maintenance burden.

### 5. Is It Trustworthy?

Packages can contain malicious code. Prefer:
- Popular, well-known packages
- Packages from reputable organizations
- Packages with clear source code and audits

Check for security advisories:
```bash
npm audit     # JavaScript
pip-audit     # Python (separate tool)
```

---

## The Dependency Tradeoff

```
┌─────────────────────────────────────────────────────────┐
│               More Dependencies                          │
│  ✓ Faster development                                   │
│  ✓ Solved problems                                      │
│  ✗ More security surface                                │
│  ✗ More maintenance burden                              │
│  ✗ Larger application size                              │
│  ✗ More things that can break                           │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│               Fewer Dependencies                         │
│  ✓ Smaller, focused codebase                            │
│  ✓ Fewer security concerns                              │
│  ✓ More control                                         │
│  ✗ Slower development                                   │
│  ✗ Reinventing solved problems                          │
│  ✗ Potentially more bugs in custom code                 │
└─────────────────────────────────────────────────────────┘
```

There's no universal right answer. Judge case by case.

---

## Dependencies and AI Assistants

AI assistants love suggesting dependencies. Be thoughtful.

### AI Might Over-Rely on Libraries

```
You: "How do I capitalize the first letter of a string?"

AI: "Install the lodash library:
     npm install lodash
     Then use _.capitalize()"
```

But JavaScript has this built-in:
```javascript
str.charAt(0).toUpperCase() + str.slice(1)
```

No dependency needed.

### AI Might Suggest Outdated Packages

AI's training data has a cutoff. It might suggest:
- Deprecated packages
- Packages with known security issues
- Older versions

Always verify:
- Is this package still maintained?
- Are there known vulnerabilities?
- Is there a better modern alternative?

### AI Gets Package Names Wrong

AI sometimes hallucinates package names that don't exist. Always:
- Verify the package exists on the registry
- Check that your import/require matches the package's actual API

---

## Real-World Example: The left-pad Incident

In 2016, a developer removed a small package called `left-pad` from npm. This 11-line package added padding to strings.

Result: Thousands of projects broke, including major ones like React and Babel.

Lessons:
- Even tiny dependencies create risk
- Transitive dependencies multiply the problem
- Consider whether you need a dependency for something simple

---

## Exercise: Explore Dependencies

### Exercise 1: Examine a package.json

Find a popular open-source project on GitHub (like [express](https://github.com/expressjs/express) or [react](https://github.com/facebook/react)).

Look at their `package.json`:
- How many dependencies do they have?
- What are the devDependencies for?
- What do the version ranges mean?

### Exercise 2: Evaluate a Dependency

You need to format dates nicely in your JavaScript project.

Research these options:
- `moment` — the classic date library
- `date-fns` — functional date utilities
- `dayjs` — lightweight alternative

For each, find:
- Bundle size
- Last update
- Weekly downloads
- GitHub stars

Which would you choose? Why?

### Exercise 3: Check Your Project

If you have a project with dependencies:

```bash
# JavaScript
npm ls       # List all dependencies
npm audit    # Check for vulnerabilities

# Python
pip list     # List installed packages
```

What do you find? Any surprises?

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Dependencies are someone else's code | You benefit from their work and inherit their bugs |
| Lock files ensure reproducibility | Always commit them |
| Evaluate before adding | Not every problem needs a library |
| Maintenance matters | Abandoned packages become liabilities |
| AI suggests liberally | Verify necessity and quality |

---

## Reflection Questions

1. A library has 1 million weekly downloads but hasn't been updated in 3 years. Would you use it?

2. You can either write 20 lines of code or add a dependency. What factors influence your choice?

3. Your AI assistant suggests a package you've never heard of. What's your next step?

---

*This completes Tier 2: Core Concepts. Next, we move to Tier 3: Professional Practices — build pipelines, observability, iterative design, and more.*
