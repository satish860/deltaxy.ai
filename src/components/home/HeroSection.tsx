import { heroMetrics } from "./data";

export function HeroSection() {
  const workingSessionMailto =
    "mailto:satish@deltaxy.ai?subject=Executive%20Working%20Session%20%E2%80%94%20DeltaXY&body=Hi%2C%0A%0AI'd%20like%20to%20request%20an%20Executive%20Working%20Session%20with%20DeltaXY%20to%20discuss%20our%20document%20workflows.%0A%0A- Company%3A%0A- Workflow%20description%3A%0A- Preferred%20meeting%20time%3A%0A";

  return (
    <section className="dxy-hero">
      <div className="dxy-container">
        <div className="mx-auto max-w-[760px] text-center">
          <h1 className="dxy-display mt-6 dxy-fade-up dxy-fade-up-1">
            Outcome Engineering for Regulated,
            <br className="hidden sm:block" />
            <br className="sm:hidden" />
            Document-Heavy Operations
          </h1>
          <p className="dxy-lead mt-6 dxy-fade-up dxy-fade-up-2">
            Most enterprise AI efforts fail in production — not because
            models are weak, but because workflows are not engineered
            for accuracy, controls, and adoption.
          </p>

          <div className="mt-10 dxy-fade-up dxy-fade-up-3">
            <a
              href={workingSessionMailto}
              className="dxy-button dxy-fade-up dxy-fade-up-3"
              aria-label="Request an Executive Working Session by email"
            >
              Request an Executive Working Session
            </a>
          </div>

          <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[color:var(--dxy-muted)] sm:text-[15px] dxy-fade-up dxy-fade-up-4">
            You'll meet directly with DeltaXY leadership. No generic sales
            process.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-px overflow-hidden rounded-[20px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-border)] sm:grid-cols-2 lg:grid-cols-5">
          {heroMetrics.map((metric, i) => (
            <div
              key={metric}
              className={
                "bg-[color:var(--dxy-card)] px-4 py-4 sm:px-5 sm:py-5 text-center text-xs sm:text-sm font-medium text-[color:var(--dxy-ink)]/88 " +
                `dxy-fade-up dxy-fade-up-${Math.min(i + 2, 6)}`
              }
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
