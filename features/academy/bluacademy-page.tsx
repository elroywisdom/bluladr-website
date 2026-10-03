import React from "react";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { IllustrationBooks } from "@/shared/ui/illustrations";
import { COURSES } from "./courses-data";

export function BluAcademyPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--green)] font-[var(--ui)] block mb-4">
                BluAcademy
              </span>
              <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
                Build real, practical <span className="italic">in-house capability.</span>
              </h1>
              <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed mb-8">
                Outsourcing adds up. We help you save by training your team until it is stronger, with real, practical capability.
              </p>
              <Button href="/contact" variant="primary">
                Request a Proposal
              </Button>
            </div>

            <div className="p-8 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-sm flex items-center justify-center">
              <div className="w-64 h-64 flex items-center justify-center">
                <IllustrationBooks className="w-full h-full text-[var(--green)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Formats */}
      <section className="w-full py-16 sm:py-24 bg-[var(--alt)] border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--green)] font-[var(--ui)] block mb-2">
                Who attends
              </span>
              <h3 className="font-[var(--disp)] text-xl sm:text-2xl font-normal text-[var(--text)] mb-3">
                Cross-Functional Teams
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed m-0">
                Mixed teams across marketing, communications and strategy. Your organisation decides who is in the room.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--green)] font-[var(--ui)] block mb-2">
                Delivery Format
              </span>
              <h3 className="font-[var(--disp)] text-xl sm:text-2xl font-normal text-[var(--text)] mb-3">
                In-Person &amp; Hybrid
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed m-0">
                Mostly in person, with hybrid options. Standard and extensive sessions; extensive sessions add a hands-on workshop.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--green)] font-[var(--ui)] block mb-2">
                Outcome
              </span>
              <h3 className="font-[var(--disp)] text-xl sm:text-2xl font-normal text-[var(--text)] mb-3">
                End-to-End Proficiency
              </h3>
              <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed m-0">
                End-to-end internal capability across brand, communication, creativity and project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 Courses Grid */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <h2 className="font-[var(--disp)] text-3xl sm:text-4xl font-normal text-[var(--text)] m-0">
              Our 6 core courses
            </h2>
            <p className="font-[var(--body)] text-[var(--text2)] text-base sm:text-lg mt-3 leading-relaxed">
              Tailored curriculum designed to equip internal teams with practical frameworks and immediate execution confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/bluacademy/${course.slug}`}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-[var(--raised)] border border-[var(--border)] shadow-[var(--sh1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--sh3)] hover:border-[var(--azure)]/60 no-underline text-left"
              >
                <div>
                  {/* Top Bar: Category Pill & Watermark Numeral */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-[var(--ui)] bg-[var(--alt)] text-[var(--azure)] border border-[var(--border)]">
                      Course {course.number}
                    </span>
                    <span className="font-[var(--disp)] text-3xl font-light text-[var(--text2)]/30 select-none">
                      0{course.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-[var(--disp)] text-2xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--azure)] transition-colors">
                    {course.title}
                  </h3>
                  <p className="font-[var(--body)] text-[var(--text2)] text-sm leading-relaxed mb-6">
                    {course.shortDesc}
                  </p>

                  {/* Key Modules Preview */}
                  <div className="space-y-2.5 pt-5 border-t border-[var(--border)] mb-6">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text2)]/80 font-[var(--ui)]">
                      Key Focus Areas:
                    </span>
                    {course.whatWeCover.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-[var(--body)] text-[var(--text)]">
                        <span className="text-[var(--azure)] font-bold text-sm leading-none shrink-0">✦</span>
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
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold font-[var(--ui)] text-[var(--accent)] group-hover:translate-x-1 transition-transform">
                    <span>View outline</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Ready to build your team&rsquo;s internal proficiency?
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Tell us about your team size and training goals to get a tailored syllabus and proposal.
          </p>
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
