import type { Metadata } from "next";
import { WorkWithUsPage } from "@/features/packages/work-with-us-page";

export const metadata: Metadata = {
  title: "Work With Us | Packages & Engagements | BluLadr",
  description:
    "Pick your starting point. We'll shape the rest. Explore our core engagement packages across BluStrategy, BluExecutive, and BluAcademy.",
  alternates: { canonical: "https://bluladr.com/work-with-us" },
};

export default function Page() {
  return <WorkWithUsPage />;
}
