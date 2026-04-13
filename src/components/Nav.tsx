"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const workingSessionMailto =
  "mailto:satish@deltaxy.ai?subject=Executive%20Working%20Session%20%E2%80%94%20DeltaXY&body=Hi%2C%0A%0AI'd%20like%20to%20request%20an%20Executive%20Working%20Session%20with%20DeltaXY%20to%20discuss%20our%20document%20workflows.%0A%0A- Company%3A%0A- Workflow%20description%3A%0A- Preferred%20meeting%20time%3A%0A";

const homeLinks = [
  { href: "/#outcomes", label: "Outcomes" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#contact", label: "Contact" },
];

const industryLinks = [
  { href: "/aviation", label: "Aviation" },
  { href: "/compliance", label: "Compliance" },
  { href: "/legal", label: "Legal" },
];

function BrandNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--dxy-border)] bg-[rgba(250,247,242,0.94)] backdrop-blur-sm">
      <nav className="mx-auto flex h-[74px] w-[min(1120px,calc(100%-clamp(40px,11vw,160px)))] items-center justify-between gap-6 text-[color:var(--dxy-ink)]">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-75">
          <span className="font-serif text-[length:1.8rem] leading-none tracking-[-0.03em] text-[color:var(--dxy-ink)]">
            Delta<span style={{ color: "var(--dxy-accent)" }}>▲</span>XY
          </span>
          <span className="ml-1 text-sm font-normal text-[color:var(--dxy-muted)]">— AI</span>
        </Link>

        {/* Desktop: nav links + industries + CTA */}
        <div className="hidden items-center gap-6 md:flex">
          {homeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[color:var(--dxy-muted)] transition-colors hover:text-[color:var(--dxy-ink)]"
            >
              {link.label}
            </Link>
          ))}

          {/* Industry dropdown */}
          <div className="relative group">
            <button className="text-sm text-[color:var(--dxy-muted)] transition-colors hover:text-[color:var(--dxy-ink)] cursor-default">
              Industries
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-xl border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1.5">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-[color:var(--dxy-muted)] transition-colors hover:bg-[color:var(--dxy-hover)] hover:text-[color:var(--dxy-ink)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a href={workingSessionMailto} className="dxy-button dxy-button-sm shrink-0">
            Book a Working Session
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--dxy-border)] text-[color:var(--dxy-ink)] md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] md:hidden">
          <div className="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col gap-4 py-5 text-[color:var(--dxy-ink)]">
            <div className="mb-2 flex items-baseline gap-1">
              <span className="font-serif text-xl text-[color:var(--dxy-ink)]">
                Delta<span style={{ color: "var(--dxy-accent)" }}>▲</span>XY
              </span>
              <span className="text-sm text-[color:var(--dxy-muted)]">— AI</span>
            </div>

            {homeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[length:15px] text-[color:var(--dxy-muted)] transition-colors hover:text-[color:var(--dxy-ink)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-[color:var(--dxy-border)]">
              <p className="text-xs uppercase tracking-[0.12em] text-[color:var(--dxy-muted)] mb-3">Industries</p>
              {industryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[length:15px] text-[color:var(--dxy-muted)] transition-colors hover:text-[color:var(--dxy-ink)] py-1.5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={workingSessionMailto}
              className="dxy-button mt-2 w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Working Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SubpageNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-[#222]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 shrink-0">
          <span className="font-serif text-xl leading-none tracking-tight text-white">
            Delta<span style={{ color: "var(--dxy-accent)" }}>▲</span>XY
          </span>
          <span className="text-sm text-white/50">— AI</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/#outcomes"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Outcomes
          </Link>
          <Link
            href="/#services"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            How It Works
          </Link>

          {/* Industry dropdown */}
          <div className="relative group">
            <button className="text-sm text-white/70 transition-colors hover:text-white cursor-default">
              Industries
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-xl border border-[#333] bg-[#111] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1.5">
                {industryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/#contact"
            className="dxy-button dxy-button-sm shrink-0"
          >
            Book a Working Session
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden nav-blur border-t border-[#222]">
          <div className="px-6 py-5 flex flex-col gap-4 text-white">
            <Link href="/#outcomes" className="text-white/70 transition-colors hover:text-white" onClick={() => setIsOpen(false)}>Outcomes</Link>
            <Link href="/#services" className="text-white/70 transition-colors hover:text-white" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/#how-it-works" className="text-white/70 transition-colors hover:text-white" onClick={() => setIsOpen(false)}>How It Works</Link>

            <div className="pt-2 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.12em] text-white/50 mb-3">Industries</p>
              {industryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block text-white/70 py-1.5 hover:text-white" onClick={() => setIsOpen(false)}>{link.label}</Link>
              ))}
            </div>

            <a href="/#contact" className="dxy-button w-full justify-center mt-1" onClick={() => setIsOpen(false)}>Book a Working Session</a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Nav() {
  const pathname = usePathname();
  const isBrandPage = pathname === "/" || pathname === "/privacy" || pathname.startsWith("/blog");

  return isBrandPage ? <BrandNav /> : <SubpageNav />;
}
