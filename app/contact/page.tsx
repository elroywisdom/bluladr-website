import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/contact-page";

export const metadata: Metadata = {
  title: "Request a Proposal | Contact | BluLadr",
  description:
    "Your team deserves to grow. Tell us a little about your organisation and we'll book your discovery call.",
  alternates: { canonical: "https://bluladr.com/contact" },
};

export default function Page() {
  return <ContactPage />;
}
