import type { Metadata } from "next";
import {
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Apex Restoration Bay Area",
  description: "Apex Restoration Bay Area terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="legal">
      <h1>Terms of Service</h1>
      <p className="updated">
        Last updated: July 2026 — placeholder copy; have your attorney review
        before publishing.
      </p>

      <h2>Use of this website</h2>
      <p>
        This website provides information about Apex Restoration&apos;s
        services in the San Francisco Bay Area. Content is provided for
        general information and does not constitute a binding estimate; all
        work is performed under a written scope and service agreement.
      </p>

      <h2>Estimates and services</h2>
      <p>
        Free inspections and quotes are provided without obligation. Final
        pricing depends on the written scope agreed before work begins.
        Emergency stabilization performed at your request may be billed to
        your insurance carrier where coverage applies.
      </p>

      <h2>Warranty</h2>
      <p>
        Apex Restoration backs treated areas with a lifetime workmanship
        warranty as described in your service agreement. This warranty does
        not cover new or unrelated damage, pre-existing conditions, or damage
        caused by third parties.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>{" "}
        · {PHONE_DISPLAY} · {ADDRESS_LINE1}, {ADDRESS_LINE2}
      </p>
    </main>
  );
}
