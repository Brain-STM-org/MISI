/**
 * Concept Review Sidebar
 * Shows key concepts from the current chapter for quick review
 * Collapsible so it doesn't clutter the reading experience
 */
import { useState, useEffect } from 'react';

interface Concept {
  id: string;
  title: string;
  content: string;
}

interface Props {
  chapterSlug: string;
}

export default function ConceptReviewSidebar({ chapterSlug }: Props) {
  const [concepts, setConcepts] = useState<Concept[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedConcepts, setExpandedConcepts] = useState<Set<string>>(new Set());

  // Extract concepts from the page
  useEffect(() => {
    // Wait for page to render
    const timer = setTimeout(() => {
      const conceptElements = document.querySelectorAll('[data-concept-id]');
      const found: Concept[] = [];

      conceptElements.forEach((el) => {
        const id = el.getAttribute('data-concept-id') || '';
        const titleEl = el.querySelector('strong, b');
        const title = titleEl?.textContent || 'Key Concept';
        const content = el.textContent?.replace(title, '').trim() || '';

        found.push({ id, title, content: content.slice(0, 200) });
      });

      setConcepts(found);
    }, 500);

    return () => clearTimeout(timer);
  }, [chapterSlug]);

  const toggleConcept = (id: string) => {
    setExpandedConcepts((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const scrollToConcept = (id: string) => {
    const el = document.querySelector(`[data-concept-id="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Briefly highlight
      el.classList.add('ring-2', 'ring-blue-500');
      setTimeout(() => el.classList.remove('ring-2', 'ring-blue-500'), 2000);
    }
  };

  if (concepts.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-30">
      {/* Collapsed button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          title="Review key concepts"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="font-medium">{concepts.length} Concepts</span>
        </button>
      )}

      {/* Expanded panel */}
      {isExpanded && (
        <div className="w-80 max-h-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-purple-50 dark:bg-purple-900/30 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Key Concepts
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Concept list */}
          <div className="overflow-y-auto max-h-72">
            {concepts.map((concept, index) => (
              <div
                key={concept.id || index}
                className="border-b border-gray-100 dark:border-gray-700 last:border-b-0"
              >
                <button
                  onClick={() => toggleConcept(concept.id)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white text-sm">
                      {concept.title}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        expandedConcepts.has(concept.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedConcepts.has(concept.id) && (
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {concept.content}...
                    </p>
                    <button
                      onClick={() => scrollToConcept(concept.id)}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Jump to concept →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer tip */}
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-xs text-gray-500 dark:text-gray-400">
            Click to expand, then jump to review in context
          </div>
        </div>
      )}
    </div>
  );
}
