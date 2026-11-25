# Deployment

## Hosting and workflow

GitHub Pages hosts the static website. `.github/workflows/pages.yml` runs on pushes to `main` and manual dispatch. It checks out the repository, configures Pages, stages only `index.html`, `404.html`, `CNAME`, `robots.txt`, `sitemap.xml`, and the `assets/`, `css/`, `js/`, `portfolio/`, and `services/` directories, uploads `_site`, and deploys the artifact. The staging step is not a site build. `docs/`, README, AGENTS, Git files, and all other non-allowlisted content are excluded by construction. The former `oldwebsite/` archive is not present in the repository.

Because the workflow copies the entire `assets/` directory, it includes `assets/brand/social/` even where an export is not referenced by a page. All files in that directory are public after deployment; store only materials intended for public access there.

The workflow uses `actions/checkout@v6`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v4`, and `actions/deploy-pages@v4`. The staging job gets `contents: read` and `pages: read`; deployment receives `pages: write` and `id-token: write`. Concurrent deployments are serialized and the in-progress deployment is allowed to finish.

## Required GitHub configuration

The repository owner must:

1. Confirm the new repository is `fidanabdiu/SoftDesign.Website` and the intended branch is `main`.
2. In **Settings → Pages**, select **GitHub Actions** as the build and deployment source.
3. Keep the repository's existing Actions policy compatible with the official Pages actions used by the workflow.
4. After the first successful deployment, confirm the Pages domain setting is `www.softdesign-ks.com` and HTTPS enforcement is available/enabled.

This repository has not been connected to or changed through GitHub settings by this migration.

## Custom domain and DNS

`CNAME` contains exactly `www.softdesign-ks.com` and is copied to the published artifact root. Existing GoDaddy DNS was not inspected or modified. If the old Pages site currently serves the same custom domain, its DNS records can generally remain in place while the repository hosting source is switched, provided the new Pages configuration claims the same domain. GitHub may prevent simultaneous custom-domain ownership by two Pages sites, so coordinate the repository Pages setting switch and keep the old deployment available until the new one is verified. Do not delete old files or disable old Pages before that point.

No DNS change is planned. If GitHub's Pages domain check reports mismatched records, diagnose the actual reported records before considering a change; do not guess or alter nameservers.

## HTTPS and redirects

The canonical URL is HTTPS on `www`. GitHub Pages certificate provisioning can take time after domain association. Wait for the certificate to become available and enable **Enforce HTTPS** in Pages settings. Canonical tags do not create redirects. Confirm GitHub Pages' HTTP-to-HTTPS behavior and any apex-to-www behavior separately; GoDaddy forwarding or DNS configuration may be needed only if the owner requires a redirect and GitHub does not provide it. No such redirect configuration was changed here.

## Verification and downtime-safe sequence

1. Review and commit the source, then push to `main` when ready.
2. Verify the Actions run and that the Pages deployment succeeds.
3. Configure the custom domain in the new repository's Pages settings. Keep the old repository and its source intact.
4. Check `https://www.softdesign-ks.com/`, the canonical service/portfolio URLs, 404 behavior, `robots.txt`, and `sitemap.xml`; verify the certificate and HTTPS enforcement.
5. Confirm GitHub Pages shows the expected custom domain and that content/assets load without errors.
6. Only after owner confirmation that the new site is operational, retire the old Pages deployment. Preserve the old repository if needed for history or rollback.

Static legacy pages use meta refresh and visible links; they cannot issue HTTP 301/308 responses. Rollback is to restore the old Pages configuration/site serving the domain while diagnosing the new deployment. A repository push alone does not prove production is updated.

## Troubleshooting

- **No workflow run:** confirm a push to `main` or use Actions' manual dispatch.
- **Pages source error:** select GitHub Actions in Settings → Pages and inspect repository Actions restrictions.
- **Missing files:** inspect artifact staging paths and uploaded artifact contents; only allowlisted site paths are copied.
- **Custom domain rejected:** check Pages domain ownership and CNAME spelling; do not modify DNS without checking GitHub's current diagnostic.
- **HTTPS unavailable:** wait for certificate provisioning, verify domain association, then enable enforcement when offered.
- **Broken project path:** the 404 fallback recognizes `/SoftDesign.Website/`; update it only if the repository's published project path changes.
