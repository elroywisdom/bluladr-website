import React from "react";
import Image from "next/image";

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

export function ClientsSection() {
  return (
    <section className="w-full bg-[var(--surface)] text-[var(--text)] py-20 sm:py-28 border-t border-[var(--border)] transition-colors duration-200">
      <div className="wrap max-w-[1200px] px-6 mx-auto">
        <div className="mb-12 sm:mb-16">
          <h2 className="font-[var(--disp)] text-3xl sm:text-4xl font-normal text-[var(--text)] m-0">
            In good company.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group relative p-8 sm:p-10 rounded-2xl bg-[var(--raised)] border border-[var(--border)] flex flex-col items-center justify-center min-h-[170px] sm:min-h-[190px] transition-all duration-300 hover:border-[var(--sky)] hover:shadow-lg"
            >
              <div className="relative w-full h-20 sm:h-24 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className={`${client.imgClass} transition-transform duration-300 group-hover:scale-105`}
                />
              </div>
              <span className="text-xs font-medium font-[var(--ui)] text-[var(--text2)] mt-3 opacity-75 group-hover:opacity-100 transition-opacity text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
