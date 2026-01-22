/**
 * TryBlock - Exercise prompts with optional hints
 *
 * Pedagogical basis: Desirable difficulties (Bjork)
 * Some struggle during learning improves retention
 * Hints available but hidden to encourage initial attempt
 */

import { useState } from 'react';

interface TryBlockProps {
  children: React.ReactNode;
  hint?: React.ReactNode;
}

export function TryBlock({ children, hint }: TryBlockProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="my-6 border-l-4 border-exercise-border bg-exercise-light dark:bg-exercise-dark rounded-r-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Try It Yourself</span>
        </div>

        <div className="text-gray-800 dark:text-gray-200 prose prose-sm dark:prose-invert max-w-none">
          {children}
        </div>

        {hint && (
          <div className="mt-4">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
              >
                💡 Need a hint?
              </button>
            ) : (
              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <div className="text-xs text-purple-600 dark:text-purple-400 mb-1 font-medium">Hint:</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {hint}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TryBlock;
