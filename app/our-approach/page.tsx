import type { Metadata } from "next";
import { OurApproachPage } from "@/features/approach/our-approach-page";

export const metadata: Metadata = {
  title: "Our Approach | 8-Step Methodology | BluLadr",
  description:
    "Structured, never boring. Every engagement follows our proven 8-step methodology from Discovery to Monitoring & Evaluation.",
  alternates: { canonical: "https://bluladr.com/our-approach" },
};

export default function Page() {
  return <OurApproachPage />;
}
