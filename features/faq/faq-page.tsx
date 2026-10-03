import React from "react";
import { Button } from "@/shared/ui/button";
import { Accordion, AccordionItem } from "@/shared/ui/accordion";

const FAQS = [
  {
    q: "What does BluLadr do?",
    a: "We are a media and communications consultancy. We build strategy (BluStrategy), coach leaders (BluExecutive) and train internal teams (BluAcademy).",
  },
  {
    q: "Which service is right for us?",
    a: "If you need direction, start with BluStrategy. If your leaders need to communicate with more confidence, BluExecutive. If your team needs to do the work in-house, BluAcademy. Not sure? A discovery call will tell us.",
  },
  {
    q: "Can we combine services?",
    a: "Yes. Many organisations start with strategy and then train the team to deliver it.",
  },
  {
    q: "Who gets trained at BluAcademy?",
    a: "Mixed teams across marketing, communications and strategy. Your organisation makes the final call on who gets trained.",
  },
  {
    q: "Do you work in person or online?",
    a: "We deliver in person, hybrid, and fully virtual sessions depending on your team's structure and needs.",
  },
  {
    q: "Do you work outside Abuja?",
    a: "Yes. For out-of-state work, flights, accommodation and local logistics for our Principal and one technical assistant are billed separately.",
  },
  {
    q: "How much does it cost?",
    a: "Every engagement is tailored, so pricing depends on scope, team and location. Request a proposal and we'll send a clear quote.",
  },
  {
    q: "What are the payment terms?",
    a: "70% on confirmation to secure your dates, and 30% on completion.",
  },
  {
    q: "What will we actually leave with?",
    a: "Something you can use: a Brand Bible, a media-ready leader, or a team with a working strategy, framework or workflow.",
  },
  {
    q: "How do we get started?",
    a: "Book a discovery call. We'll send a short questionnaire and take it from there.",
  },
];

export function FaqPage() {
  return (
    <div className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200">
      {/* 1. Hero Section */}
      <section className="w-full pt-20 sm:pt-28 pb-16 sm:pb-24 border-b border-[var(--border)]">
        <div className="wrap max-w-[1200px] px-6 mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--azure)] font-[var(--ui)] block mb-4">
              Frequently Asked Questions
            </span>
            <h1 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] leading-[1.08] tracking-[-0.025em] mb-6 text-[var(--text)]">
              Good questions. <span className="italic">Straight answers.</span>
            </h1>
            <p className="font-[var(--body)] text-[var(--text2)] text-lg sm:text-xl leading-relaxed m-0">
              Everything you need to know about partnering with BluLadr, our services, formats and process.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FAQ Accordions */}
      <section className="w-full py-20 sm:py-28">
        <div className="wrap max-w-3xl px-6 mx-auto">
          <div className="w-full divide-y divide-[var(--border)]">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={faq.q} summary={faq.q} defaultOpen={idx === 0}>
                <p className="font-[var(--body)] text-base sm:text-lg text-[var(--text2)] leading-relaxed m-0">
                  {faq.a}
                </p>
              </AccordionItem>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-[var(--raised)] border border-[var(--border)] text-center">
            <h3 className="font-[var(--disp)] text-2xl font-normal text-[var(--text)] mb-3">
              Have a question not listed here?
            </h3>
            <p className="font-[var(--body)] text-[var(--text2)] text-base mb-6">
              We&rsquo;re always happy to chat through your specific needs and questions.
            </p>
            <Button href="/contact" variant="secondary">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 overflow-hidden">
        <div className="wrap max-w-[1200px] px-6 mx-auto text-center relative z-10">
          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-normal text-white mb-6">
            Ready to start the conversation?
          </h2>
          <p className="font-[var(--body)] text-white/80 text-lg max-w-xl mx-auto mb-10">
            Send us a request and we&rsquo;ll get in touch to book your discovery call.
          </p>
          <Button href="/contact" variant="white" className="px-8 py-4 text-base">
            Request a Proposal
          </Button>
        </div>
      </section>
    </div>
  );
}
