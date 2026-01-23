/**
 * Spaced Repetition System
 * Based on simplified SM-2 algorithm
 *
 * Research basis: Ebbinghaus forgetting curve, Pimsleur intervals
 * Intervals: 1 day, 3 days, 7 days, 14 days, 30 days
 */

import { REVIEW_INTERVALS } from './types';
import type { UserProgress, Concept } from './types';

/**
 * Calculate the next review interval based on review count
 */
export function getNextInterval(reviewCount: number): number {
  const index = Math.min(reviewCount, REVIEW_INTERVALS.length - 1);
  return REVIEW_INTERVALS[index];
}

/**
 * Check if a concept is due for review
 */
export function isConceptDue(
  lastReviewDate: string | undefined,
  reviewCount: number
): boolean {
  if (!lastReviewDate) return false; // Never reviewed = not due (needs initial exposure)

  const lastReview = new Date(lastReviewDate);
  const now = new Date();
  const daysSince = Math.floor((now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));

  const interval = getNextInterval(reviewCount);
  return daysSince >= interval;
}

/**
 * Get concepts due for review from user progress
 */
export function getConceptsDueForReview(
  progress: UserProgress,
  allConcepts: Concept[]
): Concept[] {
  const dueConcepts: Concept[] = [];

  for (const concept of allConcepts) {
    const chapterProgress = progress.chapters[concept.chapterSlug];
    if (!chapterProgress) continue;

    const reviews = chapterProgress.conceptsReviewed?.[concept.id];
    if (!reviews || reviews.length === 0) continue;

    const lastReview = reviews[reviews.length - 1];
    const reviewCount = reviews.length;

    if (isConceptDue(lastReview, reviewCount)) {
      dueConcepts.push(concept);
    }
  }

  return dueConcepts;
}

/**
 * Calculate review strength (0-1) based on review history
 * Higher = better retention expected
 */
export function calculateRetentionStrength(reviews: string[]): number {
  if (!reviews || reviews.length === 0) return 0;

  const now = new Date();
  const lastReview = new Date(reviews[reviews.length - 1]);
  const daysSince = (now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24);

  // Decay factor based on Ebbinghaus curve
  // Strength decreases over time but slower with more reviews
  const reviewBonus = Math.min(reviews.length * 0.1, 0.5);
  const decayRate = 0.1 - reviewBonus * 0.05;
  const strength = Math.exp(-decayRate * daysSince);

  return Math.max(0, Math.min(1, strength));
}

/**
 * Sort concepts by urgency (most urgent first)
 */
export function sortByUrgency(
  concepts: Concept[],
  progress: UserProgress
): Concept[] {
  return [...concepts].sort((a, b) => {
    const aProgress = progress.chapters[a.chapterSlug];
    const bProgress = progress.chapters[b.chapterSlug];

    const aReviews = aProgress?.conceptsReviewed?.[a.id] || [];
    const bReviews = bProgress?.conceptsReviewed?.[b.id] || [];

    const aStrength = calculateRetentionStrength(aReviews);
    const bStrength = calculateRetentionStrength(bReviews);

    // Lower strength = more urgent
    return aStrength - bStrength;
  });
}

/**
 * Get review statistics
 */
export function getReviewStats(progress: UserProgress) {
  let totalConcepts = 0;
  let reviewedConcepts = 0;
  let totalReviews = 0;

  for (const chapterProgress of Object.values(progress.chapters)) {
    if (chapterProgress.conceptsReviewed) {
      for (const reviews of Object.values(chapterProgress.conceptsReviewed)) {
        totalConcepts++;
        if (reviews.length > 0) {
          reviewedConcepts++;
          totalReviews += reviews.length;
        }
      }
    }
  }

  return {
    totalConcepts,
    reviewedConcepts,
    totalReviews,
    averageReviews: reviewedConcepts > 0 ? totalReviews / reviewedConcepts : 0,
  };
}
