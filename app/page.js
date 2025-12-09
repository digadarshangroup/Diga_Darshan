"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { LoadingIntro } from "@/components/loading-intro"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 300)
  }

  if (isLoading) {
    return <LoadingIntro onComplete={handleLoadingComplete} />
  }

  return (
    <div
      className={`min-h-screen transition-all duration-1000 ${showContent ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"}`}
    >
      <Header />
      <main>
        <HeroSection />

      </main>
      <Footer />
    </div>
  )
}