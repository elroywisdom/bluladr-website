import React from "react";

export interface ApproachIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function IconDiscovery({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 10h32v22H22l-8 8v-8H8z" />
    </svg>
  );
}

export function IconResearch({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="21" cy="21" r="12" />
      <path d="m30 30 12 12" />
    </svg>
  );
}

export function IconUnderstanding({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="18" cy="24" r="11" />
      <circle cx="30" cy="24" r="11" />
    </svg>
  );
}

export function IconClarity({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="7" />
      <circle cx="24" cy="24" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconTraining({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M6 14 24 6l18 8-18 8zM14 20v10c6 6 14 6 20 0V20" />
    </svg>
  );
}

export function IconStructure({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="8" y="8" width="13" height="13" />
      <rect x="27" y="8" width="13" height="13" />
      <rect x="8" y="27" width="13" height="13" />
      <path d="M27 33c6-8 12 8 13-2" />
    </svg>
  );
}

export function IconPartnership({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="16" cy="24" r="10" />
      <circle cx="32" cy="24" r="10" />
    </svg>
  );
}

export function IconMandE({ size = 36, ...props }: ApproachIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M8 40V28M20 40V18M32 40V24M42 40V10" />
    </svg>
  );
}
