"use client";

import { motion } from "framer-motion";
import { container, containerNarrow, heading, sectionY, sectionYTight } from "@/lib/ui";

/**
 * Standard section wrapper. Keeps vertical rhythm and page gutters identical
 * across every page so content lines up site-wide.
 */
export function Section({
  children,
  className = "",
  tone = "default",
  width = "default",
  tight = false,
  ...props
}) {
  const tones = {
    default: "bg-white",
    muted: "bg-slate-50",
    transparent: "",
    dark: "bg-slate-900 text-white",
  };

  return (
    <section className={`${tight ? sectionYTight : sectionY} ${tones[tone]} ${className}`} {...props}>
      <div className={width === "narrow" ? containerNarrow : container}>{children}</div>
    </section>
  );
}

/**
 * Eyebrow + title + subtitle. Used at the top of most sections so headings
 * share one visual hierarchy instead of each page inventing its own.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  className = "",
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`${alignment} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase mb-4 ${
            onDark
              ? "bg-white/15 text-white ring-1 ring-white/25"
              : "bg-brand-50 text-brand-800 ring-1 ring-brand-100"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${onDark ? "bg-white" : "bg-brand-600"}`} />
          {eyebrow}
        </div>
      )}

      <h2 className={onDark ? heading.h2.replace("text-slate-900", "text-white") : heading.h2}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 ${onDark ? "text-base sm:text-lg text-slate-300 leading-relaxed" : heading.lead}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/**
 * Fade-and-rise wrapper for content that should animate into view once.
 */
export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
