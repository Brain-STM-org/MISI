---
theme: default
title: "Module 01: What is Source Code?"
info: |
  SWE Fundamentals - MISI
  Module 01: What is Source Code?
drawings:
  persist: false
transition: slide-left
---

# Module 01

## What is Source Code?

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
This module establishes a fundamental truth that surprises many newcomers:
all software is just text files.

Understanding this unlocks everything that follows — diffs, version control,
code review, and AI-assisted development all rely on code being plain text.

Estimated time: 20 minutes
Delivery: Day 1 Bootcamp
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination."
</div>

<div class="mt-4 text-gray-500">
— Fred Brooks, <em>The Mythical Man-Month</em>
</div>

<!--
Fred Brooks wrote this in 1975, and it remains true today.
Software is uniquely malleable — pure ideas made tangible.
This quote sets the tone: code is creative, human work.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** why software is stored as plain text files
2. **Distinguish** between source code and running software
3. **Articulate** why "source" matters — the original vs. the copy
4. **Recognize** code as a communication medium for humans, not just machines
5. **Connect** these concepts to your workflow with AI coding assistants

</v-clicks>

<!--
These objectives build toward a key insight: code is primarily for human communication.
The AI connection in objective 5 is critical — LLMs work with text, and so does code.
-->

---
layout: section
---

# The Surprising Truth

What software really is

---

# All Software is Text

Here's something that surprises most people:

<v-clicks>

**All software — every app, game, website, and operating system — starts as ordinary text files.**

- Not special binary files
- Not encrypted containers
- Plain text you could open in Notepad

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded text-lg">
That billion-dollar app on your phone? Somewhere, there's a folder full of text files that describe exactly what it does.
</div>

</v-click>

<!--
This is genuinely surprising to most newcomers.
They expect software to be mysterious, encrypted, special.

The reality is more powerful: it's readable, understandable, and changeable.
This demystifies software and empowers students to engage with it.
-->

---
layout: section
---

# Why Plain Text?

The four reasons text won

---

# 1. Human Readability

Code is written to be read by humans first, machines second.

```python
# Calculate the average of a list of numbers
def average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)
```

<v-click>

You can read this. You might not know Python, but you can *see* what's happening.

**That's not an accident — it's a design goal.**

</v-click>

<!--
Walk through the code briefly:
- The comment explains intent
- The function name is descriptive
- The logic follows naturally

Even non-programmers can get the gist. This readability is why
AI assistants can explain code to you — there's meaning to extract.
-->

---

# 2. Diffability

Plain text can be compared line-by-line.

<v-clicks>

This matters enormously:

- When your AI assistant modifies code, you can see *exactly* what changed
- When teammates make changes, you can review them precisely
- When something breaks, you can trace back through history

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">
We'll explore diffs deeply in Module 03. For now: <strong>diffability is why plain text won.</strong>
</div>

</v-click>

<!--
Diffability is arguably the most important property.
Without it, version control wouldn't work, code review wouldn't work,
and understanding AI changes would be nearly impossible.

This is a teaser for Module 03 (Understanding Diffs).
-->

---

# 3. Tool Universality

Every programming language, every OS, every editor understands text files.

<v-clicks>

- Your code works everywhere
- Tools compose together (output of one → input of another)
- No vendor lock-in — you're not trapped by proprietary formats

</v-clicks>

<v-click>

<div class="mt-8 text-gray-400">
Unix philosophy: do one thing well, compose with others via text.
</div>

</v-click>

<!--
This universality is why developers can switch between editors,
operating systems, and languages without losing their work.

The Unix philosophy mention is optional depth — can skip if time is short.
-->

---

# 4. LLM Compatibility

Large Language Models are *text* models. They read text, generate text, reason about text.

<v-clicks>

Source code being plain text means AI can:

- Read your existing code
- Generate new code
- Explain what code does
- Suggest modifications

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">
This isn't a coincidence. The same properties that make code good for <strong>human collaboration</strong> make it good for <strong>human-AI collaboration</strong>.
</div>

</v-click>

<!--
This connection to LLMs is important for MISI students.
The LLM track will build on this insight.

Convergent design: code evolved for human communication,
and LLMs are designed to communicate with humans.
Both benefit from plain text.
-->

---
layout: section
---

# The Transformation

From text to running software

---

# Source Code is Inert

Source code doesn't *do* anything by itself.

It's just characters in a file.

<v-click>

Something must transform those instructions into action.

This happens in two main ways:

</v-click>

<!--
Important conceptual distinction: the text file sits there doing nothing.
Execution requires a transformation step.
-->

---

# Compilation

Some languages (C, C++, Rust, Go) use a **compiler**.

```
Source Code (.c file)  →  Compiler  →  Executable (.exe or binary)
     [text]                              [machine code]
```

<v-clicks>

- Compiler reads source, produces executable
- Executable contains machine instructions
- Once compiled, source code isn't needed to run

</v-clicks>

<!--
Compiled languages produce standalone executables.
You could delete the source and the program still works.

This is why companies can distribute software without revealing source code.
-->

---

# Interpretation

Other languages (Python, JavaScript, Ruby) use an **interpreter**.

```
Source Code (.py file)  →  Interpreter  →  [runs immediately]
     [text]                  (Python)
```

<v-clicks>

- Interpreter reads source and executes it directly
- Translates on the fly, line by line
- Source code must be present to run

</v-clicks>

<!--
Interpreted languages are often easier to work with for beginners
because there's no separate build step.

Most AI-generated code students will encounter is Python or JavaScript — interpreted.
-->

---

# Why This Matters to You

<v-clicks>

You won't usually care whether code is compiled or interpreted. What matters:

1. **Source code is the recipe, not the meal.** The text describes what to do; execution makes it happen.

2. **AI assistants generate source code.** They produce text. That text must then be run.

3. **Errors appear at transformation time.** When something goes wrong, you'll see messages about specific lines in your text files.

</v-clicks>

<!--
The recipe/meal analogy is memorable.
Emphasize that AI gives you recipes — you still need to cook (run) them.

Error messages will reference line numbers in source files —
this is why understanding source structure matters.
-->

---
layout: section
---

# Why "Source" Matters

The authority of the original

---

# Without Source Code...

The word "source" is significant. Source code is the *origin* — the authoritative version.

<v-clicks>

Consider what happens without it:

- **You can't understand how something works** — the compiled executable is opaque
- **You can't modify it** — to change behavior, you need the original text
- **You can't verify it** — without source, you're trusting blindly

</v-clicks>

<!--
This explains why source code is valuable and protected.

The verification point connects to security and trust —
you can audit open source code, but not compiled binaries.
-->

---

# This is Why...

<v-clicks>

- **Open source** software publishes its source code for anyone to inspect

- **Companies guard source code** as intellectual property

- **Version control** tracks every change to source files

- **Code review** examines source before changes are accepted

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-green-900 rounded">
When you work with AI-generated code, you're working with source.<br>
You can read it. Question it. Modify it.<br>
<strong>That's power — and responsibility.</strong>
</div>

</v-click>

<!--
Each of these points connects to later modules:
- Open source → industry practice
- Companies guarding code → professional context
- Version control → Git modules
- Code review → Pull requests module

The power/responsibility note foreshadows the ethics module.
-->

---
layout: section
---

# Code as Communication

The professional perspective

---

# A Perspective Shift

<div class="text-2xl mt-8">
Code is primarily a communication medium between humans.
</div>

<v-clicks>

- Yes, computers execute it
- But computers don't care about clarity, naming, organization
- They'll run ugly code just as happily as beautiful code

**Humans care.** Future-you cares. Your teammates care. Your mentors care.

</v-clicks>

<!--
This is the key insight that separates novices from professionals.

Beginners focus on "does it work?"
Professionals ask "can others understand and maintain it?"
-->

---

# Compare These Two

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

<v-click>

A computer runs both identically. But which would you rather maintain?

</v-click>

<!--
Walk through the differences:
- Version A: cryptic name, compact but unclear
- Version B: descriptive name, docstring, clear structure

Both "work" — but Version B communicates intent.
When AI generates Version A-style code, ask it to clarify.
-->

---

# Version B Communicates

<v-clicks>

- **Function name** explains its purpose
- **Docstring** provides context
- **Structure** makes logic visible
- A reader (human or AI) understands *intent*

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded text-lg">
When reviewing AI-generated code, ask:<br>
<strong>"Would a human understand this six months from now?"</strong><br>
If not, it needs improvement — regardless of whether it "works."
</div>

</v-click>

<!--
This is a practical guideline for reviewing AI code.
"Works" is necessary but not sufficient.

The six-month test is a useful heuristic — will you remember what this does?
-->

---
layout: section
---

# Exercises

See source code in the wild

---

# Exercise 1: Inspect a Text File

<div class="text-lg">

1. Find any `.py`, `.js`, `.html`, or `.css` file on your computer
   - (Or ask your AI assistant to create one)
2. Open it with a basic text editor (Notepad, TextEdit, VS Code)
3. Observe: **it's just text.** Characters. Lines. Nothing magical.

</div>

<!--
This exercise grounds the concept in direct experience.
Students should actually do this — open a real file.

If they don't have code files, they can ask their AI assistant
to generate a simple one, which also demonstrates the AI workflow.
-->

---

# Exercise 2: The Web is Source Code

<div class="text-lg">

1. Open any website in your browser
2. Right-click and select **"View Page Source"**
   - (Or press `Ctrl+U` / `Cmd+Option+U`)
3. You're looking at HTML source code — the text that becomes the visual page
4. Notice: **you can read it.** It's not hidden or encrypted.

</div>

<!--
This is often a revelatory moment.
The web they use every day is built from readable text.

Some sites are more readable than others — that's okay.
The point is that source exists and is accessible.
-->

---

# Exercise 3: AI-Generated Code

<div class="text-lg">

1. Ask an AI assistant: *"Write a Python function that checks if a word is a palindrome"*
2. Look at what it produces — **it's text**
3. Ask it to explain the code — it will reference specific lines
4. Ask it to modify the code — watch how it produces new text

</div>

<v-click>

<div class="mt-4 text-gray-400">
This exercise previews the LLM track workflow.
</div>

</v-click>

<!--
This connects directly to how students will work with AI.
They're not getting magic — they're getting text that they can inspect.

The modification step shows that AI changes are also just text changes.
-->

---

# Key Insights

| Concept | Implication for Your Work |
|---------|---------------------------|
| Code is plain text | You can read, edit, and understand what AI generates |
| Text enables diffs | You can see exactly what changed between versions |
| Source is authoritative | Protect it, track it, review it carefully |
| Code communicates to humans | Clarity matters as much as correctness |
| Transformation creates execution | Errors will reference your source files |

<!--
This table summarizes the module.
Each row connects concept to practical implication.

These insights will be reinforced throughout the SWE track.
-->

---

# What's Next

Understanding that code is text unlocks everything that follows:

<v-clicks>

- **Module 03**: Diffs show text changes between versions
- **Module 04**: Version control tracks text file history
- **Module 06**: Pull requests review text modifications
- **LLM Track**: AI assistants generate and explain text

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
You don't need to write code fluently. You need to <strong>read</strong> it, <strong>reason</strong> about it, and <strong>communicate</strong> about it effectively.
</div>

</v-click>

<!--
This slide shows how the current module connects to future learning.
The "read, reason, communicate" framing is important —
students don't need to become expert programmers.
-->

---
layout: section
---

# Reflection

---

# Reflection Questions

<v-clicks>

1. Why might a company keep its source code secret while distributing the compiled application freely?

2. If an AI generates code that works but is difficult to read, is that acceptable? When might it be? When not?

3. "Source code is the recipe, not the meal." What breaks down in this analogy? *(Hint: think about who follows the recipe.)*

</v-clicks>

<!--
These questions are for discussion or personal reflection.

Question 1: Intellectual property, competitive advantage
Question 2: Context-dependent — prototypes vs. production
Question 3: Cooks are humans who interpret; computers follow exactly

These have no single right answer — they're meant to spark thinking.
-->

---

# Further Reading

<div class="text-gray-400 text-sm mb-4">Optional, for curious students</div>

- [The Cathedral and the Bazaar](http://www.catb.org/~esr/writings/cathedral-bazaar/) — Eric S. Raymond's influential essay on open source

- [Code is Communication](https://www.martinfowler.com/bliki/CodeAsDocumentation.html) — Martin Fowler on writing code for humans

<!--
These are optional depth for interested students.
Don't require or assign — just mention they exist.

Both are classic readings that influenced software culture.
-->

---
layout: center
class: text-center
---

# Module 01 Complete

Software is text. Text you can read, understand, and change.

<div class="mt-8 text-xl text-gray-400">
Next: Module 02 — GitHub Setup Guide
</div>

<div class="mt-8">
  <a href="./02-github-setup" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 02 →
  </a>
</div>

<!--
Key takeaway: demystifying software as plain text.

Students should now understand that code is readable, trackable, and
that AI works with the same text they can inspect.
-->
