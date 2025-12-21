"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        {/* Add other sections here */}
      </main>
      
      <Footer />
    </div>
  );
}