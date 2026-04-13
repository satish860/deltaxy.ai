import { useStaggerObserver } from "./hooks";

const bullets = [
  "Outcome Engineering discipline, not ad-hoc automation",
  "Production-first execution with measurable KPIs",
  "Designed for regulated environments where errors are expensive",
  "Built to be auditable, maintainable, and operationally adopted",
  "Focused team, direct delivery — no junior handoffs or bloated account management",
  "Earned expansion model: we scale only when outcomes are measured and verified",
];

export function WhyDeltaxySection() {
  const ref = useStaggerObserver();

  return (
    <section
      id="why-deltaxy"
      className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/65"
    >
      <div className="dxy-container">
        <div className="max-w-[820px]">
          <p className="dxy-kicker">Why DeltaXY</p>
          <h2 className="dxy-heading mt-4">
            Most vendors optimize model output. We optimize business outcomes.
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-[color:var(--dxy-muted)] sm:text-[17px] sm:leading-8">
            You work with a focused DeltaXY team that combines document AI
            engineering, workflow design, and domain-aware validation.
            We scale only when outcomes are measured and verified — if we
            don't create measurable value, you shouldn't continue.
          </p>
        </div>

        <div ref={ref} className="mt-8 dxy-stagger grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2">
          {bullets.map((bullet, i) => (
            <div
              key={bullet}
              className={
                "dxy-card dxy-stagger-item dxy-card-interactive flex items-start gap-3 p-4 sm:gap-4 sm:p-6 dxy-fade-up-" +
                Math.min(i + 1, 6)
              }
            >
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-[color:var(--dxy-sage)] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[14px] sm:text-[16px] leading-7 text-[color:var(--dxy-ink)]">
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
