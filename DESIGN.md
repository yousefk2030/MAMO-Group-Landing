---
name: MAMO Group
description: A trusted academic guide for science tutoring families.
colors:
  primary: "#d4af37"
  primary-deep: "#74570a"
  neutral-ink: "#0a0a0a"
  neutral-paper: "#f8f9fa"
  surface-dark: "#22222f"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "30px / 40px / 56px responsive"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "14px–16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "12px–14px"
    fontWeight: 700
rounded:
  md: "12px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"
spacing:
  section: "64px"
  section-wide: "96px"
  container-inline: "20px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary-deep}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  card:
    backgroundColor: "{colors.neutral-paper}"
    rounded: "{rounded.lg}"
    padding: "16px–24px"
---

# Design System: MAMO Group

## Overview

**Creative North Star: "The Trusted Academic Guide"**

MAMO's visual system presents Mrs. Mai as a confident, warm academic guide for parents choosing science tutoring. Poppins, centered layouts, and a restrained gold accent keep the experience approachable and organized; the logo's gold anchors the interface without turning every surface into an accent.

The existing site pairs a pale or near-black canvas with rounded cards, thin borders, and gentle elevation. Keep the visual voice clear and welcoming, with the teacher and the next useful action taking priority over decoration.

**Key Characteristics:**
- Confident, warm, and academically clear.
- Gold is the brand accent; dark gold carries text on light surfaces.
- Rounded controls and cards sit on calm light or dark surfaces.

## Colors

The palette is built around the logo's academic gold, supported by near-black, soft white, and a muted dark card surface.

### Primary
- **Academic Gold** (`#d4af37`): Brand accent for highlights, primary actions, and dark-theme accents.
- **Deep Academic Gold** (`#74570a`): Higher-contrast gold for text and outlines on light surfaces.

### Neutral
- **Near Black** (`#0a0a0a`): Main text and dark page background.
- **Soft White** (`#f8f9fa`): Light page background and card surface.
- **Muted Night Surface** (`#22222f`): Card surface in dark theme.

**The Legible Gold Rule.** Use deep gold for text on light backgrounds; reserve the brighter brand gold for accents and dark surfaces.

## Typography

**Display Font:** Poppins (with sans-serif fallback)  
**Body Font:** Poppins (with sans-serif fallback)

**Character:** One self-hosted sans-serif family keeps headings and practical information cohesive. Bold headings provide hierarchy while regular body copy stays conversational and readable.

### Hierarchy
- **Display** (700, 30px / 40px / 56px responsive, 1.4 line-height): Hero headline.
- **Headline** (700, 24px–32px): Section and CTA headings.
- **Title** (600, 18px–20px): Card and subject titles.
- **Body** (400, 14px–16px, 1.6 line-height): Supporting copy and descriptions.
- **Label** (600–700, 12px–14px): Eyebrows, chips, and compact actions.

## Layout

Sections use centered containers with a mobile-first single-column layout that expands into grids at medium and large breakpoints. The shared container is 375px wide at the smallest size, 765px at `md`, 1000px at `lg`, and 1500px at `xl`, with 20px inline padding increasing to 60px at `xl`. Section padding is 64px vertically, increasing to 96px at `xl`. The header remains sticky; the navigation collapses into a menu on smaller screens.

## Elevation & Depth

The system uses light tonal layering with subtle borders and soft shadows, rather than dramatic depth. Cards may lift slightly on hover, with a restrained gold-tinted shadow as feedback. Keep shadows supportive and avoid making static content feel like floating panels.

## Shapes

Cards use gently rounded corners (12px–24px), while primary and secondary actions use pill-shaped ends. Borders are fine and low-contrast, separating surfaces without introducing a heavy outline language.

## Components

### Buttons
- **Shape:** Fully rounded pill ends (`9999px`).
- **Primary:** Academic gold fill, near-black text, generous horizontal padding (`32px`) and vertical padding (`14px`).
- **Hover / Focus:** A restrained lift and shadow on hover; preserve a visible keyboard focus indicator.
- **Secondary:** Transparent fill with deep-gold text and border on light surfaces; brighter gold in dark theme.

### Chips
- **Style:** Pale gold-tinted fill, gold border, rounded pill shape, and compact horizontal padding.
- **State:** Use for section labels and short credibility cues, not as a substitute for headings.

### Cards / Containers
- **Corner Style:** Gently rounded (`12px`–`24px`).
- **Background:** Soft white in light theme; muted night surface where a dark card is needed.
- **Shadow Strategy:** Light elevation, with gold-tinted shadow reserved for hover feedback.
- **Border:** Fine neutral border that remains visible in both themes.
- **Internal Padding:** Comfortable (`16px`–`24px`).

### Navigation
- **Style:** Poppins links in the page's main text color, with gold hover feedback. Use the compact expandable menu on smaller screens and a horizontal row on desktop.

### FAQ Accordion
- **Style:** Questions are separated by fine dividers, with a gold plus icon and a clear open/closed answer state.

## Do's and Don'ts

### Do:
- **Do** keep the teacher's experience and the parent's confidence central to the interface.
- **Do** use the existing gold, dark-gold, near-black, soft-white, and muted-night tokens.
- **Do** keep light and dark theme treatments legible and consistent.
- **Do** preserve the WhatsApp-first free-trial path.

### Don't:
- **Don't** introduce new font families or unrelated accent hues.
- **Don't** present placeholder testimonials, pricing, statistics, contact details, or outcomes as verified facts.
- **Don't** let decorative effects compete with the teacher, the learning offer, or the next action.
