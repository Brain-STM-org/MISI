/**
 * Type definitions for the SWE Book Viewer
 * Pedagogically-informed data structures for tracking learning progress
 */

export interface Chapter {
  slug: string;
  number: string;
  title: string;
  description: string;
  tier: 1 | 2 | 3;
  estimatedMinutes: number;
  concepts: Concept[];
  questions: Question[];
  checkpoints: Checkpoint[];
}

export interface Concept {
  id: string;
  text: string;
  chapterSlug: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
  chapterSlug: string;
}

export interface Checkpoint {
  id: string;
  items: string[];
  chapterSlug: string;
}

/**
 * User progress tracking
 * Based on spaced repetition and metacognition research
 */
export interface Bookmark {
  chapterSlug: string;
  headingSlug: string;
  headingText: string;
  createdAt: string;
  note?: string;
}

export interface UserProgress {
  chapters: Record<string, ChapterProgress>;
  bookmarks: Bookmark[];
  settings: UserSettings;
  lastVisited?: string;
  startedAt?: string;
}

export interface ChapterProgress {
  started?: string;       // ISO date string
  completed?: string;     // ISO date string
  readProgress: number;   // 0-100 percentage
  scrollPosition?: number;
  checkpoints: Record<string, CheckpointProgress>;
  questionsRevealed: string[];  // IDs of questions user has revealed
  conceptsReviewed: Record<string, string[]>;  // conceptId -> array of review dates
}

export interface CheckpointProgress {
  confidence: number;     // 1-5 self-assessment
  items: boolean[];       // Individual checkbox states
  completedAt?: string;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'sm' | 'md' | 'lg';
  showReadingTime: boolean;
  enableReviewPrompts: boolean;
}

/**
 * Spaced repetition intervals (in days)
 * Based on SM-2 algorithm simplified
 */
export const REVIEW_INTERVALS = [1, 3, 7, 14, 30] as const;

/**
 * Chapter metadata for navigation
 */
export interface ChapterMeta {
  slug: string;
  number: string;
  title: string;
  tier: 1 | 2 | 3;
  estimatedMinutes: number;
}

/**
 * Table of contents structure
 */
export interface TableOfContents {
  tiers: {
    number: 1 | 2 | 3;
    title: string;
    chapters: ChapterMeta[];
  }[];
}
