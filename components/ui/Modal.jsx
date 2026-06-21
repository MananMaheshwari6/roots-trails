"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Accessible modal dialog with Escape-to-close support.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls modal visibility.
 * @param {() => void} props.onClose - Called when the modal should close (overlay, close button, Escape).
 * @param {string} props.title - Accessible dialog title.
 * @param {React.ReactNode} props.children - Modal body content.
 * @param {string} [props.className] - Additional Tailwind classes for the dialog panel.
 */
export default function Modal({ isOpen, onClose, title, children, className = "" }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const focusable = dialogRef.current?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative z-10 w-full max-w-lg rounded-2xl border border-primary/10 bg-surface p-6 shadow-xl ${className}`}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 id={titleId} className="text-xl font-bold font-serif text-foreground">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-md p-1.5 text-foreground/60 hover:bg-primary/5 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="text-foreground/80">{children}</div>
      </div>
    </div>,
    document.body
  );
}
