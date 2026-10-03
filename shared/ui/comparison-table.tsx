import React from "react";
import { cn } from "@/shared/utils/cn";

export interface ComparisonRow {
  package: string;
  included: string;
  duration: string;
  outcomes: string;
}

export interface ComparisonTableProps {
  headers?: [string, string, string, string];
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({
  headers = ["Package", "What's included", "Duration and delivery", "You leave with"],
  rows,
  className,
}: ComparisonTableProps) {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table className="w-full border-collapse text-left text-base font-[var(--body)]">
        <thead>
          <tr className="bg-[var(--navy)] text-white font-[var(--ui)] text-xs uppercase tracking-wider">
            {headers.map((h, i) => (
              <th
                key={i}
                className={cn(
                  "py-4 px-5 font-bold",
                  i === 0 ? "rounded-tl-2xl" : "",
                  i === headers.length - 1 ? "rounded-tr-2xl" : ""
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-[var(--alt)]/50 transition-colors"
            >
              <th className="py-5 px-5 font-semibold text-lg font-[var(--disp)] text-[var(--text)] align-top">
                {row.package}
              </th>
              <td className="py-5 px-5 text-[var(--text2)] align-top leading-relaxed" data-label={headers[1]}>
                {row.included}
              </td>
              <td className="py-5 px-5 text-[var(--text2)] align-top leading-relaxed" data-label={headers[2]}>
                {row.duration}
              </td>
              <td className="py-5 px-5 text-[var(--text)] font-medium align-top leading-relaxed" data-label={headers[3]}>
                {row.outcomes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
