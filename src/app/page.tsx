import type { Metadata } from "next";
import Link from "next/link";

const sampleDocsMailto =
  "mailto:hello@deltaxy.ai?subject=3%20sample%20docs%20for%20DeltaXY&body=Hi%20DeltaXY%2C%0A%0AHere%20are%20our%203%20sample%20documents%20or%20workflow%20details%3A%0A%0A";

const heroMetrics = [
  "95% extraction accuracy",
  "40+ hours saved per week",
  "10,000+ documents processed",
  "6 weeks to production",
  "500+ DORA requirements mapped",
];

const problems = [
  {
    title: "Manual review keeps expanding",
    body: "Teams lose hours extracting, checking, reformatting, and comparing information across PDFs, Excel files, and email-driven processes.",
  },
  {
    title: "Accuracy claims hide the real risk",
    body: "A clean sample is not production. Real workflows break on edge cases, inconsistent formats, and the few fields that matter most.",
  },
  {
    title: "Generic AI tools create new uncertainty",
    body: "In regulated environments, speed alone is not enough. Teams need outputs they can verify, explain, and trust.",
  },
];

const services = [
  {
    title: "Workflow diagnostic",
    body: "We review one high-friction workflow and identify where time, errors, and rework are actually happening.",
    label: "Includes",
    items: [
      "workflow mapping",
      "bottleneck analysis",
      "automation fit assessment",
      "pilot recommendation",
    ],
    cta: { label: "Request a diagnostic", href: "/contact" },
  },
  {
    title: "3-file pilot",
    body: "Send 3 sanitized files. We return structured output, highlight edge cases, and show what a production workflow would require.",
    label: "Includes",
    items: [
      "sample extraction output",
      "reviewability notes",
      "edge case observations",
      "implementation recommendation",
    ],
    cta: { label: "Send 3 sample docs", href: sampleDocsMailto },
  },
  {
    title: "Production implementation",
    body: "For workflows that prove out, we build production-grade systems with review steps, structured outputs, and clear operational logic.",
    label: "Typical outputs",
    items: [
      "structured extraction",
      "Excel / CSV outputs",
      "review workflows",
      "confidence-based triage",
      "source traceability",
    ],
    cta: { label: "Discuss an implementation", href: "/contact" },
  },
];

const industries = [
  {
    title: "Aviation leasing",
    body: "Lease abstraction, portfolio review, technical records processing, lifecycle workflows, and document operations that cannot afford guesswork.",
  },
  {
    title: "Compliance and regulatory operations",
    body: "Requirement mapping, evidence extraction, policy review, control documentation, and document-to-framework workflows.",
  },
  {
    title: "Audit-style review workflows",
    body: "Sensitive-file processing, evidence extraction, spreadsheet-ready outputs, and review support for repetitive document-heavy checks.",
  },
];

const whyDeltaxy = [
  {
    title: "Reviewable by design",
    body: "Outputs are built for human review, not blind trust.",
  },
  {
    title: "Built for regulated work",
    body: "Sensitive files, traceability, and operational accountability are part of the design, not afterthoughts.",
  },
  {
    title: "Production-first thinking",
    body: "We optimize for what survives real workflows, not what looks impressive in a demo.",
  },
  {
    title: "Senior, direct execution",
    body: "Small team. Fast iteration. No layers between the problem and the people building the solution.",
  },
];

const steps = [
  {
    title: "Share a sample",
    body: "You send representative files or describe the workflow.",
  },
  {
    title: "We assess fit",
    body: "We identify what can be extracted reliably, where review belongs, and whether the workflow is worth automating.",
  },
  {
    title: "Run a pilot",
    body: "We return sample output and show where the approach works — and where it doesn’t.",
  },
  {
    title: "Productionize when ready",
    body: "If the workflow proves out, we implement it with review logic, structured outputs, and measurable performance.",
  },
];

const partnerBullets = [
  "start with a small fixed-fee pilot",
  "white-label or subcontract delivery",
  "built for sensitive, review-heavy work",
  "useful where PDFs and spreadsheets dominate the process",
];

const faqs = [
  {
    question: "Do we need to upload files to a public AI tool?",
    answer:
      "No. Sensitive-file handling should be designed around the workflow and the buyer’s constraints.",
  },
  {
    question: "Do you sell software or services?",
    answer:
      "We lead with implementation and workflow outcomes. Productized components may sit behind the system, but the commercial focus is on results.",
  },
  {
    question: "What kinds of documents do you handle?",
    answer:
      "Typically PDFs and semi-structured documents that feed into operational systems, Excel outputs, or review workflows.",
  },
  {
    question: "How do we know if our workflow is a fit?",
    answer:
      "Start with a sample-pack pilot. We’ll tell you quickly what works, where review is needed, and whether the workflow is worth implementing.",
  },
  {
    question: "How fast can this go live?",
    answer:
      "A small pilot can start quickly. Production timelines depend on workflow complexity, but our bias is always fast validation before larger implementation.",
  },
];

export const metadata: Metadata = {
  title: "DeltaXY — Document intelligence for regulated industries",
  description:
    "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
};

export default function Home() {
  return (
    <div className="home-shell">
      <section className="dxy-hero">
        <div className="dxy-container">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="dxy-eyebrow mx-auto">Document intelligence for regulated work</p>
            <h1 className="dxy-display mt-6">
              Document workflows that feel under control
            </h1>
            <p className="dxy-lead mt-6">
              DeltaXY designs and implements document-heavy workflows for aviation,
              compliance, and other review-heavy operations — with measurable
              accuracy, reviewable outputs, and production delivery in weeks.
            </p>

            <div className="mt-10">
              <a href={sampleDocsMailto} className="dxy-button" aria-label="Send 3 sample docs by email">
                Send 3 sample docs
              </a>
            </div>

            <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[color:var(--dxy-muted)] sm:text-[15px]">
              Sanitized files are fine. We’ll show what can be extracted, where
              review is needed, and what production would require.
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

      <section className="border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/65">
        <div className="dxy-container py-10 text-center">
          <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.35rem)] leading-tight text-[color:var(--dxy-ink)]">
            Built on real workflows, not demo-ware
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base leading-8 text-[color:var(--dxy-muted)] sm:text-lg">
            DeltaXY works where the documents are messy, the review burden is
            real, and blind trust is not an option. Our systems are designed for
            human review, operational clarity, and measurable performance.
          </p>
          <p className="mt-4 text-sm text-[color:var(--dxy-muted)]">
            Prefer to read first?{" "}
            <Link href="/blog" className="dxy-inline-link align-baseline">
              Visit the blog
            </Link>
          </p>
        </div>
      </section>

      <section id="about" className="dxy-section">
        <div className="dxy-container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="dxy-kicker">Why most document AI disappoints</p>
              <h2 className="dxy-heading mt-4">
                The problem is rarely reading the file. The problem is surviving
                the workflow.
              </h2>
            </div>
            <p className="dxy-lead max-w-none text-left text-[17px] leading-8 text-[color:var(--dxy-muted)] sm:text-[19px]">
              Most teams already know AI can extract something from a PDF. What
              usually fails is everything around it — review, exceptions,
              spreadsheet outputs, source traceability, and the confidence to use
              the result in real work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {problems.map((problem) => (
              <article key={problem.title} className="dxy-card p-7 sm:p-8">
                <p className="text-sm text-[color:var(--dxy-accent)]">Problem</p>
                <h3 className="mt-3 font-serif text-[1.8rem] leading-tight text-[color:var(--dxy-ink)]">
                  {problem.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  {problem.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="max-w-[760px]">
            <p className="dxy-kicker">What we do</p>
            <h2 className="dxy-heading mt-4">
              We implement document workflows, not AI theatre
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-[color:var(--dxy-muted)] sm:text-lg">
              We take one document-heavy process, make it measurable, reduce the
              manual burden, and build a workflow your team can actually use.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {services.map((service, index) => {
              const linkClass =
                service.cta.href.startsWith("mailto:") || service.cta.href.startsWith("http")
                  ? "inline-flex"
                  : "inline-flex";

              return (
                <article key={service.title} className="dxy-card p-7 sm:p-10">
                  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                    <div>
                      <p className="text-sm text-[color:var(--dxy-accent)]">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 font-serif text-[2rem] leading-tight text-[color:var(--dxy-ink)] sm:text-[2.2rem]">
                        {service.title}
                      </h3>
                      {service.cta.href.startsWith("mailto:") ? (
                        <a href={service.cta.href} className={`${linkClass} dxy-inline-link mt-6`}>
                          {service.cta.label}
                        </a>
                      ) : (
                        <Link href={service.cta.href} className={`${linkClass} dxy-inline-link mt-6`}>
                          {service.cta.label}
                        </Link>
                      )}
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
              );
            })}
          </div>
        </div>
      </section>

      <section id="industries" className="dxy-section">
        <div className="dxy-container">
          <div className="max-w-[720px]">
            <p className="dxy-kicker">Where we work</p>
            <h2 className="dxy-heading mt-4">
              Built for regulated, document-heavy environments
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.title} className="dxy-card min-h-[260px] p-7 sm:p-8">
                <h3 className="font-serif text-[1.85rem] leading-tight text-[color:var(--dxy-ink)]">
                  {industry.title}
                </h3>
                <p className="mt-5 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  {industry.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="dxy-section border-y border-[color:var(--dxy-border)] bg-[#f4efe8]">
        <div className="dxy-container">
          <div className="max-w-[720px]">
            <p className="dxy-kicker">Proof</p>
            <h2 className="dxy-heading mt-4">Outcomes from production</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.45fr_0.95fr]">
            <article className="dxy-card p-7 sm:p-10">
              <p className="text-sm text-[color:var(--dxy-accent)]">Aviation document workflow</p>
              <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <h3 className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-none text-[color:var(--dxy-ink)]">
                    95% extraction accuracy
                  </h3>
                  <p className="mt-6 text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[17px]">
                    DeltaXY built a production workflow for aviation leasing
                    operations, turning repeated extraction and review into a
                    structured process with human-verifiable outputs.
                  </p>
                  <Link href="/aviation" className="dxy-inline-link mt-8 inline-flex">
                    See proof
                  </Link>
                </div>

                <div className="grid gap-px overflow-hidden rounded-[18px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-border)] sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    "40+ hours saved per week",
                    "200+ documents processed per month",
                    "Delivered in 6 weeks",
                    "Human-verifiable outputs",
                  ].map((item) => (
                    <div key={item} className="bg-[color:var(--dxy-card)] px-5 py-5 text-sm leading-6 text-[color:var(--dxy-ink)]/84">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="dxy-card p-7 sm:p-8">
                <p className="text-sm text-[color:var(--dxy-accent)]">Regulatory mapping</p>
                <h3 className="mt-4 font-serif text-[2.25rem] leading-tight text-[color:var(--dxy-ink)]">
                  500+ DORA requirements mapped
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  Structured regulatory requirements extracted, assessed, and
                  organized into reviewable workflows for compliance teams.
                </p>
              </article>

              <article className="dxy-card p-7 sm:p-8">
                <p className="text-sm text-[color:var(--dxy-accent)]">Production experience</p>
                <h3 className="mt-4 font-serif text-[2.25rem] leading-tight text-[color:var(--dxy-ink)]">
                  10,000+ total documents processed
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  Across aviation, legal, and regulatory work — not in a lab, in
                  live operational settings.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="dxy-section">
        <div className="dxy-container">
          <div className="max-w-[780px]">
            <p className="dxy-kicker">Why DeltaXY</p>
            <h2 className="dxy-heading mt-4">
              Calm systems. Clear outputs. Nothing important hidden.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {whyDeltaxy.map((item) => (
              <article key={item.title} className="dxy-card p-7 sm:p-8">
                <h3 className="font-serif text-[1.8rem] leading-tight text-[color:var(--dxy-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="max-w-[720px]">
            <p className="dxy-kicker">How engagement works</p>
            <h2 className="dxy-heading mt-4">
              Start small. Prove the workflow. Then decide.
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

          <div className="mt-10">
            <a href={sampleDocsMailto} className="dxy-inline-link inline-flex">
              Start with 3 sample docs
            </a>
          </div>
        </div>
      </section>

      <section id="partners" className="dxy-section">
        <div className="dxy-container">
          <div className="overflow-hidden rounded-[28px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] shadow-[0_8px_24px_rgba(58,53,48,0.04)]">
            <div className="grid gap-10 px-7 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-12">
              <div>
                <p className="dxy-kicker">For partners</p>
                <h2 className="dxy-heading mt-4 max-w-[580px]">
                  Offer document AI capability without building an internal AI team
                </h2>
                <p className="mt-5 text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[17px]">
                  DeltaXY works with advisory, audit, and consulting partners on
                  a white-label or subcontract basis. You keep the client
                  relationship. We handle the workflow implementation behind the
                  scenes.
                </p>
                <Link href="/contact" className="dxy-button mt-8 inline-flex">
                  Partner with DeltaXY
                </Link>
              </div>

              <div className="grid gap-3 self-end">
                {partnerBullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)] px-5 py-4 text-[15px] leading-7 text-[color:var(--dxy-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="max-w-[720px]">
            <p className="dxy-kicker">FAQ</p>
            <h2 className="dxy-heading mt-4">Common questions, answered clearly.</h2>
          </div>

          <div className="mt-10 rounded-[24px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="dxy-faq"
                open={index === 0}
              >
                <summary>
                  <span>{item.question}</span>
                  <span className="text-[color:var(--dxy-accent)]">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="dxy-section">
        <div className="dxy-container">
          <div className="mx-auto max-w-[880px] rounded-[28px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] px-7 py-10 text-center shadow-[0_8px_24px_rgba(58,53,48,0.04)] sm:px-12 sm:py-14">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[0.98] text-[color:var(--dxy-ink)]">
              If your team is buried in documents, start with 3 sample files
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[18px]">
              We’ll show what can be extracted, what needs review, and whether
              the workflow is worth implementing.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={sampleDocsMailto} className="dxy-button">
                Send 3 sample docs
              </a>
              <p className="text-sm text-[color:var(--dxy-muted)]">
                Prefer to talk first?{" "}
                <Link href="/contact" className="dxy-inline-link align-baseline">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
