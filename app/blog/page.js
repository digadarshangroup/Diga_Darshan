"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  SearchX,
  Calendar,
  User,
  ArrowRight,
  ChevronRight,
  Clock,
  Tag,
  BookOpen,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section, SectionHeading, Reveal } from "@/components/ui/section";
import {
  btn,
  btnSize,
  surface,
  container,
  sectionY,
  heading,
  categoryAccent,
} from "@/lib/ui";

/**
 * Low-saturation tint per domain, reused from the shared accent tokens so the
 * blog stays in step with the rest of the site instead of inventing colours.
 */
const CATEGORY_HUE = {
  fisheries: "blue",
  trading: "amber",
  agriculture: "green",
  msme: "violet",
  government: "teal",
};

const chipFor = (id) => (categoryAccent[CATEGORY_HUE[id]] ?? categoryAccent.green).chip;

/** Shared touch-target floor for every tappable control on this page. */
const TAP = "min-h-[44px]";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogCategories = [
    { id: "all", name: "All Articles" },
    { id: "fisheries", name: "Fisheries" },
    { id: "trading", name: "Trading" },
    { id: "agriculture", name: "Agriculture" },
    { id: "msme", name: "MSME" },
    { id: "government", name: "Government Schemes" },
  ];

  const popularTags = [
    "PMEGP Scheme", "CGTMSE", "Aquaculture", "Stock Market", "Organic Farming",
    "Business Loan", "DPR Preparation", "PMMSY", "Fish Farming", "Trading Tips",
    "MSME Registration", "Subsidy", "Market Analysis", "Business Growth"
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "How to Get 40% Subsidy for Fish Farming in Odisha - Complete Guide",
      excerpt: "Learn step-by-step process to avail PMMSY scheme benefits for fisheries business with Aqua-Nivesh platform support.",
      category: "fisheries",
      author: "Fisheries Team",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      image: "🐟",
      featured: true,
      whatsappMessage: "Hello Matrubhoomi, I want to know more about fisheries subsidy. Please guide me."
    },
    {
      id: 2,
      title: "Top 5 Government Schemes for MSME Business in 2024",
      excerpt: "Comprehensive overview of PMEGP, CGTMSE, PMFME and other schemes with eligibility criteria and application process.",
      category: "government",
      author: "Finance Team",
      date: "Jan 12, 2024",
      readTime: "10 min read",
      image: "📋",
      featured: true,
      whatsappMessage: "Hello, I need help with MSME registration and government schemes for my business."
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "Beginner's Guide to Stock Market Trading in Odisha",
      excerpt: "Start your trading journey with our professional training program. Learn market basics, risk management, and strategy building.",
      category: "trading",
      author: "Trading Team",
      date: "Jan 10, 2024",
      readTime: "6 min read",
      image: "📈",
    },
    {
      id: 4,
      title: "DPR Preparation Made Easy: Get Your Business Loan Approved",
      excerpt: "Detailed project report preparation guide for bank loans and government scheme applications.",
      category: "msme",
      author: "Finance Team",
      date: "Jan 8, 2024",
      readTime: "12 min read",
      image: "📊",
    },
    {
      id: 6,
      title: "Organic Farming Certification Process in Odisha",
      excerpt: "Complete guide to organic certification, subsidies available, and market opportunities for organic produce.",
      category: "agriculture",
      author: "Agriculture Team",
      date: "Jan 3, 2024",
      readTime: "9 min read",
      image: "🌱",
    },
    {
      id: 7,
      title: "MKUY Scheme for Rural Entrepreneurs: Benefits & Application",
      excerpt: "Understanding MKUY scheme for micro enterprises in rural areas of Odisha.",
      category: "government",
      author: "Govt. Schemes Team",
      date: "Dec 28, 2023",
      readTime: "5 min read",
      image: "🏘️",
    },
    {
      id: 8,
      title: "Infrastructure Development: Borewell & Shed Construction Guide",
      excerpt: "Complete process for farm infrastructure development with buy-back guarantee options.",
      category: "msme",
      author: "Infrastructure Team",
      date: "Dec 25, 2023",
      readTime: "11 min read",
      image: "🏗️",
    }
  ];

  const recentPosts = [
    {
      id: 9,
      title: "Trading Psychology: Managing Emotions in Market Volatility",
      category: "trading",
      date: "Dec 22, 2023"
    },
    {
      id: 10,
      title: "Fisheries Disease Management: Preventive Measures",
      category: "fisheries",
      date: "Dec 20, 2023"
    },
    {
      id: 11,
      title: "GST Registration Process for New Businesses",
      category: "msme",
      date: "Dec 18, 2023"
    },
    {
      id: 12,
      title: "Market Analysis for Agricultural Products in Odisha",
      category: "agriculture",
      date: "Dec 15, 2023"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const redirectToWhatsApp = (message = "Hello Matrubhoomi Team, I want to learn more about your services.") => {
    const phoneNumber = "919040626617";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  /** Display label for a category id — derived from the list above, never invented. */
  const categoryName = (id) => blogCategories.find((c) => c.id === id)?.name ?? id;

  /** Real counts across every article on the page. */
  const allPosts = [...featuredPosts, ...blogPosts];
  const countFor = (id) =>
    id === "all" ? allPosts.length : allPosts.filter((p) => p.category === id).length;

  const quickQueries = [
    { emoji: "🐟", label: "Fisheries Query", message: "Hello, I want to discuss fisheries business opportunities." },
    { emoji: "📈", label: "Trading Help", message: "Hello, I'm interested in learning trading and stock market." },
    { emoji: "🏢", label: "MSME Support", message: "Hello, I need assistance with MSME registration and loan." },
    { emoji: "📋", label: "Scheme Query", message: "Hello, I want to know about government schemes for my business." },
  ];

  // overflow-x-clip (not -hidden) guards against stray overflow without
  // creating a scroll container, which would break the sticky sidebar.
  return (
    <div className="min-h-screen bg-white overflow-x-clip">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        <div className={`relative ${container} py-14 sm:py-16 lg:py-20`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              Knowledge Hub
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Business insights and success guides
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Practical articles for entrepreneurs across fisheries, trading, agriculture,
              MSME and government schemes in Odisha.
            </p>

            {/* Search */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl">
              <div className="relative flex-1 min-w-0">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  aria-label="Search articles"
                  placeholder="Search guides, schemes and topics"
                  className="w-full h-12 pl-11 pr-4 rounded-xl bg-white text-base text-slate-900 placeholder:text-slate-400 border border-slate-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                onClick={() => {
                  const message = `Hello Matrubhoomi, I'm searching for information about: ${searchQuery}`;
                  redirectToWhatsApp(message);
                }}
                className={`${btn.primary} ${btnSize.lg} ${TAP} sm:flex-shrink-0`}
              >
                Ask Expert
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {quickQueries.map((q) => (
                <button
                  key={q.label}
                  onClick={() => redirectToWhatsApp(q.message)}
                  className={`${btn.onDarkOutline} ${btnSize.sm} ${TAP}`}
                >
                  <span aria-hidden="true">{q.emoji}</span>
                  {q.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className={`${sectionY} bg-slate-50`}>
        <div className={container}>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Articles column */}
            <div className="lg:col-span-2 space-y-14 lg:space-y-16 min-w-0">
              {/* Featured */}
              <div>
                <SectionHeading
                  eyebrow="Editor's picks"
                  title="Featured articles"
                  subtitle="The guides our team is asked about most often."
                  align="left"
                  className="mb-7"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  {featuredPosts.map((post, index) => (
                    <Reveal key={post.id} delay={Math.min(index * 0.06, 0.2)} className="h-full">
                      <article className={`group h-full flex flex-col ${surface.cardInteractive} p-5 sm:p-6`}>
                        <div className="flex items-start justify-between gap-3">
                          <span
                            className={`grid place-items-center w-12 h-12 rounded-xl text-2xl leading-none ${chipFor(post.category)}`}
                            aria-hidden="true"
                          >
                            {post.image}
                          </span>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${chipFor(post.category)}`}
                          >
                            {categoryName(post.category)}
                          </span>
                        </div>

                        <h3 className="mt-4 text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* mt-auto pins the meta + action row to the same height on every card */}
                        <div className="mt-auto pt-5">
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500">
                            <span className="inline-flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-slate-400" />
                              {post.author}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {post.readTime}
                            </span>
                          </div>

                          <div className="mt-4 pt-4 border-t border-slate-100">
                            <button
                              onClick={() => redirectToWhatsApp(post.whatsappMessage)}
                              className={`${btn.secondary} ${btnSize.sm} ${TAP} w-full sm:w-auto`}
                            >
                              <MessageCircle className="w-4 h-4" />
                              Ask a question
                            </button>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Latest */}
              <div>
                <SectionHeading
                  eyebrow="Library"
                  title="Latest articles"
                  subtitle="Filter by domain or search above to narrow things down."
                  align="left"
                  className="mb-6"
                />

                {/* Category filters */}
                <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
                  {blogCategories.map((category) => {
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        aria-pressed={isActive}
                        className={`inline-flex items-center gap-2 ${TAP} px-4 rounded-xl border text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                          isActive
                            ? "bg-brand-700 text-white border-brand-700"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        {category.name}
                        <span
                          className={`rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {countFor(category.id)}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="mt-4 mb-6 text-sm text-slate-500" aria-live="polite">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </p>

                {filteredPosts.length === 0 ? (
                  <div className={`${surface.panel} px-5 py-12 sm:px-8 sm:py-16 text-center`}>
                    <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-white ring-1 ring-slate-200 mb-5">
                      <SearchX className="w-6 h-6 text-slate-400" aria-hidden="true" />
                    </div>

                    <h3 className={heading.h3}>No articles found</h3>

                    <p className="mt-2 mx-auto max-w-md text-sm text-slate-600 leading-relaxed">
                      {searchQuery
                        ? <>Nothing in the library matches <span className="font-medium text-slate-900 break-words">&ldquo;{searchQuery}&rdquo;</span>. Try a broader term, clear the filters, or ask our team directly.</>
                        : <>There are no articles in this category yet. Browse all articles, or ask our team directly.</>}
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setActiveCategory("all");
                        }}
                        className={`${btn.secondary} ${btnSize.md} ${TAP}`}
                      >
                        Clear filters
                      </button>
                      <button
                        onClick={() => redirectToWhatsApp("Hello, I'm looking for information about: " + searchQuery)}
                        className={`${btn.whatsapp} ${btnSize.md} ${TAP}`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Ask our expert
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-5">
                    {filteredPosts.map((post, index) => (
                      <Reveal key={post.id} delay={Math.min(index * 0.05, 0.2)} className="h-full">
                        <article className={`group h-full flex flex-col ${surface.cardInteractive} p-5 sm:p-6`}>
                          <div className="flex items-start justify-between gap-3">
                            <span
                              className={`grid place-items-center w-11 h-11 rounded-xl text-xl leading-none ${chipFor(post.category)}`}
                              aria-hidden="true"
                            >
                              {post.image}
                            </span>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${chipFor(post.category)}`}
                            >
                              {categoryName(post.category)}
                            </span>
                          </div>

                          <h3 className="mt-4 text-base font-semibold text-slate-900 leading-snug">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="mt-auto pt-5">
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500">
                              <span className="inline-flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5 text-slate-400" />
                                {post.author}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                {post.date}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                {post.readTime}
                              </span>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-100">
                              <button
                                onClick={() => {
                                  const message = `Hello, I'm interested in this article: "${post.title}"`;
                                  redirectToWhatsApp(message);
                                }}
                                className={`${btn.secondary} ${btnSize.sm} ${TAP} w-full sm:w-auto`}
                              >
                                <MessageCircle className="w-4 h-4" />
                                Ask a question
                              </button>
                            </div>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>

              {/* Newsletter */}
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-5 py-10 sm:px-10 sm:py-12">
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "32px 32px",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white mb-4">
                      <Mail className="w-3.5 h-3.5" />
                      Newsletter
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      Get business insights directly
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      Updates on government schemes, business opportunities and practical
                      guidance from our team in Odisha.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        aria-label="Your email address"
                        placeholder="Your email address"
                        className="flex-1 min-w-0 h-12 px-4 rounded-xl bg-white/10 border border-white/20 text-base text-white placeholder:text-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      />
                      <button className={`${btn.onDark} ${btnSize.lg} ${TAP} sm:flex-shrink-0`}>
                        Subscribe
                      </button>
                    </div>

                    <button
                      onClick={() => redirectToWhatsApp("Hello Matrubhoomi, I want to subscribe to business updates and need guidance.")}
                      className={`${btn.whatsapp} ${btnSize.md} ${TAP} mt-3 w-full sm:w-auto`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Get updates on WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar — below the articles on mobile, alongside them from lg up */}
            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start min-w-0">
              {/* Popular topics */}
              <Reveal>
                <div className={`${surface.card} p-5 sm:p-6`}>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-4">
                    <Tag className="w-4 h-4 text-slate-400" />
                    Popular topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => {
                      const isActive = searchQuery === tag;
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            setSearchQuery(tag);
                            setActiveCategory("all");
                          }}
                          aria-pressed={isActive}
                          className={`inline-flex items-center ${TAP} px-3 rounded-lg text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${
                            isActive
                              ? "bg-brand-700 text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-800"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              {/* Recent articles */}
              <Reveal delay={0.05}>
                <div className={`${surface.card} p-5 sm:p-6`}>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    Recent articles
                  </h3>
                  <ul className="-mx-2">
                    {recentPosts.map((post) => (
                      <li key={post.id}>
                        <Link
                          href={`/blog/${post.id}`}
                          className="group block rounded-lg px-2 py-3 hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-sm font-medium text-slate-800 group-hover:text-brand-700 transition-colors leading-snug">
                              {post.title}
                            </span>
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5" />
                          </div>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 font-medium ${chipFor(post.category)}`}>
                              {categoryName(post.category)}
                            </span>
                            <span>{post.date}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Expert advice */}
              <Reveal delay={0.1}>
                <div className={`${surface.card} p-5 sm:p-6`}>
                  <h3 className="text-sm font-semibold text-slate-900">Need expert advice?</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Talk to our business team on WhatsApp for guidance on your specific case.
                  </p>

                  <button
                    onClick={() => redirectToWhatsApp("Hello Matrubhoomi Team, I need expert advice for my business.")}
                    className={`${btn.whatsapp} ${btnSize.md} ${TAP} w-full mt-4`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat with an expert
                  </button>

                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {["Quick response on WhatsApp", "Free initial consultation", "Support available 24/7"].map((point) => (
                      <li key={point} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <Section tone="default" tight className="border-t border-slate-200">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            title="Ready to apply these insights to your business?"
            subtitle="Our team can help you implement these strategies and guide you through every step."
          />

          <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => redirectToWhatsApp("Hello Matrubhoomi Team, I need business consultation and want to discuss my requirements.")}
              className={`${btn.whatsapp} ${btnSize.lg} ${TAP}`}
            >
              <MessageCircle className="w-5 h-5" />
              Start WhatsApp consultation
            </button>

            <a href="tel:+919040626617" className={`${btn.secondary} ${btnSize.lg} ${TAP}`}>
              <Phone className="w-5 h-5" />
              Call +91 9040626617
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Available 24/7 on WhatsApp for urgent queries
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
