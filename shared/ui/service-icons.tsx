import React from "react";

interface ServiceIconProps {
  className?: string;
  size?: number;
}

export function ServiceIconStrategy({ className = "", size = 48 }: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="2 3" />
      {/* Cardinal tick marks */}
      <line x1="24" y1="5" x2="24" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="39" x2="24" y2="43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="5" y1="24" x2="9" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="39" y1="24" x2="43" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Precision compass needle */}
      <path
        d="M24 12L28 24L24 22L20 24L24 12Z"
        fill="currentColor"
      />
      <path
        d="M24 36L20 24L24 26L28 24L24 36Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <circle cx="24" cy="24" r="2.5" fill="#8BE0DE" />
    </svg>
  );
}

export function ServiceIconExecutive({ className = "", size = 48 }: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Radiating voice / presence waves */}
      <path
        d="M14 18C11.5 21.5 11.5 26.5 14 30"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      <path
        d="M34 18C36.5 21.5 36.5 26.5 34 30"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.4"
      />
      <path
        d="M10 13C6 19.5 6 28.5 10 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.25"
      />
      <path
        d="M38 13C42 19.5 42 28.5 38 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.25"
      />
      {/* Sleek executive mic / podium emblem */}
      <rect x="20" y="10" width="8" height="15" rx="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 22C16 26.4 19.6 30 24 30C28.4 30 32 26.4 32 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="30" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceIconAcademy({ className = "", size = 48 }: ServiceIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stepped capability ladder bars */}
      <rect x="8" y="34" width="32" height="6" rx="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.75" />
      <rect x="13" y="24" width="22" height="6" rx="2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1.75" />
      <rect x="18" y="14" width="12" height="6" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1.75" />
      {/* Apex Spark */}
      <circle cx="24" cy="7" r="2.5" fill="#FFC857" />
      <path d="M24 1V4M29 3L27 5M19 3L21 5" stroke="#FFC857" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
