# Knees & Spine Physio Clinic — Design System

Status: v1.1 · Foundation spec  
Scope: Website-wide visual language for the Knees & Spine Physio Clinic

## 1. Design intent

The website should feel clinical and trustworthy, calm and reassuring, modern and precise, premium but approachable, and easy for older patients to read. It should feel like a focused physiotherapy clinic—not a large hospital or a generic wellness template.

The supplied knee-and-spine logo is the brand source of truth. The production master is [`public/brand/logo-master.png`](../public/brand/logo-master.png); use the extracted transparent variants for UI. Translate its curved forms, clean lines, circular details, and controlled spacing into the interface through restrained curves, rounded containers, clear hierarchy, and generous whitespace.

### Brand asset map

| Asset                                | Use                                                 |
| ------------------------------------ | --------------------------------------------------- |
| `public/brand/logo-full.png`         | Transparent primary lockup for light surfaces       |
| `public/brand/logo-full-white.png`   | Reversed lockup for navy surfaces                   |
| `public/brand/logo-icon.png`         | Transparent knee-and-spine mark for compact headers |
| `public/brand/logo-icon-white.png`   | Reversed compact mark                               |
| `public/brand/logo-wordmark.png`     | Text lockup when the icon is separated              |
| `public/brand/favicon.png`           | 512px favicon and app/social mark source            |
| `public/brand/cover-reference.png`   | Wide social/cover reference artwork                 |
| `public/brand/profile-reference.png` | Circular profile/reference artwork                  |

Use the 320px, 640px, and 1200px full-lockup exports for responsive image delivery. Use the 64px, 128px, 256px, and 512px icon exports according to display size. Keep the source references for marketing use, but do not use glow-heavy artwork as the default UI logo.

## 2. Brand personality

- Clinical, human, and confident
- Reassuring without being soft or childish
- Professional without feeling institutional
- Contemporary without relying on trends
- Clear enough to support patients making an appointment

## 3. Colour system

Components must consume semantic tokens. Do not scatter raw hex values through Astro components.

### Brand tokens

| Token            | Hex       | Primary use                                         |
| ---------------- | --------- | --------------------------------------------------- |
| `brand-navy-950` | `#032E57` | Headings, primary text, footer, strong dark anchors |
| `brand-navy-900` | `#073A68` | Dark surfaces, button states, emphasis              |
| `brand-navy-800` | `#234E6E` | Supporting navy, dark hover states                  |
| `brand-navy-700` | `#365F7E` | Secondary navy accents                              |
| `brand-teal-700` | `#237E89` | Links, active states, icons, accents                |
| `brand-teal-600` | `#2B9198` | Interactive teal, focus states                      |
| `brand-teal-500` | `#45A5AA` | Decorative accents and highlights                   |
| `brand-teal-300` | `#A6CDD0` | Soft decorative teal                                |

### Surface and text tokens

| Token            | Hex       | Primary use                              |
| ---------------- | --------- | ---------------------------------------- |
| `surface-white`  | `#FFFFFF` | Cards, forms, header                     |
| `surface-main`   | `#FBFCFC` | Default page background                  |
| `surface-soft`   | `#F1F8F8` | Alternating sections, soft card surfaces |
| `surface-teal`   | `#E8F4F4` | Highlight backgrounds, selected states   |
| `border-soft`    | `#D5E5E6` | Borders, dividers, input outlines        |
| `text-primary`   | `#032E57` | Headings, body emphasis, navigation      |
| `text-secondary` | `#495D79` | Body copy and supporting content         |
| `text-muted`     | `#6E8293` | Metadata, captions, secondary labels     |

### Usage ratio

As a visual starting point, target approximately 65% white/off-white, 20% navy, 10% teal, and 5% borders/neutrals. Teal is an accent, not the default background.

Use full-width navy sections sparingly: final appointment CTA, footer, selected service highlight, or one hero accent panel. Avoid bright cyan, royal blue, purple, red, and generic blue gradients. WhatsApp green is reserved for WhatsApp actions only.

## 4. Typography

- Primary family: `Montserrat`
- Fallbacks: `Inter`, `Arial`, `sans-serif`
- Weights: 400 body, 500 navigation/labels, 600 buttons/card titles, 700 headings
- Do not use weights above 700

| Role       | Size                          |
| ---------- | ----------------------------- |
| Display    | `clamp(2.6rem, 6vw, 5rem)`    |
| H1         | `clamp(2.3rem, 5vw, 4.3rem)`  |
| H2         | `clamp(1.9rem, 4vw, 3.2rem)`  |
| H3         | `clamp(1.3rem, 2vw, 1.65rem)` |
| Body large | `1.125rem`                    |
| Body       | `1rem`                        |
| Small      | `0.875rem`                    |
| Eyebrow    | `0.75rem`                     |

Headings use navy, tight but readable line height, and `letter-spacing: -0.02em` at large sizes. Highlight selected words or ampersands in teal. Avoid all caps for large headings. Clinic eyebrow labels may be uppercase with `letter-spacing: 0.22em`, teal text, and optional short horizontal rules.

Body copy uses `1.65–1.75` line height, a maximum width of about `65ch`, and secondary navy-grey rather than pure black.

## 5. Layout and spacing

- Container max width: `1200px`
- Horizontal padding: `18px` mobile, `24px` standard, `32px` large screens
- Section padding: `72px` mobile, `96px` tablet, `120px` desktop
- Preferred narrow text width: `680px`
- Preferred standard content width: `900px`
- Use a 12-column desktop grid when it improves hierarchy

Content should breathe. Do not run text or controls edge-to-edge. A typical section should have one clear visual anchor, a readable content measure, and enough space for scanning.

## 6. Shape, borders, and elevation

Use soft professional geometry inspired by the logo:

- Buttons: `999px` or `14px`
- Cards: `20px`
- Feature blocks: `28px`
- Images: `24px`
- Small controls: `10px`
- Standard border: `1px solid var(--border-soft)`
- Card shadow: `0 14px 40px rgba(3, 46, 87, 0.08)`
- Elevated CTA shadow: `0 18px 50px rgba(3, 46, 87, 0.16)`

Use circles selectively for icon holders, clinician portraits, trust indicators, and step numbers. Curved decorative lines should be subtle and CSS-based where possible. Do not make every element a pill, and do not use heavy black shadows or glassmorphism.

## 7. Components

### Buttons

Primary buttons use navy with white text, a teal or lighter-navy hover state, a 48px minimum height, and 24px horizontal padding. Secondary buttons use a transparent or white background with navy text and a navy/teal border. All buttons need a 44px minimum tap target, visible keyboard focus, and a subtle transition.

### Service cards

Use white or soft-teal surfaces, navy titles, teal outline icons, soft borders, 20px radius, comfortable padding, and minimal shadow. On hover, raise by only 2–4px and shift the border toward teal. Use no more than three cards per desktop row.

### Icons

Use one consistent outline library: Lucide. Use rounded strokes around `1.75px`, in navy or teal. Do not use emojis or filled multicolour illustrations as production icons.

### Header

Desktop header: white or translucent white, navy logo/navigation, teal active state, prominent navy appointment button, and approximately 80px maximum height. Sticky behavior is acceptable when it remains light; on scroll add only a subtle border or soft shadow. Mobile navigation must be simple, readable, keyboard accessible, and easy to close.

### Forms

Inputs use white backgrounds, navy text, `12px` radius, soft teal-grey borders, 48px minimum height, and a teal focus ring: `0 0 0 3px rgba(43, 145, 152, 0.28)`. Labels must appear above fields; placeholders cannot be the only labels. Validation errors may use restrained accessible red.

## 8. Page patterns

### Hero

Use a warm-white or pale-teal background, navy headline, selective teal emphasis, a clear appointment CTA, a secondary call/WhatsApp action, one strong real clinic or physiotherapy image, and subtle curved logo-inspired decoration. Avoid generic blue gradients.

Suggested headline treatment: “Move Better. Live With Less Pain.”

### Sections

Alternate `surface-white`, `surface-main`, and `surface-soft`. Reserve navy full-width sections for major calls to action. Eyebrows should echo the logo subtitle: uppercase, teal, wide tracking, optionally framed by short lines.

### Imagery

Prefer real clinic photography: assessment, guided rehabilitation, mobility exercises, and Dr. Laiba interacting professionally with patients in clean, naturally lit environments. Avoid surgery imagery, skeleton stock art, corporate hospital photography, fake AI clinicians, and heavy blue overlays. Images use the same soft rounded corners as cards.

## 9. Logo rules

Provide slots for the full horizontal desktop logo, compact mobile mark, white logo on navy, and circular favicon/social mark. Preserve aspect ratio and clear space. Only use approved navy, teal, and white versions. Never place the full logo inside another decorative shape or recolour it arbitrarily.

## 10. Motion and accessibility

Motion is restrained: 150–250ms transitions, gentle fade/translate, no parallax, constant floating objects, or large entrance sequences. Respect `prefers-reduced-motion` by disabling non-essential animation.

Maintain WCAG AA contrast. Do not use teal text on pale teal surfaces unless verified. Use navy for most body text. Keep focus rings clearly visible on every interactive control.

## 11. Implementation contract

Import [`src/styles/theme.css`](../src/styles/theme.css) as the baseline theme, then expose the same variables through the global theme or Tailwind configuration. The shared theme includes the colour, type, spacing, radius, shadow, focus, motion, and container tokens.

Example token shape:

```css
:root {
  --color-brand-navy: #032e57;
  --color-brand-teal: #2b9198;
  --color-surface-main: #fbfcfc;
  --color-surface-soft: #f1f8f8;
  --color-text-primary: #032e57;
  --color-text-secondary: #495d79;
  --radius-card: 20px;
  --shadow-card: 0 14px 40px rgba(3, 46, 87, 0.08);
  --container-width: 1200px;
}
```

Components must consume shared tokens and primitives. Do not introduce one-off hex values, arbitrary radii, or page-specific button styles without updating this spec.

## 12. Completion checklist

- [ ] All pages use Montserrat and the shared type scale.
- [ ] Headings and primary text use navy consistently.
- [ ] Teal is an accent, not a dominant background.
- [ ] Buttons, cards, controls, and focus states share primitives.
- [ ] Cards use consistent radii, borders, padding, and hover movement.
- [ ] Logo variants are never stretched, squashed, or improvised.
- [ ] No unrelated colours or generic gradients appear.
- [ ] Mobile layouts remain spacious and readable.
- [ ] Keyboard navigation and WCAG AA contrast are verified.
- [ ] Reduced-motion behavior is implemented.
- [ ] The result visibly connects to the supplied knee-and-spine logo.
