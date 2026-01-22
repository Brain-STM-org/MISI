/**
 * Progress tracking store using nanostores
 * Persists to localStorage for privacy (no backend required)
 */

import { atom, computed } from 'nanostores';
import type { UserProgress, ChapterProgress, UserSettings, CheckpointProgress } from './types';

const STORAGE_KEY = 'swe-book-progress';

// Default settings
const defaultSettings: UserSettings = {
  theme: 'system',
  fontSize: 'md',
  showReadingTime: true,
  enableReviewPrompts: true,
};

// Default progress state
const defaultProgress: UserProgress = {
  chapters: {},
  settings: defaultSettings,
};

/**
 * Load progress from localStorage
 */
function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...defaultProgress,
        ...parsed,
        settings: { ...defaultSettings, ...parsed.settings },
      };
    }
  } catch (e) {
    console.warn('Failed to load progress from localStorage:', e);
  }
  return defaultProgress;
}

/**
 * Save progress to localStorage
 */
function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Failed to save progress to localStorage:', e);
  }
}

// Main progress store
export const progressStore = atom<UserProgress>(defaultProgress);

// Initialize from localStorage on client
export function initProgress(): void {
  const loaded = loadProgress();
  progressStore.set(loaded);
}

// Subscribe to changes and persist
progressStore.subscribe((progress) => {
  saveProgress(progress);
});

/**
 * Update chapter progress
 */
export function updateChapterProgress(
  chapterSlug: string,
  updates: Partial<ChapterProgress>
): void {
  const current = progressStore.get();
  const chapterProgress = current.chapters[chapterSlug] || {
    readProgress: 0,
    checkpoints: {},
    questionsRevealed: [],
    conceptsReviewed: {},
  };

  progressStore.set({
    ...current,
    lastVisited: chapterSlug,
    chapters: {
      ...current.chapters,
      [chapterSlug]: {
        ...chapterProgress,
        ...updates,
      },
    },
  });
}

/**
 * Mark chapter as started
 */
export function startChapter(chapterSlug: string): void {
  const current = progressStore.get();
  if (!current.chapters[chapterSlug]?.started) {
    updateChapterProgress(chapterSlug, {
      started: new Date().toISOString(),
    });
  }

  // Set course start date if not set
  if (!current.startedAt) {
    progressStore.set({
      ...progressStore.get(),
      startedAt: new Date().toISOString(),
    });
  }
}

/**
 * Mark chapter as completed
 */
export function completeChapter(chapterSlug: string): void {
  updateChapterProgress(chapterSlug, {
    completed: new Date().toISOString(),
    readProgress: 100,
  });
}

/**
 * Update read progress (scroll-based)
 */
export function updateReadProgress(chapterSlug: string, progress: number): void {
  updateChapterProgress(chapterSlug, {
    readProgress: Math.min(100, Math.max(0, progress)),
  });
}

/**
 * Mark a question as revealed (for active recall tracking)
 */
export function revealQuestion(chapterSlug: string, questionId: string): void {
  const current = progressStore.get();
  const chapterProgress = current.chapters[chapterSlug];
  const revealed = chapterProgress?.questionsRevealed || [];

  if (!revealed.includes(questionId)) {
    updateChapterProgress(chapterSlug, {
      questionsRevealed: [...revealed, questionId],
    });
  }
}

/**
 * Update checkpoint progress (self-assessment)
 */
export function updateCheckpoint(
  chapterSlug: string,
  checkpointId: string,
  updates: Partial<CheckpointProgress>
): void {
  const current = progressStore.get();
  const chapterProgress = current.chapters[chapterSlug];
  const checkpoints = chapterProgress?.checkpoints || {};
  const checkpoint = checkpoints[checkpointId] || {
    confidence: 0,
    items: [],
  };

  updateChapterProgress(chapterSlug, {
    checkpoints: {
      ...checkpoints,
      [checkpointId]: {
        ...checkpoint,
        ...updates,
        completedAt: updates.confidence ? new Date().toISOString() : checkpoint.completedAt,
      },
    },
  });
}

/**
 * Record concept review (for spaced repetition)
 */
export function reviewConcept(chapterSlug: string, conceptId: string): void {
  const current = progressStore.get();
  const chapterProgress = current.chapters[chapterSlug];
  const conceptsReviewed = chapterProgress?.conceptsReviewed || {};
  const reviews = conceptsReviewed[conceptId] || [];

  updateChapterProgress(chapterSlug, {
    conceptsReviewed: {
      ...conceptsReviewed,
      [conceptId]: [...reviews, new Date().toISOString()],
    },
  });
}

/**
 * Update user settings
 */
export function updateSettings(updates: Partial<UserSettings>): void {
  const current = progressStore.get();
  progressStore.set({
    ...current,
    settings: {
      ...current.settings,
      ...updates,
    },
  });
}

/**
 * Computed: Overall course progress
 */
export const courseProgress = computed(progressStore, (progress) => {
  const chapters = Object.values(progress.chapters);
  if (chapters.length === 0) return 0;

  const totalProgress = chapters.reduce((sum, ch) => sum + (ch.readProgress || 0), 0);
  return Math.round(totalProgress / 16); // 16 chapters total
});

/**
 * Computed: Chapters completed count
 */
export const chaptersCompleted = computed(progressStore, (progress) => {
  return Object.values(progress.chapters).filter(ch => ch.completed).length;
});

/**
 * Export progress as JSON (for backup)
 */
export function exportProgress(): string {
  return JSON.stringify(progressStore.get(), null, 2);
}

/**
 * Import progress from JSON (restore backup)
 */
export function importProgress(json: string): boolean {
  try {
    const parsed = JSON.parse(json);
    progressStore.set({
      ...defaultProgress,
      ...parsed,
      settings: { ...defaultSettings, ...parsed.settings },
    });
    return true;
  } catch (e) {
    console.error('Failed to import progress:', e);
    return false;
  }
}

/**
 * Reset all progress
 */
export function resetProgress(): void {
  progressStore.set(defaultProgress);
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}
