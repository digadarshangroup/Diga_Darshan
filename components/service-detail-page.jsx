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
  const categoryHref = getCategoryHref(category);
  const otherServices = category.subcategories.filter(
    (s) => s.slug && s.slug !== item.slug
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-1.5 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <Link href={categoryHref} className="hover:text-slate-900 transition-colors">
            {category.shortTitle}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-slate-900 font-medium">{item.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-r ${category.color}`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Link href={categoryHref}>
            <button className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
              Back to {category.shortTitle}
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-5"
          >
            <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
              <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                {item.name}
              </h1>
              <p className="text-base sm:text-lg text-white/85 font-medium mt-2 max-w-2xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {item.overview && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Overview</h2>
                <p className="text-slate-700 leading-relaxed">{item.overview}</p>
              </div>
            )}

            {item.whoFor && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-slate-400" />
                  Who It's For
                </h2>
                <p className="text-slate-700 leading-relaxed">{item.whoFor}</p>
              </div>
            )}

            {item.process && item.process.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-5">How It Works</h2>
                <ol className="space-y-5">
                  {item.process.map((step, index) => (
                    <li key={step.step} className="flex gap-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${category.color} text-white text-sm font-bold flex items-center justify-center`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{step.step}</div>
                        <p className="text-sm text-slate-600 mt-0.5">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {item.requirements && item.requirements.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Documents Required</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {item.requirements.map((req) => (
                    <li
                      key={req}
                      className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3 border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {item.timeline && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Typical Timeline
                </div>
                <p className="text-sm text-slate-600">{item.timeline}</p>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-900 mb-4">For Inquiry</div>
              <div className="space-y-3 text-sm mb-5">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Building className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  Book Office No: <span className="font-semibold">{PHONE_DISPLAY}</span>
                </a>
                <button
                  onClick={() =>
                    redirectToWhatsApp(
                      `Hello Matrubhoomi Team, I need support for "${item.name}" under ${category.title}.`
                    )
                  }
                  className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  WhatsApp No: <span className="font-semibold">{PHONE_DISPLAY}</span>
                </button>
              </div>
              <button
                onClick={() =>
                  redirectToWhatsApp(
                    `Hello Matrubhoomi Team, I need support for "${item.name}" under ${category.title}.`
                  )
                }
                className={`w-full px-4 py-3 rounded-xl bg-gradient-to-r ${category.color} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
              >
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </button>
            </div>

            {otherServices.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="text-sm font-semibold text-slate-900 mb-4">
                  Other Services in {category.shortTitle}
                </div>
                <ul className="space-y-1">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={getServiceHref(category, s.slug)}
                        className="flex items-center justify-between py-2 text-sm text-slate-700 hover:text-slate-900 group"
                      >
                        <span>{s.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
