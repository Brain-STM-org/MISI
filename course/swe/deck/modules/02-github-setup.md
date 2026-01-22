---
theme: default
title: "Module 02: GitHub Setup Guide"
routerMode: hash
info: |
  SWE Fundamentals - MISI
  Module 02: GitHub Setup Guide
drawings:
  persist: false
transition: slide-left
---

# Module 02

## GitHub Setup Guide

<div class="pt-8 text-xl text-gray-400">
  SWE Fundamentals • MISI
</div>

<!--
This is a hands-on setup module. Students should follow along with their devices.

The goal is a working GitHub setup by the end. Don't rush through this —
a broken setup will frustrate students for the entire program.

Estimated time: 30 minutes
Delivery: Day 1 Bootcamp
-->

---

# Opening

<div class="text-2xl italic text-gray-300 mt-12">
Your passport to collaborative software development.
</div>

<v-click>

<div class="mt-8 text-gray-400">
Nearly every software team in the world uses GitHub or something similar.<br>
After this guide, you will too.
</div>

</v-click>

<!--
This frames GitHub as an industry standard, not just a school requirement.
Students should understand this is a real professional skill.
-->

---

# Learning Objectives

By the end of this guide, you will have:

<v-clicks>

1. **Created** a GitHub account with a professional profile
2. **Configured** essential security settings (2FA)
3. **Installed** the tools needed to work with repositories
4. **Cloned** your first repository to your local machine
5. **Verified** your setup by making a test change

</v-clicks>

<!--
This is a setup module — objectives are about *having* not *understanding*.
Students will complete concrete steps.
-->

---
layout: section
---

# What is GitHub?

Where source code lives

---

# GitHub Provides...

Remember: source code is plain text files. GitHub provides a home for them.

<v-clicks>

- **Storage**: A home for your project's files
- **History**: Every change ever made, preserved forever
- **Collaboration**: Multiple people working on the same code
- **Review**: Examining changes before they're accepted
- **Automation**: Running tests and checks automatically

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
Think of it as <strong>Google Docs for code</strong> — but with far more powerful history and collaboration features.
</div>

</v-click>

<!--
The Google Docs analogy helps students connect to something familiar.
Key difference: Git tracks line-by-line history, not just "versions."

This connects to Module 01 — we're storing those plain text files somewhere.
-->

---
layout: section
---

# Part 1: Create Your Account

Your professional identity

---

# Step 1: Sign Up

<div class="text-lg">

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Enter your email address
4. Create a strong password (use a password manager!)
5. Choose a username

</div>

<v-click>

<div class="mt-4 text-gray-400">
Pause here and sign up before continuing.
</div>

</v-click>

<!--
Have students actually do this now.
Walk around and help anyone who gets stuck.

If students already have accounts, they can skip to 2FA setup.
-->

---

# Choosing a Username

Your GitHub username is your **professional identity** in the software world.

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Good Choices

- `evasquez`
- `elena-v`
- `elenavasquez23`
- `vasquez-dev`

</div>
<div>

### Avoid

- `xXx_c0d3r_xXx`
- `throwaway12345`
- Your birth year (privacy)
- Anything embarrassing

</div>
</div>

<!--
This matters more than students might think.
Recruiters and hiring managers look at GitHub profiles.

The username appears on every contribution — it follows you.
-->

---

# Your Username Appears...

<v-clicks>

- On **every contribution** you make
- In your profile URL (`github.com/yourusername`)
- In project credits and commit history
- In job applications and portfolios

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-yellow-900 rounded text-lg">
<strong>This follows you.</strong> Recruiters look at GitHub profiles. Choose something professional.
</div>

</v-click>

<!--
Emphasize the long-term implications.
A professional username costs nothing and pays dividends.
-->

---

# Step 2: Verify Your Email

<div class="text-lg">

1. Check your inbox for a verification email from GitHub
2. Click the verification link
3. If you don't see it, check spam/junk folders

</div>

<v-click>

<div class="mt-8 text-gray-400">
Without verification, you can't use all GitHub features.
</div>

</v-click>

<!--
This is quick but important.
Some students may need to check spam folders.
-->

---
layout: section
---

# Part 2: Secure Your Account

Protecting your work

---

# Enable Two-Factor Authentication

<div class="text-2xl text-center mt-8 p-4 bg-red-900 rounded">
This is <strong>not optional</strong> for our program.
</div>

<v-click>

<div class="mt-8">

Your GitHub account will contain:
- Your work
- Your contributions
- Your professional reputation

**Protect it.**

</div>

</v-click>

<!--
Make clear this is a program requirement, not a suggestion.
2FA should be standard for all professional accounts.
-->

---

# 2FA Setup Steps

<div class="text-lg">

1. Click your profile picture (top right) → **Settings**
2. In the left sidebar, click **Password and authentication**
3. Under "Two-factor authentication," click **Enable**
4. Choose your method:
   - **Authenticator app** (recommended): Authy, 1Password, or Google Authenticator
   - **SMS**: Less secure but better than nothing
5. Follow the prompts to complete setup

</div>

<!--
Walk students through this step by step.
Pause after each step to ensure everyone keeps up.
-->

---

# Save Your Recovery Codes!

<div class="text-2xl text-center mt-8">
When 2FA setup shows recovery codes:<br>
<strong>SAVE THEM</strong>
</div>

<v-clicks>

- Store in a password manager
- Print and store securely
- **Never** skip this step

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Recovery codes are your backup if you lose your phone.
</div>

</v-click>

<!--
Students often skip recovery codes and regret it later.
Emphasize: lose your phone + no recovery codes = locked out.
-->

---

# Why 2FA Matters

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Without 2FA

Anyone with your password owns your account.

```
Password → Full Access
```

</div>
<div>

### With 2FA

They need password **AND** your phone.

```
Password + Phone → Full Access
```

</div>
</div>

<v-click>

<div class="mt-8 text-gray-400">
It's the difference between a door with a lock and a door with a lock <em>and</em> a deadbolt.
</div>

</v-click>

<!--
Simple security analogy.
Two factors are much harder to compromise than one.
-->

---
layout: section
---

# Part 3: Set Up Your Profile

Looking professional

---

# Complete Your Profile

<div class="text-lg">

1. Click your profile picture → **Your profile**
2. Click **Edit profile**
3. Add:
   - **Name**: Your real name (or how you want to be known)
   - **Bio**: One line about you
   - **Location**: Optional
   - **Profile picture**: A clear photo or professional avatar

</div>

<v-click>

<div class="mt-4 text-gray-400">
Example bio: "High school senior | Aspiring software engineer"
</div>

</v-click>

<!--
Students don't need to overthink this.
Having something is better than a blank profile.
-->

---
layout: section
---

# Part 4: Install Your Tools

Git on your machine

---

# You Need Two Things

<v-clicks>

1. **Git**: The version control system (runs in the background)

2. **A way to use Git**: Either command line, GitHub Desktop, or your editor

</v-clicks>

<v-click>

<div class="mt-8 p-4 bg-gray-800 rounded">
We'll show two options. Choose what feels comfortable.
</div>

</v-click>

<!--
Students can choose their path.
GitHub Desktop is simpler; command line is more powerful.
Both are valid for our program.
-->

---

# Option A: GitHub Desktop

<div class="text-gray-400 mb-4">Recommended for beginners</div>

GitHub Desktop provides a visual interface for Git operations.

<v-clicks>

1. Download from [desktop.github.com](https://desktop.github.com)
2. Install and open it
3. Sign in with your GitHub account
4. Follow the setup prompts

</v-clicks>

<v-click>

<div class="mt-4 text-green-400">
GitHub Desktop handles Git installation automatically on most systems.
</div>

</v-click>

<!--
This is the easier path.
Students who want simplicity should choose this.
-->

---

# Option B: Command Line + VS Code

<div class="text-gray-400 mb-4">For those comfortable with terminals</div>

### Install Git

<div class="grid grid-cols-3 gap-4 text-sm">
<div>

**macOS**
```bash
xcode-select --install
```
Or: `brew install git`

</div>
<div>

**Windows**

Download from [git-scm.com](https://git-scm.com/download/win)

Default options are fine.

</div>
<div>

**Linux**
```bash
sudo apt install git
```

</div>
</div>

<!--
Each OS has its own installation method.
Students should follow the instructions for their system.
-->

---

# Configure Git

After installing Git, configure your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

<v-click>

<div class="mt-8 p-4 bg-blue-900 rounded">
Use the <strong>same email as your GitHub account</strong> — this links your local work to your profile.
</div>

</v-click>

<!--
This step is critical.
The email must match GitHub or contributions won't link properly.
-->

---

# Install VS Code

<div class="text-lg">

1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Install and open it
3. It has built-in Git support

</div>

<v-click>

<div class="mt-8 text-gray-400">
VS Code works beautifully with GitHub — built-in diff viewer, staging, and more.
</div>

</v-click>

<!--
If students completed Module 00, they may already have VS Code.
Just confirm it's installed.
-->

---
layout: section
---

# Part 5: Clone Your First Repository

Getting code on your machine

---

# What is Cloning?

**Cloning** = downloading a repository to your computer so you can work on it locally.

<v-click>

<div class="mt-8">

You get:

- A complete copy of the project
- All the files (source code!)
- The entire history of changes
- A connection back to GitHub for syncing

</div>

</v-click>

<!--
Cloning is not just downloading — it includes history and sync capability.
The folder on your computer is your "working copy."
-->

---

# Clone with GitHub Desktop

<div class="text-lg">

1. In GitHub Desktop, click **File → Clone Repository**
2. Select the **URL** tab
3. Enter a repository URL (your mentor will provide one)
4. Choose where to save it on your computer
5. Click **Clone**

</div>

<!--
Students will need a repository URL to clone.
This could be a course repo or a public practice repo.
-->

---

# Clone with Command Line

```bash
# Navigate to where you want the project
cd ~/Projects

# Clone the repository
git clone https://github.com/username/repository-name.git

# Enter the project folder
cd repository-name
```

<v-click>

<div class="mt-4 text-gray-400">
Replace the URL with the actual repository you're cloning.
</div>

</v-click>

<!--
The cd command navigates to the directory.
After cloning, enter the folder to start working.
-->

---
layout: section
---

# Part 6: Verify Your Setup

Make sure it works

---

# Test 1: See the Files

Open your cloned repository folder. You should see:

<v-clicks>

- Project files (`.py`, `.js`, `.html`, etc.)
- A `.git` folder (may be hidden) — Git's database
- Likely a `README.md` file

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
If you see the .git folder, Git is tracking this project.
</div>

</v-click>

<!--
The .git folder is hidden by default on most systems.
Its presence confirms this is a Git repository.
-->

---

# Test 2: Check Git Status

In your terminal (or GitHub Desktop):

```bash
git status
```

You should see:

```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

<v-click>

<div class="mt-4 text-gray-400">
This means: connected, on main branch, no changes yet.
</div>

</v-click>

<!--
"Working tree clean" is the expected state after a fresh clone.
This confirms Git is working and the repo is properly cloned.
-->

---

# Test 3: View History

```bash
git log --oneline -5
```

<v-click>

This shows the last 5 changes (commits) to the project.

```
a1b2c3d Fix login bug
e4f5g6h Add user profile page
i7j8k9l Initial commit
```

Each line is a moment in history you can return to.

</v-click>

<!--
This demonstrates that history is preserved.
Students can see the project's evolution.
-->

---
layout: section
---

# Troubleshooting

Common issues and fixes

---

# "Permission denied" when cloning

Your GitHub account isn't authenticated on your machine.

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### GitHub Desktop

Sign out and sign back in.

</div>
<div>

### Command Line

Use GitHub's credential manager or set up SSH keys.

(Ask your mentor or AI assistant for help)

</div>
</div>

<!--
Authentication issues are common.
GitHub Desktop usually handles this automatically.
-->

---

# Other Common Issues

<div class="grid grid-cols-2 gap-8">
<div>

### "git: command not found"

Git isn't installed or isn't in your system path.

**Fix**: Reinstall Git, then restart your terminal.

</div>
<div>

### 2FA codes not working

Your device's clock may be off.

**Fix**: Ensure accurate time (codes are time-based).

</div>
</div>

<!--
These are the most common issues students encounter.
Time-based codes need accurate clocks — even a minute off causes failures.
-->

---

# Quick Reference

| Task | GitHub Desktop | Command Line |
|------|---------------|--------------|
| Clone a repo | File → Clone Repository | `git clone URL` |
| See status | View changes in sidebar | `git status` |
| View history | History tab | `git log` |
| Open in editor | Repository → Open in VS Code | `code .` |

<!--
Students can reference this table as they learn.
Both approaches achieve the same goals.
-->

---

# Setup Checklist

Before moving on, confirm:

<v-clicks>

- [ ] GitHub account created
- [ ] Email verified
- [ ] 2FA enabled
- [ ] Profile has name and picture
- [ ] Git installed locally
- [ ] Successfully cloned a repository
- [ ] `git status` runs without errors

</v-clicks>

<!--
Go through this checklist explicitly.
Don't let students proceed with a broken setup.
-->

---

# If Something Is Incomplete...

<div class="text-2xl text-center mt-12">
Ask your mentor or AI assistant for help.<br><br>
<strong>Don't proceed with a broken setup.</strong><br>
It will frustrate you later.
</div>

<!--
Emphasize this strongly.
Better to fix setup issues now than struggle throughout the program.
-->

---

# You Now Have...

<v-clicks>

- **A GitHub account** — your professional identity
- **2FA enabled** — your account secured
- **Git installed** — version control ready
- **A cloned repository** — your first project

</v-clicks>

<v-click>

<div class="mt-8 text-gray-400">
You're ready to start working with code.
</div>

</v-click>

<!--
Celebrate the accomplishment.
Students have completed a real professional setup.
-->

---
layout: center
class: text-center
---

# Module 02 Complete

Your GitHub setup is ready.

<div class="mt-8 text-xl text-gray-400">
Next: Module 03 — Understanding Diffs
</div>

<div class="mt-8">
  <a href="./03-understanding-diffs" class="px-4 py-2 bg-blue-600 text-white rounded">
    Continue to Module 03 →
  </a>
</div>

<!--
The next module introduces diffs — the superpower that lets you see exactly what changed.

This builds directly on having a working Git setup.
-->
