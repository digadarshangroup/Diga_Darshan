import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);
  const aboutRef = useRef(null);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // WhatsApp redirect function
  const redirectToWhatsApp = () => {
    const phoneNumber = "919040626617"; // Your WhatsApp number without +
    const message = encodeURIComponent(
      "Hello Diga Darshan Team,\n\nI'm interested in learning more about your solutions (fisheries, pharmacy, trading, horticulture). Could you please provide me with more information?\n\nThank you."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // Categories with improved data structure
  const categories = [
    {
      id: "fisheries",
      title: "FISHERIES",
      odiaTitle: "ମତ୍ସ୍ୟ",
      description:
        "Promotes scientific aquaculture in the state and looks after the welfare of Fisher folk. Provides subsidies, technical training, and market access for sustainable fishing practices.",
      bgImage:
        "https://www.globalseafood.org/wp-content/uploads/2024/08/KARUNAKARAN_photo-1_1500.jpg",
      gradient: "from-blue-600/20 via-blue-800/40 to-blue-900/80",
      icon: "🐟",
      link: "https://aquanivesh.digadarshan.com/",
    },
    {
      id: "pharmacy",
      title: "PHARMACY",
      odiaTitle: "ଔଷଧ",
      description:
        "Medical sector support, pharmaceutical business guidance and healthcare initiatives. Assistance with licensing, inventory management, and government schemes.",
      bgImage:
        "https://cdn.sanity.io/images/0vv8moc6/ajmc/4d2b1e0a5fb7993e065301c6d238736aeb12075e-5760x3840.jpg?w=5760&max-h=3840&fit=crop&auto=format",
      gradient: "from-emerald-600/20 via-emerald-800/40 to-emerald-900/80",
      icon: "💊",
      link: "/pharmacy",
    },
    {
      id: "trading",
      title: "TRADING",
      odiaTitle: "ବାଣିଜ୍ୟ",
      description:
        "Education-first approach for sustainable trading business development and growth. Market research, digital tools, and financial assistance programs.",
      bgImage:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      gradient: "from-purple-600/20 via-purple-800/40 to-purple-900/80",
      icon: "📊",
      link: "/trading",
    },
    {
      id: "horticulture",
      title: "HORTICULTURE",
      odiaTitle: "ଉଦ୍ୟାନ ବିଜ୍ଞାନ",
      description:
        "Sustainable horticulture practices for agricultural development and food security. Greenhouse setup, organic certification, and market linkages support.",
      bgImage:
        "https://media.licdn.com/dms/image/v2/D4D12AQFVK0Jk9cHCSg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678948720809?e=1766016000&v=beta&t=jvMCv_JYYS3jmPq04JnSRi_jhVhRvNp-8-IKYSXZlTQ",
      gradient: "from-orange-600/20 via-orange-800/40 to-orange-900/80",
      icon: "🌱",
      link: "/horticulture",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Active Businesses",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🚀",
    },
    {
      number: "₹5Cr+",
      label: "Subsidies Disbursed",
      gradient: "from-emerald-500 to-green-500",
      icon: "💰",
    },
    {
      number: "65+",
      label: "Schemes Available",
      gradient: "from-purple-500 to-violet-500",
      icon: "📋",
    },
    {
      number: "30",
      label: "Districts Covered",
      gradient: "from-orange-500 to-amber-500",
      icon: "📍",
    },
  ];

  // GSAP Text Reveal Effect for About Section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate about description on scroll
      const aboutText = document.querySelector(".about-description");
      if (aboutText) {
        ScrollTrigger.create({
          trigger: aboutRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1,
          onEnter: () => {
            gsap.fromTo(
              aboutText,
              {
                opacity: 0.3,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
              }
            );
          },
          onEnterBack: () => {
            gsap.to(aboutText, {
              opacity: 0.3,
              y: 20,
              duration: 0.5,
            });
          },
          onLeave: () => {
            gsap.to(aboutText, {
              opacity: 1,
              y: 0,
              duration: 0.5,
            });
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Visibility on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % categories.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, categories.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Manual navigation
  const goToSlide = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % categories.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden"
    >
      {/* HERO SECTION WITH BORDER RADIUS - Centered Text */}
      <section className="relative mx-4 md:mx-8 lg:mx-10 mt-6 rounded-3xl overflow-hidden h-[90vh] shadow-2xl">
        {/* Background Slides Container */}
        <div
          ref={sliderRef}
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-full h-full">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="relative w-full h-full flex-shrink-0"
              >
                {/* Background Image with Strong Fade Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${category.bgImage}')`,
                    backgroundPosition: isMobile
                      ? "center 30%"
                      : "center center",
                  }}
                >
                  {/* Dark Gradient Overlay for Text Readability */}
                  <div
                    className={`absolute inset-0 bg-black/60 ${category.gradient}`}
                  />

                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/20" />
                </div>

                {/* Content Container - CENTERED TEXT */}
                <div className="relative h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                  <div className="max-w-full w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Left Column - Main Content - Centered */}
                      <div className="text-left space-y-6 lg:space-y-8">
                        {/* Odia Title - Elegant Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mx-auto lg:mx-0">
                          <span className="text-white font-semibold text-sm tracking-wider">
                            {category.odiaTitle}
                          </span>
                          <div className="w-2 h-2 bg-white/40 rounded-full" />
                        </div>

                        {/* Main English Title */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight text-left">
                          {category.title}
                        </h1>

                        {/* Description - Centered */}
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                          {category.description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                          <Link
                            href={category.link}
                            className="group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                            <button className="relative px-8 py-4 bg-white/90 backdrop-blur-md rounded-xl border-2 border-white text-slate-900 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3">
                              <span>Explore Now</span>
                              <svg
                                className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </div>

                      {/* Right Column - Icon and Stats (Keep original glassmorphism) */}
                      <div className="hidden lg:flex flex-col items-end space-y-8">
                        {/* Large Icon */}
                        <div className="relative">
                          <div className="w-48 h-48 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center shadow-2xl">
                            <span className="text-8xl transform hover:scale-110 transition-transform duration-500">
                              {category.icon}
                            </span>
                          </div>
                          {/* Floating elements */}
                          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-blue-500/20 backdrop-blur-sm border border-blue-400/30" />
                          <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-xl bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30" />
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { label: "Schemes", value: "25+" },
                            { label: "Success Rate", value: "98%" },
                            { label: "Support", value: "24/7" },
                            { label: "Growth", value: "↑45%" },
                          ].map((stat, idx) => (
                            <div
                              key={idx}
                              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                              <div className="text-2xl font-bold text-white">
                                {stat.value}
                              </div>
                              <div className="text-sm text-white/70">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Number Indicator */}
                <div className="absolute bottom-12 right-12">
                  <div className="text-white/60 text-sm hidden md:block">
                    <span className="text-4xl font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-2">/</span>
                    <span>{String(categories.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === activeSlide
                    ? "w-10 bg-white scale-110"
                    : "w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-110"
                } h-3 rounded-full`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* REST OF THE CONTENT */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        {/* ABOUT SECTION */}
        <section ref={aboutRef} className="mb-20 lg:mb-32">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-full mb-6">
              <span className="text-blue-600 font-semibold">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                diga darshan
              </span>
            </h2>
          </div>

          {/* Single Description Paragraph with GSAP Reveal */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <p className="about-description text-lg md:text-xl text-gray-700 leading-relaxed pl-6 md:pl-8 text-center">
                Government schemes and subsidies are key for farmers to set up
                or expand their practices in agriculture and allied sectors.
                diga darshan is Odisha&apos;s single-window platform for farmers
                and agri-preneurs, aligning with the Government of Odisha&apos;s
                vision to transform lives through technology and teamwork,
                enabling timely and transparent delivery of benefits.
              </p>
            </div>

            {/* Stats Row - No Cards */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  number: "50,000+",
                  label: "Farmers",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  number: "200+",
                  label: "Schemes",
                  gradient: "from-emerald-500 to-green-500",
                },
                {
                  number: "₹250Cr+",
                  label: "Disbursed",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  number: "30",
                  label: "Districts",
                  gradient: "from-orange-500 to-amber-500",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={`text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold uppercase tracking-wider text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-20 lg:mb-32">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Empowering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                Odisha&apos;s Growth
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Comprehensive support system driving business success across
              multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl bg-white p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Gradient Background Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${stat.gradient} transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-md mb-6">
                    <span className="text-2xl">{stat.icon}</span>
                  </div>

                  <div
                    className={`text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </div>

                  <div className="text-slate-700 font-semibold text-sm lg:text-base">
                    {stat.label}
                  </div>

                  {/* Animated underline */}
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full overflow-hidden">
                    <div
                      className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${stat.gradient} transition-all duration-700`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Our Platform?
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                We provide end-to-end support for entrepreneurs, from scheme
                discovery to successful implementation.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🎯",
                    title: "Personalized Guidance",
                    desc: "Tailored recommendations based on your business needs",
                  },
                  {
                    icon: "⚡",
                    title: "Fast Processing",
                    desc: "Quick approval and disbursement of subsidies",
                  },
                  {
                    icon: "🛡️",
                    title: "Expert Support",
                    desc: "24/7 assistance from industry experts",
                  },
                  {
                    icon: "📈",
                    title: "Growth Tracking",
                    desc: "Monitor your progress with detailed analytics",
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-slate-800 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Success Story Highlight */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-blue-600 text-sm font-semibold mb-2">
                SUCCESS STORY
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                From Small Startup to Market Leader
              </h4>
              <p className="text-slate-600 mb-6">
                With the government&apos;s support and guidance, we expanded our
                fisheries business by 300% in just 2 years.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                  RK
                </div>
                <div>
                  <div className="font-bold text-slate-800">
                    Bhabani Sankar Patnaik
                  </div>
                  <div className="text-sm text-slate-600">
                    Fisheries Entrepreneur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Keep Original Design */}
        <section
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-12 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Start Your Business Journey Today
              </h3>

              <p className="text-slate-300 text-lg mb-8 lg:mb-12 max-w-2xl mx-auto">
                Join thousands of successful entrepreneurs who have transformed
                their businesses with our comprehensive support system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 lg:mb-12">
                <button
                  onClick={redirectToWhatsApp}
                  className="group relative overflow-hidden px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-green-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  <span className="relative flex items-center gap-3">
                    <span className="inline-block mr-1">💬</span>
                    Get Free Consultation on WhatsApp
                    <svg
                      className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>

                <a
                  href="https://mail.google.com/mail/?view=cm&to=digadarshansupport@gmail.com&su=Support%20Request%20-%20Diga%20Darshan&body=Hello%20Diga%20Darshan%20Team,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20government%20scheme%20support%20and%20consultation%20services.%0D%0A%0D%0APlease%20find%20my%20details%20below:%0D%0A%0D%0AName:%0D%0APhone%20Number:%0D%0ADistrict:%0D%0ASector%20(Fisheries%20/%20Pharmacy%20/%20Trading%20/%20Horticulture):%0D%0ABusiness%20Stage%20(New%20/%20Existing):%0D%0A%0D%0AI%20would%20appreciate%20guidance%20on%20eligible%20schemes,%20documentation,%20and%20next%20steps.%0D%0A%0D%0AThank%20you,%0D%0A%0D%0ARegards,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Contact Support
                </a>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {[
                  {
                    icon: "📞",
                    title: "Helpline",
                    value: "9040626617",
                    sub: "Available 24/7",
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    value: "digadarshansupport@gmail.com",
                    sub: "Response within 2 hours",
                  },
                  {
                    icon: "🏢",
                    title: "Office",
                    value: "8 District Centers",
                    sub: "Across Odisha",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-2xl mb-4">{item.icon}</div>
                    <div className="text-white font-bold mb-1">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-300 mb-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400">{item.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        /* Image optimization */
        img {
          -webkit-user-drag: none;
          user-select: none;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .h-screen {
            height: 100vh;
            height: 100dvh;
          }

          /* Prevent text overflow */
          .text-balance {
            text-wrap: balance;
          }
        }
      `}</style>
    </div>
  );
}
