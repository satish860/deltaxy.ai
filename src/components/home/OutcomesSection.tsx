import { useStaggerObserver } from "./hooks";

const outcomes = [
  "Extraction and decision accuracy",
  "Lower manual review effort",
  "Faster turnaround for document-driven processes",
  "Audit-ready evidence trails and controls",
  "Production workflows integrated into existing systems",
];

export function OutcomesSection() {
  const ref = useStaggerObserver();

  return (
    <section id="outcomes" className="dxy-section">
      <div className="dxy-container">
        <div className="max-w-[760px]">
          <p className="dxy-kicker">Outcomes that matter</p>
          <h2 className="dxy-heading mt-4">
            Higher accuracy. Lower effort. Faster turnaround. Audit-ready.
          </h2>
        </div>

        <div ref={ref} className="mt-8 dxy-stagger grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-1">
          {outcomes.map((item, i) => (
            <div
              key={item}
              className={
                "dxy-card dxy-stagger-item dxy-fade-up-" +
                Math.min(i + 1, 5)
              }
            >
              <div className="flex items-center gap-3 p-4 sm:p-6 sm:gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--dxy-border)] bg-[color:var(--dxy-paper)]">
                  <svg
                    className="h-4 w-4 text-[color:var(--dxy-sage)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[15px] leading-7 text-[color:var(--dxy-ink)]">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
