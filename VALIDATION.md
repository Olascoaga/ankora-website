# Local website acceptance — 13 October 2026

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
