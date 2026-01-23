/**
 * ConceptCard - Highlights key concepts for spaced repetition
 *
 * Pedagogical basis: Dual coding theory, spaced repetition
 * Key concepts are visually distinct and tracked for later review
 *
 * Note: This component is rendered through MDX Content in Astro, so it
 * cannot use React hooks directly. State management is done via DOM/script.
 */

interface ConceptCardProps {
  id: string;
  chapterSlug: string;
  children: React.ReactNode;
}

export function ConceptCard({ id, chapterSlug, children }: ConceptCardProps) {
  return (
    <div
      data-concept-id={id}
      data-chapter-slug={chapterSlug}
      className="concept-card my-6 border-l-4 border-concept-border bg-concept-light dark:bg-concept-dark rounded-r-lg overflow-hidden"
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span>Key Concept</span>
          </div>
          <button
            className="concept-review-btn text-xs px-2 py-1 rounded transition-colors bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            title="Mark as reviewed for spaced repetition"
          >
            Mark reviewed
          </button>
        </div>
        <div className="text-gray-800 dark:text-gray-200 prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ConceptCard;
