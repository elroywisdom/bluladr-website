"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type PreloaderStage = "video-playing" | "brand-entering" | "exiting" | "complete";

export function Preloader() {
  const [stage, setStage] = useState<PreloaderStage>("video-playing");
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If already played in this browser session, skip directly
    if (typeof window !== "undefined" && sessionStorage.getItem("bluladr_intro_played")) {
      setStage("complete");
      return;
    }

    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Attempt video playback safely
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay fallback handled gracefully
      });
    }

    // Safety fallback: if video is blocked or takes too long, transition automatically
    const safetyTimer = setTimeout(() => {
      setStage((curr) => {
        if (curr === "video-playing") {
          handleVideoEnded();
        }
        return curr;
      });
    }, 12000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleVideoEnded = () => {
    setStage((curr) => {
      if (curr === "complete" || curr === "exiting" || curr === "brand-entering") {
        return curr;
      }
      return "brand-entering";
    });

    // Hold the brand reveal cinematically, then initiate upward wipe exit
    setTimeout(() => {
      setStage("exiting");

      setTimeout(() => {
        setStage("complete");
        if (typeof window !== "undefined") {
          sessionStorage.setItem("bluladr_intro_played", "true");
        }
        document.body.style.overflow = "";
      }, 1050); // exit transition duration (matches duration-1000 + slight buffer)
    }, 1800); // duration brand stays centered
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      if (duration > 0) {
        setProgress((currentTime / duration) * 100);
      }
    }
  };

  const handleSkip = () => {
    handleVideoEnded();
  };

  if (stage === "complete") {
    return null;
  }

  return (
    <div
      id="bluladr-preloader"
      aria-label="Loading BluLadr experience"
      role="dialog"
      aria-modal="true"
      className={[
        "fixed inset-0 z-[999999] flex items-center justify-center bg-[#07090E] overflow-hidden select-none",
        "transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]",
        stage === "exiting"
          ? "-translate-y-full pointer-events-none shadow-[0_30px_90px_rgba(0,0,0,0.85)] rounded-b-[40px] sm:rounded-b-[60px]"
          : "translate-y-0",
      ].join(" ")}
    >
      {/* 1. Background Video Layer */}
      <div
        className={[
          "absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 ease-out",
          stage === "brand-entering" || stage === "exiting"
            ? "opacity-0 scale-105 filter blur-md"
            : "opacity-100 scale-100",
        ].join(" ")}
      >
        <video
          ref={videoRef}
          src="/videos/pre-loader-video.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          onTimeUpdate={handleTimeUpdate}
          onError={handleSkip}
          className="w-full h-full object-cover object-center"
        />

        {/* Ambient Dark Gradient Vignette over video */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/80 via-transparent to-[#07090E]/60 pointer-events-none" />
      </div>

      {/* 2. Cinematic Brand Ease-In Stage */}
      <div
        className={[
          "absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none",
          stage === "brand-entering"
            ? "opacity-100 scale-100 translate-y-0 filter blur-0"
            : "opacity-0 scale-90 translate-y-4 filter blur-sm",
        ].join(" ")}
      >
        {/* Ambient Azure Glow behind logo */}
        <div
          className={[
            "absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(31,69,145,0.45)_0%,rgba(79,140,255,0.15)_40%,transparent_70%)] pointer-events-none transition-all duration-1200 ease-out",
            stage === "brand-entering" ? "scale-100 opacity-100" : "scale-50 opacity-0",
          ].join(" ")}
        />

        {/* Brand Logo in the Center */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-[220px] sm:w-[320px] md:w-[380px] h-auto">
            <Image
              src="/logo/bluladr-white.svg"
              alt="BluLadr"
              width={380}
              height={78}
              priority
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(31,69,145,0.6)]"
            />
          </div>

          {/* Subtitle / Tagline Ease-In */}
          <div
            className={[
              "mt-5 text-center transition-all duration-900 delay-200 ease-out",
              stage === "brand-entering"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2",
            ].join(" ")}
          >
            <p className="font-[var(--ui)] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/80">
              Creativity is a skill.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Bottom Video Progress Line */}
      {stage === "video-playing" && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--sky)] to-[var(--azure)] transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* 4. Skip Button */}
      {stage === "video-playing" && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute top-6 right-6 z-30 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-xs font-semibold uppercase tracking-widest backdrop-blur-md border border-white/15 transition-all duration-200 cursor-pointer"
        >
          Skip Intro →
        </button>
      )}
    </div>
  );
}
