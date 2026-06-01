import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact DeltaXY — Book a Working Session",
  description:
    "Book a 30-minute executive working session to discuss your document workflow challenges.",
};

const workingSessionMailto =
  "mailto:satish@deltaxy.ai?subject=Executive%20Working%20Session%20%E2%80%94%20DeltaXY&body=Hi%2C%0A%0AI'd%20like%20to%20request%20an%20Executive%20Working%20Session%20with%20DeltaXY%20to%20discuss%20our%20document%20workflows.%0A%0A- Company%3A%0A- Workflow%20description%3A%0A- Preferred%20meeting%20time%3A%0A";

function WaveMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M1 5 C 5 1, 9 9, 13 5 S 21 1, 27 5" />
    </svg>
  );
}

function CornerBrackets() {
  const base =
    "pointer-events-none absolute h-3 w-3 border-[var(--dxy-primary)]";
  return (
    <>
      <span aria-hidden className={`${base} -left-px -top-px border-l-[1.5px] border-t-[1.5px]`} />
      <span aria-hidden className={`${base} -right-px -top-px border-r-[1.5px] border-t-[1.5px]`} />
      <span aria-hidden className={`${base} -bottom-px -left-px border-b-[1.5px] border-l-[1.5px]`} />
      <span aria-hidden className={`${base} -bottom-px -right-px border-b-[1.5px] border-r-[1.5px]`} />
    </>
  );
}

const directLines = [
  {
    label: "Email us directly",
    value: "satish@deltaxy.ai",
    href: "mailto:satish@deltaxy.ai",
  },
  {
    label: "Typical response",
    value: "Within 24 hours, business days",
  },
];

const expectations = [
  {
    title: "Discovery",
    body: "We'll learn about your document workflows, constraints, and goals — the real ones, not the slide-deck version.",
  },
  {
    title: "Assessment",
    body: "We'll talk through whether AI agents are a genuine fit for your use case, and where they aren't.",
  },
  {
    title: "Next steps",
    body: "If there's a fit, you'll leave with a concrete pilot scope. If not, you'll leave with clarity.",
  },
];

export default function ContactPage() {
  return (
    <div className="home-shell min-h-screen">
      <div className="w-[90%] md:w-[85%] mx-auto">
        {/* Breadcrumb */}
        <section className="pt-8">
          <nav className="flex items-center gap-2 text-sm text-dxy-muted">
            <Link href="/" className="transition-colors hover:text-dxy-ink">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-dxy-ink/80">Contact</span>
          </nav>
        </section>

        {/* Hero — asymmetric split */}
        <section className="pt-10 pb-20 sm:pt-14 lg:pt-16">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left rail — the pitch */}
            <div className="dxy-fade-up dxy-fade-up-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-dxy-ink mb-6">
                <WaveMark className="h-2.5 w-7 text-dxy-primary" />
                <span>Contact</span>
              </div>

              <h1 className="dxy-display mt-6 text-[clamp(2.75rem,7vw,5rem)]">
                Let&apos;s talk.
              </h1>

              <p className="dxy-lead mt-6 max-w-[34ch]">
                Book a 30-minute call to work through your document challenges.
                No pitch — just a straight conversation about whether AI agents
                are right for your use case.
              </p>

              {/* Direct lines — numbered */}
              <div className="mt-6 border-t border-dxy-border">
                {directLines.map((line, i) => (
                  <div
                    key={line.label}
                    className="flex items-baseline gap-5 border-b border-dxy-border py-5"
                  >
                    <span className="font-boldonse text-xs text-dxy-accent-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-dxy-muted">
                        {line.label}
                      </p>
                      {line.href ? (
                        <a
                          href={line.href}
                          className="mt-1 inline-block font-serif text-lg text-dxy-sage transition-colors hover:text-dxy-ink sm:text-xl"
                        >
                          {line.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-serif text-lg text-dxy-ink sm:text-xl">
                          {line.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — working session card */}
            <div className="dxy-fade-up dxy-fade-up-3 lg:sticky lg:top-28">
              <a
                href={workingSessionMailto}
                className="dxy-card dxy-card-interactive group relative block overflow-hidden p-7 sm:p-9"
              >
                <CornerBrackets />

                <div className="inline-flex items-center gap-2 rounded-full border border-dxy-border bg-dxy-paper/70 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-dxy-muted">
                  Executive Working Session
                </div>

                <h2 className="mt-6 font-serif text-[clamp(1.6rem,3.2vw,2.25rem)] leading-[1.1] text-dxy-ink">
                  Request a 30-minute working session
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-dxy-muted">
                  Send us your workflow details and a preferred time. We&apos;ll
                  confirm within 24 hours.
                </p>

                <ul className="mt-7 space-y-3">
                  {[
                    "Senior engineer on the call — no SDRs",
                    "We come prepared with relevant examples",
                    "You leave with a clear recommendation",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[15px] text-dxy-ink">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-dxy-sage"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.25}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA row — sage sweep arrow, echoing the hero button */}
                <div className="mt-9 flex items-center justify-between gap-4 border-t border-dxy-border pt-6">
                  <span className="font-serif text-lg text-dxy-ink">
                    Start the conversation
                  </span>
                  <span className="relative inline-flex h-11 items-center gap-3 overflow-hidden rounded-full bg-dxy-primary pl-5 pr-1.5 text-sm font-semibold uppercase tracking-wide shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                    <span className="absolute inset-0 -translate-x-full bg-dxy-sage transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    <span className="relative text-white">Book</span>
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-dxy-paper transition-transform duration-300 ease-out group-hover:translate-x-1">
                      <svg
                        className="h-4 w-4 text-dxy-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </span>
                </div>
              </a>

              <p className="mt-4 text-center text-xs text-dxy-muted">
                No prep required — bring your messiest workflow.
              </p>
            </div>
          </div>
        </section>

        {/* What to expect — horizontal numbered timeline */}
        <section className="py-20 border-t border-dxy-border bg-dxy-card/45">
          <div className="">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-dxy-ink mb-8">
              <WaveMark className="h-2.5 w-7 text-dxy-primary" />
              <span>What to expect</span>
            </div>

            <h2 className="dxy-heading mt-5 max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)]">
              Three steps, no surprises.
            </h2>

            <div className="relative mt-14">
              {/* Connector line across the row (desktop) */}
              <div
                aria-hidden
                className="absolute left-0 right-0 top-[19px] hidden h-px bg-dxy-border sm:block"
              />

              <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
                {expectations.map((step, i) => (
                  <div key={step.title} className="relative">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-dxy-primary bg-dxy-paper font-boldonse text-xs text-dxy-ink">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-6 font-serif text-xl text-dxy-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[40ch] text-[15px] leading-7 text-dxy-muted">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
