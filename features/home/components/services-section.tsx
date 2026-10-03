import React from "react";
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
    desc: "Structured brand, marketing and business strategy, so every decision has a direction.",
    href: "/blustrategy",
    color: "var(--azure)",
    borderColor: "hover:border-[var(--azure)]",
    icon: <IllustrationCompass className="w-full h-full text-[var(--azure)]" />,
  },
  {
    id: "bluexecutive",
    name: "BluExecutive",
    tagline: "Presence & Influence",
    desc: "Executive branding, public speaking and media training for leaders who represent the organisation.",
    href: "/bluexecutive",
    color: "var(--purple)",
    borderColor: "hover:border-[var(--purple)]",
    icon: <IllustrationSpotlight className="w-full h-full text-[var(--purple)]" />,
  },
  {
    id: "bluacademy",
    name: "BluAcademy",
    tagline: "Capability & Mastery",
    desc: "Practical training that builds strong in-house marketing, communications and strategy teams.",
    href: "/bluacademy",
    color: "var(--green)",
    borderColor: "hover:border-[var(--green)]",
    icon: <IllustrationBooks className="w-full h-full text-[var(--green)]" />,
  },
] as const;

export function ServicesSection() {
  return (
    <section className="w-full bg-[var(--alt)] text-[var(--text)] py-20 sm:py-28 md:py-36 border-t border-[var(--border)] transition-colors duration-200">
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-[var(--disp)] text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.12] tracking-[-0.02em] text-[var(--text)] m-0">
            Three ways we help you show up better.
          </h2>
          <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg mt-4 leading-relaxed">
            Whether you need a rock-solid market strategy, a coached leader on the podium, or a team equipped with real skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, i) => (
            <a
              key={service.id}
              href={service.href}
              className={`group relative flex flex-col p-8 sm:p-9 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--sh3)] no-underline ${service.borderColor}`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="h-28 w-full flex items-center justify-start mb-6 p-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] group-hover:scale-[1.02] transition-transform duration-300">
                <div className="w-32 h-20">
                  {service.icon}
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider font-[var(--ui)] mb-2" style={{ color: service.color }}>
                {service.tagline}
              </span>

              <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {service.name}
              </h3>

              <p className="font-[var(--body)] text-[var(--text2)] text-sm sm:text-base leading-relaxed flex-1 mb-6">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold font-[var(--ui)] group-hover:translate-x-1 transition-transform" style={{ color: service.color }}>
                <span>Explore {service.name}</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
