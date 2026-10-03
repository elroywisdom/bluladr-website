import React from "react";

export function WelcomeSection() {
  const pillars = [
    {
      num: "01",
      title: "Clarity.",
      subtitle: "Strategy & Identity",
      desc: "Knowing who you are, what you stand for, and why your audience should care.",
      color: "var(--azure)",
      bgGlow: "rgba(4, 157, 217, 0.08)",
      borderColor: "rgba(4, 157, 217, 0.25)",
    },
    {
      num: "02",
      title: "Capability.",
      subtitle: "Team Mastery",
      desc: "Building internal team muscle and practical skills that stay long after we finish.",
      color: "var(--purple)",
      bgGlow: "rgba(81, 0, 108, 0.08)",
      borderColor: "rgba(81, 0, 108, 0.25)",
    },
    {
      num: "03",
      title: "Consistency.",
      subtitle: "Omnichannel Voice",
      desc: "Ensuring every touchpoint, leader, and campaign speaks with one confident voice.",
      color: "var(--green)",
      bgGlow: "rgba(3, 166, 14, 0.08)",
      borderColor: "rgba(3, 166, 14, 0.25)",
    },
  ];

  return (
    <section className="w-full relative bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200 overflow-hidden">
      {/* Subtle brand ambient backdrop */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(4,157,217,0.05)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10">
        {/* Asymmetric Editorial Grid (Left narrative + Right interactive pillar stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Statement & Editorial Copy */}
          <div className="lg:col-span-6 reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--alt)] border border-[var(--border)] text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--accent)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--azure)] animate-pulse" />
              The BluLadr Philosophy
            </div>

            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] mb-6">
              Hello. You&rsquo;re in the <span className="italic underline decoration-[var(--aqua)] decoration-wavy decoration-2">right place.</span>
            </h2>

            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-6 font-medium">
              No pressure, but you are about to start thinking better. The fact that you made it here already says something.
            </p>

            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-8">
              Good work begins with clear thinking and a healthy dose of curiosity. We work with brands to think things through, fix communication and make the work make sense. Sometimes we step in to guide, sometimes to train, and sometimes to ask the questions no one else is asking.
            </p>

            <div className="p-6 rounded-2xl bg-[var(--alt)]/70 border-l-4 border-[var(--azure)] border-y border-r border-[var(--border)] shadow-sm">
              <p className="font-[var(--disp)] text-xl sm:text-2xl text-[var(--text)] italic leading-snug m-0">
                &ldquo;Things may get structured. They will never get boring.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: 3 Tactile Anchor Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-5 pt-2">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="reveal group relative p-7 sm:p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--sh2)]"
                style={{
                  "--i": idx,
                  borderColor: undefined,
                } as React.CSSProperties}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold font-mono tracking-wider"
                      style={{
                        backgroundColor: pillar.bgGlow,
                        color: pillar.color,
                        border: `1px solid ${pillar.borderColor}`,
                      }}
                    >
                      {pillar.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider font-[var(--ui)] text-[var(--text2)]">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-150"
                    style={{ backgroundColor: pillar.color }}
                  />
                </div>

                <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-[var(--body)] text-[var(--text2)] text-base leading-relaxed m-0">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
