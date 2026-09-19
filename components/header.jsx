"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import { serviceCategories } from "@/lib/service-categories";
import { accentFor, btn, btnSize, container } from "@/lib/ui";

const NAV_ITEMS = [
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer on route change so it never lingers over the new page
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isServicesActive =
    pathname.startsWith("/services") ||
    pathname.startsWith("/trading") ||
    pathname.startsWith("/fisheries") ||
    pathname.startsWith("/horticulture");

  const navLinkClass = (active) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
      active
        ? "text-brand-700 bg-brand-50"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`;

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75"
      style={{ transform: "translateZ(0)" }}
    >
      <div className={container}>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 rounded-lg">
            <Image
              src="/logo-matrubhoomi.svg"
              alt="Matrubhoomi"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-11 sm:h-11"
              priority
            />
            <span className="leading-tight">
              <span className="block text-base font-bold text-slate-900 tracking-tight">
                Matrubhoomi
              </span>
              <span className="block text-[10px] font-medium text-slate-500 tracking-wide uppercase">
                Private Limited
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className={navLinkClass(isActive("/"))}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`${navLinkClass(isServicesActive)} flex items-center gap-1`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px]">
                  <div className="bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-2 grid grid-cols-2 gap-0.5">
                    {serviceCategories.map((category) => {
                      const Icon = category.icon;
                      const accent = accentFor(category);
                      const href = category.href ?? `/services/${category.slug}`;
                      return (
                        <Link
                          key={category.slug}
                          href={href}
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-150"
                        >
                          <span
                            className={`flex-shrink-0 grid place-items-center w-9 h-9 rounded-lg transition-transform duration-150 group-hover:scale-105 ${accent.chip}`}
                          >
                            <Icon className="w-4 h-4" strokeWidth={2} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-slate-900">
                              {category.shortTitle}
                            </span>
                            <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">
                              {category.tagline}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass(isActive(item.href))}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:+919040626617"
            className={`hidden lg:inline-flex ${btn.primary} ${btnSize.sm} flex-shrink-0`}
          >
            <Phone className="w-3.5 h-3.5" />
            Talk to us
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden -mr-2 p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden border-t border-slate-200 bg-white overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          isMenuOpen ? "max-h-[calc(100dvh-4rem)] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <nav className={`${container} py-4 space-y-1`}>
          <Link
            href="/"
            className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
              isActive("/") ? "text-brand-700 bg-brand-50" : "text-slate-700 hover:bg-slate-50"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <div>
            <button
              className="w-full flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              aria-expanded={isMobileServicesOpen}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                isMobileServicesOpen ? "max-h-[640px]" : "max-h-0"
              }`}
            >
              <div className="pl-2 py-1 space-y-0.5">
                {serviceCategories.map((category) => {
                  const Icon = category.icon;
                  const accent = accentFor(category);
                  const href = category.href ?? `/services/${category.slug}`;
                  return (
                    <Link
                      key={category.slug}
                      href={href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className={`grid place-items-center w-8 h-8 rounded-lg ${accent.chip}`}>
                        <Icon className="w-4 h-4" strokeWidth={2} />
                      </span>
                      {category.shortTitle}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                isActive(item.href)
                  ? "text-brand-700 bg-brand-50"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:+919040626617"
            className={`${btn.primary} ${btnSize.lg} w-full mt-3`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="w-4 h-4" />
            Talk to us
          </a>
        </nav>
      </div>
    </header>
  );
}
