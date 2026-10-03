import React from "react";
import { cn } from "@/shared/utils/cn";

export interface QuoteCardProps {
  quote: string;
  author?: string;
  role?: string;
  className?: string;
}

export function QuoteCard({ quote, author, role, className }: QuoteCardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--navy)] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-[var(--sh2)]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-6 -bottom-6 text-white/5 font-serif text-9xl select-none pointer-events-none"
      >
        “
      </div>
      <blockquote className="m-0 font-[var(--disp)] italic font-normal text-xl sm:text-2xl leading-snug relative z-10 text-white/95">
        “{quote}”
      </blockquote>
      {(author || role) && (
        <div className="mt-6 flex flex-col gap-0.5 relative z-10">
          {author && <span className="font-bold text-xs sm:text-sm uppercase tracking-wider font-[var(--ui)] text-[var(--aqua)]">{author}</span>}
          {role && <span className="text-xs text-white/60 font-[var(--ui)]">{role}</span>}
        </div>
      )}
    </div>
  );
}
