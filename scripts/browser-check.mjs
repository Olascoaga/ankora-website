import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";
const moduleIndex = process.argv.indexOf("--playwright-module");
const library = moduleIndex < 0 ? "playwright" : pathToFileURL(resolve(process.argv[moduleIndex + 1])).href;
const { chromium } = await import(library);
const base = process.env.ANKORA_WEBSITE_URL || "http://127.0.0.1:4175/";
assert(new URL(base).hostname === "127.0.0.1", "This acceptance gate is local-only");
const output = fileURLToPath(new URL("../.qa/", import.meta.url));
const sourceHtml = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
const englishAnswers = [...sourceHtml.matchAll(/<p data-i18n="answer\d">([^<]+)<\/p>/g)].map(match => match[1]);
assert.equal(englishAnswers.length, 4);
const manifest = JSON.parse(await readFile(new URL("../dist/assets/content-evidence.json", import.meta.url), "utf8"));
const counter = manifest.visitor_counter;
const stageFiles = {
  inspect: "assets/structure.jpg",
  prepare: "assets/receptor.jpg",
  define: "assets/binding-site.jpg",
  screen: "assets/gnina-screening.png",
  redock: "assets/redocking.jpg",
  review: "assets/pose-review.jpg",
  methods: "assets/methods.jpg",
};
const stageVideos = {
  inspect: "assets/walkthrough-01-inspect.mp4",
  prepare: "assets/walkthrough-02-prepare.mp4",
  define: "assets/walkthrough-03-define.mp4",
  screen: "assets/walkthrough-04-docking.mp4",
  redock: "assets/walkthrough-05-redock.mp4",
  review: "assets/walkthrough-06-review.mp4",
  methods: "assets/walkthrough-07-methods.mp4",
};
const v1DesktopScrollBaseline = 8479;
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: process.env.ANKORA_BROWSER_CHANNEL || "msedge", headless: true });
const evidence = { passed: false, browser: browser.version(), v1_desktop_scroll_baseline: v1DesktopScrollBaseline, errors: [], failed_requests: [], live_counter_requests: [], viewports: [], interactions: [] };
try {
  const page = await browser.newPage({ reducedMotion: "reduce" });
  page.on("pageerror", error => evidence.errors.push(error.message));
  page.on("response", response => { if (response.status() >= 400) evidence.failed_requests.push(`${response.status()} ${new URL(response.url()).pathname}`); });
  page.on("request", request => { if (new URL(request.url()).hostname.endsWith("flagcounter.com")) evidence.live_counter_requests.push(request.url()); });
  async function ready() {
    await page.evaluate(async () => {
      for (const image of document.images) image.loading = "eager";
      await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      await document.fonts.ready;
    });
    const broken = await page.locator("img").evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.getAttribute("src")));
    assert.deepEqual(broken, []);
  }
  async function checkFaq(targetPage, expected = null) {
    const items = targetPage.locator(".faq details");
    assert.equal(await items.count(), 4);
    const answers = [];
    for (let i = 0; i < 4; i++) {
      const item = items.nth(i), summary = item.locator("summary"), answer = item.locator("p");
      assert.equal(await item.getAttribute("open"), null);
      await summary.click();
      assert.notEqual(await item.getAttribute("open"), null);
      assert(await answer.isVisible());
      const text = await answer.innerText();
      assert(text.length > 80, `FAQ answer ${i + 1} must not be blank or truncated`);
      if (expected) assert.equal(text, expected[i]);
      answers.push(text);
      assert.equal(await targetPage.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await summary.click();
      assert.equal(await item.getAttribute("open"), null);
      assert(!(await answer.isVisible()));
    }
    return answers;
  }
  async function checkVisitors(targetPage) {
    const image = targetPage.locator("#visitor-widget img");
    assert((await image.getAttribute("src")).startsWith("data:image/svg+xml,"), "Preview must not contact the live counter");
    assert(await image.isVisible());
    assert.equal(await targetPage.locator("#visitor-unavailable").isVisible(), false);
    assert.equal(await targetPage.locator("#visitor-widget a").getAttribute("href"), counter.statistics_url);
    const privacy = targetPage.locator("#visitor-privacy");
    await privacy.locator("summary").click();
    assert((await privacy.locator("p").first().innerText()).length > 180);
    assert.equal(await privacy.locator("a").getAttribute("href"), counter.privacy_url);
    assert.equal(await targetPage.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await privacy.locator("summary").click();
  }
  for (const [width, height] of [[1440, 1000], [1280, 800], [960, 680], [768, 1024], [390, 844], [360, 780], [320, 640]]) {
    await page.setViewportSize({ width, height });
    for (const lang of ["en", "es"]) {
      assert((await page.goto(`${base}${lang === "es" ? "?lang=es" : ""}`)).ok());
      await ready();
      assert.equal(await page.locator("html").getAttribute("lang"), lang);
      assert.equal(await page.locator("body").evaluate(node => getComputedStyle(node).backgroundColor), "rgb(11, 12, 14)");
      assert.equal(await page.locator(".button.primary").evaluate(node => getComputedStyle(node).backgroundColor), "rgb(223, 164, 90)");
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${width}px ${lang} has horizontal overflow`);
      assert.equal(await page.getByRole("heading", { level: 1 }).count(), 1);
      const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      if (width === 1440 && lang === "en") {
        assert(scrollHeight <= 5000, `Expected minimalist desktop scrollHeight <= 5000px, got ${scrollHeight}px`);
        const vernierBottom = await page.locator(".workflow-tabs").evaluate(node => node.getBoundingClientRect().bottom);
        assert(vernierBottom <= 550, `Expected vernier scale visible near top of first viewport, got ${vernierBottom}px`);
      }
      await checkFaq(page, lang === "en" ? englishAnswers : null);
      await checkVisitors(page);
      for (const stage of ["inspect", "prepare", "define", "screen", "redock", "review", "methods"]) {
        await page.locator(`#tab-${stage}`).click();
        await ready();
        assert.equal(await page.locator(`#tab-${stage}`).getAttribute("aria-selected"), "true");
        assert.equal(await page.locator("#workflow-panel").getAttribute("aria-labelledby"), `tab-${stage}`);
        const expectedHash = manifest.assets.find(item => item.file === stageFiles[stage]).sha256;
        const provenanceText = await page.locator("#stage-provenance").innerText();
        assert(provenanceText.includes(`sha256:${expectedHash.slice(0, 8)}…${expectedHash.slice(-4)}`), `Stage ${stage} provenance hash mismatch`);
        if (stage === "screen") assert(provenanceText.includes("WSLg"), "Linux screening stage must disclose WSLg context");
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Gallery ${stage} overflows`);
      }
      await page.locator("#tab-inspect").click();
      await ready();
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: resolve(output, `site-${width}-${lang}.png`), fullPage: true });
      if (width === 1440 && lang === "en") await page.screenshot({ path: resolve(output, "hero-desktop.png") });
      evidence.viewports.push({ width, height, language: lang, scroll_height: scrollHeight, images_loaded: true, gallery_stages: 7, faq_answers: 4, visitor_fixture: true, horizontal_overflow: false });
    }
  }
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(base);
  await ready();
  const skip = page.locator(".skip-link");
  await page.keyboard.press("Tab");
  assert.equal(await skip.evaluate(node => document.activeElement === node), true);
  assert.equal(await skip.evaluate(node => getComputedStyle(node).color), "rgb(18, 13, 6)");
  evidence.interactions.push("current palette and visible keyboard skip link");
  const tab = page.locator("#tab-inspect");
  await tab.focus();
  await page.keyboard.press("ArrowRight");
  assert.equal(await page.locator("#tab-prepare").evaluate(node => document.activeElement === node), true);
  await page.keyboard.press("End");
  assert.equal(await page.locator("#tab-methods").getAttribute("aria-selected"), "true");
  await page.keyboard.press("Home");
  assert.equal(await tab.getAttribute("aria-selected"), "true");
  evidence.interactions.push("roving keyboard gallery");
  const expand = page.locator('[data-lightbox-target="workflow-image"]');
  await expand.click();
  assert(await page.locator("#screenshot-dialog").isVisible());
  const dialogProvenance = await page.locator("#dialog-provenance").innerText();
  assert(dialogProvenance.includes("does not establish chemical validity"));
  await page.keyboard.press("Escape");
  assert(!(await page.locator("#screenshot-dialog").isVisible()));
  assert.equal(await expand.evaluate(node => document.activeElement === node), true);
  evidence.interactions.push("native modal, full SHA-256 provenance note and Escape focus restoration");
  await page.locator('[data-lang="es"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "es");
  assert(new URL(page.url()).searchParams.get("lang") === "es");
  const spanishAnswers = await checkFaq(page);
  assert(spanishAnswers.every((answer, index) => answer !== englishAnswers[index]));
  await page.locator('[data-lang="en"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  await checkFaq(page, englishAnswers);
  await checkVisitors(page);
  assert.equal(await page.locator("#beta-title").innerText(), "Built for real work.\nBeing tested with care.");
  evidence.interactions.push("language switching and shareable query");
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.locator("[data-js-menu]");
  assert(!(await page.locator("#site-nav").isVisible()));
  await menu.click();
  assert(await page.locator("#site-nav").isVisible());
  await page.keyboard.press("Escape");
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  await menu.click();
  await page.locator('#site-nav a[href="#resources"]').click();
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  evidence.interactions.push("mobile navigation and Escape");
  const faqSummary = page.locator(".faq details").first().locator("summary");
  await faqSummary.focus();
  await faqSummary.press("Enter");
  assert.notEqual(await page.locator(".faq details").first().getAttribute("open"), null);
  assert.equal(await page.locator(".faq details").first().locator("p").innerText(), englishAnswers[0]);
  await faqSummary.press("Space");
  assert.equal(await page.locator(".faq details").first().getAttribute("open"), null);
  evidence.interactions.push("all FAQ answers, language round-trip and keyboard disclosure");
  const pdf = await page.request.get(`${base}assets/Ankora-User-Guide.pdf`);
  assert(pdf.ok());
  assert((await pdf.body()).subarray(0, 5).toString() === "%PDF-");
  evidence.interactions.push("actual downloadable PDF");
  assert((await page.goto(new URL("/ankora-website/?lang=es", base).href)).ok());
  await ready();
  assert.equal(await page.locator("html").getAttribute("lang"), "es");
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  evidence.interactions.push("GitHub project-site prefix");
  const disabledJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const fallback = await disabledJS.newPage();
  await fallback.goto(base);
  assert(await fallback.locator("#site-nav").isVisible());
  assert.equal(await fallback.locator("[data-js-menu]").isVisible(), false);
  assert.equal(await fallback.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  await checkFaq(fallback, englishAnswers);
  await checkVisitors(fallback);
  await disabledJS.close();
  evidence.interactions.push("no-JavaScript content and navigation fallback");
  const blocked = await browser.newPage();
  await blocked.route(counter.image_url, route => route.abort("blockedbyclient"));
  await blocked.route(base, route => route.fulfill({ status: 200, contentType: "text/html", body: sourceHtml }));
  await blocked.goto(base);
  await blocked.waitForFunction(() => !document.querySelector("#visitor-unavailable").hidden);
  assert.equal(await blocked.locator("#visitor-widget").isVisible(), false);
  assert((await blocked.locator("#visitor-unavailable").innerText()).includes("could not load"));
  assert.equal(await blocked.locator(".visitor-map figcaption a").getAttribute("href"), counter.statistics_url);
  await blocked.close();
  evidence.interactions.push("visible visitor footer, privacy disclosure and blocked-provider fallback");
  const motionPage = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: "no-preference" });
  motionPage.on("pageerror", error => evidence.errors.push(error.message));
  motionPage.on("response", response => { if (response.status() >= 400) evidence.failed_requests.push(`${response.status()} ${new URL(response.url()).pathname}`); });
  motionPage.on("request", request => { if (new URL(request.url()).hostname.endsWith("flagcounter.com")) evidence.live_counter_requests.push(request.url()); });
  assert((await motionPage.goto(base)).ok());
  assert.equal(await motionPage.locator("#mode-motion").getAttribute("aria-pressed"), "true");
  assert.equal(await motionPage.locator("#mode-still").getAttribute("aria-pressed"), "false");
  assert.equal(await motionPage.locator("#workflow-video").isVisible(), true);
  assert.equal(await motionPage.locator("#workflow-image").isVisible(), false);
  const motionDesktopScroll = await motionPage.evaluate(() => document.documentElement.scrollHeight);
  assert(motionDesktopScroll <= 5000, `Expected motion desktop scrollHeight <= 5000px, got ${motionDesktopScroll}px`);
  for (const stage of ["inspect", "prepare", "define", "screen", "redock", "review", "methods"]) {
    await motionPage.locator(`#tab-${stage}`).click();
    await motionPage.waitForFunction(() => {
      const v = document.querySelector("#workflow-video");
      return v && !v.hidden && v.readyState >= 2 && v.videoWidth === 1280 && v.videoHeight === 720;
    });
    const expectedVideoHash = manifest.assets.find(item => item.file === stageVideos[stage]).sha256;
    const prov = await motionPage.locator("#stage-provenance").innerText();
    assert(prov.includes(`sha256:${expectedVideoHash.slice(0, 8)}…${expectedVideoHash.slice(-4)}`), `Stage ${stage} video provenance mismatch: ${prov}`);
    assert.equal(await motionPage.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Motion gallery ${stage} overflows`);
  }
  await motionPage.locator('[data-lightbox-target="workflow-image"]').click();
  assert.equal(await motionPage.locator("#dialog-video").isVisible(), true);
  assert.equal(await motionPage.locator("#dialog-image").isVisible(), false);
  const methodsFullVideoHash = manifest.assets.find(item => item.file === stageVideos.methods).sha256;
  assert((await motionPage.locator("#dialog-provenance").innerText()).includes(`sha256:${methodsFullVideoHash}`));
  await motionPage.keyboard.press("Escape");
  await motionPage.locator("#tab-screen").click();
  await motionPage.locator("#mode-still").click();
  assert.equal(await motionPage.locator("#workflow-image").isVisible(), true);
  assert.equal(await motionPage.locator("#workflow-video").isVisible(), false);
  assert((await motionPage.locator("#stage-provenance").innerText()).includes("WSLg"));
  await motionPage.locator("#mode-motion").click();
  await motionPage.locator("#tab-inspect").click();
  await motionPage.waitForFunction(() => {
    const v = document.querySelector("#workflow-video");
    return v && !v.hidden && v.readyState >= 2;
  });
  await motionPage.waitForTimeout(260);
  await motionPage.screenshot({ path: resolve(output, "hero-desktop-motion.png") });
  await motionPage.locator('[data-lang="es"]').click();
  assert.equal(await motionPage.locator("#mode-motion").innerText(), "Tutorial");
  assert.equal(await motionPage.locator("#mode-still").innerText(), "Captura");
  await motionPage.setViewportSize({ width: 320, height: 640 });
  assert.equal(await motionPage.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, "320px motion ES has horizontal overflow");
  await motionPage.screenshot({ path: resolve(output, "hero-mobile-motion.png") });
  await motionPage.close();
  evidence.interactions.push("default walkthrough motion playback across all 7 stages, Still/Walkthrough toggle and modal video preview");
  assert.deepEqual(evidence.errors, []);
  assert.deepEqual(evidence.failed_requests, []);
  assert.deepEqual(evidence.live_counter_requests, []);
  evidence.passed = true;
  console.log(`Website browser gate passed: ${evidence.viewports.length} viewport/language checks and ${evidence.interactions.length} interaction checks.`);
} finally {
  await writeFile(resolve(output, "evidence.json"), JSON.stringify(evidence, null, 2));
  await browser.close();
}
