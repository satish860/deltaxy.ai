import { useStaggerObserver } from "./hooks";

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

export function HowItWorksSection() {
  const ref = useStaggerObserver();

  return (
    <section
      id="how-it-works"
      className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45"
    >
      <div className="dxy-container">
        <div className="max-w-[720px]">
          <p className="dxy-kicker">How engagement works</p>
          <h2 className="dxy-heading mt-4">
            Start with a working session. Prove the workflow. Then decide.
          </h2>
        </div>

        <div
          ref={ref}
          className="relative mt-8 dxy-stagger grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {/* Vertical connector on desktop */}
          <div
            className="hidden xl:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[color:var(--dxy-border)] z-0"
            aria-hidden
          />
          {steps.map((step, i) => (
            <article
              key={step.title}
              className={
                "relative dxy-card dxy-stagger-item dxy-card-interactive p-5 sm:p-7 dxy-fade-up-" +
                Math.min(i + 1, 4)
              }
            >
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)] font-medium text-[color:var(--dxy-accent)]">
                {i + 1}
              </div>
              <h3 className="mt-3 sm:mt-4 font-serif text-[1.4rem] sm:text-[1.7rem] leading-tight text-[color:var(--dxy-ink)]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-[color:var(--dxy-muted)] sm:text-[15px]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
