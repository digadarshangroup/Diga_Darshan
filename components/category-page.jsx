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
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getCategoryBySlug, getServiceHref } from "@/lib/service-categories";
import { accentFor, btn, btnSize, container, heading, sectionY, surface } from "@/lib/ui";
import { SectionHeading, Reveal } from "@/components/ui/section";

const PHONE_DISPLAY = "+91 9040626617";
const PHONE_TEL = "+919040626617";
const WHATSAPP_NUMBER = "919040626617";

function redirectToWhatsApp(message) {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
}

function SubcategoryCard({ category, item, index }) {
  const Icon = category.icon;
  const accent = accentFor(category);
  const href = item.href ?? (item.slug ? getServiceHref(category, item.slug) : null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.24), ease: "easeOut" }}
    >
      <Link href={href ?? "#"} className="group block h-full">
        <article
          className={`h-full flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${accent.hoverBorder}`}
        >
          <div
            className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg transition-transform duration-200 group-hover:scale-105 ${accent.chip}`}
          >
            <Icon className="w-4 h-4" strokeWidth={2} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold text-slate-900 leading-snug">{item.name}</h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
          </div>

          <ArrowRight
            className={`flex-shrink-0 w-4 h-4 mt-1 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 ${accent.arrowHover}`}
          />
        </article>
      </Link>
    </motion.div>
  );
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="text-base font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 mt-0.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-9 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CategoryPage({ slug, category: categoryProp }) {
  const category = categoryProp ?? getCategoryBySlug(slug);
  const [openFaq, setOpenFaq] = useState(0);

  if (!category) return null;

  const Icon = category.icon;
  const accent = accentFor(category);
  const hero = category.hero;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero — each domain carries its own imagery and quick facts, so no two
          category pages read as the same page with the nouns swapped. */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${hero.bgImage}')` }}
          aria-hidden="true"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${hero.overlay}`} aria-hidden="true" />

        <div className={`relative ${container} py-12 sm:py-16 lg:py-20`}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all domains
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 ring-1 ring-white/20 mb-6">
                <span className="text-white font-semibold text-sm">{hero.odiaTitle}</span>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="text-white/70 text-xs font-medium">Matrubhoomi</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                    {category.title}
                  </h1>
                  <p className="mt-3 text-base sm:text-lg font-medium text-white/70">
                    {category.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base text-white/80 leading-relaxed max-w-2xl">
                {category.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    redirectToWhatsApp(
                      `Hello Matrubhoomi Team, I'm interested in ${category.title}. Please guide me.`
                    )
                  }
                  className={`${btn.whatsapp} ${btnSize.lg} whitespace-nowrap`}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp consultation
                </button>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className={`${btn.onDarkOutline} ${btnSize.lg} whitespace-nowrap`}
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </motion.div>

            {/* Quick facts — fills what used to be dead space on the right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 ring-1 ring-white/20">
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {hero.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] text-white/60 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/15">
                  <div className="text-sm text-white/60">
                    {category.subcategories.length} services in this domain
                  </div>
                  <div className="text-white font-semibold mt-1 text-sm">
                    Berhampur • Bhubaneswar • Across Odisha
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`${sectionY} bg-slate-50`}>
        <div className={container}>
          <SectionHeading
            eyebrow="What we handle"
            title="Services in this domain"
            subtitle="Open any service to see the documents required, how the process works, and how long it usually takes."
            className="mb-10"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {category.subcategories.map((item, index) => (
              <SubcategoryCard key={item.name} category={category} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us — specific to this domain */}
      {category.highlights?.length > 0 && (
        <section className={`${sectionY} bg-white`}>
          <div className={container}>
            <SectionHeading
              eyebrow="Why this team"
              title={`What you get with ${category.shortTitle}`}
              subtitle="The practical differences that matter once work actually starts."
              className="mb-10"
            />

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
              {category.highlights.map((point, index) => (
                <Reveal key={point.title} delay={index * 0.06}>
                  <div className={`${surface.card} h-full p-5 sm:p-6`}>
                    <div className="flex items-start gap-3.5">
                      <span
                        className={`flex-shrink-0 grid place-items-center w-8 h-8 rounded-lg ${accent.chip}`}
                      >
                        <CheckCircle2 className="w-4 h-4" strokeWidth={2} />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{point.title}</h3>
                        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                          {point.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs — specific to this domain */}
      {category.faqs?.length > 0 && (
        <section className={`${sectionY} bg-slate-50`}>
          <div className={container}>
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                eyebrow="Common questions"
                title={`${category.shortTitle} — asked often`}
                className="mb-8"
              />

              <div className={`${surface.card} px-5 sm:px-7`}>
                {category.faqs.map((faq, index) => (
                  <FaqItem
                    key={faq.q}
                    faq={faq}
                    isOpen={openFaq === index}
                    onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-slate-900">
        <div className={`${container} py-14 sm:py-16 lg:py-20 text-center`}>
          <h2 className={heading.h2.replace("text-slate-900", "text-white")}>
            Ready to get started with {category.shortTitle}?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Talk to our team for a free initial consultation — no obligation required.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() =>
                redirectToWhatsApp(
                  `Hello Matrubhoomi Team, I'm interested in ${category.title}. Please guide me.`
                )
              }
              className={`${btn.whatsapp} ${btnSize.lg}`}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp consultation
            </button>
            <a href={`tel:${PHONE_TEL}`} className={`${btn.onDarkOutline} ${btnSize.lg}`}>
              <Phone className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
