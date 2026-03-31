"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const homeLinks = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#industries", label: "Industries" },
  { href: "/#proof", label: "Proof" },
  { href: "/blog", label: "Blog" },
  { href: "/#partners", label: "Partners" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  const pathname = usePathname();
  const isBrandPage =
    pathname === "/" || pathname === "/privacy" || pathname.startsWith("/blog");

  if (!isBrandPage) {
    return (
      <footer className="border-t border-[#222] bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Delta<span className="text-gradient">XY</span>
                </span>
              </Link>
              <p className="mt-4 text-white/60 text-sm max-w-md">
                AI agents that learn. Outcomes you can measure. We build reliable
                automation for aviation, compliance, and legal workflows.
              </p>
              <p className="mt-4 text-white/40 text-xs">A Vedhverse Company</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Case Studies</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/aviation" className="text-sm text-white/60 hover:text-white transition-colors">
                    Aviation
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="text-sm text-white/60 hover:text-white transition-colors">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-sm text-white/60 hover:text-white transition-colors">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white/90">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                    Book a Call
                  </Link>
                </li>
                <li>
                  <a href="mailto:hello@deltaxy.ai" className="text-sm text-white/60 hover:text-white transition-colors">
                    hello@deltaxy.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">2026 DeltaXY. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-white/40 hover:text-white/60 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)] text-[color:var(--dxy-ink)]">
      <div className="mx-auto w-[min(1120px,calc(100%-clamp(40px,11vw,160px)))] py-12 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[420px]">
            <Link href="/" className="inline-block font-serif text-[2rem] leading-none tracking-[-0.03em] transition-opacity hover:opacity-75">
              DeltaXY
            </Link>
            <p className="mt-4 text-sm leading-7 text-[color:var(--dxy-muted)] sm:text-base">
              DeltaXY — document intelligence for regulated industries
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {homeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[color:var(--dxy-muted)] transition-colors hover:text-[color:var(--dxy-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[color:var(--dxy-border)] pt-6 text-sm text-[color:var(--dxy-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DeltaXY. All rights reserved.</p>
          <a href="mailto:hello@deltaxy.ai" className="transition-colors hover:text-[color:var(--dxy-ink)]">
            hello@deltaxy.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
