import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Apex Restoration Bay Area",
  description:
    "Apex Restoration is a family-owned water, flood, and mold restoration company now serving the San Francisco Bay Area. IICRC-certified, licensed, and available 24/7.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Apex Restoration Bay Area",
    description: "Apex Restoration is a family-owned water, flood, and mold restoration company now serving the San Francisco Bay Area. IICRC-certified, licensed, and available 24/7.",
    url: "/about",
  },
};

interface ExpectItem {
  num: string;
  title: string;
  desc: string;
}

const EXPECT_ITEMS: ExpectItem[] = [
  {
    num: "01",
    title: "You call, we answer",
    desc: "A person — not a machine — 24/7/365. We dispatch a crew immediately.",
  },
  {
    num: "02",
    title: "At your door in 60 minutes",
    desc: "Free inspection, written scope, and drying equipment placed on the first visit.",
  },
  {
    num: "03",
    title: "We handle the claim",
    desc: "First claim call together, full documentation, direct billing to your carrier.",
  },
  {
    num: "04",
    title: "Restored — and warranted",
    desc: "One project manager through the final walkthrough. Lifetime warranty on treated areas.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">About Us</span>
          <h1>Family-owned. Now serving the Bay Area.</h1>
          <p>
            Apex Restoration was built on a simple promise: answer the phone,
            show up within the hour, and treat every home like our own. That
            promise now extends to California.
          </p>
        </div>
      </div>

      <div className="container about-grid">
        <div className="about-copy">
          <h2>We work for you — not your insurance carrier</h2>
          <p>
            Since 2020, Apex Restoration has grown from a family operation in
            Boise into a trusted name across Idaho and Eastern Washington. Our
            Bay Area location brings the same playbook to California:
            IICRC-certified technicians, a single project manager from first
            call to final walkthrough, and a lifetime warranty on every
            treated area.
          </p>
          <p>
            Unlike insurance-program vendors, we&apos;re not paid to minimize
            your claim. We make the first claim call alongside you, document
            the loss with moisture and psychrometric readings, and
            direct-bill your carrier — so the scope reflects what your home
            actually needs.
          </p>
          <p>
            Every technician is background-checked and uniformed, arrives in
            a marked Apex vehicle, and follows the Apex way on every visit:
            floor protection, shoe covers, and a clean, organized job site.
          </p>
        </div>
        <img
          src="/images/about-team.jpg"
          alt="Apex Restoration technicians geared up on site"
          width={1000}
          height={1250}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="expect">
        <div className="container expect-inner">
          <h2>What you can expect on every job</h2>
          <div className="expect-grid">
            {EXPECT_ITEMS.map((item) => (
              <div className="expect-card" key={item.num}>
                <span className="expect-num">{item.num}</span>
                <span className="expect-title">{item.title}</span>
                <span className="expect-desc">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container about-grid about-grid-rev">
        <img
          src="/images/work/containment-taping.jpg"
          srcSet="/images/work/containment-taping-800.jpg 600w, /images/work/containment-taping.jpg 1200w"
          sizes="(max-width: 1000px) 100vw, 45vw"
          alt="Apex technician in protective gear sealing ceiling containment on a Bay Area job"
          width={1200}
          height={1600}
          loading="lazy"
          decoding="async"
        />
        <div className="about-copy">
          <h2>Built for California conditions</h2>
          <p>
            The Bay Area has its own failure modes: atmospheric-river
            flooding, fog-belt humidity feeding mold in older housing stock,
            aging sewer laterals, and winter Pacific storms. Our crews are
            trained and equipped for all of it.
          </p>
          <div className="check-list">
            <span className="row">
              <span className="tick">✓</span>
              IICRC-certified in water, mold, and sewage restoration
            </span>
            <span className="row">
              <span className="tick">✓</span>
              Licensed &amp; insured in California
            </span>
            <span className="row">
              <span className="tick">✓</span>
              Background-checked, uniformed technicians
            </span>
            <span className="row">
              <span className="tick">✓</span>
              Lifetime warranty on every treated area
            </span>
          </div>
          <div className="cta-row">
            <a href={PHONE_HREF} className="btn btn-primary">
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="btn btn-outline"
              prefetch={false}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
