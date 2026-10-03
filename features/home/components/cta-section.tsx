import React from "react";
import { Button } from "@/shared/ui/button";

export function CtaSection() {
  return (
    <section className="w-full relative bg-[var(--navy)] text-white py-24 sm:py-32 md:py-40 overflow-hidden isolate">
      {/* Signature background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(4,157,217,0.25)_0%,rgba(139,224,222,0.1)_50%,transparent_75%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="wrap max-w-[1200px] px-6 mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold font-[var(--ui)] uppercase tracking-wider text-[var(--aqua)] mb-6">
            <span>Start the Conversation</span>
          </div>

          <h2 className="font-[var(--disp)] text-[clamp(2.5rem,4.5vw+1rem,4.25rem)] font-normal text-white leading-[1.08] tracking-[-0.025em] mb-6">
            Your team deserves to <span className="italic underline decoration-[var(--aqua)] decoration-2">grow.</span>
          </h2>

          <p className="font-[var(--body)] text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us where you are today. We&rsquo;ll help you clarify the path, build the muscle, and work out where to go next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="white"
              className="w-full sm:w-auto px-8 py-4 text-base"
            >
              Request a Proposal
            </Button>
            <Button
              href="/contact"
              variant="outline-white"
              className="w-full sm:w-auto px-8 py-4 text-base"
            >
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
