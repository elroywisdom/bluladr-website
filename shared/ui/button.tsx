import Link from "next/link";
import { cn } from "@/shared/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "white" | "outline-white" | "ghost";

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
    "bg-[var(--navy)] text-white shadow-[var(--sh1)] " +
    "hover:bg-[var(--azure)] hover:shadow-[var(--sh2)] hover:-translate-y-0.5",
  secondary:
    "bg-[var(--raised)] text-[var(--text)] border-2 border-[var(--border)] shadow-xs " +
    "hover:border-[var(--navy)] hover:bg-[var(--mist)] hover:text-[var(--navy)] hover:-translate-y-0.5",
  white:
    "bg-white text-[var(--navy)] font-bold shadow-lg " +
    "hover:bg-[var(--mist)] hover:text-[var(--navy)] hover:-translate-y-0.5",
  "outline-white":
    "bg-transparent text-white border-2 border-white/60 font-bold " +
    "hover:bg-white/10 hover:border-white hover:text-white hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[var(--text)] underline underline-offset-4 font-bold " +
    "hover:text-[var(--sky)]",
};

const BASE =
  "inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 " +
  "rounded-[var(--r-pill)] font-[var(--ui)] font-bold text-[0.9375rem] " +
  "transition-all duration-300 " +
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
