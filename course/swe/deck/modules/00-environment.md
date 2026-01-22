---
theme: default
title: "Module 00: Your Development Environment"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 00: Your Development Environment
drawings:
  persist: false
transition: slide-left
---

# Module 00

## Your Development Environment

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
This is the first module - Module 00, not Module 01.
We start at 0 because that's how computers count (zero-based indexing).
It's also foundational - it comes *before* everything else.

Estimated time: 20 minutes
Delivery: Pre-program homework or Day 1 Morning
-->

---

# Why Module 00?

<v-clicks>

- In programming, counting starts at **0**, not 1
- This is called **zero-based indexing**

</v-clicks>

```python {all|1|2|3|4}
letters = ["a", "b", "c"]
letters[0]  # → "a" (first element)
letters[1]  # → "b" (second element)
letters[2]  # → "c" (third element)
```

<v-click>

It feels strange at first, then becomes second nature.

</v-click>

<!--
This is a good opportunity to introduce a fundamental programming concept early.
Zero-based indexing will come up constantly in their coding work.
The reveal animation here helps emphasize each index position.
-->

---

# Learning Objectives

By the end of this module, you will be able to:

<v-clicks>

1. **Explain** what a terminal is and why it exists
2. **Navigate** the file system using basic commands
3. **Use** VS Code as your development hub
4. **Choose** between GUI and CLI approaches confidently
5. **Connect** these tools into a coherent workflow

</v-clicks>

<!--
These objectives cover the three main tools students will use:
1. Terminal (command line interface)
2. VS Code (integrated development environment)
3. Understanding when to use GUI vs CLI

The key insight is that these tools work *together*, not in isolation.
-->

---
layout: section
---

# The Terminal

A different kind of interface

---

# What is the Terminal?

You're used to **graphical interfaces**: windows, buttons, menus, clicking.

<v-click>

The **terminal** is different:
- You type commands
- Press Enter
- See text output

</v-click>

<v-click>

```bash
$ ls
Documents  Downloads  Pictures  Projects
$ cd Projects
$ ls
my-first-repo  experiment  notes.txt
```

</v-click>

<v-click>

No icons. No mouse. Just text in, text out.

</v-click>

<!--
The terminal has many names: command line, shell, console.
They're slightly different technically, but students can treat them as synonyms for now.

The $ symbol is the "prompt" - it means the terminal is ready for input.
Students don't type the $, just the command after it.
-->

---

# GUI vs CLI

| GUI (Graphical) | CLI (Command Line) |
|-----------------|-------------------|
| Click through menus | Type a command |
| One action at a time | Chain commands together |
| What you see is what you get | Automation and scripting |
| Discoverable (browse menus) | Must know commands |
| Good for exploration | Good for precision |

<!--
Neither is "better" - they're different tools for different moments.
Professional developers use both fluently.

Key insight: CLI excels at automation and following instructions.
When AI assistants give you commands, they're giving CLI commands.
-->

---

# Why Use the Terminal?

The terminal excels when you need to:

<v-clicks>

- **Run the same operation repeatedly**
- **Automate tasks** with scripts
- **Follow instructions** from docs or AI assistants
- **Work on remote servers** (which often have no GUI)

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded">
💡 AI assistants give you <strong>commands</strong>, not "click here" instructions.
</div>

</v-click>

<!--
The connection to AI-assisted development is important.
When students use Claude or ChatGPT for coding help, they'll get terminal commands.
Being comfortable with the terminal makes AI assistance much more useful.
-->

---

# Opening a Terminal

<div class="grid grid-cols-3 gap-4">
<div>

### macOS
- `Cmd + Space`
- Type "Terminal"
- Press Enter

</div>
<div>

### Windows
- `Win + X`
- Select "Terminal"
- Or search "PowerShell"

</div>
<div>

### Linux
- `Ctrl + Alt + T`
- Or find "Terminal" in apps

</div>
</div>

<v-click>

<div class="mt-8">

You'll see a prompt waiting for input:

```
username@computer ~ $
```

The `$` (or `>` on Windows) means **"ready for your command."**

</div>

</v-click>

<!--
Have students actually do this now if they're following along.
The prompt format varies, but always ends with a symbol indicating readiness.
-->

---
layout: section
---

# Essential Commands

The only ones you need to start

---

# Where Am I?

```bash
pwd
```

**P**rint **W**orking **D**irectory — shows your current location.

<v-click>

```bash
$ pwd
/Users/alex/Projects
```

</v-click>

<v-click>

<div class="mt-4 p-4 bg-gray-800 rounded">

Think of it as asking "What folder am I in right now?"

</div>

</v-click>

<!--
pwd is usually the first command to run when you're disoriented.
The output shows the full path from the root of the file system.
-->

---

# What's Here?

```bash
ls
```

**L**i**s**t — shows files and folders in the current directory.

<v-click>

```bash
$ ls
Documents  Downloads  Pictures  Projects
```

</v-click>

<v-click>

Add `-la` for more detail (including hidden files):

```bash
$ ls -la
drwxr-xr-x   6 alex  staff   192 Jan 15 10:30 .
drwxr-xr-x  12 alex  staff   384 Jan 14 09:15 ..
drwxr-xr-x   4 alex  staff   128 Jan 15 10:30 .git
-rw-r--r--   1 alex  staff  1234 Jan 15 10:30 README.md
```

</v-click>

<!--
The -la flags mean:
- l = long format (more details)
- a = all files (including hidden ones starting with .)

Files starting with . are "hidden" - often configuration files.
The .git folder is important - it means this is a Git repository.
-->

---

# Move Around

```bash
cd foldername
```

**C**hange **D**irectory — move into a folder.

<v-clicks>

```bash
$ cd Projects      # Go into Projects folder
$ cd ..            # Go up one level
$ cd ~             # Go to home directory
$ cd /Users/alex   # Go to absolute path
```

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">

📁 <code>..</code> means "parent directory" (one level up)<br>
📁 <code>~</code> means "home directory"

</div>

</v-click>

<!--
cd is the most-used command. Students will type it constantly.

Relative paths (like "Projects") are relative to where you currently are.
Absolute paths (like "/Users/alex") work from anywhere.
-->

---

# Create Things

<div class="grid grid-cols-2 gap-8">
<div>

### Make a directory

```bash
mkdir foldername
```

Creates a new folder.

```bash
$ mkdir my-project
$ ls
my-project
```

</div>
<div>

### Create a file

```bash
touch filename.txt
```

Creates an empty file.

```bash
$ touch notes.txt
$ ls
notes.txt
```

</div>
</div>

<!--
mkdir = "make directory"
touch = creates a file (or updates its timestamp if it exists)

Students will use mkdir when starting new projects.
touch is useful for creating empty files quickly.
-->

---

# Tab Completion

## Your best friend in the terminal

<v-clicks>

Start typing, then press `Tab`:

```bash
$ cd Proj[Tab]
$ cd Projects/
```

The terminal completes the name for you.

If multiple matches exist, press `Tab` twice to see options.

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-green-900 rounded text-xl">
💡 Use tab completion constantly. It saves typing and prevents typos.
</div>

</v-click>

<!--
This is genuinely one of the most important things to learn.
Tab completion makes the terminal much faster and less error-prone.

Demonstrate this live if possible - it's hard to convey in slides.
-->

---
layout: section
---

# VS Code

Your development hub

---

# What is VS Code?

**Visual Studio Code** is a code editor that integrates everything:

<v-clicks>

- **Editor**: Write and edit code
- **File Explorer**: Navigate your project
- **Terminal**: Run commands without leaving
- **Source Control**: Git with a visual interface
- **Extensions**: AI assistants, themes, language support

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Free, powerful, and the industry standard.
</div>

</v-click>

<!--
VS Code has largely won the "editor wars" for most developers.
It's not the only option, but it's by far the most common.

The integrated terminal is key - students work in one window, not many.
-->

---

# The VS Code Layout

```
┌─────────────────────────────────────────────────────────┐
│  File  Edit  View  ...                        ≡  □  ×  │
├─────────┬───────────────────────────────────────────────┤
│         │                                               │
│  Files  │                Editor                         │
│  Panel  │                                               │
│         │           (where you write code)              │
│  📁 src │                                               │
│  📄 app │                                               │
│         ├───────────────────────────────────────────────┤
│         │  Terminal                                     │
│         │  $ npm start                                  │
│         │  Server running on port 3000                  │
├─────────┴───────────────────────────────────────────────┤
│  Problems  Output  Terminal  ...                        │
└─────────────────────────────────────────────────────────┘
```

<!--
Walk through each area:
- Left sidebar: file explorer, source control, extensions
- Main area: where you edit code
- Bottom panel: terminal, problems, output
- All in one window
-->

---

# Opening VS Code

<div class="grid grid-cols-2 gap-8">
<div>

### From applications

Find "Visual Studio Code" and open it.

Then: File → Open Folder

</div>
<div>

### From terminal (better!)

```bash
cd ~/Projects/my-repo
code .
```

Opens VS Code with that folder.

</div>
</div>

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded text-xl">
💡 <code>code .</code> is how most developers open projects.
</div>

</v-click>

<!--
The "code ." command is extremely common.
The dot means "current directory" - open VS Code here.

This is faster than navigating menus, and it opens exactly what you want.
-->

---

# Essential Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Open terminal | `` Ctrl + ` `` | `` Cmd + ` `` |
| Open file | `Ctrl + P` | `Cmd + P` |
| Search in files | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Command palette | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| Save | `Ctrl + S` | `Cmd + S` |

<v-click>

<div class="mt-4 p-4 bg-purple-900 rounded">

The **Command Palette** is powerful — type what you want and VS Code finds it.

</div>

</v-click>

<!--
Students don't need to memorize all shortcuts.
The most important ones:
- Toggle terminal
- Save
- Command palette (when you don't know the shortcut)

Command palette is the "I don't know the shortcut" shortcut.
-->

---
layout: section
---

# Putting It Together

Your workflow

---

# The Workflow

```
┌──────────────────────────────────────────────────────┐
│                      VS Code                          │
│  ┌─────────────┐  ┌────────────────────────────────┐ │
│  │   Files     │  │         Editor                 │ │
│  │   Panel     │  │    Write and edit code here    │ │
│  └─────────────┘  └────────────────────────────────┘ │
│  ┌─────────────┐  ┌────────────────────────────────┐ │
│  │  Source     │  │     Integrated Terminal        │ │
│  │  Control    │  │  $ git status                  │ │
│  │  (Git GUI)  │  │  $ npm install                 │ │
│  └─────────────┘  └────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │        GitHub          │
              │   (in your browser)    │
              │  PRs, Issues, Reviews  │
              └────────────────────────┘
```

<!--
This diagram shows how the tools connect.
VS Code is the hub - editing, terminal, and git in one window.
GitHub (in browser) is where collaboration happens.
-->

---

# A Typical Session

<v-clicks>

1. **Open project** in VS Code → `code .`
2. **Edit files** in the editor
3. **Run commands** in integrated terminal
4. **Review changes** using Source Control or `git diff`
5. **Commit and push** via terminal or GUI
6. **Create PR** on GitHub (browser)

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
All from one window (except the browser part).
</div>

</v-click>

<!--
This is the rhythm they'll develop over the program.
It feels awkward at first, then becomes natural.

Emphasize that there's no "right" way to do each step.
GUI or CLI, whatever works for that moment.
-->

---
layout: section
---

# Exercises

Get comfortable

---

# Exercise 1: Terminal Navigation

<div class="text-lg">

1. Open a terminal
2. Run `pwd` — where are you?
3. Run `ls` — what's there?
4. Navigate to Documents: `cd ~/Documents`
5. Create a folder: `mkdir terminal-practice`
6. Enter it: `cd terminal-practice`
7. Create a file: `touch hello.txt`
8. List contents: `ls`
9. Go back up: `cd ..`

</div>

<!--
Have students do this now.
Walk around and help anyone who gets stuck.

Common issues:
- Forgetting ~ means home
- Spaces in folder names (use quotes or backslash)
- Getting lost (pwd to check location)
-->

---

# Exercise 2: VS Code Exploration

<div class="text-lg">

1. Open VS Code
2. Open your `terminal-practice` folder
3. Open the integrated terminal (`` Ctrl/Cmd + ` ``)
4. Run `ls` — see `hello.txt`?
5. Click `hello.txt` in file explorer
6. Type something and save (`Ctrl/Cmd + S`)
7. In terminal: `cat hello.txt` — see your text?

</div>

<!--
This exercise connects terminal and VS Code.
The key realization: they're looking at the same files.

Changes in the editor appear in terminal commands (cat).
This is how the tools work together.
-->

---

# Exercise 3: Command Palette

<div class="text-lg">

1. Open Command Palette (`Ctrl/Cmd + Shift + P`)
2. Type "terminal" — see terminal commands
3. Type "git" — see Git commands
4. Type "theme" — try changing your color theme

</div>

<v-click>

<div class="mt-8 p-4 bg-gray-800 rounded">

The Command Palette finds anything in VS Code.

If you don't know the shortcut, the palette knows.

</div>

</v-click>

<!--
This exercise teaches self-sufficiency.
When students don't know how to do something, they can search.

The theme change is fun - makes VS Code feel personalized.
-->

---

# Quick Reference

### Terminal Commands

| Command | Purpose | Example |
|---------|---------|---------|
| `pwd` | Where am I? | `pwd` |
| `ls` | What's here? | `ls -la` |
| `cd` | Move to folder | `cd Projects` |
| `cd ..` | Go up one level | `cd ..` |
| `mkdir` | Create folder | `mkdir new-project` |
| `touch` | Create file | `touch notes.txt` |
| `code .` | Open VS Code here | `code .` |

<!--
Students can refer back to this slide.
These are the only commands they need for now.

More commands will come naturally as they work.
-->

---

# Key Insights

| Concept | Implication |
|---------|-------------|
| Terminal is text-based | Type commands instead of clicking |
| VS Code integrates everything | Editor + terminal + Git in one window |
| GUI and CLI coexist | Use whichever fits the moment |
| Tab completion saves time | Type less, make fewer errors |
| `code .` opens VS Code | The most common way to start |

<!--
These are the takeaways.
If students remember nothing else, remember these.
-->

---
layout: section
---

# Reflection

---

# Reflection Questions

<v-clicks>

1. When might you prefer typing a command over clicking through menus?

2. Why do AI assistants give terminal commands rather than "click here" instructions?

3. What's the advantage of having the terminal inside VS Code?

</v-clicks>

<!--
These questions are for discussion or personal reflection.
They help students internalize the *why* behind the tools.

Question 2 connects to the LLM track - AI gives commands because
commands are precise, reproducible, and automatable.
-->

---
layout: center
class: text-center
---

# Module 00 Complete

You have your environment set up.

<div class="mt-8 text-xl text-gray-400">
Next: Module 01 — What is Source Code?
</div>

<div class="mt-8">
  <a href="./01-source-code" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 01 →
  </a>
</div>
