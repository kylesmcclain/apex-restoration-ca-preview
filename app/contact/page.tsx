import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Free Quote | Apex Restoration Bay Area",
  description:
    "Get a free water damage restoration quote in minutes. Call (510) 925-7538 for immediate 24/7 dispatch anywhere in the San Francisco Bay Area.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">Get Your Quote</span>
          <h1>Get a free quote in minutes</h1>
          <p>
            Submit the form and we&apos;ll be in touch within 5 minutes — or
            call now for immediate dispatch anywhere in the Bay Area.
          </p>
        </div>
      </div>

      <div className="container contact-grid">
        <QuoteForm />
        <div className="contact-aside">
          <div className="contact-call-card">
            <span className="title">Speak with the Apex team now</span>
            <span className="sub">
              Call for immediate assistance and same-hour dispatch.
            </span>
            <a href={PHONE_HREF} className="btn btn-primary">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="contact-info-card">
            <span className="title">Apex Restoration — Bay Area</span>
            <span className="addr">
              {ADDRESS_LINE1}
              <br />
              {ADDRESS_LINE2}
            </span>
            <a href={`mailto:${EMAIL}`} className="email">
              {EMAIL}
            </a>
            <span className="hours">Monday – Sunday: Open 24 hours</span>
          </div>
          <div className="contact-checks">
            <span className="row">
              <span className="tick">✓</span>
              24/7 emergency response
            </span>
            <span className="row">
              <span className="tick">✓</span>
              At your door within 1 hour
            </span>
            <span className="row">
              <span className="tick">✓</span>
              We handle your insurance claim
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
