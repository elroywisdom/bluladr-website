import React from "react";
import Link from "next/link";
import { cn } from "@/shared/utils/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2.5 flex-wrap text-sm font-bold font-[var(--ui)] text-[var(--text2)]", className)}>
      <ol className="flex items-center gap-2.5 flex-wrap list-none p-0 m-0">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-[var(--accent)] hover:text-[var(--sky)] no-underline transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[var(--text)]" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-[var(--border)] select-none">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
