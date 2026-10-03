import Link from "next/link";
import { Logo } from "./logo";

const FOOTER_LINKS = [
  { label: "Home",         href: "/"             },
  { label: "About",        href: "/about"        },
  { label: "BluStrategy",  href: "/blustrategy"  },
  { label: "BluExecutive", href: "/bluexecutive" },
  { label: "BluAcademy",   href: "/bluacademy"   },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "FAQ",          href: "/faq"          },
  { label: "HelloBlu",     href: "/helloblu"     },
  { label: "Contact",      href: "/contact"      },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0F0C16] text-white overflow-hidden isolate">
      {/* 1. Signature Accent Gradient Line at Top Border */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--azure)] via-[var(--purple)] to-[#EBD6F2] opacity-80"
      />

      {/* 2. Ambient Subtle Plum Radial Glow in Background */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse,rgba(81,0,108,0.2)_0%,rgba(31,69,145,0.08)_50%,transparent_70%)] pointer-events-none -z-10"
      />

      <div className="wrap max-w-[1200px] px-6 mx-auto py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12 lg:gap-16 mb-16">
          {/* Brand Col */}
          <div className="max-w-sm">
            <Logo variant="white" width={160} height={33} className="mb-5" />
            <p className="text-white/80 text-sm font-bold font-[var(--ui)] mb-2 tracking-wide">
              BluLadr. Creativity is a skill.
            </p>
            <p className="text-white/55 text-sm font-[var(--body)] leading-relaxed m-0">
              Media and communications consultancy. Strategy, executive communication and team training across Africa.
            </p>
          </div>

          {/* Nav Col */}
          <nav aria-label="Footer Navigation">
            <span className="block text-xs font-bold uppercase tracking-widest text-[#EBD6F2]/80 font-[var(--ui)] mb-4">
              Explore
            </span>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 list-none p-0 m-0">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 hover:text-white text-sm font-[var(--ui)] transition-colors duration-200 no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Col */}
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-[#EBD6F2]/80 font-[var(--ui)] mb-4">
              Direct Contact
            </span>
            <ul className="space-y-3 list-none p-0 m-0 text-sm font-[var(--ui)]">
              <li>
                <span className="text-white/40 text-xs block mb-0.5">Phone</span>
                <a href="tel:+2349020811734" className="text-white/80 hover:text-white font-bold transition-colors no-underline">
                  0902 081 1734
                </a>
              </li>
              <li>
                <span className="text-white/40 text-xs block mb-0.5">Inquiries</span>
                <a href="mailto:hello@bluladr.com" className="text-white/80 hover:text-white font-bold transition-colors no-underline">
                  hello@bluladr.com
                </a>
              </li>
              <li className="pt-1">
                <span className="text-white/40 text-xs block mb-0.5">Office</span>
                <span className="text-white/60">Abuja, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-xs sm:text-sm font-[var(--ui)]">
          <span>© 2026 BluLadr Ltd. RC 9486360. All rights reserved.</span>
          <span className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/80 transition-colors no-underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white/80 transition-colors no-underline">
              Terms of Use
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
