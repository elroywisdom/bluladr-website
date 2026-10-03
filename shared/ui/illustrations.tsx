import React from "react";
import { cn } from "@/shared/utils/cn";

export interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function IllustrationLadder({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto text-[var(--text)]", className)} {...props}>
      <path className="draw" d="M34 82 46 8M80 82 92 10" />
      <path className="draw" d="M38 64h40M41 46h40M44 28h40" />
      <path d="M96 22l8-8M100 30h10" stroke="var(--aqua)" />
    </svg>
  );
}

export function IllustrationQuestion({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto text-[var(--text)]", className)} {...props}>
      <path className="wob" d="M42 32c-3-16 10-24 22-22s19 15 8 25c-8 7-13 10-12 22" />
      <circle cx="60" cy="78" r="3.5" fill="currentColor" />
      <circle cx="92" cy="22" r="4" fill="var(--confetti)" stroke="none" />
    </svg>
  );
}

export function IllustrationFlow({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto text-[var(--text)]", className)} {...props}>
      <g fill="currentColor" stroke="none">
        <circle cx="16" cy="22" r="3" /><circle cx="30" cy="22" r="3" />
        <circle cx="16" cy="38" r="3" /><circle cx="30" cy="38" r="3" />
        <circle cx="16" cy="54" r="3" /><circle cx="30" cy="54" r="3" />
      </g>
      <path d="M44 30c22-20 30 40 56 18M44 46c22-20 30 40 56 18" stroke="var(--sky)" />
    </svg>
  );
}

export function IllustrationConfetti({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto", className)} {...props}>
      <g stroke="none">
        <rect x="20" y="20" width="14" height="6" rx="2" fill="var(--confetti)" transform="rotate(30 27 23)" />
        <circle cx="60" cy="18" r="5" fill="var(--sky)" />
        <rect x="88" y="30" width="14" height="6" rx="2" fill="var(--green)" transform="rotate(-40 95 33)" />
        <circle cx="40" cy="60" r="4" fill="var(--purple)" />
        <rect x="70" y="58" width="12" height="6" rx="2" fill="var(--aqua)" transform="rotate(60 76 61)" />
        <circle cx="100" cy="70" r="5" fill="var(--confetti)" />
      </g>
    </svg>
  );
}

export function IllustrationSpotlight({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto text-[var(--text)]", className)} {...props}>
      <path d="M60 4 28 80h64z" fill="var(--aqua)" opacity=".35" stroke="none" />
      <rect x="50" y="26" width="20" height="30" rx="10" />
      <path d="M40 48c0 20 40 20 40 0M60 68v10M46 80h28" />
    </svg>
  );
}

export function IllustrationBooks({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto text-[var(--text)]", className)} {...props}>
      <rect x="24" y="62" width="70" height="14" rx="3" />
      <rect className="draw" x="34" y="44" width="58" height="14" rx="3" />
      <rect x="44" y="26" width="46" height="14" rx="3" />
      <path d="M60 12l6-6M72 14h8" stroke="var(--confetti)" />
    </svg>
  );
}

export function IllustrationCompass({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto text-[var(--text)]", className)} {...props}>
      <circle cx="50" cy="48" r="30" />
      <path d="M38 60l8-22 22-8-8 22z" fill="var(--sky)" stroke="none" />
      <path d="M96 20a10 10 0 0 1 10 10c0 10-10 20-10 20S86 40 86 30a10 10 0 0 1 10-10z" />
    </svg>
  );
}

export function IllustrationGuardian({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("w-full h-auto text-[var(--text)]", className)} {...props}>
      <path d="M60 8 24 22v24c0 20 14 32 36 40 22-8 36-20 36-40V22z" />
      <circle cx="52" cy="44" r="14" fill="var(--sky)" stroke="none" opacity=".5" />
      <circle cx="68" cy="44" r="14" fill="var(--aqua)" stroke="none" opacity=".6" />
    </svg>
  );
}
