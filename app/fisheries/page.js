"use client"

import { Header } from "@/components/header"
import { SchemeOverview } from "@/components/scheme-overview"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Fish } from "lucide-react"
import Link from "next/link"

export default function FisheriesPage() {
    return (
        <div className="min-h-screen">
            <Header />

            <main className="py-8">
                {/* Page Header */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <Link href="/">
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Categories
                            </Button>
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                            <Fish className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                FISHERIES SCHEMES
                            </h1>
                            <p className="text-lg text-gray-600">
                                ମତ୍ସ୍ୟ ଯୋଜନା - Available government schemes for fisheries sector
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scheme Overview Component */}
                <SchemeOverview />

                {/* Additional Info Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">
                            About Fisheries Sector Support
                        </h2>
                        <p className="text-gray-700 mb-4">
                            The fisheries sector in Odisha receives comprehensive support through various government schemes
                            aimed at promoting sustainable aquaculture, improving infrastructure, and ensuring the welfare
                            of fisherfolk. Our portal helps you navigate these opportunities efficiently.
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium text-blue-700">ଓଡ଼ିଆରେ:</span> ଓଡ଼ିଶାରେ ମତ୍ସ୍ୟ କ୍ଷେତ୍ର ସ୍ଥାୟୀ ଜଳଚର କୃଷି, ମୌଳିକ ସୁବିଧା ଉନ୍ନତି,
                            ଏବଂ ମତ୍ସ୍ୟଜୀବୀଙ୍କ କଲ୍ୟାଣ ନିଶ୍ଚିତ କରିବା ପାଇଁ ବିଭିନ୍ନ ସରକାରୀ ଯୋଜନା ମାଧ୍ୟମରେ ସମ୍ପୂର୍ଣ୍ଣ ସମର୍ଥନ ପାଇଥାଏ।
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}