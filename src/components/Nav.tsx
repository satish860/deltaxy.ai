"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sampleDocsMailto =
  "mailto:hello@deltaxy.ai?subject=3%20sample%20docs%20for%20DeltaXY&body=Hi%20DeltaXY%2C%0A%0AHere%20are%20our%203%20sample%20documents%20or%20workflow%20details%3A%0A%0A";

const links = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#industries", label: "Industries" },
  { href: "/#proof", label: "Proof" },
  { href: "/#partners", label: "Partners" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isBrandPage =
    pathname === "/" || pathname === "/privacy" || pathname.startsWith("/blog");

  if (!isBrandPage) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-[#222] w-full">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-white">
              Delta<span className="text-gradient">XY</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#proof"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Proof
            </Link>
            <Link
              href="/#partners"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Partners
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-5">
              <span>Book a Call</span>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden nav-blur border-t border-[#222]">
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link
                href="/#proof"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Proof
              </Link>
              <Link
                href="/#partners"
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="btn-primary text-center py-3"
                onClick={() => setIsOpen(false)}
              >
                <span>Book a Call</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--dxy-border)] bg-[rgba(250,247,242,0.94)] backdrop-blur-sm">
      <nav className="mx-auto flex h-[74px] w-[min(1120px,calc(100%-clamp(40px,11vw,160px)))] items-center justify-between gap-6 text-[color:var(--dxy-ink)]">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-75">
          <span className="font-serif text-[length:1.8rem] leading-none tracking-[-0.03em] text-[color:var(--dxy-ink)]">
            DeltaXY
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-[color:var(--dxy-muted)] transition-colors hover:text-[color:var(--dxy-ink)]"
            >
              {link.label}
            </Link>
          ))}
          <a href={sampleDocsMailto} className="dxy-button dxy-button-sm">
            Send 3 sample docs
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--dxy-border)] text-[color:var(--dxy-ink)] md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] md:hidden">
          <div className="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col gap-4 py-5 text-[color:var(--dxy-ink)]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[length:15px] text-[color:var(--dxy-muted)] transition-colors hover:text-[color:var(--dxy-ink)]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={sampleDocsMailto}
              className="dxy-button mt-2 w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Send 3 sample docs
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
