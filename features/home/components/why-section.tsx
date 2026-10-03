import React from "react";

const REASONS = [
  {
    num: "01",
    title: "Strategic clarity.",
    body: "We bring structure to strategy, so brand, communication and business decisions stay aligned and intentional.",
  },
  {
    num: "02",
    title: "Internal proficiency.",
    body: "Your team gains the skills and confidence to do the work in-house, properly and professionally.",
  },
  {
    num: "03",
    title: "Reduced cost of outsourcing.",
    body: "Stronger internal teams mean less long-term reliance on external vendors.",
  },
  {
    num: "04",
    title: "Better engagement with agencies and standard bodies.",
    body: "Your team learns to scrutinise work, assess quality and brief vendors against the right benchmarks, with a full understanding of your brand.",
  },
] as const;

export function WhySection() {
  return (
    <section className="w-full bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200">
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] m-0">
            Clearer strategy. Stronger teams. Smarter spend.
          </h2>
          <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg mt-4 leading-relaxed">
            We don&rsquo;t believe in creating permanent dependency. We build capability into your organisation so the momentum continues long after we step back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal p-8 sm:p-10 rounded-2xl bg-[var(--raised)] border border-[var(--border)] transition-all duration-300 hover:border-[var(--sky)] hover:shadow-md flex flex-col justify-between"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div>
                <span className="font-mono text-xs font-bold text-[var(--azure)] tracking-widest block mb-4">
                  [{reason.num}]
                </span>
                <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed m-0">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
