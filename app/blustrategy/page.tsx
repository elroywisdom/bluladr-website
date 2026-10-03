import type { Metadata } from "next";
import { BluStrategyPage } from "@/features/services/blustrategy-page";

export const metadata: Metadata = {
  title: "BluStrategy | Brand & Business Strategy | BluLadr",
  description:
    "Structured brand, marketing and business strategy, so every decision has a direction. Leave with a complete Brand Bible.",
  alternates: { canonical: "https://bluladr.com/blustrategy" },
};

export default function Page() {
  return <BluStrategyPage />;
}
