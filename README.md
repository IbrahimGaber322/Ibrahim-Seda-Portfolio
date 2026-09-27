# Ibrahim Gaber — Portfolio

Personal portfolio of Ibrahim Gaber, Technical Lead & Full Stack Engineer. Built with React (Create React App) and plain CSS, with MUI icons, EmailJS for the contact form and a custom dark design system.

## Scripts

- `npm start` — run the dev server
- `npm run build` — production build
- `npm run cv` — regenerate `src/cv/IbrahimGaber.pdf` from `cv-source/IbrahimGaber.html` (needs Chrome or Edge; set `CHROME_PATH` if it isn't found)

## Editing content

Site content lives in `src/constants/`:

- `profile.js` — bio, experience, education, links
- `skills.js` — skill groups
- `projects.js` — portfolio projects

The contact form expects `REACT_APP_EJS_SERVICE_ID`, `REACT_APP_EJS_TEMPLATE_ID` and `REACT_APP_EJS_PUBLIC_KEY` in `.env`.

## Analytics

Visitor analytics use [Umami](https://umami.is) (cookie-free, no consent banner needed). Set `REACT_APP_UMAMI_WEBSITE_ID` in `.env` and in the hosting provider's environment; it only loads in production builds. Custom events (CV downloads, project previews/demos/code, social links, copy email, contact form) come from `data-umami-event` attributes.

Tip: tag links you share so they show up as separate sources, e.g. `https://ibrahimgaber.onrender.com/?utm_source=linkedin`.

The social share image `public/og-image.png` is rendered from `cv-source/og-image.html`.
