"use client";

import { useId } from "react";

/**
 * Accessible text input with optional label and error message.
 *
 * @param {Object} props
 * @param {string} [props.label] - Visible label displayed above the input.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string} [props.type="text"] - HTML input type (text, email, password, etc.).
 * @param {string} [props.value] - Controlled input value.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Change handler.
 * @param {string} [props.error] - Error message shown below the input.
 * @param {string} [props.id] - Custom element id; auto-generated from label when omitted.
 * @param {string} [props.className] - Additional Tailwind classes for the input element.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props.rest - Native input attributes.
 */
export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  id,
  className = "",
  ...rest
}) {
  const generatedId = useId();
  const inputId =
    id ||
    (label
      ? `input-${label.toLowerCase().replace(/\s+/g, "-")}`
      : generatedId);
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        className={`w-full px-4 py-3 border rounded-lg bg-background/30 text-sm text-foreground placeholder:text-foreground/40 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
          error
            ? "border-red-500/60 focus:border-red-500/60"
            : "border-primary/15 focus:border-primary/40"
        } ${className}`}
        {...rest}
      />

      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
