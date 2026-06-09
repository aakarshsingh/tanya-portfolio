// Preview dropped logos as they will actually render in the wall:
// grayscale + multiply over cream (default), and colour + multiply (hover).
import sharp from "sharp";
import fs from "node:fs";

const dir = "public/logos";
const files = fs.readdirSync(dir).filter((f) => /\.(svg|png)$/i.test(f)).sort();

const TILE_W = 240;
const TILE_H = 96;
const LH = 44;
const CREAM = "#F2EEE3";
const labelW = 200;
const W = labelW + TILE_W * 2 + 20;

async function tile(buf, color) {
  let logo;
  try {
    let p = sharp(buf).resize({ height: LH, fit: "inside" });
    if (!color) p = p.grayscale();
    logo = await p.png().toBuffer();
  } catch {
    return await sharp({ create: { width: TILE_W, height: TILE_H, channels: 4, background: CREAM } }).png().toBuffer();
  }
  return await sharp({ create: { width: TILE_W, height: TILE_H, channels: 4, background: CREAM } })
    .composite([{ input: logo, gravity: "center", blend: "multiply" }])
    .png()
    .toBuffer();
}

const comps = [];
let y = 0;
for (const f of files) {
  const buf = fs.readFileSync(`${dir}/${f}`);
  const gray = await tile(buf, false);
  const col = await tile(buf, true);
  const label = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${labelW}" height="${TILE_H}"><text x="8" y="${TILE_H / 2 + 6}" font-family="monospace" font-size="16" fill="#141312">${f}</text></svg>`,
  );
  comps.push({ input: label, left: 0, top: y });
  comps.push({ input: gray, left: labelW, top: y });
  comps.push({ input: col, left: labelW + TILE_W + 20, top: y });
  y += TILE_H;
}

await sharp({ create: { width: W, height: y, channels: 4, background: CREAM } })
  .composite(comps)
  .png()
  .toFile(".state/ss/logo-preview.png");
console.log("cols: filename | default(gray) | hover(colour) —", files.join(", "));
