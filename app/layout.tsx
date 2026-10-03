import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SkipLink } from "@/shared/ui/skip-link";
import { Header } from "@/shared/ui/header";
import { Footer } from "@/shared/ui/footer";
import { Preloader } from "@/shared/ui/preloader";

/* ── Fonts ── */
const recia = localFont({
  src: [
    { path: "../public/fonts/Recia-Variable.woff2",       weight: "300 700", style: "normal" },
    { path: "../public/fonts/Recia-VariableItalic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-recia",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const supreme = localFont({
  src: [
    { path: "../public/fonts/Supreme-Variable.woff2",       weight: "100 800", style: "normal" },
    { path: "../public/fonts/Supreme-VariableItalic.woff2", weight: "100 800", style: "italic" },
  ],
  variable: "--font-supreme",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

/* ── Viewport ── */
export const viewport: Viewport = {
  themeColor: "#1F4591",
  width: "device-width",
  initialScale: 1,
};

/* ── Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL("https://bluladr.com"),
  title: {
    default: "BluLadr | Let's make the work make sense",
    template: "%s | BluLadr",
  },
  description:
    "BluLadr is a media and communications consultancy. We help organisations clarify their message, strengthen their brand and build internal capability.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bluladr.com",
    siteName: "BluLadr",
    title: "BluLadr. Creativity is a skill.",
    description: "Media and communications consultancy. Strategy, executive communication and team training.",
    images: [{ url: "/og/og-default.png", width: 1200, height: 630, alt: "BluLadr" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={[recia.variable, supreme.variable].join(" ")}
    >
      <head>
        {/* Preload hero poster image for instant paint with zero CLS */}
        <link rel="preload" href="/videos/hero-poster.jpg" as="image" fetchPriority="high" />
        {/* Prevent flash of wrong theme — runs before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = stored || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch(e){}
}())`,
          }}
        />
      </head>
      <body>
        <Preloader />
        <SkipLink />
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
