import React from "react";
import { Button } from "@/shared/ui/button";
import { ComparisonTable } from "@/shared/ui/comparison-table";

const PACKAGES = [
  {
    package: "BluStrategy",
    included: "Brand, business and marketing strategy, industry-based",
    duration: "2-day business discovery workshop, then a 3-week development timeline",
    outcomes: "A complete Brand Bible",
  },
  {
    package: "BluExecutive",
    included: "Public speaking and media training",
    duration: "3 weeks of intensive workshops, 2 days a week",
    outcomes: "Brand identity and media readiness",
  },
  {
    package: "BluAcademy Full Programme",
    included: "All 6 courses",
    duration: "Abuja: across multiple weekends. Out of state: 3 consecutive days",
    outcomes: "End-to-end internal capability across brand, communication, creativity and project delivery",
  },
];

export function WorkWithUsPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
              Engagement Packages
            </span>
            <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
              Pick your starting point. <span className="italic">We&rsquo;ll shape the rest.</span>
            </h1>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8">
              Three ways to work with BluLadr. Every engagement is tailored after a discovery call.
            </p>
            <Button href="/contact" variant="primary">
              Request a Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Packages Table */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="mb-12">
            <ComparisonTable rows={PACKAGES} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[var(--border)]">
            <div className="p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-2">
                Custom Scope &amp; Pricing
              </span>
              <h3 className="font-[var(--disp)] text-xl sm:text-2xl font-normal text-[var(--text)] mb-3">
                Tailored Engagements
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-sm sm:text-base leading-relaxed m-0">
                Every engagement is priced to your needs, team and location. Request a proposal and we&rsquo;ll send a tailored quote.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-1">
                  Payment Terms
                </span>
                <p className="font-[var(--body)] text-sm sm:text-base text-[var(--text)] m-0 font-medium">
                  70% on confirmation, 30% on completion.
                </p>
              </div>
              <div className="pt-4 border-t border-[var(--border)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-1">
                  Out-of-state Engagements
                </span>
                <p className="font-[var(--body)] text-xs sm:text-sm text-[var(--text2)] m-0 leading-relaxed">
                  For work outside Abuja, flights, accommodation and local logistics for our Principal and one technical assistant are billed separately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Let&rsquo;s craft the right package for your team.
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Tell us where you are today. We&rsquo;ll prepare a proposal with clear timelines and deliverables.
          </p>
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
