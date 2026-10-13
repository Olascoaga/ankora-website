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
- Actual 7AQF/RV2 captures, an accessible four-stage gallery and screenshot enlargement.
- Explicit library filtering, preparation, local engine and traceability boundaries.
- Linked frozen scientific evidence, including unfavorable outcomes and known gaps.
- The existing illustrated 28-page PDF guide, repository/citation links and native FAQ.
- Private-beta contact by email, not a public download or a simulated signup form.
- No third-party scripts, external fonts, analytics, cookies, runtime API or build dependencies.

Screenshots and the guide are copied byte-for-byte from already-public Ankora
documentation at source commit `70ad0403d9f4a8a5db474213529e550a06d17c10`.
`dist/assets/content-evidence.json` identifies their upstream paths and SHA-256s.
Scientific values and capability claims are sourced from the linked public records;
there are no invented endorsements, users, benchmark outcomes or performance promises.

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
URL is shipped. Add absolute social-image/canonical metadata once the final
domain is known. See the official [Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
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
