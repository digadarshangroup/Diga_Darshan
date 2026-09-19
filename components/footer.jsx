"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { serviceCategories, getCategoryHref } from "@/lib/service-categories";
import { container } from "@/lib/ui";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className={`${container} py-14 lg:py-16`}>
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-matrubhoomi.svg"
                alt="Matrubhoomi"
                width={48}
                height={48}
                className="w-11 h-11"
              />
              <div className="leading-tight">
                <div className="text-base font-bold text-white">Matrubhoomi</div>
                <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                  Private Limited
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              One team for CA &amp; banking, farming &amp; construction, real estate, trading,
              software, manufacturing and retail — backed by expert guidance and government
              scheme facilitation across Odisha.
            </p>

            <div className="flex gap-2 mt-6">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid place-items-center w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-150"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={getCategoryHref(category)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {category.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-4">Get in touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919040626617"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                  +91 9040626617
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@matrubhoomifarms.com"
                  className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-150 break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                  info@matrubhoomifarms.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
                Berhampur, Ganjam, Odisha
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div
          className={`${container} py-5 flex flex-col sm:flex-row items-center justify-between gap-3`}
        >
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Matrubhoomi Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
