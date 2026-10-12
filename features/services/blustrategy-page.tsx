import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { ServiceIconStrategy } from "@/shared/ui/service-icons";

const STRATEGY_PHASES = [
  {
    phase: "Phase 01",
    timeline: "Days 1–5",
    title: "Diagnostics & Market Intelligence",
    desc: "We scrutinise your market positioning, benchmark competitive friction, and conduct stakeholder interviews to identify unexploited ground.",
    deliverables: ["Market & Competitor Analysis", "Stakeholder Perception Audit", "Audience Segmentation"],
    accent: "var(--azure)",
  },
  {
    phase: "Phase 02",
    timeline: "Days 6–15",
    title: "Positioning & Messaging Architecture",
    desc: "We define your core brand proposition, value narrative, and tone of voice. Every message is engineered to cut through noise and convert attention.",
    deliverables: ["Core Brand Strategy", "Positioning & Messaging Framework", "Executive Communication Matrix"],
    accent: "var(--purple)",
  },
  {
    phase: "Phase 03",
    timeline: "Days 16–21",
    title: "The Brand Bible & Go-to-Market Blueprint",
    desc: "We crystallise the complete strategy into a living, authoritative guide that internal teams and external agencies adhere to without ambiguity.",
    deliverables: ["Complete Brand Bible", "Go-to-Market Rollout Plan", "Internal Team Handover Session"],
    accent: "var(--green)",
  },
];

export function BluStrategyPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--alt)] border border-[var(--border)] text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--accent)] mb-6">
                <ServiceIconStrategy size={16} />
                <span>BluStrategy &bull; Clarity &amp; Direction</span>
              </div>
              <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
                So do we. Your business deserves a <span className="italic underline decoration-[var(--azure)] decoration-2">structured strategy.</span>
              </h1>
              <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                So do we. Your business deserves a structured strategy that guides communication, marketing and business decisions.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary">
                  Request a Proposal
                </Button>
                <Button href="/work-with-us" variant="secondary">
                  View Packages
                </Button>
              </div>
            </div>

            {/* Elevated Hero Visual */}
            <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-xl group aspect-[4/3] bg-[var(--raised)]">
              <Image
                src="/images/strategy-session-glass-board.jpg"
                alt="BluLadr Strategic Workshop and Market Profiling"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Executive Emblem Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--azure)]/20 border border-[var(--azure)]/40 flex items-center justify-center text-[var(--aqua)] shrink-0">
                  <ServiceIconStrategy size={28} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--aqua)] font-[var(--ui)]">
                    The Strategy Standard
                  </div>
                  <div className="text-sm font-[var(--body)] text-white/90">
                    2-Day Intensive Workshop &bull; 3-Week Complete Build
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Creative Middle Section: Strategic Roadmap Architecture */}
      <section className="w-full py-20 sm:py-28 md:py-36">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-3">
              Methodology Architecture
            </span>
            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] mb-6">
              Industry-based. Research-led. <br />
              <span className="italic underline decoration-[var(--azure)] decoration-2">Built to be used on Monday morning.</span>
            </h2>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg leading-relaxed">
              We replace guesswork with rigorous architecture. Every engagement progresses through a transparent three-phase framework resulting in an actionable Brand Bible.
            </p>
          </div>

          {/* 3-Phase Interactive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {STRATEGY_PHASES.map((p, i) => (
              <div
                key={p.phase}
                className="group relative p-8 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
                      style={{ backgroundColor: `${p.accent}15`, color: p.accent }}
                    >
                      {p.phase}
                    </span>
                    <span className="text-xs font-bold font-mono text-[var(--text2)]">
                      {p.timeline}
                    </span>
                  </div>

                  <h3 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {p.title}
                  </h3>

                  <p className="font-[var(--body)] text-sm sm:text-base text-[var(--text2)] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--border)]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] block mb-3">
                    Deliverables:
                  </span>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {p.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2 text-xs font-medium font-[var(--ui)] text-[var(--text)]">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.accent }} />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Tangible Outcome Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[var(--alt)] border border-[var(--border)] grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-2">
                The Tangible Core Asset
              </span>
              <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-4">
                The Complete Brand Bible
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-base leading-relaxed m-0">
                You leave with a comprehensive master document covering business narrative, audience psychology, competitive positioning, and marketing architecture. Your team and agencies can execute immediately without ambiguity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end justify-center">
              <Button href="/contact" variant="primary" className="w-full sm:w-auto text-center">
                Book Discovery Workshop
              </Button>
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
