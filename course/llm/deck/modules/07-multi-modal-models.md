---
theme: default
title: "Module 07: Multi-Modal Models"
routerMode: hash
info: |
  LLM Fundamentals - MISI
  Module 07: Multi-Modal Models
drawings:
  persist: false
transition: slide-left
---

# Module 07

## Multi-Modal Models

<div class="pt-8 text-xl text-gray-400">
  LLM Fundamentals • MISI
</div>

<!--
Beyond text: images, audio, video.
When and how to use different modalities.

Estimated time: 25 minutes
Delivery: Day 1 of bootcamp

Development: 5-iteration dual-persona process
- Elena: Practical decision frameworks, privacy considerations
- Willisons: Current state of modalities (late 2025), real use cases for developers
-->

---

# Opening Quote

<div class="text-2xl italic text-gray-300 mt-12">
"A picture is worth a thousand tokens."
</div>

<div class="mt-4 text-gray-500">
— Modern ML proverb
</div>

<!--
Images can communicate what text struggles to describe.
-->

---

# Beyond Text

Everything so far has been text-based: you write text, AI responds with text.

<v-click>

But modern AI models can process multiple **modalities**:

</v-click>

<v-clicks>

- **Text** — What we've been using
- **Images** — Photos, screenshots, diagrams, documents
- **Audio** — Speech, music, sound
- **Video** — Moving images with or without audio

</v-clicks>

<!--
Introduction to multi-modal.
-->

---

# Multi-Modal Capabilities (Late 2025)

| Model Type | Input Modes | Output Modes |
|------------|-------------|--------------|
| Text-only (older) | Text | Text |
| Vision-enabled | Text + Images | Text |
| Audio-enabled | Text + Audio | Text (+ Audio in some) |
| Full multi-modal | Text + Images + Audio + Video | Text + Images + Audio |

<v-click>

<div class="mt-4 text-gray-400">
<strong>Current state:</strong> Vision is reliable, audio input works, video is emerging.
</div>

</v-click>

<!--
Multi-modal capabilities matrix.
-->

---
layout: section
---

# Vision: The Most Useful Modality

Screenshots, diagrams, documents

---

# What Vision Models Can Do

| Task | Example |
|------|---------|
| **Read text in images** | Extract text from screenshots, whiteboards |
| **Understand diagrams** | Interpret flowcharts, architecture diagrams |
| **Analyze screenshots** | Describe UI, identify issues, suggest improvements |
| **Read documents** | Process PDFs, scanned documents |
| **Understand code in images** | Extract code from screenshots |
| **Compare images** | Spot differences, analyze changes |

<!--
Vision capabilities.
-->

---

# When to Use Vision

**Use vision when**:

<v-clicks>

- Visual information that's hard to describe in text
- You want to reference something specific you can see
- Image contains text/code you don't want to transcribe
- Debugging UI issues shown in screenshots
- You want feedback on visual design

</v-clicks>

<!--
When vision helps.
-->

---

# When NOT to Use Vision

**Don't use vision when**:

<v-clicks>

- You can easily describe it in text
- You need precise character-by-character accuracy
- Image contains sensitive information you shouldn't share
- Text-based context would be clearer

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-yellow-900 rounded">
Text is often simpler. Use images when visual truly matters.
</div>

</v-click>

<!--
When to avoid vision.
-->

---

# Screenshot vs. Text Description

**Text-only approach**:
> "There's a button on my page that's positioned wrong. It's a blue button with white text that says 'Submit' and it's overlapping with the form fields..."

<v-click>

**Vision approach**:
> [Attach screenshot]
> "Why is the Submit button overlapping the form fields?"

</v-click>

<v-click>

<div class="mt-4 text-gray-400">
The screenshot shows the problem instantly. No ambiguity.
</div>

</v-click>

<!--
Screenshot vs description comparison.
-->

---

# Using Vision Effectively

**1. Provide context with images**

Don't just attach silently. Explain what it is and what you want:

```markdown
[Attached: screenshot of my login page]

This is my current login page design. I want feedback on:
1. Is the layout intuitive?
2. Are there accessibility issues?
3. How could I improve the error state styling?
```

<!--
Context with images.
-->

---

# Good Vision Practices

<v-clicks>

**2. Crop to relevance**
- Full desktop screenshot → Harder to process
- Cropped to specific element → Clearer, faster

**3. Ensure readability**
- Text should be large enough to read
- High contrast helps

**4. Reference specific parts**
> "In the top-right of this screenshot, there's an error message..."

</v-clicks>

<!--
Vision best practices.
-->

---

# Vision Limitations

| Limitation | Example |
|------------|---------|
| **Tiny text** | Small font sizes may be misread |
| **Handwriting** | Messy handwriting is unreliable |
| **Complex diagrams** | Very dense diagrams may be misinterpreted |
| **Precise counting** | "How many items?" may be wrong |
| **Subtle details** | Minor visual differences may be missed |
| **Spatial reasoning** | Complex layouts may confuse |

<!--
Where vision struggles.
-->

---
layout: section
---

# Audio Capabilities

Speech and sound

---

# Audio Input: What's Possible

<v-clicks>

- **Transcribe** speech to text
- **Understand** spoken questions directly
- **Identify** speakers in conversations
- **Process** tone and context

</v-clicks>

<v-click>

**Use cases**: Meeting transcription, voice coding assistance, processing recordings, accessibility

</v-click>

<!--
Audio input capabilities.
-->

---

# Audio in Practice

For most development tasks, audio is **secondary**:

<v-clicks>

- Text remains faster for coding
- Audio helps for accessibility or hands-free work
- Transcription is useful for recorded content

</v-clicks>

<v-click>

<div class="mt-4 text-gray-400">
Audio output (speech synthesis) is improving but still often sounds synthetic.
</div>

</v-click>

<!--
Audio in practice.
-->

---
layout: section
---

# Video Understanding

The emerging frontier

---

# Video: Current State

**Capabilities (emerging)**:
- Understand what's happening in short clips
- Answer questions about video content
- Extract info from presentations

<v-click>

**Limitations**:
- Processing time is significant
- Context limited (can't watch full movies)
- Understanding is surface-level vs. images
- Not all models support it

</v-click>

<!--
Video current state.
-->

---

# Practical Video Use

For now, video is most useful for:

<v-clicks>

- Analyzing short UI recordings (bug reproduction)
- Understanding tutorial clips
- Processing recorded demos

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-blue-900 rounded">
<strong>Tip:</strong> For longer content, extract key frames as images instead.
</div>

</v-click>

<!--
Video practical use.
-->

---
layout: section
---

# Choosing the Right Mode

Decision framework

---

# Decision Framework

```
Is the information primarily visual?
├── Yes → Consider using an image
│   └── Is it complex/hard to describe?
│       ├── Yes → Image is probably better
│       └── No → Text might be simpler
└── No → Stick with text

Is there audio content to process?
├── Yes → Use audio input (or transcribe first)
└── No → Not needed

Is there video?
├── Yes → Does it need to be video?
│   ├── Yes → Use video (if supported)
│   └── No → Extract frames as images
└── No → Not needed
```

<!--
Decision framework.
-->

---

# Mode Comparison

| Mode | Best For | Avoid When |
|------|----------|------------|
| **Text** | Code, structured data, clear descriptions | Visual info hard to describe |
| **Images** | Screenshots, diagrams, UI, documents | Sensitive content, tiny details |
| **Audio** | Transcription, voice input, accessibility | When text is more efficient |
| **Video** | Motion-dependent info, UI recordings | Long content, when frames suffice |

<!--
Mode comparison table.
-->

---
layout: section
---

# Multi-Modal Prompting

Combining text with other modes

---

# Combining Text and Images

```markdown
[Image attached: error message screenshot]

I'm seeing this error when I try to run my application.

Context:
- Python 3.11
- Flask application
- Just installed a new dependency

What's causing this error and how do I fix it?
```

<v-click>

<div class="mt-4 text-gray-400">
Image shows the exact error; text provides context the image doesn't have.
</div>

</v-click>

<!--
Combining text and images.
-->

---

# Multiple Images

```markdown
[Image 1: current UI design]
[Image 2: mockup of desired design]

How do I modify my CSS to make Image 1 look like Image 2?
Focus on the navigation bar positioning and colors.
```

<v-click>

<div class="mt-4 text-gray-400">
Comparison tasks work well with multiple images.
</div>

</v-click>

<!--
Multiple images.
-->

---

# Be Specific About What You Need

Tell the AI what you want from the image:

<v-clicks>

- "Transcribe all text in this image"
- "Describe the layout of this UI"
- "What error message is shown?"
- "Extract the data from this table"
- "What's wrong with this diagram?"

</v-clicks>

<!--
Specific image requests.
-->

---
layout: section
---

# Privacy and Security

Before you share

---

# Before Sharing Images

Ask yourself:

<v-clicks>

- Does this image contain sensitive information?
- Are there passwords, API keys, or credentials visible?
- Is there personally identifiable information?
- Would it be a problem if this image were stored or logged?

</v-clicks>

<!--
Privacy questions.
-->

---

# Sanitizing Images

Before uploading:

<v-clicks>

- **Blur or crop** sensitive information
- **Use placeholders** for secrets (`[REDACTED]`)
- **Consider** whether a description would suffice

</v-clicks>

<v-click>

<div class="mt-4 p-4 bg-red-900 rounded">
When you send images to AI systems, they may be processed by external servers, stored, or used for training. Apply the same caution as with text containing sensitive data.
</div>

</v-click>

<!--
Sanitizing images.
-->

---

# Exercise: Screenshot Workflow

1. Take a screenshot of some code in your editor
2. Ask the AI: "What does this code do?"
3. Compare: How does this compare to copy-pasting the code as text?

<v-click>

<div class="mt-4 text-gray-400">
When would screenshot be better? When would text be better?
</div>

</v-click>

<!--
Exercise: screenshot workflow.
-->

---

# Exercise: Diagram Understanding

1. Find or draw a simple flowchart
2. Take a photo/screenshot
3. Ask the AI to explain what it shows
4. Ask it to convert to pseudocode

<v-click>

<div class="mt-4 text-gray-400">
How accurate was the interpretation?
</div>

</v-click>

<!--
Exercise: diagram understanding.
-->

---

# Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Vision is most useful | Screenshots, diagrams, documents — use images when visual |
| Provide context | Don't just attach; explain what you want |
| Crop to relevance | Less noise = better understanding |
| Know the limits | Tiny text, handwriting, complex details may fail |
| Consider privacy | Images can contain sensitive info — sanitize first |
| Choose appropriately | Text is often simpler; images when visual matters |

<!--
Summary table.
-->

---

# Reflection Questions

<v-clicks>

1. Think of a recent problem you solved with AI. Could images have helped? Or was text sufficient?

2. What are the privacy implications of sharing screenshots of your work with AI systems?

3. As video understanding improves, what new use cases might emerge for software development?

</v-clicks>

<!--
Reflection questions.
-->

---
layout: center
class: text-center
---

# Module 07 Complete

You now know how to work with images, audio, and video.

<div class="mt-8 text-xl text-gray-400">
Next: Module 08 — Reasoning Models
</div>

<div class="mt-8">
  <a href="./08/" class="px-4 py-2 bg-purple-600 text-white rounded">
    Continue to Module 08 →
  </a>
</div>

<!--
Multi-modal capabilities understood.
Module 08 covers extended thinking.
-->
