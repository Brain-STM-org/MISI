# Agentic Loops

> *"The best tool is the one that does what you need without you having to think about how."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** what makes AI "agentic" vs. conversational
2. **Describe** the core agent loop and how it works
3. **Understand** tool use and how agents interact with the world
4. **Recognize** when to use agents vs. direct conversation
5. **Work effectively** with Claude Code and similar agentic tools

---

## From Chat to Agent

Up until now, we've focused on **conversational AI**:

```
You: [Question]
AI: [Answer]
You: [Follow-up]
AI: [Response]
```

**Agentic AI** is different:

```
You: [Goal]
AI: [Plans steps]
AI: [Executes step 1 using tools]
AI: [Observes result]
AI: [Executes step 2 based on result]
AI: [Continues until goal achieved]
AI: [Reports completion]
```

The AI doesn't just answer — it **acts**.

---

## The Agent Loop

All AI agents follow a similar core loop:

```
┌─────────────────────────────────────────────────────────────┐
│                      THE AGENT LOOP                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    ┌──────────┐                             │
│                    │   GOAL   │                             │
│                    └────┬─────┘                             │
│                         │                                   │
│                         ▼                                   │
│                    ┌──────────┐                             │
│               ┌───►│   PLAN   │                             │
│               │    └────┬─────┘                             │
│               │         │                                   │
│               │         ▼                                   │
│               │    ┌──────────┐                             │
│               │    │   ACT    │ (use tools)                 │
│               │    └────┬─────┘                             │
│               │         │                                   │
│               │         ▼                                   │
│               │    ┌──────────┐                             │
│               │    │ OBSERVE  │ (check result)              │
│               │    └────┬─────┘                             │
│               │         │                                   │
│               │         ▼                                   │
│               │    ┌──────────┐                             │
│               └────│ REFLECT  │──────► Done?                │
│                    └──────────┘          │                  │
│                                          │                  │
│                                          ▼                  │
│                                   ┌────────────┐            │
│                                   │   RESULT   │            │
│                                   └────────────┘            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Loop Components

| Stage | What Happens | Example |
|-------|--------------|---------|
| **Goal** | Understand what needs to be achieved | "Add user authentication to this app" |
| **Plan** | Break into steps, decide approach | "1. Check existing auth, 2. Install deps, 3. Create models..." |
| **Act** | Execute one step using available tools | Run: `npm install passport passport-local` |
| **Observe** | See the result of the action | "Package installed successfully" |
| **Reflect** | Assess progress, decide next step | "Dependencies installed, now create User model" |

The loop continues until the goal is achieved or the agent determines it can't proceed.

---

## Tools: How Agents Interact

Agents need **tools** to do anything beyond generating text.

### What Are Tools?

Tools are capabilities the AI can invoke:

| Tool Type | What It Does | Examples |
|-----------|--------------|----------|
| **File system** | Read/write files | View code, create files, edit content |
| **Command execution** | Run terminal commands | npm install, git commit, run tests |
| **Search** | Find information | Search codebase, search web, search docs |
| **Browser** | Interact with web | Navigate, click, fill forms, scrape |
| **APIs** | Call external services | Database queries, third-party services |

### Tool Use Flow

When an agent decides to use a tool:

```
1. Agent decides: "I need to read the file src/auth.py"
2. Agent calls: read_file("src/auth.py")
3. System executes the read operation
4. Result returned to agent: [file contents]
5. Agent processes result and continues
```

The agent doesn't have direct access — it requests, the system executes, and results return.

### Tool Limitations

Agents can only use tools they're given:
- No file access without file tools
- No commands without execution tools
- No web access without browser tools

This is important for security (Module 10) — limiting tools limits risk.

---

## Claude Code: An Agent Case Study

Claude Code is Anthropic's agentic coding assistant. Understanding how it works helps you work with any agent.

### What Claude Code Can Do

| Capability | How It Works |
|------------|--------------|
| **Read your codebase** | File system tools read files you authorize |
| **Write/edit code** | File tools create and modify files |
| **Run commands** | Terminal access executes npm, git, python, etc. |
| **Search code** | Tools grep and search through files |
| **Run tests** | Execute test suites and observe results |
| **Git operations** | Commit, branch, push (with your permission) |

### A Typical Claude Code Session

**You**: "Add input validation to the user registration form"

**Claude Code**:
```
1. PLAN: I'll examine the registration form, identify input fields,
   add appropriate validation, and test the changes.

2. ACT: [Reads src/components/RegistrationForm.tsx]

3. OBSERVE: Form has fields: email, password, confirmPassword, username

4. ACT: [Reads current validation logic if any]

5. OBSERVE: No validation currently exists

6. PLAN: Will add validation for:
   - Email format
   - Password strength
   - Password confirmation match
   - Username length and characters

7. ACT: [Edits RegistrationForm.tsx with validation logic]

8. ACT: [Runs npm test to verify]

9. OBSERVE: Tests pass

10. RESULT: Validation added and tested. Here's what I changed: [summary]
```

### Working Effectively with Claude Code

**Be specific about goals**:
- Not: "Fix the code"
- Yes: "Fix the failing test in user.test.ts"

**Provide context**:
- Mention relevant files
- Explain constraints or preferences
- Note any gotchas

**Monitor progress**:
- Watch what it's doing
- Intervene if it goes off track
- Don't let it run indefinitely

**Review changes**:
- Check diffs before accepting
- Run tests yourself
- Understand what changed

---

## When to Use Agents

Agents shine for certain tasks and struggle with others.

### Agents Excel At

| Task Type | Why Agents Help |
|-----------|-----------------|
| **Multi-file changes** | Can coordinate across files |
| **Iterative tasks** | Test, fix, test, fix loops |
| **Exploration** | Search and navigate codebases |
| **Boilerplate** | Generate standard patterns |
| **Refactoring** | Systematic changes across codebase |

### Agents Struggle With

| Task Type | Why Agents Struggle |
|-----------|---------------------|
| **Ambiguous goals** | Need clear objectives to plan |
| **Novel problems** | May not have patterns to follow |
| **Judgment calls** | Can't assess business/UX decisions |
| **Perfect accuracy** | Still make mistakes; need review |
| **Security-sensitive** | Risks from Module 10 apply |

### Decision Framework

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

---

## Agent Patterns

### Pattern 1: Task → Agent → Review

```
1. You define task clearly
2. Agent executes autonomously
3. You review all changes
4. Accept, reject, or iterate
```

Good for well-understood tasks.

### Pattern 2: Collaborative Iteration

```
1. You define task
2. Agent proposes approach
3. You approve/modify approach
4. Agent implements
5. You review
6. Iterate as needed
```

Good when you want more control.

### Pattern 3: Guided Exploration

```
1. You ask: "What would need to change to add X?"
2. Agent explores and reports
3. You decide approach
4. Agent implements decided approach
```

Good for unfamiliar codebases.

### Pattern 4: Supervised Execution

```
1. Agent proposes each step
2. You approve before execution
3. Agent executes approved step
4. Repeat
```

Good for high-stakes or sensitive changes.

---

## Common Agent Pitfalls

### Pitfall 1: Runaway Agent

Agent keeps working but making things worse:
- **Prevention**: Set reasonable limits; monitor progress
- **Recovery**: Stop, reset, start with clearer goals

### Pitfall 2: Scope Creep

Agent does more than asked:
- **Prevention**: Be specific; constrain what it should touch
- **Recovery**: Review all changes; revert unwanted ones

### Pitfall 3: Confident Errors

Agent completes task but with bugs:
- **Prevention**: Always test; never assume success
- **Recovery**: Thorough testing before accepting

### Pitfall 4: Context Loss

Agent forgets earlier constraints in long sessions:
- **Prevention**: Reiterate important constraints; use fresh sessions
- **Recovery**: Reset with explicit context

---

## Practical Exercises

### Exercise 1: Agent Observation

Use Claude Code (or similar) for a small task:
1. Ask it to create a simple function with tests
2. **Don't** just accept the result
3. Watch each step — what tools does it use?
4. How does it decide what to do next?

### Exercise 2: Goal Refinement

Compare these two task descriptions:

**Vague**: "Improve the code"
**Specific**: "Refactor the `calculateTotal` function in `cart.py` to handle currency conversion, with tests"

Try both with an agent. Compare results.

### Exercise 3: Intervention Practice

1. Give an agent a moderately complex task
2. Let it start working
3. When it makes its first decision you disagree with, stop it
4. Provide correction and let it continue
5. Notice how intervention affects the result

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Agent loop | Goal → Plan → Act → Observe → Reflect → Repeat |
| Tools | Agents act through tools; no tools = no actions |
| Clear goals | Agents need specific objectives to plan effectively |
| Monitor progress | Watch what's happening; intervene when needed |
| Review everything | Never blindly accept agent output |

---

## Connection to What's Next

Now you understand how agents work. Next:

- **Module 12**: Specific developer workflows (Cursor, Copilot, etc.)
- **Module 13**: Vibe engineering in depth — maintaining partnership
- **Module 14**: Iteration patterns for complex projects

---

## Reflection Questions

1. When does an agent's autonomy become a liability? How do you balance efficiency with control?

2. Think of a recent coding task. Would an agent have helped? What would you have needed to specify clearly?

3. "Agents can only use tools they're given." How does this connect to the security concepts from Module 10?

---

*Next module: Developer Workflows — specific tools and how professionals use them.*
