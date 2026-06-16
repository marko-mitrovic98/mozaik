# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Mozaik is a React + Vite storefront for **Mitar-komerc**, a Serbian building-materials
showroom (ceramic tiles, doors, laminate, profiles, garrison, materials). UI copy is in
**Serbian**. Prices are in RSD. There is no backend — it is a static SPA deployed on Vercel.

## Commands

- `npm run dev` — Vite dev server with HMR (default port 5173, falls back to 5174+ if busy).
- `npm run build` — production build to `dist/` (sourcemaps on, esbuild minify).
- `npm run preview` — serve the built `dist/`.
- `npm run lint` — ESLint over the repo.

No test framework is configured — verification is manual via the dev server.

Note: `npm run lint` reports many pre-existing errors that reflect the codebase's own
conventions (HTML `class` attribute instead of `className`, unused `React` imports). Don't
treat these as regressions; only worry about *new* error kinds you introduce.

## Architecture

**Routing** — [src/main.jsx](src/main.jsx) defines a `createBrowserRouter`. The whole tree is
wrapped in `<CartProvider>`. Route order matters: static routes (`/cart`, `/about`, `/contact`)
must be declared **before** the dynamic `/:shop` and `/:shop/:id` routes or they get swallowed.
Vercel rewrites all paths to `index.html` ([vercel.json](vercel.json)) so client routing works.

**Data layer — JSON files, no API.** Each product category is a JSON file in
`public/files/<shop>.json` (e.g. `ceramic-tiles.json`, `doors.json`). Pages `fetch()` these by
route param. A product object looks like:
```
{ id, name, category, manufacturer, size, description, colors[], price (string!), cardPicture, pictures[] }
```
`price` is a **string** — coerce with `Number()` for arithmetic. `description` is the basename
of a markdown file in `public/files/descriptions/<shop>/<name>.md`, rendered on the product page
via `react-markdown`. Images live in `public/assets/<shop>/<filename>`.

**Key pages/components:**
- [Shop.jsx](src/pages/Shop.jsx) — listing page (`/:shop`). Holds all filter/search/sort state
  and passes handlers down to `Filter` and `SearchSort`; filtering/sorting happens here, not in
  children. Search is debounced 500ms.
- [Filter.jsx](src/Components/Filter.jsx) — derives filter options (manufacturer/category/size/
  color) dynamically from the fetched product JSON.
- [ProductPage.jsx](src/pages/ProductPage.jsx) — detail page (`/:shop/:id`) with image carousel.
- [CartPage.jsx](src/pages/CartPage.jsx) — inquiry cart + submit form.

**Cart (inquiry, not checkout).** [src/context/CartContext.jsx](src/context/CartContext.jsx)
is the single source of truth: a Context provider persisting `items` to `localStorage`
(`mozaik-cart`). Consume via the `useCart()` hook (`addItem`, `removeItem`, `setQty`,
`clearCart`, derived `count`/`total`). There is **no payment flow** — the cart is submitted as
an email inquiry through **Web3Forms** (`api.web3forms.com`, `access_key` is inlined in
[CartPage.jsx](src/pages/CartPage.jsx) and [ContactPage.jsx](src/pages/ContactPage.jsx)). Reuse
that same submit pattern for any new form.

**Styling — SCSS, no CSS-in-JS for layout.** Entry is [src/styles/main.scss](src/styles/main.scss),
which `@use`s partials from `src/styles/parcels/`. Each partial must `@use 'variables'` /
`'mixins'` itself (they are not globally injected). To add a stylesheet: create
`parcels/_name.scss` and register it with `@use 'parcels/name' as *;` in `main.scss`. The SCSS is
loaded directly via `<link rel="stylesheet" href="src/styles/main.scss">` in
[index.html](index.html), not imported from JS.

**Typography convention.** Font is Montserrat, loaded with only weights **200 / 500 / 900** in
[index.html](index.html). The `font` mixin ([_mixins.scss](src/styles/parcels/_mixins.scss))
snaps any authored weight: `< 500 → 200` (ExtraLight), `>= 500 → 500` (Medium). Headings
(`h1`–`h6`) are forced to `900 !important` globally in `main.scss`. So: headings are Black,
emphasized non-heading text is Medium, body is ExtraLight. Keep using the `font` mixin rather
than raw `font-weight` so this mapping stays consistent.

## Conventions

- The existing JSX mixes HTML `class` and React `className` — match the file you're editing.
- All user-facing strings are Serbian; keep new copy in Serbian to match tone.
- MUI (`@mui/material`, `@mui/icons-material`) and `sweetalert2` are already dependencies; prefer
  them for icons and toasts/dialogs over adding new libraries.
