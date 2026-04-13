import Link from "next/link";
import { useStaggerObserver } from "./hooks";

const industries = [
  {
    href: "/aviation",
    title: "Aviation",
    description:
      "Aircraft leasing, airworthiness, MRO, and utilisation reporting with audit-grade precision.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 20 L14 8 L16 12 L28 10 L20 22 L16 18 L8 26 Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/compliance",
    title: "Compliance",
    description:
      "Regulatory filings, risk assessments, and policy mapping with zero missed edge cases.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="5" y="3" width="22" height="26" rx="3" />
        <path d="M11 13 L14 17 L21 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/legal",
    title: "Legal",
    description:
      "Contract review, clause extraction, and due diligence at scale with human-in-the-loop oversight.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 4 L20 8 L19 28 L13 28 L12 8 Z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="4" r="3" />
        <path d="M13 18 L19 18" />
      </svg>
    ),
  },
];

export function IndustriesSection() {
  const ref = useStaggerObserver();

  return (
    <section id="industries" className="dxy-section border-b border-[color:var(--dxy-border)]">
      <div className="dxy-container">
        <div className="max-w-[720px]">
          <p className="dxy-kicker">Who we serve</p>
          <h2 className="dxy-heading mt-4">AI-powered workflows, built for your industry</h2>
          <p className="mt-4 text-[16px] leading-7 text-[color:var(--dxy-muted)] sm:text-[17px] sm:leading-8">
            Every domain has its own edge cases, compliance standards, and
            failure modes. We build deep domain-aware automations — not
            generic templates.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-8 dxy-stagger grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((ind, i) => (
            <Link
              key={ind.href}
              href={ind.href}
              className={
                "dxy-card dxy-stagger-item dxy-card-interactive flex flex-col p-5 sm:p-7 dxy-fade-up-" +
                Math.min(i + 1, 3)
              }
            >
              <div className="text-[color:var(--dxy-sage)]">{ind.icon}</div>
              <h3 className="mt-4 font-serif text-[1.25rem] sm:text-[1.45rem] leading-tight text-[color:var(--dxy-ink)]">
                {ind.title}
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-[color:var(--dxy-muted)] sm:text-[15px]">
                {ind.description}
              </p>
              <span className="mt-4 text-sm font-medium text-[color:var(--dxy-sage)]">
                Explore {ind.title} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
