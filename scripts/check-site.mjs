import assert from "node:assert/strict";
import { readFile, readdir, lstat } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
export const root = fileURLToPath(new URL("../", import.meta.url));
export async function checkSite() {
  const dist = resolve(root, "dist");
  const html = await readFile(resolve(dist, "index.html"), "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, "Duplicate element IDs");
  const links = [...html.matchAll(/\b(?:src|href)="([^"]+)"/g)].map(match => match[1]);
  for (const value of links) {
    if (value.startsWith("#")) { assert(ids.includes(value.slice(1)), `Missing anchor ${value}`); continue; }
    if (value.startsWith("https:") || value.startsWith("mailto:")) continue;
    assert(!value.startsWith("/"), "Assets must work under a GitHub project-site prefix");
    const path = resolve(dist, value.split(/[?#]/)[0]);
    assert(path.startsWith(dist + sep), "Asset escaped static directory");
    assert((await lstat(path)).isFile(), `Missing asset ${value}`);
  }
  let bytes = 0, files = 0;
  async function inspect(folder) {
    for (const entry of await readdir(folder, { withFileTypes: true })) {
      const path = resolve(folder, entry.name);
      assert(!entry.isSymbolicLink(), "Deployment artifacts must not contain links");
      assert(!/\.(exe|dll|zip|sqlite|db)$/i.test(entry.name), "No installer or application data belongs in Pages");
      if (entry.isDirectory()) await inspect(path);
      else { const stat = await lstat(path); bytes += stat.size; files++; assert(stat.size < 25 * 1024 * 1024, "Unexpected oversized site asset"); }
    }
  }
  await inspect(dist);
  const manifest = JSON.parse(await readFile(resolve(dist, "assets/content-evidence.json"), "utf8"));
  const externalImages = [...html.matchAll(/<img\b[^>]*\bsrc="(https:[^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(externalImages, [manifest.visitor_counter.image_url], "Only the approved counter image may measure visits");
  assert.equal(new URL(manifest.visitor_counter.image_url).hostname, "s05.flagcounter.com");
  assert(!/<script\b[^>]*\bsrc="https:/i.test(html), "No third-party executable scripts");
  for (const asset of manifest.assets) {
    const path = resolve(dist, asset.file);
    assert(path.startsWith(dist + sep), "Evidence path escaped static directory");
    const bytes = await readFile(path);
    assert.equal(bytes.length, asset.size_bytes, `Asset size drift: ${asset.file}`);
    assert.equal(createHash("sha256").update(bytes).digest("hex"), asset.sha256, `Asset identity drift: ${asset.file}`);
  }
  const css = await readFile(resolve(dist, "assets/site.css"), "utf8");
  const js = await readFile(resolve(dist, "assets/site.js"), "utf8");
  for (const text of [html, css, js]) {
    assert(!/(?<![A-Za-z0-9])[A-Z]:[\\/]/i.test(text), "No absolute filesystem paths in public text");
    assert(!/127\.0\.0\.1:8765|\.ankora-data|\.claude|memory\//i.test(text), "No private runtime references");
  }
  assert(!/innerHTML|eval\(|fetch\(|localStorage|document\.cookie/.test(js), "Only the disclosed image counter may measure visits; no injected markup, extra data collection or cookies");
  assert(html.includes("there is no public installer release yet"));
  assert(css.includes("prefers-reduced-motion"));
  console.log(`Website checks passed: ${files} static files, ${(bytes / 1024 / 1024).toFixed(2)} MiB; all assets and anchors resolve.`);
  return { files, bytes };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await checkSite();
