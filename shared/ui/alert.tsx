import React from "react";
import { cn } from "@/shared/utils/cn";

export type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const variantStyles: Record<AlertVariant, { container: string; icon: React.ReactNode; role: string }> = {
  info: {
    container: "bg-[#E6F6FC] border-[#049DD9] text-[#012636]",
    role: "status",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-[#049DD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4m0-4h.01" />
      </svg>
    ),
  },
  success: {
    container: "bg-[#E3F7E5] border-[#03A60E] text-[#02430A]",
    role: "status",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-[#03A60E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  warning: {
    container: "bg-[#FFF5DB] border-[#FFC857] text-[#4A3500]",
    role: "alert",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-[#D9A300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  error: {
    container: "bg-[#FDE8E6] border-[#B3261E] text-[#5C0F0B]",
    role: "alert",
    icon: (
      <svg className="w-5 h-5 shrink-0 text-[#B3261E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9l-6 6m0-6l6 6" />
      </svg>
    ),
  },
};

export function Alert({ variant = "info", title, children, className, id }: AlertProps) {
  const conf = variantStyles[variant];

  return (
    <div
      id={id}
      role={conf.role}
      className={cn(
        "flex gap-3.5 p-4 sm:p-5 rounded-2xl border-2 font-[var(--ui)] text-sm sm:text-[0.9375rem] leading-relaxed transition-all",
        conf.container,
        className
      )}
    >
      <div className="mt-0.5">{conf.icon}</div>
      <div className="flex-1">
        {title && <div className="font-bold mb-1">{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}
