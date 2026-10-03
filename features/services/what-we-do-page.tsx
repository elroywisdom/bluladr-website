import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import {
  IllustrationCompass,
  IllustrationSpotlight,
  IllustrationBooks,
} from "@/shared/ui/illustrations";

const SERVICES = [
  {
    id: "blustrategy",
    name: "BluStrategy",
    tagline: "Brand & Business Strategy",
    desc: "Structured brand, marketing and business strategy, so every decision has a direction.",
    href: "/blustrategy",
    color: "var(--azure)",
    borderColor: "hover:border-[var(--azure)]",
    icon: <IllustrationCompass className="w-full h-full" />,
    deliverable: "A complete Brand Bible covering brand, business and marketing strategy.",
  },
  {
    id: "bluexecutive",
    name: "BluExecutive",
    tagline: "Executive Presence & Public Speaking",
    desc: "Executive branding, public speaking and media training for leaders who represent the organisation.",
    href: "/bluexecutive",
    color: "var(--purple)",
    borderColor: "hover:border-[var(--purple)]",
    icon: <IllustrationSpotlight className="w-full h-full" />,
    deliverable: "A clear executive brand identity and complete media readiness.",
  },
  {
    id: "bluacademy",
    name: "BluAcademy",
    tagline: "Internal Team Training",
    desc: "Practical training that builds strong in-house marketing, communications and strategy teams.",
    href: "/bluacademy",
    color: "var(--green)",
    borderColor: "hover:border-[var(--green)]",
    icon: <IllustrationBooks className="w-full h-full" />,
    deliverable: "End-to-end internal capability across 6 comprehensive courses.",
  },
] as const;

export function WhatWeDoPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
              Guide. Train. <span className="italic">Ask the right questions.</span>
            </h1>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed m-0">
              Every organisation is at a different stage. Some need a strategy. Some need a leader who can carry the message. Some need a team that can do the work in-house. We do all three.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three Services Breakdown */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className={`group flex flex-col p-8 sm:p-10 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--sh3)] ${service.borderColor}`}
              >
                <div className="h-28 w-full flex items-center justify-start mb-6 p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <div className="w-32 h-20">
                    {service.icon}
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider font-[var(--ui)] mb-2" style={{ color: service.color }}>
                  {service.tagline}
                </span>

                <h2 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3">
                  {service.name}
                </h2>

                <p className="font-[var(--body)] text-[var(--text2)] text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text2)] leading-relaxed mb-8 flex-1">
                  <b className="text-[var(--text)] block mb-1">You leave with:</b>
                  {service.deliverable}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-bold font-[var(--ui)] no-underline hover:translate-x-1 transition-transform"
                  style={{ color: service.color }}
                >
                  <span>Explore {service.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Pick your starting point. We&rsquo;ll shape the rest.
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Tell us where you are today. Every engagement is tailored after a discovery call.
          </p>
          <Button href="/contact" variant="white" className="px-8 py-4 text-base">
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
