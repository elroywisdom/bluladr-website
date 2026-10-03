import React from "react";
import { Button } from "@/shared/ui/button";
import { IllustrationCompass } from "@/shared/ui/illustrations";

const DELIVERABLES = [
  "Brand strategy development",
  "Market and competitor analysis",
  "Marketing strategy",
  "Positioning and messaging",
  "Go-to-market planning",
];

export function BluStrategyPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
                BluStrategy
              </span>
              <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
                Do you think your business deserves a <span className="italic">structured strategy?</span>
              </h1>
              <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8">
                Do you think your business deserves a structured strategy that guides communication, marketing and business decisions? So do we.
              </p>
              <Button href="/contact" variant="primary">
                Request a Proposal
              </Button>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-sm flex items-center justify-center">
              <div className="w-64 h-64 flex items-center justify-center">
                <IllustrationCompass className="w-full h-full text-[var(--azure)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Details */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
            <div>
              <h2 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal mb-6 text-[var(--text)]">
                Industry-based, research-led, built to be used.
              </h2>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
                We work with businesses to define how they show up in the market: clearly, competitively and with intention.
              </p>
              <div className="p-6 rounded-2xl bg-[var(--raised)] border border-[var(--border)] space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-1">
                    How it runs
                  </span>
                  <p className="font-[var(--body)] text-base text-[var(--text)] m-0">
                    A 2-day business discovery workshop, followed by a 3-week development timeline.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-1">
                    You leave with
                  </span>
                  <p className="font-[var(--body)] text-base font-semibold text-[var(--text)] m-0">
                    A complete Brand Bible covering your brand, business and marketing strategy.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-[var(--disp)] text-2xl font-normal mb-6 text-[var(--text)]">
                What we do
              </h3>
              <ul className="space-y-4 list-none p-0 m-0">
                {DELIVERABLES.map((item, idx) => (
                  <li
                    key={item}
                    className="p-5 rounded-xl bg-[var(--raised)] border border-[var(--border)] flex items-center gap-4 transition-all hover:border-[var(--azure)]"
                  >
                    <span className="w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--azure)] border border-[var(--border)] flex items-center justify-center font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-[var(--ui)] font-bold text-base text-[var(--text)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Ready to give every decision a direction?
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Let&rsquo;s start with a discovery call and map out your strategic roadmap.
          </p>
          <Button href="/contact" variant="white" className="px-8 py-4 text-base">
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
