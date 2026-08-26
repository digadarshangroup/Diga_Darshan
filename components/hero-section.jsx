"use client";

import HeroSlider from "./hero-section/HeroSlider";
import AboutSection from "./hero-section/AboutSection";
import FeaturesSection from "./hero-section/FeaturesSection";
import CTASection from "./hero-section/CTASection";
import { HomeCategories } from "@/components/home-categories";

export function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Slider - grows to fit its content, never clips it */}
      <section className="relative mx-4 md:mx-8 lg:mx-10 mt-4 md:mt-6 rounded-3xl overflow-hidden min-h-[640px] sm:min-h-[85vh] md:min-h-[90vh] shadow-2xl">
        <HeroSlider />
      </section>

      {/* Business Category Grid - primary navigation into every service */}
      <HomeCategories />

      {/* Main Content Container - Takes remaining space */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
        <AboutSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
}