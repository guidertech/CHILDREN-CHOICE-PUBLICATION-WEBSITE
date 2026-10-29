# Children Choice Publication Pvt. Ltd.

Marketing website for the publisher, built with the Next.js App Router, React, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` to create a production build and `npm start` to serve it.

## Main routes

- `/`: publisher introduction, book collections, company group, impact figures, and footer.
- `/about`: publisher story, leadership, team, and impact figures.
- `/books/[category]`: searchable series catalog for a book collection.
- `/books/[category]/[series]`: series order request form.

## Project structure

- `src/app/`: routes, metadata, and global stylesheet.
- `src/components/`: shared navigation, book forms, page sections, and footer.
- `src/data/`: book collections, series, navigation, and company details.
- `public/assets/`: live book covers, company logos, school logos, and series logos.
- `.agent/`: project architecture, flow, asset, and implementation notes.

## Current limitations

Series outside English Medium still use placeholder names. The order form validates in the browser but does not send or store submissions. Use only publisher-approved catalogue claims and configured contact destinations.
