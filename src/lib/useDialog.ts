'use client';

import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Behaviour every modal dialog needs, in one place:
 *  - focus moves into the dialog when it opens (it used to stay on the button behind it)
 *  - Tab and Shift+Tab stay inside the dialog (they used to walk through the page behind)
 *  - Escape closes it
 *  - page scroll is locked while it is open and restored exactly as it was
 *  - focus returns to the element that opened it
 *
 * Attach the returned ref to the element with role="dialog" and give it tabIndex={-1}.
 */
export function useDialog<T extends HTMLElement>(isOpen: boolean, onClose: () => void) {
  const dialogRef = useRef<T>(null);
  const onCloseRef = useRef(onClose);

  // Keep the latest onClose without re-running the main effect on every parent render.
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const openedFrom = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.focus({ preventScroll: true });

    const focusableItems = () =>
      Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.getClientRects().length > 0
      );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab') return;

      const items = focusableItems();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const outside = !dialog.contains(active);

      if (e.shiftKey && (active === first || active === dialog || outside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || outside)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      // Restore whatever was there before (normally ''), so the stylesheet's own
      // overflow rules apply again instead of a leftover inline value.
      document.body.style.overflow = previousOverflow;
      if (openedFrom && document.contains(openedFrom)) {
        openedFrom.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  return dialogRef;
}
