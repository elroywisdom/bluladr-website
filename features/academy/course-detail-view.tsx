import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { Pill } from "@/shared/ui/pill";
import { Course } from "./courses-data";

export function CourseDetailView({ course }: { course: Course }) {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Breadcrumbs & Hero */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <nav className="flex items-center gap-2 text-xs font-[var(--ui)] text-[var(--text2)] mb-8">
            <Link href="/bluacademy" className="hover:text-[var(--text)] no-underline">
              BluAcademy
            </Link>
            <span>/</span>
            <span className="text-[var(--text)] font-bold">{course.title}</span>
          </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest font-[var(--ui)] block mb-4"
                  style={{ color: course.accentColor }}
                >
                  Course {course.number} &bull; Comprehensive Syllabus
                </span>
                <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,4rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
                  {course.headline}
                </h1>
                <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8">
                  {course.overview}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="/work-with-us" variant="primary">
                    View Course Pricing &amp; Packages
                  </Button>
                  <Button href="/contact?service=BluAcademy" variant="secondary">
                    Request Custom Team Billing
                  </Button>
                </div>
              </div>

              {/* Video Preview & Warmth Container (specifically featured on brand strategy & core courses) */}
              <div className="relative rounded-3xl overflow-hidden border border-[var(--border)] shadow-xl bg-[var(--raised)] group">
                <div className="relative aspect-video w-full bg-[#0B0914] flex items-center justify-center overflow-hidden">
                  <video
                    src="/brand-assets/hero-bg-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-[var(--azure)] transition-all duration-300">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-white/90 drop-shadow">
                      Watch Course Briefing (2:45)
                    </span>
                  </div>
                </div>

                <div className="p-5 border-t border-[var(--border)] bg-[var(--surface)]">
                  <div className="flex items-center justify-between text-xs font-[var(--ui)] mb-1">
                    <span className="font-bold text-[var(--text)]">Facilitator Briefing</span>
                    <span className="font-mono text-[var(--text2)]">Innocent Agboma</span>
                  </div>
                  <p className="text-xs text-[var(--text2)] font-[var(--body)] leading-relaxed m-0">
                    A quick walkthrough explaining key syllabus frameworks, practical exercises, and expected return on investment.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* 2. Course Syllabus & Outcomes */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
            {/* Left: What We Cover */}
            <div>
              <h2 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal mb-8 text-[var(--text)]">
                What we cover
              </h2>
              <ul className="space-y-4 list-none p-0 m-0">
                {course.whatWeCover.map((item, idx) => (
                  <li
                    key={item}
                    className="p-5 rounded-2xl bg-[var(--raised)] border border-[var(--border)] flex items-start gap-4 transition-all hover:border-[var(--sky)]"
                  >
                    <span
                      className="w-7 h-7 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5"
                      style={{ color: course.accentColor }}
                    >
                      {idx + 1}
                    </span>
                    <span className="font-[var(--ui)] font-bold text-base text-[var(--text)] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Special 4-Step Process for Brand Stewardship if applicable */}
              {course.howItRunsSteps && (
                <div className="mt-12 pt-10 border-t border-[var(--border)]">
                  <h3 className="font-[var(--disp)] text-2xl font-normal mb-6 text-[var(--text)]">
                    How it runs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.howItRunsSteps.map((step, idx) => (
                      <div
                        key={step.step}
                        className="p-6 rounded-2xl bg-[var(--raised)] border border-[var(--border)]"
                      >
                        <span className="text-xs font-bold font-mono text-[var(--green)] block mb-1">
                          Step 0{idx + 1}
                        </span>
                        <h4 className="font-[var(--disp)] text-xl font-normal text-[var(--text)] mb-2">
                          {step.step}
                        </h4>
                        <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed m-0">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Deliverables & Workshop Details */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--azure)] font-[var(--ui)] block mb-3">
                  Tangible Outcomes
                </span>
                <h3 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-4">
                  Your team leaves with:
                </h3>
                <p className="font-[var(--body)] text-[var(--text)] text-base sm:text-lg leading-relaxed m-0 font-medium">
                  {course.leavesWith}
                </p>
              </div>

              {course.extensiveSession && (
                <div className="p-8 rounded-2xl bg-[var(--alt)] border border-[var(--border)]">
                  <Pill variant="purple" className="mb-3">Extensive Session</Pill>
                  <h4 className="font-[var(--disp)] text-xl font-normal text-[var(--text)] mb-2">
                    Hands-On Workshop Add-On
                  </h4>
                  <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed m-0">
                    {course.extensiveSession}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Ready to bring this course to your team?
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Tell us about your team and schedule. We&rsquo;ll tailor the sessions and workshop format.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/work-with-us" variant="white" className="w-full sm:w-auto px-8 py-4 text-base">
              View Course Pricing &amp; Packages
            </Button>
            <Button href="/contact?service=BluAcademy" variant="outline-white" className="w-full sm:w-auto px-8 py-4 text-base">
              Request Custom Billing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
