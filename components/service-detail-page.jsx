"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Building,
  CheckCircle2,
  Clock,
  Users,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getCategoryBySlug, getCategoryHref, getServiceHref } from "@/lib/service-categories";
import { accentFor, btn, btnSize, containerNarrow, surface } from "@/lib/ui";

const PHONE_DISPLAY = "+91 9040626617";
const PHONE_TEL = "+919040626617";
const WHATSAPP_NUMBER = "919040626617";

function redirectToWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
}

export function ServiceDetailPage({ categorySlug, serviceSlug }) {
  const category = getCategoryBySlug(categorySlug);
  const item = category?.subcategories.find((s) => s.slug === serviceSlug);
  if (!category || !item) return null;

  const Icon = category.icon;
  const accent = accentFor(category);
  const categoryHref = getCategoryHref(category);
  const otherServices = category.subcategories.filter((s) => s.slug && s.slug !== item.slug);

  const inquiryMessage = `Hello Matrubhoomi Team, I need support for "${item.name}" under ${category.title}.`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-slate-100 bg-white">
        <div className={`${containerNarrow} py-3`}>
          <ol className="flex items-center gap-1.5 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-300" />
            <li>
              <Link href={categoryHref} className="hover:text-slate-900 transition-colors">
                {category.shortTitle}
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-300" />
            <li className="text-slate-900 font-medium" aria-current="page">
              {item.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${accent.hero}`}>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className={`relative ${containerNarrow} py-10 sm:py-14`}>
          <Link
            href={categoryHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {category.shortTitle}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm mb-4">
              <Icon className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {item.name}
            </h1>
            <p className="mt-3 text-base text-white/75 leading-relaxed max-w-2xl">
              {item.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className={`${containerNarrow} py-10 sm:py-14 flex-1`}>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">
            {item.overview && (
              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Overview</h2>
                <p className="text-slate-600 leading-relaxed">{item.overview}</p>
              </section>
            )}

            {item.whoFor && (
              <section>
                <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900 mb-3">
                  <Users className="w-4 h-4 text-slate-400" />
                  Who it's for
                </h2>
                <p className="text-slate-600 leading-relaxed">{item.whoFor}</p>
              </section>
            )}

            {item.process?.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-5">How it works</h2>
                <ol className="relative space-y-6">
                  {item.process.map((step, index) => (
                    <li key={step.step} className="relative flex gap-4">
                      {/* Connector line between steps */}
                      {index < item.process.length - 1 && (
                        <span
                          className="absolute left-[15px] top-9 bottom-[-18px] w-px bg-slate-200"
                          aria-hidden="true"
                        />
                      )}
                      <span
                        className={`relative flex-shrink-0 grid place-items-center w-8 h-8 rounded-full text-xs font-bold ${accent.chipSolid}`}
                      >
                        {index + 1}
                      </span>
                      <div className="pt-1">
                        <div className="font-medium text-slate-900">{step.step}</div>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {item.requirements?.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Documents required</h2>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {item.requirements.map((req) => (
                    <li
                      key={req}
                      className={`flex items-start gap-2.5 text-sm text-slate-700 p-3 ${surface.panel}`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            {item.timeline && (
              <div className={`${surface.card} p-5`}>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Typical timeline
                </div>
                <p className="text-sm text-slate-600">{item.timeline}</p>
              </div>
            )}

            <div className={`${surface.card} p-5`}>
              <div className="text-sm font-semibold text-slate-900 mb-4">Get in touch</div>

              <div className="space-y-2.5 text-sm mb-4">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Building className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>
                    Office: <span className="font-medium text-slate-900">{PHONE_DISPLAY}</span>
                  </span>
                </a>
                <button
                  onClick={() => redirectToWhatsApp(inquiryMessage)}
                  className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors w-full text-left"
                >
                  <MessageCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <span>
                    WhatsApp: <span className="font-medium text-slate-900">{PHONE_DISPLAY}</span>
                  </span>
                </button>
              </div>

              <button
                onClick={() => redirectToWhatsApp(inquiryMessage)}
                className={`${btn.whatsapp} ${btnSize.md} w-full`}
              >
                <MessageCircle className="w-4 h-4" />
                Contact support
              </button>
              <a href={`tel:${PHONE_TEL}`} className={`${btn.secondary} ${btnSize.md} w-full mt-2`}>
                <Phone className="w-4 h-4" />
                Call us
              </a>
            </div>

            {otherServices.length > 0 && (
              <div className={`${surface.card} p-5`}>
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  Other services in {category.shortTitle}
                </div>
                <ul className="-mx-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={getServiceHref(category, s.slug)}
                        className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                      >
                        <span>{s.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-300 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
