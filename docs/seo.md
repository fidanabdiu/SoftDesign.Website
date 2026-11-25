# SEO

## Canonical host and indexable pages

The canonical host is `https://www.softdesign-ks.com/`. The sitemap lists five canonical URLs: the homepage, three service pages, and portfolio. The 404 page and eight legacy service fallback pages are not sitemap entries; the fallbacks use `noindex,follow` and point to canonical destinations.

## Page metadata

Each indexable page has a descriptive title, meta description, canonical URL, Open Graph and Twitter preview metadata, and JSON-LD. The homepage describes the website and SOFT DESIGN business entity; portfolio and service pages use `WebPage`, with service pages describing their respective service and provider. Keep all statements aligned with page content. Never add unverified ratings, reviews, prices, hours, outcomes, or credentials.

Social preview images use the local social avatar at the canonical host. Meaningful portrait imagery retains descriptive alternative text; social metadata does not replace image alternatives.

## Sitemap and crawler rules

`sitemap.xml` is valid XML and lists the five canonical URLs. Keep it at the site root and update it when indexable routes change. `robots.txt` allows crawling and declares `https://www.softdesign-ks.com/sitemap.xml`. These crawler hints do not protect content: the deployment workflow must publish only the intended production files.

## Structured data and language

JSON-LD is embedded per page and should be parsed as JSON after changes. The public pages declare English using `<html lang="en">`. Structured data must remain factual and consistent with visible text; it does not guarantee search result features.

## Internal links and legacy URLs

Use descriptive internal links and relative paths. Preserve stable homepage anchors and the eight legacy service routes. GitHub Pages serves these fallback HTML files as ordinary documents; meta refresh is not an HTTP redirect status.

## Search Console and maintenance

Google Search Console setup, ownership verification, sitemap submission, indexing status, and search performance are account-level tasks and were not verified in this repository. The owner can add the production sitemap after the canonical domain is live. Avoid adding verification files or DNS records without authorization.

When changing a page, check canonical, title, description, social URL/image, JSON-LD, internal links, sitemap, and robots references together. Keep `CNAME` exactly aligned with the canonical host. Canonical metadata does not itself redirect HTTP or non-www requests.
