export const PHONE_DISPLAY = "(510) 925-7538";
export const PHONE_HREF = "tel:5109257538";
export const EMAIL = "ApexrestorationCA@yahoo.com";
export const ADDRESS_LINE1 = "1200 Placeholder Way";
export const ADDRESS_LINE2 = "Oakland, CA 94601";
export const LICENSE_LINE =
  "CSLB License #0000000 (placeholder) · IICRC Certified";
export const SITE_URL = "https://apexrestorationca.com";

export interface NavItem {
  href: string;
  label: string;
}

export const NAV: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export interface Service {
  slug: string;
  icon: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    slug: "water-damage",
    icon: "💧",
    title: "Water Damage Restoration",
    desc: "Burst pipes, slab leaks, appliance failures — extracted, dried, and rebuilt.",
  },
  {
    slug: "mold",
    icon: "🧫",
    title: "Mold Remediation",
    desc: "Certified containment, removal, and clearance testing for coastal-climate mold.",
  },
  {
    slug: "flood",
    icon: "🌊",
    title: "Flood Cleanup",
    desc: "Atmospheric-river and storm-surge flooding pumped out and fully dried.",
  },
  {
    slug: "sewage",
    icon: "🚱",
    title: "Sewage Cleanup",
    desc: "Safe biohazard removal, disinfection, and odor control — done right.",
  },
  {
    slug: "storm",
    icon: "⛈️",
    title: "Storm Damage Restoration",
    desc: "Wind, rain, and tree damage tarped, boarded, and restored fast.",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "How much does water damage restoration cost?",
    a: "It depends on the size and severity of the loss, the water source, and how much drying, demolition, and reconstruction your home needs. We start with a free inspection and a clear written scope before any work begins — no service charge. Most projects run through homeowners insurance, and we handle the entire claim for you, so in most cases your out-of-pocket is just your deductible.",
  },
  {
    q: "How fast can you get to me in the Bay Area?",
    a: "We answer 24/7/365 and aim to be at your door within one hour, anywhere from San Francisco to San Jose to Walnut Creek. We don't just look and leave — we stabilize the situation and place drying equipment on that very first visit.",
  },
  {
    q: "Do you handle the insurance claim?",
    a: "Yes. We make the first claim call alongside you, document everything with moisture and psychrometric readings, and direct-bill your carrier — so you never risk saying something that jeopardizes your coverage.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes. Every job starts with a free inspection and a written scope, with absolutely no service charge and no obligation — day or night.",
  },
  {
    q: "How do you protect my home during cleanup?",
    a: "Our technicians are IICRC-certified, background-checked, and uniformed. Floor protection, shoe covers, sealed containment where needed, and daily moisture monitoring until your home is fully dry. One project manager is your single point of contact from first call to final walkthrough.",
  },
];
