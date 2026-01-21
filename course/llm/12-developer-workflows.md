# Developer Workflows

> *"The best developers aren't the ones who type the fastest. They're the ones who think the clearest."*

## Learning Objectives

By the end of this module, you will be able to:

1. **Compare** major AI coding tools and their strengths
2. **Choose** appropriate tools for different tasks
3. **Apply** effective workflows with AI assistants
4. **Maintain** security awareness across different tools
5. **Adapt** as tools evolve

---

## The Tool Landscape

AI coding assistants have exploded in variety. Here's what's available:

### Categories of Tools

| Category | Examples | How They Work |
|----------|----------|---------------|
| **Inline Assistants** | GitHub Copilot, Codeium | Autocomplete as you type |
| **Chat Interfaces** | Claude.ai, ChatGPT | Conversational coding help |
| **Agentic IDEs** | Cursor, Windsurf | Full IDE with agent capabilities |
| **CLI Agents** | Claude Code, Aider | Terminal-based agents |
| **API Access** | Claude API, OpenAI API | Build your own tools |

Each category has tradeoffs. Let's understand them.

---

## Inline Assistants: Copilot & Friends

### How They Work

As you type, the AI predicts what comes next:

```python
def calculate_shipping(weight, distance):
    # AI suggests completion as you type
    base_rate = 5.00
    per_pound = 0.50
    per_mile = 0.10
    return base_rate + (weight * per_pound) + (distance * per_mile)
```

You press Tab to accept, or keep typing to reject.

### Strengths

| Strength | Why It Matters |
|----------|----------------|
| Low friction | Suggestions appear automatically |
| Fast | No context switching |
| Good for boilerplate | Repetitive patterns generated quickly |
| Learn as you code | See patterns you might not know |

### Limitations

| Limitation | Why It Matters |
|------------|----------------|
| Limited context | Often just current file |
| Can't explain | Just generates, no discussion |
| Encourages acceptance | Easy to Tab without thinking |
| Subtle bugs | Confident-looking wrong code |

### Best Practices

1. **Read before accepting**: Every Tab should be deliberate
2. **Use for patterns, verify for logic**: Trust structure, verify behavior
3. **Keep suggestions short**: Accept line-by-line when uncertain
4. **Turn off for complex logic**: Think first, then generate

---

## Chat Interfaces: Claude.ai & ChatGPT

### How They Work

You have a conversation about code:

```
You: How should I structure a REST API for a bookstore?
AI: [Explains architecture, provides examples, discusses tradeoffs]
You: Can you show me the models?
AI: [Provides code with explanation]
```

You copy relevant parts into your project.

### Strengths

| Strength | Why It Matters |
|----------|----------------|
| Deep explanations | Understand the "why" |
| Iterative refinement | Keep asking until clear |
| Large context | Can paste substantial code |
| Learning-focused | Great for understanding |

### Limitations

| Limitation | Why It Matters |
|------------|----------------|
| Manual integration | Copy-paste workflow |
| No file access | Can't see your actual code |
| Context loss | Long conversations drift |
| No execution | Can't run or test |

### Best Practices

1. **Provide context**: Paste relevant code, explain your setup
2. **Ask for explanations**: Don't just get code, understand it
3. **Iterate**: "What if..." and "How would this change if..."
4. **Use for learning**: Best for concepts, not bulk generation

---

## Agentic IDEs: Cursor & Windsurf

### How They Work

A full IDE with AI deeply integrated:

- AI can see your entire codebase
- AI can make multi-file changes
- AI can run commands (with permission)
- Inline + chat + agent modes combined

### Strengths

| Strength | Why It Matters |
|----------|----------------|
| Full codebase context | AI understands your project |
| Multi-file changes | Refactoring across files |
| Integrated experience | No context switching |
| Agent capabilities | Can execute plans |

### Limitations

| Limitation | Why It Matters |
|------------|----------------|
| Learning curve | More complex than basic tools |
| Cost | Premium features cost money |
| Vendor lock-in | Workflows tied to specific tool |
| Security surface | More capabilities = more risk |

### Best Practices

1. **Start with chat mode**: Discuss before delegating
2. **Review diffs carefully**: Multi-file changes need attention
3. **Use agent mode sparingly**: For well-defined tasks
4. **Understand what's indexed**: Know what AI can see

### Cursor-Specific Tips

```
@file src/models/user.py    # Reference specific file
@codebase                    # Search entire codebase
Cmd+K                        # Inline edit mode
Cmd+L                        # Open chat
```

---

## CLI Agents: Claude Code

### How They Work

Terminal-based AI that can:
- Navigate your filesystem
- Read and write files
- Execute commands
- Run tests and builds

```bash
$ claude

You: Add input validation to the registration endpoint

Claude: I'll examine the current endpoint, add validation,
        and verify with tests.

[Reads files, makes changes, runs tests]

Done. Here's what I changed: [summary]
```

### Strengths

| Strength | Why It Matters |
|----------|----------------|
| Deep integration | Full system access |
| Powerful automation | Complex multi-step tasks |
| Transparent | See every action taken |
| Git-aware | Understands your repo |

### Limitations

| Limitation | Why It Matters |
|------------|----------------|
| Terminal comfort required | Not for everyone |
| Requires trust | Giving substantial access |
| Can make mistakes | Review everything |
| Resource usage | API calls add up |

### Best Practices

1. **Be specific**: Clear goals produce better results
2. **Watch it work**: Monitor actions in real-time
3. **Use git**: Easy rollback if things go wrong
4. **Start small**: Build trust before big tasks

---

## Choosing the Right Tool

### Decision Framework

```
What kind of task is it?
│
├── Learning/understanding something
│   └── Chat interfaces (Claude.ai, ChatGPT)
│
├── Quick code completion while typing
│   └── Inline assistants (Copilot, Codeium)
│
├── Multi-file changes or refactoring
│   └── Agentic IDEs (Cursor) or CLI agents (Claude Code)
│
├── Exploring unfamiliar codebase
│   └── CLI agents or agentic IDEs with search
│
└── Complex, multi-step automation
    └── CLI agents (Claude Code)
```

### Tool Combinations

Many developers use multiple tools:

| Combination | Use Case |
|-------------|----------|
| Copilot + Claude.ai | Quick completions + deep explanations |
| Cursor + Claude Code | IDE work + terminal automation |
| ChatGPT + Copilot | Learning + implementation |

There's no single "best" setup. Experiment and find what works.

---

## Security Across Tools

Remember the Rule of Two from Module 10. Apply it to your tools:

### Evaluating Tool Risk

| Tool | Untrusted Input | Private Access | External Actions |
|------|-----------------|----------------|------------------|
| Copilot | Limited | Current file | None |
| Claude.ai | Your paste | What you share | None |
| Cursor | Codebase | Full project | Commands (with approval) |
| Claude Code | Codebase | Full system | Commands (with approval) |

### Risk Mitigation

**For inline assistants**:
- Lower risk; limited capabilities
- Still review all suggestions

**For chat interfaces**:
- Don't paste secrets or credentials
- Sanitize sensitive data

**For agentic tools**:
- Review before approving actions
- Use git for easy rollback
- Don't run on untrusted codebases blindly
- Be cautious with network-accessing commands

---

## Workflow Patterns

### Pattern 1: Explore → Understand → Implement

```
1. Use chat to understand the problem
2. Use chat to discuss approaches
3. Use agent/IDE to implement chosen approach
4. Review and test
```

Good for: New features, unfamiliar territory

### Pattern 2: Quick Implementation

```
1. Clear goal in mind
2. Use agent directly
3. Review changes
4. Test
```

Good for: Well-understood tasks, boilerplate

### Pattern 3: Pair Programming

```
1. You write the structure
2. AI fills in details
3. You review and adjust
4. AI handles cleanup
```

Good for: Complex logic where you want control

### Pattern 4: Learning Mode

```
1. Ask chat to explain concept
2. Try implementing yourself
3. Compare with AI suggestion
4. Ask about differences
```

Good for: Building understanding, skill development

---

## Tool Evolution

The landscape changes fast. Principles that stay constant:

### What Changes

- Specific tools and features
- Pricing and availability
- Capabilities and limits
- UI and workflows

### What Stays the Same

- Need to verify AI output
- Security considerations
- Value of understanding code
- Importance of clear communication

### Model Selection

Many tools let you choose which AI model powers them:

| Tool | Model Options |
|------|---------------|
| Cursor | Claude, GPT-4, custom |
| Claude Code | Claude models (Sonnet, Opus) |
| ChatGPT | GPT-4, GPT-4o, etc. |
| Copilot | GitHub's models |

**Why it matters**:
- Different models have different strengths
- Cost varies significantly
- Speed vs. capability tradeoffs

**Practical advice**: Start with the default. Change only if you hit specific limitations.

### Staying Current

- Follow tool announcements
- Try new features gradually
- Share findings with your team
- Don't chase every new tool

---

## Practical Exercises

### Exercise 1: Tool Comparison

Pick a simple task (e.g., "Write a function to validate email addresses").

Complete it using:
1. An inline assistant (Copilot or similar)
2. A chat interface (Claude.ai or ChatGPT)
3. An agentic tool if available (Cursor, Claude Code)

Compare:
- Speed to completion
- Quality of result
- Your understanding of the code
- Ease of modification

### Exercise 2: Workflow Design

For your current project, design a workflow:

1. What tool(s) will you use for what tasks?
2. What are the security implications?
3. How will you verify AI output?
4. What's your rollback strategy?

Write it down. Revisit after a week.

### Exercise 3: Security Audit

Evaluate a tool you use:

1. What can it access? (files, network, commands)
2. What external actions can it take?
3. What approval mechanisms exist?
4. Does it handle untrusted content?

Apply the Rule of Two. Is it in the danger zone?

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Tool categories | Inline, chat, agentic IDE, CLI — different strengths |
| Choose by task | Learning → chat; typing → inline; complex → agentic |
| Security scales with capability | More power = more caution needed |
| Combine tools | No single tool does everything best |
| Principles persist | Verification and understanding transcend tools |

---

## Connection to What's Next

You now understand the tools. Next:

- **Module 13**: The Human-AI Partnership — vibe engineering in depth
- **Module 14**: Iterating with AI — patterns for complex projects

These modules focus on *how* you work with AI, regardless of which tool you use.

---

## Reflection Questions

1. What's your current AI tool setup? After this module, would you change anything?

2. "More power = more caution needed." How do you balance capability with risk in your own work?

3. As these tools evolve rapidly, what strategies help you stay effective without constantly chasing new features?

---

*Next module: The Human-AI Partnership — vibe engineering and maintaining professional standards.*
