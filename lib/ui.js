/**
 * Shared class tokens for the Matrubhoomi design system.
 *
 * These exist so every page composes the same buttons, cards and surfaces
 * instead of each file inventing its own gradient. Import the token rather
 * than hand-rolling a new class string.
 */

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2";

const buttonBase = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none ${focusRing}`;

export const btn = {
  /** Primary action — one per view, ideally. */
  primary: `${buttonBase} bg-brand-700 text-white hover:bg-brand-800 active:bg-brand-900 shadow-sm hover:shadow-md`,
  /** Secondary action sitting next to a primary. */
  secondary: `${buttonBase} bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100 shadow-sm`,
  /** For use on dark or photographic backgrounds. */
  onDark: `${buttonBase} bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200 shadow-sm`,
  onDarkOutline: `${buttonBase} bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white/20 active:bg-white/25`,
  /** WhatsApp — kept green because the channel is recognised by colour. */
  whatsapp: `${buttonBase} bg-[#25D366] text-white hover:bg-[#1eb356] active:bg-[#199c4a] shadow-sm hover:shadow-md`,
  /** Low-emphasis text action. */
  ghost: `${buttonBase} text-slate-700 hover:text-brand-700 hover:bg-slate-100 active:bg-slate-200`,
};

export const btnSize = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export const surface = {
  /** Standard content card. */
  card: "bg-white rounded-2xl border border-slate-200 shadow-sm",
  /** Card that responds to pointer input. */
  cardInteractive:
    "bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5",
  /** Quiet inset panel, e.g. a requirements list. */
  panel: "bg-slate-50 rounded-xl border border-slate-100",
  /** Frosted panel over imagery. */
  glass: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl",
};

export const badge = {
  neutral:
    "inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium",
  brand:
    "inline-flex items-center gap-1.5 rounded-full bg-brand-50 text-brand-800 ring-1 ring-brand-100 px-3 py-1 text-xs font-semibold",
  onDark:
    "inline-flex items-center gap-1.5 rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm px-3 py-1 text-xs font-semibold",
};

/** Page gutter — identical on every page so content lines up site-wide. */
export const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
export const containerNarrow = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";

/** Vertical section rhythm. */
export const sectionY = "py-14 sm:py-16 lg:py-24";
export const sectionYTight = "py-10 sm:py-12 lg:py-16";

/**
 * Category accents. Each domain keeps a distinct hue for wayfinding, but at
 * low saturation — a tinted icon chip and a dark, mostly-neutral hero rather
 * than a full-bleed gradient. Class strings are literal so Tailwind picks
 * them up at build time.
 */
export const categoryAccent = {
  blue: {
    chip: "bg-blue-50 text-blue-700 ring-1 ring-blue-100",
    chipSolid: "bg-blue-600 text-white",
    text: "text-blue-700",
    hero: "from-slate-900 via-slate-900 to-blue-950",
    hoverBorder: "hover:border-blue-200",
    hoverTint: "group-hover:bg-blue-50/60",
    arrowHover: "group-hover:text-blue-600",
  },
  green: {
    chip: "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
    chipSolid: "bg-brand-700 text-white",
    text: "text-brand-700",
    hero: "from-slate-900 via-slate-900 to-brand-950",
    hoverBorder: "hover:border-brand-200",
    hoverTint: "group-hover:bg-brand-50/60",
    arrowHover: "group-hover:text-brand-600",
  },
  amber: {
    chip: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
    chipSolid: "bg-amber-600 text-white",
    text: "text-amber-700",
    hero: "from-slate-900 via-slate-900 to-amber-950",
    hoverBorder: "hover:border-amber-200",
    hoverTint: "group-hover:bg-amber-50/60",
    arrowHover: "group-hover:text-amber-600",
  },
  violet: {
    chip: "bg-violet-50 text-violet-700 ring-1 ring-violet-100",
    chipSolid: "bg-violet-600 text-white",
    text: "text-violet-700",
    hero: "from-slate-900 via-slate-900 to-violet-950",
    hoverBorder: "hover:border-violet-200",
    hoverTint: "group-hover:bg-violet-50/60",
    arrowHover: "group-hover:text-violet-600",
  },
  indigo: {
    chip: "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100",
    chipSolid: "bg-indigo-600 text-white",
    text: "text-indigo-700",
    hero: "from-slate-900 via-slate-900 to-indigo-950",
    hoverBorder: "hover:border-indigo-200",
    hoverTint: "group-hover:bg-indigo-50/60",
    arrowHover: "group-hover:text-indigo-600",
  },
  rose: {
    chip: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
    chipSolid: "bg-rose-600 text-white",
    text: "text-rose-700",
    hero: "from-slate-900 via-slate-900 to-rose-950",
    hoverBorder: "hover:border-rose-200",
    hoverTint: "group-hover:bg-rose-50/60",
    arrowHover: "group-hover:text-rose-600",
  },
  teal: {
    chip: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
    chipSolid: "bg-teal-600 text-white",
    text: "text-teal-700",
    hero: "from-slate-900 via-slate-900 to-teal-950",
    hoverBorder: "hover:border-teal-200",
    hoverTint: "group-hover:bg-teal-50/60",
    arrowHover: "group-hover:text-teal-600",
  },
};

export function accentFor(category) {
  return categoryAccent[category?.hue] ?? categoryAccent.green;
}

export const heading = {
  /** Page-level title. */
  h1: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900",
  /** Section title. */
  h2: "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900",
  /** Card / block title. */
  h3: "text-lg sm:text-xl font-semibold text-slate-900",
  lead: "text-base sm:text-lg text-slate-600 leading-relaxed",
};
