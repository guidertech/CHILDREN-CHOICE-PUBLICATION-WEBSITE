# System architecture

## Current system

This is a Next.js App Router site. `/` is the marketing home page and `/about` is the publisher profile. Both routes use the shared `ImpactStats` section, `SiteHeader`, and `SiteFooter`. The category and series routes also use `SiteHeader`. The root layout renders a fixed WhatsApp sample-kit link to +91 7618181877; it hides while the matching CTA in the shared footer is visible. `SiteHeader` provides the navy bar, Our Books dropdown, collection search, publisher feature buttons, Contact Us action, and responsive mobile navigation. Publisher feature links remain disabled until their environment URLs are configured.

The home route contains the hero book collage, four subject collection cards, the auto-scrolling school-logo carousel, company cards, impact figures, and footer. Collection cards link to `/books/[category]`; those pages show searchable series. Spiritual Books lists the Bharat Ki Khoj, Bal Ramayana, and Bal Mahabharata covers. A series opens `/books/[category]/[series]`, where an order form validates fields locally but does not transmit or store submissions.

## Live dependency map

```text
src/app/layout.tsx
  ├─ src/app/globals.css
  ├─ src/components/ui/BackgroundAtmosphere.tsx
  └─ src/components/navigation/WhatsAppCTA.tsx

src/app/page.tsx
  ├─ src/components/navigation/SiteHeader.tsx
  │   └─ src/components/navigation/NavigationLinks.tsx
  ├─ src/data/collections.ts
  ├─ src/data/associatedCompanies.ts
  ├─ src/components/sections/SchoolLogoCarousel.tsx
  ├─ src/components/sections/ImpactStats.tsx
  └─ src/components/ui/SiteFooter.tsx

src/app/books/[category]/page.tsx
  ├─ src/components/navigation/SiteHeader.tsx
  │   └─ src/components/navigation/NavigationLinks.tsx
  ├─ src/data/collections.ts
  ├─ src/data/collectionSeries.ts
  └─ src/components/books/SeriesCatalog.tsx

src/app/books/[category]/[series]/page.tsx
  ├─ src/components/navigation/SiteHeader.tsx
  │   └─ src/components/navigation/NavigationLinks.tsx
  ├─ src/data/collectionSeries.ts
  └─ src/components/books/SeriesOrderForm.tsx

src/app/about/page.tsx
  ├─ src/components/navigation/SiteHeader.tsx
  │   └─ src/components/navigation/NavigationLinks.tsx
  ├─ src/components/sections/ImpactStats.tsx
  └─ src/components/ui/SiteFooter.tsx
```

## Conventions

- Keep the App Router routes and public URLs stable unless the owner requests a route change.
- Store live collection, company, series, and navigation content under `src/data/`.
- Use Tailwind utilities for component styling and Lucide icons.
- Framer Motion owns the global blue atmospheric background, live card motion, local transitions, and impact count-ups. The global background is pointer-transparent and yields to reduced-motion preferences. The school-logo carousel content is grouped within one large blue glass panel.
- The shared design tokens, button utilities, card surfaces, container, spacing, shadows, and CSS motion utilities are defined in `src/app/globals.css`. Use primary navy `#101F3D`, royal blue `#2563EB`, sky blue `#8BD9F8`, ice blue `#EAF5FF`, white, main text `#17243B`, and muted text `#64748B`. Keep controls and links clearly legible, use restrained blue accents, and retain green for the WhatsApp action.
- Keep order forms transparent about their local-only behavior until a submission service is configured.

## Assets

Six supplied early-learning kit covers in `public/assets/covers/` form the circular home hero. Company, school, and English Medium series logos are stored under `public/assets/brand-logos/`, `public/assets/school-logos/`, and `public/assets/series-logos/`; only assets referenced by live route data are retained. No source code imports Three.js, GSAP, or their React integrations.
