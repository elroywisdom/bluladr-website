import type { Metadata } from "next";
import { TermsOfUsePage } from "@/features/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use | BluLadr",
  description: "BluLadr Ltd Terms of Use and Intellectual Property Notice.",
  alternates: { canonical: "https://bluladr.com/terms-of-use" },
};

export default function Page() {
  return <TermsOfUsePage />;
}
