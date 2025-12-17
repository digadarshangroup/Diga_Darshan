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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Content container with slide-down intro */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={isLoading ? { y: 0, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen"
      >
        <Header />
        <main className="relative z-10">
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