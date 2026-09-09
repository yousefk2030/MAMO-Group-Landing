# Session Memory — MAMO Group Landing Page

## Current State
Rebuild in progress (rebuild from scratch to train HTML/JS/Tailwind v4 skills before React).
- **Committed on main (latest: d3a6341):** header (sticky, responsive nav + burger, lang + theme buttons), Hero, About (video placeholder + stats cards), Subjects (3 responsive cards), Pricing (free trial highlight card + 3 stage cards), Testimonials (student/parent tabs), CTA, **FAQ** (accordion with toggle logic).
- **Uncommitted working tree:** Footer added to index.html + output.css regenerated (unstaged, needs commit).
- **Built so far: 9 of 9 sections** — header, hero, about, subjects, pricing, testimonials, CTA, FAQ, footer. All sections complete.
- **Branch:** `main` is ahead of `origin/main` (unpushed commits + unstaged footer changes).

## Commits (local, unpushed)
1. `1c987e9 feat: add faq section` — 5-question accordion with placeholder content
2. `d3a6341 fix: faq accordion toggle open close behavior` — if/else toggle logic + selector changed from `#faq ul li` to `#faq ul div`
3. Footer changes are **unstaged** — need commit before push

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
1. **Remove `h-[500vh]`** from `<body>` tag (index.html line 12).
2. **Commit footer** — `feat: add footer section with quick links and contact` + output.css.
3. **Push** all local commits + footer commit to origin/main.
4. **Update memory.md** (this file) + commit + push.
5. Then: fix testimonials tab content swap, show Ms. Mai the whole site to finalize mock content.
6. Later: light mode + Arabic version + final refactor pass (container pattern → @utility, typographic tokens).

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

## PENDING (blocking none)
- Remove `h-[500vh]` from body tag
- Commit footer + push all local commits to origin/main
- Fix testimonials tab content switch (real content swap between student/parent cards)
- Finalize ALL mock content with Ms. Mai after she sees the full site
- Flip `fa-arrow-right` → `fa-arrow-left` in Arabic version
