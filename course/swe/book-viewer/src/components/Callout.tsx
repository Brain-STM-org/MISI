/**
 * Callout - Generic callout/admonition boxes
 *
 * Types: info, warning, danger, success, tip
 *
 * Usage in MDX:
 * <Callout type="warning">
 *   Be careful with this operation!
 * </Callout>
 */

import type { ReactNode } from 'react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'danger' | 'success' | 'tip';
  title?: string;
  children: ReactNode;
}

const calloutStyles = {
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-500',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-800 dark:text-blue-200',
    iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    defaultTitle: 'Info',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-500',
    icon: 'text-yellow-600 dark:text-yellow-400',
    title: 'text-yellow-800 dark:text-yellow-200',
    iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    defaultTitle: 'Warning',
  },
  danger: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-500',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-800 dark:text-red-200',
    iconPath: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    defaultTitle: 'Danger',
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-500',
    icon: 'text-green-600 dark:text-green-400',
    title: 'text-green-800 dark:text-green-200',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    defaultTitle: 'Success',
  },
  tip: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    border: 'border-teal-500',
    icon: 'text-teal-600 dark:text-teal-400',
    title: 'text-teal-800 dark:text-teal-200',
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    defaultTitle: 'Tip',
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const styles = calloutStyles[type];

  return (
    <div className={`my-6 p-4 rounded-lg border-l-4 ${styles.bg} ${styles.border}`}>
      <div className="flex items-start gap-3">
        <svg
          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${styles.icon}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={styles.iconPath}
          />
        </svg>
        <div className="flex-1">
          {(title || styles.defaultTitle) && (
            <div className={`font-semibold mb-1 ${styles.title}`}>
              {title || styles.defaultTitle}
            </div>
          )}
          <div className="text-gray-700 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callout;
