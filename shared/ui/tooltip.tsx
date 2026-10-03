"use client";

import React, { useState } from "react";
import { cn } from "@/shared/utils/cn";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Tooltip({ content, children, className, id }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = id || "tooltip-content";

  return (
    <div
      className={cn("relative inline-flex items-center", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <div aria-describedby={tooltipId} className="inline-flex">
        {children}
      </div>
      <div
        id={tooltipId}
        role="tooltip"
        className={cn(
          "absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 z-50",
          "px-3 py-1.5 rounded-lg text-xs font-bold font-[var(--ui)] tracking-wide text-white bg-[var(--ink)] shadow-[var(--sh2)]",
          "whitespace-nowrap pointer-events-none transition-all duration-200 origin-bottom",
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1"
        )}
      >
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--ink)]" />
      </div>
    </div>
  );
}
