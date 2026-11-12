# Website Validation

## Minimalist Instrument Monograph Redesign ("Lámina y Tabla", 12 November 2026)

Following a 2-round Ankora Design Council deliberation (`claude-fable-5-2` +
`gpt-6.1-sol`), the presentation website was redesigned from a 10-band landing
layout into a continuous `#0b0c0e` scientific instrument monograph while keeping
all 9 SHA-256-locked binary/SVG assets byte-identical against Ankora unified
`main` commit `1926281c6bb133c2e25f38627429b0b9de621869`:

- **Consolidation & measured scroll reduction:** Eliminates the duplicate hero
  `pose-review.jpg` frame, alternating grey background bands, card boxes and
   legacy light-theme CSS patchwork. Elevates the 7-stage workbench explorer to
  **Plate I** directly below a compact editorial opening, with a graduated
  vernier scale (`01 Inspect` through `07 Methods`), optical corner registration
  marks, and on-disk-verified `content id sha256:` provenance captions (explicitly
  labeled in the lightbox modal as identifying file bytes rather than chemical
  validity). Desktop `scrollHeight` in headless Microsoft Edge `157.0.4341.46`
  drops from **`8,479 px` to `4,354 px` (`-48.6%`)** at `1440×1000` EN
  (`8,624 px` to `4,448 px`, `-48.4%` in ES; `11,101 px` to `7,589 px`, `-31.6%`
  at `390×844` EN).
- **Booktabs tables & scientific/engineering separation:** Replaces card stacks
  with three hairline `booktabs` tables (`Table 1` 5-row explicit contract,
  `Table 2` 4-engine local execution matrix, and `Table 3` validation index
  separating the three scientific validation records `SERPINE1 7AQF/RV2`,
  `PIK3CD 6OCO/M5V`, and `LIT-PCBA` from the 129-record `PLATFORM_STATUS.md`
  engineering verification), followed by full-scale unboxed scientific boundary
  prose.
- **Colophon & unmodified Flag Counter (`0hUE`):** Retains the exact provider
  `<a><img></a>` embed inside `#visitor-widget` without CSS color inversion
  (preserving flag colors), framed at `max-width: 276px` in the architectural
  colophon alongside visible scope limits, `#visitor-privacy`, and
  `#visitor-unavailable`.
- **Verification (Node `24.19.0` + headless Microsoft Edge `157.0.4341.46`):**
  - `npm run check`: **16 static files (`4.30 MiB`)**, all links/anchors/SHA-256
    bytes verified.
  - `npm test`: **20/20 Node unit & provenance tests pass** (including byte-hash
    verification of all 7 stage provenance captions against `content-evidence.json`
    and on-disk files).
  - `scripts/browser-check.mjs`: **14 viewport/language checks** (`1440×1000`,
    `1280×800`, `960×680`, `768×1024`, `390×844`, `360×780`, `320×640` in EN/ES)
    and **10 interaction checks** pass with zero horizontal overflow, console
    errors, failed requests, or live `flagcounter.com` traffic.

## Unified `main` Synchronization (12 November 2026)

- Synchronized public links (`/blob/main/...`), 129 indexed validation records, and the unified 34-page / 20-figure Obsidian `assets/Ankora-User-Guide.pdf` (`3,092,209` B, SHA-256 `2a78d24a9f7710683e6666aba1b44be8e976efa5c48157591695a0f42f09722a`) against Ankora unified `main` commit `1926281c6bb133c2e25f38627429b0b9de621869` after PR #1 merge.

# Website acceptance

## Expanded workflow gallery, Linux RC / GNINA 1.3.3 synchronization and updated 30-page guide — 12 November 2026

The owner authorized updating the presentation website in sync with Ankora's
documentation and Linux release-candidate (`codex/linux-bootstrap` PR #1)
without merging `origin/main` (`6cabd558828e5bf271e2e2bd419efe3e622e6c5c`).
This bounded update preserves GitHub Pages, complete English/Spanish coverage,
the approved Flag Counter embed (`0hUE`), all scientific boundaries, and the
no-public-installer policy:

- **Expanded 7-stage real workflow gallery (`01 Inspect` through `07 Methods`):**
  Retains the four verified Windows 11 x64 Obsidian 7AQF views (`structure.jpg`,
  `receptor.jpg`, `binding-site.jpg`, `pose-review.jpg`) and adds three
  SHA-256-locked real captures:
  - `assets/gnina-screening.png` (`208,014` B, SHA-256
    `ae45c1cdf7633d0cb6d551f319775b0104ae783d0b8f7d7c95e2ecece84842e6`): native
    Linux WSLg WebDriver capture (`1280-campaign-results.png`) of `GNINA 1.3.3`
    CUDA virtual screening on `1HSG` (`RTX 5050 Laptop GPU`,
    `docs/validation/LINUX_GNINA_SCREENING_WSLG.md`).
  - `assets/redocking.jpg` (`96,537` B, SHA-256
    `e2d039f96ff5a7b9822ecddcf908bc87d8064f137426f81366e4002f4006224d`):
    read-only current-UI capture of historical `SERPINE1 7AQF/RV2` AutoDock 4.2.6
    in-place heavy-atom RMSD validation (`179484ac-a6cd-497c-8147-1333955813ff`,
    separating sampling recovery `0.454 Å` from top-rank misranking `3.139 Å`).
  - `assets/methods.jpg` (`104,614` B, SHA-256
    `4c21d9cd7d82d8455bcba3523c814628fa3a1ebd9ac10a5535111694a4b03026`):
    read-only current-UI capture of the record-derived `7AQF` AutoDock Vina 1.2.7
    `Methods` report.
- **Explicit-control contrast (`02 / EXPLICIT BY DESIGN`), 4-engine local matrix &
  platform transparency:** Contrasts scientist-owned step-by-step control against
  silent docking black boxes; documents `AutoDock Vina 1.2.7`, `AutoDock4 4.2.6`,
  `AutoDock-GPU 1.6` and Linux `GNINA 1.3.3` (separate `CNN_VS`, `CNNscore`,
  `CNNaffinity` pK and minimized `kcal/mol` scales, CUDA `refinement`, built-in
  1.3 KD ensemble, and optional 1-click offline CUDA 12.8 / cuDNN 9.25 pack);
  and distinguishes the unsigned **Windows 11 x64 (`private_beta`)** build from
  the **Linux x86\_64 (`release_candidate`)** `.deb` (`272.34 MiB`) / `.tar.zst`
  (`313.97 MiB`) packages pending bare-metal physical workstation `Gate D6`.
- **Updated 30-page / 20-figure manual & author ORCID:** Ships regenerated
  link-safe `assets/Ankora-User-Guide.pdf` (`2,423,614` B, SHA-256
  `a968db64aad113b79fdaed5087ffc8cf9165286e7d1b2667637b785318c17707`, zero
  `file://` URIs) and links author ORCID `0009-0008-5522-7938` alongside
  `CITATION.cff`, `PLATFORM_STATUS.md` and the 128-record validation index.
  `dist/assets/content-evidence.json` locks all `9` shipped binary/SVG assets
  against `codex/linux-bootstrap` commit `99b4f0ad23705d953f41ce2c9b95b6556bcdf588`
  and `main` commit `6cabd558828e5bf271e2e2bd419efe3e622e6c5c`.

Verified locally with Node 24.19.0 and headless Microsoft Edge 157.0.4341.46:

- **Static & provenance gate (`npm run check`):** Passes across **16 deployed
  static files (`3.66 MiB`)** with zero external scripts, fonts, cookies,
  symlinks, executables or machine-specific paths.
- **18 Node unit/static tests (`npm test`) pass**, verifying all 9 asset SHA-256
  digests and byte sizes, 7 accessible roving-tabindex gallery stages, complete
  Spanish text-key coverage, ORCID `0009-0008-5522-7938`, Linux RC / `Gate D6`
  disclosures, and `dist/`-only GitHub Pages workflow scope.
- **14 viewport/language browser checks pass** (`1440×1000`, `1280×800`,
  `960×680`, `768×1024`, `390×844`, `360×780`, `320×640` in EN and ES): all 7
  gallery stages load naturally with zero horizontal overflow, console errors or
  failed resource requests.
- **10 interaction checks pass** (roving keyboard gallery across 7 tabs, modal
  enlargement/Escape/focus restoration, EN/ES round-trip & `?lang=es`, mobile
  drawer/Escape, all FAQ disclosures, valid 30-page PDF response,
  `/ankora-website/` project-site prefix, no-JavaScript fallback, and Flag
  Counter fixture/blocked fallback) with **zero live Flag Counter requests**.

## Current interface and presentation refresh — 20 October 2026

The owner requests the current application identity in the website's design and
captures. This bounded change keeps GitHub Pages, EN/ES content, existing
scientific limitations, the private/unsigned beta boundary and the approved
Flag Counter embed. It adds no signup system, tracking service or public
installer, and changes no scientific application source or result.

Carbon/ivory/brass styling covers navigation, editorial headings, product frames,
workflow tabs, engine/evidence rows, documentation, FAQ and footer. A separate
stylesheet extends the retained responsive foundation. Focus, reduced motion,
no-JavaScript content and language/gallery semantics remain available. The story
is scientific capability, not a splash or theme feature tour.

All four gallery images use the current development UI. Three are byte-identical
public README assets from Ankora `6cabd558828e5bf271e2e2bd419efe3e622e6c5c`;
Structure is a new read-only view of the same verified immutable 7AQF source.
Original structure SHA-256 is
`79fd3b96adca6bdbe17ded6e9c693534007ae2cb0538739044788754b7c6faac`.
The saved receptor is `72ff70a2-b373-4f59-b162-5bbc3a471b6e`; the box is a
non-persistent RV2 A:401 preview with 5 Å padding. The hero is **not RV2**:
analysis `de66d321-661c-4c27-8144-c6a6f64f8812` preserves 20 atom contacts,
three residues and four exact residue/subtype groups for its own recorded ligand.
Its generic 7AQF caption does not claim a co-crystal recovery or affinity.

The library graphic is labeled a schematic, not a calculated outcome or UI
capture. It replaces the old-theme filter image. The five earlier JPGs are
removed from this site's deployment, recoverable from Git; the historical
manual/PDF and original application evidence remain unchanged. Current capture
appearance includes the application's pending development theme work, not a
promise that every previously distributed installer looks identical.

Verified with Node 24.19.0 and Edge 155.0.4283.62:

- **17 unit/static tests pass**, including all six asset hashes/sizes, source
  boundaries, bilingual text coverage and absence of earlier gallery images.
  Hashed vector artwork is explicitly kept LF-stable on Windows/Linux by Git.
- **13 deployed files, approximately 3.10 MiB**, including the unchanged PDF.
- **14 viewport/language checks pass**: 1440×1000, 1280×800, 960×680,
  768×1024, 390×844, 360×780 and 320×640, each EN/ES. Every gallery stage
  loads with no document overflow, page errors or failed resource requests.
- **Ten interaction checks pass**: actual palette/skip-link contrast, keyboard
  gallery, modal Escape/focus restoration, language round-trip/shareable query,
  mobile menu/Escape, all FAQ disclosures/keyboard behavior, unchanged PDF,
  project-site prefix, no-JavaScript fallback, and visitor/privacy/failure states.
- Local browser QA makes **zero live counter requests**, using the existing
  labeled preview fixture. No artificial visitors or new provider ID.
- Desktop, tablet, mobile, gallery and product-image captures visually reviewed.
  An initial tablet decoration overflow and narrow Spanish engine-grid overflow
  were found and fixed before acceptance; the final complete browser run passes.

Publication remains a normal commit/push to the existing website `main`, followed
by its Pages workflow. A local passing gate is not a deployment-success claim;
confirm the run for the published commit separately.

## Initial local website acceptance — 13 October 2026

## Boundary

Presentation website for Ankora, prepared separately from the scientific app.
Initial local acceptance did not create a GitHub repository or deploy a website.
The owner subsequently authorized public website publication on 13 October 2026;
the separate acceptance below records that deployment. No domain purchase,
application release, public installer upload, research-data mutation or scientific
calculation was performed.

The Sites design/local-preview guidance shaped the visitor narrative, responsive
composition and verification. The owner-selected destination remains GitHub
Pages, not Sites hosting. The static output needs no application server or build.

## Content provenance

Five unique real 7AQF screenshots and the previously published illustrated PDF
are copied unchanged from Ankora source `70ad0403d9f4a8a5db474213529e550a06d17c10`.
The SHA-256 manifest verifies all six assets and points to their public sources.
The PDF is the existing 28-page/19-figure guide; no new manual is implied.
Every upstream documentation path used by the page exists in the reviewed source.

Scientific copy links the frozen 7AQF and 6OCO evidence plus the retrospective
11,412-parent LIT-PCBA primary metrics. Incomplete comparability, near misses,
misranking, GPU non-recovery, uncertainty and prospective-performance limits
remain explicit. No investigator endorsement, adoption claim or benchmark result
was invented. MIT is the code's license; third-party obligations remain separate.

## Automated checks

- **11 Node tests pass**: semantic landmarks, one H1, internal asset/anchor
  integrity, explicit private/unsigned beta boundaries, scientific limits,
  engine/platform labels, complete Spanish text-key coverage, keyboard tabs,
  screenshot accessibility, bounded Pages deployment scope and asset provenance.
- Static check passes for **12 files, approximately 2.91 MiB**, including the
  downloadable PDF. No symlinks, executables, archives, databases, private
  runtime references or machine-specific paths occur in the deploy directory.
- No external scripts, fonts, cookies, analytics, API execution or injected HTML.
- Headless **Microsoft Edge 155.0.4283.45** browser acceptance passes **14**
  viewport/language cases: 1440×1000, 1280×800, 960×680, 768×1024, 390×844,
  360×780 and 320×640, each in English and Spanish. Every gallery stage loads
  real geometry screenshots, with zero horizontal document overflow, broken
  images, page errors or failed resource requests.
- **Eight behavior checks pass**: roving keyboard gallery; native dialog/Escape
  and focus restoration; language switching/shareable query; mobile menu/Escape;
  native FAQ disclosure; valid PDF response; GitHub project-site prefix; and
  readable content/navigation without JavaScript.
- Reduced-motion preference is respected. Desktop and mobile screenshots were
  visually inspected. Raw browser evidence and previews stay in ignored `.qa/`.

## Publication and limitations

`.github/workflows/pages.yml` publishes only `dist/` after checks, using the
official Pages workflow shape with job-bounded permissions. Remote execution is
recorded below; the initial local gate alone did not prove it. No claim is made
for a custom domain, cross-browser acceptance, assistive-technology testing or
physical mobile devices. The current browser cases are
responsive viewport tests on Windows, not a real-device matrix.

The PDF and the linked public-source repository are immediately usable. Contact
opens the owner's existing public email; it does not simulate a subscription or
automatic beta admission. Installer distribution remains private. The final
custom domain and any public installer release link require separate owner
decisions.

## Authorized public deployment — 13 October 2026

- Separate public repository: [Olascoaga/ankora-website](https://github.com/Olascoaga/ankora-website).
  Only the 22 reviewed website source/assets files were pushed. Private memory,
  audits, application data, installer binaries and local QA are not tracked.
- Published URL: [https://olascoaga.github.io/ankora-website/](https://olascoaga.github.io/ankora-website/).
  GitHub Pages uses `build_type: workflow` and enforces HTTPS.
- Initial published source: `f1c632d51dbcf5cf6e229f1b69fa4f13bb7079ef`.
  [Workflow run 38478850971](https://github.com/Olascoaga/ankora-website/actions/runs/38478850971)
  completed **successfully on attempt 2**. Attempt 1 failed at Pages configuration
  because the push started before Pages enablement; no source test defect was
  concealed or waived. The same commit was rerun after enablement.
- The live root page returns **HTTP 200**. Microsoft Edge **155.0.4283.45** checks
  pass at **1440×1000, 1366×768 and 390×844**, in both English and Spanish:
  all four gallery stages load, including Prepare and Define; no horizontal
  document overflow, page errors or failed resource responses occur.
- All **11 public content assets** (HTML, CSS, JS, brand SVG, source manifest,
  five screenshots and guide PDF) return successfully and match the reviewed
  local bytes exactly. The public guide retains its original SHA-256
  `a1065e0feb4de038e5d9de462a52d63e4b25b943a746bfb1c8eb1838793ae24e`.
- Local static checks and all **11 Node tests** also pass immediately before
  publication. Raw live-browser evidence remains in ignored `.qa/`, not Pages.
- The scientific application remains at source `70ad0403d9f4a8a5db474213529e550a06d17c10`;
  its repository, scientific outputs and accepted installers were not modified.

The Actions environment reported Node 20 action-runtime deprecation notices
for the existing setup/configure actions, automatically using Node 24. These
notices did not fail the successful run; the explicit site-check runtime is
Node 22. Ubuntu-runner migration notices are infrastructure notices, not
scientific-validation evidence.

## FAQ correction — 13 October 2026

The owner reported the private-beta/FAQ section did not work. A read-only
reproduction on the published site confirmed that all four English disclosures
opened with **empty answers**; the Spanish answers remained present. The original
browser gate checked the first disclosure's `open` attribute, not its answer
content. Its earlier passing result did not cover this failure.

The language initializer used rendered `innerText` to capture English strings
from initially closed `details` elements. Those answer paragraphs had no rendered
text. It now reads source text from a detached clone, converting `br` to newlines
before language replacement. This preserves hidden answers and the intended
multiline headings without injected HTML, new dependencies or custom accordion
handlers. Native `details` semantics and the existing contact link remain intact.

The expanded browser regression **failed before the fix** on the first English
answer. After the fix, static checks and **12 Node tests pass**. Edge
**155.0.4283.45** passes all **14 viewport/language cases and eight interaction
checks**, now opening and closing **all four answers** in each case, verifying
their visible nonempty text and exact English source content. EN → ES → EN
restores the original answers and multiline beta heading; Enter/Space keyboard
disclosure and the no-JavaScript English fallback also pass. There are no page
errors, broken images, failed responses or horizontal document overflow.

The beta inquiry remains a `mailto:` link, which depends on the visitor's
configured email application; it is not a hosted signup or automatic admission.
No email was sent, installer published or scientific application modified.
Raw browser evidence stays in ignored `.qa/`.

## Authorized visitor counter and country map — 13 October 2026

The owner explicitly requested a bottom-of-page visit counter and origin map,
then authorized the free Flag Counter provider, its terms and the privacy-copy
change before creation. One real counter **`0hUE`** was created using the official
browser generator; its issued 800×375 map includes pageviews and the provider's
visitor count. No email was submitted, management account created, paid plan
purchased, CAPTCHA solved or administrative credential placed in source.

The original image/link embed is retained verbatim. The public source manifest
records its exact image/statistics URLs, creation date, provider policy links and
measurement boundary. Counts are provider observations from creation onward,
not invented historical traffic, downloads or adoption claims. The first
provider-generated visit was a setup visit; setup/live acceptance visits can
remain in the aggregate. Image updates are not guaranteed instantaneous.

The responsive footer includes the world map, statistics link, measurement
limits and expandable privacy information in both languages. FAQ copy now
distinguishes website measurement from the unchanged local/no-telemetry desktop
application. The previous site's no-analytics wording is superseded by this
explicitly authorized image-only integration. No external executable script,
new dependency, first-party cookie, custom geolocation API or research-data
upload was added.

The [provider privacy policy](https://www.flagcounter.com/privacy.html) describes
IP-based country estimation without GPS, temporary IP-derived deduplication,
no raw-IP logs or widget cookies, and aggregate free-counter statistics. The
footer discloses the IP/browser-information transfer and possible advertising
or cookies on the external statistics pages. These are attributed provider
policies, not a legal-compliance certification or a guarantee about future
provider behavior. The [terms](https://www.flagcounter.com/terms.html) retain
accuracy/availability limitations, the required displayed image/statistics link
and possible free-counter removal after inactivity.

**Acceptance:** static asset/provenance checks and **15 Node tests pass**.
Edge **155.0.4283.45** passes all **14 viewport/language cases and nine behavior
checks**, including the visible responsive footer, complete EN/ES privacy text,
FAQ round-trip/no-JavaScript regressions, and informative blocked-provider
fallback with a still-usable statistics link. No global horizontal overflow,
page error or failed local resource exists in the normal cases. The preexisting
guide and five scientific screenshots remain byte-identical.

Local preview replaces only the remote counter image with a plainly labelled
layout fixture, containing no fabricated observations or totals. The browser
gate records **zero live-counter requests**; the explicit blocked-provider test
intercepts/aborts the external image before transmission. Test traffic is not
used to inflate visitor statistics. Raw creation evidence, layout captures and
browser results remain in ignored `.qa/`. Public source contains only a public
counter identifier, never access credentials or private memory.

**Live publication:** implementation commit
`dac4aabeef53e882cce2a286bb232bb696110d99` was pushed to the independent website
repository. [Pages run 38485357510](https://github.com/Olascoaga/ankora-website/actions/runs/38485357510)
completed successfully. The existing in-app browser reopened the public
[Spanish visitor footer](https://olascoaga.github.io/ankora-website/?lang=es#visitors).
The real provider image loaded at its native **800×375** size and rendered at
**684 px** width, with the map, provider count, statistics link and Spanish
disclosure visible. The public widget is not the local layout fixture. Its
observed setup tally is not an acceptance expectation or community-adoption
claim. A live-footer screenshot is retained privately in `.qa/`.
