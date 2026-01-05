import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Document Processing | DeltaXY Case Study",
  description:
    "How AI agents processed thousands of court transcripts for legal research with 95%+ accuracy.",
};

export default function LegalCaseStudy() {
  return (
    <CaseStudyLayout
      industry="Legal Technology"
      client="Agami / World Bank"
      title="Making Court Transcripts Searchable"
      subtitle="How AI agents processed thousands of transcripts for legal research."
      challenge={{
        title: "The Challenge",
        content: [
          "Agami, in partnership with the World Bank, was building a legal research platform to improve access to justice in India. The foundation: thousands of court transcripts that needed to be digitized, structured, and made searchable.",
          "The challenge: court transcripts are messy. They contain inconsistent formatting, legal jargon, multiple speakers, and references to cases, statutes, and precedents. Manual processing would take years.",
          "They needed a solution that could process transcripts in multiple formats (PDF, images, text), extract speaker turns and dialogue, identify case citations and legal references, and structure data for search and analysis.",
        ],
      }}
      solution={{
        title: "The Solution",
        content:
          "We built a document processing pipeline with specialized agents:",
        features: [
          {
            name: "OCR Agent",
            description:
              "Handles scanned documents and images. Corrects for poor scan quality. Preserves document structure.",
          },
          {
            name: "Transcript Parser",
            description:
              "Identifies speaker turns (Judge, Advocate, Witness). Extracts dialogue and arguments. Handles interruptions and cross-talk.",
          },
          {
            name: "Legal Extractor",
            description:
              "Identifies case citations. Extracts references to statutes and acts. Links to related documents.",
          },
        ],
      }}
      results={{
        metrics: [
          { value: "1000s", label: "Transcripts Processed" },
          { value: "95%+", label: "Accuracy" },
          { value: "Full-text", label: "Search Ready" },
          { value: "Research", label: "Platform Foundation" },
        ],
        quote: {
          text: "This corpus is enabling research that wasn't possible before. We can now study patterns across thousands of cases.",
        },
      }}
      ctaTitle="Working with complex documents?"
      accentColor="#ec4899"
    />
  );
}
