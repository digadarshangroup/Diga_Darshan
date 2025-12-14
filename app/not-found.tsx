"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Main entrance
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Floating blocks (loop)
    blocksRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: -20,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center px-6">
      {/* Floating abstract blocks */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blocksRef.current[i] = el;
            }}
            className="absolute rounded-xl bg-muted/40 backdrop-blur-md"
            style={{
              width: `${80 + i * 20}px`,
              height: `${20 + i * 6}px`,
              top: `${15 + i * 12}%`,
              left: `${10 + i * 12}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-xl text-center space-y-8"
      >
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl font-extrabold tracking-tight"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl font-medium"
        >
          Oops, i think we are lost.
        </motion.p>

        {/* Explanation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground"
        >
          This page may not exist,
          <br />
          or it is currently being built and refined.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-medium transition hover:bg-muted"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
