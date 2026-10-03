import React from "react";
import Link from "next/link";
import {
  IllustrationCompass,
  IllustrationSpotlight,
  IllustrationBooks,
} from "@/shared/ui/illustrations";

const SERVICES = [
  {
    id: "blustrategy",
    name: "BluStrategy",
    tagline: "Clarity & Direction",
    desc: "Structured brand, marketing and business strategy, so every decision has an intentional direction.",
    href: "/blustrategy",
    color: "#4FB6DF",
    badgeBg: "rgba(79, 182, 223, 0.15)",
    badgeBorder: "rgba(79, 182, 223, 0.3)",
    features: ["Brand & Identity Strategy", "Marketing Architecture", "Positioning & Messaging Frameworks"],
    icon: <IllustrationCompass className="w-full h-full" />,
  },
  {
    id: "bluexecutive",
    name: "BluExecutive",
    tagline: "Presence & Influence",
    desc: "Executive branding, public speaking and media training for leaders who represent the organisation.",
    href: "/bluexecutive",
    color: "#C084FC",
    badgeBg: "rgba(192, 132, 252, 0.15)",
    badgeBorder: "rgba(192, 132, 252, 0.3)",
    features: ["Executive Image & Narrative", "Keynote & Speech Coaching", "Media Handling & Crisis Readiness"],
    icon: <IllustrationSpotlight className="w-full h-full" />,
  },
  {
    id: "bluacademy",
    name: "BluAcademy",
    tagline: "Capability & Mastery",
    desc: "Practical training and interactive masterclasses that build strong, autonomous in-house teams.",
    href: "/bluacademy",
    color: "#4ADE80",
    badgeBg: "rgba(74, 222, 128, 0.15)",
    badgeBorder: "rgba(74, 222, 128, 0.3)",
    features: ["Strategic Comms Masterclasses", "Creative Problem Solving", "Custom Corporate Cohorts"],
    icon: <IllustrationBooks className="w-full h-full" />,
  },
] as const;

export function ServicesSection() {
  return (
    <section className="w-full relative bg-[#0B0914] text-white py-24 sm:py-32 md:py-40 overflow-hidden isolate border-y border-white/10">
      {/* Ambient background glows */}
      <div
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(31,69,145,0.25)_0%,transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(81,0,108,0.2)_0%,transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--aqua)] mb-4">
            <span>What We Do</span>
          </div>
          <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-white m-0">
            Three ways we help you <span className="italic text-[var(--aqua)]">show up better.</span>
          </h2>
          <p className="font-[var(--body)] text-white/70 text-lg sm:text-xl mt-4 leading-relaxed max-w-2xl">
            Whether you need a rock-solid market strategy, a coached leader on the podium, or a team equipped with real, lasting skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="group relative flex flex-col p-8 sm:p-9 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 shadow-2xl transition-all duration-300 hover:-translate-y-2 no-underline backdrop-blur-sm"
              style={{ "--i": i } as React.CSSProperties}
            >
              {/* Top Graphic Card */}
              <div className="h-32 w-full flex items-center justify-center mb-6 p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-[1.02] transition-transform duration-300">
                <div className="w-28 h-24">
                  {service.icon}
                </div>
              </div>

              {/* Tagline pill */}
              <div className="mb-3">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-[var(--ui)]"
                  style={{
                    backgroundColor: service.badgeBg,
                    borderColor: service.badgeBorder,
                    borderWidth: "1px",
                    color: service.color,
                  }}
                >
                  {service.tagline}
                </span>
              </div>

              <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-white mb-3 group-hover:text-[var(--aqua)] transition-colors">
                {service.name}
              </h3>

              <p className="font-[var(--body)] text-white/65 text-sm sm:text-base leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Feature Highlights */}
              <div className="border-t border-white/10 pt-5 mb-8 flex-1 flex flex-col gap-2.5">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Link */}
              <div
                className="flex items-center gap-2 text-sm font-bold font-[var(--ui)] group-hover:translate-x-1.5 transition-transform"
                style={{ color: service.color }}
              >
                <span>Explore {service.name}</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
