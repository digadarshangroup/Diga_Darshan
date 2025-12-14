"use client";

import { useState } from "react";
import {
  Fish,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const [fishPositions] = useState(() =>
    Array.from({ length: 8 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${i * 0.8}s`,
      scale: 0.3 + Math.random() * 0.4,
    }))
  );

  const [bubbles] = useState(() =>
    Array.from({ length: 12 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${4 + Math.random() * 3}s`,
      animationDelay: `${Math.random() * 2}s`,
    }))
  );

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {fishPositions.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-float-3d-small"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.animationDelay,
              transform: `scale(${pos.scale})`,
            }}
          >
            <Fish className="w-12 h-12 text-white animate-fish-wiggle" />
          </div>
        ))}
      </div>

      {/* Wave Animation at Top */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/30 to-teal-600/30 animate-wave-3d"></div>
        <div className="absolute top-2 left-0 w-full h-full bg-gradient-to-r from-teal-600/20 to-blue-600/20 animate-wave-3d-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="transform hover:scale-105 transition-all duration-300 hover:translate-z-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Diga Darshan Logo"
                width={1024}
                height={1024}
                className="object-center w-14 h-16"
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Fisheries
                </h3>
                <p className="text-sm text-blue-200">Business Solutions</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4 leading-relaxed">
              Empowering fisheries businesses with comprehensive government
              scheme solutions and expert guidance for sustainable growth.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-blue-800/50 rounded-full flex items-center justify-center hover:bg-blue-700/50 transform hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="transform hover:translate-z-2 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-6 text-white relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 animate-gradient-x"></div>
            </h4>
            <ul className="space-y-3">
              {[
                "Government Schemes",
                "Eligibility Check",
                "Application Process",
                "Success Stories",
                "Resources",
              ].map((link, index) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 inline-block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="transform hover:translate-z-2 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-6 text-white relative">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 animate-gradient-x"></div>
            </h4>
            <ul className="space-y-3">
              {[
                "Scheme Consultation",
                "Application Support",
                "Documentation Help",
                "Financial Planning",
                "Business Advisory",
              ].map((service, index) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 inline-block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="transform hover:translate-z-2 transition-transform duration-300">
            <h4 className="text-lg font-semibold mb-6 text-white relative">
              Contact Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 animate-gradient-x"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-800/50 rounded-full flex items-center justify-center group-hover:bg-blue-700/50 transform group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-4 h-4 text-blue-200 group-hover:text-white" />
                </div>
                <span className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  digadarshangroup@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-800/50 rounded-full flex items-center justify-center group-hover:bg-blue-700/50 transform group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-4 h-4 text-blue-200 group-hover:text-white" />
                </div>
                <span className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  +91 9040626617
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-blue-800/50 rounded-full flex items-center justify-center group-hover:bg-blue-700/50 transform group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-blue-200 group-hover:text-white" />
                </div>
                <span className="text-blue-200 group-hover:text-white transition-colors duration-300">
                  Berhampur Ganjam Odisha
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © 2024 Fisheries Business Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, index) => (
                  <a
                    key={link}
                    href="#"
                    className="text-blue-200 hover:text-white text-sm transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-bubble-trail"
            style={{
              left: b.left,
              bottom: "0px",
              animationDuration: b.animationDuration,
              animationDelay: b.animationDelay,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
