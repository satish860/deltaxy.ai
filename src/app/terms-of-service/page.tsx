import { WaveMark } from "@/components/home/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DeltaXY",
  description:
    "Terms of Service for DeltaXY (a Vedhverse AI Pvt. Ltd.) — the binding agreement governing access to the DeltaXY AI Document Intelligence platform and agents.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-24">
      <div className="w-[85%] mx-auto">
        <div
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-dxy-ink mb-10"
        >
          <WaveMark className="h-2.5 w-7 text-dxy-primary" />
          <span>Privacy Policy</span>
        </div>
        <section className="space-y-3.5">
          <h1 className="font-crimson font-semibold text-dxy-ink text-5xl">
            The agreement behind every DeltaXY engagement.
          </h1>
          <p className="text-sm uppercase tracking-widest text-dxy-muted">
            Last Updated: February 2, 2026
          </p>
          <p className="text-base leading-relaxed text-dxy-muted">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a binding
            legal agreement between DeltaXY (a Vedhverse AI Pvt. Ltd.)
            (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
            &ldquo;our&rdquo;) and the entity or person (&ldquo;Customer&rdquo;,
            &ldquo;you&rdquo; or &ldquo;your&rdquo;) placing an order for or
            accessing the DeltaXY AI services.
          </p>
        </section>

        <section className="py-12 px-6">
          <div className="space-y-12">
            <Clause
              number="1"
              title="The Services"
              subClauses={[
                {
                  id: "1.1",
                  label: "Access to Platform",
                  body:
                    "Subject to these Terms, Company grants Customer a non-exclusive, non-transferable right to access and use the DeltaXY AI Document Intelligence platform and agents (the “Service”) solely for Customer’s internal business operations.",
                },
                {
                  id: "1.2",
                  label: "AI Agent Deployment",
                  body:
                    "The Service includes the design, development, and implementation of AI agents tailored to Customer’s document workflows (the “AI Agents”), as further detailed in a Statement of Work (“SOW”) or Order Form.",
                },
                {
                  id: "1.3",
                  label: "Continuous Optimization",
                  body:
                    "Customer acknowledges that the Service involves a “Learn” component where AI Agents are refined based on corrections and feedback to improve extraction accuracy.",
                },
              ]}
            />

            <Clause
              number="2"
              title="Customer Data and Intellectual Property"
              subClauses={[
                {
                  id: "2.1",
                  label: "Customer Data",
                  body:
                    "Customer retains all intellectual property rights in the documents, data, and information uploaded to the Service (“Customer Data”). Customer grants Company a world-wide, royalty-free license to host, use, and process Customer Data solely for the purpose of providing the Service.",
                },
                {
                  id: "2.2",
                  label: "Company IP",
                  body:
                    "Company retains all rights, title, and interest in the Service, the AI Agents (excluding Customer Data), the “agent.py” frameworks, any improvements derived from the Service, and all technical metadata.",
                },
                {
                  id: "2.3",
                  label: "Feedback & Model Training",
                  body:
                    "Company may use de-identified, aggregated metadata and feedback (e.g., corrections to extraction fields) to improve the performance and accuracy of its models. This data will not contain any Personal Data or Customer Confidential Information.",
                },
              ]}
            />

            <Clause
              number="3"
              title="Customer Responsibilities"
              subClauses={[
                {
                  id: "3.1",
                  label: "Usage Restrictions",
                  body:
                    "Customer shall not: (i) decompile or reverse engineer the AI Agents; (ii) use the Service to build a competing product; or (iii) remove any proprietary notices.",
                },
                {
                  id: "3.2",
                  label: "Accuracy of Data",
                  body:
                    "Customer is responsible for the quality and legality of Customer Data. While Company targets 95%+ accuracy, Customer acknowledges that AI outputs require human verification for critical business decisions in the aviation, legal, or compliance sectors.",
                },
              ]}
            />

            <Clause
              number="4"
              title="Fees and Payment"
              subClauses={[
                {
                  id: "4.1",
                  label: "Fees",
                  body:
                    "Customer shall pay the fees set forth in the applicable Order Form or SOW. All fees are non-refundable unless otherwise stated.",
                },
                {
                  id: "4.2",
                  label: "Taxes",
                  body:
                    "Fees are exclusive of taxes, which Customer is responsible for paying.",
                },
              ]}
            />

            <Clause
              number="5"
              title="Confidentiality"
              subClauses={[
                {
                  id: "5.1",
                  label: "Definition",
                  body:
                    "“Confidential Information” means any non-public information disclosed by one party to the other that is marked as confidential or should reasonably be understood to be confidential.",
                },
                {
                  id: "5.2",
                  label: "Protection",
                  body:
                    "Each party agrees to protect the other’s Confidential Information with at least the same degree of care it uses for its own similar information.",
                },
              ]}
            />

            <Clause
              number="6"
              title="Warranty and Disclaimer"
              subClauses={[
                {
                  id: "6.1",
                  label: "Warranty",
                  body:
                    "Company warrants that it will provide the Service in a professional and workmanlike manner.",
                },
                {
                  id: "6.2",
                  label: "Disclaimer",
                  body:
                    "EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICE IS PROVIDED “AS IS”. COMPANY DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. COMPANY DOES NOT GUARANTEE THAT THE AI AGENTS WILL BE ERROR-FREE.",
                },
              ]}
            />

            <Clause
              number="7"
              title="Limitation of Liability"
              paragraphs={[
                "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL COMPANY BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES. COMPANY’S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY CUSTOMER TO COMPANY IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.",
              ]}
            />

            <Clause
              number="8"
              title="Indemnification"
              subClauses={[
                {
                  id: "8.1",
                  label: "By Company",
                  body:
                    "Company shall defend Customer against third-party claims that the Service infringes a patent or copyright, provided Customer gives prompt notice and cooperation.",
                },
                {
                  id: "8.2",
                  label: "By Customer",
                  body:
                    "Customer shall indemnify Company against claims arising from Customer Data or Customer’s breach of these Terms.",
                },
              ]}
            />

            <Clause
              number="9"
              title="Term and Termination"
              subClauses={[
                {
                  id: "9.1",
                  label: "Term",
                  body:
                    "These Terms remain in effect until all SOWs have expired or are terminated.",
                },
                {
                  id: "9.2",
                  label: "Termination for Cause",
                  body:
                    "Either party may terminate if the other party materially breaches these Terms and fails to cure the breach within thirty (30) days.",
                },
              ]}
            />

            <Clause
              number="10"
              title="General Provisions"
              subClauses={[
                {
                  id: "10.1",
                  label: "Governing Law",
                  body:
                    "These Terms are governed by the laws of India, without regard to conflict of law principles.",
                },
                {
                  id: "10.2",
                  label: "Entire Agreement",
                  body:
                    "These Terms, along with any Order Forms or SOWs, constitute the entire agreement between the parties.",
                },
                {
                  id: "10.3",
                  label: "Contact",
                  body: (
                    <>
                      Legal notices should be sent to{" "}
                      <a className="dxy-inline-link" href="mailto:satish@deltaxy.ai">
                        satish@deltaxy.ai
                      </a>
                      .
                    </>
                  ),
                },
              ]}
            />

            <div className="rounded-[24px] border border-dxy-border bg-dxy-card p-7 sm:p-9">
              <p className="text-[16px] leading-8 text-dxy-muted">
                Questions about these Terms?{" "}
                <a className="dxy-inline-link" href="mailto:satish@deltaxy.ai">
                  satish@deltaxy.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

type SubClause = {
  id: string;
  label: string;
  body: React.ReactNode;
};

function Clause({
  number,
  title,
  paragraphs,
  subClauses,
}: {
  number: string;
  title: string;
  paragraphs?: React.ReactNode[];
  subClauses?: SubClause[];
}) {
  return (
    <article>
      <div className="flex items-baseline gap-4">
        <span className="font-serif text-2xl text-dxy-sage">
          {number.padStart(2, "0")}
        </span>
        <h2 className="font-crimson text-4xl text-dxy-ink">{title}</h2>
      </div>

      {paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-dxy-muted text-justify">
          {p}
        </p>
      ))}

      {subClauses?.length ? (
        <div className="mt-5 space-y-4">
          {subClauses.map((s) => (
            <div key={s.id} className="grid gap-1">
              <p className="text-base font-medium text-dxy-ink">
                <span className="mr-1.5 font-serif text-dxy-sage">
                  {s.id}
                </span>
                {s.label}
              </p>
              <p className="text-base leading-relaxed text-dxy-muted text-justify">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}
