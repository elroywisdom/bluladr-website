import type { Metadata } from "next";
import { HomePage } from "@/features/home";

export const metadata: Metadata = {
  title: "BluLadr | Let's make the work make sense",
  description:
    "BluLadr is a media and communications consultancy. We help organisations clarify their message, strengthen their brand and build internal capability.",
  alternates: { canonical: "https://bluladr.com/" },
};

export default function Page() {
  return <HomePage />;
}
