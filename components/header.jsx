"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { serviceCategories } from "@/lib/service-categories";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm"
      style={{ transform: "translateZ(0)" }}
    >
      <div className="mx-2 lg:mx-20 px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 w-auto h-auto relative"
          >
            <Image
              src="/logo-matrubhoomi.svg"
              alt="Matrubhoomi Farms & Developers Logo"
              width={56}
              height={56}
              className="object-center w-11 h-11 lg:w-14 lg:h-14"
              priority
            />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-blue-600 leading-tight text-sm sm:text-base">
              Matrubhoomi Farms &amp; Developers
              <span className="block text-[10px] sm:text-xs font-medium text-slate-500 tracking-wide">
                Private Limited
              </span>
            </span>
          </Link>

          {/* Desktop Navigation - Right side */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[560px]">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 grid grid-cols-2 gap-1">
                    {serviceCategories.map((category) => {
                      const Icon = category.icon;
                      const href = category.href ?? `/services/${category.slug}`;
                      return (
                        <Link
                          key={category.slug}
                          href={href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div
                            className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                          >
                            <Icon className="w-4.5 h-4.5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {category.shortTitle}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {category.tagline}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[calc(100vh-4rem)] opacity-100 py-4 overflow-y-auto"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="space-y-1 border-t border-gray-100 pt-4">
            <Link
              href="/"
              className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                onClick={() => setIsMobileServicesOpen((v) => !v)}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isMobileServicesOpen ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <div className="pl-3 space-y-1 py-1">
                  {serviceCategories.map((category) => {
                    const href = category.href ?? `/services/${category.slug}`;
                    return (
                      <Link
                        key={category.slug}
                        href={href}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.shortTitle}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
