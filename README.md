# Ankora website

[![Publish website](https://github.com/Olascoaga/ankora-website/actions/workflows/pages.yml/badge.svg)](https://github.com/Olascoaga/ankora-website/actions/workflows/pages.yml)

Independent, buildless presentation website prepared for GitHub Pages.
The scientific application's repository remains [Olascoaga/Ankora](https://github.com/Olascoaga/Ankora).
The official presentation is live at [olascoaga.github.io/ankora-website](https://olascoaga.github.io/ankora-website/)
with a [Spanish version](https://olascoaga.github.io/ankora-website/?lang=es).
Source is maintained separately at [Olascoaga/ankora-website](https://github.com/Olascoaga/ankora-website).
No domain has been purchased and no beta installer is distributed here.

## Content

- English and Spanish, with a shareable `?lang=es` preference.
- Seven real workflow captures (`01 Inspect`, `02 Prepare`, `03 Define`, `04 Screen`, `05 Redock`, `06 Review`, `07 Methods`) presented in an optical Plate I workbench explorer with a graduated vernier scale, keyboard navigation, native `<dialog>` enlargement, and byte-verified `SHA-256` provenance captions.
- Explicit scientific contract (`Table 1`, five booktabs invariants) detailing immutable SHA-256 artifacts, selective chemistry, separate scoring families, in-place heavy-atom RMSD (sampling vs ranking) and record-derived `Methods`.
- Local execution matrix (`Table 2`) across four engines (`AutoDock Vina 1.2.7`, `AutoDock4 4.2.6`, `AutoDock-GPU 1.6`, and Linux `GNINA 1.3.3` with optional 1-click offline CUDA 12.8 pack).
- Linked frozen validation index (`Table 3`) separating scientific validation records (`7AQF`, `6OCO`, `LIT-PCBA`) from the machine-verified 3-platform / 129-record engineering matrix (`PLATFORM_STATUS.md`), disclosing unfavorable outcomes and the pending bare-metal Linux workstation gate (`Gate D6`).
- The updated 34-page / 20-figure illustrated PDF guide (`Ankora-User-Guide.pdf`), repository/citation references (`[1]–[3]`, author ORCID `0009-0008-5522-7938`) and native FAQ.
- Private-beta / Linux-RC contact by email, not a public download or a simulated signup form.
- A compact colophon visit counter and country map in the footer, with a visible privacy disclosure.
- No third-party executable scripts, external fonts, first-party cookies, runtime API or build dependencies.
  The explicitly authorized Flag Counter image separately measures website visits.

All seven workflow captures and the 34-page guide are SHA-256-locked in
`dist/assets/content-evidence.json` against Ankora's reviewed documentation
(unified `main` commit `1926281c6bb133c2e25f38627429b0b9de621869`). Six captures use
read-only 7AQF Obsidian views on Windows 11 x64 (`structure.jpg`, `receptor.jpg`,
`binding-site.jpg`, `redocking.jpg`, `pose-review.jpg`, `methods.jpg`), and stage
`04 Screen` (`gnina-screening.png`) is a real native Linux WSLg WebDriver capture
of `GNINA 1.3.3` CUDA screening on `1HSG` (`RTX 5050`, `LINUX_GNINA_SCREENING_WSLG.md`).
The library graphic (`library-workflow.svg`) is explicitly labeled as a workflow
schematic, not a screenshot or calculated result. Scientific values and capability
claims are sourced from the linked public records; there are no invented
endorsements, users, benchmark outcomes or performance promises.

The presentation uses an Instrument Monograph ("Lámina y Tabla") visual architecture:
design tokens in `assets/obsidian.css` and a continuous `#0b0c0e` carbon layout in
`assets/site.css` (12-column editorial grid, hairline booktabs tables, zero drop-shadows).
EN/ES navigation, keyboard gallery, native disclosures and modal enlargement stay
functional without adding third-party scripts or fonts.

## Local review

Node.js 22 or newer:

```text
npm run check
npm test
npm run preview
```

Preview binds only to localhost and prints its URL (default port 4175).
The source works both at `/` and under the `/ankora-website/` project-site prefix.
Open the page with JavaScript disabled to see the English content, navigation,
first gallery image and native FAQ. Language/gallery/enlargement controls require JS.

Optional browser acceptance uses Playwright 1.62.1 and an installed Edge browser:

```text
npm install --no-save --package-lock=false playwright@1.62.1
npm run test:browser
```

Start the preview first. `ANKORA_BROWSER_CHANNEL` selects another installed
Playwright browser channel; `ANKORA_WEBSITE_URL` selects the local preview URL.
The helper also accepts `--playwright-module` for an existing development
installation. Screenshots and raw evidence go to ignored `.qa/`, not the deploy.

Local previews replace only the live counter image with a labelled UI fixture.
Automated local review does not send visits to the provider or inflate the public
counter. The deployed HTML retains the provider's original image/link embed.

## Visitor counter and privacy

The owner authorized the free [Flag Counter](https://www.flagcounter.com/) map
and its terms on 13 October 2026. Counter `0hUE` was created once through the
official generator, without submitting an email address or buying a plan.
The image and mandatory statistics link are preserved as issued; no visitor
totals or geographic observations are generated by Ankora.

The counter starts at creation, not the website's first publication. Pageviews
count image loads; default visitor deduplication is daily. Setup/live acceptance
visits may be included. Totals and countries are approximate, with roughly
five-minute image updates, and are not evidence of downloads, adoption or exact
location. Blockers, caching, VPNs and shared networks affect what is recorded.

Loading the external image sends the visitor's IP and browser information to
Boardhost. Its [privacy policy](https://www.flagcounter.com/privacy.html) describes
country estimates without GPS, no widget cookies or raw-IP logs, temporary
IP-derived hashes for deduplication and aggregate statistics. Provider statistics
pages may contain advertising/cookies. No scientific data is sent by the desktop
application; its local-only/no-telemetry boundary is unchanged.

Provider uptime and accuracy are not guaranteed; the footer has a visible error
state and a statistics link if the image is blocked or unavailable. The free
counter may be removed after 30 days without a new visitor. Do not use automated
traffic to keep it alive or represent test visits as community adoption. Review
the [provider terms](https://www.flagcounter.com/terms.html) when maintaining the
integration. No provider management account or administrative credential exists
in this repository.

## GitHub Pages publication

The owner authorized this public repository and Pages deployment on
13 October 2026. **Settings → Pages → Source → GitHub Actions** is enabled.
Each push to `main` checks the website and publishes **only `dist/`**.
The workflow may also be launched manually from Actions.

The first successful deployment used source `f1c632d51dbcf5cf6e229f1b69fa4f13bb7079ef`.
See [VALIDATION.md](VALIDATION.md) for the actual deployment and live-site checks.
The website does not depend on the local preview server or the scientific backend.

For a custom domain, verify ownership and configure the domain and DNS in Pages
before enabling HTTPS. No placeholder `CNAME`, canonical domain or invented live
URL is shipped. The current canonical/social-image metadata uses the existing
official Pages URL; update it if a custom domain is adopted. See the official [Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
and [domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

All Pages content is public. Never include application data, private memory,
audit notes, credentials, unpublished compounds or beta installers. Public
installer downloads require a separately authorized distribution/release step.

## Updating

Change `dist/index.html`, `dist/assets/site.css` and `dist/assets/site.js` directly.
Language strings are set as text, never injected as HTML. Keep the English/Spanish
copy and source-evidence manifest synchronized, then rerun checks and browser QA.
The shipped app's engine version, platform and validation status are not inferred
from marketing text: check the application's public records before editing claims.

Code is MIT; see `LICENSE`. Third-party tools named on the site retain their own licenses.
