"use client";

import Link from "next/link";
import { ArrowLeft, Fish } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SchemeOverview } from "@/components/scheme-overview";
import { container, surface } from "@/lib/ui";

export default function FisheriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />

          <div className={`relative ${container} py-12 sm:py-16`}>
            <Link
              href="/services/farming-construction"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Farming &amp; Farm Construction
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm mb-5">
                <Fish className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Fisheries Schemes
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/70">
                ମତ୍ସ୍ୟ ଯୋଜନା — Available government schemes for the fisheries sector
              </p>
            </div>
          </div>
        </section>

        <SchemeOverview />

        {/* Sector context */}
        <section className={`${container} pb-16 sm:pb-20`}>
          <div className={`${surface.card} p-6 sm:p-8 max-w-3xl`}>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              About fisheries sector support
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The fisheries sector in Odisha receives support through various government schemes
              aimed at promoting sustainable aquaculture, improving infrastructure, and ensuring
              the welfare of fisherfolk. We help you navigate these opportunities efficiently.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <span className="font-medium text-slate-900">ଓଡ଼ିଆରେ:</span> ଓଡ଼ିଶାରେ ମତ୍ସ୍ୟ କ୍ଷେତ୍ର ସ୍ଥାୟୀ ଜଳଚର
              କୃଷି, ମୌଳିକ ସୁବିଧା ଉନ୍ନତି, ଏବଂ ମତ୍ସ୍ୟଜୀବୀଙ୍କ କଲ୍ୟାଣ ନିଶ୍ଚିତ କରିବା ପାଇଁ ବିଭିନ୍ନ ସରକାରୀ ଯୋଜନା ମାଧ୍ୟମରେ
              ସମର୍ଥନ ପାଇଥାଏ।
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
