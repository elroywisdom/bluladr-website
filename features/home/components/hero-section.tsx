"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      video.pause();
      return;
    }

    // IntersectionObserver: play when visible, pause when off-screen
    let isVisible = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && document.visibilityState === "visible") {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(card);

    // Pause when tab is hidden, resume when tab is focused
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (isVisible && !prefersReducedMotion) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="w-full bg-[var(--surface)] text-[var(--text)] transition-colors duration-200"
    >
      {/* Container: max-width 1280px with fluid side padding */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-[clamp(48px,9.5vw,144px)] pb-[clamp(48px,7vw,100px)]">
        {/* Top block: two columns (1.3fr / 1fr on desktop, bottom-aligned to baseline) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 sm:gap-8 lg:gap-12 items-end mb-[clamp(40px,7vw,100px)]">
          {/* Left: H1 Supreme Extrabold 800 with signature gradient underline on "work make sense." */}
          <div>
            <h1
              id="hero-title"
              className="font-[var(--ui)] font-extrabold text-[clamp(2.25rem,2.1vw+1.75rem,3.75rem)] leading-[1.06] tracking-[-0.03em] text-[var(--text)] m-0 [text-wrap:balance]"
            >
              <span className="hero-word" style={{ "--w-i": 0 } as React.CSSProperties}>
                Let&rsquo;s
              </span>{" "}
              <span className="hero-word" style={{ "--w-i": 1 } as React.CSSProperties}>
                make
              </span>{" "}
              <span className="hero-word" style={{ "--w-i": 2 } as React.CSSProperties}>
                the
              </span>{" "}
              <span className="hero-underline inline whitespace-normal">
                <span className="hero-word" style={{ "--w-i": 3 } as React.CSSProperties}>
                  work
                </span>{" "}
                <span className="hero-word" style={{ "--w-i": 4 } as React.CSSProperties}>
                  make
                </span>{" "}
                <span className="hero-word" style={{ "--w-i": 5 } as React.CSSProperties}>
                  sense.
                </span>
              </span>
            </h1>
          </div>

          {/* Right: Recia 400 (serif) paragraph & persistent CTAs */}
          <div className="flex flex-col justify-start lg:justify-end gap-6">
            <p className="hero-para font-[var(--disp)] font-normal text-[clamp(1.0625rem,0.35vw+0.98rem,1.3125rem)] leading-[1.43] max-w-[480px] text-[var(--text2)] m-0">
              BluLadr is a media and communications consultancy. We help organisations clarify their message, strengthen their brand and build internal capability.
            </p>

            {/* Always-visible CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/work-with-us"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 bg-gradient-to-r from-[#049DD9] via-[#1E8FDB] to-[#1F4591] text-white rounded-full font-[var(--ui)] font-bold text-sm tracking-wide shadow-[0_4px_14px_rgba(4,157,217,0.28)] hover:shadow-[0_6px_22px_rgba(4,157,217,0.45)] hover:-translate-y-0.5 transition-all duration-300 no-underline cursor-pointer"
              >
                View Packages
              </Link>
              <Link
                href="/our-approach"
                className="inline-flex items-center gap-2 font-[var(--ui)] font-bold text-sm text-[var(--text)] hover:text-[var(--azure)] hover:translate-x-1 transition-all no-underline"
              >
                <span>See our approach</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Media Card: Clean full-width video canvas without disappearing text overlay */}
        <div
          ref={cardRef}
          className="hero-card relative w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#05070F] min-h-[clamp(380px,42vw,620px)] isolate shadow-[var(--sh3)] border border-white/5"
        >
          {/* Decorative video with poster fallback */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/hero-poster.jpg"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
