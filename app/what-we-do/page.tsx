import type { Metadata } from "next";
import { WhatWeDoPage } from "@/features/services/what-we-do-page";

export const metadata: Metadata = {
  title: "What We Do | BluLadr",
  description: "Guide. Train. Ask the right questions. Explore BluStrategy, BluExecutive, and BluAcademy.",
  alternates: { canonical: "https://bluladr.com/what-we-do" },
};

export default function Page() {
  return <WhatWeDoPage />;
}
