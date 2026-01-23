/**
 * Review Prompt Component
 * Shows a gentle reminder when concepts are due for review
 * Appears on the homepage, not intrusive
 */
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { progressStore } from '../lib/progress';
import { isConceptDue } from '../lib/spaced-repetition';
import { useChapters } from '../lib/chapters-context';
import { getUrl } from '../lib/url';

interface DueConcept {
  chapterSlug: string;
  chapterTitle: string;
  conceptId: string;
  daysSinceReview: number;
}

export default function ReviewPrompt() {
  const { chapters } = useChapters();
  const progress = useStore(progressStore);
  const [dueConcepts, setDueConcepts] = useState<DueConcept[]>([]);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const due: DueConcept[] = [];

    for (const [chapterSlug, chapterProgress] of Object.entries(progress.chapters)) {
      if (!chapterProgress.conceptsReviewed) continue;

      const chapter = chapters.find(c => c.slug === chapterSlug);
      if (!chapter) continue;

      for (const [conceptId, reviews] of Object.entries(chapterProgress.conceptsReviewed)) {
        if (!reviews || reviews.length === 0) continue;

        const lastReview = reviews[reviews.length - 1];
        const reviewCount = reviews.length;

        if (isConceptDue(lastReview, reviewCount)) {
          const lastReviewDate = new Date(lastReview);
          const now = new Date();
          const daysSince = Math.floor((now.getTime() - lastReviewDate.getTime()) / (1000 * 60 * 60 * 24));

          due.push({
            chapterSlug,
            chapterTitle: chapter.title,
            conceptId,
            daysSinceReview: daysSince,
          });
        }
      }
    }

    // Sort by most overdue first
    due.sort((a, b) => b.daysSinceReview - a.daysSinceReview);
    setDueConcepts(due);
  }, [progress, chapters]);

  // Check if dismissed today
  useEffect(() => {
    const dismissedDate = localStorage.getItem('book-review-dismissed');
    if (dismissedDate) {
      const today = new Date().toDateString();
      if (dismissedDate === today) {
        setIsDismissed(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('book-review-dismissed', new Date().toDateString());
    setIsDismissed(true);
  };

  if (isDismissed || dueConcepts.length === 0) {
    return null;
  }

  // Group by chapter
  const byChapter = dueConcepts.reduce((acc, concept) => {
    if (!acc[concept.chapterSlug]) {
      acc[concept.chapterSlug] = {
        title: concept.chapterTitle,
        count: 0,
      };
    }
    acc[concept.chapterSlug].count++;
    return acc;
  }, {} as Record<string, { title: string; count: number }>);

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 mb-8 border border-purple-100 dark:border-purple-800">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-lg">
            <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-purple-900 dark:text-purple-100">
              Time to Review
            </h3>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              {dueConcepts.length} concept{dueConcepts.length !== 1 ? 's' : ''} ready for review
            </p>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          aria-label="Dismiss"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {Object.entries(byChapter).slice(0, 3).map(([slug, data]) => (
          <a
            key={slug}
            href={getUrl(`/chapters/${slug}`)}
            className="block px-3 py-2 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700 dark:text-gray-300">{data.title}</span>
              <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                {data.count} concept{data.count !== 1 ? 's' : ''}
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={getUrl('/review')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
        >
          Start Review Session
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <button
          onClick={handleDismiss}
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Maybe later
        </button>
      </div>

      <p className="mt-3 text-xs text-purple-600 dark:text-purple-400">
        Spaced review helps you remember longer — revisiting at optimal intervals strengthens memory.
      </p>
    </div>
  );
}
