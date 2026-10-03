import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { QuoteCard } from "@/shared/ui/quote-card";

const STATS = [
  { value: "100+", label: "Professionals trained" },
  { value: "20+", label: "Companies served" },
  { value: "Pan-African", label: "Recognisable brand partnerships" },
];

const CLIENTS = [
  { name: "Embassy of Sweden, Abuja", logo: "/partner-logo/sweden-embassy.png", width: 240, height: 120, imgClass: "max-h-16 w-auto object-contain" },
  { name: "Murfaj Farms", logo: "/partner-logo/murfaj-logo-clean.png", width: 280, height: 100, imgClass: "max-h-14 w-auto object-contain [html[data-theme='dark']_&]:brightness-150" },
  { name: "BGR", logo: "/partner-logo/bgr-clean.png", width: 220, height: 100, imgClass: "max-h-14 w-auto object-contain [html[data-theme='dark']_&]:brightness-125" },
  { name: "Rutherford Digital Solutions", logo: "/partner-logo/rutherford-digital-solutions-clean.png", width: 320, height: 100, imgClass: "max-h-14 w-auto object-contain [html[data-theme='dark']_&]:brightness-200" },
];

export function AboutPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
              We help businesses find <span className="italic">market ease.</span>
            </h1>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed m-0">
              BluLadr Ltd is an Abuja-based media and communications consultancy. We help organisations clarify their message, strengthen their brand and build internal capability.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Story & Philosophy */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-[var(--disp)] text-2xl sm:text-3xl lg:text-4xl font-normal mb-6 text-[var(--text)]">
                Our story
              </h2>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
                Markets are loud. Messages compete. Too many businesses get stuck in the noise, unsure of what they stand for or how to say it.
              </p>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
                We exist to change that. We clarify purpose, sharpen the message and build a presence that earns reception. We often say creativity is a skill. We have trained that skill, so executives can focus on running the business while we help it show up well.
              </p>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed m-0">
                We work with businesses at different stages: from strategy development, to executive positioning, to training the teams who carry the brand every day.
              </p>
            </div>

            <div>
              <QuoteCard
                quote="Creativity is a skill. We train that skill so executives can focus on running the business while we help it show up well."
                author="What guides us"
                role="Clarity · Capability · Consistency"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="w-full py-16 sm:py-24 bg-[var(--alt)] border-y border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-3">
                Our Vision
              </span>
              <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-4">
                Confident, high-standard teams.
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed m-0">
                To build organisations with confident internal teams who think clearly, communicate well and deliver work to a high standard.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--purple)] font-[var(--ui)] block mb-3">
                Our Mission
              </span>
              <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-4">
                Structured in-house capability.
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed m-0">
                To equip internal marketing, communications and strategy teams with practical skills, structured thinking and the confidence to execute their work in-house; properly, efficiently and responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet our Principal: Innocent Agboma */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-3">
                Leadership
              </span>
              <h2 className="font-[var(--disp)] text-3xl sm:text-4xl font-normal text-[var(--text)] mb-6">
                Meet our Principal: Innocent Agboma
              </h2>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
                Innocent Agboma is a Creative Project Executive and Brand Communication Specialist with over half a decade of experience across strategy, marketing and brand communication. He works with corporate teams to improve clarity, execution and internal proficiency.
              </p>
              <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg leading-relaxed mb-6">
                He has led projects with some of the most recognisable brands across Africa, helping them think clearly, communicate effectively and deliver stronger work. As a trainer and course creator, his sessions are practical, structured and outcome-driven.
              </p>
              <p className="font-[var(--disp)] text-lg sm:text-xl text-[var(--text)] italic leading-relaxed mb-8">
                And yes, he has a soft spot for confetti.
              </p>
              <div>
                <Button href="https://linkedin.com" variant="secondary">
                  Connect on LinkedIn <span aria-hidden="true">↗</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. By the Numbers & Partner Logos */}
      <section className="w-full py-16 sm:py-24 bg-[var(--alt)] border-t border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-[var(--raised)] border border-[var(--border)]">
                <span className="font-[var(--disp)] text-4xl sm:text-5xl font-normal grad-text block mb-2">
                  {stat.value}
                </span>
                <span className="font-[var(--ui)] text-sm font-bold text-[var(--text2)]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] m-0">
              Our clients
            </h3>
            <p className="font-[var(--body)] text-[var(--text2)] text-sm mt-2">
              We are proud to have worked with Embassy of Sweden, Abuja; Murfaj Farms; BGR; and Rutherford Digital Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="p-6 rounded-2xl bg-[var(--raised)] border border-[var(--border)] flex items-center justify-center min-h-[140px]"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className={client.imgClass}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing Call to Action */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-8">
            Stay with us. It only gets <span className="italic">more interesting.</span>
          </h2>
          <Button href="/contact" variant="white" className="px-8 py-4 text-base">
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
