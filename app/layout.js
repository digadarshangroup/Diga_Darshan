import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({ subsets: ["latin"] });

// ================================
// OPTIMIZED SEO METADATA
// ================================
export const metadata = {
  metadataBase: new URL("https://digadarshan.com"),
  title: "Digadarshan Group - Business Solutions & Government Schemes in Odisha",
  description: "Diga Darshan Group provides complete business solutions in Fisheries (Aqua-Nivesh), Trading Education, Agriculture, MSME Support & Infrastructure Development across Odisha.",
  keywords: [
    "Digadarshan Group",
    "Diga Darshan",
    "Business Solutions Odisha",
    "Government Schemes Odisha",
    "PMEGP CGTMSE MKUY PMMSY",
    "Fisheries Business Odisha",
    "Trading Education",
    "MSME Loan Odisha",
    "Project Report Preparation",
    "Bhubaneswar Business Consultant",
    "Berhampur Business Services"
  ],
  
  // OPEN GRAPH - CRITICAL FOR SOCIAL SHARING
  openGraph: {
    title: "Digadarshan Group - Complete Business Solutions in Odisha",
    description: "Fisheries | Trading | Agriculture | MSME | Infrastructure | Government Schemes",
    url: "https://digadarshan.com",
    siteName: "Digadarshan Group",
    images: [
      {
        url: "/og-image.png", // Make sure this file exists in /public
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
    description: "Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure",
    images: ["https://digadarshan.com/logoFull.png"],
    creator: "@digadarshan",
  },

  // ROBOTS
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // CANONICAL
  alternates: {
    canonical: "https://digadarshan.com",
  },

  // VERIFICATION (Add when you have verification codes)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   yahoo: "your-yahoo-verification-code",
  //   other: {
  //     me: ["your-email@digadarshan.com"],
  //   },
  // },
};

// SIMPLIFIED STRUCTURED DATA
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
    "https://www.linkedin.com/company/digadarshan",
    "https://twitter.com/digadarshan"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#1e40af" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Digadarshan Group" />
        <meta name="copyright" content="Digadarshan Group" />
        <meta name="language" content="English" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="ALL" />
        
        {/* For WhatsApp sharing */}
        <meta property="og:url" content="https://digadarshan.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digadarshan Group - Business Solutions in Odisha" />
        <meta property="og:description" content="Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development" />
        <meta property="og:image" content="https://digadarshan.com/logoFull.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="Digadarshan Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@digadarshan" />
        <meta name="twitter:creator" content="@digadarshan" />
        <meta name="twitter:title" content="Digadarshan Group - Business Solutions in Odisha" />
        <meta name="twitter:description" content="Complete business support across Fisheries, Trading, Agriculture, MSME & Infrastructure Development" />
        <meta name="twitter:image" content="https://digadarshan.com/logoFull.png" />
        
        {/* Apple specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Microsoft specific */}
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Additional verification if needed */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}
        {/* <meta name="facebook-domain-verification" content="your-verification-code" /> */}
      </head>
      <body className={inter.className}>
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}