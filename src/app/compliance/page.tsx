import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DORA Compliance Automation | DeltaXY Case Study",
  description:
    "How AI agents mapped 500+ regulatory requirements to client controls in days, not months.",
};

export default function ComplianceCaseStudy() {
  return (
    <CaseStudyLayout
      industry="Regulatory Compliance"
      client="Grant Thornton"
      title="DORA Compliance at Scale"
      subtitle="How AI agents mapped 500+ regulatory requirements to client controls in days."
      challenge={{
        title: "The Challenge",
        content: [
          "The Digital Operational Resilience Act (DORA) is the EU's new regulation for financial services IT resilience. It introduces hundreds of new requirements that firms must map to their existing controls.",
          "Grant Thornton's compliance practice was helping clients prepare for DORA. The challenge: manually reading the regulation, extracting requirements, and mapping them to existing control frameworks was taking weeks per client.",
          "They needed a solution that could parse complex regulatory text, extract specific requirements and obligations, map requirements to standard control frameworks (COBIT, ISO 27001), and identify gaps in existing controls.",
        ],
      }}
      solution={{
        title: "The Solution",
        content:
          "We built a compliance mapping agent that automates the heaviest parts of the analysis:",
        features: [
          {
            name: "Regulatory Parser",
            description:
              "Reads DORA regulation and technical standards. Extracts 500+ specific requirements. Categorizes by theme, entity type, and timeline.",
          },
          {
            name: "Control Mapper",
            description:
              "Maps each requirement to relevant control frameworks. Suggests existing controls that address each requirement. Identifies gaps requiring new controls. Generates client-ready documentation.",
          },
        ],
      }}
      results={{
        metrics: [
          { value: "500+", label: "Requirements Mapped" },
          { value: "Days", label: "Not Months" },
          { value: "90%", label: "Accuracy" },
          { value: "Reusable", label: "Across Clients" },
        ],
        quote: {
          text: "We used to spend weeks on the initial mapping. Now we spend that time on higher-value advisory work.",
        },
      }}
      ctaTitle="Facing regulatory complexity?"
      accentColor="#814ac8"
    />
  );
}
