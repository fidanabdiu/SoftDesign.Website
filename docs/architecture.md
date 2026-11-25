# Architecture

## Overview

The website is a static, multi-page HTML site served directly by GitHub Pages. It has no compile or build phase, server-side code, package manager, or external runtime dependency. GitHub Actions creates a deploy artifact by copying an allowlist of production files into `_site`; this is file staging only.

## Pages and routes

- `index.html` contains the homepage sections: services, technical expertise, experience, about, approach, and contact.
- `portfolio/index.html` describes selected project experience.
- `services/custom-software-development/index.html`, `services/saas-development/index.html`, and `services/software-outsourcing/index.html` are canonical service pages.
- Eight pages under `services/` are legacy route fallbacks. They are marked `noindex,follow`, provide canonical targets, and use a meta refresh plus a visible link because GitHub Pages does not provide per-path server redirects here.
- `404.html` is the custom not-found page.

## CSS

`css/styles.css` contains design tokens, base styles, shared navigation, buttons, sections, form controls, service layouts, and page-specific components. `css/responsive.css` applies layouts for 1020px, 780px, 560px, and 360px breakpoints. The design uses local system font stacks; there are no web font downloads or CSS image URLs.

## JavaScript and runtime behavior

`js/main.js` is a deferred vanilla script. It enhances the mobile menu, updates the displayed copyright year, validates the project inquiry form, and opens a `mailto:` draft. If the draft is too long, it exposes selectable draft text and a copy action. The website does not send, receive, or store form submissions. Content, links, and native disclosure controls remain usable without JavaScript.

## Assets

Website pages reference three SVG logos, two app/social icons, and the supplied profile portrait. `assets/brand/social/` also holds brand masters and platform-specific logo, cover, and profile exports, grouped into `facebook/`, `horizontal/`, `linkedin/`, `masters/`, `source/`, and `square/`. Some of these brand exports are not referenced by page markup. The Pages workflow copies the full `assets/` directory, so the brand export library is published and publicly addressable. Keep confidential or unpublished files elsewhere. The former repository archive is not included in the current repository.

## External dependencies

There are no browser runtime dependencies. The workflow uses GitHub's official Pages actions for artifact upload and deployment. External links to email, telephone, LinkedIn, and GitHub are user-initiated destinations, not page runtime dependencies.

## Important decisions

- Keep static hosting and relative links; no framework or bundler is needed.
- Preserve previous service URLs with static fallback pages.
- Stage only explicit site paths so docs, contributor instructions, Git metadata, and other non-production files cannot be published.
- Keep `www.softdesign-ks.com` canonical and retain the root `CNAME`.
