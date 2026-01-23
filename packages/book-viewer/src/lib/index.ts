/**
 * Library exports for @repo/book-viewer
 */

// Types
export * from './types';

// Accessibility utilities
export {
  getFocusableElements,
  createFocusTrap,
  useRovingTabindex,
  announce,
} from './a11y';

// Progress tracking
export {
  progressStore,
  initProgress,
  updateChapterProgress,
  startChapter,
  completeChapter,
  updateReadProgress,
  revealQuestion,
  updateCheckpoint,
  reviewConcept,
  updateSettings,
  addBookmark,
  removeBookmark,
  isBookmarked,
  getBookmarks,
  createCourseProgress,
  chaptersCompleted,
  exportProgress,
  importProgress,
  resetProgress,
} from './progress';

// Spaced repetition
export {
  getNextInterval,
  isConceptDue,
  getConceptsDueForReview,
  calculateRetentionStrength,
  sortByUrgency,
  getReviewStats,
} from './spaced-repetition';

// URL utilities
export {
  initUrl,
  getBasePath,
  url,
  getUrl,
} from './url';

// Chapters context for React components
export {
  ChaptersProvider,
  useChapters,
  useChaptersOptional,
} from './chapters-context';
export type { ChaptersContextValue, ChaptersProviderProps } from './chapters-context';

// Remark/Rehype plugins
export { remarkPedagogical } from './remark-pedagogical';
export { rehypeToc } from './rehype-toc';
export type { TocEntry, TocData, RehypeTocOptions } from './rehype-toc';
