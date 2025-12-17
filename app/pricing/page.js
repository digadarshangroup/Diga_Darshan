"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, TrendingUp, Users, Clock, Award, Star, Zap, Building, Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("fisheries");
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const serviceCategories = [
    { id: "fisheries", name: "Fisheries (Aqua-Nivesh)", icon: "🐟", color: "from-blue-500 to-cyan-500" },
    { id: "trading", name: "Trading Education", icon: "📈", color: "from-purple-500 to-pink-500" },
    { id: "msme", name: "MSME & Business", icon: "🏢", color: "from-amber-500 to-orange-500" },
    { id: "agriculture", name: "Agriculture", icon: "🌱", color: "from-green-500 to-emerald-500" },
    { id: "infrastructure", name: "Infrastructure", icon: "🏗️", color: "from-red-500 to-rose-500" },
  ];

  const consultationPackages = [
    {
      id: "basic",
      name: "Basic Consultation",
      tagline: "Get Started with Expert Guidance",
      price: "Custom Quote",
      duration: "1-2 Hours",
      features: [
        "Initial Business Assessment",
        "Scheme Eligibility Check",
        "Basic Documentation Review",
        "15-minute Q&A Session",
        "Email Support for 7 days",
        "General Market Analysis"
      ],
      cta: "Book Free Consultation",
      popular: false,
      color: "from-blue-100 to-blue-50",
      border: "border-blue-200"
    },
    {
      id: "professional",
      name: "Professional Package",
      tagline: "Most Popular Choice",
      price: "Project-Based",
      duration: "1-2 Weeks",
      features: [
        "Complete DPR Preparation",
        "Scheme Application Processing",
        "Bank Loan Assistance",
        "License & Registration Support",
        "Weekly Progress Updates",
        "Priority WhatsApp Support",
        "Market Linkage Setup",
        "Basic Compliance Guidance"
      ],
      cta: "Get Custom Quote",
      popular: true,
      color: "from-emerald-100 to-emerald-50",
      border: "border-emerald-300"
    },
    {
      id: "enterprise",
      name: "Enterprise Solution",
      tagline: "End-to-End Implementation",
      price: "Custom Investment",
      duration: "1-3 Months",
      features: [
        "Complete Project Management",
        "Infrastructure Development",
        "Staff Training & SOPs",
        "Quality Certification",
        "Buy-Back Agreement Setup",
        "24/7 Dedicated Support",
        "Regular Site Visits",
        "Advanced Market Analysis",
        "Growth Strategy Planning",
        "Government Liaison Support"
      ],
      cta: "Schedule Executive Meeting",
      popular: false,
      color: "from-violet-100 to-violet-50",
      border: "border-violet-200"
    }
  ];

  const serviceDetails = {
    fisheries: {
      title: "Aqua-Nivesh Fisheries Solutions",
      subtitle: "Complete Fisheries Ecosystem Support",
      description: "From pond setup to market linkage, we provide end-to-end solutions for profitable fish farming.",
      features: [
        { name: "Pond Construction & Setup", details: "Scientific design with proper aeration and drainage systems" },
        { name: "Government Subsidy Assistance", details: "Up to 40% subsidy under PMMSY scheme" },
        { name: "Feed & Nutrition Management", details: "Customized feed plans and supply chain setup" },
        { name: "Disease Prevention System", details: "Regular health checks and preventive measures" },
        { name: "Market Linkage", details: "Direct buyer connections with buy-back options" },
        { name: "Training & Certification", details: "Complete training program with government certification" }
      ],
      investmentRange: "₹5 Lakhs - ₹50 Lakhs",
      roiTimeframe: "12-18 months",
      successRate: "95%",
      whatsappMessage: "Hello Diga Darshan, I'm interested in fisheries business. Please share investment details and subsidy options."
    },
    trading: {
      title: "Trading Education Programs",
      subtitle: "Build Your Financial Future",
      description: "Structured learning programs for stock market, commodities, and forex trading.",
      features: [
        { name: "Beginner to Advanced Courses", details: "Structured curriculum with live trading sessions" },
        { name: "Personal Mentorship", details: "One-on-one guidance from market experts" },
        { name: "Capital Management", details: "Risk assessment and capital allocation strategies" },
        { name: "Trading Tools Access", details: "Professional software and analysis tools" },
        { name: "Community Support", details: "Access to exclusive trader community" },
        { name: "Certification", details: "Industry-recognized certification on completion" }
      ],
      investmentRange: "₹25,000 - ₹2,00,000",
      roiTimeframe: "6-12 months",
      successRate: "85%",
      whatsappMessage: "Hello, I want to learn trading. Please share course details and fee structure."
    },
    msme: {
      title: "MSME Business Solutions",
      subtitle: "Complete Business Setup & Growth",
      description: "End-to-end support for MSME registration, financing, and business development.",
      features: [
        { name: "DPR Preparation", details: "Professional project reports for bank loans" },
        { name: "Loan Assistance", details: "CGTMSE and other loan scheme facilitation" },
        { name: "Registration & Licensing", details: "Udyam, GST, and all required registrations" },
        { name: "Government Scheme Availing", details: "PMEGP, PMFME, and other scheme support" },
        { name: "Business Plan Development", details: "Complete business model and strategy" },
        { name: "Compliance Management", details: "Ongoing compliance and legal support" }
      ],
      investmentRange: "₹1 Lakh - ₹5 Crores",
      roiTimeframe: "18-36 months",
      successRate: "90%",
      whatsappMessage: "Hello, I need MSME registration and loan assistance. Please guide me."
    },
    agriculture: {
      title: "Agriculture & Horticulture Solutions",
      subtitle: "Modern Farming with Maximum Profit",
      description: "Technology-driven farming solutions with organic certification and market access.",
      features: [
        { name: "Farm Setup & Planning", details: "Complete farm design and crop planning" },
        { name: "Irrigation Solutions", details: "Drip and sprinkler irrigation systems" },
        { name: "Organic Certification", details: "Complete organic farming certification process" },
        { name: "Market Linkage", details: "Direct market access and buyer connections" },
        { name: "Government Subsidies", details: "Up to 50% subsidy on equipment and inputs" },
        { name: "Training Programs", details: "Modern farming techniques and practices" }
      ],
      investmentRange: "₹3 Lakhs - ₹25 Lakhs",
      roiTimeframe: "12-24 months",
      successRate: "92%",
      whatsappMessage: "Hello, I want to start/expand my agriculture business. Need guidance on subsidies."
    },
    infrastructure: {
      title: "Infrastructure Development",
      subtitle: "Turnkey Construction Solutions",
      description: "Complete infrastructure setup with quality assurance and buy-back guarantee.",
      features: [
        { name: "Borewell Construction", details: "Scientific drilling with water testing" },
        { name: "Shed & Warehouse Construction", details: "Custom-designed structures" },
        { name: "Cold Storage Setup", details: "Temperature-controlled storage solutions" },
        { name: "Farm Infrastructure", details: "Complete farm setup and utilities" },
        { name: "Quality Certification", details: "ISO and quality standard compliance" },
        { name: "Buy-Back Agreement", details: "Guaranteed buy-back for produce" }
      ],
      investmentRange: "₹10 Lakhs - ₹1 Crore",
      roiTimeframe: "24-36 months",
      successRate: "98%",
      whatsappMessage: "Hello, I need construction services for my business. Please share project details."
    }
  };

  const successMetrics = [
    { value: "10,000+", label: "Entrepreneurs Served", icon: <Users className="w-6 h-6" /> },
    { value: "₹500Cr+", label: "Business Value Created", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "95%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { value: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const redirectToWhatsApp = (message = "Hello Diga Darshan Team, I want to know about your services and pricing.") => {
    const phoneNumber = "919040626617";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const currentService = serviceDetails[activeCategory];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm tracking-wider">INVESTMENT & SERVICES</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Strategic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200">
                Business Solutions
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transparent, value-driven packages tailored to your business needs. 
              No hidden costs, only measurable results.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <div className="text-white">
                    {metric.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm text-blue-200">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Business Domain
              </span>
            </h2>
            <p className="text-slate-600">Select your area of interest for customized solutions</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Service Info */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  {currentService.title}
                </h2>
                <p className="text-xl text-emerald-600 font-semibold mb-4">
                  {currentService.subtitle}
                </p>
                <p className="text-lg text-slate-600 mb-8">
                  {currentService.description}
                </p>
              </div>
              
              {/* Investment Highlights */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-100 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Investment Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {currentService.investmentRange}
                    </div>
                    <div className="text-sm text-slate-600">Investment Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {currentService.roiTimeframe}
                    </div>
                    <div className="text-sm text-slate-600">Expected ROI Timeframe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {currentService.successRate}
                    </div>
                    <div className="text-sm text-slate-600">Success Rate</div>
                  </div>
                </div>
              </div>
              
              {/* Features List */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included</h3>
                <div className="space-y-4">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">
                          {feature.name}
                        </div>
                        <div className="text-sm text-slate-600">
                          {feature.details}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Consultation Packages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-8">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Consultation Packages
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Choose the level of support that matches your business needs
                    </p>
                    
                    {/* Package Selection */}
                    <div className="flex border-b border-slate-200 mb-8">
                      {consultationPackages.map((pkg) => (
                        <button
                          key={pkg.id}
                          onClick={() => setSelectedPlan(pkg.id)}
                          className={`flex-1 py-3 text-center font-semibold transition-all duration-300 ${
                            selectedPlan === pkg.id
                              ? 'border-b-2 border-blue-600 text-blue-600'
                              : 'text-slate-500 hover:text-slate-700'
                          }`}
                        >
                          {pkg.name}
                        </button>
                      ))}
                    </div>
                    
                    {/* Selected Package Details */}
                    <div className="space-y-6">
                      {consultationPackages
                        .filter(pkg => pkg.id === selectedPlan)
                        .map((pkg) => (
                          <div key={pkg.id}>
                            {pkg.popular && (
                              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full mb-4">
                                <Star className="w-4 h-4" />
                                <span className="text-sm font-semibold">Most Popular</span>
                              </div>
                            )}
                            
                            <div className={`rounded-xl p-6 border ${pkg.border} ${pkg.color}`}>
                              <div className="flex items-baseline gap-2 mb-2">
                                <div className="text-3xl font-black text-slate-900">
                                  {pkg.price}
                                </div>
                                <div className="text-slate-600">• {pkg.duration}</div>
                              </div>
                              <div className="text-emerald-600 font-semibold mb-4">
                                {pkg.tagline}
                              </div>
                              
                              <div className="space-y-3 mb-8">
                                {pkg.features.map((feature, index) => (
                                  <div key={index} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{feature}</span>
                                  </div>
                                ))}
                              </div>
                              
                              <button
                                onClick={() => redirectToWhatsApp(currentService.whatsappMessage)}
                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                              >
                                <MessageSquare className="w-5 h-5" />
                                {pkg.cta}
                              </button>
                              
                              <div className="text-center mt-4 text-sm text-slate-500">
                                Customized quote based on your specific requirements
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  
                  {/* Trust Badges */}
                  <div className="border-t border-slate-200 p-6 bg-slate-50">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-500" />
                        <span>Government Approved</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-500" />
                        <span>MSME Registered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span>10,000+ Clients</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Contact Card */}
                <div className="mt-6 bg-gradient-to-r from-blue-900 to-emerald-900 rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-bold mb-3">Need Immediate Assistance?</h4>
                  <p className="text-blue-100 mb-4">
                    Call our business consultants directly for urgent queries
                  </p>
                  <a
                    href="tel:+919040626617"
                    className="block w-full px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:shadow-lg transition-all duration-300 text-center mb-3"
                  >
                    <Phone className="w-5 h-5 inline-block mr-2" />
                    Call: +91 9040626617
                  </a>
                  <button
                    onClick={() => redirectToWhatsApp("URGENT: Need immediate business consultation")}
                    className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    💬 WhatsApp Urgent Query
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Entrepreneurs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Trust Diga Darshan
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We don't just provide services - we build successful businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Transparent Process",
                description: "No hidden charges, clear milestones, and regular updates at every stage",
                icon: "🔍"
              },
              {
                title: "Government Liaison",
                description: "Direct connections with scheme authorities for faster processing",
                icon: "🏛️"
              },
              {
                title: "End-to-End Support",
                description: "From concept to completion and beyond - we're with you at every step",
                icon: "🔄"
              },
              {
                title: "Success-Based Model",
                description: "Our success depends on your success - aligned goals for best results",
                icon: "🎯"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                5-Step Process
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Systematic approach to ensure your business success
            </p>
          </div>
          
          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-blue-200" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { step: "01", title: "Discovery Call", desc: "Free consultation to understand your requirements" },
                { step: "02", title: "Custom Plan", desc: "Tailored solution with investment breakdown" },
                { step: "03", title: "Documentation", desc: "Complete paperwork and government formalities" },
                { step: "04", title: "Implementation", desc: "On-ground execution with regular updates" },
                { step: "05", title: "Growth Support", desc: "Ongoing support and scaling assistance" }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {process.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => redirectToWhatsApp("Hello, I want to start with the discovery call for my business.")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
            >
              Start with Step 1 - Free Discovery Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Questions
              </span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Why don't you display fixed prices on your website?",
                a: "Each business project is unique with different requirements, scale, and government scheme eligibility. We provide customized quotes after understanding your specific needs to ensure you get the most value and maximum subsidies."
              },
              {
                q: "What is the typical investment range for starting a fisheries business?",
                a: "Investments range from ₹5 Lakhs for a small pond setup to ₹50 Lakhs for commercial operations. With government subsidies (up to 40%), your actual investment can be significantly lower. Book a consultation for a personalized quote."
              },
              {
                q: "How long does it take to get government subsidies?",
                a: "Typically 2-4 months from application to disbursement. Our expertise ensures proper documentation and faster processing through direct liaison with authorities."
              },
              {
                q: "Do you provide financing or loan assistance?",
                a: "Yes, we assist with complete loan processing including DPR preparation, bank coordination, and CGTMSE scheme utilization for collateral-free loans up to ₹2 Crores."
              },
              {
                q: "What is your success rate for business approvals?",
                a: "We maintain a 95% success rate across all our services due to our systematic approach, proper documentation, and strong government connections."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-slate-700">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 mb-6">
              Still have questions? We're here to help!
            </p>
            <button
              onClick={() => redirectToWhatsApp("I have some questions about your services. Can you help me?")}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
            >
              💬 Ask Your Question on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Idea into Reality?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards your entrepreneurial journey with expert guidance 
              and government support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => redirectToWhatsApp("Hello Diga Darshan Team, I'm ready to start my business. Need complete guidance.")}
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                Start WhatsApp Consultation
              </button>
              
              <a
                href="tel:+919040626617"
                className="px-8 py-4 bg-gradient-to-r from-blue-700 to-emerald-700 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Schedule Callback
              </a>
            </div>
            
            <div className="mt-8 text-sm text-blue-200">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>No obligation consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Free business assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Response within 30 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}