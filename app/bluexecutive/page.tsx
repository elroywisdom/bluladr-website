import type { Metadata } from "next";
import { BluExecutivePage } from "@/features/services/bluexecutive-page";

export const metadata: Metadata = {
  title: "BluExecutive | Executive Branding & Media Training | BluLadr",
  description:
    "Executive branding, public speaking and media training for leaders who represent the organisation. Leave with a clear executive brand identity.",
  alternates: { canonical: "https://bluladr.com/bluexecutive" },
};

export default function Page() {
  return <BluExecutivePage />;
}
