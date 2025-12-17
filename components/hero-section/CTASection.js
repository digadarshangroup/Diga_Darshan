"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 p-8 md:p-12 lg:p-16 shadow-2xl"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            
            <p className="text-xl text-slate-300 mb-8">
              Join 10,000+ successful entrepreneurs who trust Diga Darshan Group for their business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/919040626617', '_blank')}
                className="group relative overflow-hidden px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-green-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-3">
                  <span className="text-lg">💬</span>
                  WhatsApp: +91 9040626617
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <a
                href="mailto:digadarshangroup@gmail.com"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Email: contact@digadarshan.com
              </a>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            {[
              {
                icon: "🏢",
                title: "Headquarters",
                primary: "Saheed Nagar, Bhubaneswar",
                secondary: "Berhampur, Odisha",
                action: "View on Map"
              },
              {
                icon: "🌐",
                title: "Website",
                primary: "https://digadarshan.com",
                secondary: "All Platform Links",
                action: "Visit Website"
              },
              {
                icon: "📞",
                title: "24x7 Support",
                primary: "+91 9040626617",
                secondary: "All Services & Domains",
                action: "Call Now"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <div className="text-white/90 text-lg mb-1">{item.primary}</div>
                <div className="text-white/60 text-sm mb-4">{item.secondary}</div>
                <button className="text-sm text-blue-300 hover:text-blue-200 font-semibold">
                  {item.action} →
                </button>
              </motion.div>
            ))}
          </div>

          {/* Services Mention */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-white/80 text-sm mb-4">Our Comprehensive Services Include:</div>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "PNEGP | CGTMSE | MKUY",
                  "PMMSY | PMFME | MSME",
                  "DPR Preparation",
                  "Project Loans",
                  "Civil Construction",
                  "Mechanical Construction",
                  "Borewell & Shed Construction",
                  "Buy Back Facilities"
                ].map((service, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}