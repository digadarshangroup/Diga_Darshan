"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "@/contexts/language-context";
import { Menu, X, Fish, User, LogOut, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/check");
      const data = await response.json();
      setIsAuthenticated(data.isAuthenticated);
    } catch (error) {
      console.error("Failed to check auth status:", error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout", { method: "POST" });
      setIsAuthenticated(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-2 lg:mx-20 px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 w-auto h-auto relative"
          >
            <Image
              src="/logo.png"
              alt="Diga Darshan Logo"
              width={1024}
              height={1024}
              className="object-center w-14 h-14"
            />
            <span className="uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Diga Darshan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              {t("home")}
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
              >
                Solutions
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isSolutionsOpen && (
                <>
                  <div
                    className="fixed inset-0"
                    onClick={() => setIsSolutionsOpen(false)}
                  />
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                    <Link
                      href="/aquaculture-management"
                      className="flex items-center rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <Fish className="mr-2 h-4 w-4" />
                      Aquaculture Management
                    </Link>
                    <Link
                      href="/supply-chain"
                      className="flex items-center rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="mr-2 h-4 w-4 rounded-full border border-gray-300" />
                      Supply Chain Solutions
                    </Link>
                    <Link
                      href="/analytics"
                      className="flex items-center rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      <div className="mr-2 h-4 w-4 rounded-sm bg-gradient-to-r from-blue-400 to-teal-400" />
                      Analytics & Insights
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/products"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              Products
            </Link>
            <Link
              href="/industries"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              Industries
            </Link>
            <Link
              href="/resources"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              Resources
            </Link>
            <Link
              href="/company"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              Company
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-lg hover:bg-gray-50"
            >
              {t("contact")}
            </Link>
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
              ? "max-h-[calc(100vh-4rem)] opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="space-y-1 border-t border-gray-100 pt-4">
            <Link
              href="/"
              className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("home")}
            </Link>

            <div className="space-y-1">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isSolutionsOpen && (
                <div className="ml-4 space-y-1 border-l border-gray-100 pl-2">
                  <Link
                    href="/aquaculture-management"
                    className="flex items-center rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Fish className="mr-2 h-4 w-4" />
                    Aquaculture Management
                  </Link>
                  <Link
                    href="/supply-chain"
                    className="flex items-center rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="mr-2 h-4 w-4 rounded-full border border-gray-300" />
                    Supply Chain Solutions
                  </Link>
                  <Link
                    href="/analytics"
                    className="flex items-center rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="mr-2 h-4 w-4 rounded-sm bg-gradient-to-r from-blue-400 to-teal-400" />
                    Analytics & Insights
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/industries"
              className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/resources"
              className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/company"
              className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Company
            </Link>
            <Link
              href="/contact"
              className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
