"use client";

import { useEffect } from "react";

/**
 * RevealObserver — registers an IntersectionObserver to toggle .in
 * on all .reveal elements, triggering the fade-up animation.
 * Client-only component; renders nothing visible.
 */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
