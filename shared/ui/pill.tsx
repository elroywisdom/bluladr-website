import React from "react";
import { cn } from "@/shared/utils/cn";

export type PillVariant = "default" | "blue" | "green" | "purple" | "azure";

export interface PillProps {
  variant?: PillVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<PillVariant, string> = {
  default: "bg-[var(--mist)] text-[var(--ink)]",
  blue: "bg-[var(--navy)] text-white",
  azure: "bg-[var(--azure)]/10 text-[var(--azure)]",
  green: "bg-[#D9F5DB] text-[#03530A]",
  purple: "bg-[#EBD6F2] text-[#51006C]",
};

export function Pill({ variant = "default", children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-[var(--ui)] tracking-wide select-none transition-colors",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
