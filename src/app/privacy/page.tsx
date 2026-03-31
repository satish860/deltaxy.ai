import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | DeltaXY",
  description: "Privacy information for DeltaXY.",
};

export default function PrivacyPage() {
  return (
    <div className="home-shell">
      <section className="dxy-hero">
        <div className="dxy-container max-w-[860px]">
          <p className="dxy-eyebrow">Privacy</p>
          <h1 className="dxy-display mt-6">Privacy, handled with the same calm and clarity.</h1>
          <p className="mt-6 max-w-[720px] text-[17px] leading-8 text-[color:var(--dxy-muted)] sm:text-lg">
            This page is a placeholder for the formal DeltaXY privacy policy.
            For any privacy or data-handling questions, contact us directly and
            we’ll provide the relevant information for your workflow and buyer
            constraints.
          </p>

          <div className="mt-10 rounded-[24px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] p-7 sm:p-9">
            <p className="text-[16px] leading-8 text-[color:var(--dxy-muted)]">
              Email: <a className="dxy-inline-link" href="mailto:hello@deltaxy.ai">hello@deltaxy.ai</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
