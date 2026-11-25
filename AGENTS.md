# SOFT DESIGN Website — Engineering Guide

## Project context

This repository contains the public static website for SOFT DESIGN, Fidan Abdiu's independent C#/.NET software engineering practice in Pristina, Kosovo. It describes custom software, SaaS development, direct software outsourcing/team augmentation, selected experience, and contact options. Public URL: `https://www.softdesign-ks.com/`.

The website is content-led and hosted by GitHub Pages. Preserve its factual business positioning, existing routes, copy, visual identity, behavior, and accessibility. This is a maintenance repository, not a redesign brief.

## Stack and architecture

- Use semantic HTML5, CSS3, and dependency-free vanilla JavaScript only.
- Pages are static files. There is no server, backend, package manager, compiler, bundler, test runner, or external runtime script.
- `index.html` is the homepage; `portfolio/index.html` is the selected-project page; three canonical service pages live under `services/`.
- Eight service migration pages preserve former URLs. `404.html` is the static not-found page.
- `css/styles.css` holds shared tokens and components. `css/responsive.css` holds viewport rules. `js/main.js` enhances mobile navigation, copyright year, and email-draft form behavior.
- GitHub Actions stages an explicit set of production files in `_site` and deploys that directory. `docs/`, repository instructions, and development files must never enter the artifact. There is no historical archive directory in this repository.

## Repository map

```text
index.html                         homepage and inquiry form
portfolio/index.html               selected project experience
services/                           canonical pages and legacy URL fallbacks
css/styles.css                      tokens, shared components, page layouts
css/responsive.css                  tablet/mobile rules and breakpoints
js/main.js                          progressive enhancements
assets/brand/social/                brand master files and platform exports
assets/logos/                       website SVG logo variants
assets/icons/                       favicon, app icon, and social avatar
assets/images/                      supplied profile portrait
404.html                            GitHub Pages not-found page
CNAME, robots.txt, sitemap.xml      domain and crawler configuration
.github/workflows/pages.yml         Pages deployment
docs/                               current project documentation
```

## Content and HTML

- Preserve all factual service, expertise, work-history, project, contact, and location content. Do not invent clients, outcomes, credentials, availability, prices, guarantees, or endorsements.
- Use semantic landmarks, one descriptive `<h1>` per page, a logical heading order, explicit form labels, keyboard-operable controls, and descriptive alternatives for meaningful images.
- Keep primary content and navigation available without JavaScript. JavaScript is an enhancement, not a rendering requirement.
- The inquiry form validates in the browser and opens a prefilled email draft. It does not submit to a server or store data. Never show a success state that implies receipt; explain that the visitor must review and send the email.
- Keep the portfolio's project summaries grounded in the supplied material; do not imply sole ownership of collaborative work.
- Preserve the eight legacy service URLs, their `noindex,follow` behavior, canonical destinations, relative fallback links, and meta-refresh behavior unless route migration is explicitly planned.

## CSS and visual identity

- Preserve the existing navy, purple/violet, lavender, off-white, and neutral palette; spacing, typography, components, responsive composition, and restrained motion.
- Use the existing local system sans-serif and monospace stacks. Do not add remote fonts, stock art, or unrelated branding.
- Put shared tokens and component styles in `styles.css`; put viewport-specific overrides in `responsive.css`.
- Keep visible focus treatment, readable contrast, reduced-motion support, and the current narrow-screen navigation behavior.
- Do not make broad visual changes or redesign pages during repository maintenance.

## JavaScript

- Keep scripts small, dependency-free, and defensive when optional page elements are absent.
- Preserve native validation and email-draft behavior, including the long-draft selectable-text fallback.
- Do not add analytics, network calls, dynamic HTML execution, credentials, or third-party scripts without an explicit requirement and appropriate review.

## Assets and paths

- Website runtime assets belong under `assets/{logos,icons,images}/`; brand source and platform export files belong under `assets/brand/social/`.
- The Pages workflow copies all of `assets/`, including `assets/brand/social/`. Treat every file there as public and do not store confidential or unpublished materials in it.
- Use relative paths so pages work at the custom domain and under the GitHub project path. Never add local filesystem paths.
- Preserve intrinsic image dimensions where provided, alternatives, and lazy-loading behavior for below-the-fold imagery.
- Keep production pages and assets self-contained in the current repository; do not depend on external copies of the former source.

## SEO and URL policy

- Canonical host is exactly `https://www.softdesign-ks.com/`; `CNAME` must contain exactly `www.softdesign-ks.com` with no protocol, path, or extra value.
- Keep canonical, Open Graph, Twitter, JSON-LD, sitemap, and robots URLs consistent with the canonical host. Keep page-specific metadata unique and factual.
- Sitemap contains the homepage, three canonical service pages, and portfolio. Exclude 404 and legacy migration pages.
- `robots.txt` allows normal crawling and points to the canonical sitemap. It is not access control; deployment must publish only the intended production files.
- Do not claim static GitHub Pages meta-refresh pages are HTTP redirects. Do not assume canonical tags enforce host or HTTPS redirects.

## GitHub Pages and domain protection

- Keep the production domain `www.softdesign-ks.com`. Do not edit GoDaddy DNS, account settings, GitHub repository settings, or the old Pages deployment.
- Keep root site paths and `CNAME` valid. The workflow publishes only an explicit allowlist to `_site`; do not replace it with a whole-repository artifact.
- Do not commit or push unless asked. Do not include secrets or credentials.
- Keep the old repository and its Pages service available until the owner confirms the new deployment, custom domain, and HTTPS.

## Accessibility, responsive design, and performance

- Preserve semantic structure, accessible names, native controls, focus indicators, keyboard operation, reduced-motion support, and progressive enhancement.
- Preserve breakpoints at 1020px, 780px, 560px, and 360px unless a measured issue justifies a change.
- Keep assets local and modest in size; avoid unnecessary scripts, libraries, and network requests.
- Do not claim a WCAG audit, performance score, or device test without running it.

## Development and validation

- Run a local static server with `python -m http.server 8000`; there are no dependencies to install.
- For relevant changes, inspect all affected routes and verify local asset/link paths, fragments, page metadata, sitemap XML, JSON-LD JSON, legacy route behavior, and JavaScript syntax.
- When browser tooling is available, inspect desktop and mobile layout, keyboard navigation, console errors, menu state, and form validation/draft wording. Do not send a real inquiry.
- Report checks that were actually run and distinguish source inspection from browser, accessibility, DNS, Pages, or production verification.
- Do not add or run tests unless the user asks to test or verify implementation.

## Documentation and future Codex work

- Read this guide and the relevant `docs/` page before changing behavior or hosting.
- Preserve the current user experience and production domain; avoid unnecessary redesign and refactoring.
- Keep pure HTML, CSS, and JavaScript. Add a dependency only when a concrete requirement cannot be met simply and document the reason.
- Do not recreate the removed `oldwebsite/` archive unless the owner explicitly requests it. If historical source is needed, consult available Git history or ask the owner for the source.
- Update README and relevant docs whenever architecture, behavior, routes, SEO, or deployment changes.
- Verify affected behavior before calling a change complete, and state any external checks that remain outstanding.
