import type { Metadata } from "next";
import Link from "next/link";

const workingSessionMailto =
  "mailto:satish@deltaxy.ai?subject=Executive%20Working%20Session%20%E2%80%94%20DeltaXY&body=Hi%2C%0A%0AI'd%20like%20to%20request%20an%20Executive%20Working%20Session%20with%20DeltaXY%20to%20discuss%20our%20document%20workflows.%0A%0A- Company%3A%0A- Workflow%20description%3A%0A- Preferred%20meeting%20time%3A%0A";

const heroMetrics = [
  "95% extraction accuracy",
  "40+ hours saved per week",
  "10,000+ documents processed",
  "6 weeks to production",
  "500+ DORA requirements mapped",
];

const fitBullets = [
  "High-volume document operations",
  "High cost of errors (financial, regulatory, reputational)",
  "Fragmented review workflows across email, spreadsheets, and systems",
  "Pressure to move from pilot to production quickly",
];

const outcomes = [
  "Extraction and decision accuracy",
  "Lower manual review effort",
  "Faster turnaround for document-driven processes",
  "Audit-ready evidence trails and controls",
  "Production workflows integrated into existing systems",
];

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

const steps = [
  {
    title: "Executive Intake",
    body: "Define business objective, risk constraints, and success metrics directly with DeltaXY leadership.",
  },
  {
    title: "Proof",
    body: "We assess your workflow and return a measurable proof of what can be automated — and what can't.",
  },
  {
    title: "Decision",
    body: "You decide whether to proceed based on clear evidence, not a pitch.",
  },
  {
    title: "Scale",
    body: "We implement and integrate the workflow into production with measurable KPIs and operational handoff.",
  },
];

const whyDeltaxyBullets = [
  "Outcome Engineering discipline, not ad-hoc automation",
  "Production-first execution with measurable KPIs",
  "Designed for regulated environments where errors are expensive",
  "Built to be auditable, maintainable, and operationally adopted",
];

export const metadata: Metadata = {
  title: "DeltaXY — Outcome Engineering for Document-Heavy Operations",
  description:
    "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
  openGraph: {
    title: "DeltaXY — Outcome Engineering for Document-Heavy Operations",
    description:
      "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
    url: "https://deltaxy.ai",
    siteName: "DeltaXY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaXY — Outcome Engineering for Document-Heavy Operations",
    description:
      "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
  },
};

export default function Home() {
  return (
    <div className="home-shell">
      {/* ===== 1. HERO ===== */}
      <section className="dxy-hero">
        <div className="dxy-container">
          <div className="mx-auto max-w-[760px] text-center">
            <h1 className="dxy-display mt-6">
              Outcome Engineering for Regulated, Document-Heavy Operations
            </h1>
            <p className="dxy-lead mt-6">
              Most enterprise AI efforts fail in production — not because models
              are weak, but because workflows are not engineered for accuracy,
              controls, and adoption.
            </p>

            <div className="mt-10">
              <a
                href={workingSessionMailto}
                className="dxy-button"
                aria-label="Request an Executive Working Session by email"
              >
                Request an Executive Working Session
              </a>
            </div>

            <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[color:var(--dxy-muted)] sm:text-[15px]">
              You'll meet directly with DeltaXY leadership. No generic sales
              process.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[20px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-border)] sm:grid-cols-2 lg:grid-cols-5">
            {heroMetrics.map((metric) => (
              <div
                key={metric}
                className="bg-[color:var(--dxy-card)] px-5 py-5 text-center text-sm font-medium text-[color:var(--dxy-ink)]/88"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. WHO THIS IS FOR ===== */}
      <section className="border-t border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/65">
        <div className="dxy-container py-10 text-center">
          <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.35rem)] leading-tight text-[color:var(--dxy-ink)]">
            Built for Heads of Advisory, Compliance, Operations, Data, and AI
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-base leading-8 text-[color:var(--dxy-muted)] sm:text-lg">
            Who own outcomes, budgets, and risk.
          </p>
        </div>
        <div className="dxy-container pb-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fitBullets.map((bullet) => (
              <div
                key={bullet}
                className="dxy-card flex items-start gap-3 p-5"
              >
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--dxy-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[15px] leading-7 text-[color:var(--dxy-muted)]">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. LOGOS ===== */}
      <section className="border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)]">
        <div className="dxy-container py-10 text-center">
          <p className="text-sm uppercase tracking-[0.15em] text-[color:var(--dxy-muted)]">
            Trusted by industry leaders
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
            <img
              src="/logos/gt-logo.svg"
              alt="Grant Thornton"
              className="h-8 w-auto opacity-60 transition-opacity duration-200 hover:opacity-100"
            />
            <img
              src="/logos/agami-logo.svg"
              alt="Agami"
              className="h-7 w-auto opacity-60 transition-opacity duration-200 hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* ===== 4. OUTCOMES THAT MATTER ===== */}
      <section id="outcomes" className="dxy-section">
        <div className="dxy-container">
          <div className="max-w-[760px]">
            <p className="dxy-kicker">Outcomes that matter</p>
            <h2 className="dxy-heading mt-4">
              Higher accuracy. Lower effort. Faster turnaround. Audit-ready.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {outcomes.map((item) => (
              <div
                key={item}
                className="dxy-card flex items-center gap-4 p-6 sm:p-7"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)]">
                  <svg className="h-5 w-5 text-[color:var(--dxy-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[17px] leading-7 text-[color:var(--dxy-ink)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. SERVICE OFFERS ===== */}
      <section id="services" className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="max-w-[760px]">
            <p className="dxy-kicker">Service offers</p>
            <h2 className="dxy-heading mt-4">
              Three engagement tiers, each with measurable deliverables
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {services.map((service) => (
              <article key={service.title} className="dxy-card p-7 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                  <div>
                    <p className="text-sm text-[color:var(--dxy-accent)]">
                      {service.number}
                    </p>
                    <h3 className="mt-3 font-serif text-[2rem] leading-tight text-[color:var(--dxy-ink)] sm:text-[2.2rem]">
                      {service.title}
                    </h3>
                    <Link
                      href={service.cta.href}
                      className="inline-flex dxy-inline-link mt-6"
                    >
                      {service.cta.label}
                    </Link>
                  </div>

                  <div>
                    <p className="text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[17px]">
                      {service.body}
                    </p>
                    <div className="mt-6 border-t border-[color:var(--dxy-border)] pt-5">
                      <p className="text-sm text-[color:var(--dxy-ink)]/72">
                        {service.label}
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-xl border border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)] px-4 py-3 text-sm leading-6 text-[color:var(--dxy-muted)]"
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
          </div>
        </div>
      </section>

      {/* ===== 6. TESTIMONIALS ===== */}
      <section className="dxy-section">
        <div className="dxy-container">
          <div className="max-w-[720px]">
            <p className="dxy-kicker">Client stories</p>
            <h2 className="dxy-heading mt-4">What our clients say</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <article className="dxy-card p-8 sm:p-10">
              <svg className="h-10 w-10 text-[color:var(--dxy-sage)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v10h-9.98z" />
              </svg>
              <blockquote className="mt-6 text-[17px] leading-8 text-[color:var(--dxy-ink)] sm:text-[18px]">
                We partnered with Vedhverse on an automated processing tool
                for aircraft utilisation reports. From the beginning, they
                impressed us with their professionalism, speed and problem
                solving capabilities. The solution they delivered has
                streamlined our process and driven efficiencies.
              </blockquote>
              <blockquote className="mt-4 text-[17px] leading-8 text-[color:var(--dxy-ink)] sm:text-[18px]">
                What stood out the most was their deep technical expertise,
                clear communication and responsiveness. We would highly
                recommend them to any organization looking for reliable
                AI-driven solutions.
              </blockquote>
              <div className="mt-8 border-t border-[color:var(--dxy-border)] pt-6">
                <p className="text-sm font-semibold text-[color:var(--dxy-ink)]">
                  Liam Gleeson
                </p>
                <p className="text-sm text-[color:var(--dxy-muted)]">
                  Director — Aviation Advisory, Grant Thornton Ireland
                </p>
              </div>
            </article>

            <div className="space-y-6">
              <div className="dxy-card p-7">
                <p className="text-2xl font-semibold text-[color:var(--dxy-sage)]">
                  Professionalism + Speed
                </p>
              </div>
              <div className="dxy-card p-7">
                <p className="text-2xl font-semibold text-[color:var(--dxy-sage)]">
                  Deep Technical Expertise
                </p>
              </div>
              <div className="dxy-card p-7">
                <p className="text-2xl font-semibold text-[color:var(--dxy-sage)]">
                  Clear Communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ===== 7. HOW IT WORKS ===== */}
      <section id="how-it-works" className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="max-w-[720px]">
            <p className="dxy-kicker">How engagement works</p>
            <h2 className="dxy-heading mt-4">
              Start with a working session. Prove the workflow. Then decide.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 xl:grid-cols-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="dxy-card p-7 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)] font-medium text-[color:var(--dxy-accent)]">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-serif text-[1.7rem] leading-tight text-[color:var(--dxy-ink)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. DELIVERY MODEL ===== */}
      <section className="dxy-section">
        <div className="dxy-container">
          <div className="max-w-[720px] text-center mx-auto">
            <p className="dxy-kicker">Delivery model</p>
            <h2 className="dxy-heading mt-4">
              Focused team, direct delivery
            </h2>
            <p className="mt-5 max-w-[600px] mx-auto text-[17px] leading-8 text-[color:var(--dxy-muted)] sm:text-lg">
              You work with a focused DeltaXY team that combines document AI
              engineering, workflow design, and domain-aware validation.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 9. WHY DELTAXY ===== */}
      <section id="why-deltaxy" className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/65">
        <div className="dxy-container">
          <div className="max-w-[820px]">
            <p className="dxy-kicker">Why DeltaXY</p>
            <h2 className="dxy-heading mt-4">
              Most vendors optimize model output. We optimize business outcomes.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {whyDeltaxyBullets.map((bullet) => (
              <div
                key={bullet}
                className="dxy-card flex items-start gap-4 p-6"
              >
                <svg className="mt-1 h-5 w-5 shrink-0 text-[color:var(--dxy-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[16px] leading-7 text-[color:var(--dxy-ink)]">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. COMMERCIAL PRINCIPLE ===== */}
      <section className="dxy-section">
        <div className="dxy-container">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-[color:var(--dxy-ink)]">
              Earned Expansion
            </h2>
            <p className="mx-auto mt-5 max-w-[580px] text-[17px] leading-8 text-[color:var(--dxy-muted)] sm:text-lg">
              We scale only when outcomes are measured and verified. If we do
              not create measurable value, you should not continue.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 11. BOOK A MEETING (FINAL CTA) ===== */}
      <section id="contact" className="dxy-section border-t border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="mx-auto max-w-[880px] rounded-[28px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] px-7 py-10 text-center shadow-[0_8px_24px_rgba(58,53,48,0.04)] sm:px-12 sm:py-14">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[0.98] text-[color:var(--dxy-ink)]">
              Tell us about your document workflows, constraints, and goals
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[18px]">
              We'll recommend the fastest path to measurable outcomes.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={workingSessionMailto} className="dxy-button">
                Request an Executive Working Session
              </a>
              <p className="text-sm text-[color:var(--dxy-muted)]">
                or email:{" "}
                <a
                  href="mailto:satish@deltaxy.ai"
                  className="dxy-inline-link"
                >
                  satish@deltaxy.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
