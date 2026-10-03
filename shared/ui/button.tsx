import Link from "next/link";
import { cn } from "@/shared/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--grad)] text-white shadow-[var(--sh1)] " +
    "hover:shadow-[var(--sh2)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-[var(--text)] border-2 border-[var(--border)] " +
    "hover:border-[var(--navy)] hover:bg-[var(--mist)]",
  ghost:
    "bg-transparent text-[var(--text)] underline underline-offset-4 " +
    "hover:text-[var(--sky)]",
};

const BASE =
  "inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 " +
  "rounded-[var(--r-pill)] font-[var(--ui)] font-bold text-[0.9375rem] " +
  "transition-[transform,box-shadow,background] duration-[300ms] " +
  "[transition-timing-function:var(--ease)] no-underline cursor-pointer border-0";

export function Button({
  variant = "primary",
  href,
  children,
  className,
  id,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(BASE, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      id={id}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
