"use client";

import Link from "next/link";
import { ArrowLeft, Clock, MessageCircle, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { btn, btnSize, containerNarrow, surface } from "@/lib/ui";

const PHONE_TEL = "+919040626617";
const PHONE_DISPLAY = "+91 9040626617";

/**
 * Placeholder page for a service we support but haven't written up yet.
 * Deliberately plain: it states the situation and routes people to a human,
 * rather than dressing an empty page up with decoration.
 */
export function ComingSoon({
  title,
  description,
  icon: Icon = Clock,
  backHref = "/",
  backLabel = "Back to home",
  whatsappMessage = "Hello Matrubhoomi Team, I'd like to know more about this service.",
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className={`${containerNarrow} flex-1 py-16 sm:py-24`}>
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>

        <div className="max-w-xl">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 mb-5">
            <Icon className="w-6 h-6" strokeWidth={2} />
          </div>

          <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
            Page in progress
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">{description}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() =>
                window.open(
                  `https://wa.me/919040626617?text=${encodeURIComponent(whatsappMessage)}`,
                  "_blank"
                )
              }
              className={`${btn.whatsapp} ${btnSize.lg}`}
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </button>
            <a href={`tel:${PHONE_TEL}`} className={`${btn.secondary} ${btnSize.lg}`}>
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className={`${surface.panel} mt-10 p-5`}>
            <p className="text-sm text-slate-600 leading-relaxed">
              We already handle this work for clients — the detailed page just isn&apos;t written
              yet. Call or message us and we&apos;ll walk you through the process, the documents
              you&apos;ll need, and the likely timeline.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
