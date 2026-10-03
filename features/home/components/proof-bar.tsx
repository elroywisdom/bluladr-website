import React from "react";

const STATS = [
  { value: "100+", label: "Professionals trained", sub: "across private & public sectors" },
  { value: "20+",  label: "Organisations transformed", sub: "from strategy to execution" },
  { value: "Africa", label: "Pan-African impact", sub: "projects with recognisable brands" },
] as const;

export function ProofBar() {
  return (
    <section className="w-full relative bg-[var(--navy)] text-white py-16 sm:py-24 overflow-hidden">
      {/* Subtle radial aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(139,224,222,0.12)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${idx > 0 ? "pt-8 md:pt-0 md:pl-8" : ""}`}
            >
              <span className="font-[var(--disp)] text-[clamp(2.75rem,4vw+1rem,4.25rem)] font-normal leading-none tracking-tight grad-text mb-3">
                {stat.value}
              </span>
              <span className="font-[var(--ui)] text-base sm:text-lg font-bold text-white mb-1">
                {stat.label}
              </span>
              <span className="font-[var(--body)] text-xs sm:text-sm text-white/60">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
