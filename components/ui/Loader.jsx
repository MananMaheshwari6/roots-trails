/**
 * Reusable loading spinner aligned with Roots & Trails branding.
 *
 * @param {Object} props
 * @param {"sm" | "md" | "lg"} [props.size="md"] - Spinner size.
 * @param {string} [props.label="Loading..."] - Accessible label for screen readers.
 * @param {string} [props.className] - Additional Tailwind classes for the wrapper.
 */
export default function Loader({ size = "md", label = "Loading...", className = "" }) {
  const sizeStyles = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <span
        className={`animate-spin rounded-full border-primary/20 border-t-primary ${sizeStyles[size]}`}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
