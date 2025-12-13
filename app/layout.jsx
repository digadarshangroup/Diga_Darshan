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
    <html lang="en">
      <body className="font-sans">
        <LanguageProvider>
          <Suspense>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
