# What is Source Code?

> *"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination."*
> — Fred Brooks, *The Mythical Man-Month*

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** why software is stored as plain text files
2. **Distinguish** between source code and running software
3. **Articulate** why "source" matters — the original vs. the copy
4. **Recognize** code as a communication medium for humans, not just machines
5. **Connect** these concepts to your workflow with AI coding assistants

---

## The Surprising Truth

Here's something that surprises most people when they first encounter it:

**All software — every app, game, website, and operating system — starts as ordinary text files.**

Not special binary files. Not encrypted containers. Plain text. The kind you could open in Notepad or TextEdit and read with your eyes.

That billion-dollar app on your phone? Somewhere, there's a folder full of text files that describe exactly what it does. Every feature. Every button. Every calculation.

This is source code.

---

## Why Plain Text?

You might wonder: why text? Wouldn't some special format be more efficient?

Plain text persists because it solves fundamental problems:

### 1. Human Readability

Code is written to be read by humans first, machines second. When you or your AI assistant generates code, someone (often future-you) needs to understand it later. Text is universally readable — no special software required.

```python
# Calculate the average of a list of numbers
def average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)
```

You can read this. You might not know Python, but you can *see* what's happening. That's not an accident — it's a design goal.

### 2. Diffability

Plain text can be compared line-by-line. This matters enormously:

- When your AI assistant modifies code, you can see *exactly* what changed
- When teammates make changes, you can review them precisely
- When something breaks, you can trace back through history

We'll explore diffs deeply in the next module. For now, understand: diffability is why plain text won.

### 3. Tool Universality

Every programming language, every operating system, every editor, every version control system understands text files. This universality means:

- Your code works everywhere
- Tools compose together (the output of one becomes input to another)
- No vendor lock-in — you're not trapped by proprietary formats

### 4. LLM Compatibility

Large Language Models — the AI assistants you'll work with — are *text* models. They read text, generate text, reason about text. Source code being plain text means AI can:

- Read your existing code
- Generate new code
- Explain what code does
- Suggest modifications

This isn't a coincidence. It's convergent design: the same properties that make code good for human collaboration make it good for human-AI collaboration.

---

## The Transformation: Text → Running Software

Source code doesn't *do* anything by itself. It's inert — just characters in a file.

Something must transform those instructions into action. This happens in two main ways:

### Compilation

Some languages (C, C++, Rust, Go) use a **compiler** — a program that reads your source code and produces a separate executable file. That executable contains machine instructions your processor can run directly.

```
Source Code (.c file)  →  Compiler  →  Executable (.exe or binary)
     [text]                              [machine code]
```

Once compiled, the executable runs without the source code. You could delete the original text files and the program still works.

### Interpretation

Other languages (Python, JavaScript, Ruby) use an **interpreter** — a program that reads your source code and executes it directly, line by line.

```
Source Code (.py file)  →  Interpreter  →  [runs immediately]
     [text]                  (Python)
```

The source code must be present to run. The interpreter translates on the fly.

### Why This Matters to You

You won't usually care whether code is compiled or interpreted. What matters is understanding:

1. **Source code is the recipe, not the meal.** The text describes what to do; execution makes it happen.
2. **AI assistants generate source code.** They produce text. That text must then be run.
3. **Errors appear at transformation time.** When something goes wrong, you'll see messages about specific lines in your text files.

---

## Why "Source" Matters

The word "source" is significant. Source code is the *origin* — the authoritative version from which everything else flows.

Consider what happens without source code:

- **You can't understand how something works.** The compiled executable is opaque — just ones and zeros.
- **You can't modify it.** To change behavior, you need the original text.
- **You can't verify it.** Without source, you're trusting blindly.

This is why:

- **Open source** software publishes its source code for anyone to inspect
- **Companies guard source code** as intellectual property
- **Version control** tracks every change to source files
- **Code review** examines source before changes are accepted

When you work with AI-generated code, you're working with source. You can read it. Question it. Modify it. That's power — and responsibility.

---

## Code as Communication

Here's a perspective shift that separates novices from professionals:

**Code is primarily a communication medium between humans.**

Yes, computers execute it. But computers don't care about clarity, naming, organization, or elegance. They'll run ugly code just as happily as beautiful code.

*Humans* care. Future-you cares. Your teammates care. Your mentors care.

Consider these two versions of the same logic:

**Version A:**
```python
def f(x):
    return x*x if x>0 else 0
```

**Version B:**
```python
def calculate_squared_if_positive(value):
    """Returns the square of the value if positive, otherwise zero."""
    if value > 0:
        return value * value
    else:
        return 0
```

A computer runs both identically. But Version B *communicates*:
- The function name explains its purpose
- The docstring provides context
- The structure makes logic visible
- A reader (human or AI) understands intent

When you review AI-generated code, ask: "Would a human understand this six months from now?" If not, it needs improvement — regardless of whether it "works."

---

## Practical Exercise: Seeing Source Code

Let's ground this in reality.

### Exercise 1: Inspect a Text File

1. Find any `.py`, `.js`, `.html`, or `.css` file on your computer (or ask your AI assistant to create one)
2. Open it with a basic text editor (Notepad, TextEdit, VS Code)
3. Observe: it's just text. Characters. Lines. Nothing magical.

### Exercise 2: The Web is Source Code

1. Open any website in your browser
2. Right-click and select "View Page Source" (or press Ctrl+U / Cmd+Option+U)
3. You're looking at HTML source code — the text that becomes the visual page
4. Notice: you can read it. It's not hidden or encrypted.

### Exercise 3: AI-Generated Code

1. Ask an AI assistant: "Write a Python function that checks if a word is a palindrome"
2. Look at what it produces — it's text
3. Ask it to explain the code — it will reference specific lines and structures
4. Ask it to modify the code — watch how it produces new text

---

## Key Insights

| Concept | Implication for Your Work |
|---------|---------------------------|
| Code is plain text | You can read, edit, and understand what AI generates |
| Text enables diffs | You can see exactly what changed between versions |
| Source is authoritative | Protect it, track it, review it carefully |
| Code communicates to humans | Clarity matters as much as correctness |
| Transformation creates execution | Errors will reference your source files |

---

## Connection to What's Next

Understanding that code is text unlocks everything that follows:

- **Diffs** show text changes between versions
- **Version control** tracks text file history
- **Pull requests** review text modifications
- **AI assistants** generate and explain text

You don't need to write code fluently to work with software. You need to *read* it, *reason* about it, and *communicate* about it effectively. That starts with understanding what you're looking at.

---

## Reflection Questions

1. Why might a company keep its source code secret while distributing the compiled application freely?

2. If an AI generates code that works but is difficult to read, is that acceptable? When might it be? When not?

3. "Source code is the recipe, not the meal." What breaks down in this analogy? (Hint: think about who follows the recipe.)

---

## Further Reading (Optional)

- [The Cathedral and the Bazaar](http://www.catb.org/~esr/writings/cathedral-bazaar/) — Eric S. Raymond's influential essay on open source
- [Code is Communication](https://www.martinfowler.com/bliki/CodeAsDocumentation.html) — Martin Fowler on writing code for humans

---

*Next module: Understanding Diffs — seeing exactly what changed, and why it matters for everything you'll do.*
