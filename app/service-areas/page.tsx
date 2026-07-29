import type { Metadata } from "next";
import Link from "next/link";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Apex Restoration Bay Area",
  description:
    "Apex Restoration serves the entire San Francisco Bay Area — San Francisco, the Peninsula, East Bay, South Bay, Tri-Valley, and North Bay — 24/7 with 60-minute response.",
};

interface SaRegion {
  name: string;
  cities: string[];
}

const SA_REGIONS: SaRegion[] = [
  {
    name: "San Francisco & Peninsula",
    cities: [
      "San Francisco",
      "Daly City",
      "South San Francisco",
      "San Bruno",
      "Millbrae",
      "Burlingame",
      "San Mateo",
      "Foster City",
      "Redwood City",
      "Menlo Park",
      "Palo Alto",
    ],
  },
  {
    name: "East Bay",
    cities: [
      "Oakland",
      "Berkeley",
      "Alameda",
      "San Leandro",
      "Hayward",
      "Castro Valley",
      "Fremont",
      "Union City",
      "Newark",
      "Richmond",
      "El Cerrito",
    ],
  },
  {
    name: "South Bay",
    cities: [
      "San Jose",
      "Santa Clara",
      "Sunnyvale",
      "Mountain View",
      "Cupertino",
      "Campbell",
      "Milpitas",
      "Los Gatos",
      "Saratoga",
    ],
  },
  {
    name: "Tri-Valley & Contra Costa",
    cities: [
      "Walnut Creek",
      "Concord",
      "Pleasant Hill",
      "Danville",
      "San Ramon",
      "Dublin",
      "Pleasanton",
      "Livermore",
      "Antioch",
      "Brentwood",
    ],
  },
  {
    name: "North Bay",
    cities: [
      "San Rafael",
      "Novato",
      "Mill Valley",
      "Vallejo",
      "Napa",
      "Petaluma",
      "Santa Rosa",
    ],
  },
];

export default function ServiceAreasPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">Service Areas</span>
          <h1>Communities we serve across the Bay Area</h1>
          <p>
            Crews staged around the region — San Francisco, East Bay, South
            Bay, Peninsula, and North Bay — so we reach your door within the
            hour, 24/7.
          </p>
        </div>
      </div>

      <div className="container sa-grid">
        <div className="sa-regions">
          {SA_REGIONS.map((region) => (
            <div className="sa-region" key={region.name}>
              <h2>
                <span className="dot" />
                {region.name}
              </h2>
              <div className="chips">
                {region.cities.map((city) => (
                  <span className="chip" key={city}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <p className="sa-note">
            Don&apos;t see your city? We take jobs throughout the nine-county
            Bay Area — <a href={PHONE_HREF}>call {PHONE_DISPLAY}</a>
            and we&apos;ll confirm coverage on the spot.
          </p>
        </div>

        <div className="sa-aside">
          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps?q=San+Francisco+Bay+Area&output=embed&z=9"
              title="Bay Area service map"
              loading="lazy"
            />
          </div>
          <div className="info-card">
            <span className="info-card-title">
              Apex Restoration — Bay Area
            </span>
            <span className="addr">
              {ADDRESS_LINE1}, {ADDRESS_LINE2}
            </span>
            <a href={PHONE_HREF} className="phone">
              {PHONE_DISPLAY}
            </a>
            <span className="hours">
              Open 24 hours — every day of the year
            </span>
            <Link href="/contact" className="btn btn-primary" prefetch={false}>
              Get my free quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
