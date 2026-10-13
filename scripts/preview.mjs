import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { localPreviewHtml } from "./preview-content.mjs";
const root = fileURLToPath(new URL("../dist/", import.meta.url));
const counter = JSON.parse(await readFile(resolve(root, "assets/content-evidence.json"), "utf8")).visitor_counter;
const port = Number(process.env.PORT || 4175);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".pdf": "application/pdf", ".json": "application/json" };
const server = createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
    // Exercise the project-site prefix as well as root/custom-domain hosting.
    if (pathname.startsWith("/ankora-website/")) pathname = pathname.slice("/ankora-website".length);
    const path = resolve(root, `.${pathname.endsWith("/") ? `${pathname}index.html` : pathname}`);
    if (!path.startsWith(root.replace(/[\\/]$/, "") + sep)) { res.writeHead(403).end(); return; }
    let content = await readFile(path);
    if (extname(path) === ".html") content = localPreviewHtml(content.toString("utf8"), counter.image_url);
    res.writeHead(200, { "Content-Type": types[extname(path)] || "application/octet-stream", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
    res.end(req.method === "HEAD" ? undefined : content);
  } catch { res.writeHead(404).end(); }
});
server.listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${server.address().port}/`));
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => server.close(() => process.exit(0)));
