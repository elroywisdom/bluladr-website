"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

interface ServiceItem {
  label: string;
  href: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    label: "BluStrategy",
    href: "/blustrategy",
    description: "Structured brand, marketing and business strategy",
  },
  {
    label: "BluExecutive",
    href: "/bluexecutive",
    description: "Executive branding, public speaking & media presence",
  },
  {
    label: "BluAcademy",
    href: "/bluacademy",
    description: "Practical training for marketing & communications teams",
  },
];

const MAIN_NAV = [
  { label: "BluAcademy", href: "/bluacademy" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "HelloBlu", href: "/helloblu" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu and dropdown on route changes
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isServicesActive =
    pathname === "/what-we-do" || SERVICES.some((s) => pathname === s.href);

  return (
    <header
      id="site-header"
      className={[
        "sticky top-0 z-50",
        "bg-[var(--surface)]/95 backdrop-blur-md",
        "border-b border-[var(--border)]",
        "transition-colors duration-200",
      ].join(" ")}
    >
      <div className="wrap flex items-center justify-between h-20 gap-4 max-w-[1200px] px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center no-underline shrink-0" aria-label="BluLadr Home">
            <Logo variant="dark" width={148} height={30} asLink={false} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <nav aria-label="Main" className="hidden [@media(min-width:860px)]:flex items-center gap-2">
            {/* What We Do Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={[
                  "flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-lg cursor-pointer",
                  "transition-all duration-200 font-[var(--ui)] border-0 bg-transparent",
                  isServicesActive || servicesOpen
                    ? "text-[var(--accent)] bg-[var(--alt)]"
                    : "text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--alt)]/70",
                ].join(" ")}
              >
                <span>What We Do</span>
                <svg
                  className={[
                    "w-3.5 h-3.5 transition-transform duration-200 opacity-70",
                    servicesOpen ? "rotate-180 opacity-100" : "",
                  ].join(" ")}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu Card */}
              <div
                className={[
                  "absolute top-full left-0 pt-2 w-80 transition-all duration-200 origin-top-left z-50",
                  servicesOpen
                    ? "opacity-100 scale-100 pointer-events-auto visible"
                    : "opacity-0 scale-95 pointer-events-none invisible",
                ].join(" ")}
              >
                <div className="bg-[var(--raised)] border border-[var(--border)] rounded-2xl p-2.5 shadow-2xl">
                  <Link
                    href="/what-we-do"
                    className="block px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-[var(--azure)] hover:bg-[var(--alt)] transition-colors no-underline"
                  >
                    Overview — What We Do →
                  </Link>
                  <div className="h-px bg-[var(--border)] my-1.5" />
                  {SERVICES.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-[var(--alt)] transition-colors no-underline group"
                    >
                      <div className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--azure)] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-[var(--text2)] line-clamp-1 mt-0.5">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Links */}
            {MAIN_NAV.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "px-3.5 py-2 text-sm font-bold rounded-lg no-underline",
                    "transition-all duration-200 font-[var(--ui)]",
                    isActive
                      ? "text-[var(--accent)] bg-[var(--alt)]"
                      : "text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--alt)]/70",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Area: One Primary CTA Pill */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={[
                "inline-flex items-center justify-center min-h-[44px] px-6 py-2.5",
                "bg-[var(--ink)] hover:bg-[var(--azure)] text-white",
                "rounded-[12px] font-[var(--ui)] font-bold text-sm tracking-wide no-underline cursor-pointer",
                "transition-all duration-300 [transition-timing-function:var(--ease)] shadow-[var(--sh1)]",
                "hover:shadow-[var(--sh2)] hover:-translate-y-0.5",
                "focus-visible:outline-3 focus-visible:outline-[var(--sky)] focus-visible:outline-offset-3",
              ].join(" ")}
            >
              Request a Proposal
            </Link>

            {/* Mobile hamburger button */}
            <button
              id="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="[@media(min-width:860px)]:hidden w-10 h-10 rounded-xl flex flex-col justify-center items-center gap-1.5 border border-[var(--border)] bg-[var(--raised)] hover:bg-[var(--alt)] transition-colors cursor-pointer"
            >
              <span
                className={[
                  "block w-5 h-0.5 bg-[var(--text)] transition-transform duration-300 origin-center",
                  menuOpen ? "rotate-45 translate-y-2" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-5 h-0.5 bg-[var(--text)] transition-opacity duration-300",
                  menuOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block w-5 h-0.5 bg-[var(--text)] transition-transform duration-300 origin-center",
                  menuOpen ? "-rotate-45 -translate-y-2" : "",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="[@media(min-width:860px)]:hidden border-t border-[var(--border)] bg-[var(--raised)] px-6 py-6 shadow-2xl"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          <Link
            href="/what-we-do"
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--text)] hover:bg-[var(--alt)] no-underline"
          >
            What We Do
          </Link>
          <Link
            href="/bluacademy"
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--text)] hover:bg-[var(--alt)] no-underline"
          >
            BluAcademy
          </Link>
          <Link
            href="/our-approach"
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--text)] hover:bg-[var(--alt)] no-underline"
          >
            Our Approach
          </Link>
          <Link
            href="/helloblu"
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--text)] hover:bg-[var(--alt)] no-underline"
          >
            HelloBlu
          </Link>
        </nav>
      </div>
    </header>
  );
}
