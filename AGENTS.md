# MAMO Group — Project Instructions

Read `memory.md` before starting any work. It contains the exact project state, what we last did, and the next step.

Follow the methodology in `skill.md` — the user writes code, I guide their thinking with questions.

Keep `memory.md` updated after every session with the new state and next steps.

## Non-negotiables

- **`src/output.css` is generated and tracked.** Any change to `index.html` classes or `src/input.css` requires `npm run build` before it is visible in the browser or worth committing. Use `npm run dev` to watch. Never hand-edit `src/output.css`.
- **Dark is the default theme on purpose.** It is the brand's native canvas — the logo asset is a white monogram on a baked-in black plate. Don't switch the default to light, and don't add `prefers-color-scheme` handling without asking first.
- **Theme state lives in the `.dark` class on `<html>`.** The variant is `@custom-variant dark (&:where(.dark, .dark *))` in `src/input.css`; the persisted value is `localStorage.theme` (`"light"` / `"dark"`). Read state from the class, not straight from `localStorage`.
- **Gold has two roles.** `mamo-gold` (`#d4af37`) is a *fill* (buttons, cards, the CTA band) and gold-as-text **on dark**. `mamo-gold-deep` (`#74570a`) is gold-as-text **on light**. Using `text-mamo-gold` on a light surface drops contrast to ~2:1.
- **Text colours and section backgrounds inherit; card surfaces and borders do not.** Before adding a `dark:` pair, first try deleting the hardcoded colour and letting inheritance do the work.
- **Unlayered `@apply` rules beat inline utilities.** A colour set inside a custom class in `src/input.css` cannot be overridden by a class on the element — set any given colour in exactly one place.

## Commits

- Titles: lowercase `feat:` / `fix:` / `refactor:` + space.
- Stage files explicitly. Never `git add .` — `.impeccable/` holds local tool artifacts (add `live/` and `critique/` to `.gitignore` rather than committing them).
- Run `git diff --check` before committing.

## Reference

- `PRODUCT.md` — product context. `DESIGN.md` — design direction ("The Trusted Academic Guide").
- `AUDIT.md` and `IDEA.md` no longer exist in this repo; don't look for them or resume them.
