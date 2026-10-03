import React from "react";
import { cn } from "@/shared/utils/cn";

export interface AccordionItemProps {
  summary: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function AccordionItem({ summary, children, defaultOpen, className }: AccordionItemProps) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        "group border-b border-[var(--border)] py-4 transition-all duration-200",
        className
      )}
    >
      <summary className="flex items-center justify-between font-bold text-base sm:text-lg font-[var(--ui)] text-[var(--text)] cursor-pointer list-none select-none hover:text-[var(--accent)] transition-colors">
        <span>{summary}</span>
        <span className="ml-4 transition-transform duration-300 group-open:rotate-180 text-[var(--sky)] shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="pt-3 pb-1 text-[var(--text2)] text-base font-[var(--body)] leading-relaxed">
        {children}
      </div>
    </details>
  );
}

export interface AccordionProps {
  items: Array<{ summary: string; content: React.ReactNode; defaultOpen?: boolean }>;
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("w-full divide-y divide-[var(--border)]", className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          summary={item.summary}
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
