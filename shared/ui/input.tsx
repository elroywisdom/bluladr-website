import React, { forwardRef } from "react";
import { cn } from "@/shared/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  isError?: boolean;
  isSuccess?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      successMessage,
      isError,
      isSuccess,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
    const hasError = isError || Boolean(errorMessage);
    const hasSuccess = isSuccess || Boolean(successMessage);

    return (
      <div className="grid gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="font-bold text-sm font-[var(--ui)] text-[var(--text)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={hasError ? "true" : undefined}
          className={cn(
            "w-full min-h-[48px] px-3.5 py-3 rounded-lg border-2 text-base font-[var(--body)]",
            "bg-[var(--raised)] text-[var(--text)] transition-all duration-200",
            "placeholder:text-[var(--text2)]/60",
            "hover:border-[var(--sky)]",
            "focus:outline-none focus:border-[var(--sky)] focus:ring-4 focus:ring-[var(--sky)]/25",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            hasError
              ? "border-[#B3261E] focus:border-[#B3261E] focus:ring-[#B3261E]/25"
              : hasSuccess
              ? "border-[#03A60E] focus:border-[#03A60E] focus:ring-[#03A60E]/25"
              : "border-[var(--border)]",
            className
          )}
          {...props}
        />
        {errorMessage && (
          <span className="text-xs font-semibold text-[#B3261E] font-[var(--ui)]" role="alert">
            {errorMessage}
          </span>
        )}
        {!errorMessage && successMessage && (
          <span className="text-xs font-semibold text-[#03A60E] font-[var(--ui)]" role="status">
            {successMessage}
          </span>
        )}
        {!errorMessage && !successMessage && helperText && (
          <span className="text-xs text-[var(--text2)] font-[var(--ui)]">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
