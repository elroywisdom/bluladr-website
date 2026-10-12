import React from "react";
import Image from "next/image";

export function WelcomeSection() {
  const pillars = [
    {
      num: "01",
      title: "Clarity.",
      subtitle: "Strategy & Identity",
      desc: "Knowing who you are, what you stand for, and why your audience should care.",
      color: "var(--azure)",
    },
    {
      num: "02",
      title: "Capability.",
      subtitle: "Team Mastery",
      desc: "Building internal team muscle and practical skills that stay long after we finish.",
      color: "var(--purple)",
    },
    {
      num: "03",
      title: "Consistency.",
      subtitle: "Omnichannel Voice",
      desc: "Ensuring every touchpoint, leader, and campaign speaks with one confident voice.",
      color: "var(--green)",
    },
  ];

  return (
    <section className="w-full relative bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200 overflow-hidden">
      <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10">
        {/* Top Split: Bold Headline & Editorial Story + Strategic Workshop Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Column: Narrative Copy */}
          <div className="lg:col-span-7 reveal">
            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] mb-6">
              Hello. You&rsquo;re in the <span className="italic underline decoration-[var(--aqua)] decoration-wavy decoration-2">right place.</span>
            </h2>

            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-8">
              Good work begins with clear thinking and a healthy dose of curiosity. We work with brands to think things through, fix communication and make the work make sense. Sometimes we step in to guide, sometimes to train, and sometimes to ask the questions no one else is asking.
            </p>

            <div className="p-6 rounded-2xl bg-[var(--alt)]/70 border-l-4 border-[var(--azure)] border-y border-r border-[var(--border)] shadow-sm">
              <p className="font-[var(--disp)] text-xl sm:text-2xl text-[var(--text)] italic leading-snug m-0">
                &ldquo;Things will get structured. They will never get boring.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Photo breaking up the text */}
          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] aspect-[4/3] group">
              <Image
                src="/brand-assets/strategy-session.jpg"
                alt="BluLadr strategy workshop in session"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-[var(--ui)] font-semibold tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--aqua)] animate-pulse" />
                Collaborative strategy &amp; team alignment
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-[var(--border)]">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="reveal p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--sh2)] hover:border-[var(--sky)]"
              style={{ "--i": idx } as React.CSSProperties}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-md bg-[var(--alt)]"
                  style={{ color: pillar.color }}
                >
                  [{pillar.num}]
                </span>
                <span className="text-xs font-bold uppercase tracking-wider font-[var(--ui)] text-[var(--text2)]">
                  {pillar.subtitle}
                </span>
              </div>

              <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3">
                {pillar.title}
              </h3>

              <p className="font-[var(--body)] text-[var(--text2)] text-sm sm:text-base leading-relaxed m-0">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
