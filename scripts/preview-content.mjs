// UI-only fixture: local previews must not inflate the real public counter.
// No geographic observations or numeric visitor totals are simulated.
const fixture = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="375" viewBox="0 0 800 375"><rect width="800" height="375" fill="#f6f7f1"/><text x="400" y="175" text-anchor="middle" fill="#163d35" font-family="sans-serif" font-size="24">Local preview</text><text x="400" y="215" text-anchor="middle" fill="#53625b" font-family="sans-serif" font-size="20">Visitor counting disabled — layout fixture only</text></svg>';
export function localPreviewHtml(html, counterImageUrl) {
  const image = `data:image/svg+xml,${encodeURIComponent(fixture)}`;
  return html.replace(`src="${counterImageUrl}"`, `src="${image}"`);
}
