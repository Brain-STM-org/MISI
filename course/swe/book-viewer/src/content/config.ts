/**
 * Astro Content Collections configuration
 * Defines the schema for book chapters
 */

import { defineCollection, z } from 'astro:content';

const chaptersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    tier: z.number().min(1).max(3).optional(),
    estimatedMinutes: z.number().optional(),
  }),
});

export const collections = {
  chapters: chaptersCollection,
};
