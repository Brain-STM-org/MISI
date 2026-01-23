/**
 * Bookmark Button Component
 * Appears next to headings, allows quick bookmarking
 */
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { progressStore, addBookmark, removeBookmark } from '../lib/progress';

interface Props {
  chapterSlug: string;
  headingSlug: string;
  headingText: string;
}

export default function BookmarkButton({ chapterSlug, headingSlug, headingText }: Props) {
  const progress = useStore(progressStore);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = progress.bookmarks || [];
    const found = bookmarks.some(
      b => b.chapterSlug === chapterSlug && b.headingSlug === headingSlug
    );
    setIsBookmarked(found);
  }, [progress, chapterSlug, headingSlug]);

  const handleToggle = () => {
    if (isBookmarked) {
      removeBookmark(chapterSlug, headingSlug);
    } else {
      addBookmark(chapterSlug, headingSlug, headingText);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`ml-2 p-1 rounded transition-colors ${
        isBookmarked
          ? 'text-yellow-500 hover:text-yellow-600'
          : 'text-gray-300 hover:text-gray-400 dark:text-gray-600 dark:hover:text-gray-500'
      }`}
      title={isBookmarked ? 'Remove bookmark' : 'Bookmark this section'}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <svg
        className="w-5 h-5"
        fill={isBookmarked ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
}
