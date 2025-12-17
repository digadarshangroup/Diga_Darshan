"use client";

import HeroSlider from "./HeroSlider";
import AboutSection from "./AboutSection";
import StatsSection from "./StatsSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";

export function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Slider - Takes 90vh */}
      <section className="relative mx-4 md:mx-8 lg:mx-10 mt-4 md:mt-6 rounded-3xl overflow-hidden h-[85vh] md:h-[90vh] shadow-2xl">
        <HeroSlider />
      </section>

      {/* Main Content Container - Takes remaining space */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
        <AboutSection />
        <StatsSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
}