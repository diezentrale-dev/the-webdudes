/**
 * Logo: Hintergrund transparent, unten nur Schriftzug entfernen, Kreis vollständig.
 * node scripts/process-logo.cjs [quellbild]
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const defaultSrc = path.join(
  process.env.HOME || "",
  ".cursor",
  "projects",
  "Users-fvffh4dvq05g-Documents",
  "assets",
  "image-0fdd348f-a3aa-43a4-acce-5ed7766efcf4.png"
);

const src = path.resolve(process.argv[2] || defaultSrc);
const tmp = path.join(root, "public", "the-webdudes-logo-new.png");
const finalPath = path.join(root, "public", "the-webdudes-logo.png");

/** 1024-Quelle: unterhalb = Lücke + „The WebDudes“ (Kreis endet bei ~Zeile 581). */
const CROP_BOTTOM = 582;

function removeBlackBg(data) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const sum = r + g + b;
    let a = 255;
    if (sum <= 42) a = 0;
    else if (sum < 95) a = Math.round((255 * (sum - 42)) / (95 - 42));
    data[i + 3] = Math.min(255, Math.round((data[i + 3] * a) / 255));
  }
}

(async () => {
  const meta = await sharp(src).metadata();
  const W = meta.width;
  const H = meta.height;
  if (!W || !H) throw new Error("Keine Bildgröße");

  const cropH = Math.min(CROP_BOTTOM, H);

  const { data, info } = await sharp(src)
    .extract({ left: 0, top: 0, width: W, height: cropH })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  removeBlackBg(data);

  const buf = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 12 })
    .png({ compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync(tmp, buf);
  fs.renameSync(tmp, finalPath);

  const m = await sharp(finalPath).metadata();
  console.log("OK", `${m.width}x${m.height}`, finalPath);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
