import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { PHONE_DISPLAY, PHONE_HREF, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Apex Restoration | 24/7 Water Damage Restoration — San Francisco Bay Area",
  description:
    "24/7 water damage restoration, flood cleanup, and mold remediation across the San Francisco Bay Area. At your door within 1 hour. We handle your insurance claim. Call (510) 925-7538.",
};

const AREA_CHIPS = [
  "San Francisco",
  "Oakland",
  "San Jose",
  "Fremont",
  "Hayward",
  "Berkeley",
  "San Mateo",
  "Palo Alto",
  "Walnut Creek",
  "Santa Rosa",
  "+ 20 more",
];

export default function Home() {
  return (
    <main>
      <div className="hero">
        <img
          src="/images/hero.jpg"
          alt="Apex Restoration technician working inside containment"
          className="hero-bg"
        />
        <div className="hero-inner">
          <span className="eyebrow eyebrow-light">
            Now serving the San Francisco Bay Area
          </span>
          <h1>24/7 Water Damage Restoration & Cleanup Experts</h1>
          <p className="hero-sub">
            Serving San Francisco, Oakland, San Jose & the greater Bay Area
          </p>
          <div className="hero-checks">
            <span className="hero-check">
              <span className="check-badge">✓</span>
              24/7 availability, 365 days a year
            </span>
            <span className="hero-check">
              <span className="check-badge">✓</span>
              At your door within 1 hour
            </span>
            <span className="hero-check">
              <span className="check-badge">✓</span>
              We handle your insurance claim
            </span>
          </div>
          <div className="hero-ctas">
            <a href={PHONE_HREF} className="btn btn-primary btn-primary-lg">
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="btn btn-ghost-light"
              prefetch={false}
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="section-head">
          <span className="eyebrow">Our Services</span>
          <h2>Which service do you need?</h2>
          <p>Get a licensed professional to come out today.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="service-card"
              prefetch={false}
            >
              <span className="service-card-icon">{service.icon}</span>
              <span className="service-card-title">{service.title}</span>
              <span className="service-card-desc">{service.desc}</span>
              <span className="service-card-link">Learn more →</span>
            </Link>
          ))}
          <Link href="/contact" className="service-card-cta" prefetch={false}>
            <span className="service-card-title">Not sure what you need?</span>
            <span className="service-card-desc">
              Get a free inspection — we&apos;ll assess it on site.
            </span>
            <span className="mini-btn">Get a free quote</span>
          </Link>
        </div>
      </div>

      <div className="why-us">
        <div className="container section why-us-grid">
          <div className="why-us-copy">
            <span className="eyebrow">Why Us</span>
            <h2>
              Why Bay Area homeowners trust Apex for water damage restoration
            </h2>
            <p>
              As a family-owned company, Apex Restoration works for you, not
              your insurance carrier. Our specialists make the first claim
              call alongside you, handle the moisture and psychrometric
              readings, and direct-bill the carrier so you never risk saying
              something that jeopardizes your coverage.
            </p>
            <p>
              When an atmospheric river sends water into your Oakland crawl
              space or a slab leak surfaces in your San Jose kitchen, we
              answer 24/7/365 and arrive within one hour for a free
              inspection — then place drying equipment on that first visit to
              stop further damage cold.
            </p>
            <p>
              Our IICRC-certified, background-checked, uniformed technicians
              give you a single project manager from first call to final
              walkthrough, and back every treated area with a lifetime
              warranty.
            </p>
            <div className="cta-row">
              <a href={PHONE_HREF} className="btn btn-primary">
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="btn btn-outline"
                prefetch={false}
              >
                Get my free quote
              </Link>
            </div>
          </div>
          <div className="why-us-media">
            <img
              src="/images/why-us.jpg"
              alt="Apex technician scanning for hidden moisture with a thermal camera"
            />
            <div className="stats-row">
              <div className="stat-card">
                <span className="stat-value">
                  60<span className="stat-unit">min</span>
                </span>
                <span className="stat-label">Response time</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Always answered</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">$0</span>
                <span className="stat-label">Inspection fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container section areas-grid">
        <div className="areas-copy">
          <span className="eyebrow">Service Areas</span>
          <h2>Communities we serve across the Bay Area</h2>
          <p>
            From San Francisco and the Peninsula to the East Bay, South Bay,
            and North Bay — our crews are staged around the region so we can
            reach you within the hour, day or night.
          </p>
          <div className="chips">
            {AREA_CHIPS.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <Link href="/service-areas" className="areas-link" prefetch={false}>
            See all service areas →
          </Link>
        </div>
        <div className="map-frame">
          <iframe
            src="https://www.google.com/maps?q=Oakland,+CA&output=embed&z=9"
            title="Bay Area service map"
            loading="lazy"
          />
        </div>
      </div>

      <div className="faq-section">
        <div className="container section faq-grid">
          <div className="faq-intro">
            <span className="eyebrow eyebrow-light">FAQs</span>
            <h2>Water damage restoration FAQs</h2>
            <p>
              Questions Bay Area homeowners ask us — and our answers. Have
              another? Call us any time, we always pick up.
            </p>
            <a href={PHONE_HREF} className="btn btn-primary">
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <FaqAccordion />
        </div>
      </div>
    </main>
  );
}
