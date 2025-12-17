"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef(null);

  const categories = [
    {
      id: "fisheries",
      title: "AQUA-NIVESH",
      subtitle: "Fisheries Platform",
      odiaTitle: "ମତ୍ସ୍ୟ",
      description: "Complete fisheries ecosystem support from pond to market. We provide subsidies up to 40%, technical training, feed management, disease control, and market linkage for sustainable aquaculture.",
      bgImage: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-blue-900/70 via-blue-800/80 to-blue-900/90",
      icon: "🐟",
      link: "https://aquanivesh.digadarshan.com/",
      stats: [
        { label: "Subsidy", value: "Up to 40%" },
        { label: "Training", value: "Certified" },
        { label: "Support", value: "24/7 Expert" },
        { label: "Success", value: "95%" }
      ]
    },
    {
      id: "trading",
      title: "DIGA TRADING HUB",
      subtitle: "Financial Education",
      odiaTitle: "ବାଣିଜ୍ୟ",
      description: "Transform your financial future with our structured trading education. Learn stock market, commodities, forex with expert mentorship, live trading sessions, and capital guidance.",
      bgImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-purple-900/70 via-purple-800/80 to-purple-900/90",
      icon: "📈",
      link: "/trading",
      stats: [
        { label: "Courses", value: "15+" },
        { label: "Mentors", value: "Expert" },
        { label: "Success", value: "85%" },
        { label: "Campus", value: "Bhubaneswar" }
      ]
    },
    {
      id: "agriculture",
      title: "KRISHI SAHAYAK",
      subtitle: "Agricultural Solutions",
      odiaTitle: "କୃଷି",
      description: "End-to-end agricultural support including PMFME, CGTMSE schemes, organic certification, soil testing, irrigation solutions, and direct market access for farmers.",
      bgImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-green-900/70 via-green-800/80 to-green-900/90",
      icon: "🌾",
      link: "/agriculture",
      stats: [
        { label: "Schemes", value: "50+" },
        { label: "Farmers", value: "10,000+" },
        { label: "Subsidy", value: "Up to 50%" },
        { label: "Yield", value: "+200%" }
      ]
    },
    {
      id: "msme",
      title: "MSME GROWTH PARTNER",
      subtitle: "Business Development",
      odiaTitle: "ବ୍ୟବସାୟ",
      description: "Complete MSME support including DPR preparation, project loans, Udyam registration, GST assistance, and government scheme facilitation for sustainable business growth.",
      bgImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
      gradient: "from-amber-900/70 via-amber-800/80 to-amber-900/90",
      icon: "🏢",
      link: "/msme",
      stats: [
        { label: "Loans", value: "₹100Cr+" },
        { label: "MSMEs", value: "500+" },
        { label: "Success", value: "98%" },
        { label: "Support", value: "E2E" }
      ]
    },
    {
      id: "infrastructure",
      title: "CONSTRUCTION & SETUP",
      subtitle: "Turnkey Solutions",
      odiaTitle: "ନିର୍ମାଣ",
      description: "Complete infrastructure solutions including borewell construction, shed development, cold storage setup, and farm construction with buy-back guarantee.",
      bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-red-900/70 via-red-800/80 to-red-900/90",
      icon: "🏗️",
      link: "/construction",
      stats: [
        { label: "Projects", value: "200+" },
        { label: "Buy-Back", value: "Guaranteed" },
        { label: "Quality", value: "ISO" },
        { label: "Time", value: "-30%" }
      ]
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % categories.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, categories.length]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const currentCategory = categories[activeSlide];

  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${category.bgImage}')` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Odia Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 border border-white/25"
              >
                <span className="text-white font-bold text-sm tracking-wider">
                  {currentCategory.odiaTitle}
                </span>
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                <span className="text-white/80 text-xs">Diga Darshan Group</span>
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                {currentCategory.title}
                <span className="block text-2xl sm:text-3xl md:text-4xl text-white/80 font-semibold mt-2">
                  {currentCategory.subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                {currentCategory.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href={currentCategory.link}
                  className="group relative overflow-hidden"
                >
                  <button className="relative px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-green-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    <span className="relative flex items-center gap-3">
                      Explore Platform
                      <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button>
                </Link>

                <button 
                  onClick={() => window.open(`https://wa.me/919040626617?text=Hello%20Diga%20Darshan%20Team,%20I'm%20interested%20in%20${currentCategory.title}`, '_blank')}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {currentCategory.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-white/80 text-sm">Part of Diga Darshan Group</div>
                  <div className="text-white font-bold mt-1">Berhampur • Bhubaneswar • Across Odisha</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === activeSlide
                ? "w-10 h-2 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8">
        <div className="text-white/60 text-sm">
          <span className="text-3xl font-bold text-white">{String(activeSlide + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(categories.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}