#!/usr/bin/env node
/**
 * Capture full-page screenshots of every route at desktop/tablet/mobile widths.
 *
 * Usage: node scripts/screenshot.mjs <baseUrl> <outDir>
 */
import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const [baseUrl = "http://localhost:3000", outDir = "shots"] =
  process.argv.slice(2);

const ROUTES = [
  ["home", "/"],
  ["services", "/services"],
  ["about", "/about"],
  ["service-areas", "/service-areas"],
  ["contact", "/contact"],
  ["privacy", "/privacy-policy"],
  ["terms", "/terms-of-service"],
];

const WIDTHS = [
  ["desktop", 1440, 900],
  ["tablet", 768, 1024],
  ["mobile", 390, 844],
];

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium",
});

for (const [wName, width, height] of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height } });
  const page = await ctx.newPage();
  for (const [rName, route] of ROUTES) {
    await page.goto(baseUrl + route, { waitUntil: "networkidle" });
    // Force lazy images eager and wait for every image to load + decode so
    // full-page capture doesn't stitch blank placeholders.
    await page.evaluate(async () => {
      document
        .querySelectorAll('img[loading="lazy"]')
        .forEach((img) => (img.loading = "eager"));
      await Promise.all(
        [...document.images].map((img) =>
          img.complete
            ? img.decode().catch(() => {})
            : new Promise((resolve) => {
                img.onload = () => img.decode().catch(() => {}).then(resolve);
                img.onerror = resolve;
              }),
        ),
      );
    });
    await page.waitForTimeout(400);
    const file = path.join(outDir, `${rName}-${wName}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
  }
  await ctx.close();
}
await browser.close();
