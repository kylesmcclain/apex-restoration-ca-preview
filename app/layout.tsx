import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import StickyCallBar from "@/components/StickyCallBar";
import { PHONE_DISPLAY, SITE_URL } from "@/lib/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const SITE_TITLE =
  "Apex Restoration | 24/7 Water Damage Restoration — San Francisco Bay Area";
const SITE_DESCRIPTION = `24/7 water damage restoration, flood cleanup, and mold remediation across the San Francisco Bay Area. At your door within 1 hour. We handle your insurance claim. Call ${PHONE_DISPLAY}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Apex Restoration",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/work/crawlspace-water-extraction.jpg",
        width: 1600,
        height: 1200,
        alt: "Apex Restoration crew extracting flood water from a crawl space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <StickyCallBar />
        <JsonLd />
      </body>
    </html>
  );
}
