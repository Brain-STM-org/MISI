# Context & Memory

> *"The palest ink is better than the best memory."*
> — Chinese proverb

## Learning Objectives

By the end of this module, you will be able to:

1. **Manage** context effectively in long conversations
2. **Recognize** when context limits affect your work
3. **Apply** strategies to work within context constraints
4. **Understand** the basics of RAG (Retrieval-Augmented Generation)
5. **Design** conversations that maintain useful context over time

---

## The Memory Illusion

Here's something important to understand:

**AI doesn't have memory. It has context.**

When you have a conversation with Claude or ChatGPT, the AI doesn't "remember" earlier messages. Each time it responds, it receives the entire conversation history as input and generates a response based on that.

This is why:
- Long conversations eventually "forget" early content (context limits)
- Starting a new conversation loses everything
- The AI might seem inconsistent over long discussions

Understanding this distinction helps you work with AI more effectively.

---

## Context Windows Revisited

From Module 01, you know context windows have limits:

| Model | Context Window (Late 2025) |
|-------|---------------------------|
| Claude Opus 4.5 | 200,000 tokens |
| GPT-5.2 | 256,000 tokens |
| Gemini 3 Pro | 1,000,000 tokens |

**What fills the context window**:
- System prompt (hidden instructions)
- Full conversation history (all messages)
- Any attached documents/images
- The current response being generated

When the total exceeds the limit, something must give.

---

## What Happens at the Limit

### Truncation Strategies

Different systems handle full contexts differently:

**Drop oldest messages**: Earlier conversation is removed
- You lose context from the beginning
- Recent exchanges are preserved

**Summarization**: Old content is summarized
- You lose detail but keep key points
- Quality depends on summarization

**Error/warning**: System tells you context is full
- You must start fresh or manually reduce

### Signs You're Hitting Limits

| Symptom | Likely Cause |
|---------|--------------|
| AI "forgets" what you discussed earlier | Old messages truncated |
| AI contradicts earlier statements | Lost context |
| AI asks for information you already provided | Information dropped |
| Responses become generic | Lost specific context |
| System explicitly warns about length | Near or at limit |

---

## The "Lost in the Middle" Problem

Even within the context window, attention isn't uniform.

Research shows models attend more strongly to:
- The **beginning** of the context
- The **end** of the context
- And less to the **middle**

### Implications

**Good positions for important information**:
- System prompt (very beginning)
- Most recent messages (end)
- Explicit references: "Remember what I said about X..."

**Risky positions**:
- Middle of a long document
- Early conversation messages (in long chats)
- Buried in large code files

### Mitigation Strategies

1. **Front-load important info**: Put crucial context at the beginning
2. **Reiterate key points**: Remind the AI of important details
3. **Use explicit references**: "Based on the requirements I listed above..."
4. **Chunk large documents**: Break into sections, reference specific parts

---

## Effective Context Management

### Strategy 1: The Context Reset

When conversations get long and confused, start fresh:

```markdown
Let me reset our context. Here's the current state:

**Goal**: [What we're trying to achieve]
**Current status**: [Where we are]
**Key decisions made**: [Important choices]
**Next step**: [What I need help with now]
```

This compresses pages of conversation into focused context.

### Strategy 2: Explicit State Tracking

Maintain explicit state that you can reference:

```markdown
## Current Context

**Project**: Flask REST API for bookstore
**Language**: Python 3.11
**Database**: PostgreSQL with SQLAlchemy
**Current file**: models/book.py
**Current task**: Add validation for ISBN field

---

[Your actual question here]
```

The AI can reference this context even if earlier messages are lost.

### Strategy 3: Document Chunking

For large documents, don't paste everything at once:

**Instead of**: Pasting a 50-page document

**Try**:
```markdown
I have a large document about X. I'll share relevant sections as needed.

Here's the section about [specific topic]:
[relevant excerpt]

My question about this section: ...
```

Share what's relevant to the current question.

### Strategy 4: Summary Checkpoints

Periodically summarize progress:

```markdown
Let's checkpoint our progress:

We've completed:
1. Set up the database schema
2. Created the User model
3. Added authentication endpoints

We still need to:
1. Add the Book model
2. Create CRUD endpoints for books
3. Add search functionality

Continuing with the Book model...
```

This creates recovery points in the conversation.

---

## RAG: Retrieval-Augmented Generation

### What Is RAG?

**RAG** = Retrieval-Augmented Generation

Instead of relying only on what's in the context window, RAG systems:
1. **Store** large amounts of information in a searchable database
2. **Retrieve** relevant pieces when needed
3. **Augment** the AI's context with retrieved information
4. **Generate** responses using both the query and retrieved context

### Why RAG Matters

Context windows are large but finite. RAG enables working with:
- Entire codebases
- Documentation libraries
- Knowledge bases
- Historical conversation data

### RAG in Practice

**Tools you might encounter**:
- Claude Code's codebase awareness
- Cursor's indexing feature
- Custom knowledge bases
- Vector databases (Pinecone, Chroma, etc.)

**How it works conceptually**:
```
Your question: "How does the auth system work?"
          ↓
[Search relevant files/docs]
          ↓
[Retrieve: auth.py, middleware.py, AUTH_DOCS.md]
          ↓
[Add to context]
          ↓
AI generates answer using retrieved context
```

### RAG Limitations

- Retrieved content may not be what's actually needed
- Quality depends on search/retrieval system
- Still subject to context limits (retrieved + question must fit)
- You may not see what was retrieved (hidden process)

For this program, you'll primarily use RAG implicitly through tools like Claude Code. Deep RAG implementation is beyond our scope.

---

## Conversation Design Patterns

### Pattern 1: Single-Topic Focus

Keep each conversation focused on one topic:

- **New feature** → New conversation
- **Different bug** → New conversation
- **Unrelated question** → New conversation

This prevents context pollution and confusion.

### Pattern 2: The Working Document

Maintain a document that tracks state:

```markdown
# Project: Todo App

## Decisions Made
- Using React + TypeScript
- Zustand for state management
- Tailwind for styling

## Current Implementation
[Status of each component]

## Open Questions
[Things still to decide]
```

Paste this at the start of relevant conversations.

### Pattern 3: Explicit Handoff

When continuing work in a new conversation:

```markdown
I was working with you (in a different conversation) on X.
Here's where we left off:

[Summary of progress]
[Current state]
[Code/context as needed]

I want to continue by doing Y.
```

The AI doesn't remember, but you provide the context it needs.

---

## Tools and Techniques

### Using Claude Code's Context

Claude Code automatically:
- Indexes your codebase
- Retrieves relevant files
- Maintains session context

You can help by:
- Using clear file names and structure
- Writing good comments and docstrings
- Using `@file` references when relevant

### Manual Context Management

When not using specialized tools:

```markdown
## Context Files

**Main file** (app.py):
```python
[code]
```

**Config** (config.py):
```python
[code]
```

My question: ...
```

Explicitly provide what the AI needs.

---

## Practical Exercises

### Exercise 1: Context Limit Exploration

1. Start a long conversation (ask many questions)
2. After 10-15 exchanges, ask about something from the very beginning
3. Does the AI remember? What happens?

### Exercise 2: Reset Practice

1. Have a conversation that gets confusing or off-track
2. Write a "context reset" summary
3. Start fresh with that summary
4. Compare the quality of responses

### Exercise 3: Chunking Practice

1. Find a long document (code file, article, etc.)
2. Try pasting it all at once and asking a question
3. Try extracting just the relevant section and asking the same question
4. Compare responses

### Exercise 4: Working Document

1. Create a "project context" document for something you're working on
2. Use it to start three different conversations about the same project
3. Notice how the explicit context helps

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Context, not memory | AI re-reads the whole conversation each time |
| Lost in the middle | Important info at beginning or end |
| Context resets | Summarize and restart when conversations drift |
| Explicit state | Maintain a context document for complex projects |
| Chunking | Share relevant pieces, not everything |
| RAG awareness | Tools may retrieve context automatically |

---

## Connection to What's Next

Context management becomes critical in:

- **Module 10 (Tier 3)**: Security — context can contain sensitive info
- **Module 11**: Agentic loops — agents need to maintain state across many steps
- **Module 14**: Iterating with AI — long projects require context strategies

You've completed Tier 2: Practical Skills. Tier 3 covers agentic development.

---

## Reflection Questions

1. Have you ever had a conversation with AI where it seemed to "forget" something important? Now that you understand context limits, what actually happened?

2. How would you design a system to help AI remember information across multiple conversations? What trade-offs would that involve?

3. "The AI doesn't have memory. It has context." How does this change how you think about AI conversations?

---

## Tier 2 Complete

You now have practical skills for working with AI:
- Reading and verifying AI code
- Crafting effective prompts
- Using multiple modalities
- Leveraging reasoning capabilities
- Managing context and memory

**Next**: Tier 3 — Agentic Development, where AI becomes more than a chat partner.

---

*Next module: Prompt Injection & AI Security — essential knowledge before using AI agents.*
