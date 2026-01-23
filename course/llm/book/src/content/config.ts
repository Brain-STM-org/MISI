/**
 * Astro Content Collections configuration
 *
 * Content is sourced from the chapters/ folder, which contains
 * MDX files copied/synced from ../../../book/
 */

import { defineCollection, z } from 'astro:content';

/**
 * Chapters collection schema
 * Most metadata is derived from filename, but frontmatter can override
 */
const chaptersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Optional overrides - usually derived from filename
    title: z.string().optional(),
    description: z.string().optional(),

    // Tier (1-4) - LLM has 4 tiers
    tier: z.number().min(1).max(4).optional(),

    // Estimated reading time in minutes
    estimatedMinutes: z.number().optional(),

    // Whether this chapter is ready for display
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  chapters: chaptersCollection,
};
