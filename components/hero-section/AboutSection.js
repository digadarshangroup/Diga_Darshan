"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-full mb-6 border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-blue-600 font-bold text-sm tracking-wider">DIGA DARSHAN GROUP</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
            Transforming Odisha's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Business Ecosystem
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From our roots in Berhampur to our new headquarters in Bhubaneswar, we're building 
            Odisha's most comprehensive business support platform across fisheries, trading, 
            agriculture, MSME, and infrastructure development.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
          {[
            { number: "10,000+", label: "Entrepreneurs Empowered", icon: "🚀" },
            { number: "₹500Cr+", label: "Business Value Created", icon: "💰" },
            { number: "200+", label: "Government Schemes", icon: "📋" },
            { number: "30+", label: "District Presence", icon: "📍" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200"
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-semibold text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Legacy & Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                Established in Berhampur, Odisha, Diga Darshan Group has evolved into Odisha's 
                premier business facilitation platform. With our new headquarters in Saheed Nagar, 
                Bhubaneswar, we're expanding our reach to serve entrepreneurs across 30+ districts.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">What We Offer</h3>
              <ul className="space-y-3">
                {[
                  "End-to-end project implementation",
                  "Government subsidy facilitation",
                  "Professional DPR preparation",
                  "Loan & financial assistance",
                  "Infrastructure development",
                  "Market linkage & buy-back"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}