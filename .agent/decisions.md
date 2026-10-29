# Architecture decisions and open work

## Recorded conventions

1. **Next.js App Router remains the routing model.** Keep the marketing experience on `/` unless product scope expands.
2. **Tailwind is the component styling system.** The live page now uses Tailwind 4 utilities, and `globals.css` contains only the Tailwind import and browser-wide base rules. Avoid adding component selectors or one-off generic CSS.
3. **Use `lucide-react` icons.** It is already installed and matches the icon convention used by shadcn/ui. shadcn/ui itself is not installed; add only components that are actually needed.
4. **Assign each animation a clear owner.** Framer Motion owns live UI transitions, card motion, and count-up effects. The unused GSAP and React Three Fiber prototypes were removed from source and their packages were uninstalled.
5. **Use the current supported Next.js stable release.** The project uses Next.js 16 with React 19. Dev and build scripts select Turbopack.
6. **No unverified commerce/contact/media links.** The owner must provide real destinations before those controls are enabled.
7. **Shared visual system:** use the palette and reusable CSS/Tailwind utilities in `src/app/globals.css`, with primary navy and royal blue accents, sky and ice blue surfaces, white backgrounds, and readable navy/muted text. Prefer Plus Jakarta Sans for headings and Inter for body text with local Poppins fallback. Primary actions use royal blue; the WhatsApp contact action keeps its brand green. Use Tailwind utilities for section-specific styling.
8. **Book collection routes:** the owner requested clickable Hindi Medium, English Medium, Spiritual Books, and Lab Manuals cards. The Spiritual Books catalog now uses the owner-supplied titles and covers for Bharat Ki Khoj, Bal Ramayana, and Bal Mahabharata; their existing series route IDs remain stable. The series route opens a local-only order form when no matching PDF is available. Do not imply order submission until a backend is configured.

## Open product inputs

- Confirm approved feature claims for the six early-learning kits shown in the home hero; the supplied cover images show branding and product names but are not a source for unverified educational claims.
- Supply production book-cover imagery, accurate catalogue features, contact details, any sample-book destination, and video assets/destinations.
- Supply any remaining official series titles and an approved order submission service or destination.
- Consider a real-time 3D scene only if a future design needs it; the current home hero uses lightweight Framer Motion transforms.

## Upgrade notes

Next.js 16 uses Turbopack by default. Do not introduce old `experimental.turbo` configuration. Tailwind 4 requires the separate `@tailwindcss/postcss` plugin and `@import "tailwindcss"`; its advisories are clear in the updated dependency audit. Package versions are recorded in `package.json` and `package-lock.json`.

