import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large" | "small";
  href?: string;
  external?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out cursor-pointer active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles = {
  primary:
    "bg-ink text-paper-elevated hover:bg-[#2a2722] shadow-sm hover:shadow-md",
  secondary:
    "bg-paper-elevated text-ink border border-line hover:border-[#d8d0c4] hover:bg-white",
  ghost:
    "bg-transparent text-ink-muted hover:text-ink hover:bg-black/[0.03]",
};

const sizeStyles = {
  small: "h-10 px-4 text-sm rounded-xl",
  default: "h-12 px-6 text-base rounded-2xl",
  large: "h-14 px-8 text-lg rounded-2xl w-full sm:w-auto sm:min-w-[240px]",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  href,
  external = false,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
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
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
