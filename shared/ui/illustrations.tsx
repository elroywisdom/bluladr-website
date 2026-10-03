import React from "react";
import { cn } from "@/shared/utils/cn";

export interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function IllustrationLadder({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto text-[var(--azure)]", className)}
      {...props}
    >
      <path className="draw" d="M34 82 46 8M80 82 92 10" stroke="currentColor" strokeWidth="4" />
      <path className="draw" d="M38 64h40M41 46h40M44 28h40" stroke="var(--aqua)" strokeWidth="3.5" />
      <path d="M96 22l8-8M100 30h10" stroke="var(--confetti)" strokeWidth="3" />
      <circle cx="108" cy="14" r="3" fill="var(--confetti)" stroke="none" />
    </svg>
  );
}

export function IllustrationQuestion({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto text-[var(--purple)]", className)}
      {...props}
    >
      <circle cx="60" cy="45" r="38" fill="rgba(192, 132, 252, 0.12)" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <path className="wob" d="M44 34c-2-14 10-22 20-20s18 12 8 22c-7 6-12 9-11 20" stroke="currentColor" strokeWidth="4" />
      <circle cx="61" cy="74" r="4" fill="currentColor" stroke="none" />
      <circle cx="92" cy="22" r="4.5" fill="var(--confetti)" stroke="none" />
    </svg>
  );
}

export function IllustrationFlow({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto text-[var(--azure)]", className)}
      {...props}
    >
      <g fill="var(--aqua)" stroke="none">
        <circle cx="16" cy="22" r="3.5" /><circle cx="30" cy="22" r="3.5" />
        <circle cx="16" cy="38" r="3.5" /><circle cx="30" cy="38" r="3.5" />
        <circle cx="16" cy="54" r="3.5" /><circle cx="30" cy="54" r="3.5" />
      </g>
      <path d="M44 30c22-20 30 40 56 18" stroke="var(--sky)" strokeWidth="4" />
      <path d="M44 46c22-20 30 40 56 18" stroke="var(--aqua)" strokeWidth="3" strokeDasharray="3 3" />
      <circle cx="102" cy="48" r="4.5" fill="var(--confetti)" stroke="none" />
    </svg>
  );
}

export function IllustrationConfetti({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto", className)}
      {...props}
    >
      <g stroke="none">
        <rect x="20" y="20" width="14" height="6" rx="2" fill="var(--confetti)" transform="rotate(30 27 23)" />
        <circle cx="60" cy="18" r="5" fill="var(--sky)" />
        <rect x="88" y="30" width="14" height="6" rx="2" fill="var(--green)" transform="rotate(-40 95 33)" />
        <circle cx="40" cy="60" r="4.5" fill="var(--purple)" />
        <rect x="70" y="58" width="12" height="6" rx="2" fill="var(--aqua)" transform="rotate(60 76 61)" />
        <circle cx="100" cy="70" r="5" fill="var(--confetti)" />
      </g>
    </svg>
  );
}

export function IllustrationSpotlight({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto", className)}
      {...props}
    >
      <defs>
        <linearGradient id="spotlight-beam" x1="60" y1="6" x2="60" y2="82" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#81006C" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Radiant Spotlight Beam */}
      <path d="M60 6 22 84h76z" fill="url(#spotlight-beam)" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />

      {/* Microphone Capsule */}
      <rect x="49" y="24" width="22" height="32" rx="11" fill="rgba(192, 132, 252, 0.25)" stroke="#C084FC" strokeWidth="3.5" />
      <line x1="49" y1="36" x2="71" y2="36" stroke="#EBD6F2" strokeWidth="2.5" />

      {/* Microphone Cradle & Stand */}
      <path d="M38 46c0 16 12 22 22 22s22-6 22-22" stroke="#EBD6F2" strokeWidth="3.5" />
      <path d="M60 68v14M46 82h28" stroke="#EBD6F2" strokeWidth="3.5" />

      {/* Energy Sparks */}
      <circle cx="34" cy="26" r="3" fill="#FFC857" stroke="none" />
      <circle cx="86" cy="22" r="3.5" fill="#8BE0DE" stroke="none" />
      <path d="M84 40l6-4M86 48h6" stroke="#C084FC" strokeWidth="2" />
    </svg>
  );
}

export function IllustrationBooks({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto", className)}
      {...props}
    >
      {/* Bottom Book (Emerald Green) */}
      <rect x="22" y="60" width="76" height="15" rx="3" fill="rgba(74, 222, 128, 0.25)" stroke="#4ADE80" strokeWidth="3.5" />
      <line x1="28" y1="67.5" x2="40" y2="67.5" stroke="#4ADE80" strokeWidth="2.5" />

      {/* Middle Book (Mint Aqua) */}
      <rect x="32" y="42" width="62" height="15" rx="3" fill="rgba(139, 224, 222, 0.25)" stroke="#8BE0DE" strokeWidth="3.5" />
      <line x1="38" y1="49.5" x2="52" y2="49.5" stroke="#8BE0DE" strokeWidth="2.5" />

      {/* Top Book (Vibrant Lime) */}
      <rect x="42" y="24" width="48" height="15" rx="3" fill="rgba(74, 222, 128, 0.35)" stroke="#4ADE80" strokeWidth="3.5" />
      <line x1="48" y1="31.5" x2="60" y2="31.5" stroke="#EBD6F2" strokeWidth="2.5" />

      {/* Spark of Wisdom / Mastery */}
      <path d="M58 10l5-6M70 12h7M74 6l4 4" stroke="#FFC857" strokeWidth="2.5" />
      <circle cx="82" cy="18" r="3.5" fill="#FFC857" stroke="none" />
      <circle cx="20" cy="46" r="3" fill="#8BE0DE" stroke="none" />
    </svg>
  );
}

export function IllustrationCompass({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto", className)}
      {...props}
    >
      {/* Outer Dial with soft ambient fill */}
      <circle cx="48" cy="48" r="32" fill="rgba(4, 157, 217, 0.12)" stroke="#4FB6DF" strokeWidth="3.5" />
      <circle cx="48" cy="48" r="3" fill="#8BE0DE" stroke="none" />

      {/* Direction Ticks */}
      <line x1="48" y1="20" x2="48" y2="24" stroke="#8BE0DE" strokeWidth="2" />
      <line x1="48" y1="72" x2="48" y2="76" stroke="#8BE0DE" strokeWidth="2" />
      <line x1="20" y1="48" x2="24" y2="48" stroke="#8BE0DE" strokeWidth="2" />
      <line x1="72" y1="48" x2="76" y2="48" stroke="#8BE0DE" strokeWidth="2" />

      {/* Dynamic Needle (Vibrant Sky & Aqua) */}
      <path d="M36 60l8-22 22-8-8 22z" fill="#049DD9" stroke="#8BE0DE" strokeWidth="2" />

      {/* Destination Pin */}
      <path
        d="M96 20a10 10 0 0 1 10 10c0 10-10 20-10 20S86 40 86 30a10 10 0 0 1 10-10z"
        fill="rgba(139, 224, 222, 0.25)"
        stroke="#8BE0DE"
        strokeWidth="3"
      />
      <circle cx="96" cy="30" r="3.5" fill="#FFC857" stroke="none" />
    </svg>
  );
}

export function IllustrationGuardian({ className, ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 90"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("w-full h-auto", className)}
      {...props}
    >
      <path d="M60 8 24 22v24c0 20 14 32 36 40 22-8 36-20 36-40V22z" fill="rgba(31, 69, 145, 0.15)" stroke="var(--navy)" strokeWidth="3.5" />
      <circle cx="52" cy="44" r="14" fill="var(--sky)" stroke="none" opacity=".6" />
      <circle cx="68" cy="44" r="14" fill="var(--aqua)" stroke="none" opacity=".7" />
    </svg>
  );
}
