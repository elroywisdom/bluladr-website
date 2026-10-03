import React from "react";
import { cn } from "@/shared/utils/cn";

export interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  className?: string;
}

export function ProgressBar({ value, label, className }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("w-full grid gap-2", className)}>
      {label && (
        <div className="flex justify-between text-xs font-bold font-[var(--ui)] text-[var(--text)]">
          <span>{label}</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2.5 w-full rounded-full bg-[var(--border)] overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-[var(--grad)] transition-all duration-500 [transition-timing-function:var(--ease)]"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
