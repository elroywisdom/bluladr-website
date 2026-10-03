import React from "react";
import Image from "next/image";
import { Eyebrow } from "@/shared/ui/eyebrow";

const CLIENTS = [
  {
    name: "Embassy of Sweden, Abuja",
    type: "Diplomatic Mission",
    logo: "/partner-logo/sweden-embassy.png",
    width: 240,
    height: 120,
    imgClass: "max-h-16 sm:max-h-20 w-auto object-contain",
  },
  {
    name: "Murfaj Farms",
    type: "Agribusiness",
    logo: "/partner-logo/murfaj-logo-clean.png",
    width: 280,
    height: 100,
    imgClass: "max-h-14 sm:max-h-16 w-auto object-contain [html[data-theme='dark']_&]:brightness-150",
  },
  {
    name: "BGR",
    type: "Public Sector & Strategy",
    logo: "/partner-logo/bgr-clean.png",
    width: 220,
    height: 100,
    imgClass: "max-h-14 sm:max-h-16 w-auto object-contain [html[data-theme='dark']_&]:brightness-125",
  },
  {
    name: "Rutherford Digital Solutions",
    type: "Technology",
    logo: "/partner-logo/rutherford-digital-solutions-clean.png",
    width: 320,
    height: 100,
    imgClass: "max-h-14 sm:max-h-16 w-auto object-contain [html[data-theme='dark']_&]:brightness-200 [html[data-theme='dark']_&]:contrast-125",
  },
] as const;

// 2 repetitions per sequence to ensure full-width coverage across wide viewports
const SEQUENCE = [...CLIENTS, ...CLIENTS];

export function ClientsSection() {
  return (
    <section
      aria-label="Clients and partners"
      className="w-full bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 border-t border-[var(--border)] transition-colors duration-200 overflow-hidden"
    >
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        <div className="mb-10 sm:mb-14">
          <Eyebrow>Trusted Partnerships</Eyebrow>
          <h2 className="font-[var(--disp)] text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text)] tracking-tight m-0">
            In good company.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--text2)] max-w-2xl">
            Partnering with diplomatic missions, agribusiness pioneers, and public institutions to build sustainable growth.
          </p>
        </div>
      </div>

      {/* Marquee Track Container with Edge Gradients & Pause-on-Hover */}
      <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] hover:[&_.animate-marquee]:[animation-play-state:paused]">
        <div className="animate-marquee flex items-center">
          {/* Primary Sequence (Accessible) */}
          <div className="flex items-center shrink-0">
            {SEQUENCE.map((client, idx) => (
              <ClientCard key={`primary-${client.name}-${idx}`} client={client} />
            ))}
          </div>

          {/* Duplicated Sequence for Seamless Infinite Loop (Screen reader hidden) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {SEQUENCE.map((client, idx) => (
              <ClientCard key={`duplicate-${client.name}-${idx}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientCard({
  client,
}: {
  client: (typeof CLIENTS)[number];
}) {
  return (
    <div className="w-[280px] sm:w-[320px] shrink-0 mx-3 sm:mx-4 p-6 sm:p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] flex flex-col items-center justify-between min-h-[180px] sm:min-h-[200px] transition-all duration-300 hover:border-[var(--sky)] hover:shadow-lg hover:-translate-y-1">
      <div className="relative w-full h-20 sm:h-24 flex items-center justify-center">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          width={client.width}
          height={client.height}
          className={`${client.imgClass} transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 text-center">
        <span className="text-xs font-semibold font-[var(--ui)] text-[var(--text)] tracking-wide">
          {client.name}
        </span>
        <span className="text-[11px] font-medium font-[var(--ui)] text-[var(--text2)] opacity-80">
          {client.type}
        </span>
      </div>
    </div>
  );
}
