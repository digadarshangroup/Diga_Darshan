"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { serviceCategories, getCategoryHref } from "@/lib/service-categories";
import { btn, btnSize } from "@/lib/ui";

const AUTOPLAY_MS = 6000;

/** Every business domain gets a slide, straight from the shared category data. */
const SLIDES = serviceCategories.map((category) => ({
  id: category.slug,
  href: getCategoryHref(category),
  description: category.description,
  ...category.hero,
}));

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Only slides that have actually been shown get their background fetched,
  // so the first paint pulls one image instead of all seven.
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]));
  const autoPlayRef = useRef(null);

  useEffect(() => {
    setLoadedSlides((prev) => {
      if (prev.has(activeSlide)) return prev;
      const next = new Set(prev);
      next.add(activeSlide);
      return next;
    });
  }, [activeSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return undefined;
    autoPlayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setActiveSlide((index + SLIDES.length) % SLIDES.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), AUTOPLAY_MS);
  };

  const goToPrev = () => goToSlide(activeSlide - 1);
  const goToNext = () => goToSlide(activeSlide + 1);

  const current = SLIDES[activeSlide];

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            {loadedSlides.has(index) && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.bgImage}')` }}
              />
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 pb-28 sm:pb-32">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 ring-1 ring-white/20">
                <span className="text-white font-semibold text-sm">{current.odiaTitle}</span>
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="text-white/70 text-xs font-medium">Matrubhoomi</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {current.headline}
                <span className="block text-lg sm:text-xl md:text-2xl text-white/70 font-medium mt-3">
                  {current.subtitle}
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                {current.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href={current.href}
                  className={`${btn.onDark} ${btnSize.lg} whitespace-nowrap`}
                >
                  Explore services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/917750878444?text=${encodeURIComponent(
                        `Hello Matrubhoomi Team, I'm interested in ${current.headline}.`
                      )}`,
                      "_blank"
                    )
                  }
                  className={`${btn.onDarkOutline} ${btnSize.lg} whitespace-nowrap`}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp consultation
                </button>
              </div>
            </motion.div>

            {/* Right */}
            <div className="hidden lg:block">
              <motion.div
                key={`${current.id}-stats`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 ring-1 ring-white/20"
              >
                <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                  {current.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-white tracking-tight">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs text-white/60 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/15">
                  <div className="text-white/60 text-sm">Part of Matrubhoomi</div>
                  <div className="text-white font-semibold mt-1 text-sm">
                    Berhampur • Bhubaneswar • Across Odisha
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 sm:bottom-7 inset-x-0 z-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              aria-label="Previous slide"
              className="grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md ring-1 ring-white/20 text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md ring-1 ring-white/20 text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${slide.headline}`}
                aria-current={index === activeSlide}
                className={`transition-all duration-300 rounded-full ${
                  index === activeSlide
                    ? "w-7 sm:w-9 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="hidden sm:block text-white/50 text-sm tabular-nums">
            <span className="text-xl font-bold text-white">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>
            <span className="mx-1">/</span>
            <span>{String(SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
