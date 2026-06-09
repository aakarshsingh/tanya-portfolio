# tanya-portfolio

A brutalist one-page portfolio for **Tanya Singh** — strategist (research /
brand / creator marketing). Built as a birthday surprise.

Design concept: **"Redline" — the manuscript mid-edit.** Her craft is
subtraction (tighten, sharpen, make it land), so the site performs it: cream
paper, ink type, one red editor's pen. The signature is a **Show-markup**
toggle that flips the whole page into track-changes, plus a reframe engine
that ticks a live word count down to prove a line lands.

> 🔒 **Tanya's proprietary writing system (tan-trum) is never published.** It
> is kept in private local notes only — never in this repo, the commit
> history, or the deployed site. On the site it appears as a one-line
> credential only: no rules, no logic, no mechanism.

---

## Stack

- **Astro 5** (static output) — zero JS by default, islands only where needed
- **Tailwind v4** (CSS-first `@theme` tokens) + a custom CSS layer for the
  bespoke proof-mark system
- **Vanilla TS** for the one interactive bit (reframe engine, markup toggle)
- **Self-hosted fonts** via `@fontsource`: Archivo (display), Newsreader
  (serif), Space Mono (annotations)
- **simple-icons** for the few clean brand marks; `sharp` (dev-only) to
  generate the OG image

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server → http://localhost:4321/tanya-portfolio/
npm run build      # static build to dist/
npm run preview    # preview the production build
npm run check      # astro check (TypeScript)

node scripts/generate-og.mjs   # regenerate public/og.png (the share card)
```

## Project structure

```
src/
  layouts/Base.astro        # <head>, meta/OG, fonts, grain overlay
  pages/index.astro         # composition root — assembles the sections
  components/
    Nav.astro               # sticky nav + Show-markup toggle
    Hero.astro              # statement, "machine" redline, load animation
    ReframeEngine.astro     # signature: redline + live word-count tick
    Work.astro / CaseStudy.astro
    BrandWall.astro         # monochrome ledger; auto-detects public/logos/*.svg
    About.astro             # bio + timeline + education + tan-trum credential
    Contact.astro           # anti-form CTA
    Footer.astro
    MarginRail.astro        # editor's margin-note primitive (markup mode)
    ScrollRedline.astro     # top scroll-progress redline
  data/                     # content lives here (typed TS modules)
    reframes.ts  cases.ts  brands.ts  timeline.ts  education.ts
  styles/
    tokens.css              # @theme design tokens + rule strokes
    global.css              # reset, base type, section/button scaffold, grain
public/
  favicon.svg               # redline caret mark
  og.png                    # generated share card (1200×630)
  logos/                    # drop brand SVGs here (see below)
scripts/generate-og.mjs     # OG image generator
```

## Editing content

All copy is data-driven — edit the typed modules in `src/data/`, no component
changes needed:

| File | Controls |
|------|----------|
| `reframes.ts` | The 3 Obvious → Reframe examples in the engine |
| `cases.ts`    | Work case studies (tension / pattern / strategy, metrics, accounts) |
| `brands.ts`   | Brand-wall roster (name + optional logo slug) |
| `timeline.ts` | About timeline (roles + periods) |
| `education.ts`| About education list |

Voice rules for any copy: short sentences, one idea at a time, **no em
dashes**, no corporate fluff. Verify facts against her LinkedIn.

## Adding brand logos

The brand wall renders each brand with this priority:
**dropped SVG → simple-icons mark → Archivo wordmark.**

To add a logo, drop an SVG into `public/logos/` named after the brand's
`slug` in `brands.ts` (e.g. `philips.svg`, `costa-coffee.svg`). It is masked
to monochrome ink automatically (and red on hover), so **black / monochrome /
wordmark** SVGs look best — color sources still work but get flattened to a
silhouette. No rebuild config needed; it's auto-detected.

## Deployment (GitHub Pages)

`astro.config.mjs` sets `site` + `base: /tanya-portfolio` for a project page
at `https://aakarshsingh.github.io/tanya-portfolio/`. If the repo name or
deploy URL differs, update both values (`base` must equal the repo name).

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
Enable Pages → "GitHub Actions" in the repo settings once.

## Notes / TODO before launch

- Run **Lighthouse / axe** in a real browser (not done in CI sandbox).
- Brand red on cream is ~3.9:1 — fine for large text, marginally under AA for
  the small mono labels; adjust if strict AA is required.
- Drop in remaining brand logos (or leave as wordmarks).
