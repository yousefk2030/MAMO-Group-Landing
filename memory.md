# Session Memory — MAMO Group Landing Page

## Current State
Rebuild in progress (rebuild from scratch to train HTML/JS/Tailwind v4 skills before React).
Done: header (sticky, responsive nav + burger menu, lang + theme buttons) and hero section — committed on main.
Next: full-page design spec, mobile first, from the client requirements below.

## Client Requirements (client: Miss Mai — science teacher)
- **Teacher**: Science for Primary/Preparatory + Biology for Secondary, at Narmer Language School
- 30+ years experience, studied coaching and uses it; teaches on Zoom
- **Name**: MAMO Group — has a logo (goes in navbar); has FB page (ads) + Instagram page
- **Sections**: navbar+burger · Hero · Testimonials (students AND parents) · CTA · About/Experience (30+ yrs — video preferred, or video + text) · FAQ · Footer · **Pricing** (free trial + price per stage ×3)
- **Funnel**: WhatsApp → teacher adds student to group with details → 1-2 free trials → continue (pay) or leave
- **Payment**: Vodafone Cash / InstaPay, every 4 sessions, no installments
- **Groups**: 20-25 per stage; weekly homework corrected; monthly exams
- **Recorded sessions**: only for students who MISSED the live class (not sold separately)
- **Features**: WhatsApp button → chat with teacher · Light/Dark mode · English default, Arabic secondary
- **Design**: colors from the logo, modern look; deliver specs mobile → tablet → desktop with all measurements/colors + JS behavior of every button; give NO code/hints (user builds everything)
- **Release plan**: first release English only; light mode + Arabic later

## Next Step (exact starting point)
0. Pricing decision: free trial + 3 stages shown, actual price quoted via WhatsApp only (confirmed)
1. Produce MOBILE design spec (sections, measurements, colors, button JS behaviors)
2. User builds it; then ask for TABLET spec, then DESKTOP spec
3. After the page is done: light mode + Arabic version

## Project Structure (target)
```
MAMO-Group-Landing/
├── index.html
├── main.js
├── src/
│   ├── input.css
│   └── output.css
├── img/
│   ├── logo.svg
│   └── logo.jpg
├── AGENTS.md
├── skill.md
├── memory.md
├── package.json
└── README.md
```

## Design Tokens (for reference when we start styling)
- Primary: `#d4af37` (mamo-gold)
- Dark bg: `#0a0a0a` (mamo-black)
- Light bg: `#ffffff`
- Container: 375px → 680px → 1000px → 1500px

## Decisions Log
- Coaching method: AI asks questions, user writes code — **but** user requested design specs (sections/measurements/colors/JS behavior), not code
- Session memory: AGENTS.md → reads memory.md → AI knows state
- Files `skill.md` and `memory.md` updated after every session
