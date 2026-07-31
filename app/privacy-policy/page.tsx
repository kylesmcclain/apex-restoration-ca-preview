import type { Metadata } from "next";
import { PHONE_DISPLAY, EMAIL, LOCATION_LINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Restoration Bay Area",
  description: "Apex Restoration Bay Area privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: July 2026</p>

      <h2>Information we collect</h2>
      <p>
        When you request a quote or contact us, we collect the information
        you provide: name, phone number, email address, service address, and
        a description of your loss. We may also collect standard website
        analytics data.
      </p>

      <h2>How we use it</h2>
      <p>
        We use your information to respond to your request, dispatch crews,
        prepare estimates, communicate about your project, and — with your
        authorization — coordinate with your insurance carrier. We do not
        sell your personal information.
      </p>

      <h2>Your California privacy rights</h2>
      <p>
        Under the California Consumer Privacy Act (CCPA/CPRA), California
        residents may request access to, deletion of, or correction of their
        personal information, and may opt out of any sale or sharing of
        personal information. To exercise these rights, contact us at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or {PHONE_DISPLAY}.
      </p>

      <h2>Contact</h2>
      <p>
        Apex Restoration · {LOCATION_LINE} · {PHONE_DISPLAY}
      </p>
    </main>
  );
}
