# GitHub Setup Guide

> *Your passport to collaborative software development.*

## Learning Objectives

By the end of this guide, you will have:

1. **Created** a GitHub account with a professional profile
2. **Configured** essential security settings (2FA)
3. **Installed** the tools needed to work with repositories
4. **Cloned** your first repository to your local machine
5. **Verified** your setup by making a test change

---

## What is GitHub?

GitHub is where source code lives, collaborates, and evolves.

Remember from the previous module: source code is plain text files. GitHub provides:

- **Storage**: A home for your project's files
- **History**: Every change ever made, preserved forever
- **Collaboration**: Multiple people working on the same code
- **Review**: Examining changes before they're accepted
- **Automation**: Running tests and checks automatically

Think of it as Google Docs for code — but with far more powerful history and collaboration features.

Nearly every software team in the world uses GitHub or something similar. After this guide, you will too.

---

## Part 1: Create Your Account

### Step 1: Sign Up

1. Go to [github.com](https://github.com)
2. Click **Sign up**
3. Enter your email address
4. Create a strong password (use a password manager!)
5. Choose a username

### Choosing a Username

Your GitHub username is your professional identity in the software world. Choose wisely:

| Good Choices | Avoid |
|--------------|-------|
| `evasquez` | `xXx_c0d3r_xXx` |
| `elena-v` | `throwaway12345` |
| `elenavasquez23` | Your birth year (privacy) |
| `vasquez-dev` | Anything you'd be embarrassed to show an employer |

Your username will appear:
- On every contribution you make
- In your profile URL (github.com/yourusername)
- In project credits and commit history

**This follows you.** Recruiters look at GitHub profiles. Choose something professional.

### Step 2: Verify Your Email

1. Check your inbox for a verification email from GitHub
2. Click the verification link
3. If you don't see it, check spam/junk folders

---

## Part 2: Secure Your Account

Your GitHub account will contain your work, your contributions, and your professional reputation. Protect it.

### Enable Two-Factor Authentication (2FA)

**This is not optional for our program.**

1. Click your profile picture (top right) → **Settings**
2. In the left sidebar, click **Password and authentication**
3. Under "Two-factor authentication," click **Enable**
4. Choose your method:
   - **Authenticator app** (recommended): Use Authy, 1Password, or Google Authenticator
   - **SMS**: Less secure but better than nothing

5. Follow the prompts to complete setup
6. **Save your recovery codes** in a secure location (password manager, printed and stored safely)

### Why 2FA Matters

Without 2FA, anyone who guesses or steals your password owns your account. With 2FA, they also need your phone. It's the difference between a door with a lock and a door with a lock *and* a deadbolt.

---

## Part 3: Set Up Your Profile

A complete profile signals professionalism. Let's fill it out.

1. Click your profile picture → **Your profile**
2. Click **Edit profile**
3. Add:
   - **Name**: Your real name (or how you want to be known)
   - **Bio**: One line about you ("High school senior | Aspiring software engineer")
   - **Location**: Optional, but helps with community connections
   - **Profile picture**: A clear photo or professional avatar

You can refine this later. For now, having *something* is better than a blank profile.

---

## Part 4: Install Your Tools

You need two things on your local machine:

1. **Git**: The version control system (runs in the background)
2. **A way to use Git**: Either command line, GitHub Desktop, or your editor

### Option A: GitHub Desktop (Recommended for Beginners)

GitHub Desktop provides a visual interface for Git operations.

1. Download from [desktop.github.com](https://desktop.github.com)
2. Install and open it
3. Sign in with your GitHub account
4. Follow the setup prompts

GitHub Desktop handles Git installation automatically on most systems.

### Option B: Command Line + VS Code

For those comfortable with terminals, or working with AI assistants that generate commands:

**Install Git:**

*macOS:*
```bash
# Open Terminal, then run:
xcode-select --install
# Or install via Homebrew: brew install git
```

*Windows:*
1. Download from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer (default options are fine)
3. Restart your terminal/editor after installation

*Linux:*
```bash
sudo apt install git  # Ubuntu/Debian
sudo dnf install git  # Fedora
```

**Configure Git:**

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the same email as your GitHub account — this links your local work to your profile.

**Install VS Code:**

1. Download from [code.visualstudio.com](https://code.visualstudio.com)
2. Install and open it
3. It has built-in Git support and works beautifully with GitHub

---

## Part 5: Clone Your First Repository

"Cloning" means downloading a repository to your computer so you can work on it locally.

### Using GitHub Desktop

1. In GitHub Desktop, click **File → Clone Repository**
2. Select the **URL** tab
3. Enter a repository URL (your mentor will provide one, or use a public repo)
4. Choose where to save it on your computer
5. Click **Clone**

### Using Command Line

```bash
# Navigate to where you want the project
cd ~/Projects

# Clone the repository
git clone https://github.com/username/repository-name.git

# Enter the project folder
cd repository-name
```

### What Just Happened?

You now have:
- A complete copy of the project on your machine
- All the files (source code!)
- The entire history of changes
- A connection back to GitHub for syncing

The folder on your computer is your **working copy**. Edit files here, and Git tracks what changed.

---

## Part 6: Verify Your Setup

Let's confirm everything works.

### Test 1: See the Files

Open your cloned repository folder. You should see:
- Project files (`.py`, `.js`, `.html`, etc.)
- A `.git` folder (may be hidden) — this is Git's database
- Likely a `README.md` file

### Test 2: Check Git Status

In your terminal (or GitHub Desktop):

```bash
git status
```

You should see something like:
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

This means: you're connected, you're on the main branch, and you haven't changed anything yet.

### Test 3: View History

```bash
git log --oneline -5
```

This shows the last 5 changes (commits) to the project. Each line is a moment in history you can return to.

---

## Troubleshooting Common Issues

### "Permission denied" when cloning

Your GitHub account isn't authenticated on your machine.

**Fix with GitHub Desktop**: Sign out and sign back in.

**Fix with command line**: Use GitHub's credential manager or set up SSH keys (ask your mentor or AI assistant for help).

### "git: command not found"

Git isn't installed or isn't in your system path.

**Fix**: Reinstall Git, then restart your terminal/editor.

### 2FA codes not working

Make sure your device's clock is accurate. Authenticator codes are time-based — even a minute off causes failures.

---

## Quick Reference

| Task | GitHub Desktop | Command Line |
|------|---------------|--------------|
| Clone a repo | File → Clone Repository | `git clone URL` |
| See status | View changes in sidebar | `git status` |
| View history | History tab | `git log` |
| Open in editor | Repository → Open in VS Code | `code .` |

---

## What's Next

You now have:
- A GitHub account (your professional identity)
- 2FA enabled (your account secured)
- Git installed (version control ready)
- A cloned repository (your first project)

In the next module, you'll make your first changes and learn how Git tracks them through **diffs** — the heart of understanding what changed in your code.

---

## Checklist

Before moving on, confirm:

- [ ] GitHub account created
- [ ] Email verified
- [ ] 2FA enabled
- [ ] Profile has name and picture
- [ ] Git installed locally
- [ ] Successfully cloned a repository
- [ ] `git status` runs without errors

If any item is incomplete, ask your mentor or AI assistant for help. Don't proceed with a broken setup — it will frustrate you later.

---

*Next module: Understanding Diffs — the superpower that lets you see exactly what changed.*
