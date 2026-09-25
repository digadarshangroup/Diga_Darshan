"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, MessageCircle, Fish, LineChart, Building2 } from "lucide-react";
import { btn, btnSize, container, sectionY, surface } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/section";

const FEATURES = [
  {
    id: "fisheries",
    tab: "Fisheries",
    title: "For fisheries entrepreneurs",
    Icon: Fish,
    points: [
      "Complete pond setup & management",
      "Up to 40% subsidy on equipment",
      "Feed & medicine supply chain",
      "Market linkage with buy-back",
      "Disease prevention training",
      "Export documentation support",
    ],
    cta: "Visit Aqua-Nivesh",
    link: "https://aquanivesh.matrubhoomifarms.com",
  },
  {
    id: "trading",
    tab: "Trading",
    title: "For trading aspirants",
    Icon: LineChart,
    points: [
      "Live market training sessions",
      "Expert mentorship programs",
      "Capital management guidance",
      "Risk management strategies",
      "Trading tools & software",
      "Community support network",
    ],
    cta: "Join Trading Hub",
    link: "/trading",
  },
  {
    id: "msme",
    tab: "MSME",
    title: "For MSME businesses",
    Icon: Building2,
    points: [
      "DPR & project report preparation",
      "Loan sanction assistance",
      "GST & compliance support",
      "Market expansion strategy",
      "Quality certification help",
      "Government scheme availing",
    ],
    cta: "Get MSME support",
    link: "/services/entrepreneur-manufacturing",
  },
];

const WHY_US = [
  "Single point of contact across every step",
  "Direct liaison with banks and scheme authorities",
  "Transparent process — no hidden charges",
  "Local presence across Odisha",
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = FEATURES[activeTab];
  const ActiveIcon = active.Icon;

  return (
    <section className={`${sectionY} bg-slate-50`}>
      <div className={container}>
        <SectionHeading
          eyebrow="Tailored support"
          title="Solutions for every business stage"
          subtitle="Whether you're starting up or scaling up, we have the right support for your journey."
          className="mb-10"
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Business stage"
          className="flex justify-center gap-1.5 mb-8 p-1.5 bg-white rounded-xl border border-slate-200 w-fit mx-auto"
        >
          {FEATURES.map((feature, index) => {
            const isActive = activeTab === index;
            const TabIcon = feature.Icon;
            return (
              <button
                key={feature.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-brand-700 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <TabIcon className="w-4 h-4" strokeWidth={2} />
                {feature.tab}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="tabpanel"
            className={`${surface.card} p-6 sm:p-8 lg:p-10`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <ActiveIcon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    {active.title}
                  </h3>
                </div>

                <ul className="space-y-3 mb-8">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={active.link} className={`${btn.primary} ${btnSize.md}`}>
                    {active.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/917750878444?text=${encodeURIComponent(
                          `Hello Matrubhoomi Team, I'm interested in ${active.title}.`
                        )}`,
                        "_blank"
                      )
                    }
                    className={`${btn.secondary} ${btnSize.md}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Free consultation
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">Why work with us</h4>
                <ul className="space-y-3">
                  {WHY_US.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
