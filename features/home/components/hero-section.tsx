"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTextVisible, setIsTextVisible] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setReducedMotion(true);
      setIsTextVisible(true);
      video.pause();
      return;
    }

    // Video loop time tracker: reveal text towards the end of each video loop (5s to 10s), fade out at loop reset
    const handleTimeUpdate = () => {
      const current = video.currentTime;
      const duration = video.duration || 10;
      
      // Reveal text in the second half of the loop as the ladder completes
      if (current >= duration * 0.5) {
        setIsTextVisible(true);
      } else if (current < 1.0) {
        setIsTextVisible(false);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // IntersectionObserver: play when at least 25% visible, pause when off-screen
    let isVisible = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && document.visibilityState === "visible") {
            video.play().catch(() => {
              setIsTextVisible(true);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
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
      video.removeEventListener("timeupdate", handleTimeUpdate);
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 sm:gap-8 lg:gap-12 items-end mb-[clamp(40px,7vw,118px)]">
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

          {/* Right: Recia 400 (serif) paragraph bottom-aligned with headline */}
          <div className="lg:pb-1 flex justify-start lg:justify-end">
            <p className="hero-para font-[var(--disp)] font-normal text-[clamp(1.0625rem,0.35vw+0.98rem,1.3125rem)] leading-[1.43] max-w-[450px] text-[var(--text2)] m-0">
              BluLadr is a media and communications consultancy. We help organisations clarify their message, strengthen their brand and build internal capability.
            </p>
          </div>
        </div>

        {/* Media Card: full content width, 24px radius, video background with dark gradient overlay */}
        <div
          ref={cardRef}
          className="hero-card relative w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#05070F] text-white min-h-[clamp(480px,46vw,700px)] flex flex-col justify-center items-center text-center p-6 sm:p-10 md:p-14 lg:p-16 isolate shadow-[var(--sh3)]"
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
            className="absolute inset-0 w-full h-full object-cover object-center -z-20 pointer-events-none"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Dark gradient overlay for 4.5:1 text contrast */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[rgba(5,7,15,0.2)] via-[rgba(5,7,15,0.4)] to-[rgba(5,7,15,0.65)] -z-10 pointer-events-none"
          />

          {/* Centred Text Stack — Fades in cinematically as video loop resolves */}
          <div
            className={[
              "relative z-10 max-w-2xl mx-auto flex flex-col items-center",
              "transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isTextVisible || reducedMotion
                ? "opacity-100 translate-y-0 filter blur-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-y-4 filter blur-sm scale-[0.97] pointer-events-none",
            ].join(" ")}
          >
            <h2 className="font-[var(--disp)] font-normal text-[clamp(2.5rem,2.8vw+1.8rem,4.5rem)] leading-[1.04] tracking-[-0.02em] text-white m-0 mb-4 sm:mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
              Structured, never boring.
            </h2>
            <p className="font-[var(--disp)] font-normal text-[clamp(1rem,0.35vw+0.9rem,1.25rem)] leading-[1.4] text-white/90 max-w-[520px] m-0 mb-7 sm:mb-9 mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Whether we are building a strategy, coaching a leader or training a team, every engagement follows the same eight steps.
            </p>
            <Link
              href="/our-approach"
              className={[
                "group inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3.5",
                "bg-white text-[#191919] hover:text-black",
                "rounded-[12px] font-[var(--ui)] font-bold text-sm tracking-wide no-underline cursor-pointer",
                "transition-all duration-300 [transition-timing-function:var(--ease)] shadow-[var(--sh1)]",
                "hover:-translate-y-0.5 hover:shadow-[0_0_0_3px_#8BE0DE,0_8px_24px_rgba(30,143,219,0.35)]",
                "focus-visible:outline-3 focus-visible:outline-[var(--sky)] focus-visible:outline-offset-3",
              ].join(" ")}
            >
              <span>See our approach</span>
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
