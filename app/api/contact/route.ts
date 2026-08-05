import { NextResponse } from "next/server";
import type { ContactPayload } from "@/types/contact";

// Runs as a Node.js function (OpenNext maps this to a Cloudflare Worker at
// deploy time) so the relay fetch below happens server-side only — the
// formsubmit.co endpoint is never reachable from client-shipped code.
export const runtime = "nodejs";

const RELAY_ENDPOINT =
  "https://formsubmit.co/ajax/william@apexrestorationca.com";
const RELAY_SUBJECT = "New quote request from apexrestorationca.com";
const SITE_ORIGIN = "https://apexrestorationca.com";

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MAX_MESSAGE_LENGTH = 5000;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message, company } = body ?? {};

  // Honeypot: the quote form renders `company` visually hidden. A human
  // never fills it in, so any non-empty value is bot traffic — report
  // success so the bot doesn't retry, but drop it without relaying.
  if (typeof company === "string" && company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    !isNonEmptyString(firstName) ||
    !isNonEmptyString(lastName) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    const relayResponse = await fetch(RELAY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: SITE_ORIGIN,
        Referer: `${SITE_ORIGIN}/contact`,
      },
      body: JSON.stringify({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
        _subject: RELAY_SUBJECT,
      }),
    });

    if (!relayResponse.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    // FormSubmit reports some failures (e.g. an endpoint email that hasn't
    // completed its one-time activation) as HTTP 200 with success:"false".
    // Propagate those as failures so the visitor sees the call-us fallback
    // instead of a false confirmation while the lead silently vanishes.
    const relayResult = (await relayResponse.json().catch(() => null)) as {
      success?: string | boolean;
    } | null;
    if (relayResult?.success !== "true" && relayResult?.success !== true) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}

// Every other HTTP method on this route is left unimplemented: Next.js's
// App Router automatically responds 405 for methods a route.ts doesn't
// export, so GET/PUT/PATCH/DELETE/etc. all correctly fail closed.
