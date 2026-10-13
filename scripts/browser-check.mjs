import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";
const moduleIndex = process.argv.indexOf("--playwright-module");
const library = moduleIndex < 0 ? "playwright" : pathToFileURL(resolve(process.argv[moduleIndex + 1])).href;
const { chromium } = await import(library);
const base = process.env.ANKORA_WEBSITE_URL || "http://127.0.0.1:4175/";
assert(new URL(base).hostname === "127.0.0.1", "This acceptance gate is local-only");
const output = fileURLToPath(new URL("../.qa/", import.meta.url));
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: process.env.ANKORA_BROWSER_CHANNEL || "msedge", headless: true });
const evidence = { passed: false, browser: browser.version(), errors: [], failed_requests: [], viewports: [], interactions: [] };
try {
  const page = await browser.newPage({ reducedMotion: "reduce" });
  page.on("pageerror", error => evidence.errors.push(error.message));
  page.on("response", response => { if (response.status() >= 400) evidence.failed_requests.push(`${response.status()} ${new URL(response.url()).pathname}`); });
  async function ready() {
    await page.evaluate(async () => {
      for (const image of document.images) image.loading = "eager";
      await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      await document.fonts.ready;
    });
    const broken = await page.locator("img").evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.getAttribute("src")));
    assert.deepEqual(broken, []);
  }
  for (const [width, height] of [[1440, 1000], [1280, 800], [960, 680], [768, 1024], [390, 844], [360, 780], [320, 640]]) {
    await page.setViewportSize({ width, height });
    for (const lang of ["en", "es"]) {
      assert((await page.goto(`${base}${lang === "es" ? "?lang=es" : ""}`)).ok());
      await ready();
      assert.equal(await page.locator("html").getAttribute("lang"), lang);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${width}px ${lang} has horizontal overflow`);
      assert.equal(await page.getByRole("heading", { level: 1 }).count(), 1);
      for (const stage of ["inspect", "prepare", "define", "review"]) {
        await page.locator(`#tab-${stage}`).click();
        await ready();
        assert.equal(await page.locator(`#tab-${stage}`).getAttribute("aria-selected"), "true");
        assert.equal(await page.locator("#workflow-panel").getAttribute("aria-labelledby"), `tab-${stage}`);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Gallery ${stage} overflows`);
      }
      await page.locator("#tab-inspect").click();
      await ready();
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: resolve(output, `site-${width}-${lang}.png`), fullPage: true });
      if (width === 1440 && lang === "en") await page.screenshot({ path: resolve(output, "hero-desktop.png") });
      evidence.viewports.push({ width, height, language: lang, images_loaded: true, gallery_stages: 4, horizontal_overflow: false });
    }
  }
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(base);
  await ready();
  const tab = page.locator("#tab-inspect");
  await tab.focus();
  await page.keyboard.press("ArrowRight");
  assert.equal(await page.locator("#tab-prepare").evaluate(node => document.activeElement === node), true);
  await page.keyboard.press("End");
  assert.equal(await page.locator("#tab-review").getAttribute("aria-selected"), "true");
  await page.keyboard.press("Home");
  assert.equal(await tab.getAttribute("aria-selected"), "true");
  evidence.interactions.push("roving keyboard gallery");
  const expand = page.locator('[data-lightbox-target="hero-image"]');
  await expand.click();
  assert(await page.locator("#screenshot-dialog").isVisible());
  await page.keyboard.press("Escape");
  assert(!(await page.locator("#screenshot-dialog").isVisible()));
  assert.equal(await expand.evaluate(node => document.activeElement === node), true);
  evidence.interactions.push("native modal and Escape focus restoration");
  await page.locator('[data-lang="es"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "es");
  assert(new URL(page.url()).searchParams.get("lang") === "es");
  await page.locator('[data-lang="en"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
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
  await page.locator(".faq details").first().locator("summary").click();
  assert.notEqual(await page.locator(".faq details").first().getAttribute("open"), null);
  evidence.interactions.push("native FAQ disclosure");
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
  assert.equal(await fallback.locator('[data-js-menu]').isVisible(), false);
  assert.equal(await fallback.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  await disabledJS.close();
  evidence.interactions.push("no-JavaScript content and navigation fallback");
  assert.deepEqual(evidence.errors, []);
  assert.deepEqual(evidence.failed_requests, []);
  evidence.passed = true;
  console.log(`Website browser gate passed: ${evidence.viewports.length} viewport/language checks and ${evidence.interactions.length} interaction checks.`);
} finally {
  await writeFile(resolve(output, "evidence.json"), JSON.stringify(evidence, null, 2));
  await browser.close();
}
