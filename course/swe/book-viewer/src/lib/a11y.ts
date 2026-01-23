/**
 * Accessibility (a11y) utilities
 * Shared helpers for keyboard navigation and screen reader support
 */

/** Selector for all focusable elements */
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
}

/**
 * Create a focus trap within a container (for modals/dialogs)
 * Returns a cleanup function to remove the trap
 */
export function createFocusTrap(container: HTMLElement): () => void {
  const focusableElements = getFocusableElements(container);
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  // Store previously focused element to restore later
  const previouslyFocused = document.activeElement as HTMLElement | null;

  // Focus first element
  firstFocusable?.focus();

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    // Refresh focusable elements in case DOM changed
    const currentFocusable = getFocusableElements(container);
    const first = currentFocusable[0];
    const last = currentFocusable[currentFocusable.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: if on first element, wrap to last
      if (document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }
    } else {
      // Tab: if on last element, wrap to first
      if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  }

  container.addEventListener('keydown', handleKeyDown);

  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
    // Restore focus to previously focused element
    previouslyFocused?.focus();
  };
}

/**
 * Set up roving tabindex for arrow key navigation within a container
 * Works with lists of buttons/options where only one should be focusable at a time
 */
export function useRovingTabindex(
  container: HTMLElement,
  selector: string,
  options: { orientation?: 'horizontal' | 'vertical' | 'both' } = {}
): () => void {
  const { orientation = 'both' } = options;
  const items = Array.from(container.querySelectorAll<HTMLElement>(selector));

  if (items.length === 0) return () => {};

  // Initialize: first item has tabindex 0, rest have -1
  items.forEach((item, index) => {
    item.setAttribute('tabindex', index === 0 ? '0' : '-1');
  });

  let currentIndex = 0;

  function handleKeyDown(e: KeyboardEvent) {
    const isVertical = orientation === 'vertical' || orientation === 'both';
    const isHorizontal = orientation === 'horizontal' || orientation === 'both';

    let nextIndex = currentIndex;

    switch (e.key) {
      case 'ArrowDown':
        if (isVertical) {
          e.preventDefault();
          nextIndex = (currentIndex + 1) % items.length;
        }
        break;
      case 'ArrowUp':
        if (isVertical) {
          e.preventDefault();
          nextIndex = (currentIndex - 1 + items.length) % items.length;
        }
        break;
      case 'ArrowRight':
        if (isHorizontal) {
          e.preventDefault();
          nextIndex = (currentIndex + 1) % items.length;
        }
        break;
      case 'ArrowLeft':
        if (isHorizontal) {
          e.preventDefault();
          nextIndex = (currentIndex - 1 + items.length) % items.length;
        }
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    if (nextIndex !== currentIndex) {
      items[currentIndex].setAttribute('tabindex', '-1');
      items[nextIndex].setAttribute('tabindex', '0');
      items[nextIndex].focus();
      currentIndex = nextIndex;
    }
  }

  container.addEventListener('keydown', handleKeyDown);

  // Also update currentIndex when items are clicked
  items.forEach((item, index) => {
    item.addEventListener('focus', () => {
      if (currentIndex !== index) {
        items[currentIndex].setAttribute('tabindex', '-1');
        item.setAttribute('tabindex', '0');
        currentIndex = index;
      }
    });
  });

  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

// Global live region element (created lazily)
let liveRegion: HTMLElement | null = null;

/**
 * Create or get the live region element for screen reader announcements
 */
function getLiveRegion(): HTMLElement {
  if (liveRegion && document.body.contains(liveRegion)) {
    return liveRegion;
  }

  liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', 'status');
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);

  return liveRegion;
}

/**
 * Announce a message to screen readers via live region
 * @param message - The message to announce
 * @param priority - 'polite' for non-urgent, 'assertive' for important announcements
 */
export function announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const region = getLiveRegion();
  region.setAttribute('aria-live', priority);

  // Clear and set message (the change triggers the announcement)
  region.textContent = '';
  // Use requestAnimationFrame to ensure the DOM update is processed
  requestAnimationFrame(() => {
    region.textContent = message;
  });
}
