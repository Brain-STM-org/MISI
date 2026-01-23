/**
 * Search Modal Component
 * Opens with Cmd/Ctrl+K, searches across all chapters
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import { createFocusTrap, announce } from '../lib/a11y';

interface SearchResult {
  slug: string;
  title: string;
  chapter: string;
  excerpt: string;
  headingSlug?: string;
  headingText?: string;
}

interface SearchIndex {
  chapters: Array<{
    slug: string;
    title: string;
    chapter: string;
    content: string;
    headings: Array<{ slug: string; text: string; content: string }>;
  }>;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const cleanupFocusTrapRef = useRef<(() => void) | null>(null);

  // Load search index
  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => {
        setSearchIndex(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load search index:', err);
        setLoading(false);
      });
  }, []);

  // Focus trap and input focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);

      // Set up focus trap after a brief delay to ensure modal is rendered
      const timer = setTimeout(() => {
        if (modalRef.current) {
          cleanupFocusTrapRef.current = createFocusTrap(modalRef.current);
        }
        inputRef.current?.focus();
      }, 10);

      return () => {
        clearTimeout(timer);
        cleanupFocusTrapRef.current?.();
        cleanupFocusTrapRef.current = null;
      };
    }
  }, [isOpen]);

  // Search function
  const search = useCallback((q: string) => {
    if (!searchIndex || q.length < 2) {
      setResults([]);
      return;
    }

    const queryLower = q.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 1);
    const found: SearchResult[] = [];

    for (const chapter of searchIndex.chapters) {
      // Search in chapter title
      if (chapter.title.toLowerCase().includes(queryLower)) {
        found.push({
          slug: chapter.slug,
          title: chapter.title,
          chapter: chapter.chapter,
          excerpt: getExcerpt(chapter.content, queryLower),
        });
        continue;
      }

      // Search in chapter content
      const contentLower = chapter.content.toLowerCase();
      const allWordsMatch = queryWords.every(word => contentLower.includes(word));

      if (allWordsMatch || contentLower.includes(queryLower)) {
        found.push({
          slug: chapter.slug,
          title: chapter.title,
          chapter: chapter.chapter,
          excerpt: getExcerpt(chapter.content, queryLower),
        });
        continue;
      }

      // Search in headings
      for (const heading of chapter.headings) {
        const headingLower = heading.text.toLowerCase();
        const headingContentLower = heading.content.toLowerCase();

        if (headingLower.includes(queryLower) || headingContentLower.includes(queryLower)) {
          found.push({
            slug: chapter.slug,
            title: chapter.title,
            chapter: chapter.chapter,
            excerpt: getExcerpt(heading.content, queryLower),
            headingSlug: heading.slug,
            headingText: heading.text,
          });
          break; // Only one result per chapter
        }
      }
    }

    const limitedResults = found.slice(0, 10); // Limit to 10 results
    setResults(limitedResults);
    setSelectedIndex(0);

    // Announce result count to screen readers
    if (limitedResults.length === 0) {
      announce(`No results found for ${q}`);
    } else {
      announce(`${limitedResults.length} result${limitedResults.length === 1 ? '' : 's'} found`);
    }
  }, [searchIndex]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => search(query), 150);
    return () => clearTimeout(timer);
  }, [query, search]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(i => Math.min(i + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(i => Math.max(i - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current) {
      const selected = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selected) {
        selected.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  const navigateToResult = (result: SearchResult) => {
    const url = result.headingSlug
      ? `/chapters/${result.slug}#${result.headingSlug}`
      : `/chapters/${result.slug}`;
    window.location.href = url;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Search chapters"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center pt-[15vh] px-4">
        <div
          ref={modalRef}
          className="relative w-full max-w-xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl"
        >
          {/* Search input */}
          <div className="flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chapters..."
              className="flex-1 px-4 py-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none"
            />
            <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 rounded">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div
            ref={resultsRef}
            className="max-h-96 overflow-y-auto"
            role={results.length > 0 ? 'listbox' : undefined}
            aria-label={results.length > 0 ? 'Search results' : undefined}
          >
            {loading ? (
              <div className="px-4 py-8 text-center text-gray-500" role="status">
                Loading search index...
              </div>
            ) : query.length < 2 ? (
              <div className="px-4 py-8 text-center text-gray-500">
                Type at least 2 characters to search
              </div>
            ) : results.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500" role="status">
                No results found for "{query}"
              </div>
            ) : (
              results.map((result, index) => (
                <button
                  key={`${result.slug}-${result.headingSlug || 'main'}`}
                  onClick={() => navigateToResult(result)}
                  role="option"
                  aria-selected={index === selectedIndex}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 ${
                    index === selectedIndex ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{result.chapter}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {result.title}
                    </span>
                  </div>
                  {result.headingText && (
                    <div className="text-sm text-blue-600 dark:text-blue-400 mt-0.5">
                      → {result.headingText}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {result.excerpt}
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400 flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">↵</kbd>
              to select
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Extract a relevant excerpt around the search query
 */
function getExcerpt(content: string, query: string): string {
  const contentLower = content.toLowerCase();
  const index = contentLower.indexOf(query);

  if (index === -1) {
    // Try to find any word from the query
    const words = query.split(/\s+/);
    for (const word of words) {
      const wordIndex = contentLower.indexOf(word);
      if (wordIndex !== -1) {
        const start = Math.max(0, wordIndex - 50);
        const end = Math.min(content.length, wordIndex + 100);
        return (start > 0 ? '...' : '') + content.slice(start, end).trim() + (end < content.length ? '...' : '');
      }
    }
    return content.slice(0, 150).trim() + '...';
  }

  const start = Math.max(0, index - 50);
  const end = Math.min(content.length, index + 100);
  return (start > 0 ? '...' : '') + content.slice(start, end).trim() + (end < content.length ? '...' : '');
}
