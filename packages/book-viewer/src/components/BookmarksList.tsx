/**
 * Bookmarks List Component
 * Displays all saved bookmarks with ability to remove
 */
import { useStore } from '@nanostores/react';
import { progressStore, removeBookmark } from '../lib/progress';
import { useChapters } from '../lib/chapters-context';
import { getUrl } from '../lib/url';

export default function BookmarksList() {
  const { chapters } = useChapters();
  const progress = useStore(progressStore);
  const bookmarks = progress.bookmarks || [];

  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No bookmarks yet
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          While reading, click the bookmark icon next to any heading to save it for later.
        </p>
        <a
          href={getUrl('/')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Reading
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    );
  }

  // Group bookmarks by chapter
  const byChapter: Record<string, typeof bookmarks> = {};
  for (const bookmark of bookmarks) {
    if (!byChapter[bookmark.chapterSlug]) {
      byChapter[bookmark.chapterSlug] = [];
    }
    byChapter[bookmark.chapterSlug].push(bookmark);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{bookmarks.length} bookmark{bookmarks.length !== 1 ? 's' : ''}</span>
      </div>

      {Object.entries(byChapter).map(([chapterSlug, chapterBookmarks]) => {
        const chapter = chapters.find(c => c.slug === chapterSlug);
        return (
          <div
            key={chapterSlug}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Chapter header */}
            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <a
                href={getUrl(`/chapters/${chapterSlug}`)}
                className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
              >
                {chapter?.title || chapterSlug}
              </a>
              <span className="ml-2 text-xs text-gray-400">
                Chapter {chapter?.number}
              </span>
            </div>

            {/* Bookmarks in chapter */}
            <ul className="divide-y divide-gray-100 dark:divide-gray-700" role="list" aria-label={`Bookmarks in ${chapter?.title || chapterSlug}`}>
              {chapterBookmarks.map((bookmark) => (
                <li
                  key={`${bookmark.chapterSlug}-${bookmark.headingSlug}`}
                  className="px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <a
                    href={getUrl(`/chapters/${bookmark.chapterSlug}#${bookmark.headingSlug}`)}
                    className="flex-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus-ring rounded"
                  >
                    <span className="text-gray-400 mr-2" aria-hidden="true">#</span>
                    {bookmark.headingText}
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">
                      {formatDate(bookmark.createdAt)}
                    </span>
                    <button
                      onClick={() => removeBookmark(bookmark.chapterSlug, bookmark.headingSlug)}
                      className="text-gray-400 hover:text-red-500 transition-colors focus-ring rounded"
                      aria-label={`Remove bookmark for ${bookmark.headingText}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
