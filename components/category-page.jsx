"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Phone,
  MessageCircle,
  Building,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getCategoryBySlug, getServiceHref } from "@/lib/service-categories";

const PHONE_DISPLAY = "+91 9040626617";
const PHONE_TEL = "+919040626617";
const WHATSAPP_NUMBER = "919040626617";

function redirectToWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
}

function SubcategoryCard({ category, item, index }) {
  const [open, setOpen] = useState(false);
  const Icon = category.icon;
  const href = item.href ?? (item.slug ? getServiceHref(category, item.slug) : null);

  const cardInner = (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-base sm:text-lg">{item.name}</h3>
          <p className="text-sm text-slate-600 mt-1">{item.description}</p>
        </div>
      </div>
      {href ? (
        <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-2" />
      ) : (
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-2 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer"
        >
          {cardInner}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
    >
      <button className="w-full text-left" onClick={() => setOpen((o) => !o)}>
        {cardInner}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-5 border-t border-slate-100 grid sm:grid-cols-2 gap-6">
              {item.requirements && item.requirements.length > 0 && (
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    What You'll Need
                  </div>
                  <ul className="space-y-2">
                    {item.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  For Inquiry
                </div>
                <div className="space-y-2 text-sm">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Building className="w-4 h-4 text-blue-500" />
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
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                    WhatsApp No: <span className="font-semibold">{PHONE_DISPLAY}</span>
                  </button>
                </div>
                <button
                  onClick={() =>
                    redirectToWhatsApp(
                      `Hello Matrubhoomi Team, I need support for "${item.name}" under ${category.title}.`
                    )
                  }
                  className={`mt-4 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Support
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CategoryPage({ slug, category: categoryProp }) {
  const category = categoryProp ?? getCategoryBySlug(slug);
  if (!category) return null;
  const Icon = category.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-r ${category.color}`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <Link href="/">
            <button className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all duration-300">
              <ArrowLeft className="w-4 h-4" />
              Back to Categories
            </button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-5"
          >
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                {category.title}
              </h1>
              <p className="text-lg sm:text-xl text-white/85 font-medium mt-2">{category.tagline}</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/90 max-w-3xl mt-6 leading-relaxed"
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              What We Help You With
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Tap any service below to see what you'll need and how to reach our team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {category.subcategories.map((item, index) => (
              <SubcategoryCard key={item.name} category={category} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started with {category.shortTitle}?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Talk to our team for a free initial consultation — no obligation required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                redirectToWhatsApp(
                  `Hello Matrubhoomi Team, I'm interested in ${category.title}. Please guide me.`
                )
              }
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Consultation
            </button>
            <a
              href={`tel:${PHONE_TEL}`}
              className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
