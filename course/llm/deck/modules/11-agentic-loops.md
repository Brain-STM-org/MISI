---
theme: default
title: "Module 11: Agentic Loops"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 11: Agentic Loops
drawings:
  persist: false
transition: slide-left
---

# Module 11

## Agentic Loops

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Understanding how AI agents work.
The agent loop, tools, Claude Code case study.

Estimated time: 30 minutes
Delivery: Day 2 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Agent loop structure, interaction patterns, when to use agents
- Willisons: Tool use mechanics, Claude Code deep dive, common pitfalls
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The best tool is the one that does what you need without you having to think about how."
</div>

<div class="mt-4 text-gray-500">
— Unknown
</div>

<!--
Agents do the how; you specify the what.
-->

---

# From Chat to Agent

**Conversational AI** (what we've done so far):

```
You: [Question]
AI: [Answer]
You: [Follow-up]
AI: [Response]
```

<v-click>

**Agentic AI**:

```
You: [Goal]
AI: [Plans steps]
AI: [Executes step 1 using tools]
AI: [Observes result]
AI: [Executes step 2 based on result]
AI: [Continues until goal achieved]
AI: [Reports completion]
```

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
The AI doesn't just answer — it <strong>acts</strong>.
</div>

</v-click>

<!--
Chat vs agent distinction.
-->

---
layout: section
---

# The Agent Loop

How agents work

---

# The Core Loop

```
┌─────────────────────────────────────────────────────────────┐
│                      THE AGENT LOOP                         │
├─────────────────────────────────────────────────────────────┤
│                    ┌──────────┐                             │
│                    │   GOAL   │                             │
│                    └────┬─────┘                             │
│                         ▼                                   │
│                    ┌──────────┐                             │
│               ┌───►│   PLAN   │                             │
│               │    └────┬─────┘                             │
│               │         ▼                                   │
│               │    ┌──────────┐                             │
│               │    │   ACT    │ (use tools)                 │
│               │    └────┬─────┘                             │
│               │         ▼                                   │
│               │    ┌──────────┐                             │
│               │    │ OBSERVE  │ (check result)              │
│               │    └────┬─────┘                             │
│               │         ▼                                   │
│               │    ┌──────────┐                             │
│               └────│ REFLECT  │──────► Done? → RESULT       │
│                    └──────────┘                             │
└─────────────────────────────────────────────────────────────┘
```

<!--
The agent loop diagram.
-->

---

# Loop Components

| Stage | What Happens | Example |
|-------|--------------|---------|
| **Goal** | Understand what to achieve | "Add user authentication" |
| **Plan** | Break into steps | "1. Check existing auth, 2. Install deps..." |
| **Act** | Execute one step | Run: `npm install passport` |
| **Observe** | See the result | "Package installed successfully" |
| **Reflect** | Assess, decide next | "Dependencies installed, now create model" |

<v-click>

<div class="mt-4 text-gray-400">
The loop continues until the goal is achieved or the agent can't proceed.
</div>

</v-click>

<!--
Agent loop components.
-->

---
layout: section
---

# Tools: How Agents Interact

Capabilities that enable action

---

# What Are Tools?

Tools are capabilities the AI can invoke:

| Tool Type | What It Does | Examples |
|-----------|--------------|----------|
| **File system** | Read/write files | View code, create files, edit content |
| **Command execution** | Run terminal commands | npm install, git commit, run tests |
| **Search** | Find information | Search codebase, web, docs |
| **Browser** | Interact with web | Navigate, click, fill forms |
| **APIs** | Call external services | Database queries, third-party services |

<!--
Types of agent tools.
-->

---

# Tool Use Flow

When an agent uses a tool:

```
1. Agent decides: "I need to read the file src/auth.py"
2. Agent calls: read_file("src/auth.py")
3. System executes the read operation
4. Result returned to agent: [file contents]
5. Agent processes result and continues
```

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
The agent doesn't have direct access — it requests, the system executes, results return.
</div>

</v-click>

<!--
Tool use flow.
-->

---

# Tool Limitations

Agents can only use tools they're given:

<v-clicks>

- No file access without file tools
- No commands without execution tools
- No web access without browser tools

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This connects to Module 10 — limiting tools limits security risk.
</div>

</v-click>

<!--
Tool limitations and security.
-->

---
layout: section
---

# Claude Code: Case Study

Understanding a real agentic tool

---

# What Claude Code Can Do

| Capability | How It Works |
|------------|--------------|
| **Read your codebase** | File system tools read authorized files |
| **Write/edit code** | File tools create and modify |
| **Run commands** | Terminal executes npm, git, python, etc. |
| **Search code** | Tools grep and search files |
| **Run tests** | Execute test suites, observe results |
| **Git operations** | Commit, branch, push (with permission) |

<!--
Claude Code capabilities.
-->

---

# A Typical Session

**You**: "Add input validation to the user registration form"

<v-click>

**Claude Code**:

```
1. PLAN: Examine form, identify fields, add validation, test

2. ACT: [Reads src/components/RegistrationForm.tsx]

3. OBSERVE: Form has fields: email, password, confirmPassword, username

4. ACT: [Reads current validation logic]

5. OBSERVE: No validation currently exists

6. PLAN: Add validation for email format, password strength,
         confirmation match, username constraints

7. ACT: [Edits RegistrationForm.tsx with validation]

8. ACT: [Runs npm test]

9. OBSERVE: Tests pass

10. RESULT: Validation added and tested. Here's what I changed...
```

</v-click>

<!--
Claude Code session example.
-->

---

# Working Effectively with Claude Code

**Be specific about goals**:

<v-clicks>

- ❌ "Fix the code"
- ✓ "Fix the failing test in user.test.ts"

</v-clicks>

<v-click>

**Provide context**:
- Mention relevant files
- Explain constraints or preferences
- Note any gotchas

</v-click>

<!--
Claude Code best practices.
-->

---

# Monitor and Review

<v-clicks>

**Monitor progress**:
- Watch what it's doing
- Intervene if it goes off track
- Don't let it run indefinitely

**Review changes**:
- Check diffs before accepting
- Run tests yourself
- Understand what changed

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Never blindly accept agent output. Always review.
</div>

</v-click>

<!--
Monitor and review practices.
-->

---
layout: section
---

# When to Use Agents

Decision framework

---

# Agents Excel At

| Task Type | Why Agents Help |
|-----------|-----------------|
| **Multi-file changes** | Can coordinate across files |
| **Iterative tasks** | Test, fix, test, fix loops |
| **Exploration** | Search and navigate codebases |
| **Boilerplate** | Generate standard patterns |
| **Refactoring** | Systematic changes across codebase |

<!--
Where agents excel.
-->

---

# Agents Struggle With

| Task Type | Why Agents Struggle |
|-----------|---------------------|
| **Ambiguous goals** | Need clear objectives to plan |
| **Novel problems** | May not have patterns to follow |
| **Judgment calls** | Can't assess business/UX decisions |
| **Perfect accuracy** | Still make mistakes; need review |
| **Security-sensitive** | Module 10 risks apply |

<!--
Where agents struggle.
-->

---

# Decision Framework

```
Is the task well-defined with clear success criteria?
├── Yes → Agent might help
└── No → Clarify first, then consider agent

Does it involve multiple files or repetitive steps?
├── Yes → Agent likely valuable
└── No → Direct conversation might be faster

Are you comfortable reviewing all changes?
├── Yes → Proceed with agent
└── No → Use agent more cautiously
```

<!--
Decision framework for using agents.
-->

---
layout: section
---

# Agent Patterns

Different ways to work with agents

---

# Pattern 1: Task → Agent → Review

```
1. You define task clearly
2. Agent executes autonomously
3. You review all changes
4. Accept, reject, or iterate
```

<v-click>

<div class="mt-4 text-gray-400">
Good for well-understood tasks.
</div>

</v-click>

<!--
Task-agent-review pattern.
-->

---

# Pattern 2: Collaborative Iteration

```
1. You define task
2. Agent proposes approach
3. You approve/modify approach
4. Agent implements
5. You review
6. Iterate as needed
```

<v-click>

<div class="mt-4 text-gray-400">
Good when you want more control.
</div>

</v-click>

<!--
Collaborative iteration pattern.
-->

---

# Pattern 3: Guided Exploration

```
1. You ask: "What would need to change to add X?"
2. Agent explores and reports
3. You decide approach
4. Agent implements decided approach
```

<v-click>

<div class="mt-4 text-gray-400">
Good for unfamiliar codebases.
</div>

</v-click>

<!--
Guided exploration pattern.
-->

---

# Pattern 4: Supervised Execution

```
1. Agent proposes each step
2. You approve before execution
3. Agent executes approved step
4. Repeat
```

<v-click>

<div class="mt-4 text-gray-400">
Good for high-stakes or sensitive changes.
</div>

</v-click>

<!--
Supervised execution pattern.
-->

---
layout: section
---

# Common Pitfalls

What can go wrong

---

# Pitfall 1: Runaway Agent

Agent keeps working but making things worse.

<v-click>

**Prevention**: Set limits; monitor progress

**Recovery**: Stop, reset, start with clearer goals

</v-click>

<!--
Runaway agent pitfall.
-->

---

# Pitfall 2: Scope Creep

Agent does more than asked.

<v-click>

**Prevention**: Be specific; constrain what it should touch

**Recovery**: Review all changes; revert unwanted ones

</v-click>

<!--
Scope creep pitfall.
-->

---

# Pitfall 3: Confident Errors

Agent completes task but with bugs.

<v-click>

**Prevention**: Always test; never assume success

**Recovery**: Thorough testing before accepting

</v-click>

<!--
Confident errors pitfall.
-->

---

# Pitfall 4: Context Loss

Agent forgets constraints in long sessions.

<v-click>

**Prevention**: Reiterate important constraints; use fresh sessions

**Recovery**: Reset with explicit context

</v-click>

<!--
Context loss pitfall.
-->

---

# Exercise: Agent Observation

Use Claude Code (or similar) for a small task:

1. Ask it to create a simple function with tests
2. **Don't** just accept the result
3. Watch each step — what tools does it use?
4. How does it decide what to do next?

<v-click>

<div class="mt-4 text-gray-400">
Understanding the loop through direct observation.
</div>

</v-click>

<!--
Exercise: agent observation.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Agent loop | Goal → Plan → Act → Observe → Reflect → Repeat |
| Tools | Agents act through tools; no tools = no actions |
| Clear goals | Agents need specific objectives to plan effectively |
| Monitor progress | Watch what's happening; intervene when needed |
| Review everything | Never blindly accept agent output |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. When does an agent's autonomy become a liability? How do you balance efficiency with control?

2. Think of a recent coding task. Would an agent have helped? What would you have needed to specify clearly?

3. "Agents can only use tools they're given." How does this connect to Module 10's security concepts?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 11 Complete

You now understand how AI agents work.

<div class="mt-8 text-xl text-gray-400">
Next: Module 12 — Developer Workflows
</div>

<div class="mt-8">
  <a href="./12/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 12 →
  </a>
</div>

<!--
Agent fundamentals understood.
Module 12 covers specific developer tools.
-->
