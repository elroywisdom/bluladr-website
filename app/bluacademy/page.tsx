import type { Metadata } from "next";
import { BluAcademyPage } from "@/features/academy/bluacademy-page";

export const metadata: Metadata = {
  title: "BluAcademy | Team Training & Capability | BluLadr",
  description:
    "Practical training that builds strong in-house marketing, communications and strategy teams across 6 specialised courses.",
  alternates: { canonical: "https://bluladr.com/bluacademy" },
};

export default function Page() {
  return <BluAcademyPage />;
}
