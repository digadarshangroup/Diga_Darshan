"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
  const services = [
    {
      category: "Fisheries (Aqua-Nivesh)",
      items: [
        "Fish farm setup & management",
        "Feed & nutrition consultancy",
        "Disease control solutions",
        "Market linkage & export",
        "Subsidy up to 40%",
        "Technical training"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Trading Education",
      items: [
        "Stock market training",
        "Commodities trading",
        "Forex market courses",
        "Live trading sessions",
        "Mentorship programs",
        "Capital guidance"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Agriculture & MSME",
      items: [
        "PMFME scheme support",
        "CGTMSE loan assistance",
        "Organic certification",
        "DPR preparation",
        "Project loan processing",
        "Udyam registration"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Infrastructure",
      items: [
        "Borewell construction",
        "Shed development",
        "Cold storage setup",
        "Farm construction",
        "Buy-back facilities",
        "Quality certification"
      ],
      color: "from-amber-500 to-orange-500"
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
            Comprehensive Services Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              5 Major Domains
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            From concept to completion, we provide end-to-end solutions for your business success
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500">
                {/* Service Header */}
                <div className={`h-2 rounded-full mb-6 bg-gradient-to-r ${service.color}`} />
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.category}
                </h3>
                
                {/* Service Items */}
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 bg-gradient-to-r ${service.color}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">Government Schemes</h4>
              <p className="text-white/80">
                We facilitate PMEGP, CGTMSE, MKUY, PMMSY, PMFME, and MSME schemes with complete documentation support.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Loan Assistance</h4>
              <p className="text-white/80">
                Complete project loan support including DPR preparation, document processing, and bank liaison.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Construction</h4>
              <p className="text-white/80">
                Turnkey construction solutions with buy-back guarantee and quality certification.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}