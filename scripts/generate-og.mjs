// Generates public/og.png (1200x630) — the brutalist share card.
// Run: node scripts/generate-og.mjs
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#F2EEE3"/>
  <rect x="24" y="24" width="1152" height="582" fill="none" stroke="#141312" stroke-width="3"/>
  <text x="72" y="120" font-family="Arial, sans-serif" font-size="22" fill="#6B6557" letter-spacing="4">STRATEGY / RESEARCH / CREATOR MARKETING</text>
  <text font-family="Georgia, 'Times New Roman', serif" font-weight="bold" font-size="62" fill="#141312">
    <tspan x="72" y="255">Simplifying complex findings,</tspan>
    <tspan x="72" y="337">spotting cultural patterns, and</tspan>
    <tspan x="72" y="419">grounding strategy in <tspan fill="#D6241C">evidence.</tspan></tspan>
  </text>
  <text x="72" y="565" font-family="Arial, sans-serif" font-weight="bold" font-size="34" fill="#141312">TANYA<tspan fill="#D6241C">.</tspan>SINGH</text>
  <text x="1128" y="565" text-anchor="end" font-family="Arial, sans-serif" font-size="20" fill="#6B6557" letter-spacing="2">tighten. sharpen. land.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("Wrote public/og.png");
