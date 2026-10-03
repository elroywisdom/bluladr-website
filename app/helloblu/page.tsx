import type { Metadata } from "next";
import { HelloBluPage } from "@/features/helloblu/helloblu-page";

export const metadata: Metadata = {
  title: "HelloBlu | Brand & Communication Insights | BluLadr",
  description:
    "Practical thinking on brand, communication, leadership and creativity, from the BluLadr team.",
  alternates: { canonical: "https://bluladr.com/helloblu" },
};

export default function Page() {
  return <HelloBluPage />;
}
