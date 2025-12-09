"use client"
import { useState, useEffect } from "react"

export function LoadingIntro({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      id: "fisheries",
      name: "FISHERIES",
      odiaName: "ମତ୍ସ୍ୟ",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🐟",
      description: "Scientific aquaculture"
    },
    {
      id: "pharmacy",
      name: "PHARMACY",
      odiaName: "ଔଷଧ",
      color: "emerald",
      gradient: "from-emerald-500 to-green-500",
      icon: "💊",
      description: "Medical business"
    },
    {
      id: "trading",
      name: "TRADING",
      odiaName: "ବାଣିଜ୍ୟ",
      color: "purple",
      gradient: "from-purple-500 to-violet-500",
      icon: "📊",
      description: "Sustainable trading"
    },
    {
      id: "horticulture",
      name: "HORTICULTURE",
      odiaName: "ଉଦ୍ୟାନ ବିଜ୍ଞାନ",
      color: "orange",
      gradient: "from-orange-500 to-amber-500",
      icon: "🌱",
      description: "Agriculture growth"
    }
  ]

  const loadingTexts = [
    "Starting Diga Darshan...",
    "Loading Fisheries...",
    "Setting Pharmacy...",
    "Preparing Trading...",
    "Configuring Horticulture...",
    "Connecting Schemes...",
    "Finalizing...",
    "Welcome!"
  ]

  // Rotate active category
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  // Progress animation
  useEffect(() => {
    const completeTimeout = setTimeout(() => {
      onComplete()
    }, 2800)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 4
      })
    }, 112)

    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length)
    }, 350)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
      clearTimeout(completeTimeout)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Responsive Background with Safe Area */}
      <div className="absolute inset-0">
        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-emerald-950/20" />

        {/* Minimal Floating Orbs - Only on larger screens */}
        <div className="hidden sm:block absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-3xl animate-float-slow opacity-20"
              style={{
                width: `${80 + i * 60}px`,
                height: `${80 + i * 60}px`,
                background: `radial-gradient(circle, ${i % 4 === 0 ? 'rgba(59, 130, 246, 0.15)' :
                  i % 4 === 1 ? 'rgba(16, 185, 129, 0.15)' :
                    i % 4 === 2 ? 'rgba(139, 92, 246, 0.15)' :
                      'rgba(249, 115, 22, 0.15)'
                  }, transparent 70%)`,
                left: `${15 + i * 25}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Container - COMPACT LAYOUT */}
      <div className="relative h-full w-full flex flex-col items-center justify-center p-3 sm:p-4 safe-area">
        {/* Logo Section - MUCH SMALLER */}
        <div className="relative mb-4 sm:mb-5">
          {/* Outer Glow - Minimal */}
          <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-20" />

          {/* Logo Container - COMPACT */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                        bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl sm:rounded-2xl
                        flex items-center justify-center shadow-lg border border-slate-800/50 backdrop-blur-sm">

            {/* Center Logo - SMALL */}
            <div className="text-center">
              <div className="text-sm sm:text-base md:text-lg font-bold text-cyan-300 leading-none">DIGA</div>
              <div className="text-sm sm:text-base md:text-lg font-bold text-blue-300 leading-none">DARSHAN</div>
              <div className="text-[8px] sm:text-xs text-slate-400 mt-0.5">Portal</div>
            </div>

            {/* Small Category Indicators Around Logo */}
            {categories.map((category, idx) => {
              const angle = (idx * 90) * (Math.PI / 180)
              const radius = 22 // Very small radius
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={category.id}
                  className={`absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-md ${category.gradient} 
                            flex items-center justify-center text-xs sm:text-sm font-bold text-white 
                            shadow border border-white/20 transition-all duration-500
                            ${activeCategory === idx ? 'scale-125' : 'scale-75'}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                  {category.icon}
                </div>
              )
            })}
          </div>
        </div>

        {/* Company Title - COMPACT */}
        <div className="text-center mb-3 sm:mb-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black mb-1">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DIGA DARSHAN
            </span>
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base font-bold text-slate-300">
            Business Portal
          </h2>
          <p className="text-[10px] sm:text-xs text-slate-400 mt-1 max-w-xs mx-auto px-2">
            ଓଡ଼ିଶାର ବ୍ୟବସାୟ ବିକାଶ
          </p>
        </div>

        {/* ACTIVE CATEGORY BOX - MOVED DOWN */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-3 sm:mb-4">
          <div className={`relative ${categories[activeCategory].gradient} rounded-lg sm:rounded-xl p-2 sm:p-3 
                        backdrop-blur-sm border border-white/20 shadow transition-all duration-500`}>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="text-xl sm:text-2xl animate-bounce">
                {categories[activeCategory].icon}
              </div>
              <div className="text-center flex-1 min-w-0">
                <div className="text-sm sm:text-base md:text-lg font-bold text-white truncate">
                  {categories[activeCategory].name}
                </div>
                <div className="text-xs sm:text-sm text-white/80 truncate">
                  {categories[activeCategory].odiaName}
                </div>
                <div className="text-[10px] sm:text-xs text-white/60 mt-0.5 truncate">
                  {categories[activeCategory].description}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRESS SECTION - COMPACT */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-3 sm:mb-4">
          {/* Progress Bar */}
          <div className="relative h-1.5 sm:h-2 bg-slate-800/50 rounded-full overflow-hidden mb-1">
            <div
              className="absolute h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, 
                  #3b82f6 0%,
                  #10b981 33%,
                  #8b5cf6 66%,
                  #f97316 100%)`
              }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex justify-between text-[10px] sm:text-xs text-slate-400">
            <span>Loading...</span>
            <span className="font-bold text-slate-300">{progress}%</span>
          </div>
        </div>

        {/* LOADING MESSAGE - COMPACT */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-3 sm:mb-4">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 border border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse flex-shrink-0" />
              <p className="text-xs sm:text-sm text-slate-300 truncate flex-1">
                {loadingTexts[currentText]}
              </p>
            </div>
          </div>
        </div>

        {/* ALL 4 CATEGORIES IN ONE LINE - COMPACT GRID */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-3 sm:mb-4">
          <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
            {categories.map((category, idx) => (
              <div
                key={category.id}
                className={`relative p-1.5 sm:p-2 rounded-lg backdrop-blur-sm border transition-all duration-300
                          flex flex-col items-center justify-center min-h-[60px] sm:min-h-[70px]
                          ${idx === activeCategory
                    ? `bg-gradient-to-b ${category.gradient} border-white/50 scale-105`
                    : 'bg-slate-900/40 border-slate-700/40'
                  }`}
              >
                <div className="text-lg sm:text-xl md:text-2xl mb-0.5 sm:mb-1">{category.icon}</div>
                <div className="text-center">
                  <div className="text-[8px] sm:text-[10px] md:text-xs font-bold text-white truncate w-full">
                    {category.name}
                  </div>
                  <div className="text-[6px] sm:text-[8px] md:text-[10px] text-white/70 truncate w-full">
                    {category.odiaName}
                  </div>
                </div>
                {idx === activeCategory && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CATEGORY INDICATOR DOTS */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          {categories.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${idx === activeCategory
                ? 'bg-white scale-125'
                : 'bg-white/20'
                }`}
            />
          ))}
        </div>

        {/* FOOTER - COMPACT */}
        <div className="text-center text-slate-500 text-[8px] sm:text-xs px-4">
          <p>© 2024 Diga Darshan</p>
          <p className="mt-0.5">Empowering Odisha Businesses</p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        /* Safe area for mobile notches */
        .safe-area {
          padding-top: env(safe-area-inset-top);
          padding-bottom: env(safe-area-inset-bottom);
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        
        /* Ensure everything fits */
        .max-w-xs {
          max-width: 20rem; /* 320px */
        }
        
        .max-w-sm {
          max-width: 24rem; /* 384px */
        }
        
        .max-w-md {
          max-width: 28rem; /* 448px */
        }
        
        /* Prevent horizontal overflow */
        .overflow-hidden {
          overflow: hidden !important;
        }
        
        /* Force single line */
        .single-line {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}