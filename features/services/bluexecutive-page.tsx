import React from "react";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import { ServiceIconExecutive } from "@/shared/ui/service-icons";

const DELIVERABLES = [
  "Executive branding",
  "Public speaking training",
  "Media relations training",
  "Communication coaching",
];

export function BluExecutivePage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)] overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--alt)] border border-[var(--border)] text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--purple)] mb-6">
                <ServiceIconExecutive size={16} />
                <span>BluExecutive &bull; Presence &amp; Influence</span>
              </div>
              <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
                Be a more confident, articulate <span className="italic underline decoration-[var(--purple)] decoration-2">leader.</span>
              </h1>
              <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                We work with executives and spokespersons to command presence, handle high-stakes media, and communicate vision with undeniable clarity.
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
                src="/brand-assets/executive-training.jpg"
                alt="BluLadr Executive Coaching & Keynote Training"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0914]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Executive Emblem Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--purple)]/20 border border-[var(--purple)]/40 flex items-center justify-center text-[var(--purple)] shrink-0">
                  <ServiceIconExecutive size={28} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--purple)] font-[var(--ui)]">
                    Presence &bull; Influence &bull; Poise
                  </div>
                  <div className="text-sm font-[var(--body)] text-white/90">
                    Keynotes &bull; Media Crisis &bull; Boardroom Authority
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Details */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
            <div>
              <h2 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal mb-6 text-[var(--text)]">
                On stage, on camera, in the boardroom.
              </h2>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
                We work with executives to improve how they communicate, show up and represent their organisations with authority and presence.
              </p>
              <div className="p-6 rounded-2xl bg-[var(--raised)] border border-[var(--border)] space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple)] font-[var(--ui)] block mb-1">
                    How it runs
                  </span>
                  <p className="font-[var(--body)] text-base text-[var(--text)] m-0">
                    3 weeks of intensive workshops, 2 days a week.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple)] font-[var(--ui)] block mb-1">
                    You leave with
                  </span>
                  <p className="font-[var(--body)] text-base font-semibold text-[var(--text)] m-0">
                    A clear executive brand identity and media readiness.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-[var(--disp)] text-2xl font-normal mb-6 text-[var(--text)]">
                What we do
              </h3>
              <ul className="space-y-4 list-none p-0 m-0">
                {DELIVERABLES.map((item, idx) => (
                  <li
                    key={item}
                    className="p-5 rounded-xl bg-[var(--raised)] border border-[var(--border)] flex items-center gap-4 transition-all hover:border-[var(--purple)]"
                  >
                    <span className="w-8 h-8 rounded-full bg-[var(--surface)] text-[var(--purple)] border border-[var(--border)] flex items-center justify-center font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-[var(--ui)] font-bold text-base text-[var(--text)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Ready to represent your organisation with confidence?
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Let&rsquo;s discuss executive positioning and media training tailored to your calendar.
          </p>
          <Button href="/contact" variant="white" className="px-8 py-4 text-base">
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
