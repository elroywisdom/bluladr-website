"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/utils/cn";
import {
  IconDiscovery,
  IconResearch,
  IconUnderstanding,
  IconClarity,
  IconTraining,
  IconStructure,
  IconPartnership,
  IconMandE,
} from "./approach-icons";

export interface ApproachStep {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const DEFAULT_STEPS: ApproachStep[] = [
  {
    title: "Discovery",
    desc: "A discovery call and questionnaire. We listen before we advise.",
    icon: <IconDiscovery />,
  },
  {
    title: "Research",
    desc: "We study your market, competitors and audience.",
    icon: <IconResearch />,
  },
  {
    title: "Understanding",
    desc: "We map where you are, what's working and what isn't.",
    icon: <IconUnderstanding />,
  },
  {
    title: "Clarity",
    desc: "We define the problem, the goal and the path between them.",
    icon: <IconClarity />,
  },
  {
    title: "Training",
    desc: "We build skills in the people who will carry the work.",
    icon: <IconTraining />,
  },
  {
    title: "Structure",
    desc: "We put frameworks, tools and workflows in place so the work holds.",
    icon: <IconStructure />,
  },
  {
    title: "Partnership",
    desc: "We stay close through delivery. You are not left with a document and a wave.",
    icon: <IconPartnership />,
  },
  {
    title: "M&E",
    desc: "Monitoring and evaluation, so we can measure what changed.",
    icon: <IconMandE />,
  },
];

export function ApproachLadder({ steps = DEFAULT_STEPS, className }: { steps?: ApproachStep[]; className?: string }) {
  const containerRef = useRef<HTMLOListElement>(null);
  const [activeCount, setActiveCount] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const p = Math.max(0, Math.min(1, (winH * 0.65 - rect.top) / rect.height));
      setProgress(p);

      const items = containerRef.current.children;
      let count = 0;
      for (let i = 0; i < items.length; i++) {
        if (p >= i / items.length - 0.05) {
          count++;
        }
      }
      setActiveCount(count);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <ol
      ref={containerRef}
      className={cn("list-none p-0 m-0 relative max-w-2xl", className)}
    >
      {/* Background track */}
      <div
        aria-hidden="true"
        className="absolute left-[35px] top-6 bottom-6 w-1.5 rounded-full bg-[var(--border)] pointer-events-none"
      />
      {/* Filled track with signature gradient */}
      <div
        aria-hidden="true"
        className="absolute left-[35px] top-6 w-1.5 rounded-full bg-[var(--grad)] pointer-events-none transition-all duration-300"
        style={{ height: `calc((100% - 48px) * ${progress})` }}
      />

      {steps.map((step, idx) => {
        const isActive = idx < activeCount;

        return (
          <li
            key={idx}
            className={cn(
              "flex items-start gap-5 sm:gap-6 py-4 relative z-10 transition-all duration-500",
              isActive ? "opacity-100 translate-x-0" : "opacity-45"
            )}
          >
            {/* Step icon bubble */}
            <div
              className={cn(
                "w-16 h-16 sm:w-[72px] sm:h-[72px] shrink-0 rounded-full flex items-center justify-center transition-all duration-400",
                "bg-[var(--surface)] border-2",
                isActive
                  ? "border-[var(--sky)] text-[var(--accent)] shadow-[0_0_0_4px_rgba(4,157,217,0.2)] scale-105"
                  : "border-[var(--border)] text-[var(--text2)]"
              )}
            >
              {step.icon}
            </div>

            {/* Content */}
            <div className="pt-2">
              <h3 className="text-lg sm:text-xl font-bold font-[var(--ui)] text-[var(--text)] mb-1">
                {step.title}
              </h3>
              <p className="text-[var(--text2)] text-base font-[var(--body)] leading-relaxed m-0">
                {step.desc}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
