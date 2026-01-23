/**
 * LLM Book Chapter metadata and navigation helpers
 */

import type { ChapterMeta, TableOfContents, CourseConfig } from '@repo/book-viewer/lib';

/**
 * All chapters with metadata
 */
export const chapters: ChapterMeta[] = [
  // Tier 1: Foundations (Front-loaded, Day 1)
  { slug: '00-what-is-machine-intelligence', number: '00', title: 'What Is Machine Intelligence?', tier: 1, estimatedMinutes: 25 },
  { slug: '01-how-llms-work-conceptually', number: '01', title: 'How LLMs Work (Conceptually)', tier: 1, estimatedMinutes: 30 },
  { slug: '02-the-capability-inflection-point', number: '02', title: 'The Capability Inflection Point', tier: 1, estimatedMinutes: 20 },
  { slug: '03-capabilities-and-limitations', number: '03', title: 'Capabilities & Limitations', tier: 1, estimatedMinutes: 25 },
  { slug: '04-your-first-conversation', number: '04', title: 'Your First Conversation', tier: 1, estimatedMinutes: 35 },

  // Tier 2: Practical Skills (Front-loaded + Just-in-time)
  { slug: '05-reading-ai-generated-code', number: '05', title: 'Reading AI-Generated Code', tier: 2, estimatedMinutes: 30 },
  { slug: '06-prompting-fundamentals', number: '06', title: 'Prompting Fundamentals', tier: 2, estimatedMinutes: 35 },
  { slug: '07-multi-modal-models', number: '07', title: 'Multi-Modal Models', tier: 2, estimatedMinutes: 25 },
  { slug: '08-reasoning-models', number: '08', title: 'Reasoning Models', tier: 2, estimatedMinutes: 25 },
  { slug: '09-context-and-memory', number: '09', title: 'Context & Memory', tier: 2, estimatedMinutes: 20 },

  // Tier 3: Agentic Development (Just-in-time)
  { slug: '10-prompt-injection-and-ai-security', number: '10', title: 'Prompt Injection & AI Security', tier: 3, estimatedMinutes: 40 },
  { slug: '11-agentic-loops', number: '11', title: 'Agentic Loops', tier: 3, estimatedMinutes: 30 },
  { slug: '12-developer-workflows', number: '12', title: 'Developer Workflows', tier: 3, estimatedMinutes: 25 },
  { slug: '13-the-human-ai-partnership', number: '13', title: 'The Human-AI Partnership', tier: 3, estimatedMinutes: 30 },
  { slug: '14-iterating-with-ai', number: '14', title: 'Iterating with AI', tier: 3, estimatedMinutes: 25 },

  // Tier 4: Judgment & Ethics (Capstone)
  { slug: '15-bias-and-fairness', number: '15', title: 'Bias & Fairness', tier: 4, estimatedMinutes: 30 },
  { slug: '16-privacy-and-data', number: '16', title: 'Privacy & Data', tier: 4, estimatedMinutes: 25 },
  { slug: '17-the-future-of-work', number: '17', title: 'The Future of Work', tier: 4, estimatedMinutes: 30 },
];

/**
 * Get chapter by slug
 */
export function getChapter(slug: string): ChapterMeta | undefined {
  return chapters.find(ch => ch.slug === slug);
}

/**
 * Get next chapter
 */
export function getNextChapter(currentSlug: string): ChapterMeta | undefined {
  const index = chapters.findIndex(ch => ch.slug === currentSlug);
  if (index >= 0 && index < chapters.length - 1) {
    return chapters[index + 1];
  }
  return undefined;
}

/**
 * Get previous chapter
 */
export function getPrevChapter(currentSlug: string): ChapterMeta | undefined {
  const index = chapters.findIndex(ch => ch.slug === currentSlug);
  if (index > 0) {
    return chapters[index - 1];
  }
  return undefined;
}

/**
 * Table of contents organized by tier
 */
export const tableOfContents: TableOfContents = {
  tiers: [
    {
      number: 1,
      title: 'Foundations',
      chapters: chapters.filter(ch => ch.tier === 1),
    },
    {
      number: 2,
      title: 'Practical Skills',
      chapters: chapters.filter(ch => ch.tier === 2),
    },
    {
      number: 3,
      title: 'Agentic Development',
      chapters: chapters.filter(ch => ch.tier === 3),
    },
    {
      number: 4,
      title: 'Judgment & Ethics',
      chapters: chapters.filter(ch => ch.tier === 4),
    },
  ],
};

/**
 * Total reading time for all chapters
 */
export const totalReadingTime = chapters.reduce((sum, ch) => sum + ch.estimatedMinutes, 0);

/**
 * Tier descriptions for UI
 */
export const tierDescriptions: Record<1 | 2 | 3 | 4, string> = {
  1: 'Core concepts for understanding AI and LLMs',
  2: 'Essential skills for working with AI tools',
  3: 'Building with autonomous AI agents',
  4: 'Ethical considerations and future perspectives',
};

/**
 * Course configuration for the LLM book
 */
export const courseConfig: CourseConfig = {
  courseId: 'llm',
  title: 'LLM Fundamentals',
  chapters,
  tierDescriptions,
  tableOfContents,
  totalReadingTime,
};
