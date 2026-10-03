"use client";

import React, { useState } from "react";
import { cn } from "@/shared/utils/cn";

export interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
}

export function Tabs({ items, defaultTab, onChange, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || items[0]?.id || "");

  const handleSelect = (id: string) => {
    setActiveTab(id);
    onChange?.(id);
  };

  const currentItem = items.find((i) => i.id === activeTab);

  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Navigation Tabs"
        className="flex gap-1 border-b-2 border-[var(--border)] overflow-x-auto"
      >
        {items.map((tab) => {
          const isSelected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => handleSelect(tab.id)}
              className={cn(
                "px-4 sm:px-5 py-3 font-bold font-[var(--ui)] text-sm sm:text-[0.9375rem] whitespace-nowrap",
                "border-b-[3px] -mb-[2px] transition-all duration-200 cursor-pointer bg-transparent border-transparent",
                isSelected
                  ? "text-[var(--accent)] border-[var(--sky)] font-extrabold"
                  : "text-[var(--text2)] hover:text-[var(--text)] hover:border-[var(--border)]"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {currentItem?.content && (
        <div
          role="tabpanel"
          id={`tabpanel-${currentItem.id}`}
          aria-labelledby={`tab-${currentItem.id}`}
          className="pt-6 focus:outline-none"
        >
          {currentItem.content}
        </div>
      )}
    </div>
  );
}
