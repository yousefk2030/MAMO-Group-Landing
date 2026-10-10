# Session Memory — MAMO Group Landing Page

## Current State
Rebuild in progress (rebuild from scratch to train HTML/JS/Tailwind v4 skills before React).
- **Committed on main (latest: d3c22b7):** header (sticky, responsive nav + burger, lang + theme buttons), Hero, About, Subjects, Pricing, Testimonials, CTA, FAQ, and Footer.
- **Uncommitted working tree:** Tailwind class refactor across `index.html`/`src/input.css`; current `src/output.css` needs regeneration after the latest HTML fix. `main.js` changes are whitespace-only; `memory.md` contains review notes.
- **Branch:** `main` and `origin/main` both point to `d3c22b7`; local worktree changes are uncommitted.

## Latest Commit
- `d3c22b7 feat: add footer section with quick links contact and social` — committed on `main` and synced with `origin/main`.
- Current Tailwind refactor and generated CSS update are not committed yet.

## FAQ Accordion — How It Works
- **Selector:** `#faq ul div` (click on header `<div>` only, NOT `<li>` — so clicking answer `<p>` doesn't trigger toggle)
- **Logic (main.js lines 105-126):**
  - If `faqtext[index]` does NOT have `faq-active` → close all pluses/answers, then open this one
  - If `faqtext[index]` HAS `faq-active` → close this one only (toggle off)
- **Classes:** `rotate-45` on plus = open indicator; `faq-active` on `<p>` = answer open; `max-h-0` on `<p>` = answer hidden
- **Result:** Open one closes others; re-clicking open item closes it

## Footer Structure (index.html lines 666-725)
- Logo (`logo.svg`, w-15 lg:w-20)
- Quick Links: Home, About, Subjects, Pricing, Reviews, FAQ
- Contact: placeholder phone `+20 1XX XXX XXXX`
- Copyright: `© 2026 MAMO Group. All rights reserved.`
- Credit: `Made with ♥️ by Yousef Khaled`
- Container pattern: same as other sections (`max-w-93.75 px-5` etc.)

## Client Requirements (client: Miss Mai — science teacher)
- **Teacher**: Science for Primary/Preparatory + Biology for Secondary, at Narmer Language School
- 30+ years experience, studied coaching and uses it; teaches on Zoom
- **Name**: MAMO Group — has a logo (in navbar); has FB page (ads) + Instagram page
- **Sections**: navbar+burger · Hero · About · Subjects · Pricing · Testimonials (students AND parents) · CTA · FAQ · Footer
- **Funnel**: WhatsApp → teacher adds student to group with details → 1-2 free trials → continue (pay) or leave
- **Payment**: Vodafone Cash / InstaPay, every 4 sessions, no installments
- **Groups**: 20-25 per stage; weekly homework corrected; monthly exams
- **Recorded sessions**: only for students who MISSED the live class (not sold separately)
- **Features**: WhatsApp button → chat with teacher · Light/Dark mode · English default, Arabic secondary
- **Design**: colors from the logo, modern look; mobile → tablet → desktop specs with all measurements/colors + JS behavior of every button; give NO code/hints (user builds everything)
- **Release plan**: first release English only; light mode + Arabic later

## Blind Spots to raise with user (coach role)
- **Testimonials tabs are cosmetic only**: `main.js` toggles `testimonial-active` class but NEVER swaps the card content — clicking "Parents" still shows the 4 student cards. Client wants students AND parents. Need real content switch (or two card groups toggled by `hidden`).
- The 4 testimonial cards are identical duplicates (same "Ahmed S. Grade 8" + same quote) — placeholder only.
- `<body class="... h-[500vh] ...">` is a leftover test height — **must be removed** before final commit/push (line 12 in index.html).
- WhatsApp links all use placeholder `201XXXXXXXXX` + same prefilled text (fine until client handoff).

## Next Step (exact starting point)
1. Run `npm run build` to regenerate tracked `src/output.css` from the current source.
2. Verify the footer's four-column layout at the `md` breakpoint and run `git diff --check`.
3. Commit the Tailwind refactor as `refactor: extract shared Tailwind styles with @apply`, then push when ready.
4. Fix testimonials tab content swap, then show Ms. Mai the full site to finalize mock content.
5. Later: light mode + Arabic version + final refactor pass (container pattern → @utility, typographic tokens).

## Project Structure (current)
```
MAMO-Group-Landing/
├── index.html              (main page, 728 lines, all 9 sections)
├── main.js                 (126 lines — header, burger, theme, lang, video, testimonials tabs, FAQ accordion)
├── src/
│   ├── input.css           (Tailwind source with @theme tokens)
│   ├── all.min.css         (Font Awesome, local)
│   └── output.css          (generated, TRACKED on purpose)
├── img/
│   ├── logo.svg
│   └── logo.jpg
├── fonts/                  (self-hosted Poppins woff2)
├── webfonts/               (Font Awesome files)
├── AGENTS.md
├── skill.md
├── memory.md
├── IDEA.md
├── PRODUCT.md
├── AUDIT.md                (production-readiness audit, 2026-09-17)
├── package.json
└── README.md
```

## Design Tokens (src/input.css @theme)
- `--color-mamo-gold`: #d4af37
- `--color-mamo-black`: #0a0a0a
- `--color-mamo-white`: #f8f9fa
- `--color-mamo-card`: #1a1a2e (card bg)
- `--color-mamo-faq`: used for FAQ border-bottom
- `--font-poppins` — self-hosted woff2 (400/600/700)
- Container pattern: `max-w-93.75 px-5` / `md:max-w-191.25` / `lg:max-w-250` / `xl:max-w-375` / `xl:px-15` — repeated in every section (final refactor pending)
- Type rule agreed: use Tailwind scale names where size exists; keep arbitrary px ONLY for non-scale sizes (28/32/40/56); icons are the legit arbitrary exception

## Decisions Log
- Coaching method: AI asks questions, user writes code — but user requested design specs (measurements/colors/JS behavior), not code
- Badge style standardized across sections: `text-mamo-gold bg-mamo-gold/10 border-mamo-gold border-2 rounded-full max-w-fit` + `text-2xl`
- **Content is MOCK until Ms. Mai sees the full site** — prices, grades wording, WhatsApp texts, phone placeholder all finalized at client handoff. User's priority = visual form only for now.
- Responsive cards spacing pattern: wrapper `space-y-3 md:space-y-0 md:gap-4` (no mbe on children)
- User commits after AI confirms; commit titles: lowercase `feat:`/`fix:` + space
- Icon language = Font Awesome only
- Session memory: AGENTS.md → AI reads memory.md → knows state; updated every session
- **FAQ accordion**: selector changed from `#faq ul li` to `#faq ul div` — click on header div only, answer `<p>` click doesn't trigger toggle (good UX improvement)
- **FAQ toggle**: if/else on `faq-active` class presence — close-all + open vs. close-only toggle

## Production-Readiness Audit
**→ See `AUDIT.md`** (created 2026-09-17): full blockers / bugs / SEO / a11y / perf / Tailwind review, each with line references and a `Status` column.
When the user says **"رجّعني للـ audit"** (or "نكمل الـ audit"), open `AUDIT.md` and resume from the first open item in priority order (Phase 0 → 3), coaching (he writes the code).

## Tailwind v4 Review (2026-10-08)
- Audited `index.html` and `src/input.css` against Tailwind CSS v4.3 docs; Tailwind CLI 4.3.3 compile passed. No implementation files changed during review.
- Initial review found the footer arbitrary grid class was split by whitespace; learner restored `md:grid-cols-4`, and a fresh build now contains the intended four-column utility.
- `src/input.css` still has global class selectors composed with `@apply`; the right test is whether the exact bundle is reused and should stay visually consistent, not a rule to avoid `@apply`. The learner's direct About/Pricing utilities plus repeated testimonial sub-patterns are a reasonable balance for static HTML.
- The current Tailwind CLI 4.3.3 build passes to scratch, and new testimonial classes compile. Custom class rules remain unlayered; utility overrides may lose if properties conflict, but no current conflict was confirmed.
- Next step: regenerate tracked `src/output.css` from the current source, then visually verify the footer at the `md` breakpoint.

## Commit Readiness Check
- Latest HEAD at review: `d3c22b7`; current worktree has changes in `index.html`, `main.js`, `memory.md`, `src/input.css`, and `src/output.css`.
- `git diff --check` passed and Tailwind CLI 4.3.3 compiled the current source to scratch successfully. The footer's valid `md:grid-cols-4` is present in the source and fresh CSS, but tracked `src/output.css` still differs from a fresh build and retains the old malformed selector; regenerate with `npm run build` before committing.
- The learner restored the footer's valid `md:grid-cols-4`, expressing four equal columns. The remaining `main.js` diff is whitespace-only; no temporary `console.log` remains.
- Suggested commit title after syncing generated CSS: `refactor: extract shared Tailwind styles with @apply`.

## PENDING (blocking none)
- Regenerate `src/output.css` after the `md:grid-cols-4` HTML fix and verify the footer at the `md` breakpoint.
- Commit and push the Tailwind refactor after generated CSS is synced.
- Fix testimonials tab content switch (real content swap between student/parent cards)
- Finalize ALL mock content with Ms. Mai after she sees the full site
- Flip `fa-arrow-right` → `fa-arrow-left` in Arabic version
