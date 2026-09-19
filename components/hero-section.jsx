"use client";

import HeroSlider from "./hero-section/HeroSlider";
import AboutSection from "./hero-section/AboutSection";
import FeaturesSection from "./hero-section/FeaturesSection";
import CTASection from "./hero-section/CTASection";
import { HomeCategories } from "@/components/home-categories";

export function HeroSection() {
  return (
    <>
      {/* Hero slider — grows to fit its content, never clips it */}
      <section className="relative mx-4 md:mx-6 lg:mx-8 mt-4 md:mt-6 rounded-3xl overflow-hidden min-h-[600px] sm:min-h-[80vh] lg:min-h-[85vh] shadow-lg">
        <HeroSlider />
      </section>

      {/* Primary navigation into every service */}
      <HomeCategories />

      <AboutSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
