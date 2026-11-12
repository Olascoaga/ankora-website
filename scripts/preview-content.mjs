// UI-only fixture: local previews must not inflate the real public counter.
// No geographic observations or numeric visitor totals are simulated.
const fixture = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="375" viewBox="0 0 800 375"><rect width="800" height="375" fill="#14161a"/><rect x="8" y="8" width="784" height="359" fill="none" stroke="#3a3d45" stroke-width="2"/><text x="400" y="172" text-anchor="middle" fill="#eceae4" font-family="monospace" font-size="30">LOCAL PREVIEW FIXTURE</text><text x="400" y="220" text-anchor="middle" fill="#b5b2aa" font-family="sans-serif" font-size="24">Visitor counting disabled — layout fixture only</text></svg>';
export function localPreviewHtml(html, counterImageUrl) {
  const image = `data:image/svg+xml,${encodeURIComponent(fixture)}`;
  return html.replace(`src="${counterImageUrl}"`, `src="${image}"`);
}
