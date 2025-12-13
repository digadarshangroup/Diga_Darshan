import { Suspense } from "react";
import { Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

// ================================
// PROFESSIONAL SEO METADATA
// ================================
export const metadata = {
  title: {
    default: "Digadarshan Group | ଓଡିଶାର ବହୁମୁଖୀ ବ୍ୟବସାୟିକ ସେବା ପ୍ରଦାନକାରୀ",
    template: "%s | Digadarshan Group",
  },
  description:
    "ଦିଗଦର୍ଶନ ଗ୍ରୁପ୍ - ଓଡିଶାର ଏକ ପ୍ରଗତିଶୀଳ ସଂସ୍ଥା ଯାହା ମତ୍ସ୍ୟ ପାଲନ, ଉଦ୍ୟାନିକୀ, ଫାର୍ମାସି ବ୍ୟବସାୟ, ଓ ବାଣିଜ୍ୟ ସେବା କ୍ଷେତ୍ରରେ ସର୍ବୋଚ୍ଚ ସେବା ପ୍ରଦାନ କରେ | ସରକାରୀ ସବସିଡି, ବ୍ୟବସାୟ ପରାମର୍ଶ ଓ କାଗଜପତ୍ର ସହାୟତା |",

  keywords: [
    "Digadarshan Group",
    "ଦିଗଦର୍ଶନ ଗ୍ରୁପ୍",
    "Odisha business services",
    "Odisha fisheries",
    "Odisha horticulture",
    "Odisha pharmacy",
    "Odisha trading",
    "Aqua-Nivesh fisheries",
    "Horticulture Odisha",
    "Pharmacy business Odisha",
    "Trading company Odisha",
    "Government subsidy Odisha",
    "ଓଡିଶା ବ୍ୟବସାୟ",
    "ମତ୍ସ୍ୟ ପାଲନ",
    "ଉଦ୍ୟାନିକୀ",
    "ଫାର୍ମାସି",
    "ବାଣିଜ୍ୟ",
    "ସରକାରୀ ସବସିଡି",
    "ବ୍ୟବସାୟ ପରାମର୍ଶ",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "or_IN",
    url: "https://digadarshan.com",
    siteName: "Digadarshan Group | ଓଡିଶାର ବହୁମୁଖୀ ବ୍ୟବସାୟ",
    title: "Digadarshan Group - ଓଡିଶାର ବହୁମୁଖୀ ବ୍ୟବସାୟିକ ସେବା",
    description:
      "ମତ୍ସ୍ୟ ପାଲନ, ଉଦ୍ୟାନିକୀ, ଫାର୍ମାସି, ଓ ବାଣିଜ୍ୟ କ୍ଷେତ୍ରରେ ସର୍ବୋଚ୍ଚ ସେବା | ସରକାରୀ ସବସିଡି, ବ୍ୟବସାୟ ପରାମର୍ଶ, ଓ କାଗଜପତ୍ର ସହାୟତା |",
    images: [
      {
        url: "https://digadarshan.com/logoFull.png",
        width: 1200,
        height: 630,
        alt: "Digadarshan Group - ଓଡିଶାର ବହୁମୁଖୀ ବ୍ୟବସାୟ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digadarshan Group | ଓଡିଶାର ବହୁମୁଖୀ ସେବା",
    description:
      "ମତ୍ସ୍ୟ, ଉଦ୍ୟାନିକୀ, ଫାର୍ମାସି, ଓ ବାଣିଜ୍ୟ କ୍ଷେତ୍ରରେ ସର୍ବୋଚ୍ଚ ସେବା | ସରକାରୀ ସବସିଡି, ବ୍ୟବସାୟ ପରାମର୍ଶ |",
    images: ["https://digadarshan.com/logoFull.png"],
  },

  alternates: {
    canonical: "https://digadarshan.com",
    languages: {
      "or-IN": "https://digadarshan.com/or",
      "en-IN": "https://digadarshan.com/en",
    },
  },

  verification: {
    google: "your-google-verification-code",
  },
};

// Enhanced Business Structured Data for parent company with all services
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation", "ProfessionalService"],
  name: "Digadarshan Group",
  alternateName: "ଦିଗଦର୍ଶନ ଗ୍ରୁପ୍",
  description:
    "ଓଡିଶାର ଏକ ପ୍ରଗତିଶୀଳ ବହୁମୁଖୀ ବ୍ୟବସାୟିକ ସଂସ୍ଥା ଯାହା ମତ୍ସ୍ୟ ପାଲନ, ଉଦ୍ୟାନିକୀ, ଫାର୍ମାସି ବ୍ୟବସାୟ, ଓ ବାଣିଜ୍ୟ ସେବା କ୍ଷେତ୍ରରେ ସର୍ବୋଚ୍ଚ ସେବା ପ୍ରଦାନ କରେ",
  url: "https://digadarshan.com",
  logo: "https://digadarshan.com/logoFull.png",
  foundingDate: "2023",
  founders: [
    {
      "@type": "Person",
      name: "Digadarshan Group Founders",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+91-XXXXXXXXXX",
    email: "info@digadarshan.com",
    areaServed: "IN",
    availableLanguage: ["en", "or", "ଓଡିଆ"],
  },

  // Main Business Divisions
  department: [
    {
      "@type": "Organization",
      name: "Aqua-Nivesh",
      alternateName: "ଆକ୍ୱା-ନିବେଶ",
      description:
        "ମତ୍ସ୍ୟ ପାଲନ ବିଭାଗ - ମାଛ ଚାଷୀଙ୍କୁ ସରକାରୀ ସବସିଡି, କାଗଜପତ୍ର ସହାୟତା, ଓ ବ୍ୟବସାୟ ପରାମର୍ଶ",
      url: "https://aquanivesh.digadarshan.com",
    },
    {
      "@type": "Organization",
      name: "Horticulture Division",
      alternateName: "ଉଦ୍ୟାନିକୀ ବିଭାଗ",
      description:
        "ଉଦ୍ୟାନିକୀ ବିଭାଗ - ଫଳମୂଳ, ଫୁଲ ଓ ଶାଗସବ୍ଜି ଚାଷରେ ସରକାରୀ ସବସିଡି ଓ ବ୍ୟବସାୟିକ ସହାୟତା",
      url: "https://digadarshan.com/horticulture",
    },
    {
      "@type": "Organization",
      name: "Pharmacy Division",
      alternateName: "ଫାର୍ମାସି ବିଭାଗ",
      description:
        "ଫାର୍ମାସି ବ୍ୟବସାୟ ବିଭାଗ - ଔଷଧ ବିତରଣ, ଫାର୍ମାସି ଷ୍ଟୋର ସ୍ଥାପନା, ଓ ମେଡିକାଲ ସପ୍ଲାଇ ଚେନ ମ୍ୟାନେଜମେଣ୍ଟ",
      url: "https://digadarshan.com/pharmacy",
    },
    {
      "@type": "Organization",
      name: "Trading Division",
      alternateName: "ବାଣିଜ୍ୟ ବିଭାଗ",
      description:
        "ବାଣିଜ୍ୟ ବିଭାଗ - ବିଭିନ୍ନ ପ୍ରକାରର ପଦାର୍ଥ କ୍ରୟ-ବିକ୍ରୟ, ମହାଜନୀ ସେବା, ଓ ବ୍ୟବସାୟିକ ସହଯୋଗ",
      url: "https://digadarshan.com/trading",
    },
  ],

  serviceType: [
    // Fisheries Services
    "Government Fisheries Subsidy",
    "Fish Farming Consultation",
    "Aquaculture Project Setup",
    "PMMSY Scheme Assistance",
    "Fisheries Documentation",

    // Horticulture Services
    "Horticulture Subsidy Processing",
    "Fruit & Vegetable Farming Support",
    "Floriculture Business Setup",
    "Organic Farming Consultation",
    "Horticulture Market Linkage",

    // Pharmacy Services
    "Pharmacy Store Setup",
    "Medicine Distribution",
    "Medical Supply Chain",
    "Pharmacy License Assistance",
    "Healthcare Business Consulting",

    // Trading Services
    "Commodity Trading",
    "Procurement Services",
    "Supply Chain Management",
    "Export-Import Assistance",
    "Business Partnership Services",

    // Common Services in Odia
    "ସରକାରୀ ସବସିଡି ସେବା",
    "କାଗଜପତ୍ର ସହାୟତା",
    "ବ୍ୟବସାୟ ପରାମର୍ଶ",
    "ପ୍ରକଳ୍ପ ରିପୋର୍ଟ",
    "ବଜାର ବିସ୍ତାର ସେବା",
  ],

  areaServed: {
    "@type": "State",
    name: "Odisha",
    alternateName: "ଓଡିଶା",
    description:
      "Serving all districts of Odisha with focus on rural development and entrepreneurship growth",
  },

  brand: {
    "@type": "Brand",
    name: "Digadarshan Group",
    alternateName: "ଦିଗଦର୍ଶନ ଗ୍ରୁପ୍",
    slogan: "ଓଡିଶାର ଅର୍ଥନୈତିକ ବିକାଶର ସହଯୋଗୀ",
    logo: "https://digadarshan.com/logoFull.png",
  },

  award: [
    "Odisha Startup Recognition",
    "MSME Registered",
    "Government Approved Service Provider",
  ],

  knowsAbout: [
    "Agriculture & Fisheries",
    "Horticulture Development",
    "Pharmaceutical Business",
    "Trading & Commerce",
    "Government Schemes",
    "Business Entrepreneurship",
    "Rural Development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="or" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Multi-language support */}
        <link
          rel="alternate"
          hrefLang="or-in"
          href="https://digadarshan.com/or"
        />
        <link
          rel="alternate"
          hrefLang="en-in"
          href="https://digadarshan.com/en"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://digadarshan.com"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Essential Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f766e" />

        {/* Additional SEO Tags */}
        <meta
          name="author"
          content="Digadarshan Group - An Odisha Based Multi-Service Organization"
        />
        <meta
          name="copyright"
          content="© 2024 Digadarshan Group. ସର୍ବସ୍ୱାଧିକାର ସଂରକ୍ଷିତ |"
        />
        <meta name="geo.region" content="IN-OR" />
        <meta name="geo.placename" content="Odisha" />
        <meta name="geo.position" content="20.9517;85.0985" />
        <meta name="ICBM" content="20.9517, 85.0985" />
        <meta name="language" content="Odia, English" />
        <meta name="country" content="India" />
        <meta name="state" content="Odisha" />
        <meta
          name="target-audience"
          content="Odisha entrepreneurs, Farmers, Business owners, Rural youth, Startups"
        />
        <meta
          name="business-type"
          content="Multi-service Organization, Business Consulting, Government Scheme Facilitation"
        />
      </head>
      <body
        className={`min-h-screen bg-white font-sans antialiased`}
      >
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50">
              <div className="text-center space-y-4 max-w-2xl px-4">
                {/* Odisha Startup Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-teal-200 shadow-sm mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    <span className="text-teal-700">ଓଡିଶା ଷ୍ଟାର୍ଟଅପ୍</span> •
                    ଦିଗଦର୍ଶନ ଗ୍ରୁପ୍
                  </span>
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="text-xs text-gray-600">ବହୁମୁଖୀ ବ୍ୟବସାୟ</span>
                </div>

                {/* Main Logo with Odisha theme */}
                <div className="relative">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#f97316] via-teal-600 to-blue-600 flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-3xl">ଦି</span>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-teal-100 border-t-[#f97316] animate-spin"></div>

                  {/* Service Icons around logo */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center shadow">
                    <span className="text-xs font-bold text-teal-800">🐟</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shadow">
                    <span className="text-xs font-bold text-green-800">🌿</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center shadow">
                    <span className="text-xs font-bold text-red-800">💊</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shadow">
                    <span className="text-xs font-bold text-purple-800">
                      📦
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div>
                  <h1 className="text-4xl font-bold text-teal-800 mb-2">
                    Digadarshan Group
                  </h1>
                  <p className="text-lg text-gray-700 font-medium mb-3">
                    ଦିଗଦର୍ଶନ ଗ୍ରୁପ୍ | ଓଡିଶାର ବହୁମୁଖୀ ସେବା
                  </p>

                  {/* Main Odia tagline */}
                  <div className="bg-gradient-to-r from-teal-50 via-orange-50 to-blue-50 p-4 rounded-xl border border-teal-100 mb-4 shadow-sm">
                    <p className="text-lg text-gray-800 font-semibold mb-2">
                      ଓଡିଶାର ବ୍ୟବସାୟିକ ବିକାଶର ସହଯୋଗୀ
                    </p>
                    <p className="text-sm text-gray-600">
                      Empowering Odisha&apos;s Economic Growth through
                      Multi-Sector Services
                    </p>
                  </div>

                  {/* Our Services Section */}
                  <div className="space-y-3">
                    <p className="font-bold text-teal-700 text-lg">
                      ଆମର ସେବାସମୂହ:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {/* Fisheries */}
                      <div className="bg-gradient-to-b from-teal-50 to-white p-3 rounded-lg border border-teal-200 shadow-sm">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-teal-700">🐟</span>
                        </div>
                        <h3 className="font-bold text-teal-800 text-sm">
                          Aqua-Nivesh
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">
                          ମତ୍ସ୍ୟ ପାଲନ
                        </p>
                        <p className="text-[10px] text-teal-600 mt-1">
                          Fisheries Department
                        </p>
                      </div>

                      {/* Horticulture */}
                      <div className="bg-gradient-to-b from-green-50 to-white p-3 rounded-lg border border-green-200 shadow-sm">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-green-700">🌿</span>
                        </div>
                        <h3 className="font-bold text-green-800 text-sm">
                          Horticulture
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">ଉଦ୍ୟାନିକୀ</p>
                        <p className="text-[10px] text-green-600 mt-1">
                          Farming & Agriculture
                        </p>
                      </div>

                      {/* Pharmacy */}
                      <div className="bg-gradient-to-b from-red-50 to-white p-3 rounded-lg border border-red-200 shadow-sm">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-red-700">💊</span>
                        </div>
                        <h3 className="font-bold text-red-800 text-sm">
                          Pharmacy
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">ଫାର୍ମାସି</p>
                        <p className="text-[10px] text-red-600 mt-1">
                          Medical Business
                        </p>
                      </div>

                      {/* Trading */}
                      <div className="bg-gradient-to-b from-purple-50 to-white p-3 rounded-lg border border-purple-200 shadow-sm">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                          <span className="text-purple-700">📦</span>
                        </div>
                        <h3 className="font-bold text-purple-800 text-sm">
                          Trading
                        </h3>
                        <p className="text-xs text-gray-600 mt-1">ବାଣିଜ୍ୟ</p>
                        <p className="text-[10px] text-purple-600 mt-1">
                          Commerce & Supply
                        </p>
                      </div>
                    </div>

                    {/* Common Services */}
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        ସାଧାରଣ ସେବାସମୂହ:
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                          ସରକାରୀ ସବସିଡି
                        </span>
                        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                          କାଗଜପତ୍ର ସହାୟତା
                        </span>
                        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                          ବ୍ୟବସାୟ ପରାମର୍ଶ
                        </span>
                        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                          ବଜାର ବିସ୍ତାର
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* English description */}
                  <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      A progressive Odisha-based multi-service organization
                      providing expert assistance in
                      <span className="font-medium">
                        {" "}
                        Fisheries, Horticulture, Pharmacy, and Trading{" "}
                      </span>
                      sectors with government subsidy processing, business
                      consultation, and market expansion services.
                    </p>
                  </div>
                </div>

                {/* Loading animation with Odia text */}
                <div className="pt-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-bounce delay-200"></div>
                    <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-300"></div>
                  </div>
                  <p className="mt-3 text-sm text-teal-800 font-medium">
                    ଦିଗଦର୍ଶନ ଗ୍ରୁପ୍ ପ୍ରସ୍ତୁତ ହେଉଛି...
                    <span className="text-gray-600 font-normal ml-2">
                      (Digadarshan Group Loading...)
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ଓଡିଶାର ବ୍ୟବସାୟିକ ବିକାଶର ପଥରେ
                  </p>
                </div>

                {/* Footer note */}
                <div className="pt-6 border-t border-teal-100">
                  <p className="text-sm text-gray-600">
                    ଓଡିଶାର ବହୁମୁଖୀ ବ୍ୟବସାୟିକ ସଂସ୍ଥା
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Odisha&apos;s Multi-Service Business Organization •
                    Empowering Entrepreneurs & Farmers
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-2">
                    <span className="text-[10px] text-gray-400">
                      🐟 Fisheries
                    </span>
                    <span className="text-[10px] text-gray-400">
                      🌿 Horticulture
                    </span>
                    <span className="text-[10px] text-gray-400">
                      💊 Pharmacy
                    </span>
                    <span className="text-[10px] text-gray-400">
                      📦 Trading
                    </span>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <LanguageProvider>{children}</LanguageProvider>
        </Suspense>
      </body>
    </html>
  );
}
