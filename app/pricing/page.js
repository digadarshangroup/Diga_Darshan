"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Landmark,
  MessageCircle,
  Phone,
  RefreshCw,
  Search,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Reveal, Section, SectionHeading } from "@/components/ui/section";
import { badge, btn, btnSize, container, heading, surface } from "@/lib/ui";

const PHONE_DISPLAY = "+91 7750878444";
const PHONE_TEL = "+917750878444";

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("fisheries");
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [openFaq, setOpenFaq] = useState(0);

  const serviceCategories = [
    { id: "fisheries", name: "Fisheries (Aqua-Nivesh)", icon: "🐟" },
    { id: "trading", name: "Trading Education", icon: "📈" },
    { id: "msme", name: "MSME & Business", icon: "🏢" },
    { id: "agriculture", name: "Agriculture", icon: "🌱" },
    { id: "infrastructure", name: "Infrastructure", icon: "🏗️" },
  ];

  const consultationPackages = [
    {
      id: "basic",
      name: "Basic Consultation",
      shortName: "Basic",
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
      popular: false
    },
    {
      id: "professional",
      name: "Professional Package",
      shortName: "Professional",
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
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise Solution",
      shortName: "Enterprise",
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
      popular: false
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
      investmentRange: "₹1 Lakh - ₹2 Crores",
      roiTimeframe: "12-18 months",
      whatsappMessage: "Hello Matrubhoomi, I'm interested in fisheries business. Please share investment details and subsidy options."
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
      whatsappMessage: "Hello, I need construction services for my business. Please share project details."
    }
  };

  const successMetrics = [
    { value: "7", label: "Business Domains", icon: <Users className="w-5 h-5" /> },
    { value: "1", label: "Single Point of Contact", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "Custom", label: "Quote Per Project", icon: <Award className="w-5 h-5" /> },
    { value: "24/7", label: "WhatsApp Support", icon: <Clock className="w-5 h-5" /> }
  ];

  const differentiators = [
    {
      title: "Transparent Process",
      description: "No hidden charges, clear milestones, and regular updates at every stage",
      icon: Search
    },
    {
      title: "Government Liaison",
      description: "Direct connections with scheme authorities for faster processing",
      icon: Landmark
    },
    {
      title: "End-to-End Support",
      description: "From concept to completion and beyond - we're with you at every step",
      icon: RefreshCw
    },
    {
      title: "Success-Based Model",
      description: "Our success depends on your success - aligned goals for best results",
      icon: Target
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery Call", desc: "Free consultation to understand your requirements" },
    { step: "02", title: "Custom Plan", desc: "Tailored solution with investment breakdown" },
    { step: "03", title: "Documentation", desc: "Complete paperwork and government formalities" },
    { step: "04", title: "Implementation", desc: "On-ground execution with regular updates" },
    { step: "05", title: "Growth Support", desc: "Ongoing support and scaling assistance" }
  ];

  const faqs = [
    {
      q: "Why don't you display fixed prices on your website?",
      a: "Each business project is unique with different requirements, scale, and government scheme eligibility. We provide customized quotes after understanding your specific needs to ensure you get the most value and maximum subsidies."
    },
    {
      q: "What is the typical investment range for starting a fisheries business?",
      a: "Investments range from ₹1 Lakh for a small pond setup to ₹2 Crores for commercial operations. With government subsidies (up to 40%), your actual investment can be significantly lower. Book a consultation for a personalized quote."
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
      q: "What is your approach to business approvals?",
      a: "We follow a systematic approach — proper documentation, direct liaison with banks and government authorities, and regular follow-up — to keep your application on track."
    }
  ];

  const trustBadges = [
    { label: "Government Approved", icon: Shield },
    { label: "MSME Registered", icon: Building2 },
    { label: "Free Initial Consultation", icon: Award }
  ];

  const redirectToWhatsApp = (message = "Hello Matrubhoomi Team, I want to know about your services and pricing.") => {
    const phoneNumber = "917750878444";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const currentService = serviceDetails[activeCategory];
  const currentPackage = consultationPackages.find((pkg) => pkg.id === selectedPlan);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className={`relative ${container} py-14 sm:py-16 lg:py-20`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className={badge.onDark}>
              <TrendingUp className="w-3.5 h-3.5" />
              Investment &amp; Services
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Strategic Business Solutions
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Transparent, value-driven packages tailored to your business needs. No hidden costs,
              only measurable results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => redirectToWhatsApp("Hello Matrubhoomi Team, I want to know about your services and pricing.")}
                className={`${btn.whatsapp} ${btnSize.lg}`}
              >
                <MessageCircle className="w-5 h-5" />
                Talk to a consultant
              </button>
              <a href={`tel:${PHONE_TEL}`} className={`${btn.onDarkOutline} ${btnSize.lg}`}>
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          {/* Metric strip */}
          <div className="mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.06, ease: "easeOut" }}
                className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 sm:p-5"
              >
                <div className="text-white/50">{metric.icon}</div>
                <div className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-0.5 text-xs sm:text-sm text-slate-400 leading-snug">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain selector */}
      <Section tight className="border-b border-slate-200">
        <SectionHeading
          eyebrow="Step 1"
          title="Choose your business domain"
          subtitle="Select your area of interest to see the scope of work, investment range and packages we offer."
          className="mb-8"
        />

        <div className="flex xl:justify-center overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
          <div
            role="tablist"
            aria-label="Business domains"
            className="inline-flex flex-none gap-1 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm"
          >
            {serviceCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls="domain-panel"
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 min-h-[44px] text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-brand-700 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {category.icon}
                  </span>
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Service detail + packages */}
      <Section tone="muted" id="domain-panel" role="tabpanel">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Detail column */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className={badge.brand}>{currentService.subtitle}</span>
            <h2 className={`mt-4 ${heading.h2}`}>{currentService.title}</h2>
            <p className={`mt-3 ${heading.lead}`}>{currentService.description}</p>

            {/* Investment highlights */}
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`${surface.card} p-5`}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Approximate Investment Range
                </dt>
                <dd className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  {currentService.investmentRange}
                </dd>
              </div>
              <div className={`${surface.card} p-5`}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Typical ROI Timeframe
                </dt>
                <dd className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  {currentService.roiTimeframe}
                </dd>
              </div>
            </dl>

            {/* What's included */}
            <h3 className={`mt-10 ${heading.h3}`}>What&apos;s included</h3>
            <ul className={`mt-4 ${surface.card} divide-y divide-slate-100 overflow-hidden`}>
              {currentService.features.map((feature) => (
                <li key={feature.name} className="flex items-start gap-3 p-4 sm:p-5">
                  <span className="flex-shrink-0 grid place-items-center w-6 h-6 rounded-full bg-brand-50 ring-1 ring-brand-100">
                    <Check className="w-3.5 h-3.5 text-brand-700" strokeWidth={2.5} />
                  </span>
                  <div className="min-w-0">
                    <div className="font-medium text-slate-900">{feature.name}</div>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{feature.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Packages sidebar */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className={`${surface.card} p-5 sm:p-6`}>
              <h3 className={heading.h3}>Consultation packages</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                Choose the level of support that matches your business needs.
              </p>

              {/* Package selector */}
              <div
                role="tablist"
                aria-label="Consultation packages"
                className="mt-5 grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1"
              >
                {consultationPackages.map((pkg) => {
                  const isActive = selectedPlan === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      aria-label={pkg.name}
                      onClick={() => setSelectedPlan(pkg.id)}
                      className={`rounded-lg px-2 py-2 min-h-[44px] text-xs sm:text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                        isActive
                          ? "bg-brand-700 text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {pkg.shortName}
                    </button>
                  );
                })}
              </div>

              {/* Selected package */}
              <motion.div
                key={currentPackage.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`mt-5 rounded-xl p-5 ${
                  currentPackage.popular
                    ? "bg-white ring-2 ring-brand-600 shadow-sm"
                    : "bg-slate-50 ring-1 ring-slate-200"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900">{currentPackage.name}</div>
                    <div className="text-sm text-brand-700 font-medium">{currentPackage.tagline}</div>
                  </div>
                  {currentPackage.popular && (
                    <span className={`${badge.brand} flex-shrink-0`}>
                      <Star className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    {currentPackage.price}
                  </span>
                  <span className="text-sm text-slate-500">• {currentPackage.duration}</span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {currentPackage.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => redirectToWhatsApp(currentService.whatsappMessage)}
                  className={`${btn.whatsapp} ${btnSize.lg} w-full mt-6`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {currentPackage.cta}
                </button>

                <p className="mt-3 text-center text-xs text-slate-500">
                  Customized quote based on your specific requirements
                </p>
              </motion.div>

              {/* Trust badges */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap gap-x-5 gap-y-2">
                {trustBadges.map((item) => {
                  const Icon = item.icon;
                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600"
                    >
                      <Icon className="w-3.5 h-3.5 text-brand-600" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Quick contact */}
            <div className="rounded-2xl bg-slate-900 p-5 sm:p-6">
              <h4 className="text-base font-semibold text-white">Need immediate assistance?</h4>
              <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                Call our business consultants directly for urgent queries.
              </p>
              <a href={`tel:${PHONE_TEL}`} className={`${btn.onDark} ${btnSize.lg} w-full mt-4`}>
                <Phone className="w-4 h-4" />
                Call: {PHONE_DISPLAY}
              </a>
              <button
                onClick={() => redirectToWhatsApp("URGENT: Need immediate business consultation")}
                className={`${btn.whatsapp} ${btnSize.lg} w-full mt-2`}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp urgent query
              </button>
            </div>
          </aside>
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow="Why Matrubhoomi"
          title="Why entrepreneurs trust Matrubhoomi"
          subtitle="We don't just provide services — we build successful businesses."
          className="mb-10 lg:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
                <article className={`${surface.cardInteractive} h-full p-5 sm:p-6`}>
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="How We Work"
          title="Our 5-step process"
          subtitle="A systematic approach, from the first call to long-term growth support."
          className="mb-10 lg:mb-14"
        />

        <div className="relative">
          {/* Connector line, visible in the gaps between cards */}
          <div
            className="hidden lg:block absolute left-0 right-0 top-14 h-px bg-slate-200"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {processSteps.map((process, index) => (
              <Reveal key={process.step} delay={Math.min(index * 0.06, 0.24)} className="h-full">
                <article className={`${surface.card} h-full p-5 sm:p-6`}>
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-700 text-white text-sm font-bold">
                    {process.step}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{process.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{process.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => redirectToWhatsApp("Hello, I want to start with the discovery call for my business.")}
            className={`${btn.primary} ${btnSize.lg}`}
          >
            Start with step 1 — free discovery call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Section>

      {/* FAQ */}
      <Section width="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Straight answers on pricing, subsidies and timelines."
          className="mb-8 lg:mb-10"
        />

        <div className={`${surface.card} divide-y divide-slate-200 overflow-hidden`}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="w-full flex items-start justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 min-h-[44px] text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-600"
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-600">Still have questions? We&apos;re here to help.</p>
          <button
            onClick={() => redirectToWhatsApp("I have some questions about your services. Can you help me?")}
            className={`${btn.whatsapp} ${btnSize.lg} mt-4`}
          >
            <MessageCircle className="w-5 h-5" />
            Ask your question on WhatsApp
          </button>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="dark">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Ready to turn your business idea into reality?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Take the first step towards your entrepreneurial journey with expert guidance and
            government support.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => redirectToWhatsApp("Hello Matrubhoomi Team, I'm ready to start my business. Need complete guidance.")}
              className={`${btn.whatsapp} ${btnSize.lg}`}
            >
              <MessageCircle className="w-5 h-5" />
              Start WhatsApp consultation
            </button>
            <a href={`tel:${PHONE_TEL}`} className={`${btn.onDarkOutline} ${btnSize.lg}`}>
              <Phone className="w-5 h-5" />
              Schedule callback
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Shield className="w-4 h-4" />
              No obligation consultation
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4" />
              Free business assessment
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Response within 30 minutes
            </span>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}
