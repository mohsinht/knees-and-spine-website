# Knees & Spine Physio Clinic

Production-ready v0 website for Knees & Spine Physio Clinic in Canal Garden, Lahore. Built with Astro, TypeScript, Tailwind CSS v4, and a static Cloudflare Pages build.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321` in a browser.

## Scripts

- `npm run dev` — start the local development server
- `npm run build` — type-check and create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
- `npm run format` — format source files with Prettier
- `npm run format:check` — check formatting without changing files
- `npm run typecheck` — run Astro’s TypeScript checks

## Structure

```text
src/
  components/  reusable Astro UI components
  data/        centralized clinic details and page content
  layouts/     BaseLayout for SEO, shell, and global styles
  pages/       route pages: /, /services, /about, /contact, /privacy
  styles/      Tailwind entry point and design tokens
public/        favicon, Open Graph placeholder, and robots.txt
```

## Updating content and brand assets

Edit `src/data/clinic.ts` first. It is the single source for the phone, WhatsApp number, email, address, map link, hours, and social URLs. Edit `src/data/content.ts` for services, FAQs, conditions, testimonials, and navigation.

Replace `public/favicon.svg` and `public/og-image.svg` with the final brand assets. A future clinic logo or photography can be added to `public/images/` and used with Astro’s image tooling when real assets are available.

## Cloudflare Pages

1. Create a Cloudflare Pages project connected to the GitHub repository.
2. Set the production branch to `agent/initial-clinic-website` for preview review, then switch to the approved default branch after merge.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Use Node.js 20 or newer. Set `PUBLIC_SITE_URL=https://kneesandspine.com` as a production environment variable.

For `kneesandspine.com`, add the domain under Pages → Custom domains, then follow Cloudflare’s DNS instructions. The Astro sitemap and robots file already use the production site URL.

## Future form integration

The contact form currently validates in the browser and intentionally does not send data. Connect `src/pages/contact.astro` to a Cloudflare Pages Function, a privacy-reviewed form provider, or a clinic booking system. Add server-side validation, spam protection, consent copy, retention rules, and a real success/error state before collecting patient information.

## Before launch

Replace the marked contact placeholders in `src/data/clinic.ts`, add verified testimonials only with permission, confirm opening hours and map coordinates, add the clinician’s approved biography and registration details, review the privacy policy, and replace the favicon/Open Graph placeholders.
