import React, { forwardRef } from "react";
import { cn } from "@/shared/utils/cn";

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, errorMessage, className, id, placeholder = " ", ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    const hasError = Boolean(errorMessage);

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          id={inputId}
          placeholder={placeholder}
          aria-invalid={hasError ? "true" : undefined}
          className={cn(
            "peer w-full min-h-[52px] px-3.5 pt-5 pb-2 rounded-lg border-2 text-base font-[var(--body)]",
            "bg-[var(--raised)] text-[var(--text)] transition-all duration-200",
            "hover:border-[var(--sky)]",
            "focus:outline-none focus:border-[var(--sky)] focus:ring-4 focus:ring-[var(--sky)]/25",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            hasError
              ? "border-[#B3261E] focus:border-[#B3261E] focus:ring-[#B3261E]/25"
              : "border-[var(--border)]",
            className
          )}
          {...props}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "absolute left-3.5 top-3.5 text-sm font-normal text-[var(--text2)] font-[var(--body)] pointer-events-none transition-all duration-200 origin-left",
            "peer-focus:top-1.5 peer-focus:text-[0.6875rem] peer-focus:font-bold peer-focus:font-[var(--ui)] peer-focus:text-[var(--accent)]",
            "peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[0.6875rem] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:font-[var(--ui)]",
            hasError && "peer-focus:text-[#B3261E]"
          )}
        >
          {label}
        </label>
        {errorMessage && (
          <span className="block mt-1 text-xs font-semibold text-[#B3261E] font-[var(--ui)]" role="alert">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
