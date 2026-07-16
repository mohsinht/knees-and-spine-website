# Agentss.md — Website Design Navigation Guide

This file is the operating guide for any agent designing or implementing the Knees & Spine Physio Clinic website.

## Source of truth

Read [`docs/design-system.md`](docs/design-system.md) and [`src/styles/theme.css`](src/styles/theme.css) before creating or changing UI. If an implementation decision is not covered, preserve the same intent: light clinical surfaces, navy hierarchy, teal accents, soft curves, readable spacing, and calm motion.

The supplied logo is the brand reference. Use `public/brand/logo-full.png` on light surfaces, `logo-full-white.png` on navy surfaces, `logo-icon.png` for compact placements, and `favicon.png` for favicon/app identity. Treat approved assets and proportions as immutable.

## Navigation order

1. Inspect the existing Astro routes, layouts, global styles, assets, and package configuration.
2. Identify whether the needed pattern already exists before creating a new component.
3. Check the relevant section of `docs/design-system.md` for tokens, typography, spacing, shape, and behavior.
4. Build from shared primitives: container, section, eyebrow, button, card, icon, form field, and responsive navigation.
5. Use semantic tokens from `src/styles/theme.css` in global CSS/Tailwind theme; never hardcode brand hex values inside page components.
6. Verify desktop, tablet, and mobile states plus keyboard focus and reduced motion.
7. Run the project checks before handoff: `npm run typecheck`, `npm run lint`, and `npm run build`.

## Design decisions

- Prefer clarity and appointment conversion over decoration.
- Use navy for hierarchy and trust; use teal for action, focus, links, and accents.
- Keep backgrounds mostly white/off-white. Use navy full-width areas only as intentional anchors.
- Prefer real physiotherapy evidence and human clinic imagery over generic medical stock.
- Use Lucide outline icons with consistent stroke weight; never use emoji icons.
- Keep cards to three per desktop row and interactions to 2–4px movement.
- Make all actions readable for older patients: strong contrast, clear labels, generous targets, and no placeholder-only forms.

## Anti-patterns

Do not add purple/royal-blue gradients, bright cyan, hospital-blue visual language, glassmorphism, heavy black shadows, parallax, constant floating decoration, oversized all-caps headings, distorted logos, or arbitrary one-off component styles.

## Handoff format

When finishing a UI task, report:

- routes and components changed;
- new tokens or primitives added;
- responsive and accessibility checks performed;
- remaining content or asset assumptions;
- commands run and their results.

If a requested visual conflicts with the design system, call out the conflict and propose the smallest compatible interpretation before proceeding.
