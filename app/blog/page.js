"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, User, ArrowRight, ChevronRight, TrendingUp, BookOpen, Share2 } from "lucide-react";
import { Header } from "@/components/header";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const blogCategories = [
    { id: "all", name: "All Articles", count: 24 },
    { id: "fisheries", name: "Fisheries", count: 8 },
    { id: "trading", name: "Trading", count: 5 },
    { id: "agriculture", name: "Agriculture", count: 6 },
    { id: "msme", name: "MSME", count: 4 },
    { id: "government", name: "Government Schemes", count: 7 },
    { id: "success", name: "Success Stories", count: 3 }
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
      author: "Rajesh Mohanty",
      date: "Jan 15, 2024",
      readTime: "8 min read",
      image: "🐟",
      featured: true,
      whatsappMessage: "Hello Diga Darshan, I want to know more about fisheries subsidy. Please guide me."
    },
    {
      id: 2,
      title: "Top 5 Government Schemes for MSME Business in 2024",
      excerpt: "Comprehensive overview of PMEGP, CGTMSE, PMFME and other schemes with eligibility criteria and application process.",
      category: "government",
      author: "Priyanka Das",
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
      views: "1.2k",
      comments: 24
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
      views: "890",
      comments: 18
    },
    {
      id: 5,
      title: "From 2 Acres to 10 Acres: Success Story of Fish Farmer in Berhampur",
      excerpt: "How Bhabani Sankar transformed his small fish farm into a profitable business with Diga Darshan's support.",
      category: "success",
      author: "Success Stories",
      date: "Jan 5, 2024",
      readTime: "7 min read",
      image: "🌟",
      views: "1.5k",
      comments: 32
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
      views: "720",
      comments: 15
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
      views: "650",
      comments: 12
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
      views: "540",
      comments: 8
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

  const redirectToWhatsApp = (message = "Hello Diga Darshan Team, I want to learn more about your services.") => {
    const phoneNumber = "919040626617";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-emerald-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm tracking-wider">DIGADARSHAN KNOWLEDGE HUB</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              Business Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-emerald-200">
                Success Guides
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert articles, success stories, and practical guides for entrepreneurs across fisheries, trading, agriculture, MSME, and government schemes.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for business guides, government schemes, success stories..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  onClick={() => {
                    const message = `Hello Diga Darshan, I'm searching for information about: ${searchQuery}`;
                    redirectToWhatsApp(message);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Ask Expert
                </button>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => redirectToWhatsApp("Hello, I want to discuss fisheries business opportunities.")}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium"
                >
                  🐟 Fisheries Query
                </button>
                <button
                  onClick={() => redirectToWhatsApp("Hello, I'm interested in learning trading and stock market.")}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium"
                >
                  📈 Trading Help
                </button>
                <button
                  onClick={() => redirectToWhatsApp("Hello, I need assistance with MSME registration and loan.")}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium"
                >
                  🏢 MSME Support
                </button>
                <button
                  onClick={() => redirectToWhatsApp("Hello, I want to know about government schemes for my business.")}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium"
                >
                  📋 Scheme Query
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-6"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Categories
              </h3>
              <div className="space-y-2">
                {blogCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        activeCategory === category.id ? 'bg-blue-600' : 'bg-slate-300'
                      }`} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="text-sm bg-slate-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mb-6"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(tag);
                      setActiveCategory("all");
                    }}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm transition-all duration-300"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Articles</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <Link href={`/blog/${post.id}`} className="group">
                      <h4 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span className="px-2 py-1 bg-slate-100 rounded text-xs">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* WhatsApp CTA Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200 shadow-lg"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">Need Expert Advice?</h3>
              <p className="text-slate-700 mb-6">
                Connect with our business experts directly on WhatsApp for personalized guidance.
              </p>
              
              <button
                onClick={() => redirectToWhatsApp("Hello Diga Darshan Team, I need expert advice for my business.")}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 mb-4"
              >
                <span className="text-xl">💬</span>
                Chat with Expert
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="text-sm text-slate-600">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Instant response within 5 minutes</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>24/7 support available</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Blog Content */}
          <div className="lg:col-span-2">
            {/* Featured Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
                Featured Articles
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="group">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 h-full">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 rounded-full text-sm font-medium">
                            {post.category.toUpperCase()}
                          </span>
                          <span className="text-slate-500 text-sm">{post.readTime}</span>
                        </div>
                        
                        <div className="text-5xl mb-4">{post.image}</div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-6">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex items-center gap-3">
                            <User className="w-5 h-5 text-slate-400" />
                            <span className="text-slate-700 font-medium">{post.author}</span>
                            <Calendar className="w-5 h-5 text-slate-400 ml-2" />
                            <span className="text-slate-500 text-sm">{post.date}</span>
                          </div>
                          
                          <button
                            onClick={() => redirectToWhatsApp(post.whatsappMessage)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-700 font-medium rounded-lg hover:shadow-md transition-all duration-300 text-sm"
                          >
                            Ask Question
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* All Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-emerald-500 rounded-full" />
                  Latest Articles
                </h2>
                
                <div className="text-sm text-slate-600">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </div>
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
                  <p className="text-slate-600 mb-6">Try searching for a different topic or browse categories</p>
                  <button
                    onClick={() => redirectToWhatsApp("Hello, I'm looking for information about: " + searchQuery)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Ask Our Expert
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="group">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-500 h-full">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                              {post.category.toUpperCase()}
                            </span>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <span>👁️ {post.views}</span>
                              <span>💬 {post.comments}</span>
                            </div>
                          </div>
                          
                          <div className="text-4xl mb-4">{post.image}</div>
                          
                          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-slate-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  const message = `Hello, I'm interested in this article: "${post.title}"`;
                                  redirectToWhatsApp(message);
                                }}
                                className="px-3 py-1.5 bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-lg text-sm transition-all duration-300"
                              >
                                💬 Ask
                              </button>
                              <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm transition-all duration-300">
                                <Share2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Newsletter & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <div className="bg-gradient-to-r from-blue-900 to-emerald-900 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Business Insights Directly
                </h3>
                
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest updates on government schemes, 
                  business opportunities, and success stories from Odisha.
                </p>
                
                <div className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:shadow-lg transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      onClick={() => redirectToWhatsApp("Hello Diga Darshan, I want to subscribe to business updates and need guidance.")}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
                    >
                      <span>📱</span>
                      Get Updates on WhatsApp
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pagination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <div className="flex justify-center items-center gap-4">
                <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-300">
                  Previous
                </button>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                        page === 1
                          ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white'
                          : 'bg-white border border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <span className="text-slate-400">...</span>
                  <button className="w-10 h-10 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-300">
                    12
                  </button>
                </div>
                <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-all duration-300 flex items-center gap-2">
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Ready to Apply These Insights to Your Business?
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Our experts are ready to help you implement these strategies and guide you 
              through every step of your business journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => redirectToWhatsApp("Hello Diga Darshan Team, I need business consultation and want to discuss my requirements.")}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-xl">💬</span>
                Start WhatsApp Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="tel:+919040626617"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-xl">📞</span>
                Call: +91 9040626617
              </a>
            </div>
            
            <div className="mt-8 text-sm text-slate-500">
              Response time: Within 5 minutes | Available: 24/7 for urgent queries
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}