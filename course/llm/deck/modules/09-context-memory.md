---
theme: default
title: "Module 09: Context & Memory"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 09: Context & Memory
drawings:
  persist: false
transition: slide-left
---

# Module 09

## Context & Memory

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Managing long conversations and large contexts.
Context limits, RAG basics, conversation design.

Estimated time: 25 minutes
Delivery: Day 2 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Practical context management strategies, conversation design patterns
- Willisons: Lost-in-middle research, RAG systems, real-world context tools
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The palest ink is better than the best memory."
</div>

<div class="mt-4 text-gray-500">
— Chinese proverb
</div>

<!--
AI doesn't have memory — you need to provide the context.
-->

---

# The Memory Illusion

Here's something important to understand:

<v-click>

**AI doesn't have memory. It has context.**

</v-click>

<v-click>

Each time the AI responds, it receives the entire conversation history as input and generates based on that.

</v-click>

<v-click>

This is why:
- Long conversations "forget" early content
- New conversations start fresh
- AI seems inconsistent over long discussions

</v-click>

<!--
The key distinction: context vs memory.
-->

---
layout: section
---

# Context Windows Revisited

Working within limits

---

# Context Window Sizes (Late 2025)

| Model | Context Window |
|-------|----------------|
| Claude Opus 4.5 | 200,000 tokens |
| GPT-5.2 | 256,000 tokens |
| Gemini 3 Pro | 1,000,000 tokens |

<v-click>

**What fills the context window**:
- System prompt (hidden instructions)
- Full conversation history
- Attached documents/images
- The response being generated

</v-click>

<!--
Context window sizes and what fills them.
-->

---

# What Happens at the Limit

When context exceeds the limit:

<v-clicks>

**Drop oldest**: Earlier conversation removed (lose beginning)

**Summarization**: Old content condensed (lose detail)

**Error/warning**: System requires you to start fresh

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
You don't always get a warning — the AI just starts "forgetting."
</div>

</v-click>

<!--
What happens at context limits.
-->

---

# Signs You're Hitting Limits

| Symptom | Likely Cause |
|---------|--------------|
| AI "forgets" earlier discussion | Old messages truncated |
| AI contradicts earlier statements | Lost context |
| AI asks for info you provided | Information dropped |
| Responses become generic | Lost specific context |
| System warns about length | Near or at limit |

<!--
Symptoms of context limit issues.
-->

---
layout: section
---

# The Lost-in-the-Middle Problem

Attention isn't uniform

---

# Where AI Pays Attention

Even within the context window, attention isn't uniform:

<v-click>

```
┌─────────────────────────────────────────────────────┐
│  Beginning     ←── High attention                   │
│  ...                                                │
│  Middle        ←── Lower attention (lost!)          │
│  ...                                                │
│  End           ←── High attention                   │
└─────────────────────────────────────────────────────┘
```

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Research confirms this — models attend more to beginning and end.
</div>

</v-click>

<!--
Lost in the middle phenomenon.
-->

---

# Lost-in-Middle Implications

**Good positions for important info**:
- System prompt (very beginning)
- Most recent messages (end)
- Explicit references: "Remember what I said about X..."

<v-click>

**Risky positions**:
- Middle of a long document
- Early conversation messages (in long chats)
- Buried in large code files

</v-click>

<!--
Where to put important information.
-->

---
layout: section
---

# Context Management Strategies

Working effectively within limits

---

# Strategy 1: The Context Reset

When conversations get long and confused, start fresh:

```markdown
Let me reset our context. Here's the current state:

**Goal**: [What we're trying to achieve]
**Current status**: [Where we are]
**Key decisions made**: [Important choices]
**Next step**: [What I need help with now]
```

<v-click>

<div class="mt-4 text-gray-400">
This compresses pages of conversation into focused context.
</div>

</v-click>

<!--
Context reset strategy.
-->

---

# Strategy 2: Explicit State Tracking

Maintain explicit state you can reference:

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

<v-click>

<div class="mt-4 text-gray-400">
The AI can reference this context even if earlier messages are lost.
</div>

</v-click>

<!--
Explicit state tracking strategy.
-->

---

# Strategy 3: Document Chunking

For large documents, don't paste everything at once:

<v-click>

**Instead of**: Pasting a 50-page document

</v-click>

<v-click>

**Try**:
```markdown
I have a large document about X. I'll share relevant sections as needed.

Here's the section about [specific topic]:
[relevant excerpt]

My question about this section: ...
```

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
Share what's relevant to the current question.
</div>

</v-click>

<!--
Document chunking strategy.
-->

---

# Strategy 4: Summary Checkpoints

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

Continuing with the Book model...
```

<v-click>

<div class="mt-4 text-gray-400">
Creates recovery points in the conversation.
</div>

</v-click>

<!--
Summary checkpoints strategy.
-->

---
layout: section
---

# RAG: Retrieval-Augmented Generation

Working with more than fits in context

---

# What Is RAG?

**RAG** = Retrieval-Augmented Generation

<v-clicks>

Instead of relying only on the context window:

1. **Store** large amounts of information in a searchable database
2. **Retrieve** relevant pieces when needed
3. **Augment** the AI's context with retrieved information
4. **Generate** responses using query + retrieved context

</v-clicks>

<!--
RAG definition.
-->

---

# RAG Conceptually

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

<v-click>

<div class="mt-4 text-gray-400">
RAG lets AI work with codebases, doc libraries, and knowledge bases too large for one context.
</div>

</v-click>

<!--
RAG conceptual flow.
-->

---

# RAG in Practice

**Tools you might encounter**:

<v-clicks>

- Claude Code's codebase awareness
- Cursor's indexing feature
- Custom knowledge bases
- Vector databases (Pinecone, Chroma, etc.)

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
For this program, you'll use RAG implicitly through tools like Claude Code. Deep RAG implementation is beyond our scope.
</div>

</v-click>

<!--
RAG tools in practice.
-->

---

# RAG Limitations

<v-clicks>

- Retrieved content may not be what's actually needed
- Quality depends on search/retrieval system
- Still subject to context limits (retrieved + question must fit)
- You may not see what was retrieved (hidden process)

</v-clicks>

<!--
RAG limitations.
-->

---
layout: section
---

# Conversation Design Patterns

Structuring for success

---

# Pattern 1: Single-Topic Focus

Keep each conversation focused on one topic:

<v-clicks>

- **New feature** → New conversation
- **Different bug** → New conversation
- **Unrelated question** → New conversation

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
This prevents context pollution and confusion.
</div>

</v-click>

<!--
Single-topic focus pattern.
-->

---

# Pattern 2: The Working Document

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

<v-click>

<div class="mt-4 text-gray-400">
Paste this at the start of relevant conversations.
</div>

</v-click>

<!--
Working document pattern.
-->

---

# Pattern 3: Explicit Handoff

When continuing work in a new conversation:

```markdown
I was working with you (in a different conversation) on X.
Here's where we left off:

[Summary of progress]
[Current state]
[Code/context as needed]

I want to continue by doing Y.
```

<v-click>

<div class="mt-4 text-gray-400">
The AI doesn't remember, but you provide the context it needs.
</div>

</v-click>

<!--
Explicit handoff pattern.
-->

---

# Exercise: Context Limit Exploration

1. Start a long conversation (ask many questions)
2. After 10-15 exchanges, ask about something from the beginning
3. Does the AI remember? What happens?

<v-click>

<div class="mt-4 text-gray-400">
Understanding context limits through direct experience.
</div>

</v-click>

<!--
Exercise: context limits.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Context, not memory | AI re-reads the whole conversation each time |
| Lost in the middle | Important info at beginning or end |
| Context resets | Summarize and restart when conversations drift |
| Explicit state | Maintain a context document for complex projects |
| Chunking | Share relevant pieces, not everything |
| RAG awareness | Tools may retrieve context automatically |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Have you had a conversation with AI where it seemed to "forget" something? Now that you understand context limits, what actually happened?

2. How would you design a system to help AI remember across conversations? What trade-offs would that involve?

3. "The AI doesn't have memory. It has context." How does this change how you think about AI conversations?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 09 Complete

**Tier 2 Complete!** You now have practical skills for working with AI.

<div class="mt-8 text-xl text-gray-400">
Next: Module 10 — Prompt Injection & AI Security
</div>

<div class="mt-8">
  <a href="./10/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 10 →
  </a>
</div>

<!--
Tier 2 complete.
Module 10 begins Tier 3: Agentic Development.
-->
