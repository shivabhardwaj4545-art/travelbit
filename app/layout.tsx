import type { Metadata } from "next";
import "./globals.css";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CompareDrawer } from "@/components/packages/CompareDrawer";
import { generateAgencyJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://travelbitholidays.co.in"),
  title: {
    default: "TravelBit Holidays | Uttarakhand & Char Dham Tour Packages Marketplace",
    template: "%s | TravelBit Holidays",
  },
  description:
    "India's dedicated tour packages marketplace for Uttarakhand & Char Dham Yatra. Compare quotes from verified local operators and save up to 30% with money-safe guarantee.",
  keywords: [
    "Char Dham Yatra 2026",
    "Kedarnath Tour Packages",
    "Badrinath Yatra",
    "Jim Corbett Safari",
    "Nainital Tour Packages",
    "Uttarakhand Tour Packages",
    "TravelBit Holidays",
  ],
  authors: [{ name: "TravelBit Holidays Pvt. Ltd." }],
  openGraph: {
    title: "TravelBit Holidays | Compare & Book Tour Packages",
    description:
      "India's dedicated tour packages marketplace for Uttarakhand & Char Dham Yatra. Compare quotes from verified agents.",
    url: "https://travelbitholidays.co.in",
    siteName: "TravelBit Holidays",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TravelBit Holidays - Uttarakhand Pilgrimage & Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelBit Holidays | Uttarakhand & Char Dham Tour Packages",
    description: "Compare quotes from 3 agents and save up to 30% with 100% money safe guarantee.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const agencyJsonLd = generateAgencyJsonLd();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-brand-cream text-brand-dark antialiased">
        <UtilityBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <CompareDrawer />
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
