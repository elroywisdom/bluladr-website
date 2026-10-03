import React from "react";

export function WelcomeSection() {
  const pillars = [
    {
      title: "Clarity.",
      desc: "Knowing who you are, what you stand for, and why your audience should care.",
    },
    {
      title: "Capability.",
      desc: "Building internal team muscle and skills that stay long after we finish.",
    },
    {
      title: "Consistency.",
      desc: "Ensuring every touchpoint, leader, and campaign speaks with one confident voice.",
    },
  ];

  return (
    <section className="w-full bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200">
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        {/* Centralized narrative text block (position & layout preserved) */}
        <div className="max-w-3xl mx-auto reveal mb-16 sm:mb-20">
          <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.1] tracking-[-0.025em] mb-6 text-[var(--text)]">
            Hello. You&rsquo;re in the right place.
          </h2>
          <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-6">
            No pressure, but you are about to start thinking better. The fact that you made
            it here already says something.
          </p>
          <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
            Good work begins with clear thinking and a healthy dose of curiosity. We work
            with brands to think things through, fix communication and make the work make
            sense. Sometimes we step in to guide, sometimes to train, and sometimes to ask
            the questions no one else is asking.
          </p>
          <p className="font-[var(--disp)] text-xl sm:text-2xl text-[var(--text)] italic leading-relaxed m-0">
            Things may get structured. They will never get boring.
          </p>
        </div>

        {/* 3 Core Anchors / Pillars (Full width, spacious & unconstrained) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-12 border-t border-[var(--border)]">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="reveal p-8 sm:p-9 rounded-2xl bg-[var(--raised)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--sky)] hover:shadow-md"
              style={{ "--i": idx } as React.CSSProperties}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-3">
                Pillar 0{idx + 1}
              </span>
              <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3">
                {pillar.title}
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-base leading-relaxed m-0">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
