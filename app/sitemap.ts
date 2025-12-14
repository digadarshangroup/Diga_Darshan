import { MetadataRoute } from "next";

// Base URL - Use your canonical URL
const baseUrl = "https://digadarshan.com";

// Common metadata for pages
const defaultChangeFreq: MetadataRoute.Sitemap[0]["changeFrequency"] = "weekly";
const defaultPriority = 0.7;

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: defaultChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: defaultChangeFreq,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: defaultChangeFreq,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  // Business division routes
  const businessDivisions = [
    {
      slug: "fisheries",
      name: "Fisheries Division",
      priority: 0.9,
    },
    {
      slug: "aqua-nivesh",
      name: "Aqua-Nivesh Fisheries",
      priority: 0.9,
      note: "Main fisheries portal",
    },
    {
      slug: "pharmacy",
      name: "Pharmacy Division",
      priority: 0.9,
    },
    {
      slug: "trading",
      name: "Trading Division",
      priority: 0.9,
    },
    {
      slug: "horticulture",
      name: "Horticulture Division",
      priority: 0.9,
    },
  ].map((division) => ({
    url: `${baseUrl}/services/${division.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: division.priority,
  }));

  // Government scheme pages
  const schemePages = [
    {
      slug: "pmmsy-scheme",
      title: "PMMSY Scheme - Fisheries Subsidy",
      category: "fisheries",
      priority: 0.8,
    },
    {
      slug: "kisan-credit-card",
      title: "Kisan Credit Card",
      category: "horticulture",
      priority: 0.8,
    },
    {
      slug: "pmfby-crop-insurance",
      title: "PMFBY Crop Insurance",
      category: "horticulture",
      priority: 0.8,
    },
    {
      slug: "mudra-loan",
      title: "MUDRA Loan Scheme",
      category: "trading",
      priority: 0.8,
    },
    {
      slug: "startup-odisha",
      title: "Startup Odisha Scheme",
      category: "pharmacy",
      priority: 0.8,
    },
    {
      slug: "odisha-fisheries-subsidy",
      title: "Odisha Fisheries Development Subsidy",
      category: "fisheries",
      priority: 0.85,
    },
    {
      slug: "horticulture-mission",
      title: "National Horticulture Mission",
      category: "horticulture",
      priority: 0.85,
    },
    {
      slug: "pharmacy-license-subsidy",
      title: "Pharmacy License and Setup Subsidy",
      category: "pharmacy",
      priority: 0.85,
    },
  ].map((scheme) => ({
    url: `${baseUrl}/schemes/${scheme.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: scheme.priority,
  }));

  // District coverage pages (for local SEO)
  const districtPages = [
    "bhubaneswar",
    "cuttack",
    "puri",
    "baleswar",
    "bhadrak",
    "jajpur",
    "kendrapara",
    "khordha",
    "mayurbhanj",
    "ganjam",
    "gajapati",
    "kandhamal",
    "boudh",
    "nabarangpur",
    "koraput",
    "malkangiri",
    "rayagada",
    "nuapada",
    "kalahandi",
    "sonepur",
    "bargarh",
    "jharsuguda",
    "sambalpur",
    "deogarh",
    "sundargarh",
    "angul",
    "dhenkanal",
    "jagatsinghpur",
    "kendujhar",
    "nayagarh",
    "balangir",
  ].map((district) => ({
    url: `${baseUrl}/locations/${district}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog/News/Articles pages (if you have them)
  const blogPages = [
    {
      slug: "fisheries-business-guide-2024",
      title: "Complete Guide to Fisheries Business in Odisha 2024",
      priority: 0.7,
    },
    {
      slug: "how-to-get-fishery-subsidy",
      title: "How to Get Fishery Subsidy in Odisha - Step by Step Guide",
      priority: 0.8,
    },
    {
      slug: "pharmacy-store-profit-margin",
      title: "Pharmacy Store Profit Margin and Business Plan",
      priority: 0.7,
    },
    {
      slug: "organic-farming-odisha",
      title: "Organic Farming Opportunities in Odisha",
      priority: 0.7,
    },
    {
      slug: "government-schemes-farmers",
      title: "Top 10 Government Schemes for Farmers in Odisha",
      priority: 0.85,
    },
    {
      slug: "msme-registration-benefits",
      title: "MSME Registration Benefits for Small Businesses",
      priority: 0.7,
    },
    {
      slug: "success-stories-fisheries",
      title: "Success Stories - Fisheries Entrepreneurs in Odisha",
      priority: 0.8,
    },
    {
      slug: "trading-business-tips",
      title: "Trading Business Tips for Beginners in Odisha",
      priority: 0.7,
    },
  ].map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: article.priority,
  }));

  // Language-specific pages (for your Odia/English versions)
  const languagePages = [
    {
      url: `${baseUrl}/or`,
      lang: "or",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en`,
      lang: "en",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/or/about`,
      lang: "or",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/about`,
      lang: "en",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/or/services`,
      lang: "or",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/services`,
      lang: "en",
      priority: 0.8,
    },
    // Add more language-specific pages as needed
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: defaultChangeFreq,
    priority: page.priority,
  }));

  // Resource pages
  const resourcePages = [
    {
      slug: "download-forms",
      title: "Download Application Forms",
      priority: 0.6,
    },
    {
      slug: "faq",
      title: "Frequently Asked Questions",
      priority: 0.7,
    },
    {
      slug: "check-eligibility",
      title: "Check Scheme Eligibility",
      priority: 0.8,
    },
    {
      slug: "document-checklist",
      title: "Document Checklist for Applications",
      priority: 0.7,
    },
    {
      slug: "track-application",
      title: "Track Your Application Status",
      priority: 0.8,
    },
    {
      slug: "calculator",
      title: "Subsidy Calculator",
      priority: 0.7,
    },
  ].map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: resource.priority,
  }));

  // Specialized service pages
  const specializedServices = [
    {
      slug: "business-registration",
      title: "Business Registration Services",
      priority: 0.8,
    },
    {
      slug: "project-report",
      title: "Project Report Preparation",
      priority: 0.8,
    },
    {
      slug: "bank-loan-assistance",
      title: "Bank Loan Assistance",
      priority: 0.85,
    },
    {
      slug: "market-linkage",
      title: "Market Linkage Services",
      priority: 0.7,
    },
    {
      slug: "training-workshops",
      title: "Training & Workshops",
      priority: 0.6,
    },
    {
      slug: "consultation",
      title: "One-on-One Consultation",
      priority: 0.9,
    },
  ].map((service) => ({
    url: `${baseUrl}/services/specialized/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: defaultChangeFreq,
    priority: service.priority,
  }));

  // Combine all sitemap entries
  return [
    // Highest priority pages first
    ...staticRoutes,
    ...businessDivisions,
    ...schemePages,
    ...specializedServices,
    ...resourcePages,
    ...blogPages,
    ...districtPages,
    ...languagePages,
  ];
}
