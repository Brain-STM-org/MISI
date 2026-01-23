/**
 * Checkpoint - Self-assessment with confidence rating
 *
 * Pedagogical basis: Metacognition (Flavell)
 * Learners who monitor their own understanding learn better
 *
 * Note: This component is rendered through MDX Content in Astro, so it
 * cannot use React hooks directly. Interactivity is added via client-side script.
 */

interface CheckpointProps {
  id: string;
  chapterSlug: string;
  items: string | string[];
}

export function Checkpoint({ id, chapterSlug, items: itemsProp }: CheckpointProps) {
  // Parse items from JSON string if needed
  const items: string[] = typeof itemsProp === 'string'
    ? JSON.parse(itemsProp)
    : itemsProp;

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className="checkpoint my-6 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-lg overflow-hidden"
      data-checkpoint-id={id}
      data-chapter-slug={chapterSlug}
      data-items={JSON.stringify(items)}
    >
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Understanding Checkpoint</span>
        </div>

        {/* Checklist items in fieldset */}
        <fieldset className="checkpoint-items space-y-2 mb-6">
          <legend className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
            Check each item you feel confident you understand:
          </legend>
          {items.map((item, index) => (
            <label
              key={index}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                data-item-index={index}
                className="checkpoint-item mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                {item}
              </span>
            </label>
          ))}
        </fieldset>

        {/* Progress indicator with progressbar role */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span className="checkpoint-count" id={`checkpoint-progress-label-${id}`}>0 of {items.length} checked</span>
            <span className="checkpoint-complete-msg hidden text-emerald-600 dark:text-emerald-400">All items checked!</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="checkpoint-progress h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: '0%' }}
              role="progressbar"
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={items.length}
              aria-labelledby={`checkpoint-progress-label-${id}`}
            />
          </div>
        </div>

        {/* Confidence rating as radiogroup */}
        <div className="mb-4">
          <div
            className="checkpoint-confidence flex gap-2"
            role="radiogroup"
            aria-label="Confidence level in this section"
          >
            <button data-confidence="1" className="confidence-btn flex-1 h-8 rounded bg-gray-200 dark:bg-gray-700 opacity-50 hover:opacity-75 transition-all focus-ring" role="radio" aria-checked="false" aria-label="Not confident" tabIndex={0} />
            <button data-confidence="2" className="confidence-btn flex-1 h-8 rounded bg-gray-200 dark:bg-gray-700 opacity-50 hover:opacity-75 transition-all focus-ring" role="radio" aria-checked="false" aria-label="Slightly confident" tabIndex={-1} />
            <button data-confidence="3" className="confidence-btn flex-1 h-8 rounded bg-gray-200 dark:bg-gray-700 opacity-50 hover:opacity-75 transition-all focus-ring" role="radio" aria-checked="false" aria-label="Somewhat confident" tabIndex={-1} />
            <button data-confidence="4" className="confidence-btn flex-1 h-8 rounded bg-gray-200 dark:bg-gray-700 opacity-50 hover:opacity-75 transition-all focus-ring" role="radio" aria-checked="false" aria-label="Confident" tabIndex={-1} />
            <button data-confidence="5" className="confidence-btn flex-1 h-8 rounded bg-gray-200 dark:bg-gray-700 opacity-50 hover:opacity-75 transition-all focus-ring" role="radio" aria-checked="false" aria-label="Very confident" tabIndex={-1} />
          </div>
          <p className="checkpoint-confidence-label text-xs text-gray-500 dark:text-gray-400 mt-1 text-center hidden" aria-live="polite"></p>
        </div>

        {/* Submit button */}
        <button
          className="checkpoint-submit w-full px-4 py-2 bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-500 rounded-lg transition-colors text-sm font-medium cursor-not-allowed"
          disabled
        >
          Save Self-Assessment
        </button>
        <div className="checkpoint-saved hidden text-center text-sm text-emerald-600 dark:text-emerald-400">
          Self-assessment saved
        </div>
      </div>
    </div>
  );
}

export default Checkpoint;
