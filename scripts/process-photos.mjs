#!/usr/bin/env node
/**
 * Process raw jobsite photos into web-ready assets.
 *
 * Usage: node scripts/process-photos.mjs <sourceDir>
 *
 * For each entry in MANIFEST found in <sourceDir>, emits into public/images/work/:
 *   <name>.jpg        (max 1600px long edge)
 *   <name>-800.jpg    (max 800px long edge)
 * All output is auto-oriented and re-encoded without EXIF/GPS metadata.
 * Photos flagged `lift` get a mild brightness/saturation boost (dark crawlspace shots).
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const MANIFEST = [
  { src: "img_00.jpg", name: "containment-taping", lift: false },
  { src: "img_02.jpg", name: "crawlspace-water-extraction", lift: true },
  { src: "img_04.jpg", name: "flood-cut-drydown", lift: false },
  { src: "img_06.jpg", name: "damaged-beam-removal", lift: false },
  { src: "img_08.jpg", name: "crawlspace-inspection", lift: true },
  { src: "img_10.jpg", name: "antimicrobial-treatment", lift: true },
  { src: "img_12.jpg", name: "thermal-imaging-inspection", lift: false },
  { src: "img_14.jpg", name: "attic-containment", lift: false },
  { src: "img_16.jpg", name: "hepa-vacuum-containment", lift: false },
];

const srcDir = process.argv[2];
if (!srcDir) {
  console.error("Usage: node scripts/process-photos.mjs <sourceDir>");
  process.exit(1);
}

const outDir = path.join(import.meta.dirname, "..", "public", "images", "work");
await mkdir(outDir, { recursive: true });

for (const { src, name, lift } of MANIFEST) {
  const input = path.join(srcDir, src);
  for (const [suffix, edge, quality] of [
    ["", 1600, 72],
    ["-800", 800, 70],
  ]) {
    let img = sharp(input).rotate(); // bake EXIF orientation into pixels
    if (lift) img = img.modulate({ brightness: 1.18, saturation: 1.06 });
    const out = path.join(outDir, `${name}${suffix}.jpg`);
    const info = await img
      .resize(edge, edge, { fit: "inside", withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toFile(out); // sharp strips metadata (EXIF/GPS) unless asked to keep it
    console.log(`${name}${suffix}.jpg  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
  }
}
