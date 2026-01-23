/**
 * SWE Book Chapter metadata and navigation helpers
 */

import type { ChapterMeta, TableOfContents, CourseConfig } from '@repo/book-viewer/lib';

/**
 * All chapters with metadata
 */
export const chapters: ChapterMeta[] = [
  // Tier 1: Foundations
  { slug: '00-your-development-environment', number: '00', title: 'Your Development Environment', tier: 1, estimatedMinutes: 20 },
  { slug: '01-what-is-source-code', number: '01', title: 'What is Source Code?', tier: 1, estimatedMinutes: 20 },
  { slug: '02-github-setup-guide', number: '02', title: 'GitHub Setup Guide', tier: 1, estimatedMinutes: 30 },
  { slug: '03-understanding-diffs', number: '03', title: 'Understanding Diffs', tier: 1, estimatedMinutes: 25 },
  { slug: '04-your-first-commit', number: '04', title: 'Your First Commit', tier: 1, estimatedMinutes: 30 },

  // Tier 2: Collaboration & Quality
  { slug: '05-branches-and-merging', number: '05', title: 'Branches and Merging', tier: 2, estimatedMinutes: 30 },
  { slug: '06-pull-requests', number: '06', title: 'Pull Requests', tier: 2, estimatedMinutes: 30 },
  { slug: '07-testing-fundamentals', number: '07', title: 'Testing Fundamentals', tier: 2, estimatedMinutes: 25 },
  { slug: '08-debugging-techniques', number: '08', title: 'Debugging Techniques', tier: 2, estimatedMinutes: 25 },
  { slug: '09-dependencies-packages', number: '09', title: 'Dependencies & Packages', tier: 2, estimatedMinutes: 20 },

  // Tier 3: Professional Practices
  { slug: '10-build-pipelines', number: '10', title: 'Build Pipelines', tier: 3, estimatedMinutes: 20 },
  { slug: '11-o11y-understanding-your-code', number: '11', title: 'O11y: Understanding Your Code', tier: 3, estimatedMinutes: 25 },
  { slug: '12-iterative-design', number: '12', title: 'Iterative Design', tier: 3, estimatedMinutes: 20 },
  { slug: '13-timeless-principles', number: '13', title: 'Timeless Principles', tier: 3, estimatedMinutes: 25 },
  { slug: '14-communication', number: '14', title: 'Communication', tier: 3, estimatedMinutes: 20 },
  { slug: '15-ethics-in-software', number: '15', title: 'Ethics in Software', tier: 3, estimatedMinutes: 45 },
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
      title: 'Collaboration & Quality',
      chapters: chapters.filter(ch => ch.tier === 2),
    },
    {
      number: 3,
      title: 'Professional Practices',
      chapters: chapters.filter(ch => ch.tier === 3),
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
export const tierDescriptions: Record<1 | 2 | 3, string> = {
  1: 'Core tools and concepts every developer needs',
  2: 'Working with others and ensuring quality',
  3: 'Practices that distinguish professionals',
};

/**
 * Course configuration for the SWE book
 */
export const courseConfig: CourseConfig = {
  courseId: 'swe',
  title: 'Software Engineering Fundamentals',
  chapters,
  tierDescriptions,
  tableOfContents,
  totalReadingTime,
};
