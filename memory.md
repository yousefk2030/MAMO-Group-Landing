# Session Memory — MAMO Group Landing Page

## Current State
We have a complete landing page as a reference. The user wants to **rebuild from scratch** to train HTML/JS/Tailwind v4 skills before React.

**We have NOT started the rebuild yet.** The next session starts from zero.

## Reference (previous build — will NOT be used, just for reference)
- Full landing page: hero, about, subjects, pricing, testimonials, CTA, FAQ, footer
- Dark/light mode, RTL, i18n Arabic/English, auto-scroll testimonials, localStorage
- Tailwind v4 with `@theme` custom colors

## Next Step (exact starting point)
1. **Initialize Git** in the project folder
2. **Create GitHub repo** and connect it
3. **Write pure HTML structure** — semantic markup only (no CSS, no JS)
4. **First commit**: `"feat: initial HTML structure"`
5. Push to GitHub

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
- Coaching method: AI asks questions, user writes code, AI corrects thinking
- Session memory: AGENTS.md → reads memory.md → AI knows state
- Files `skill.md` and `memory.md` updated after every session
