"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { serviceCategories } from "@/lib/service-categories";

export default function AboutUsPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      year: "Foundation",
      title: "Foundation in Berhampur",
      description: "Started as a business consultancy firm in Berhampur, focusing on government scheme facilitation for local entrepreneurs.",
      icon: "🏢"
    },
    {
      year: "Growth",
      title: "Expansion to Fisheries",
      description: "Launched the Aqua-Nivesh platform to support the fisheries sector with technology and government scheme integration.",
      icon: "🐟"
    },
    {
      year: "Growth",
      title: "Business Advisory Division",
      description: "Established a dedicated division for DPR preparation, loan assistance, and business development support.",
      icon: "📊"
    },
    {
      year: "Expansion",
      title: "Bhubaneswar Presence",
      description: "Opened a presence in Saheed Nagar, Bhubaneswar, to expand reach across Odisha.",
      icon: "📍"
    },
    {
      year: "Today",
      title: "Multi-domain Platform",
      description: "Rebranded as Matrubhoomi Farms & Developers, bringing 7 business domains together under one roof.",
      icon: "🚀"
    },
    {
      year: "Ahead",
      title: "State-wide Network",
      description: "Building out our presence across Odisha, one district and one entrepreneur at a time.",
      icon: "🌐"
    }
  ];

  const expertiseAreas = [
    {
      role: "CA, Banking & Loans",
      expertise: "Chartered Accountancy & Government Liaison",
      description: "Handles statutory registrations, tax filings and bank/scheme liaison for every client."
    },
    {
      role: "Farming & Aquaculture",
      expertise: "Aquaculture & Agricultural Sciences",
      description: "Guides fisheries, animal husbandry and agriculture projects from setup to scheme approval."
    },
    {
      role: "Business Finance",
      expertise: "Project Finance & DPR Preparation",
      description: "Prepares bank-ready project reports and manages loan/scheme applications end to end."
    },
    {
      role: "Real Estate & Construction",
      expertise: "Civil Construction & Project Management",
      description: "Oversees land development, farm construction and residential/commercial projects."
    }
  ];

  const values = [
    {
      title: "Entrepreneur First",
      description: "Every decision is made keeping entrepreneurs' growth and success at the forefront.",
      icon: "💼"
    },
    {
      title: "Transparency & Trust",
      description: "Complete clarity in processes, pricing, and government scheme procedures.",
      icon: "🔍"
    },
    {
      title: "Innovation Driven",
      description: "Continuously evolving with technology to provide better solutions.",
      icon: "💡"
    },
    {
      title: "Community Impact",
      description: "Focused on creating sustainable livelihoods and economic growth.",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-emerald-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-blue-600 font-bold text-sm tracking-wider">ABOUT MATRUBHOOMI FARMS & DEVELOPERS</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6">
              Building Odisha's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Business Ecosystem
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From our humble beginnings in Berhampur to becoming Odisha's most trusted 
              business solutions platform, we're on a mission to empower every entrepreneur 
              with technology, expertise, and government support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Journey: From{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Berhampur to Bhubaneswar
                </span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Matrubhoomi Farms & Developers was founded in Berhampur, Odisha with a simple vision: 
                  to make government schemes and business opportunities accessible to every 
                  entrepreneur in the state.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  What started as a business consultancy firm has grown into a multi-domain
                  platform with a presence in Saheed Nagar, Bhubaneswar, helping entrepreneurs
                  across Odisha navigate business setup, expansion, and government scheme
                  utilization.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed">
                  Today, we bring CA &amp; banking, farming &amp; construction, real estate,
                  trading, software, manufacturing and retail together under one roof — so you
                  don't need a different consultant for every part of your business.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Join Our Network
                </Link>
                <a
                  href="https://wa.me/919040626617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Overview Card */}
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100 shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">At a Glance</h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "7", label: "Business Domains" },
                    { value: "34+", label: "Individual Services" },
                    { value: "1", label: "Single Point of Contact" },
                    { value: "Odisha", label: "Where We Operate" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-blue-200">
                  <div className="text-sm text-slate-600">
                    Registration and compliance details are shared directly with clients during
                    onboarding.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Growth{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Timeline
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A journey of continuous growth and expansion across Odisha
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${
                    index % 2 === 0 ? 'md:mt-0' : 'md:mt-12 lg:mt-24'
                  }`}
                >
                  <div 
                    className={`relative bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      activeMilestone === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setActiveMilestone(index)}
                    onMouseEnter={() => setActiveMilestone(index)}
                  >
                    {/* Year indicator */}
                    <div className="absolute -top-6 left-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
                        <span className="text-blue-600 font-bold text-sm">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-4xl mb-4">{milestone.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Business Solutions
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end support across 7 core business domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              const href = category.href ?? `/services/${category.slug}`;
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={href}>
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 h-full border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} mb-6`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {category.shortTitle}
                      </h3>

                      <p className="text-slate-600">{category.tagline}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Expertise
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dedicated teams across every business domain we support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500">
                  <h4 className="font-bold text-slate-900">{area.role}</h4>
                  <div className="mt-3 mb-3">
                    <div className="text-sm font-medium text-slate-700 mb-1">Expertise:</div>
                    <div className="text-slate-600 text-sm">{area.expertise}</div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Values
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Principles that guide every aspect of our work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 h-full border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Talk to Matrubhoomi Farms &amp; Developers about your business growth journey —
              across CA &amp; banking, farming, real estate, trading, software, manufacturing
              and retail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919040626617"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>💬</span>
                WhatsApp Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Visit Our Office
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-8 text-white/80">
                <div>
                  <div className="font-bold text-white mb-2">Headquarters</div>
                  <div className="text-blue-100">Saheed Nagar, Bhubaneswar</div>
                  <div className="text-sm">Berhampur, Odisha</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-2">Contact</div>
                  <div className="text-blue-100">+91 9040626617</div>
                  <div className="text-sm">contact@matrubhoomifarms.com</div>
                </div>
                <div>
                  <div className="font-bold text-white mb-2">Website</div>
                  <a 
                    href="https://matrubhoomifarms.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white"
                  >
                    www.matrubhoomifarms.com
                  </a>
                  <div className="text-sm">Aqua-Nivesh Platform Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}