import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)
  const autoPlayRef = useRef(null)

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Categories with improved images for slider
  const categories = [
    {
      id: "fisheries",
      title: "FISHERIES",
      odiaTitle: "ମତ୍ସ୍ୟ",
      description: "Promotes scientific aquaculture in the state and looks after the welfare of Fisher folk.",
      textColor: "text-white",
      titleGradient: "from-blue-100 to-cyan-100",
      iconGradient: "from-blue-400 to-cyan-400",
      overlayColor: "bg-gradient-to-t from-blue-900/10 via-blue-800/20 to-blue-700/10",
      glowColor: "shadow-[0_0_60px_rgba(59,130,246,0.6)]",
      bgImage: "https://www.globalseafood.org/wp-content/uploads/2024/08/KARUNAKARAN_photo-1_1500.jpg",
      iconBg: "bg-gradient-to-br from-blue-500/90 to-cyan-500/90",
      link: "/fisheries",
      icon: "🐟",
      mobileBgPosition: "center center"
    },
    {
      id: "pharmacy",
      title: "PHARMACY",
      odiaTitle: "ଔଷଧ",
      description: "Medical sector support, pharmaceutical business guidance and healthcare initiatives.",
      textColor: "text-white",
      titleGradient: "from-emerald-100 to-green-100",
      iconGradient: "from-emerald-400 to-green-400",
      overlayColor: "bg-gradient-to-t from-emerald-900/10 via-emerald-800/20 to-emerald-700/20",
      glowColor: "shadow-[0_0_60px_rgba(16,185,129,0.6)]",
      bgImage: "https://cdn.sanity.io/images/0vv8moc6/ajmc/4d2b1e0a5fb7993e065301c6d238736aeb12075e-5760x3840.jpg?w=5760&max-h=3840&fit=crop&auto=format",
      iconBg: "bg-gradient-to-br from-emerald-500/90 to-green-500/90",
      link: "/pharmacy",
      icon: "💊",
      mobileBgPosition: "center 30%"
    },
    {
      id: "trading",
      title: "TRADING",
      odiaTitle: "ବାଣିଜ୍ୟ",
      description: "Education-first approach for sustainable trading business development and growth.",
      textColor: "text-white",
      titleGradient: "from-purple-100 to-violet-100",
      iconGradient: "from-purple-400 to-violet-400",
      overlayColor: "bg-gradient-to-t from-purple-900/10 via-purple-800/20 to-purple-700/20",
      glowColor: "shadow-[0_0_60px_rgba(139,92,246,0.6)]",
      bgImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      iconBg: "bg-gradient-to-br from-purple-500/90 to-violet-500/90",
      link: "/trading",
      icon: "📊",
      mobileBgPosition: "center 40%"
    },
    {
      id: "horticulture",
      title: "HORTICULTURE",
      odiaTitle: "ଉଦ୍ୟାନ ବିଜ୍ଞାନ",
      description: "Sustainable horticulture practices for agricultural development and food security.",
      textColor: "text-white",
      titleGradient: "from-orange-100 to-amber-100",
      iconGradient: "from-orange-400 to-amber-400",
      overlayColor: "bg-gradient-to-t from-orange-900/10 via-orange-800/20 to-orange-700/20",
      glowColor: "shadow-[0_0_60px_rgba(249,115,22,0.6)]",
      bgImage: "https://media.licdn.com/dms/image/v2/D4D12AQFVK0Jk9cHCSg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678948720809?e=1766016000&v=beta&t=jvMCv_JYYS3jmPq04JnSRi_jhVhRvNp-8-IKYSXZlTQ",
      iconBg: "bg-gradient-to-br from-orange-500/90 to-amber-500/90",
      link: "/horticulture",
      icon: "🌱",
      mobileBgPosition: "center center"
    }
  ]

  const stats = [
    { number: "500+", label: "Active Businesses", gradient: "from-blue-400 to-cyan-400", icon: "🚀" },
    { number: "₹5Cr+", label: "Subsidies Disbursed", gradient: "from-emerald-400 to-green-400", icon: "💰" },
    { number: "65+", label: "Schemes Available", gradient: "from-purple-400 to-violet-400", icon: "📋" },
    { number: "30", label: "Districts Covered", gradient: "from-orange-400 to-amber-400", icon: "📍" },
  ]

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Visibility on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // Auto-slide effect every 2 seconds (faster)
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % categories.length)
      }, 2000) // 2 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, categories.length])

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  // Manual navigation
  const goToSlide = (index) => {
    setActiveSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 2000)
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % categories.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 2000)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + categories.length) % categories.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 2000)
  }

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-emerald-50/20 relative overflow-hidden"
    >
      {/* Animated Background with Subtle Patterns */}
      <div className="absolute inset-0">
        {/* Main background */}
        <div className="absolute inset-0 bg-white" />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.2), transparent 50%)`,
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,#888_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(180deg,#888_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"
            style={{
              width: `${200 + Math.random() * 300}px`,
              height: `${200 + Math.random() * 300}px`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.08)' :
                i % 3 === 1 ? 'rgba(16, 185, 129, 0.08)' :
                  'rgba(139, 92, 246, 0.08)'
                }, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* FULL SCREEN SLIDER SECTION - TAKES ENTIRE VIEWPORT */}
      <div
        className="relative w-full h-screen overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slider Track - Full Screen */}
        <div
          ref={sliderRef}
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="w-full flex-shrink-0 relative h-full"
            >
              {/* Slide Content - Full Screen */}
              <Link href={category.link} className="block h-full w-full">
                <div className="relative h-full w-full overflow-hidden">
                  {/* Background Image - FULL SCREEN */}
                  <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${category.bgImage})`,
                      backgroundPosition: isMobile ? category.mobileBgPosition : 'center center',
                      backgroundSize: 'cover'
                    }}
                  >
                    {/* Overlay for text readability - Darker for better contrast */}
                    <div className={`absolute inset-0 ${category.overlayColor} w-full h-full`} />

                    {/* Gradient shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-30 w-full h-full" />
                  </div>

                  {/* Content Container - Centered */}
                  <div className="relative h-full w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">


                    {/* Category Icon - Top Right */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                      <div
                        className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl ${category.iconBg} border-2 border-white/50 shadow-xl sm:shadow-2xl 
                                 transition-all duration-500 hover:scale-110 hover:rotate-12`}
                      >
                        <span className="text-2xl sm:text-3xl md:text-4xl">{category.icon}</span>
                      </div>
                    </div>

                    {/* Main Content - Center */}
                    <div className="text-center max-w-4xl xl:max-w-5xl mx-auto px-2">
                      {/* Odia Title */}
                      <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 md:mb-8 border border-white/40">
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wide">
                          {category.odiaTitle}
                        </span>
                      </div>

                      {/* English Title - Responsive */}
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                        {category.title}
                      </h1>

                      {/* Description - Responsive */}
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto font-medium">
                        {category.description}
                      </p>

                      {/* CTA Button - Responsive */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <button
                          className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/90 backdrop-blur-md rounded-lg sm:rounded-xl border-2 border-white
                                   text-slate-800 font-bold text-base sm:text-lg md:text-xl shadow-lg sm:shadow-xl hover:shadow-2xl
                                   hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group"
                        >
                          <span className="font-bold">EXPLORE NOW</span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform duration-300 group-hover:translate-x-2"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Auto-play Indicator - Bottom */}
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-white/80">
                      <span className="text-xs sm:text-sm font-medium">Auto-slides every 2 seconds</span>
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Larger for better UX */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   bg-white/20 backdrop-blur-md rounded-full border border-white/30 
                   flex items-center justify-center hover:bg-white/30 hover:scale-110 
                   transition-all duration-300 z-20 shadow-lg sm:shadow-xl"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                   bg-white/20 backdrop-blur-md rounded-full border border-white/30 
                   flex items-center justify-center hover:bg-white/30 hover:scale-110 
                   transition-all duration-300 z-20 shadow-lg sm:shadow-xl"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators - Bottom Center */}
        <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${index === activeSlide ?
                'bg-white scale-110' : 'bg-white/50 hover:bg-white/80 hover:scale-110'}
                ${isMobile ? 'w-2 h-2' : 'w-3 h-3'}
                ${index === activeSlide && !isMobile ? 'w-8' : ''}
                ${index === activeSlide && isMobile ? 'w-6' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar for Auto-slide */}
        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-white to-blue-200 transition-all linear"
            style={{
              width: isAutoPlaying ? '100%' : '0%',
              transitionDuration: isAutoPlaying ? '2s' : '0s'
            }}
          />
        </div>
      </div>

      {/* REST OF THE CONTENT BELOW SLIDER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Category Thumbnails - Hidden on Mobile, Shows on Desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-xl h-28 transition-all duration-300 group
                        ${index === activeSlide ? 'ring-3 ring-white scale-105 shadow-2xl' : 'ring-1 ring-white/30 hover:ring-white/60'}`}
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.bgImage})` }}
              >
                <div className={`absolute inset-0 ${index === activeSlide ? 'bg-black/40' : 'bg-black/50'} transition-all duration-300`} />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className={`font-bold text-white text-sm text-center ${index === activeSlide ? 'text-base' : ''}`}>
                  {category.title}
                </div>
                <div className="text-white/80 text-xs mt-1">
                  {category.odiaTitle}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-12 lg:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-slate-200 
                         shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 group
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${800 + index * 200}ms`,
                }}
              >
                {/* Icon with Gradient Background */}
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 
                              bg-gradient-to-br from-white to-slate-100 shadow-md sm:shadow-lg">
                  <div className="text-xl sm:text-2xl">{stat.icon}</div>
                </div>

                {/* Number with Gradient Text */}
                <div className={`text-2xl sm:text-3xl font-black mb-1 sm:mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-slate-700 font-semibold text-sm sm:text-base">
                  {stat.label}
                </div>

                {/* Bottom Gradient Line */}
                <div className={`mt-3 sm:mt-4 h-1 w-10 sm:w-12 bg-gradient-to-r ${stat.gradient} rounded-full mx-auto 
                              transition-all duration-300 group-hover:w-14 sm:group-hover:w-16`} />
              </div>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <div
          className={`mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          style={{ transitionDelay: '1600ms' }}
        >
          <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl sm:shadow-2xl border border-blue-100">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 
                            bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                Your Trusted Partner in Business Success
              </h2>

              <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
                We provide comprehensive support for entrepreneurs across Odisha - guiding you through
                scheme discovery, application processes, and implementation with expert assistance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/benefits"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold 
                           rounded-lg sm:rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  Discover Benefits
                </Link>
                <Link
                  href="/success-stories"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white border-2 border-blue-600 text-blue-700 font-bold 
                           rounded-lg sm:rounded-xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          style={{ transitionDelay: '2000ms' }}
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl sm:shadow-2xl border border-slate-200">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                Ready to Grow Your Business?
              </h3>

              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Get personalized guidance from our business experts. We'll help you navigate
                government schemes and maximize your benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <Link
                  href="/contact"
                  className="px-8 sm:px-10 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold 
                           rounded-lg sm:rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/help"
                  className="px-8 sm:px-10 py-2.5 sm:py-3 bg-white border-2 border-blue-600 text-blue-700 font-bold 
                           rounded-lg sm:rounded-xl hover:bg-blue-50 hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  Instant Support
                </Link>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-slate-200">
                {[
                  { icon: '📞', title: '24/7 Helpline', value: '9040626617', color: 'text-blue-600' },
                  { icon: '📧', title: 'Email Support', value: 'digadarshansupport@gmail.com', color: 'text-emerald-600' },
                  { icon: '📍', title: 'Coverage', value: '8 Districts', color: 'text-purple-600' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 
                             transition-all duration-300 hover:bg-white hover:shadow-lg"
                  >
                    <div className={`text-lg sm:text-xl mb-1 sm:mb-2 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="text-slate-600 text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">{item.title}</div>
                    <div className="text-slate-800 font-bold text-sm sm:text-base">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        /* Ensure slider takes full viewport */
        .h-screen {
          height: 100vh;
          height: 100dvh; /* For mobile browsers */
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }

        /* Prevent image selection */
        img {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Smooth transitions */
        .transition-all {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .text-balance {
            text-wrap: balance;
          }
          
          /* Prevent layout shift on mobile */
          .min-h-screen {
            min-height: 100dvh;
          }
        }
      `}</style>
    </div>
  )
}