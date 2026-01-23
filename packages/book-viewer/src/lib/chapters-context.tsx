/**
 * Chapters Context
 * Provides chapter metadata to React components without direct imports
 */

import { createContext, useContext, type ReactNode } from 'react';
import type { ChapterMeta, TableOfContents } from './types';

export interface ChaptersContextValue {
  /** All chapters */
  chapters: ChapterMeta[];
  /** Table of contents organized by tier */
  tableOfContents: TableOfContents;
  /** Tier descriptions */
  tierDescriptions: Record<1 | 2 | 3, string>;
  /** Total reading time */
  totalReadingTime: number;
  /** Get chapter by slug */
  getChapter: (slug: string) => ChapterMeta | undefined;
  /** Get next chapter */
  getNextChapter: (currentSlug: string) => ChapterMeta | undefined;
  /** Get previous chapter */
  getPrevChapter: (currentSlug: string) => ChapterMeta | undefined;
}

const ChaptersContext = createContext<ChaptersContextValue | null>(null);

export interface ChaptersProviderProps {
  children: ReactNode;
  chapters: ChapterMeta[];
  tierDescriptions: Record<1 | 2 | 3, string>;
}

/**
 * Build table of contents from chapters
 */
function buildTableOfContents(chapters: ChapterMeta[]): TableOfContents {
  return {
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
}

/**
 * Provider component for chapters data
 */
export function ChaptersProvider({ children, chapters, tierDescriptions }: ChaptersProviderProps) {
  const tableOfContents = buildTableOfContents(chapters);
  const totalReadingTime = chapters.reduce((sum, ch) => sum + ch.estimatedMinutes, 0);

  const getChapter = (slug: string) => chapters.find(ch => ch.slug === slug);

  const getNextChapter = (currentSlug: string) => {
    const index = chapters.findIndex(ch => ch.slug === currentSlug);
    if (index >= 0 && index < chapters.length - 1) {
      return chapters[index + 1];
    }
    return undefined;
  };

  const getPrevChapter = (currentSlug: string) => {
    const index = chapters.findIndex(ch => ch.slug === currentSlug);
    if (index > 0) {
      return chapters[index - 1];
    }
    return undefined;
  };

  const value: ChaptersContextValue = {
    chapters,
    tableOfContents,
    tierDescriptions,
    totalReadingTime,
    getChapter,
    getNextChapter,
    getPrevChapter,
  };

  return (
    <ChaptersContext.Provider value={value}>
      {children}
    </ChaptersContext.Provider>
  );
}

/**
 * Hook to access chapters data
 * Must be used within a ChaptersProvider
 */
export function useChapters(): ChaptersContextValue {
  const context = useContext(ChaptersContext);
  if (!context) {
    throw new Error('useChapters must be used within a ChaptersProvider');
  }
  return context;
}

/**
 * Hook to access chapters data, with fallback for optional usage
 * Returns null if not within a provider
 */
export function useChaptersOptional(): ChaptersContextValue | null {
  return useContext(ChaptersContext);
}
