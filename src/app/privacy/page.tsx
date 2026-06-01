import { WaveMark } from "@/components/home/AboutSection";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | DeltaXY",
  description:
    "How DeltaXY (a Vedhverse AI Pvt. Ltd.) collects, uses, and protects personal information across its AI Document Intelligence services.",
};

export default function PrivacyPage() {
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
            Privacy, handled with the same calm and clarity.
          </h1>
          <p className="text-sm uppercase tracking-widest text-dxy-muted">
            Last Updated: February 2, 2026
          </p>
          <p className="text-base leading-relaxed text-dxy-muted">
            This Privacy Policy describes how DeltaXY (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects and uses your
            personal information in relation to our website, AI agent services,
            and professional consultations (collectively, &ldquo;DeltaXY
            Offerings&rdquo;).
          </p>
        </section>

        <section className="py-12 md:px-6">
          <div className="space-y-12">
            <Clause
              number="1"
              title="Personal Information We Collect"
              intro="We collect personal information to provide and improve our AI Document Intelligence services."
              bullets={[
                {
                  label: "Information You Give Us",
                  body:
                    "We collect information you provide when you “Book a Call”, email us, or use our contact forms. This includes your name, email address, job title, and organization (e.g., Grant Thornton, Agami).",
                },
                {
                  label: "Automatic Information",
                  body:
                    "We automatically collect certain types of information when you interact with our website, such as your IP address, browser type, and how you navigate our site.",
                },
                {
                  label: "Information from Document Processing",
                  body:
                    "While our AI agents process documents (leases, contracts, transcripts), we distinguish between “Service Data” (the content you ask our agents to process) and “Account Information”. Your Service Data is handled according to the specific terms of our service agreement.",
                },
              ]}
            />

            <Clause
              number="2"
              title="How We Use Personal Information"
              intro="We use your information to:"
              bullets={[
                {
                  label: "Provide & Optimize AI Agents",
                  body:
                    "To build, develop, and implement tailored AI extraction and processing agents.",
                },
                {
                  label: "Communication",
                  body:
                    "To respond to your inquiries, schedule discovery calls, and provide technical support.",
                },
                {
                  label: "Continuous Improvement",
                  body:
                    "As our agents “learn” from corrections and feedback, we use metadata to improve extraction accuracy (95%+) and performance.",
                },
                {
                  label: "Fraud Prevention",
                  body:
                    "To protect the security of our customers and our infrastructure.",
                },
              ]}
            />

            <Clause
              number="3"
              title="Cookies"
              intro="We use cookies and similar tools to recognize your browser, learn about your interests, and provide you with essential features and services."
              bullets={[
                {
                  label: "Essential Cookies",
                  body: "Necessary for the website to function.",
                },
                {
                  label: "Performance Cookies",
                  body:
                    "Help us understand how visitors interact with DeltaXY.ai so we can reduce “document drudgery” more effectively.",
                },
              ]}
            />

            <Clause
              number="4"
              title="How We Share Personal Information"
              intro="DeltaXY is not in the business of selling your personal information. We share information only as described below:"
              bullets={[
                {
                  label: "Third-Party Service Providers",
                  body:
                    "We may employ other companies to perform functions on our behalf, such as CRM management or website analytics.",
                },
                {
                  label: "Business Transfers",
                  body:
                    "As we develop our business, we might sell or buy businesses or services. Customer information is typically a transferred asset in such transactions.",
                },
                {
                  label: "Legal Obligations",
                  body:
                    "We release account and personal information when required by law or to protect the rights and safety of DeltaXY and our clients.",
                },
              ]}
            />

            <Clause
              number="5"
              title="Location of Information"
              paragraphs={[
                "DeltaXY is an India-based company (A Vedhverse AI Pvt. Ltd.). Depending on your location, your information may be stored or accessed from jurisdictions that have different data protection laws than your own. We ensure all transfers comply with applicable data protection regulations.",
              ]}
            />

            <Clause
              number="6"
              title="How We Secure Information"
              intro={"Security is a core component of our “Smart Discovery” and “AI Development” process."}
              bullets={[
                {
                  body: "We use encryption protocols to protect your data during transmission.",
                },
                {
                  body: "We maintain physical and electronic safeguards for data collection and storage.",
                },
                {
                  body:
                    "For our aviation and legal clients, we implement strict data isolation to ensure AI learning is contained within your specific workflow environment where required.",
                },
              ]}
            />

            <Clause
              number="7"
              title="Access and Choice"
              intro="You have choices about the collection and use of your data:"
              bullets={[
                {
                  label: "Opt-Out",
                  body:
                    "You can choose not to provide certain information, though it may prevent you from using features like “Book a Call”.",
                },
                {
                  label: "Marketing",
                  body: (
                    <>
                      If you do not wish to receive emails from us, please contact
                      us at{" "}
                      <a className="dxy-inline-link" href="mailto:satish@deltaxy.ai">
                        satish@deltaxy.ai
                      </a>
                      .
                    </>
                  ),
                },
              ]}
            />

            <Clause
              number="8"
              title="Contact Information"
              paragraphs={[
                <>
                  If you have any concerns about privacy at DeltaXY, please
                  contact us with a thorough description.
                </>,
              ]}
            />

            <div className="rounded-[24px] border border-dxy-border bg-dxy-card p-7 sm:p-9">
              <p className="text-[16px] leading-8 text-dxy-muted">
                Email:{" "}
                <a className="dxy-inline-link" href="mailto:satish@deltaxy.ai">
                  satish@deltaxy.ai
                </a>
                <br />
                Subject: Privacy Inquiry
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

type Bullet = {
  label?: string;
  body: React.ReactNode;
};

function Clause({
  number,
  title,
  intro,
  paragraphs,
  bullets,
}: {
  number: string;
  title: string;
  intro?: React.ReactNode;
  paragraphs?: React.ReactNode[];
  bullets?: Bullet[];
}) {
  return (
    <article>
      <div className="flex items-baseline gap-4">
        <span className="font-serif text-2xl text-dxy-sage">
          {number.padStart(2, "0")}
        </span>
        <h2 className="font-crimson text-4xl text-dxy-ink">{title}</h2>
      </div>

      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-dxy-muted">
          {intro}
        </p>
      ) : null}

      {paragraphs?.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-dxy-muted text-justify">
          {p}
        </p>
      ))}

      {bullets?.length ? (
        <ul className="mt-5 space-y-3">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="relative pl-5 text-base leading-relaxed text-dxy-muted before:absolute before:left-0 before:top-[14px] before:h-[6px] before:w-[6px] before:rounded-full before:bg-dxy-sage text-justify"
            >
              {b.label ? (
                <span className="font-medium text-dxy-ink">
                  {b.label}:
                </span>
              ) : null}{" "}
              {b.body}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
