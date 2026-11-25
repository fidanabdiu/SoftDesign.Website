# Maintenance

## Routine content changes

Keep business and project claims grounded in the site's current verified content and supplied source material. Update repeated navigation consistently. Keep the contact flow clear that it opens an email draft and the visitor must manually send it.

## Assets and browser support

Use local, optimized runtime assets with descriptive filenames and alternatives. Preserve image dimensions and lazy-load below-the-fold media where appropriate. Keep brand masters and social/platform export variants organized under `assets/brand/social/`. The deployment workflow publishes the complete `assets/` tree, so confirm every added file is suitable for public access. Avoid remote fonts and third-party scripts. Review responsive CSS at desktop, tablet, and narrow mobile widths, including 320px and 390px.

## Security and privacy

The site has no backend or data store. Do not add credentials, secrets, analytics, external form services, or network integrations without an explicit requirement and review. External links opened in new tabs should retain `rel="noopener noreferrer"`. Do not use unsafe dynamic HTML execution.

## Dependencies and updates

There are no application dependencies to update. GitHub Actions references official Pages actions at stable major versions; review their supported versions and repository policy when maintaining deployment. Keep workflow permissions minimal and keep staging allowlisted.

## Backup, recovery, and rollback

The former `oldwebsite/` source archive has been removed and is not part of this repository. Do not assume it is available or recreate it unless the owner asks. Consult available Git history or owner-provided backups if historical source is needed. For a deployment regression, inspect the workflow and Pages logs, then restore the prior known-good Pages configuration while correcting the new source. Do not retire the old deployment until the new site and domain have been confirmed.

## Troubleshooting

- A broken nested-page asset usually indicates an incorrect relative path; verify from the page's directory depth.
- A missing legacy URL may indicate the route was omitted from the workflow's `services/` copy or changed accidentally.
- A failed inquiry draft may depend on the visitor's mail application. The direct email link remains the fallback; the site cannot confirm delivery.
- A missing custom-domain certificate is an external Pages/domain configuration issue, not a local source validation result.

## Pre-deployment checklist

- [ ] Review content, routes, links, and referenced assets.
- [ ] Confirm CNAME and canonical host remain `www.softdesign-ks.com`.
- [ ] Parse sitemap XML and page JSON-LD; check metadata consistency.
- [ ] Inspect mobile and desktop layouts and keyboard behavior when browser access is available.
- [ ] Verify email-draft wording without sending a message.
- [ ] Confirm the workflow stages only production directories and files; exclude docs and other development-only content.
- [ ] Review Git diff and ensure no secrets, caches, or unnecessary files are included.
- [ ] After owner deployment, inspect Actions, Pages, custom domain, HTTPS, routes, sitemap, and robots.
