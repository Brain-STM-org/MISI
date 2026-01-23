# Multi-Modal Models

> *"A picture is worth a thousand tokens."*
> — Modern ML proverb

## Learning Objectives

By the end of this module, you will be able to:

1. **Understand** what multi-modal means and which modes are available
2. **Identify** when images, audio, or video add value to AI interactions
3. **Use** vision capabilities effectively for practical tasks
4. **Recognize** the limitations of each modality
5. **Choose** the right mode for the right task

---

## Beyond Text

Everything so far has been text-based: you write text, AI responds with text.

But modern AI models can process multiple **modalities**:
- **Text** — What we've been using
- **Images** — Photos, screenshots, diagrams, documents
- **Audio** — Speech, music, sound
- **Video** — Moving images with or without audio

This opens new possibilities — but also new considerations.

---

## What Multi-Modal Means

**Multi-modal** = The model can process multiple types of input and/or produce multiple types of output.

| Model | Input Modes | Output Modes |
|-------|-------------|--------------|
| Text-only (older) | Text | Text |
| Vision-enabled | Text + Images | Text |
| Audio-enabled | Text + Audio | Text (+ Audio in some) |
| Full multi-modal | Text + Images + Audio + Video | Text + Images + Audio |

Current state (late 2025):
- **Vision** is widely available and reliable
- **Audio input** is available (transcription, understanding)
- **Audio output** (speech synthesis) is improving rapidly
- **Video understanding** is emerging but limited
- **Image generation** is separate (DALL-E, Midjourney, etc.)

---

## Vision: The Most Useful Modality

For software development, vision capabilities are the most immediately practical.

### What Vision Models Can Do

| Task | Example |
|------|---------|
| **Read text in images** | Extract text from screenshots, photos of whiteboards |
| **Understand diagrams** | Interpret flowcharts, architecture diagrams, wireframes |
| **Analyze screenshots** | Describe UI, identify issues, suggest improvements |
| **Read documents** | Process PDFs, scanned documents, handwritten notes |
| **Understand code in images** | Extract code from screenshots or photos |
| **Compare images** | Spot differences, analyze changes |

### When to Use Vision

**Use vision when**:
- You have visual information that's hard to describe in text
- You want to reference something specific you can see
- The image contains text/code you don't want to manually transcribe
- You're debugging UI issues shown in screenshots
- You want feedback on visual design

**Don't use vision when**:
- You can easily describe it in text
- You need precise character-by-character accuracy
- The image contains sensitive information you shouldn't share
- Text-based context would be clearer

### Practical Example: Screenshot Analysis

Instead of describing a bug in words:

**Text-only approach**:
> "There's a button on my page that's positioned wrong. It's a blue button with white text that says 'Submit' and it's overlapping with the form fields above it..."

**Vision approach**:
> [Attach screenshot]
> "Why is the Submit button overlapping the form fields? How do I fix the positioning?"

The screenshot shows the problem instantly.

---

## Using Vision Effectively

### Good Practices

**1. Provide context with images**

Don't just attach an image silently. Explain what it is and what you want:

```markdown
[Attached: screenshot of my login page]

This is my current login page design. I want feedback on:
1. Is the layout intuitive?
2. Are there accessibility issues?
3. How could I improve the error state styling?
```

**2. Crop to relevance**

A full-screen screenshot has lots of irrelevant information. Crop to show just what matters:

- Full desktop screenshot → Harder to process
- Cropped to the specific UI element → Clearer, faster

**3. Ensure readability**

- Text in images should be large enough to read
- Diagrams should be clear, not blurry
- High contrast helps

**4. Reference specific parts**

If the image is complex, tell the AI where to look:

> "In the top-right of this screenshot, there's an error message. What does it mean and how do I fix it?"

### What Vision Struggles With

| Limitation | Example |
|------------|---------|
| **Tiny text** | Small font sizes may be misread |
| **Handwriting** | Messy handwriting is unreliable |
| **Complex diagrams** | Very dense diagrams may be misinterpreted |
| **Precise counting** | "How many items in this list?" may be wrong |
| **Subtle details** | Minor visual differences may be missed |
| **Spatial reasoning** | Complex layouts may confuse the model |

---

## Audio Capabilities

### Audio Input (Transcription & Understanding)

Modern models can:
- Transcribe speech to text
- Understand spoken questions directly
- Identify speakers in conversations
- Understand tone and context

**Use cases**:
- Meeting transcription
- Voice-based coding assistance
- Processing podcasts or lectures
- Accessibility (voice input)

### Audio Output (Speech Synthesis)

Some systems can:
- Read responses aloud
- Generate natural-sounding speech
- Match different voices or styles

**Current state**: Improving rapidly, but still often sounds synthetic.

### Audio in Practice

For most development tasks, audio is secondary:
- Text remains faster for coding
- Audio helps for accessibility or hands-free work
- Transcription is useful for processing recorded content

---

## Video Understanding

### Current Capabilities (Emerging)

- Understand what's happening in short video clips
- Answer questions about video content
- Extract information from video presentations

### Limitations

- Processing time is significant
- Context is limited (can't watch full movies)
- Understanding is surface-level compared to images
- Not all models support video

### Practical Use

For now, video is most useful for:
- Analyzing short UI recordings (bug reproduction)
- Understanding tutorial clips
- Processing recorded demos

For longer content, consider extracting key frames as images instead.

---

## Choosing the Right Mode

### Decision Framework

```
Is the information primarily visual?
├── Yes → Consider using an image
│   └── Is it complex/hard to describe?
│       ├── Yes → Image is probably better
│       └── No → Text might be simpler
└── No → Stick with text

Is there audio content to process?
├── Yes → Use audio input
│   └── Or transcribe first, then use text
└── No → Not needed

Is there video?
├── Yes → Does it need to be video?
│   ├── Yes → Use video (if supported)
│   └── No → Extract frames as images
└── No → Not needed
```

### Mode Comparison

| Mode | Best For | Avoid When |
|------|----------|------------|
| **Text** | Code, structured data, clear descriptions | Visual information hard to describe |
| **Images** | Screenshots, diagrams, UI, documents | Sensitive content, tiny details |
| **Audio** | Transcription, voice input, accessibility | When text is more efficient |
| **Video** | Motion-dependent info, UI recordings | Long content, when frames suffice |

---

## Practical Exercises

### Exercise 1: Screenshot Workflow

1. Take a screenshot of some code in your editor
2. Ask the AI: "What does this code do?"
3. Compare: How does this compare to copy-pasting the code as text?
4. When would each approach be better?

### Exercise 2: Diagram Understanding

1. Find or draw a simple flowchart
2. Take a photo/screenshot
3. Ask the AI to explain what the flowchart shows
4. Ask it to convert the flowchart to pseudocode

### Exercise 3: Document Processing

1. Find a PDF or image of a document
2. Ask the AI to extract specific information from it
3. Verify accuracy — did it get the details right?

### Exercise 4: Mode Comparison

Describe the same problem two ways:
1. In text only
2. With a screenshot

Compare the AI's responses. Which was more effective?

---

## Multi-Modal Prompting Tips

### Combining Text and Images

```markdown
[Image attached: error message screenshot]

I'm seeing this error when I try to run my application.

Context:
- Python 3.11
- Flask application
- Just installed a new dependency

What's causing this error and how do I fix it?
```

The image shows the exact error; the text provides context the image doesn't have.

### Multiple Images

You can often attach multiple images:

```markdown
[Image 1: current UI design]
[Image 2: mockup of desired design]

How do I modify my CSS to make Image 1 look like Image 2?
Focus on the navigation bar positioning and colors.
```

### Describing What You Want from the Image

Be specific about what you need:

- "Transcribe all text in this image"
- "Describe the layout of this UI"
- "What error message is shown?"
- "Extract the data from this table"
- "What's wrong with this diagram?"

---

## Privacy and Security Considerations

### Before Sharing Images

Ask yourself:
- Does this image contain sensitive information?
- Are there passwords, API keys, or credentials visible?
- Is there personally identifiable information?
- Would it be a problem if this image were stored or logged?

### Sanitizing Images

Before uploading:
- Blur or crop sensitive information
- Use placeholders for secrets (`[REDACTED]`)
- Consider whether a description would suffice

### Remember

When you send images to AI systems:
- They may be processed by external servers
- They may be stored (check provider policies)
- They may be used for training (depends on settings/provider)

Apply the same caution you would with text containing sensitive data.

---

## Key Insights

| Concept | Practical Rule |
|---------|----------------|
| Vision is most useful | Screenshots, diagrams, documents — use images when visual |
| Provide context | Don't just attach; explain what you want |
| Crop to relevance | Less noise = better understanding |
| Know the limits | Tiny text, handwriting, complex details may fail |
| Consider privacy | Images can contain sensitive info — sanitize first |
| Choose appropriately | Text is often simpler; images when visual matters |

---

## Connection to What's Next

Multi-modal expands what you can communicate to AI. Next:

- **Module 08**: Reasoning models — when to use extended thinking
- **Module 09**: Context and memory — managing long conversations

These build on your ability to provide rich context (text + images) and get sophisticated responses.

---

## Reflection Questions

1. Think of a recent problem you solved with AI. Could you have solved it faster with images? Or was text sufficient?

2. What are the privacy implications of sharing screenshots of your work with AI systems? How would you mitigate risks?

3. As video understanding improves, what new use cases might emerge for software development?

---

*Next module: Reasoning Models — when and how to use extended thinking capabilities.*
