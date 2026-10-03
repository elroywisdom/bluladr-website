import React from "react";
import { Button } from "@/shared/ui/button";
import { ApproachLadder } from "@/shared/ui/approach-ladder";

export function ApproachTeaser() {
  return (
    <section className="w-full bg-[var(--alt)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200">
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:sticky lg:top-32">
            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] mb-6">
              Structured from the <span className="italic">first question.</span>
            </h2>
            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
              Discovery, research, understanding, clarity, training, structure, partnership, and monitoring &amp; evaluation.
            </p>
            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-8">
              Every engagement follows the same intentional path so nothing is left to guesswork and every outcome is measurable.
            </p>
            <div className="flex items-center gap-4">
              <Button href="/our-approach" variant="ghost">
                Explore our full approach <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive 8-Step Ladder */}
          <div className="bg-[var(--surface)] p-6 sm:p-10 rounded-2xl border border-[var(--border)] shadow-sm">
            <ApproachLadder />
          </div>
        </div>
      </div>
    </section>
  );
}
