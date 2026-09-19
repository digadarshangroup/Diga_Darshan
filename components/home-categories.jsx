"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/service-categories";
import { accentFor, container, sectionY } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/section";

export function HomeCategories() {
  return (
    <section className={`${sectionY} bg-slate-50`}>
      <div className={container}>
        <SectionHeading
          eyebrow="Our Business Domains"
          title="Everything your business needs, under one roof"
          subtitle="Choose a domain to see the services we handle, what documents you'll need, and how to reach our team."
          className="mb-10 lg:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const accent = accentFor(category);
            const href = category.href ?? `/services/${category.slug}`;

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" }}
              >
                <Link href={href} className="group block h-full">
                  <article
                    className={`relative h-full flex flex-col bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${accent.hoverBorder}`}
                  >
                    {/* Tint that washes in on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${accent.hoverTint} group-hover:opacity-100`}
                      aria-hidden="true"
                    />

                    <div className="relative flex flex-col h-full">
                      <div
                        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-transform duration-200 group-hover:scale-105 ${accent.chip}`}
                      >
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>

                      <h3 className="text-base font-semibold text-slate-900 leading-snug">
                        {category.shortTitle}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {category.tagline}
                      </p>

                      {/* mt-auto keeps this row aligned across cards of differing text length */}
                      <div
                        className={`mt-auto pt-5 flex items-center gap-1.5 text-sm font-semibold ${accent.text}`}
                      >
                        Explore
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
