import { PHONE_E164, SITE_URL } from "@/lib/constants";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: "Apex Restoration",
  telephone: PHONE_E164,
  url: SITE_URL,
  image: `${SITE_URL}/images/work/crawlspace-water-extraction.jpg`,
  // Street address intentionally omitted until the business confirms one —
  // publishing a placeholder address would hurt trust and local SEO.
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oakland",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "San Francisco Bay Area",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
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
