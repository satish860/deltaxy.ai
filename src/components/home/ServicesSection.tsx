import Link from "next/link";
import { StaggerGrid } from "./hooks";

const services = [
  {
    number: "01",
    title: "10-Day Document Accuracy Audit",
    body: "We assess one high-friction document workflow and deliver a precise report on accuracy gaps, time leakage, and what a production-ready system would require.",
    label: "What we deliver",
    items: [
      "workflow mapping & time analysis",
      "accuracy baseline & gap report",
      "edge case inventory",
      "production readiness assessment",
    ],
    cta: { label: "Discuss this engagement", href: "/contact" },
  },
  {
    number: "02",
    title: "30-Day Workflow Automation Sprint",
    body: "We build and validate a working automation for one workflow — including review steps, structured outputs, and measurable KPIs.",
    label: "What we ship",
    items: [
      "working automation prototype",
      "reviewable outputs with confidence scores",
      "error analysis & remediation guide",
      "KPI baseline & target metrics",
    ],
    cta: { label: "Discuss this engagement", href: "/contact" },
  },
  {
    number: "03",
    title: "6-Week Production Rollout",
    body: "For proven workflows, we implement a production-grade system — reviewed, auditable, and integrated into your existing tools and processes.",
    label: "What we implement",
    items: [
      "production-grade automation",
      "human review & triage workflows",
      "source traceability & audit trails",
      "team training & operational handoff",
    ],
    cta: { label: "Discuss this engagement", href: "/contact" },
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45"
    >
      <div className="dxy-container">
        <div className="max-w-[760px]">
          <p className="dxy-kicker">Service offers</p>
          <h2 className="dxy-heading mt-4">
            Three engagement tiers, each with measurable deliverables
          </h2>
        </div>

        <StaggerGrid className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={
                "dxy-card dxy-stagger-item dxy-card-interactive p-5 sm:p-7 lg:p-10 dxy-fade-up-" +
                Math.min(i + 1, 3)
              }
            >
              <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                <div>
                  <p className="text-sm text-[color:var(--dxy-accent)]">
                    {service.number}
                  </p>
                  <h3 className="mt-2 font-serif text-[1.4rem] sm:text-[2rem] leading-tight text-[color:var(--dxy-ink)]">
                    {service.title}
                  </h3>
                  <Link
                    href={service.cta.href}
                    className="inline-flex dxy-inline-link mt-3 sm:mt-6"
                  >
                    {service.cta.label}
                  </Link>
                </div>

                <div>
                  <p className="text-[14px] leading-7 text-[color:var(--dxy-muted)] sm:text-[16px] sm:leading-8">
                    {service.body}
                  </p>
                  <div className="mt-4 border-t border-[color:var(--dxy-border)] pt-4 sm:mt-6 sm:pt-5">
                    <p className="text-sm text-[color:var(--dxy-ink)]/72">
                      {service.label}
                    </p>
                    <ul className="mt-3 grid gap-2 sm:gap-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)] px-3 py-2.5 text-[13px] leading-6 text-[color:var(--dxy-muted)] sm:px-4 sm:py-3 sm:text-sm"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
