"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { workingSessionMailto } from "./home/data";

const homeLinks = [
  { href: "/#outcomes", label: "Outcomes" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-deltaxy", label: "Why DeltaXY" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

function useInView<T extends HTMLElement>(
  threshold = 0.25,
  rootMargin = "0px 0px -25% 0px",
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, inView };
}

export function Footer() {
  const pathname = usePathname();
  const isBrandPage =
    pathname === "/" ||
    pathname === "/privacy" ||
    pathname === "/terms-of-service" ||
    pathname.startsWith("/blog");

  const { ref, inView } = useInView<HTMLElement>(0.25, "0px 0px -25% 0px");

  const reveal = (delay = 0): React.CSSProperties => ({
    transition: "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(16px)",
  });

  const logoStyle: React.CSSProperties = {
    opacity: inView ? 0.2 : 0,
    filter: "blur(0.2px)",
    transition: "opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 1400ms cubic-bezier(0.16, 1, 0.3, 1) 200ms",
    transform: inView
      ? "translate(-50%, -33%) scale(1)"
      : "translate(-50%, -33%) scale(1.04)",
  };

  return (
    <div className="md:h-screen pb-3 md:pb-10">
      <footer
        ref={ref}
        className="bg-dxy-primary w-[95%] mx-auto h-full rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden min-h-screen md:min-h-auto"
      >
        <div className="w-11/12 flex flex-col items-center justify-between md:h-10/12">
          <div className="text-center max-w-lg flex flex-col items-center gap-4">
            <h2
              className="text-2xl font-news-reader text-dxy-paper leading-relaxed"
              style={reveal(0)}
            >
              Tell us about your document workflows, constraints, and goals.
            </h2>
            <p className="text-dxy-paper text-sm" style={reveal(120)}>
              You'll meet directly with leadership. No generic sales pitch.
            </p>
            <a
              href={workingSessionMailto}
              className="bg-dxy-paper text-dxy-primary px-6 py-2 rounded-full font-semibold hover:bg-dxy-paper/90 hover:scale-[1.03] active:scale-[0.98] transition-[transform,background-color] duration-300"
              style={reveal(240)}
            >
              Book a Call
            </a>
          </div>

          <Image
            style={{ ...logoStyle, position: "absolute", left: "50%", top: "42%" }}
            className="w-11/12 max-w-none h-auto pointer-events-none select-none z-0"
            src="/logos/logo-2.svg"
            alt="Footer Image"
            width={2000}
            height={2000}
            aria-hidden
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] z-10 bg-linear-to-t from-dxy-primary from-20% via-dxy-primary/85 via-55% to-transparent to-100%"
          />

          <div className="w-full flex flex-col gap-10 z-20 relative pt-2 pb-2">
            <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between w-full">
              <div className="flex flex-col gap-px" style={reveal(360)}>
                <Image
                  src="/logos/logo-2.svg"
                  alt="DeltaXY Logo"
                  width={100}
                  height={100}
                />
                <p className="text-dxy-paper text-sm">
                  Outcome engineering for regulated, <br /> document-heavy
                  operations
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-10 md:w-1/2">
                <div className="space-y-5" style={reveal(460)}>
                  <h3 className="text-dxy-paper text-xs font-news-reader">
                    Company
                  </h3>
                  <ul className="text-dxy-paper/80 text-xs font-medium flex flex-col gap-3 uppercase">
                    {[
                      { href: "/#services", label: "Services" },
                      { href: "/#products", label: "Products" },
                      { href: "/#industries", label: "Industries" },
                      { href: "/#testimonials", label: "Testimonials" },
                      { href: "/#how-it-works", label: "How it works" },
                    ].map((l, i) => (
                      <li
                        key={l.label}
                        style={{
                          ...reveal(540 + i * 60),
                        }}
                      >
                        <Link
                          href={l.href}
                          className="inline-block transition-transform duration-300 hover:translate-x-1 hover:text-dxy-paper"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-5" style={reveal(520)}>
                  <h3 className="text-dxy-paper text-xs font-news-reader">
                    Socials
                  </h3>
                  <ul className="text-dxy-paper/80 text-xs font-medium flex flex-col gap-3 uppercase">
                    {[
                      {
                        href: "https://www.linkedin.com/company/deltaxy-ai/",
                        label: "LinkedIn",
                      },
                      { href: "https://x.com/deltaxy_ai", label: "X" },
                      {
                        href: "https://www.youtube.com/@deltaxyai",
                        label: "YouTube",
                      },
                    ].map((l, i) => (
                      <li
                        key={l.label}
                        style={{
                          ...reveal(600 + i * 60),
                        }}
                      >
                        <Link
                          href={l.href}
                          target="_blank"
                          className="inline-block transition-transform duration-300 hover:translate-x-1 hover:text-dxy-paper"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col md:flex-row md:items-center justify-between"
              style={reveal(820)}
            >
              <p className="text-dxy-paper text-xs uppercase font-thin">
                © 2025 —{" "}
                <span className="font-semibold">DeltaXY</span>. All rights
                reserved
              </p>

              <div className="flex gap-4">
                <ul className="flex gap-4">
                  <li className="text-dxy-paper text-xs uppercase">
                    <Link
                      href="/privacy"
                      className="transition-colors duration-300 hover:text-dxy-paper/70"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="text-dxy-paper text-xs uppercase">
                    <Link
                      href="/terms-of-service"
                      className="transition-colors duration-300 hover:text-dxy-paper/70"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
