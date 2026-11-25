# Development Guide

## Prerequisites and local preview

No dependency installation is needed. Python 3 can serve the repository root:

```powershell
python -m http.server 8000
```

Visit `http://localhost:8000/`. To simulate the GitHub project path, serve the parent directory with `python -m http.server 8000 --directory ..` and visit `http://localhost:8000/SoftDesign.Website/`.

## Editing pages and styles

- Edit the homepage in `index.html`, portfolio in `portfolio/index.html`, and service content in its canonical service page.
- Update repeated header/footer navigation consistently across pages.
- Put shared tokens and component rules in `css/styles.css`; put viewport-specific rules in `css/responsive.css`.
- Keep breakpoints and visual styling aligned with the current identity. Avoid broad redesigns.
- Keep JavaScript enhancements in `js/main.js` dependency-free and optional for core content.

## Adding or replacing assets

Place website runtime assets in `assets/logos/`, `assets/icons/`, or `assets/images/`. Keep brand master artwork and platform export variants under `assets/brand/social/`, grouped by use. Use relative paths from each page. Include descriptive `alt` text for meaningful images, preserve intrinsic width/height, and use lazy loading for below-the-fold images when appropriate. The GitHub Actions workflow copies all of `assets/`, so files in the brand directory are published and publicly addressable too; do not place confidential or unpublished materials there.

## Conventions

- HTML: semantic landmarks, one `<h1>`, ordered headings, labels for every form control, keyboard-operable native elements.
- CSS: use existing tokens, system font stacks, visible focus styles, and reduced-motion support.
- JavaScript: small progressive enhancements, no external calls, no dynamic code evaluation, and honest email-draft messaging.
- SEO: keep each canonical page's title, description, canonical, social metadata, JSON-LD, and sitemap entry aligned.
- Content: use only sourced facts; do not invent project outcomes, clients, credentials, or service promises.

## Validation checklist

There is no automated test runner, linter, or build. After relevant edits:

1. Serve over HTTP and inspect each changed route.
2. Check local `href`, `src`, and fragment targets; keep all required content and assets in the current site directories.
3. Parse `sitemap.xml` and JSON-LD; confirm metadata uses the canonical host.
4. Run `node --check js/main.js` if JavaScript changed.
5. Inspect responsive layouts and keyboard/focus behavior when a browser is available.
6. For form changes, verify required-field behavior and draft wording without sending an inquiry.
7. Review the Pages artifact allowlist and confirm it contains only production site files and directories.

Do not call source checks a full browser, accessibility, or production deployment audit.
