import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

  const variantStyles = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50",
  };

  const sizeStyles = {
    default: "h-12 px-6 text-base rounded-2xl",
    large: "h-14 px-8 text-lg rounded-2xl w-full sm:w-auto sm:min-w-[220px]",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
