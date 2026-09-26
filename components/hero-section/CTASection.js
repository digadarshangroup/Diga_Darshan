"use client";

import { MessageCircle, Phone, Mail, MapPin, Globe } from "lucide-react";
import { serviceCategories } from "@/lib/service-categories";
import { btn, btnSize, container } from "@/lib/ui";
import { Reveal } from "@/components/ui/section";

const CONTACT_BLOCKS = [
  {
    Icon: MapPin,
    title: "Headquarters",
    primary: "Saheed Nagar, Bhubaneswar",
    secondary: "Berhampur, Odisha",
  },
  {
    Icon: Globe,
    title: "Website",
    primary: "matrubhoomifarms.com",
    secondary: "All platform links",
  },
  {
    Icon: Phone,
    title: "Support",
    primary: "+91 7750878444",
    secondary: "All services & domains",
  },
];

export default function CTASection() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className={container}>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Ready to transform your business?
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-300">
                  Talk to Matrubhoomi about your business growth — one team, seven domains.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => window.open("https://wa.me/917750878444", "_blank")}
                    className={`${btn.whatsapp} ${btnSize.lg}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp: +91 7750878444
                  </button>
                  <a
                    href="mailto:hr@matrubhumi.net"
                    className={`${btn.onDarkOutline} ${btnSize.lg}`}
                  >
                    <Mail className="w-4 h-4" />
                    Email us
                  </a>
                </div>
              </div>

              {/* Contact grid */}
              <div className="mt-12 pt-10 border-t border-white/10 grid sm:grid-cols-3 gap-6">
                {CONTACT_BLOCKS.map(({ Icon, title, primary, secondary }) => (
                  <div key={title} className="text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
                      <Icon className="w-3.5 h-3.5" />
                      {title}
                    </div>
                    <div className="text-white font-medium">{primary}</div>
                    <div className="text-sm text-slate-400 mt-0.5">{secondary}</div>
                  </div>
                ))}
              </div>

              {/* Domain chips */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-400 mb-4">
                  Our services include
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {serviceCategories.map((category) => (
                    <span
                      key={category.slug}
                      className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-300 text-xs font-medium"
                    >
                      {category.shortTitle}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-slate-300 text-xs font-medium">
                    PMEGP · CGTMSE · MKUY · PMMSY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
