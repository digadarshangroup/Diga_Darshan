"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/service-categories";

export function HomeCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-full mb-6 border border-emerald-100">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-emerald-700 font-bold text-sm tracking-wider">
              OUR BUSINESS DOMAINS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Everything Your Business Needs,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Under One Roof
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose a category to see the services, requirements, and support available to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const href = category.href ?? `/services/${category.slug}`;
            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Link href={href} className="group block h-full">
                  <div className="relative h-full bg-white rounded-2xl border border-slate-200 p-6 overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-transparent transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} mb-5 shadow-md group-hover:scale-110 transition-transform duration-500`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {category.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                        {category.tagline}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:gap-3 transition-all duration-300">
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
