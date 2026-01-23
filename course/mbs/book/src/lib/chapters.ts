/**
 * Mind-Body Book Chapter metadata and navigation helpers
 */

import type { ChapterMeta, TableOfContents, CourseConfig } from '@repo/book-viewer/lib';

/**
 * All chapters with metadata
 */
export const chapters: ChapterMeta[] = [
  // Tier 1: Essential Foundations
  { slug: '00-the-sustainable-developer', number: '00', title: 'The Sustainable Developer', tier: 1, estimatedMinutes: 5 },
  { slug: '01-your-physical-setup', number: '01', title: 'Your Physical Setup', tier: 1, estimatedMinutes: 12 },
  { slug: '02-the-breath-as-tool', number: '02', title: 'The Breath as Tool', tier: 1, estimatedMinutes: 10 },
  { slug: '03-movement-for-the-mind', number: '03', title: 'Movement for the Mind', tier: 1, estimatedMinutes: 15 },
  { slug: '04-rhythm-of-deep-work', number: '04', title: 'Rhythm of Deep Work', tier: 1, estimatedMinutes: 12 },

  // Tier 2: Integration & Practice
  { slug: '05-presence-in-collaboration', number: '05', title: 'Presence in Collaboration', tier: 2, estimatedMinutes: 12 },
  { slug: '06-facilitators-guide', number: '06', title: "Facilitator's Guide", tier: 2, estimatedMinutes: 15 },
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
      title: 'Essential Foundations',
      chapters: chapters.filter(ch => ch.tier === 1),
    },
    {
      number: 2,
      title: 'Integration & Practice',
      chapters: chapters.filter(ch => ch.tier === 2),
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
export const tierDescriptions: Record<1 | 2, string> = {
  1: 'Physical setup, breath, movement, and work rhythms',
  2: 'Collaboration practices and teaching others',
};

/**
 * Course configuration for the Mind-Body-Spirit book
 */
export const courseConfig: CourseConfig = {
  courseId: 'mbs',
  title: 'Sustainable Developer',
  chapters,
  tierDescriptions,
  tableOfContents,
  totalReadingTime,
};
