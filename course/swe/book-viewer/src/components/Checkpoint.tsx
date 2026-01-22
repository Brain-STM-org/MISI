/**
 * Checkpoint - Self-assessment with confidence rating
 *
 * Pedagogical basis: Metacognition (Flavell)
 * Learners who monitor their own understanding learn better
 * Confidence ratings encourage honest self-reflection
 */

import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { progressStore, updateCheckpoint } from '../lib/progress';

interface CheckpointProps {
  id: string;
  chapterSlug: string;
  items: string[];
}

const confidenceLevels = [
  { value: 1, label: 'Not confident', color: 'bg-red-500' },
  { value: 2, label: 'Slightly confident', color: 'bg-orange-500' },
  { value: 3, label: 'Somewhat confident', color: 'bg-yellow-500' },
  { value: 4, label: 'Confident', color: 'bg-lime-500' },
  { value: 5, label: 'Very confident', color: 'bg-green-500' },
];

export function Checkpoint({ id, chapterSlug, items }: CheckpointProps) {
  const progress = useStore(progressStore);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(items.map(() => false));
  const [confidence, setConfidence] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load saved state
  useEffect(() => {
    const checkpoint = progress.chapters[chapterSlug]?.checkpoints?.[id];
    if (checkpoint) {
      setCheckedItems(checkpoint.items.length === items.length ? checkpoint.items : items.map(() => false));
      setConfidence(checkpoint.confidence);
      setIsSubmitted(checkpoint.confidence > 0);
    }
  }, [progress, chapterSlug, id, items.length]);

  const handleItemChange = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const handleConfidenceChange = (level: number) => {
    setConfidence(level);
  };

  const handleSubmit = () => {
    updateCheckpoint(chapterSlug, id, {
      items: checkedItems,
      confidence,
    });
    setIsSubmitted(true);
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const allChecked = checkedCount === items.length;

  return (
    <div className="my-6 border-l-4 border-checkpoint-border bg-checkpoint-light dark:bg-checkpoint-dark rounded-r-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Understanding Checkpoint</span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
          Check each item you feel confident you understand:
        </p>

        {/* Checklist items */}
        <div className="space-y-2 mb-6">
          {items.map((item, index) => (
            <label
              key={index}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleItemChange(index)}
                disabled={isSubmitted}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 disabled:opacity-50"
              />
              <span className={`text-sm ${checkedItems[index] ? 'text-gray-700 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'} group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors`}>
                {item}
              </span>
            </label>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>{checkedCount} of {items.length} checked</span>
            {allChecked && <span className="text-emerald-600 dark:text-emerald-400">All items checked!</span>}
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${(checkedCount / items.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Confidence rating */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Overall confidence in this section:
          </p>
          <div className="flex gap-2">
            {confidenceLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => handleConfidenceChange(level.value)}
                disabled={isSubmitted}
                className={`flex-1 h-8 rounded transition-all ${
                  confidence >= level.value
                    ? `${level.color} opacity-100`
                    : 'bg-gray-200 dark:bg-gray-700 opacity-50 hover:opacity-75'
                } ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}`}
                title={level.label}
              />
            ))}
          </div>
          {confidence > 0 && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
              {confidenceLevels[confidence - 1].label}
            </p>
          )}
        </div>

        {/* Submit button */}
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={confidence === 0}
            className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:text-gray-500 dark:disabled:bg-gray-700 dark:disabled:text-gray-500 transition-colors text-sm font-medium"
          >
            Save Self-Assessment
          </button>
        ) : (
          <div className="text-center text-sm text-emerald-600 dark:text-emerald-400">
            ✓ Self-assessment saved
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkpoint;
