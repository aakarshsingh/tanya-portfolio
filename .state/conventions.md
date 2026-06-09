# Conventions: tanya-portfolio

Greenfield static site. These conventions control the build.

## Stack
- **Astro** (latest), **TypeScript** strict mode (`astro check` clean).
- **Styling:** use the best tool for the look. Default: **Tailwind v4**
  (CSS-first `@theme` mapping the design tokens) for layout/spacing/type,
  plus a custom CSS layer for the bespoke proof-mark system (redline draws,
  margin rail, ledger). Plain scoped CSS is fine where utilities don't help.
- **Interactivity:** vanilla TS by default; **pivot to a React island**
  for any component where it clearly does better (e.g. the markup-toggle
  or a richer engine). Add React only where it earns its place.
- **Fonts:** self-hosted via `@fontsource` (archivo, newsreader, space-mono).
- **Output:** `output: 'static'`; deploy to **GitHub Pages**.

## File organization (many small files)
- `src/layouts/` — Base layout (head, meta, grain, margin rail).
- `src/components/` — one section per `.astro` file, PascalCase.
- `src/data/` — content as typed TS modules (reframes, cases, brands,
  timeline, education). Hardcoded for v1; Content Collections deferred
  to the multipage phase.
- `src/styles/` — `tokens.css`, `global.css`.
- `src/pages/index.astro` — composition root; assembles section components.
- `public/` — fonts, logos (`/logos/*.svg`), favicon, og image.

## Code style
- Immutable data; small focused components (<200 lines).
- No hardcoded secrets (none needed — fully static).
- Content is the single source of truth in `src/data/*`; components render it.
- All copy follows her voice: short sentences, no em dashes, no fluff.

## Accessibility (hard requirement)
- Semantic HTML, one `<h1>`, logical heading order.
- `:focus-visible` rings, keyboard-operable engine, alt text on marks.
- `prefers-reduced-motion: reduce` disables all animation.

## Verification (no unit tests)
- `npm run build` succeeds; `astro check` reports no TS errors.
- Manual axe pass: no critical violations.
- Lighthouse: Performance and Accessibility ≥ 95.
- Responsive QA at 360 / 768 / 1280 widths.

## Git
- Branch off main for work. Commit only when the architect asks.
- Conventional commits (feat/fix/refactor/docs/chore). Attribution disabled.

## Implementation Status — v1 COMPLETE (all 8 phases)

Built via `/as-p5-execute`, Phases 0–7 in `execution_plan.md`. Every phase
verified with `npm run build` + `astro check` clean.

**What exists now:**
- Astro 5 static site, Tailwind v4 (`@theme` tokens) + custom CSS layer,
  self-hosted Archivo / Newsreader / Space Mono, paper-grain overlay.
- One page (`src/pages/index.astro`) assembling: Nav (+ Show-markup toggle) ·
  Hero (load animation + "machine" redline strike) · ReframeEngine (redline +
  live word-count tick) · Work (3 verified case studies) · BrandWall
  (18-cell ink ledger, auto-detects `public/logos/*.svg`) · About (bio +
  timeline incl. internships + education + one-line tan-trum chip) · Contact
  (anti-form) · Footer · ScrollRedline.
- Signature interactions: Show-markup mode (`html[data-markup]`, localStorage,
  reveals `MarginRail` notes site-wide); scroll-progress redline; reframe
  word-count meter. All motion gated by `prefers-reduced-motion`.
- Content is data-driven in `src/data/` (reframes, cases, brands, timeline,
  education). simple-icons gives 5 real logos; rest are wordmarks or dropped SVGs.
- Launch: SEO + OG/Twitter meta, caret favicon, generated `public/og.png`
  (`scripts/generate-og.mjs` via sharp), `base: /tanya-portfolio`,
  GitHub Pages Actions workflow, `.gitignore`.
- Deps added beyond plan: `simple-icons`, `@types/node`, `sharp` (all dev).

**IP guard held:** tan-trum appears only as a one-line credential. No rules,
decision tree, or skill content on the site (grep-verified). The skill
reference, LinkedIn PDF, ideas, and sample now live in local `.state/docs`,
`.state/ideas`, `.state/sample` — all git-ignored (only this file is tracked),
so the writing style is never committed or published.

**Open before launch:** real-browser Lighthouse/axe pass; live interaction
test; brand-red small-text contrast (~3.9:1) decision; remaining brand logos.

## Field Notes
- `astro.config.mjs` must NOT carry `// @ts-check`: the `@tailwindcss/vite`
  plugin type isn't assignable to Astro's bundled-Vite `vite.plugins` type
  (version skew), which fails `astro check`. Config stays untyped.
- Verification CWD: pass absolute paths to PowerShell inspection commands;
  the shell CWD is not guaranteed to be the repo root.
