import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Boldonse, Crimson_Text, Fraunces, Geist, Instrument_Sans, Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const boldonse = Boldonse({
  subsets: ["latin"],
  variable: "--font-boldonse",
  weight: ["400"],
});

const news_reader = Newsreader({
  subsets: ["latin"],
  variable: "--font-news-reader",
  weight: ["400"],
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
    <html lang="en" className={cn("font-sans", geist.variable, instrumentSans.className, fraunces.variable, jetbrainsMono.variable, boldonse.variable, news_reader.variable)}>
      <body className={`${crimsonText.variable} antialiased bg-dxy-paper font-sans`}>
        {/* <Navbar /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
