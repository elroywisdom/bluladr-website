import React from "react";

const REASONS = [
  {
    num: "01",
    tag: "Strategic Alignment",
    title: "Strategic clarity.",
    body: "We bring structure to strategy, so brand, communication and business decisions stay aligned and intentional.",
    color: "var(--azure)",
  },
  {
    num: "02",
    tag: "Autonomous Growth",
    title: "Internal proficiency.",
    body: "Your team gains the skills and confidence to do the work in-house, properly and professionally.",
    color: "var(--purple)",
  },
  {
    num: "03",
    tag: "Budget Efficiency",
    title: "Reduced cost of outsourcing.",
    body: "Stronger internal teams mean less long-term reliance on external agencies and costly vendor retainers.",
    color: "var(--green)",
  },
  {
    num: "04",
    tag: "Vendor Mastery",
    title: "Better engagement with agencies.",
    body: "Your team learns to scrutinise work, assess creative quality, and brief external partners with total authority.",
    color: "var(--navy)",
  },
] as const;

export function WhySection() {
  return (
    <section className="w-full relative bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200 overflow-hidden">
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Narrative & Core Value */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--alt)] border border-[var(--border)] text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--accent)] mb-4">
              <span>Why BluLadr</span>
            </div>

            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] mb-6">
              Clearer strategy. <br />
              Stronger teams. <br />
              <span className="italic underline decoration-[var(--azure)] decoration-2">Smarter spend.</span>
            </h2>

            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-8">
              We don&rsquo;t believe in creating permanent dependency. We build capability directly into your organisation so the momentum continues long after we step back.
            </p>

            <div className="p-6 rounded-2xl bg-[var(--alt)] border border-[var(--border)]">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--text2)] font-[var(--ui)] mb-2">
                Our Promise
              </div>
              <p className="font-[var(--disp)] text-lg text-[var(--text)] font-medium m-0">
                Practical frameworks your team will actually use on Monday morning.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Pillars */}
          <div className="lg:col-span-7 relative">
            {/* Subtle vertical connector rail for large screens */}
            <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-[var(--azure)] via-[var(--purple)] to-[var(--green)] opacity-20 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {REASONS.map((reason, i) => (
                <div
                  key={reason.title}
                  className="reveal group relative p-8 sm:p-9 sm:pl-16 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--sh2)] hover:border-[var(--sky)] backdrop-blur-sm overflow-hidden"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {/* Glowing left highlight bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: reason.color }}
                  />

                  {/* Desktop Step Marker Node */}
                  <div
                    className="hidden sm:flex absolute left-5 top-9 w-6 h-6 rounded-full items-center justify-center text-[10px] font-mono font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: reason.color }}
                  >
                    {reason.num}
                  </div>

                  <div className="flex items-center justify-between gap-4 mb-3 sm:mb-2">
                    <span
                      className="sm:hidden inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold font-mono tracking-widest bg-[var(--alt)]"
                      style={{ color: reason.color }}
                    >
                      [{reason.num}]
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider font-[var(--ui)] text-[var(--text2)]">
                      {reason.tag}
                    </span>
                  </div>

                  <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="font-[var(--body)] text-[var(--text2)] text-base leading-relaxed m-0">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
