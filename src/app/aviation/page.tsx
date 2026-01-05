import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation Document Automation | DeltaXY Case Study",
  description:
    "How AI agents automated aircraft utilization tracking for Grant Thornton, saving 40+ hours per week.",
};

export default function AviationCaseStudy() {
  return (
    <CaseStudyLayout
      industry="Aviation Leasing"
      client="Grant Thornton"
      title="Turning 200+ Leases Into Actionable Intelligence"
      subtitle="How AI agents automated aircraft utilization tracking for a global professional services firm."
      challenge={{
        title: "The Challenge",
        content: [
          "Grant Thornton's aviation practice advises lessors managing billions in aircraft assets. Each month, lessors receive utilization reports from airlines - PDFs filled with flight hours, cycles, maintenance data, and financial calculations.",
          "The problem: extracting this data manually was eating 40+ hours per week. Analysts were copying numbers from PDFs into spreadsheets, cross-referencing lease terms, and flagging discrepancies. It was slow, error-prone, and soul-crushing work.",
          "They needed a solution that could read utilization reports in any format, extract flight hours, cycles, and maintenance reserves, cross-reference against lease agreements, and flag anomalies for human review.",
        ],
      }}
      solution={{
        title: "The Solution",
        content:
          "We built two AI agents that work together to automate the entire extraction and analysis workflow:",
        features: [
          {
            name: "Agent Zeus - The Extractor",
            description:
              "Reads PDF utilization reports regardless of format. Extracts 50+ data points per document. Handles handwritten annotations and scanned documents. Learns from corrections to improve over time.",
          },
          {
            name: "Agent Hercules - The Analyzer",
            description:
              "Cross-references extracted data against lease terms. Calculates expected vs. actual utilization. Flags discrepancies for analyst review. Generates standardized output for downstream systems.",
          },
        ],
      }}
      results={{
        metrics: [
          { value: "40+", label: "Hours Saved Weekly" },
          { value: "200+", label: "Docs Monthly" },
          { value: "95%", label: "Accuracy" },
          { value: "6 wk", label: "Deployment" },
        ],
        quote: {
          text: "What used to take our analysts an entire week now happens overnight. The accuracy improvements alone justified the investment.",
        },
      }}
      ctaTitle="Have a similar challenge?"
      accentColor="#3b82f6"
    />
  );
}
