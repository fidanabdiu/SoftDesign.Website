# SOFT DESIGN Website

Production website for SOFT DESIGN, Fidan Abdiu's independent software engineering practice in Pristina, Kosovo. The site presents C#/.NET services, selected project experience, technical expertise, ways of working, and direct contact options.

- **Live domain:** [https://www.softdesign-ks.com/](https://www.softdesign-ks.com/)
- **Hosting:** GitHub Pages
- **Stack:** semantic HTML, CSS, and vanilla JavaScript; no build step or runtime dependencies

## Features

- Responsive homepage, selected project portfolio, and three canonical service pages.
- Eight static legacy service pages that guide old URLs to their current destinations.
- Progressive mobile navigation, native expandable content, and an accessible project inquiry form that creates an email draft. The site does not receive or store inquiries.
- Locally hosted logo, icon, social preview, and profile image assets.
- Search metadata, JSON-LD, sitemap, robots rules, and a GitHub Pages 404 page.

## Repository layout

```text
.
├── index.html, 404.html, CNAME, robots.txt, sitemap.xml
├── portfolio/                   # selected project experience
├── services/                    # canonical and legacy service routes
├── css/                          # shared styles and responsive rules
├── js/                           # small progressive enhancements
├── assets/
│   ├── brand/social/             # brand masters and social/platform exports
│   ├── icons/                    # favicon, app icon, social avatar
│   ├── images/                   # profile portrait
│   └── logos/                    # website logo variants
├── docs/                         # engineering and operations guides
└── .github/workflows/pages.yml   # static GitHub Pages deployment
```

The previous source archive is no longer included in this repository. The Pages workflow copies the complete `assets/` directory, including the brand export library, into the published site. Do not store private or unpublished materials there.

## Local development

No installation is required. From the repository root, run Python 3:

```powershell
python -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/). For a project-site path simulation, serve the parent directory and open `http://localhost:8000/SoftDesign.Website/`:

```powershell
python -m http.server 8000 --directory ..
```

Edit the HTML pages, shared CSS in `css/`, or the progressive enhancements in `js/main.js`. Keep local links relative and preserve the current content, routes, visual identity, and accessibility behavior. See [Development guide](docs/development-guide.md) for common tasks and validation steps.

## Validation

There is no package manager, compiler, test runner, or linter. Review source and serve the site locally over HTTP. The manual checks and their limits are described in [Development guide](docs/development-guide.md) and [Maintenance](docs/maintenance.md). Do not describe the external deployment, DNS, HTTPS, or live site as verified without checking those systems.

## Deployment and domain

Pushes to `main` trigger the GitHub Actions workflow, which copies only production site files into a Pages artifact and deploys it. GitHub repository settings must allow GitHub Actions as the Pages source. `CNAME` contains `www.softdesign-ks.com`; the workflow copies it to the artifact root. Keep the existing GoDaddy DNS records and the old Pages deployment until the new repository's deployment, domain, and HTTPS have been confirmed. See [Deployment](docs/deployment.md).

## Documentation

- [Architecture](docs/architecture.md)
- [Development guide](docs/development-guide.md)
- [Deployment](docs/deployment.md)
- [SEO](docs/seo.md)
- [Maintenance](docs/maintenance.md)
- [Codex and contributor instructions](AGENTS.md)

## Maintenance

Keep documentation aligned with actual site behavior and hosting configuration. Do not add frameworks, dependencies, a backend, tracking, or a build system without a demonstrated requirement and owner review. Do not add credentials or development-only files to the published artifact.
