"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, Bell, Mail, Home, Contact, Sparkles, Zap, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Predefined star positions to avoid Math.random() during hydration
const PREDEFINED_STARS = [
    { x: 10, y: 20, speed: 1.2 },
    { x: 25, y: 60, speed: 0.8 },
    { x: 40, y: 30, speed: 1.5 },
    { x: 60, y: 45, speed: 1.0 },
    { x: 75, y: 15, speed: 1.3 },
    { x: 85, y: 70, speed: 0.9 },
    { x: 15, y: 85, speed: 1.1 },
    { x: 35, y: 10, speed: 1.4 },
    { x: 55, y: 80, speed: 0.7 },
    { x: 90, y: 40, speed: 1.2 },
    { x: 20, y: 50, speed: 1.0 },
    { x: 65, y: 25, speed: 1.3 },
    { x: 45, y: 65, speed: 0.9 },
    { x: 80, y: 55, speed: 1.1 },
    { x: 30, y: 35, speed: 1.4 },
    { x: 70, y: 90, speed: 0.8 },
    { x: 95, y: 20, speed: 1.5 },
    { x: 5, y: 75, speed: 1.0 },
    { x: 50, y: 15, speed: 1.2 },
    { x: 85, y: 85, speed: 0.9 }
]

export default function PharmacyPage() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Only show animations after component is mounted on client
    if (!isMounted) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 py-12 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-8">
                            <Link href="/">
                                <Button variant="outline" className="flex items-center gap-2">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
                                <div className="text-4xl">🚀</div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Coming Soon
                            </h1>
                            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                                We're working on something exciting! This section is currently under development
                                and will be available soon.
                            </p>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col overflow-hidden relative">
            {/* Animated Background Elements - Only rendered on client */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Particles */}
                {PREDEFINED_STARS.map(star => (
                    <div
                        key={`${star.x}-${star.y}`}
                        className="absolute w-1 h-1 bg-blue-300 rounded-full animate-float"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            animationDuration: `${star.speed * 3}s`,
                        }}
                    />
                ))}

                {/* Moving Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full animate-pulse opacity-30 blur-xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-100 to-blue-50 rounded-full animate-pulse opacity-20 blur-xl animate-spin-slow"></div>
            </div>

            <Header />

            <main className="flex-1 py-12 md:py-20 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button with Animation */}
                    <div className="mb-8">
                        <Link href="/">
                            <Button variant="outline" className="flex items-center gap-2 hover:gap-3 transition-all duration-300">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            {/* Animated Icon */}
                            <div className="relative inline-block mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-70 animate-pulse"></div>
                                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl">
                                    <div className="text-4xl animate-bounce">🚀</div>
                                    {/* Rotating Rings */}
                                    <div className="absolute -inset-4 border-2 border-blue-300 rounded-full animate-spin-slow"></div>
                                    <div className="absolute -inset-6 border border-purple-200 rounded-full animate-spin-slow-reverse"></div>
                                </div>
                                {/* Floating Sparkles */}
                                <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 animate-spin" />
                                <Zap className="absolute -bottom-2 -left-2 h-5 w-5 text-blue-400 animate-pulse" />
                            </div>

                            {/* Animated Text */}
                            <div className="overflow-hidden">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Coming Soon
                                </h1>
                            </div>

                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                We're working on something exciting! This section is currently under development
                                and will be available soon.
                            </p>
                        </div>

                        {/* Features Grid with Hover Animations */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {[
                                { icon: Clock, color: "blue", title: "In Development", desc: "Our team is actively working on new features." },
                                { icon: Calendar, color: "purple", title: "Launching Soon", desc: "Exciting launch planned for the near future." },
                                { icon: Bell, color: "green", title: "Stay Updated", desc: "Get notified when this section goes live." }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className={`w-12 h-12 ${item.color === 'blue' ? 'bg-blue-100' : item.color === 'purple' ? 'bg-purple-100' : 'bg-green-100'} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`h-6 w-6 ${item.color === 'blue' ? 'text-blue-600' : item.color === 'purple' ? 'text-purple-600' : 'text-green-600'}`} />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Animated Coming Soon Card */}
                        <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 mb-12 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                            {/* Floating Elements Inside Card */}
                            <Star className="absolute top-4 right-4 h-5 w-5 text-yellow-400 animate-bounce" />
                            <Star className="absolute bottom-4 left-4 h-4 w-4 text-blue-300 animate-bounce" style={{ animationDelay: '0.5s' }} />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex-1">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-pulse">
                                        Exciting Updates Ahead
                                    </h2>
                                    <div className="space-y-4">
                                        {[
                                            "We're building something special to enhance your experience.",
                                            "New features and improvements are in the pipeline.",
                                            "Stay tuned for announcements and updates."
                                        ].map((text, index) => (
                                            <div key={index} className="flex items-start group">
                                                <div className={`flex-shrink-0 w-8 h-8 rounded-full ${index === 0 ? 'bg-gradient-to-r from-blue-100 to-blue-50' : index === 1 ? 'bg-gradient-to-r from-green-100 to-green-50' : 'bg-gradient-to-r from-purple-100 to-purple-50'} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                                                    <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-purple-500'} animate-pulse`}></div>
                                                </div>
                                                <p className="text-gray-700 pt-1 group-hover:translate-x-2 transition-transform duration-300">
                                                    {text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-shrink-0 w-full md:w-96">
                                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                        <div className="text-center mb-4">
                                            <div className="relative inline-block mb-3">
                                                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full blur-md opacity-50"></div>
                                                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full group hover:scale-110 transition-transform duration-300">
                                                    <Mail className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                Get Notified
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-4">
                                                We'll let you know when this section is ready
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            <input
                                                type="email"
                                                placeholder="Your email address"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-300 focus:scale-[1.02]"
                                            />
                                            <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black hover:scale-[1.02] transition-all duration-300 group">
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                    Notify Me
                                                </span>
                                                <Bell className="ml-2 h-4 w-4 group-hover:animate-ring" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Thank You Message */}
                        <div className="text-center">
                            <div className="relative inline-block mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl opacity-50"></div>
                                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-lg">
                                    <div className="text-3xl animate-wiggle">✨</div>
                                </div>
                                {/* Rotating Border */}
                                <div className="absolute -inset-4 border-2 border-transparent border-t-blue-300 border-r-purple-300 rounded-full animate-spin"></div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 animate-bounce-slow">
                                Thank You for Your Patience
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                                We appreciate your interest and look forward to sharing our progress with you soon.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/">
                                    <Button className="flex items-center gap-2 group hover:gap-3 transition-all duration-300">
                                        <Home className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                                        Return to Home
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" className="flex items-center gap-2 group hover:gap-3 transition-all duration-300">
                                        <Contact className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                                        Contact Support
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Add CSS Animations */}
            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-3deg); }
                    50% { transform: rotate(3deg); }
                }
                
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes ring {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(10deg); }
                    75% { transform: rotate(-10deg); }
                    100% { transform: rotate(0deg); }
                }
                
                .animate-float {
                    animation: float linear infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 25s linear infinite;
                }
                
                .animate-wiggle {
                    animation: wiggle 2s ease-in-out infinite;
                }
                
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                
                .animate-ring {
                    animation: ring 0.5s ease-in-out;
                }
            `}</style>

            <Footer />
        </div>
    )
}