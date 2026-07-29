# Apex Restoration — apexrestorationca.com

Production website for Apex Restoration, a 24/7 water, fire, flood, and mold
damage restoration company serving the San Francisco Bay Area.

Full-stack **Next.js (App Router, TypeScript)** application deployed to
**Cloudflare Workers** at the edge via the OpenNext Cloudflare adapter.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, React Server Components |
| Language | TypeScript |
| Styling | Hand-rolled global CSS design system (`app/globals.css`), design tokens as CSS custom properties |
| Fonts | Montserrat + Source Sans 3, self-hosted via `next/font` (latin subset) |
| Runtime | Cloudflare Workers (`@opennextjs/cloudflare`), static assets on the edge |
| Forms | First-party `POST /api/contact` — validation, honeypot spam trap, server-side lead relay |
| SEO | `sitemap.xml`, `robots.txt`, canonical metadata, OpenGraph, LocalBusiness JSON-LD |
| Security | HSTS, CSP, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy |

## Development

```bash
npm install
npm run dev        # local dev server on :3000
npm run build      # production build
npm run preview    # build + run on the Workers runtime locally
npm run deploy     # build + deploy to Cloudflare Workers
```

Deploys require `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the
environment. CI deploys automatically on pushes to `main` once those two
values are added as GitHub Actions repository secrets
(**Settings → Secrets and variables → Actions**).

## Structure

```
app/                # routes (7 pages, branded 404, /api/contact, sitemap, robots)
components/         # Header, Footer, QuoteForm, FaqAccordion, JsonLd
lib/constants.ts    # single source of truth: phone, email, address, nav, services, FAQs
types/contact.ts    # contact form payload contract
middleware.ts       # canonical-host 301 (www → apex)
wrangler.jsonc      # Cloudflare Workers configuration
open-next.config.ts # OpenNext adapter configuration
```

To change the phone number, email, address, or license number, edit
`lib/constants.ts` — every page reads from it.

## Domains

- Production: https://apexrestorationca.com (+ `www` 301 → apex)
- Workers URL: https://apexrestorationca.apexrestoration.workers.dev

`CNAME` and `.nojekyll` at the repo root keep the legacy
`kylesmcclain.github.io/apex-restoration-ca-preview` URL redirecting to the
production domain; they are not part of the application.

## Pending business items

- Replace the placeholder CSLB license number in `lib/constants.ts` (`LICENSE_LINE`) and `app/about/page.tsx`.
- Replace the placeholder street address (`1200 Placeholder Way`).
- Have an attorney review the privacy policy and terms of service copy.
