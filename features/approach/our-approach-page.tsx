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

      {/* 2. Interactive 8-Step Ladder */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-[var(--disp)] text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 text-[var(--text)]">
                The eight-step approach ladder
              </h2>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
                From the first conversation to long-term monitoring, our process ensures total alignment, rigorous skill-building, and enduring value.
              </p>
              <div className="p-6 rounded-2xl bg-[var(--alt)] border border-[var(--border)] mb-8">
                <p className="font-[var(--disp)] text-xl italic text-[var(--text)] m-0">
                  &ldquo;No guesswork. No generic slides. Just work that makes sense.&rdquo;
                </p>
              </div>
              <Button href="/contact" variant="secondary">
                Request a Proposal
              </Button>
            </div>

            <div className="bg-[var(--surface)] p-6 sm:p-10 rounded-3xl border border-[var(--border)] shadow-sm">
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
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </div>
  );
}
