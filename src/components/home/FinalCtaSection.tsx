export function FinalCtaSection() {
  const workingSessionMailto =
    "mailto:satish@deltaxy.ai?subject=Executive%20Working%20Session%20%E2%80%94%20DeltaXY&body=Hi%2C%0A%0AI'd%20like%20to%20request%20an%20Executive%20Working%20Session%20with%20DeltaXY%20to%20discuss%20our%20document%20workflows.%0A%0A- Company%3A%0A- Workflow%20description%3A%0A- Preferred%20meeting%20time%3A%0A";

  return (
    <section
      id="contact"
      className="dxy-section"
    >
      <div className="dxy-container">
        <div className="mx-auto max-w-[880px] rounded-[28px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] px-6 py-8 text-center shadow-[0_8px_24px_rgba(58,53,48,0.04)] sm:px-7 sm:py-10 lg:px-12 lg:py-14">
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.05] text-[color:var(--dxy-ink)]">
            Tell us about your document workflows, constraints, and goals
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:mt-5 sm:text-[16px] sm:leading-8">
            We'll recommend the fastest path to measurable outcomes.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:mt-9 sm:flex-row">
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
  );
}
