import React from "react";
import { Button } from "@/shared/ui/button";
import { ApproachLadder } from "@/shared/ui/approach-ladder";

export function OurApproachPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
              Our Methodology
            </span>
            <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
              Structured, <span className="italic">never boring.</span>
            </h1>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8">
              Whether we are building a strategy, coaching a leader or training a team, every engagement follows the same eight steps.
            </p>
            <Button href="/contact" variant="primary">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Interactive 8-Step Ladder & Creative Architectural Breakdown */}
      <section className="w-full py-20 sm:py-28 md:py-36">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            {/* Left Column: Sticky Narrative, Phase Breakdown, & Visual Workshop Anchor */}
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-3">
                  The Blueprint
                </span>
                <h2 className="font-[var(--disp)] text-3xl sm:text-4xl lg:text-5xl font-normal mb-6 text-[var(--text)] tracking-tight">
                  The eight-step <br />
                  <span className="italic underline decoration-[var(--azure)] decoration-2">approach ladder.</span>
                </h2>
                <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-8">
                  From the first conversation to long-term monitoring, our process ensures total alignment, rigorous skill-building, and enduring value.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary">
                    Request a Proposal
                  </Button>
                  <Button href="/work-with-us" variant="secondary">
                    View Packages
                  </Button>
                </div>
              </div>

              {/* 3 Strategic Horizons Matrix */}
              <div className="p-6 rounded-3xl bg-[var(--raised)] border border-[var(--border)] space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] mb-1">
                  Three Strategic Horizons
                </div>
                
                <div className="space-y-3 text-xs sm:text-sm font-[var(--ui)]">
                  <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded font-mono font-bold bg-[var(--azure)]/15 text-[var(--azure)] shrink-0">
                      I
                    </span>
                    <div>
                      <div className="font-bold text-[var(--text)]">Diagnostic &amp; Insight (Steps 01–03)</div>
                      <div className="text-[var(--text2)] text-xs mt-0.5">Listening before advising. Mapping market realities and baseline capability.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded font-mono font-bold bg-[var(--purple)]/15 text-[var(--purple)] shrink-0">
                      II
                    </span>
                    <div>
                      <div className="font-bold text-[var(--text)]">Architecture &amp; Mastery (Steps 04–06)</div>
                      <div className="text-[var(--text2)] text-xs mt-0.5">Giving the work a spine. Equipping internal staff with real operational tools.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded font-mono font-bold bg-[var(--green)]/15 text-[var(--green)] shrink-0">
                      III
                    </span>
                    <div>
                      <div className="font-bold text-[var(--text)]">Delivery &amp; Measurement (Steps 07–08)</div>
                      <div className="text-[var(--text2)] text-xs mt-0.5">Staying in the arena. Tracking KPIs and measuring quantifiable change.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Ladder */}
            <div className="bg-[var(--surface)] p-6 sm:p-10 rounded-3xl border border-[var(--border)] shadow-md">
              <ApproachLadder />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Ready to experience the 8-step approach?
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Book a discovery call today. We&rsquo;ll listen before we advise.
          </p>
          <Button href="/contact" variant="white" className="px-8 py-4 text-base">
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
}
