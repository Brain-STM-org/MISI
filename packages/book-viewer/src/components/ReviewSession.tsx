/**
 * Review Session Component
 * Interactive review interface for spaced repetition
 */
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { progressStore, reviewConcept } from '../lib/progress';
import { isConceptDue, getNextInterval, calculateRetentionStrength } from '../lib/spaced-repetition';
import { useChapters } from '../lib/chapters-context';
import { announce } from '../lib/a11y';
import { getUrl } from '../lib/url';

interface ReviewItem {
  chapterSlug: string;
  chapterTitle: string;
  conceptId: string;
  reviewCount: number;
  lastReview: string;
  nextInterval: number;
}

export default function ReviewSession() {
  const { chapters } = useChapters();
  const progress = useStore(progressStore);
  const [dueItems, setDueItems] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  // Gather due concepts
  useEffect(() => {
    const due: ReviewItem[] = [];

    for (const [chapterSlug, chapterProgress] of Object.entries(progress.chapters)) {
      if (!chapterProgress.conceptsReviewed) continue;

      const chapter = chapters.find(c => c.slug === chapterSlug);
      if (!chapter) continue;

      for (const [conceptId, reviews] of Object.entries(chapterProgress.conceptsReviewed)) {
        if (!reviews || reviews.length === 0) continue;

        const lastReview = reviews[reviews.length - 1];
        const reviewCount = reviews.length;

        if (isConceptDue(lastReview, reviewCount)) {
          due.push({
            chapterSlug,
            chapterTitle: chapter.title,
            conceptId,
            reviewCount,
            lastReview,
            nextInterval: getNextInterval(reviewCount),
          });
        }
      }
    }

    // Sort by retention strength (lowest first = most urgent)
    due.sort((a, b) => {
      const aStrength = calculateRetentionStrength(
        progress.chapters[a.chapterSlug]?.conceptsReviewed?.[a.conceptId] || []
      );
      const bStrength = calculateRetentionStrength(
        progress.chapters[b.chapterSlug]?.conceptsReviewed?.[b.conceptId] || []
      );
      return aStrength - bStrength;
    });

    setDueItems(due);
  }, [progress, chapters]);

  const currentItem = dueItems[currentIndex];

  const handleReviewed = () => {
    if (!currentItem) return;

    // Mark as reviewed
    reviewConcept(currentItem.chapterSlug, currentItem.conceptId);
    setReviewed(r => r + 1);

    // Move to next
    if (currentIndex < dueItems.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowAnswer(false);
      announce(`Concept reviewed. Moving to concept ${currentIndex + 2} of ${dueItems.length}`);
    } else {
      setSessionComplete(true);
      announce('Review session complete');
    }
  };

  const handleSkip = () => {
    if (currentIndex < dueItems.length - 1) {
      setCurrentIndex(i => i + 1);
      setShowAnswer(false);
      announce(`Skipped. Moving to concept ${currentIndex + 2} of ${dueItems.length}`);
    } else {
      setSessionComplete(true);
      announce('Review session complete');
    }
  };

  // No items to review
  if (dueItems.length === 0 && !sessionComplete) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          All caught up!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          No concepts are due for review right now. Keep reading and marking concepts as reviewed to build your review queue.
        </p>
        <a
          href={getUrl('/')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Learning
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    );
  }

  // Session complete
  if (sessionComplete) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
          <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Session Complete!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          You reviewed <strong>{reviewed}</strong> concept{reviewed !== 1 ? 's' : ''}.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
          Great work! Come back tomorrow for your next review.
        </p>
        <a
          href={getUrl('/')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Progress indicator with live region */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span id="review-progress-label">Progress</span>
          <span aria-live="polite">{currentIndex + 1} of {dueItems.length}</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 transition-all duration-300"
            style={{ width: `${((currentIndex) / dueItems.length) * 100}%` }}
            role="progressbar"
            aria-valuenow={currentIndex}
            aria-valuemin={0}
            aria-valuemax={dueItems.length}
            aria-labelledby="review-progress-label"
          />
        </div>
      </div>

      {/* Current concept card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 dark:text-gray-500">From chapter</span>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {currentItem.chapterTitle}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 dark:text-gray-500">Reviews</span>
              <p className="font-medium text-gray-900 dark:text-white">
                {currentItem.reviewCount}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Concept: {currentItem.conceptId}
            </span>
          </div>

          {!showAnswer ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try to recall this concept before revealing...
              </p>
              <button
                onClick={() => setShowAnswer(true)}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
              >
                Show Concept
              </button>
            </div>
          ) : (
            <div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg mb-6">
                <p className="text-gray-800 dark:text-gray-200">
                  Visit the chapter to review this concept in context.
                </p>
                <a
                  href={getUrl(`/chapters/${currentItem.chapterSlug}`)}
                  className="inline-flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 hover:underline mt-2"
                >
                  Open chapter
                </a>
              </div>

              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handleSkip}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Skip
                </button>
                <button
                  onClick={handleReviewed}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  I Reviewed This
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
                Next review in {getNextInterval(currentItem.reviewCount + 1)} days
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
