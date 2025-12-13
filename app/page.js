"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { LoadingIntro } from "@/components/loading-intro";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content container with slide-down intro */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={isLoading ? { y: 200, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen"
      >
        <Header />
        <main>
          <HeroSection />
        </main>
        <Footer />
      </motion.div>

      {/* Loader overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-50">
          <LoadingIntro onComplete={() => setIsLoading(false)} />
        </div>
      )}
    </div>
  );
}
