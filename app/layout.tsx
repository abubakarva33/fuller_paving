import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { siteConfig } from "@/data/site";

import { generateLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain || "https://example.com"),
  icons: {
    icon: '/images/logo.webp',
  },
  title: {
    default: siteConfig.companyName,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: "Professional paving and driveway contractor providing high-quality resurfacing services.",
  keywords: ["paving", "driveways", "tarmac", "resin bound", "block paving", "contractor"],
  openGraph: {
    title: siteConfig.companyName,
    description: "Professional paving and driveway contractor providing high-quality resurfacing services.",
    url: siteConfig.domain,
    siteName: siteConfig.companyName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description: "Professional paving and driveway contractor providing high-quality resurfacing services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
