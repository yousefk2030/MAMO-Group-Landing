# Session Memory — MAMO Group Landing Page

## Current State
Rebuild in progress (rebuild from scratch to train HTML/JS/Tailwind v4 skills before React).
Done & committed on main: header (sticky, responsive nav + burger, lang + theme buttons), Hero, About (video placeholder + stats cards), Subjects (3 responsive cards).
Deployment: GitHub Pages works; Netlify is blocked/unreachable from user's network (all `*.netlify.app` time out); alternatives that work: Cloudflare Pages (recommended), Vercel, surge.sh. `src/output.css` is generated but deliberately **tracked** in git (fix commit cc0ca64) so static hosts serve compiled styles.

## Client Requirements (client: Miss Mai — science teacher)
- **Teacher**: Science for Primary/Preparatory + Biology for Secondary, at Narmer Language School
- 30+ years experience, studied coaching and uses it; teaches on Zoom
- **Name**: MAMO Group — has a logo (in navbar); has FB page (ads) + Instagram page
- **Sections**: navbar+burger · Hero · About (video + text + stats, built) · Subjects (built) · **Pricing** · Testimonials (students AND parents) · CTA · FAQ · Footer
- **Funnel**: WhatsApp → teacher adds student to group with details → 1-2 free trials → continue (pay) or leave
- **Payment**: Vodafone Cash / InstaPay, every 4 sessions, no installments
- **Groups**: 20-25 per stage; weekly homework corrected; monthly exams
- **Recorded sessions**: only for students who MISSED the live class (not sold separately)
- **Features**: WhatsApp button → chat with teacher · Light/Dark mode · English default, Arabic secondary
- **Design**: colors from the logo, modern look; mobile → tablet → desktop specs with all measurements/colors + JS behavior of every button; give NO code/hints (user builds everything)
- **Release plan**: first release English only; light mode + Arabic later

## Next Step (exact starting point)
0. COMPLETE 4/9 sections done: header, hero, about, subjects — all committed.
1. Build PRICING section next (free trial + 3 stages; actual price quoted via WhatsApp only — confirmed decision)
2. Then: testimonials, CTA, FAQ, footer
3. Later: light mode + Arabic version + final refactor pass (container pattern → @utility, typographic tokens)

## Project Structure (target)
```
MAMO-Group-Landing/
├── index.html
├── main.js
├── src/
│   ├── input.css
│   └── output.css   (generated, TRACKED on purpose)
├── img/
│   ├── logo.svg
│   └── logo.jpg
├── AGENTS.md
├── skill.md
├── memory.md
├── package.json
└── README.md
```

## Design Tokens (src/input.css @theme)
- `--color-mamo-gold`: #d4af37
- `--color-mamo-black`: #0a0a0a
- `--color-mamo-white`: #f8f9fa
- `--color-mamo-card`: #1a1a2e (card bg, added with subjects)
- `--font-poppins` — self-hosted woff2 (400/600/700)
- Container pattern: `max-w-93.75 px-5` / `md:max-w-191.25` (765px) / `lg:max-w-250` (1000) / `xl:max-w-375` (1500) / `xl:px-15` — repeated in every section (final refactor pending)
- Type rule agreed: use Tailwind scale names where size exists (sm/xs/base/xl...); keep arbitrary px ONLY for non-scale sizes (28/32/40/56); icons are the legit arbitrary exception

## Decisions Log
- Coaching method: AI asks questions, user writes code — **but** user requested design specs (measurements/colors/JS behavior), not code
- Badge style standardized across sections: `text-mamo-gold bg-mamo-gold/10 border-mamo-gold border-2 rounded-full`
- User commits himself after AI confirms; commit titles: lowercase `feat:`/`fix:` + space
- Session memory: AGENTS.md → AI reads memory.md → knows state; updated every session

## PENDING (blocking none)
- Grades wording in Subjects cards (`Grades 1–3`, `Grade 1`) — confirm real terminology with Ms. Mai before handoff
- `console.log(Window)` may still exist in main.js:14 — remove when seen
- Slick hover arrows: `fa-arrow-right` in EN → flip to `fa-arrow-left` in Arabic