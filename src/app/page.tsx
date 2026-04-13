import type { Metadata } from "next";
import { HomeBody } from "@/components/HomeBody";

export const metadata: Metadata = {
  title: "DeltaXY — Outcome Engineering for Document-Heavy Operations",
  description:
    "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
  openGraph: {
    title: "DeltaXY — Outcome Engineering for Document-Heavy Operations",
    description:
      "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
    url: "https://deltaxy.ai",
    siteName: "DeltaXY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaXY — Outcome Engineering for Document-Heavy Operations",
    description:
      "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
  },
};

export default function Home() {
  return <HomeBody />;
}
