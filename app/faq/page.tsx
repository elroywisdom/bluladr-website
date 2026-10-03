import type { Metadata } from "next";
import { FaqPage } from "@/features/faq/faq-page";

export const metadata: Metadata = {
  title: "FAQ | Good questions. Straight answers. | BluLadr",
  description:
    "Frequently asked questions about BluLadr services, formats, payment terms, and delivery.",
  alternates: { canonical: "https://bluladr.com/faq" },
};

export default function Page() {
  return <FaqPage />;
}
