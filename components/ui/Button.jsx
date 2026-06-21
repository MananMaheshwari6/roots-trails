/**
 * Reusable button component styled for Roots & Trails.
 *
 * @param {Object} props
 * @param {"primary" | "secondary" | "outline"} [props.variant="primary"] - Visual style variant.
 * @param {"sm" | "md" | "lg"} [props.size="md"] - Button size.
 * @param {boolean} [props.disabled=false] - Disables interaction and applies muted styles.
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Click handler.
 * @param {React.ReactNode} props.children - Button label or content.
 * @param {string} [props.className] - Additional Tailwind classes.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props.rest - Native button attributes.
 */
export default function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  className = "",
  type = "button",
  ...rest
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer";

  const variantStyles = {
    primary:
      "bg-primary text-background shadow-sm hover:bg-primary/95 active:translate-y-0",
    secondary:
      "bg-secondary text-background shadow-sm hover:bg-secondary/90 active:translate-y-0",
    outline:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary/5 active:translate-y-0",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
