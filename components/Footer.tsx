import Link from "next/link";
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  EMAIL,
  LICENSE_LINE,
  NAV,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICES,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      <div className="footer-cta">
        <span className="footer-cta-title">
          Ready to get started? Call us or request a free quote.
        </span>
        <Link href="/contact" className="footer-cta-btn" prefetch={false}>
          Get a Free Quote
        </Link>
        <a href={PHONE_HREF} className="footer-cta-phone">
          {PHONE_DISPLAY}
        </a>
      </div>
      <div className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-plate">
              <img
                src="/images/apex-logo-320.png"
                alt="Apex Restoration"
                width={320}
                height={114}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p>
              Apex Restoration is a family-owned water, flood, and mold
              restoration company serving the San Francisco Bay Area. Licensed
              and insured, available 24/7, and at your door within the hour to
              handle your emergency and your insurance claim from start to
              finish.
            </p>
            <p className="license">{LICENSE_LINE}</p>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Navigate</span>
            <Link href="/" prefetch={false}>
              Home
            </Link>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} prefetch={false}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Services</span>
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                prefetch={false}
              >
                {service.title}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Contact Us</span>
            <span>
              {ADDRESS_LINE1}
              <br />
              {ADDRESS_LINE2}
            </span>
            <a href={PHONE_HREF} className="phone">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span className="hours">Open 24 hours, 7 days a week</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Apex Restoration. All rights reserved.</span>
          <span className="footer-legal-links">
            <Link href="/privacy-policy" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" prefetch={false}>
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
