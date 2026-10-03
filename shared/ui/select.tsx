import React, { forwardRef } from "react";
import { cn } from "@/shared/utils/cn";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isError?: boolean;
  options?: Array<{ label: string; value: string | number }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, helperText, errorMessage, isError, options, children, className, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const hasError = isError || Boolean(errorMessage);

    return (
      <div className="grid gap-1.5 w-full">
        {label && (
          <label htmlFor={selectId} className="font-bold text-sm font-[var(--ui)] text-[var(--text)]">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={hasError ? "true" : undefined}
            className={cn(
              "w-full min-h-[48px] px-3.5 py-3 pr-10 rounded-lg border-2 text-base font-[var(--body)] appearance-none cursor-pointer",
              "bg-[var(--raised)] text-[var(--text)] transition-all duration-200",
              "hover:border-[var(--sky)]",
              "focus:outline-none focus:border-[var(--sky)] focus:ring-4 focus:ring-[var(--sky)]/25",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              hasError ? "border-[#B3261E] focus:border-[#B3261E] focus:ring-[#B3261E]/25" : "border-[var(--border)]",
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text2)]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errorMessage && (
          <span className="text-xs font-semibold text-[#B3261E] font-[var(--ui)]" role="alert">
            {errorMessage}
          </span>
        )}
        {!errorMessage && helperText && (
          <span className="text-xs text-[var(--text2)] font-[var(--ui)]">{helperText}</span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
