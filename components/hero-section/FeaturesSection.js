"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "For Fisheries Entrepreneurs",
      icon: "🐟",
      points: [
        "Complete pond setup & management",
        "40% subsidy on equipment",
        "Feed & medicine supply chain",
        "Market linkage with buy-back",
        "Disease prevention training",
        "Export documentation support"
      ],
      cta: "Visit Aqua-Nivesh",
      link: "https://aquanivesh.digadarshan.com"
    },
    {
      title: "For Trading Aspirants",
      icon: "📊",
      points: [
        "Live market training sessions",
        "Expert mentorship programs",
        "Capital management guidance",
        "Risk management strategies",
        "Trading tools & software",
        "Community support network"
      ],
      cta: "Join Trading Hub",
      link: "/trading"
    },
    {
      title: "For MSME Businesses",
      icon: "🏢",
      points: [
        "DPR & project report preparation",
        "Loan sanction assistance",
        "GST & compliance support",
        "Market expansion strategy",
        "Quality certification help",
        "Government scheme availing"
      ],
      cta: "Get MSME Support",
      link: "/msme"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Tailored Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Every Business Stage
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Whether you're starting up or scaling up, we have the right support for your journey
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
              }`}
            >
              <span className="mr-2">{feature.icon}</span>
              {feature.title.split(' ')[2]}
            </button>
          ))}
        </div>

        {/* Active Feature Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-200"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-4xl">{features[activeTab].icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {features[activeTab].title}
                </h3>
              </div>
              
              <ul className="space-y-4 mb-8">
                {features[activeTab].points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <a
                  href={features[activeTab].link}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  {features[activeTab].cta}
                </a>
                <button 
                  onClick={() => window.open(`https://wa.me/919040626617?text=I'm interested in ${features[activeTab].title}`, '_blank')}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  Free Consultation
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Success Story</h4>
              <div className="space-y-4">
                <p className="text-slate-700 italic">
                  "With Diga Darshan's support, we expanded our fish farm from 2 to 10 acres and 
                  secured 40% subsidy. Their end-to-end guidance made the journey smooth."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                    BS
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Bhabani Sankar Patnaik</div>
                    <div className="text-slate-600 text-sm">Aquaculture Entrepreneur, Berhampur</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}