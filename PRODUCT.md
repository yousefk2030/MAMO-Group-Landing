# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + Tailwind CSS v4 (no framework). Styles authored in `src/input.css` (`@theme` tokens + `@font-face` for self-hosted Poppins), compiled to `src/output.css` via Tailwind CLI (`npm run build` / `npm run dev --watch`). Font Awesome (local `src/all.min.css`) for icons. JavaScript behavior in `main.js`. Build output `output.css` is tracked on purpose.

## Users

Primary: **Parents** of Primary, Preparatory, and Secondary students at Narmer Language School. They are the decision-makers and the payers (Vodafone Cash / InstaPay). The student is the beneficiary, not the buyer.

## Product Purpose

MAMO is the private tutoring practice of Mrs. Mai Elnaggar: small-group Science (Primary/Preparatory) and Biology (Secondary) classes delivered live on Zoom. The site exists to convert a parent from curiosity to a free trial, then to paid enrollment — entirely through a WhatsApp-first funnel with no forms or commitment.

## Positioning

30+ years of teaching at one named school (Narmer Language School) plus certified-coach training: the teaching is method, not just content. Small cohorts (20–25 per stage) with structure parents can trust — weekly corrected homework, monthly exams, and recordings reserved for absentees. The brand is the teacher's own name and record, not an anonymous tutoring company.

## Operating Context

- **Funnel:** parent messages WhatsApp → teacher adds student to a group with details → 1–2 free trial classes → continue (pay) or leave.
- **Payment:** Vodafone Cash / InstaPay, every 4 sessions, no installments.
- **Groups:** 20–25 students per stage; weekly homework corrected; monthly exams.
- **Recordings:** only for students who missed the live class (not sold separately).
- **Channels:** Facebook page (ads) + Instagram page; WhatsApp is the conversion path.
- **Theme/language:** Light/Dark mode; English default, Arabic (RTL) secondary. First release ships English only, light mode.

## Capabilities and Constraints

- WhatsApp button → opens chat with the teacher (prefilled trial message).
- Light/Dark theme toggle and EN/AR language toggle in the header.
- Responsive across mobile → tablet → desktop with an explicit spec per breakpoint.
- First release is English-only, light mode; Arabic + dark mode come later.
- **Undecided / not yet provided:** real testimonials and their content; real stat values (students taught, rating); real WhatsApp number; real pricing amounts and currency; finalized EN/AR copy. All current numbers in the build are MOCK placeholders pending client review.

## Brand Commitments

- Brand name **MAMO** = Mrs. Mai Elnaggar. The logo reads "MAMO Group" — "Group" denotes her tutoring cohorts, not a separate company. Avoid implying MAMO is a company distinct from the teacher.
- Visual colors are drawn from the logo (gold `#d4af37` is the anchor).
- Existing assets: `img/logo.svg`, `img/logo.jpg`, `img/miss-mai.jpg`, `img/miss-mai-1.jpg`.
- Social: Facebook page + Instagram page (handles to be confirmed at client handoff).

## Evidence on Hand

- Real brand assets: logo (svg/jpg) and teacher photos (miss-mai.jpg, miss-mai-1.jpg).
- **Absent — must not be fabricated by future work:** genuine testimonials, verified stat figures, the teacher's WhatsApp number, pricing/currency, and any published results. These are currently placeholder mock content and stay mock until Ms. Mai reviews the full site.

## Product Principles

1. **Parents are the buyer.** Every CTA, proof point, and headline speaks to the parent's confidence and peace of mind, not the student's entertainment.
2. **The brand is the teacher.** MAMO = Mai Elnaggar; lean on her 30-year name and coaching credential rather than generic tutoring claims.
3. **Low-friction entry.** WhatsApp-first free-trial funnel with zero forms and zero commitment lowers the barrier to the first conversation.
4. **Real coaching, not just content.** Structure parents trust: homework, exams, recordings for absentees, small cohorts.
5. **Mock until sign-off.** No placeholder stat, testimonial, price, or number becomes "real" without Ms. Mai's explicit review of the full site.

## Accessibility & Inclusion

Bilingual target: English (default, LTR) and Arabic (secondary, RTL). Dark/Light themes must remain usable. No product-specific disability requirement established yet beyond responsive + theme support.
