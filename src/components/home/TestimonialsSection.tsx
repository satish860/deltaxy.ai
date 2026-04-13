export function TestimonialsSection() {
  return (
    <section className="dxy-section">
      <div className="dxy-container">
        <div className="max-w-[720px]">
          <p className="dxy-kicker">Client stories</p>
          <h2 className="dxy-heading mt-4">What our clients say</h2>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="dxy-card dxy-card-interactive p-6 sm:p-8 lg:p-10">
            <svg
              className="h-9 w-9 text-[color:var(--dxy-sage)]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.98v10h-9.98z" />
            </svg>
            <blockquote className="mt-4 text-[16px] leading-7 text-[color:var(--dxy-ink)] sm:text-[17px] sm:leading-8">
              We partnered with Vedhverse (deltaxy.ai) on an automated
              processing tool for aircraft utilisation reports. From
              the beginning, they impressed us with their professionalism,
              speed and problem solving capabilities. The solution they
              delivered has streamlined our process and driven efficiencies.
            </blockquote>
            <blockquote className="mt-3 text-[16px] leading-7 text-[color:var(--dxy-ink)] sm:mt-4 sm:text-[18px] sm:leading-8">
              What stood out the most was their deep technical expertise,
              clear communication and responsiveness. We would highly
              recommend them to any organization looking for reliable
              AI-driven solutions.
            </blockquote>
            <div className="mt-6 border-t border-[color:var(--dxy-border)] pt-4 sm:mt-8 sm:pt-6">
              <p className="text-sm font-semibold text-[color:var(--dxy-ink)]">
                Liam Gleeson
              </p>
              <p className="text-sm text-[color:var(--dxy-muted)]">
                Director — Aviation Advisory, Grant Thornton Ireland
              </p>
            </div>
          </article>

          <div className="space-y-4 sm:space-y-5">
            <HighlightCard
              quote="Professionalism &amp; Speed"
              label="What clients notice first"
            />
            <HighlightCard
              quote="Deep Technical Expertise"
              label="Built on years of AI engineering"
            />
            <HighlightCard
              quote="Clear Communication"
              label="No jargon, no black box"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  quote,
  label,
}: {
  quote: string;
  label?: string;
}) {
  return (
    <div className="dxy-card dxy-card-interactive p-5 sm:p-7">
      <p className="text-xl sm:text-2xl font-semibold text-[color:var(--dxy-sage)]">
        {quote}
      </p>
      {label && (
        <p className="mt-1.5 text-xs sm:text-sm text-[color:var(--dxy-muted)]">
          {label}
        </p>
      )}
    </div>
  );
}
