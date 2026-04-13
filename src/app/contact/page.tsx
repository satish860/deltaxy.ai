import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact DeltaXY — Book a Working Session",
  description:
    "Book a 30-minute executive working session to discuss your document workflow challenges.",
};

export default function ContactPage() {
  const workingSessionMailto =
    "mailto:satish@deltaxy.ai?subject=Executive%20Working%20Session%20%E2%80%94%20DeltaXY&body=Hi%2C%0A%0AI'd%20like%20to%20request%20an%20Executive%20Working%20Session%20with%20DeltaXY%20to%20discuss%20our%20document%20workflows.%0A%0A- Company%3A%0A- Workflow%20description%3A%0A- Preferred%20meeting%20time%3A%0A";

  return (
    <div className="home-shell min-h-screen">
      {/* Breadcrumb */}
      <section className="dxy-container pt-8">
        <nav className="flex items-center gap-2 text-sm text-[var(--dxy-muted)]">
          <Link href="/" className="transition-colors hover:text-[var(--dxy-ink)]">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--dxy-ink)]/80">Contact</span>
        </nav>
      </section>

      {/* Header */}
      <section className="dxy-section pb-0">
        <div className="dxy-container">
          <div className="mx-auto max-w-[680px] text-center">
            <h1 className="dxy-display mt-2 text-[clamp(2.5rem,6vw,4rem)]">
              Let's Talk
            </h1>
            <p className="dxy-lead mt-6 mx-auto">
              Book a 30-minute call to discuss your document challenges. No
              sales pitch — just a conversation about whether AI agents are
              right for your use case.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="dxy-section">
        <div className="dxy-container">
          <div className="mx-auto max-w-[680px] grid gap-6">
            {/* Email CTA */}
            <a
              href={workingSessionMailto}
              className="dxy-card dxy-card-interactive flex items-center justify-between p-6 sm:p-8"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--dxy-ink)] mb-2">
                  Request an Executive Working Session
                </h3>
                <p className="text-sm sm:text-[15px] text-[var(--dxy-muted)]">
                  Send us your workflow details and preferred meeting time.
                  We'll confirm within 24 hours.
                </p>
              </div>
              <svg className="h-6 w-6 shrink-0 text-[var(--dxy-sage)] ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Direct email */}
            <div className="dxy-card p-6 sm:p-8 text-center">
              <p className="text-sm text-[var(--dxy-muted)] mb-2">Prefer to email directly?</p>
              <a
                href="mailto:satish@deltaxy.ai"
                className="text-lg font-semibold text-[var(--dxy-sage)] hover:text-[var(--dxy-ink)] transition-colors"
              >
                satish@deltaxy.ai
              </a>
              <p className="mt-2 text-xs text-[var(--dxy-muted)]">
                We typically respond within 24 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="dxy-section border-t border-[var(--dxy-border)] bg-[var(--dxy-card)]/45">
        <div className="dxy-container">
          <h2 className="dxy-heading text-center mx-auto">What to Expect</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="dxy-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dxy-border)] bg-[var(--dxy-paper)] mx-auto mb-4">
                <span className="text-lg font-semibold text-[var(--dxy-sage)]">
                  1
                </span>
              </div>
              <h3 className="font-serif text-lg text-[var(--dxy-ink)] mb-2">
                Discovery
              </h3>
              <p className="text-sm leading-7 text-[var(--dxy-muted)]">
                We'll learn about your document workflows, constraints, and
                goals.
              </p>
            </div>

            <div className="dxy-card p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dxy-border)] bg-[var(--dxy-paper)] mx-auto mb-4">
                <span className="text-lg font-semibold text-[var(--dxy-sage)]">
                  2
                </span>
              </div>
              <h3 className="font-serif text-lg text-[var(--dxy-ink)] mb-2">
                Assessment
              </h3>
              <p className="text-sm leading-7 text-[var(--dxy-muted)]">
                We'll discuss whether AI agents are a good fit for your use
                case.
              </p>
            </div>

            <div className="dxy-card p-6 text-center lg:col-span-1 sm:col-span-2 lg:col-start-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dxy-border)] bg-[var(--dxy-paper)] mx-auto mb-4">
                <span className="text-lg font-semibold text-[var(--dxy-sage)]">
                  3
                </span>
              </div>
              <h3 className="font-serif text-lg text-[var(--dxy-ink)] mb-2">
                Next Steps
              </h3>
              <p className="text-sm leading-7 text-[var(--dxy-muted)]">
                If there's a fit, we'll outline a pilot project scope.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
