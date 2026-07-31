#!/usr/bin/env node
/**
 * Generates AVIF + WebP siblings for every JPEG in public/images/, at the
 * same pixel dimensions as the source, plus a 960px-wide variant of
 * hero.jpg (in all three formats) for phone viewports.
 *
 * Idempotent: safe to re-run any time the source JPEGs change — it always
 * regenerates outputs from the current source files.
 *
 * Usage: node scripts/optimize-images.mjs
 * (also wired up as `npm run optimize:images`)
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

const AVIF_QUALITY = 50;
const WEBP_QUALITY = 78;

// Half-width variant, hero only, for phone viewports.
const HERO_SOURCE = "hero.jpg";
const HERO_HALF_WIDTH = 960;
const HERO_HALF_HEIGHT = 540;
const HERO_HALF_BASENAME = "hero-960";

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function fileSize(filePath) {
  try {
    const s = await stat(filePath);
    return s.size;
  } catch {
    return null;
  }
}

async function generateVariant({ srcPath, destPath, resizeTo, format }) {
  let pipeline = sharp(srcPath);
  if (resizeTo) {
    pipeline = pipeline.resize(resizeTo.width, resizeTo.height);
  }
  if (format === "avif") {
    pipeline = pipeline.avif({ quality: AVIF_QUALITY });
  } else if (format === "webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else if (format === "jpeg") {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  }
  await pipeline.toFile(destPath);
  return fileSize(destPath);
}

async function main() {
  const entries = await readdir(IMAGES_DIR);
  const jpegs = entries.filter((f) => /\.jpe?g$/i.test(f)).sort();

  const rows = [];

  for (const file of jpegs) {
    const srcPath = path.join(IMAGES_DIR, file);
    const baseName = file.replace(/\.jpe?g$/i, "");
    const originalSize = await fileSize(srcPath);

    const avifPath = path.join(IMAGES_DIR, `${baseName}.avif`);
    const webpPath = path.join(IMAGES_DIR, `${baseName}.webp`);

    const avifSize = await generateVariant({
      srcPath,
      destPath: avifPath,
      format: "avif",
    });
    const webpSize = await generateVariant({
      srcPath,
      destPath: webpPath,
      format: "webp",
    });

    rows.push({
      name: file,
      original: originalSize,
      avif: avifSize,
      webp: webpSize,
    });

    // Half-width phone variant, hero only.
    if (file === HERO_SOURCE) {
      const halfJpegPath = path.join(IMAGES_DIR, `${HERO_HALF_BASENAME}.jpg`);
      const halfAvifPath = path.join(IMAGES_DIR, `${HERO_HALF_BASENAME}.avif`);
      const halfWebpPath = path.join(IMAGES_DIR, `${HERO_HALF_BASENAME}.webp`);

      const resizeTo = { width: HERO_HALF_WIDTH, height: HERO_HALF_HEIGHT };

      const halfJpegSize = await generateVariant({
        srcPath,
        destPath: halfJpegPath,
        resizeTo,
        format: "jpeg",
      });
      const halfAvifSize = await generateVariant({
        srcPath,
        destPath: halfAvifPath,
        resizeTo,
        format: "avif",
      });
      const halfWebpSize = await generateVariant({
        srcPath,
        destPath: halfWebpPath,
        resizeTo,
        format: "webp",
      });

      rows.push({
        name: `${HERO_HALF_BASENAME}.jpg (960x540, new)`,
        original: halfJpegSize,
        avif: halfAvifSize,
        webp: halfWebpSize,
      });
    }
  }

  // Print before/after size table.
  const col = (s, w) => String(s).padEnd(w);
  const header = `${col("file", 34)}${col("original", 12)}${col(
    "avif",
    12,
  )}${col("webp", 12)}${col("avif saved", 12)}${col("webp saved", 12)}`;
  console.log(header);
  console.log("-".repeat(header.length));

  for (const row of rows) {
    const avifSaved =
      row.original && row.avif
        ? `${(100 - (row.avif / row.original) * 100).toFixed(0)}%`
        : "-";
    const webpSaved =
      row.original && row.webp
        ? `${(100 - (row.webp / row.original) * 100).toFixed(0)}%`
        : "-";
    console.log(
      `${col(row.name, 34)}${col(formatBytes(row.original), 12)}${col(
        formatBytes(row.avif),
        12,
      )}${col(formatBytes(row.webp), 12)}${col(avifSaved, 12)}${col(
        webpSaved,
        12,
      )}`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
