/**
 * TryBlock - Exercise prompts with optional hints
 *
 * Pedagogical basis: Desirable difficulties (Bjork)
 * Some struggle during learning improves retention
 *
 * Note: This component is rendered through MDX Content in Astro, so it
 * cannot use React hooks directly. Interactivity is added via client-side script.
 */

import { type ReactNode, Children, isValidElement } from 'react';

interface TryBlockProps {
  children?: ReactNode;
  hint?: ReactNode;
  hasHint?: string | boolean;
}

/**
 * Extract slotted content from children
 */
function extractSlots(children: ReactNode): { exercise: ReactNode; hint: ReactNode } {
  let exercise: ReactNode = null;
  let hint: ReactNode = null;
  const otherChildren: ReactNode[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const slot = child.props?.slot;
      if (slot === 'exercise') {
        exercise = child.props.children || child;
      } else if (slot === 'hint') {
        hint = child.props.children || child;
      } else {
        otherChildren.push(child);
      }
    } else {
      otherChildren.push(child);
    }
  });

  if (!exercise && otherChildren.length > 0) {
    exercise = otherChildren;
  }

  return { exercise, hint };
}

export function TryBlock({ children, hint: hintProp, hasHint }: TryBlockProps) {
  const { exercise, hint: slotHint } = extractSlots(children);
  const hint = hintProp || slotHint;
  const hasHintContent = hint || hasHint === 'true' || hasHint === true;

  return (
    <div className="try-block my-6 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-purple-700 dark:text-purple-300 mb-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Try It Yourself</span>
        </div>

        <div className="text-gray-800 dark:text-gray-200 prose prose-sm dark:prose-invert max-w-none">
          {exercise || children}
        </div>

        {hasHintContent && hint && (
          <div className="try-hint-section mt-4">
            <button
              className="try-hint-btn text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors focus-ring"
              aria-expanded="false"
              aria-controls="try-hint-content"
            >
              <span aria-hidden="true">💡 </span>Need a hint?
            </button>
            <div
              id="try-hint-content"
              className="try-hint hidden p-3 bg-purple-100 dark:bg-purple-800/30 rounded-lg mt-2"
              aria-hidden="true"
            >
              <div className="text-xs text-purple-600 dark:text-purple-400 mb-1 font-medium">Hint:</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none">
                {hint}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TryBlock;
