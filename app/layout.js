import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ 
  subsets: ["latin"]
});

// ================================
// SIMPLIFIED SEO METADATA
// ================================
export const metadata = {
  metadataBase: new URL("https://digadarshan.com"),
  
  title: "Digadarshan Group - Business Solutions & Government Schemes in Odisha",
  description: "Diga Darshan Group provides complete business solutions in Fisheries (Aqua-Nivesh), Trading Education, Agriculture, MSME Support & Infrastructure Development across Odisha. We help entrepreneurs with PMEGP, CGTMSE, MKUY, PMMSY schemes.",
  
  keywords: [
    "Digadarshan Group", "Diga Darshan", "Business Solutions Odisha", 
    "Government Schemes Odisha", "PMEGP Odisha", "CGTMSE Odisha", 
    "MKUY Odisha", "PMMSY Odisha", "Fisheries Business Odisha",
    "Aqua-Nivesh", "Trading Education", "MSME Loan Odisha", 
    "Project Report Preparation", "Business Consultant Bhubaneswar", 
    "Berhampur Business Services", "Odisha Entrepreneurship"
  ],
  
  // OPEN GRAPH
  openGraph: {
    title: "Digadarshan Group - Complete Business Solutions in Odisha",
    description: "Fisheries | Trading | Agriculture | MSME | Infrastructure | Government Schemes",
    url: "https://digadarshan.com",
    siteName: "Digadarshan Group",
    images: [
      {
        url: "https://digadarshan.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digadarshan Group - Business Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Digadarshan Group - Business Solutions in Odisha",
    description: "Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development",
    images: ["https://digadarshan.com/og-image.png"],
  },
};

// STRUCTURED DATA
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digadarshan Group",
  "alternateName": "Diga Darshan Group",
  "url": "https://digadarshan.com",
  "logo": "https://digadarshan.com/logoFull.png",
  "description": "Complete business solutions provider in Odisha offering Fisheries, Trading Education, Agriculture, MSME Support and Infrastructure Development services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Saheed Nagar",
    "addressLocality": "Bhubaneswar",
    "addressRegion": "Odisha",
    "postalCode": "751007",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9040626617",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "or"]
  },
  "sameAs": [
    "https://aquanivesh.digadarshan.com",
    "https://www.facebook.com/digadarshan",
    "https://www.linkedin.com/company/digadarshan"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Essential viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1e40af" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Basic meta tags */}
        <meta name="author" content="Digadarshan Group" />
        
        {/* For WhatsApp sharing - kept simple */}
        <meta property="og:url" content="https://digadarshan.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digadarshan Group - Business Solutions in Odisha" />
        <meta property="og:description" content="Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development" />
        <meta property="og:image" content="https://digadarshan.com/og-image.png" />
        
        {/* Basic Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digadarshan Group - Business Solutions in Odisha" />
        <meta name="twitter:description" content="Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development" />
        <meta name="twitter:image" content="https://digadarshan.com/og-image.png" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}