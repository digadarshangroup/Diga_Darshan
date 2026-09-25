"use client";

// components/scheme-overview.jsx
//
// The government scheme cards. Their content now comes from the HRMS CMS —
// Sales dashboard → Public website → Scheme listings — rather than from an
// array in this file.
//
// WHAT CHANGED AND WHY IT MATTERS
// -------------------------------
// This component used to carry three hard-coded schemes with fixed deadlines in
// 2024. That meant two things: a new scheme needed a developer, and a closed
// one stayed on the page advertising itself as open until somebody noticed. The
// status chip is now computed by the server from the deadline the desk typed,
// so it is right every morning without anyone touching it.
//
// THERE IS NO FALLBACK DATA, DELIBERATELY
// ---------------------------------------
// If the CMS is unreachable this renders nothing rather than the old array.
// Invented schemes on a real company's live site are worse than an empty
// section: a visitor who reads "₹60,00,000 subsidy, closes 31 Dec" and acts on
// it has been misled by us, not by a stale cache.

import { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
} from "lucide-react";
import { container, btn, btnSize, surface, sectionY } from "@/lib/ui";
import { SectionHeading, Reveal } from "@/components/ui/section";
import { fetchSchemes } from "@/lib/cms";

const STATUS = {
  open: {
    label: "Open",
    Icon: CheckCircle2,
    className: "bg-brand-50 text-brand-700 ring-1 ring-brand-200",
  },
  closing_soon: {
    label: "Closing soon",
    Icon: Clock,
    className: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  },
  closed: {
    label: "Closed",
    Icon: AlertCircle,
    className: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
  },
};

/**
 * Fixed locale and UTC, so the server-rendered shell and the browser agree.
 * An unpinned toLocaleDateString caused a hydration mismatch here once already.
 */
function formatDeadline(value) {
  return new Date(value).toLocaleDateString("en-IN", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/** Rupees in the Indian convention — ₹60,00,000, not ₹6,000,000. */
function formatRupees(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function SchemeCard({ scheme }) {
  const status = STATUS[scheme.status] || STATUS.open;
  const StatusIcon = status.Icon;
  const isClosed = scheme.status === "closed";

  // A closed scheme still shows its documents — people read last year's
  // guideline to prepare for this year's round — but not a live Apply button.
  const applyHref =
    scheme.applyUrl ||
    `https://wa.me/917750878444?text=${encodeURIComponent(
      `Hello Matrubhoomi Team, I want to apply for ${scheme.title}.`,
    )}`;

  return (
    <article className={`${surface.card} h-full flex flex-col p-5 sm:p-6`}>
      <div className="flex items-start justify-between gap-3 mb-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${status.className}`}
        >
          <StatusIcon className="w-3.5 h-3.5" />
          {status.label}
        </span>

        {/* Only rendered when the desk published a figure. Several schemes are
            quoted as a percentage, and "₹0" on those would be a lie. */}
        {scheme.maxSubsidy ? (
          <div className="text-right flex-shrink-0">
            <div className="text-lg font-bold text-slate-900 tracking-tight tabular-nums">
              {formatRupees(scheme.maxSubsidy)}
            </div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wide">
              Max subsidy
            </div>
          </div>
        ) : null}
      </div>

      <h3 className="text-base font-semibold text-slate-900 leading-snug">
        {scheme.title}
      </h3>
      {scheme.titleOdia ? (
        <p className="mt-1 text-sm text-slate-500">{scheme.titleOdia}</p>
      ) : null}
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
        {scheme.description}
      </p>

      {(scheme.department || scheme.deadline) && (
        <dl className="mt-5 space-y-2 text-sm">
          {scheme.department ? (
            <div className="flex items-center justify-between gap-4 py-2 border-t border-slate-100">
              <dt className="text-slate-500 flex-shrink-0">Issued by</dt>
              <dd className="font-medium text-slate-900 text-right">
                {scheme.department}
              </dd>
            </div>
          ) : null}
          {scheme.deadline ? (
            <div className="flex items-center justify-between py-2 border-t border-slate-100">
              <dt className="flex items-center gap-2 text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                Last date
              </dt>
              <dd className="font-medium text-slate-900 tabular-nums">
                {formatDeadline(scheme.deadline)}
              </dd>
            </div>
          ) : null}
        </dl>
      )}

      {/* The two documents. Each is only rendered when it has been uploaded —
          a button that opens nothing is worse than no button. */}
      {(scheme.guideline || scheme.brief) && (
        <div className="mt-5 flex flex-wrap gap-2">
          {scheme.guideline ? (
            <a
              href={scheme.guideline.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn.secondary} ${btnSize.sm} flex-1 min-w-[140px]`}
            >
              <FileText className="w-3.5 h-3.5" />
              Guideline
            </a>
          ) : null}
          {scheme.brief ? (
            <a
              href={scheme.brief.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn.secondary} ${btnSize.sm} flex-1 min-w-[140px]`}
            >
              <FileText className="w-3.5 h-3.5" />
              Brief description
            </a>
          ) : null}
        </div>
      )}

      <div className="mt-auto pt-3">
        <a
          href={isClosed ? undefined : applyHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={isClosed}
          className={`${
            isClosed
              ? "inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none"
              : btn.primary
          } ${btnSize.sm} w-full`}
        >
          {isClosed ? "Closed" : scheme.applyLabel || "Apply now"}
          {!isClosed && scheme.applyUrl ? (
            <ExternalLink className="w-3.5 h-3.5" />
          ) : null}
        </a>
      </div>
    </article>
  );
}

/** The skeleton, sized like a real card so the section does not jump. */
function CardSkeleton() {
  return (
    <div className={`${surface.card} h-full p-5 sm:p-6 animate-pulse`}>
      <div className="flex justify-between gap-3 mb-5">
        <div className="h-6 w-20 rounded-full bg-slate-100" />
        <div className="h-6 w-24 rounded bg-slate-100" />
      </div>
      <div className="h-4 w-4/5 rounded bg-slate-100" />
      <div className="mt-2 h-3 w-3/5 rounded bg-slate-100" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-11/12 rounded bg-slate-100" />
      </div>
      <div className="mt-8 h-9 w-full rounded-xl bg-slate-100" />
    </div>
  );
}

export function SchemeOverview({
  category = "fisheries",
  eyebrow = "Government schemes",
  title = "Fisheries subsidy & support programmes",
  subtitle = "Trusted subsidy and support programmes for fish farmers across Odisha.",
}) {
  const [schemes, setSchemes] = useState(null); // null = still loading

  useEffect(() => {
    const controller = new AbortController();

    fetchSchemes(category, { signal: controller.signal })
      .then(setSchemes)
      // An unreachable CMS collapses to the same outcome as "nothing
      // published": the section disappears. There is nothing a visitor could do
      // with an error message here, and no invented data to fall back to.
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setSchemes([]);
      });

    return () => controller.abort();
  }, [category]);

  const loading = schemes === null;

  // Nothing published and nothing loading: render no section at all rather than
  // a heading over an empty grid. Same for an unreachable CMS — the rest of the
  // page is still worth reading.
  if (!loading && schemes.length === 0) return null;

  return (
    <section className={`${sectionY} bg-slate-50`}>
      <div className={container}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
            : schemes.map((scheme, index) => (
                <Reveal key={scheme.id} delay={index * 0.06}>
                  <SchemeCard scheme={scheme} />
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
