import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DeltaXY | AI Agents for Document Intelligence",
  description: "We build reliable AI agents that extract, learn, and deliver measurable outcomes across aviation, compliance, and legal domains.",
  openGraph: {
    title: "DeltaXY | AI Agents for Document Intelligence",
    description: "We build reliable AI agents that extract, learn, and deliver measurable outcomes across aviation, compliance, and legal domains.",
    url: "https://deltaxy.ai",
    siteName: "DeltaXY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeltaXY | AI Agents for Document Intelligence",
    description: "We build reliable AI agents that extract, learn, and deliver measurable outcomes across aviation, compliance, and legal domains.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${figtree.variable} antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
