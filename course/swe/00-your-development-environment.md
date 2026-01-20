# Module 00: Your Development Environment

> *"Why does this array start at 0?"*
> *"Why is this Module 00 and not Module 01?"*
> *Same answer: because that's how computers count.*

## Learning Objectives

By the end of this module, you will be able to:

1. **Explain** what a terminal is and why it exists
2. **Navigate** the file system using basic commands
3. **Use** VS Code as your development hub
4. **Choose** between GUI and CLI approaches confidently
5. **Connect** these tools into a coherent workflow

---

## Why Module 00?

In most programming languages, counting starts at 0, not 1:

```python
letters = ["a", "b", "c"]
letters[0]  # → "a" (first element)
letters[1]  # → "b" (second element)
letters[2]  # → "c" (third element)
```

This is called **zero-based indexing**. It feels strange at first, then becomes second nature. We're starting with Module 00 to get you used to it early.

(Also, this module is foundational — it comes *before* everything else, so 00 fits.)

---

## The Terminal: A Different Kind of Interface

You're used to graphical interfaces: windows, buttons, menus, clicking.

The **terminal** (also called **command line**, **shell**, or **console**) is older and simpler: you type commands, press Enter, and see text output.

```
$ ls
Documents  Downloads  Pictures  Projects
$ cd Projects
$ ls
my-first-repo  experiment  notes.txt
$
```

That's it. No icons. No mouse. Just text in, text out.

### Why Would Anyone Use This?

The terminal isn't outdated — it's powerful:

| GUI (Graphical) | CLI (Command Line) |
|-----------------|-------------------|
| Click through menus | Type a command |
| One action at a time | Chain commands together |
| What you see is what you get | Automation and scripting |
| Discoverable (browse menus) | Must know commands |
| Good for exploration | Good for precision |

Professional developers use both. The terminal excels when you need to:
- Run the same operation repeatedly
- Automate tasks
- Follow instructions from documentation or AI assistants
- Work on remote servers (which often have no GUI)

### Opening a Terminal

**macOS:**
- Press `Cmd + Space`, type "Terminal", press Enter
- Or: Applications → Utilities → Terminal

**Windows:**
- Press `Win + X`, select "Terminal" or "PowerShell"
- Or: Search for "Command Prompt" or "PowerShell"

**Linux:**
- Press `Ctrl + Alt + T` (on most distributions)
- Or: Find "Terminal" in your applications

You'll see a prompt waiting for input:
```
username@computer ~ $
```

The `$` (or `>` on Windows) means "ready for your command."

---

## Essential Terminal Commands

You don't need many commands to start. Here are the essentials:

### Where Am I?

```bash
pwd
```
**P**rint **W**orking **D**irectory — shows your current location.

```
$ pwd
/Users/alex/Projects
```

### What's Here?

```bash
ls
```
**L**i**s**t — shows files and folders in the current directory.

```
$ ls
Documents  Downloads  Pictures  Projects
```

Add `-la` for more detail (including hidden files):
```
$ ls -la
total 24
drwxr-xr-x   6 alex  staff   192 Jan 15 10:30 .
drwxr-xr-x  12 alex  staff   384 Jan 14 09:15 ..
drwxr-xr-x   4 alex  staff   128 Jan 15 10:30 .git
-rw-r--r--   1 alex  staff  1234 Jan 15 10:30 README.md
drwxr-xr-x   3 alex  staff    96 Jan 15 10:28 src
```

### Move Around

```bash
cd foldername
```
**C**hange **D**irectory — move into a folder.

```
$ cd Projects
$ pwd
/Users/alex/Projects
```

Go up one level:
```bash
cd ..
```

Go to your home directory:
```bash
cd ~
```

Go to an absolute path:
```bash
cd /Users/alex/Projects/my-repo
```

### Create Things

```bash
mkdir foldername    # Make a directory
touch filename.txt  # Create an empty file
```

### See Inside Files

```bash
cat filename.txt    # Print file contents
```

### The Pattern

Most commands follow this structure:
```
command [options] [arguments]
```

- `ls` — command alone
- `ls -la` — command with options
- `ls -la Documents` — command with options and argument

---

## Tab Completion: Your Best Friend

The terminal has a superpower: **tab completion**.

Start typing, then press `Tab`:

```
$ cd Proj[Tab]
$ cd Projects/
```

The terminal completes the name for you. If there are multiple matches, press `Tab` twice to see options.

This saves typing and prevents typos. Use it constantly.

---

## VS Code: Your Development Hub

**Visual Studio Code** (VS Code) is a code editor that's become the industry standard. It's free, powerful, and — critically — integrates everything:

- **Editor**: Write and edit code
- **File Explorer**: Navigate your project
- **Terminal**: Run commands without leaving the editor
- **Source Control**: Git operations with a visual interface
- **Extensions**: Add capabilities (language support, themes, AI assistants)

### The VS Code Layout

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
│  📄 pkg │                                               │
│         ├───────────────────────────────────────────────┤
│         │  Terminal                                     │
│         │  $ npm start                                  │
│         │  Server running on port 3000                  │
├─────────┴───────────────────────────────────────────────┤
│  Problems  Output  Terminal  ...                        │
└─────────────────────────────────────────────────────────┘
```

### Opening VS Code

**From your applications:**
- Find "Visual Studio Code" and open it

**From the terminal (powerful!):**
```bash
cd ~/Projects/my-repo
code .
```

The `code .` command opens VS Code with the current folder as your project. This is the most common way developers open projects.

### The Integrated Terminal

VS Code has a built-in terminal. Open it with:
- `Ctrl + `` ` (backtick) on Windows/Linux
- `Cmd + `` ` on macOS
- Or: View → Terminal

Now you have terminal and editor in one window. You'll edit code above and run commands below.

### Essential VS Code Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Open terminal | `Ctrl + `` ` | `Cmd + `` ` |
| Open file | `Ctrl + P` | `Cmd + P` |
| Search in files | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Command palette | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| Save | `Ctrl + S` | `Cmd + S` |
| Toggle sidebar | `Ctrl + B` | `Cmd + B` |

The **Command Palette** (`Ctrl/Cmd + Shift + P`) is especially powerful — type what you want to do and VS Code finds it.

---

## GUI vs CLI: Two Paths, One Destination

Throughout this curriculum, you'll see operations shown two ways:

**GUI (in VS Code or GitHub Desktop):**
> Click the Source Control icon → Stage changes → Type message → Click Commit

**CLI (in terminal):**
```bash
git add .
git commit -m "Add feature"
```

Both do the same thing. Neither is "better" — they're different tools for different moments.

### When GUI Shines

- **Learning**: See what's happening visually
- **Complex diffs**: Reviewing changes with color and side-by-side views
- **Exploration**: Browsing when you're not sure what you're looking for
- **Conflict resolution**: Merge conflicts are easier with visual tools

### When CLI Shines

- **Speed**: Type faster than you can click
- **Automation**: Scripts can't click buttons
- **Precision**: Exact control over options and arguments
- **Following instructions**: Documentation and AI assistants give commands
- **Remote work**: Servers don't have GUIs

### The Professional Reality

Most developers use both, fluidly switching based on the task:

```
"Let me check the git status..."      → types: git status
"Hmm, what changed in this file?"     → clicks to see visual diff in VS Code
"Okay, looks good, committing."       → types: git commit -m "Fix bug"
"Now let me review that PR..."        → opens GitHub in browser (GUI)
```

Don't stress about which to use. Start with whatever feels comfortable. Over time, you'll develop preferences.

---

## Connecting It All: Your Workflow

Here's how these tools work together:

```
┌──────────────────────────────────────────────────────┐
│                      VS Code                          │
│  ┌─────────────┐  ┌────────────────────────────────┐ │
│  │   Files     │  │         Editor                 │ │
│  │   Panel     │  │                                │ │
│  │             │  │    Write and edit code here    │ │
│  │  Click to   │  │                                │ │
│  │  open files │  │                                │ │
│  └─────────────┘  └────────────────────────────────┘ │
│  ┌─────────────┐  ┌────────────────────────────────┐ │
│  │  Source     │  │     Integrated Terminal        │ │
│  │  Control    │  │                                │ │
│  │             │  │  $ git status                  │ │
│  │  Visual Git │  │  $ npm install                 │ │
│  │  operations │  │  $ python app.py               │ │
│  └─────────────┘  └────────────────────────────────┘ │
└──────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │        GitHub          │
              │   (in your browser)    │
              │                        │
              │  PRs, Issues, Reviews  │
              └────────────────────────┘
```

A typical workflow:

1. **Open project** in VS Code (`code .` from terminal)
2. **Edit files** in the editor
3. **Run commands** in the integrated terminal (tests, builds, git)
4. **Review changes** using Source Control panel or `git diff`
5. **Commit and push** via terminal or GUI
6. **Create PR** on GitHub (browser)

All from one window (except the browser part).

---

## Exercise: Get Comfortable

### Exercise 1: Terminal Navigation

1. Open a terminal
2. Run `pwd` — where are you?
3. Run `ls` — what's there?
4. Navigate to your Documents folder: `cd ~/Documents` (or `cd Documents` if you're in home)
5. Create a folder: `mkdir terminal-practice`
6. Enter it: `cd terminal-practice`
7. Create a file: `touch hello.txt`
8. List contents: `ls`
9. Go back up: `cd ..`

### Exercise 2: VS Code Exploration

1. Open VS Code
2. Open your `terminal-practice` folder (File → Open Folder, or `code ~/Documents/terminal-practice`)
3. Open the integrated terminal (`Ctrl/Cmd + `` `)
4. In the terminal, run `ls` — you should see `hello.txt`
5. Click on `hello.txt` in the file explorer — it opens in the editor
6. Type something in the file and save (`Ctrl/Cmd + S`)
7. In terminal, run `cat hello.txt` — see your text?

### Exercise 3: Command Palette

1. In VS Code, open Command Palette (`Ctrl/Cmd + Shift + P`)
2. Type "terminal" — see the terminal-related commands
3. Type "git" — see Git commands available
4. Type "theme" — try changing your color theme

---

## Quick Reference

### Terminal Commands

| Command | Purpose | Example |
|---------|---------|---------|
| `pwd` | Where am I? | `pwd` |
| `ls` | What's here? | `ls -la` |
| `cd` | Move to folder | `cd Projects` |
| `cd ..` | Go up one level | `cd ..` |
| `cd ~` | Go home | `cd ~` |
| `mkdir` | Create folder | `mkdir new-project` |
| `touch` | Create file | `touch notes.txt` |
| `cat` | Show file contents | `cat README.md` |
| `code .` | Open VS Code here | `code .` |

### VS Code Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Toggle terminal | `Ctrl + `` ` | `Cmd + `` ` |
| Open file | `Ctrl + P` | `Cmd + P` |
| Search all files | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Command palette | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| Save | `Ctrl + S` | `Cmd + S` |

---

## Key Insights

| Concept | Implication |
|---------|-------------|
| Terminal is text-based interface | Type commands instead of clicking |
| VS Code integrates everything | Editor + terminal + Git in one window |
| GUI and CLI coexist | Use whichever fits the moment |
| Tab completion saves time | Type less, make fewer errors |
| `code .` opens VS Code | The most common way to start working |

---

## Reflection Questions

1. When might you prefer typing a command over clicking through menus?

2. Why do you think AI assistants typically give you terminal commands rather than "click here, then click there" instructions?

3. What's the advantage of having the terminal inside VS Code rather than in a separate window?

---

*Now you have your environment. Next: What is Source Code? — understanding what you'll be working with.*
