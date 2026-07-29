import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Apex Restoration Bay Area",
  description:
    "The page you're looking for doesn't exist or may have moved.",
  robots: {
    index: false,
  },
};

export default function NotFound() {
  return (
    <main>
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="eyebrow eyebrow-light">404</span>
          <h1>Page not found</h1>
          <p>
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>
          <div className="cta-row">
            <Link href="/" className="btn btn-primary" prefetch={false}>
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
