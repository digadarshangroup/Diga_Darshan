// lib/cms.js
//
// The marketing site's one link to the HRMS backend.
//
// Everything on this site is otherwise static — 50-odd pages rendered at build
// time from files in this repo. The scheme listings are the exception, because
// a government scheme closes on a date nobody schedules a deploy around, and
// the previous arrangement (a hard-coded array in scheme-overview.jsx) meant
// the page advertised a closed scheme until a developer noticed.
//
// WHY THIS IS FETCHED IN THE BROWSER AND NOT ON THE SERVER
// --------------------------------------------------------
// A server fetch would have to pick one of two bad options: run at build time,
// which is the hard-coded array again with extra steps, or force the whole
// route to render dynamically on every request, which costs the static hosting
// this site is built for. Fetching from the browser keeps every page static and
// the scheme data live — the cards are below the fold anyway, so nothing the
// visitor reads first waits on it.
//
// The endpoint is unauthenticated by design (routes/Admin/publicSchemes.js in
// the backend) and returns published rows only, so there is no token here and
// nothing to leak. The PDF links it returns are /api/files/<token> URLs, which
// are readable without a session — that is the only form in which a PDF can be
// served from that Cloudinary account at all.

const API_URL =
  process.env.NEXT_PUBLIC_HRMS_API_URL || "http://localhost:5000";

/**
 * Published scheme listings for one website section.
 *
 * Resolves to `[]` rather than throwing when the backend is unreachable. A
 * marketing page whose CMS is down should show its other sections and quietly
 * omit this one — not render an error to a prospective customer, and above all
 * not fall back to invented schemes.
 */
export async function fetchSchemes(category, { signal } = {}) {
  const url = new URL("/api/public/schemes", API_URL);
  if (category) url.searchParams.set("category", category);

  const res = await fetch(url, { signal, cache: "no-store" });
  if (!res.ok) throw new Error(`Could not load schemes (${res.status})`);

  const payload = await res.json();
  return Array.isArray(payload?.schemes) ? payload.schemes : [];
}

export { API_URL as CMS_API_URL };
