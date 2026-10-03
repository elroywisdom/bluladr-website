import React, { forwardRef } from "react";
import { cn } from "@/shared/utils/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isError?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, errorMessage, isError, className, id, rows = 3, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const hasError = isError || Boolean(errorMessage);

    return (
      <div className="grid gap-1.5 w-full">
        {label && (
          <label htmlFor={textareaId} className="font-bold text-sm font-[var(--ui)] text-[var(--text)]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={hasError ? "true" : undefined}
          className={cn(
            "w-full px-3.5 py-3 rounded-lg border-2 text-base font-[var(--body)] resize-y",
            "bg-[var(--raised)] text-[var(--text)] transition-all duration-200",
            "placeholder:text-[var(--text2)]/60",
            "hover:border-[var(--sky)]",
            "focus:outline-none focus:border-[var(--sky)] focus:ring-4 focus:ring-[var(--sky)]/25",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            hasError ? "border-[#B3261E] focus:border-[#B3261E] focus:ring-[#B3261E]/25" : "border-[var(--border)]",
            className
          )}
          {...props}
        />
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

Textarea.displayName = "Textarea";
