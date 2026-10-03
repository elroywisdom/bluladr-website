import React from "react";
import { Button } from "@/shared/ui/button";
import { ApproachLadder } from "@/shared/ui/approach-ladder";

export function ApproachTeaser() {
  return (
    <section className="w-full relative bg-[var(--alt)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200 overflow-hidden">
      <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:sticky lg:top-32 reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--accent)] mb-4">
              <span>The 8-Step Blueprint</span>
            </div>

            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] mb-6">
              Structured from the <span className="italic underline decoration-[var(--azure)] decoration-2">first question.</span>
            </h2>

            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6 font-medium">
              Discovery, research, understanding, clarity, training, structure, partnership, and monitoring &amp; evaluation.
            </p>

            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-8">
              Every engagement follows the same intentional path so nothing is left to guesswork and every outcome is measurable.
            </p>

            <div className="flex items-center gap-4">
              <Button href="/our-approach" variant="primary" className="bg-[var(--ink)] text-white hover:bg-[var(--azure)]">
                Explore our full approach <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive 8-Step Ladder */}
          <div className="bg-[var(--surface)] p-6 sm:p-10 rounded-3xl border border-[var(--border)] shadow-md reveal">
            <ApproachLadder />
          </div>
        </div>
      </div>
    </section>
  );
}
