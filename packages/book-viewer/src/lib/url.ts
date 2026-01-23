/**
 * URL utilities for handling base path in production
 *
 * Note: This file provides helpers for React components.
 * Astro components should use import.meta.env.BASE_URL directly.
 */

// Cached base path (set at initialization)
let cachedBasePath: string | null = null;

/**
 * Initialize the URL helper with the base path
 * Call this once at app startup (e.g., in layout)
 */
export function initUrl(basePath: string): void {
  cachedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
}

/**
 * Get the base URL path
 * Returns empty string if not initialized (for SSR safety)
 */
export function getBasePath(): string {
  if (cachedBasePath !== null) {
    return cachedBasePath;
  }

  // Fallback: try to read from window (client-side only)
  if (typeof window !== 'undefined') {
    // Look for data attribute set by layout
    const base = document.documentElement.dataset.basePath;
    if (base) {
      cachedBasePath = base.endsWith('/') ? base.slice(0, -1) : base;
      return cachedBasePath;
    }
  }

  return '';
}

/**
 * Prepend base path to an absolute URL
 * @param path - Absolute path starting with /
 */
export function url(path: string): string {
  const base = getBasePath();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * Helper for React components to get URL with base path
 * Works in both SSR and client contexts
 */
export function getUrl(path: string): string {
  return url(path);
}
