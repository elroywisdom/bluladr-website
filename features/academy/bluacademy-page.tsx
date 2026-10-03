import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { IllustrationBooks } from "@/shared/ui/illustrations";
import { COURSES } from "./courses-data";

const COURSE_THEMES: Record<string, { color: string; bg: string; border: string }> = {
  "brand-strategy": {
    color: "#38BDF8",
    bg: "rgba(56, 189, 248, 0.12)",
    border: "rgba(56, 189, 248, 0.3)",
  },
  "strategic-communications": {
    color: "#C084FC",
    bg: "rgba(192, 132, 252, 0.12)",
    border: "rgba(192, 132, 252, 0.3)",
  },
  "creative-thinking": {
    color: "#8BE0DE",
    bg: "rgba(139, 224, 222, 0.15)",
    border: "rgba(139, 224, 222, 0.35)",
  },
  "brand-stewardship": {
    color: "#4ADE80",
    bg: "rgba(74, 222, 128, 0.12)",
    border: "rgba(74, 222, 128, 0.3)",
  },
  "creative-project-management": {
    color: "#FBBF24",
    bg: "rgba(251, 191, 36, 0.12)",
    border: "rgba(251, 191, 36, 0.3)",
  },
  "campaign-and-content-development": {
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.12)",
    border: "rgba(96, 165, 250, 0.3)",
  },
};

export function BluAcademyPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full relative pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)] overflow-hidden">
        {/* Subtle emerald ambient aura */}
        <div
          className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(3,166,14,0.06)_0%,transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
                Build real, practical <br />
                <span className="italic">in-house capability.</span>
              </h1>

              <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8">
                Outsourcing can be very expensive. We help you save by training your team until it is stronger, with real, practical capability.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" variant="primary" className="bg-[#03530A] text-white hover:bg-[#03A60E]">
                  Request a Proposal
                </Button>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold font-[var(--ui)] text-[var(--text)] hover:text-[#03530A] transition-colors no-underline"
                >
                  <span>Explore Course Syllabi</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[380px] flex items-center justify-center p-4">
                <IllustrationBooks className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Training Architecture & Formats (Rich Dark Bento) */}
      <section className="w-full relative bg-[#090E0C] text-white py-20 sm:py-28 border-b border-white/10 overflow-hidden isolate">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(3,166,14,0.15)_0%,transparent_70%)] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[#4ADE80] mb-3">
              <span>Training Architecture</span>
            </div>
            <h2 className="font-[var(--disp)] text-[clamp(2rem,3.2vw+1rem,3.25rem)] font-normal text-white leading-tight m-0">
              How BluAcademy delivers impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Who gets trained */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 shadow-xl flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-[var(--ui)] bg-[#03A60E]/20 text-[#4ADE80] border border-[#03A60E]/30 mb-4">
                  Target Cohort
                </div>
                <h3 className="font-[var(--disp)] text-2xl font-normal text-white mb-3">
                  Cross-Functional Teams
                </h3>
                <p className="font-[var(--body)] text-white/70 text-sm leading-relaxed m-0">
                  Mixed teams across marketing, communications and strategy. Your organisation decides who is in the room to build cross-departmental synergy.
                </p>
              </div>
            </div>

            {/* Card 2: Delivery Format */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 shadow-xl flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-[var(--ui)] bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30 mb-4">
                  Delivery Modes
                </div>
                <h3 className="font-[var(--disp)] text-2xl font-normal text-white mb-3">
                  In-Person, Hybrid &amp; Virtual
                </h3>
                <p className="font-[var(--body)] text-white/70 text-sm leading-relaxed m-0">
                  Mostly in person, with hybrid and fully virtual options. Standard and extensive sessions; extensive sessions add high-impact hands-on workshops.
                </p>
              </div>
            </div>

            {/* Card 3: Outcome */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 shadow-xl flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-[var(--ui)] bg-[#C084FC]/20 text-[#C084FC] border border-[#C084FC]/30 mb-4">
                  Measurable ROI
                </div>
                <h3 className="font-[var(--disp)] text-2xl font-normal text-white mb-3">
                  End-to-End Proficiency
                </h3>
                <p className="font-[var(--body)] text-white/70 text-sm leading-relaxed m-0">
                  Permanent internal capability across brand, communication, creativity and project delivery—reducing long-term reliance on expensive external vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 6 Core Courses Grid */}
      <section id="courses" className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--alt)] border border-[var(--border)] text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--accent)] mb-4">
              <span>Comprehensive Curriculum</span>
            </div>
            <h2 className="font-[var(--disp)] text-[clamp(2.25rem,3.5vw+1rem,3.75rem)] leading-[1.08] tracking-[-0.025em] text-[var(--text)] m-0">
              Our 6 core masterclasses.
            </h2>
            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg mt-3 leading-relaxed">
              Tailored curriculum designed to equip internal teams with practical frameworks and immediate execution confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => {
              const theme = COURSE_THEMES[course.slug] || {
                color: "var(--azure)",
                bg: "var(--alt)",
                border: "var(--border)",
              };

              return (
                <Link
                  key={course.id}
                  href={`/bluacademy/${course.slug}`}
                  className="group relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--sh3)] no-underline text-left"
                  style={
                    {
                      "--hover-border": theme.color,
                    } as React.CSSProperties
                  }
                >
                  <div>
                    {/* Top Bar: Category Pill & Watermark Numeral */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-[var(--ui)] tracking-wide"
                        style={{
                          backgroundColor: theme.bg,
                          color: theme.color,
                          border: `1px solid ${theme.border}`,
                        }}
                      >
                        Course {course.number}
                      </span>
                      <span className="font-[var(--disp)] text-3xl font-light text-[var(--text2)]/30 select-none">
                        0{course.number}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-[var(--disp)] text-2xl sm:text-3xl font-normal text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {course.title}
                    </h3>
                    <p className="font-[var(--body)] text-[var(--text2)] text-sm sm:text-base leading-relaxed mb-6">
                      {course.shortDesc}
                    </p>

                    {/* Key Modules Preview */}
                    <div className="space-y-2.5 pt-5 border-t border-[var(--border)] mb-6">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text2)]/80 font-[var(--ui)]">
                        Key Focus Areas:
                      </span>
                      {course.whatWeCover.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-[var(--body)] text-[var(--text)]">
                          <span style={{ color: theme.color }} className="font-bold text-sm leading-none shrink-0">
                            ✦
                          </span>
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text2)] font-[var(--ui)]">
                      {course.extensiveSession ? "Workshop included" : "Standard intensive"}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-[var(--ui)] group-hover:translate-x-1.5 transition-transform"
                      style={{ color: theme.color }}
                    >
                      <span>View syllabus</span>
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden isolate">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.2)_0%,rgba(4,157,217,0.1)_50%,transparent_75%)] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[#4ADE80] mb-6">
              <span>Tailored Corporate Training</span>
            </div>

            <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] font-normal text-white leading-[1.08] tracking-[-0.025em] mb-6">
              Ready to build your team&rsquo;s <span className="italic underline decoration-[#4ADE80] decoration-2">internal proficiency?</span>
            </h2>

            <p className="font-[var(--body)] text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us about your team size and training goals to get a tailored syllabus and proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="white" className="w-full sm:w-auto px-8 py-4 text-base">
                Request a Proposal
              </Button>
              <Button href="/contact" variant="outline-white" className="w-full sm:w-auto px-8 py-4 text-base">
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
