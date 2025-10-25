# Portfolio - Paul Orieux

This repository contains a personal portfolio implemented with Vue 3 and Vite. It presents projects, studies (archaeology + IT), and contact information.

## Quick summary
- Framework: Vue 3 (Vite)
- Styles: SCSS, central variables at `src/styles/_variables.scss` and runtime CSS custom properties mapped in `src/styles/main.scss`
- Router: `vue-router` (routes live in `src/router/index.js`)
- Pages: `src/views` - Home, Projects, Studies, About, Contact
- Components: `src/components` - `SiteHeader.vue`, `SiteFooter.vue`

## Run locally (Windows PowerShell)
1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Build & preview

```powershell
npm run build
npm run preview
```

Notes:
- The `package.json` defines engine targets (Node) - use a current Node 20+ or the version specified.

## Project structure & where to edit content
- `index.html` - site meta, fonts, favicon and OG tags.
- `src/main.js` - app bootstrap and global styles import.
- `src/router/index.js` - routes/paths. Change slugs here and update `router-link`s in `SiteHeader.vue` if you rename routes.
- `src/views/*.vue` - main page contents. Edit text, project descriptions and images here.
- `public/` - static assets (images, icons, PDFs). Example: the CV PDF is located at `/assets/Paul Orieux - CV 10_2025.pdf` and linked from `SiteFooter.vue`.

## Design choices
- Visual identity leans on a heritage motif (parchment texture on the home hero) with serif display headings and a sans body font (Inter), to communicate archaeology background + modern data skills.
- Colors and typography are centralized with SCSS variables; update `src/styles/_variables.scss` to change the palette globally.
- Interactive skill cards use native `<details>`/`<summary>` for accessibility and minimal JS.
