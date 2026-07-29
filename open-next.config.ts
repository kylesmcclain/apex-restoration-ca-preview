import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site is entirely static server components plus one Node.js API route
// (app/api/contact) — nothing uses ISR/`revalidate`, so the default "dummy"
// incremental cache (no-op) is sufficient and no R2 bucket needs to be
// provisioned before the first deploy. If a future route adds
// revalidation, swap in an R2- or KV-backed incremental cache override
// here — see https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig();
