import Link from "next/link";

interface CaseStudyLayoutProps {
  industry: string;
  client: string;
  title: string;
  subtitle: string;
  challenge: {
    title: string;
    content: string[];
  };
  solution: {
    title: string;
    content: string;
    features: {
      name: string;
      description: string;
    }[];
  };
  results: {
    metrics: {
      value: string;
      label: string;
    }[];
    quote?: {
      text: string;
      author?: string;
    };
  };
  ctaTitle: string;
}

export function CaseStudyLayout({
  industry,
  client,
  title,
  subtitle,
  challenge,
  solution,
  results,
  ctaTitle,
}: CaseStudyLayoutProps) {
  return (
    <article className="bg-[var(--dxy-paper)] text-[var(--dxy-ink)]">
      {/* ===== HERO ===== */}
      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="dxy-container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--dxy-muted)] mb-8">
            <Link
              href="/"
              className="transition-colors hover:text-[var(--dxy-ink)]"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#industries"
              className="transition-colors hover:text-[var(--dxy-ink)]"
            >
              Industries
            </Link>
            <span>/</span>
            <span className="text-[var(--dxy-ink)]/80">{industry}</span>
          </nav>

          <div className="max-w-[760px]">
            {/* Badge + client */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--dxy-border)] bg-[var(--dxy-card)] mb-4">
              <span className="text-sm text-[var(--dxy-muted)]">{industry}</span>
            </div>
            <p className="text-sm text-[var(--dxy-muted)] mb-4">{client}</p>

            <h1
              className={
                "font-serif mt-2 text-[clamp(2rem,5.5vw,3.5rem)] leading-tight tracking-[-0.03em] text-[var(--dxy-ink)]"
              }
            >
              {title}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-8 text-[var(--dxy-muted)] max-w-[620px]">
              {subtitle}
            </p>
          </div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-[20px] border border-[var(--dxy-border)] bg-[var(--dxy-border)] max-w-[760px]">
            {results.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-[var(--dxy-card)] px-5 py-5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-semibold text-[var(--dxy-sage)]">
                  {m.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-[var(--dxy-muted)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHALLENGE ===== */}
      <section className="border-t border-[var(--dxy-border)]">
        <div className="dxy-container py-12 sm:py-16">
          <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] leading-tight text-[var(--dxy-ink)] mb-8">
            {challenge.title}
          </h2>
          <div className="max-w-[720px] space-y-5">
            {challenge.content.map((para, idx) => (
              <p
                key={idx}
                className="text-[15px] sm:text-[16px] leading-7 sm:leading-8 text-[var(--dxy-muted)]"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="border-t border-[var(--dxy-border)] bg-[var(--dxy-card)]/45">
        <div className="dxy-container py-12 sm:py-16">
          <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] leading-tight text-[var(--dxy-ink)] mb-4">
            {solution.title}
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-7 sm:leading-8 text-[var(--dxy-muted)] max-w-[720px] mb-8 sm:mb-10">
            {solution.content}
          </p>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {solution.features.map((feature, idx) => (
              <div
                key={feature.name}
                className={
                  "dxy-card p-6 sm:p-7 border-t-[3px] border-t-[var(--dxy-sage)] dxy-stagger-item dxy-fade-up-" +
                  Math.min(idx + 1, 4)
                }
                style={{ "--stagger-i": idx } as React.CSSProperties}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--dxy-ink)] mb-3">
                  {feature.name}
                </h3>
                <p className="text-sm sm:text-[15px] leading-7 text-[var(--dxy-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="border-t border-[var(--dxy-border)]">
        <div className="dxy-container py-12 sm:py-16">
          <h2 className="font-serif text-[clamp(1.6rem,3.4vw,2.2rem)] leading-tight text-[var(--dxy-ink)] mb-10">
            The Results
          </h2>

          {/* Metrics (mobile) */}
          <div className="grid grid-cols-2 gap-4 mb-10 sm:hidden">
            {results.metrics.map((m) => (
              <div key={m.label} className="dxy-card p-5 text-center">
                <div className="text-2xl font-semibold text-[var(--dxy-sage)]">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-[var(--dxy-muted)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          {results.quote && (
            <blockquote className="dxy-card p-6 sm:p-8 border-l-[3px] border-l-[var(--dxy-sage)] max-w-[720px]">
              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-[var(--dxy-ink)] italic">
                &quot;{results.quote.text}&quot;
              </p>
              {results.quote.author && (
                <cite className="mt-4 block text-sm text-[var(--dxy-muted)] not-italic">
                  — {results.quote.author}
                </cite>
              )}
            </blockquote>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-[var(--dxy-border)] bg-[var(--dxy-card)]/45">
        <div className="dxy-container py-12 sm:py-16 text-center">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight text-[var(--dxy-ink)] mb-4">
            {ctaTitle}
          </h2>
          <p className="mx-auto max-w-[560px] text-[15px] sm:text-[16px] leading-7 text-[var(--dxy-muted)] mb-8">
            Let's discuss how we can apply similar automation to your document
            workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="dxy-button"
            >
              Request an Executive Working Session
            </Link>
            <Link
              href="/#industries"
              className="dxy-inline-link inline-flex items-center justify-center"
            >
              Explore more industries
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
