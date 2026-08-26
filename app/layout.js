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
  metadataBase: new URL("https://matrubhoomifarms.com"),

  title: "Matrubhoomi Pvt. Ltd. - CA, Banking, Farming, Real Estate & Business Solutions in Odisha",
  description: "Matrubhoomi Pvt. Ltd. provides complete business solutions across CA/Banking/Loans, Farming & Farm Construction, Real Estate, Trading, Software Development, Entrepreneurship/Manufacturing and Product/Retail in Odisha. We help entrepreneurs with PMEGP, CGTMSE, MKUY, PMMSY, GST, ITR and more.",

  keywords: [
    "Matrubhoomi", "Business Solutions Odisha",
    "Government Schemes Odisha", "PMEGP Odisha", "CGTMSE Odisha",
    "MKUY Odisha", "PMMSY Odisha", "Fisheries Business Odisha",
    "Aqua-Nivesh", "Trading Education", "MSME Loan Odisha",
    "Project Report Preparation", "Business Consultant Bhubaneswar",
    "Berhampur Business Services", "Odisha Entrepreneurship",
    "CA Services Odisha", "Real Estate Odisha", "Farm Construction",
    "GST Registration Odisha", "ITR Filing Odisha", "Software Development Odisha"
  ],
  
  // OPEN GRAPH
  openGraph: {
    title: "Matrubhoomi - Complete Business Solutions in Odisha",
    description: "Fisheries | Trading | Agriculture | MSME | Infrastructure | Government Schemes",
    url: "https://matrubhoomifarms.com",
    siteName: "Matrubhoomi",
    images: [
      {
        url: "https://matrubhoomifarms.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matrubhoomi - Business Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  // TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Matrubhoomi - Business Solutions in Odisha",
    description: "Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development",
    images: ["https://matrubhoomifarms.com/og-image.png"],
  },
};

// STRUCTURED DATA
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Matrubhoomi Private Limited",
  "alternateName": "Matrubhoomi",
  "url": "https://matrubhoomifarms.com",
  "logo": "https://matrubhoomifarms.com/logo-matrubhoomi.svg",
  "description": "Complete business solutions provider in Odisha offering CA/Banking/Loans, Farming & Farm Construction, Real Estate, Trading, Software Development, Entrepreneurship/Manufacturing and Product/Retail services.",
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
    "https://aquanivesh.matrubhoomifarms.com",
    "https://www.facebook.com/matrubhoomi",
    "https://www.linkedin.com/company/matrubhoomi"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/logo-matrubhoomi.svg" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Essential viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#166534" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Basic meta tags */}
        <meta name="author" content="Matrubhoomi" />
        
        {/* For WhatsApp sharing - kept simple */}
        <meta property="og:url" content="https://matrubhoomifarms.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matrubhoomi - Business Solutions in Odisha" />
        <meta property="og:description" content="Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development" />
        <meta property="og:image" content="https://matrubhoomifarms.com/og-image.png" />
        
        {/* Basic Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Matrubhoomi - Business Solutions in Odisha" />
        <meta name="twitter:description" content="Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development" />
        <meta name="twitter:image" content="https://matrubhoomifarms.com/og-image.png" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}