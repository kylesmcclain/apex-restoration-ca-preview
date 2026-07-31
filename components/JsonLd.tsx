import { CITY, REGION, PHONE_DISPLAY, SITE_URL } from "@/lib/constants";

// Service-area business: no fixed street address is published, so this
// derives a locality/region-only PostalAddress directly from lib/constants.ts
// instead of a full street address.

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Apex Restoration",
  telephone: PHONE_DISPLAY,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressRegion: REGION,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "San Francisco Bay Area",
  },
  openingHours: "Mo-Su 00:00-23:59",
};

/**
 * Renders the site's LocalBusiness structured data as a JSON-LD `<script>`
 * tag. Per Next.js guidance this is a plain (non-`next/script`) tag since
 * JSON-LD is data, not executable code — see
 * https://nextjs.org/docs/app/guides/json-ld
 *
 * Rendered once from the root layout (`app/layout.tsx`) so it appears on
 * every page.
 */
export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}
