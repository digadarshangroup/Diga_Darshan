"use client";

import { CheckCircle2 } from "lucide-react";
import { container, sectionY, surface } from "@/lib/ui";
import { SectionHeading, Reveal } from "@/components/ui/section";

const HIGHLIGHTS = [
  { value: "7", label: "Business domains" },
  { value: "34+", label: "Individual services" },
  { value: "1", label: "Single point of contact" },
  { value: "Odisha", label: "Where we operate" },
];

const OFFERINGS = [
  "End-to-end project implementation",
  "Government subsidy facilitation",
  "Professional DPR preparation",
  "Loan & financial assistance",
  "Infrastructure development",
  "Market linkage & buy-back",
];

export default function AboutSection() {
  return (
    <section className={`${sectionY} bg-white`}>
      <div className={container}>
        <SectionHeading
          eyebrow="About Matrubhoomi"
          title="Transforming Odisha's business ecosystem"
          subtitle="From our roots in Berhampur to a growing presence in Bhubaneswar, we're building Odisha's most comprehensive business support platform — spanning CA & banking, farming & farm construction, real estate, trading, software development, entrepreneurship & manufacturing, and product & retail."
          className="mb-12"
        />

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 lg:mb-16">
          {HIGHLIGHTS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.06}>
              <div className={`${surface.card} p-5 sm:p-6 h-full text-center`}>
                <div className="text-2xl sm:text-3xl font-bold text-brand-700 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-slate-600">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Vision + offerings */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Based in Berhampur with a growing presence in Bhubaneswar, Matrubhoomi is building
                a single, trusted platform for entrepreneurs across Odisha — bringing CA and
                banking support, farming and construction, real estate, trading, software,
                manufacturing and retail together under one roof.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">What we offer</h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-2.5">
                {OFFERINGS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
