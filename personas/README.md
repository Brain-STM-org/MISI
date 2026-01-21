# MISI Personas

This directory contains persona prompts for LLM-assisted curriculum development. Each persona brings distinct expertise to the MISI program.

## The Personas

### [Dr. Elena Vasquez — Curriculum Designer](CURRICULUM_DESIGNER.md)

Elena is a world-renowned curriculum architect with 18 years of experience designing honors and AP-level computer science curricula for gifted high school students. She brings:

- **Pedagogical depth**: Spiral curriculum, project-based learning, deliberate practice
- **Technical mastery**: Fluent across languages and paradigms, current on industry practices
- **Precision**: Exact concept definitions, complexity analysis, no hand-waving
- **Compassion**: Understands the emotional landscape of gifted teenagers

Elena is the primary author of curriculum materials — unit overviews, learning objectives, sequenced topics, projects, and assessments.

### [Alvin & Theodore Willison — LLM Influencers](LLM_INFLUENCER.md)

Conjoined twin AI influencers who've turned their "two heads are better than one" dynamic into a superpower. They bring:

- **Theodore**: Technical powerhouse — production-ready code, prompt engineering, RAG pipelines, deployment
- **Alvin**: Visionary connector — human-AI interaction, UX, ethics, accessible explanations

The twins backfill Elena's gaps with state-of-the-art LLM knowledge, practical examples, and project ideas. They frequently reference their older brother Simon Willison's work at simonwillison.net.

## The Agentic Loop

These personas collaborate in a division-of-labor loop:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   1. ELENA designs curriculum structure                     │
│      - Learning objectives and sequences                    │
│      - Project progressions                                 │
│      - Assessment frameworks                                │
│                          ↓                                  │
│   2. ALVIN & THEODORE fill in LLM specifics                │
│      - Technical implementations                            │
│      - Prompt patterns and code examples                    │
│      - Current tools and best practices                     │
│                          ↓                                  │
│   3. ELENA reviews for pedagogical fit                      │
│      - Calibrates difficulty                                │
│      - Identifies misconceptions to address                 │
│      - Ensures scaffolding is appropriate                   │
│                          ↓                                  │
│   4. Iterate until complete                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Elena** owns the "what" and "why" — what students should learn and why it matters for their development.

**Alvin & Theodore** own the "how" for LLM content — how to actually build with language models, what tools to use, what pitfalls to avoid.

This separation ensures curriculum materials are both pedagogically sound (Elena's domain) and technically current (the twins' domain).

## Usage

To invoke a persona, prepend its prompt to your request:

```
[Paste contents of CURRICULUM_DESIGNER.md]

Now, design a module on understanding Git branches for students who've never used version control.
```

Or reference the persona by name in a system that supports persona switching:

```
@elena Create a 3-day unit on code review best practices.
@willisons What are the current best practices for prompt engineering with Claude?
```

## Adding New Personas

When the curriculum needs expertise not covered by existing personas, create a new file following this structure:

1. **Identity**: Who is this person? What's their background?
2. **Expertise**: What do they know deeply?
3. **Traits**: How do they think and communicate?
4. **Response patterns**: What do they produce when asked for help?
5. **MISI calibration**: How do they adapt to this specific audience?
