import type { Metadata, Viewport } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DeltaXY — Document intelligence for regulated industries",
  description:
    "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
  openGraph: {
    title: "DeltaXY — Document intelligence for regulated industries",
    description:
      "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
    url: "https://deltaxy.ai",
    siteName: "DeltaXY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaXY — Document intelligence for regulated industries",
    description:
      "DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonText.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
