import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/features/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | BluLadr",
  description: "BluLadr Ltd Privacy Policy and Data Handling Principles.",
  alternates: { canonical: "https://bluladr.com/privacy-policy" },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
