import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Restoration Services | Apex Restoration Bay Area",
  description:
    "Water damage restoration, mold remediation, flood cleanup, sewage cleanup, and storm damage restoration for the San Francisco Bay Area. Free inspections, 24/7.",
};

type ServiceCta =
  | { kind: "phone" }
  | { kind: "link"; href: string; label: string };

interface ServiceDetailData {
  id: string;
  pillLabel: string;
  icon: string;
  title: string;
  intro: string;
  bullets: string[];
  imageFirst: boolean;
  image: { src: string; alt: string };
  cta: ServiceCta;
}

const SERVICE_DETAILS: ServiceDetailData[] = [
  {
    id: "water-damage",
    pillLabel: "Water Damage",
    icon: "💧",
    title: "Water Damage Restoration",
    intro:
      "Burst supply lines, slab leaks, water-heater failures, appliance overflows — water spreads fast and does more damage by the minute. We extract standing water, set commercial dehumidifiers and air movers on the first visit, monitor moisture daily until your home is verifiably dry, then repair and rebuild what was lost.",
    bullets: [
      "Emergency extraction & structural drying",
      "Daily moisture & psychrometric monitoring",
      "Full repair and reconstruction",
      "Direct insurance billing",
    ],
    imageFirst: false,
    image: {
      src: "/images/water-damage.jpg",
      alt: "Kitchen water damage mitigation equipment and containment",
    },
    cta: { kind: "phone" },
  },
  {
    id: "mold",
    pillLabel: "Mold",
    icon: "🧫",
    title: "Mold Remediation",
    intro:
      "Bay Area fog, coastal humidity, and older housing stock make mold a year-round problem — especially in crawl spaces, attics, and behind walls after a slow leak. Our certified crews build negative-pressure containment, remove affected materials safely, treat the area, and verify with clearance testing.",
    bullets: [
      "Inspection & moisture-source diagnosis",
      "Sealed containment & HEPA air scrubbing",
      "Safe removal and antimicrobial treatment",
      "Lifetime warranty on treated areas",
    ],
    imageFirst: true,
    image: {
      src: "/images/mold.jpg",
      alt: "Technician removing mold-contaminated material under containment",
    },
    cta: {
      kind: "link",
      href: "/contact",
      label: "Get a free mold inspection",
    },
  },
  {
    id: "flood",
    pillLabel: "Flood",
    icon: "🌊",
    title: "Flood Cleanup",
    intro:
      "When atmospheric rivers stall over the Bay, storm drains back up and low-lying homes flood in hours. We pump out standing water, remove contaminated materials, disinfect, and dry the structure completely — then document everything for your flood or homeowners claim.",
    bullets: [
      "High-volume water pump-out",
      "Contaminated material removal & disinfection",
      "Structural drying & odor control",
      "Full claim documentation",
    ],
    imageFirst: false,
    image: {
      src: "/images/flood.jpg",
      alt: "Technician working in a flooded crawl space",
    },
    cta: { kind: "phone" },
  },
  {
    id: "sewage",
    pillLabel: "Sewage",
    icon: "🚱",
    title: "Sewage Cleanup",
    intro:
      "Sewage backups are a health hazard, not a mop-up job. Aging sewer laterals in older Bay Area neighborhoods fail without warning. Our crews remove contaminated water and materials under full PPE, disinfect to IICRC S500 standards, and deodorize so your home is genuinely safe again.",
    bullets: [
      "Category-3 water removal under full PPE",
      "Hospital-grade disinfection",
      "Odor elimination & air scrubbing",
      "Safe disposal of contaminated materials",
    ],
    imageFirst: true,
    image: {
      src: "/images/sewage.jpg",
      alt: "Sewage cleanup in progress",
    },
    cta: { kind: "phone" },
  },
  {
    id: "storm",
    pillLabel: "Storm",
    icon: "⛈️",
    title: "Storm Damage Restoration",
    intro:
      "Winter Pacific storms bring wind-driven rain, downed trees, and roof damage across the Bay. We tarp and board up immediately to stop intrusion, extract and dry what got wet, and manage repairs through to a finished home — with your insurer billed directly.",
    bullets: [
      "Emergency tarping & board-up",
      "Water intrusion extraction & drying",
      "Tree & debris damage coordination",
      "Repairs through final walkthrough",
    ],
    imageFirst: false,
    image: {
      src: "/images/storm.jpg",
      alt: "Technician repairing ceiling storm damage from a lift",
    },
    cta: { kind: "phone" },
  },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">Our Services</span>
          <h1>Restoration services for the Bay Area</h1>
          <p>
            Five specialties, one crew, one project manager. Every job starts
            with a free inspection — and drying equipment placed on the very
            first visit.
          </p>
          <div className="pill-row">
            {SERVICE_DETAILS.map((service) => (
              <a key={service.id} href={`#${service.id}`} className="pill">
                {service.pillLabel}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container services-detail">
        {SERVICE_DETAILS.map((service) => (
          <div key={service.id} id={service.id} className="service-detail">
            {service.imageFirst && (
              <img
                src={service.image.src}
                alt={service.image.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
              />
            )}
            <div className="service-detail-copy">
              <span className="service-detail-icon">{service.icon}</span>
              <h2>{service.title}</h2>
              <p>{service.intro}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {service.cta.kind === "phone" ? (
                <a href={PHONE_HREF} className="btn btn-primary">
                  Call now — {PHONE_DISPLAY}
                </a>
              ) : (
                <Link
                  href={service.cta.href}
                  className="btn btn-outline"
                  prefetch={false}
                >
                  {service.cta.label}
                </Link>
              )}
            </div>
            {!service.imageFirst && (
              <img
                src={service.image.src}
                alt={service.image.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
