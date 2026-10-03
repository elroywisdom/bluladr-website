import type { Metadata } from "next";
import { AboutPage } from "@/features/about/about-page";

export const metadata: Metadata = {
  title: "About Us | BluLadr",
  description:
    "We help businesses find market ease. BluLadr Ltd is an Abuja-based media and communications consultancy.",
  alternates: { canonical: "https://bluladr.com/about" },
};

export default function Page() {
  return <AboutPage />;
}
