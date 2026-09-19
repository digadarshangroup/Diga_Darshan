"use client";

import { Clock, CheckCircle2, AlertCircle, ExternalLink, Users } from "lucide-react";
import { container, btn, btnSize, surface, sectionY } from "@/lib/ui";
import { SectionHeading, Reveal } from "@/components/ui/section";

const schemes = [
  {
    id: 1,
    title: "Pradhan Mantri Matsya Sampada Yojana",
    titleOdia: "ପ୍ରଧାନମନ୍ତ୍ରୀ ମତ୍ସ୍ୟ ସମ୍ପଦ ଯୋଜନା",
    description: "Comprehensive scheme for fisheries development with up to ₹60 lakh subsidy",
    amount: "₹60,00,000",
    deadline: "2024-12-31",
    status: "live",
    applicants: 1250,
    pdf: "https://sugam.odisha.gov.in/admin/getnfsfileWS/eyJpdiI6InkydXpGVDJVaVRkdGdNNjRyQlBRWGc9PSIsInZhbHVlIjoiQkd3dGFNZXU1cityTEZBRUFZNFwvOUxjUzJocmk2Z282MG5pclFHSm5IeXhsKzdPWWdwK3NOc2FmUXNsZ3Rvcnp0bXZUTFlnV1Nab0dWTkFQaHVZdjVhXC9YWENUTDh4XC9pUXNJQUdBWWMyMU09IiwibWFjIjoiNmMwMmYyNThhYWI1NjJlZTJlMGM2M2YxN2RiMGUwZjk2N2UyMjAzOTNjYmNlZDFjYTYxMGM1MWY2NjliZDgxYSJ9",
  },
  {
    id: 2,
    title: "Fish Farmer Development Agency Scheme",
    titleOdia: "ମତ୍ସ୍ୟଜୀବୀ ବିକାଶ ଏଜେନ୍ସି ଯୋଜନା",
    description: "Support for fish farming infrastructure and equipment",
    amount: "₹25,00,000",
    deadline: "2024-11-15",
    status: "expiring",
    applicants: 890,
    pdf: "https://sugam.odisha.gov.in/admin/getnfsfileWS/eyJpdiI6IkY2WUE2Y1JWVWhWTm5hMWpZWWtmZ2c9PSIsInZhbHVlIjoieFZMWkZFK1hpY3pcLzlVUXE4K0tTMmorRXV6MUNlNVZ0ajZqdmppTnRHTmFkYlIxNUJyQWpkZmF0bkp3bzgwTmJHcEpsRVwvWGxjWmJ3Z1VIOUkwcVphZz09IiwibWFjIjoiNjZiNmRhOWM0MjRhNzdlYTY0MGMzOTYwMzVhMjRmZmNkNzY2MDAxODg2YmNiNWFkYzMzNDJlODYzZDdhMDdkYyJ9",
  },
  {
    id: 3,
    title: "Integrated Fisheries Development Scheme",
    titleOdia: "ସମନ୍ବିତ ମତ୍ସ୍ୟ ବିକାଶ ଯୋଜନା",
    description: "End-to-end fisheries value chain development support",
    amount: "₹40,00,000",
    deadline: "2024-10-30",
    status: "expired",
    applicants: 650,
    pdf: "https://sugam.odisha.gov.in/admin/getnfsfileWS/eyJpdiI6IkY2WUE2Y1JWVWhWTm5hMWpZWWtmZ2c9PSIsInZhbHVlIjoieFZMWkZFK1hpY3pcLzlVUXE4K0tTMmorRXV6MUNlNVZ0ajZqdmppTnRHTmFkYlIxNUJyQWpkZmF0bkp3bzgwTmJHcEpsRVwvWGxjWmJ3Z1VIOUkwcVphZz09IiwibWFjIjoiNjZiNmRhOWM0MjRhNzdlYTY0MGMzOTYwMzVhMjRmZmNkNzY2MDAxODg2YmNiNWFkYzMzNDJlODYzZDdhMDdkYyJ9",
  },
];

const STATUS = {
  live: {
    label: "Open",
    Icon: CheckCircle2,
    className: "bg-brand-50 text-brand-700 ring-1 ring-brand-200",
  },
  expiring: {
    label: "Closing soon",
    Icon: Clock,
    className: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  },
  expired: {
    label: "Closed",
    Icon: AlertCircle,
    className: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
  },
};

function formatDeadline(value) {
  // Fixed locale + UTC keeps server and client output identical (no hydration mismatch)
  return new Date(value).toLocaleDateString("en-IN", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function SchemeOverview() {
  return (
    <section className={`${sectionY} bg-slate-50`}>
      <div className={container}>
        <SectionHeading
          eyebrow="Government schemes"
          title="Fisheries subsidy & support programmes"
          subtitle="Trusted subsidy and support programmes for fish farmers across Odisha."
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {schemes.map((scheme, index) => {
            const status = STATUS[scheme.status];
            const StatusIcon = status.Icon;
            const isExpired = scheme.status === "expired";

            return (
              <Reveal key={scheme.id} delay={index * 0.06}>
                <article className={`${surface.card} h-full flex flex-col p-5 sm:p-6`}>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${status.className}`}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      {status.label}
                    </span>

                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold text-slate-900 tracking-tight tabular-nums">
                        {scheme.amount}
                      </div>
                      <div className="text-[11px] text-slate-500 uppercase tracking-wide">
                        Max subsidy
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                    {scheme.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{scheme.titleOdia}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {scheme.description}
                  </p>

                  <dl className="mt-5 space-y-2 text-sm">
                    <div className="flex items-center justify-between py-2 border-t border-slate-100">
                      <dt className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        Deadline
                      </dt>
                      <dd className="font-medium text-slate-900 tabular-nums">
                        {formatDeadline(scheme.deadline)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-2 border-t border-slate-100">
                      <dt className="flex items-center gap-2 text-slate-500">
                        <Users className="w-3.5 h-3.5" />
                        Applicants
                      </dt>
                      <dd className="font-medium text-slate-900 tabular-nums">
                        {scheme.applicants.toLocaleString("en-IN")}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-5 flex gap-2">
                    <a
                      href={scheme.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${btn.secondary} ${btnSize.sm} flex-1`}
                    >
                      Details
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={
                        isExpired
                          ? undefined
                          : `https://wa.me/919040626617?text=${encodeURIComponent(
                              `Hello Matrubhoomi Team, I want to apply for ${scheme.title}.`
                            )}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-disabled={isExpired}
                      className={`${
                        isExpired
                          ? "inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none"
                          : btn.primary
                      } ${btnSize.sm} flex-1`}
                    >
                      {isExpired ? "Closed" : "Apply now"}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
