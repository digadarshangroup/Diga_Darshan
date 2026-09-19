"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { serviceCategories, getCategoryHref } from "@/lib/service-categories";
import { accentFor, btn, btnSize, container, sectionY } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/section";

const CARD_STEP = 54; // vertical gap between stacked cards — wide enough to hover each one
const AUTO_MS = 3200;

/**
 * The seven domains as a fanned stack in 3D space.
 *
 * Pure CSS 3D on composited transforms — no WebGL, so it adds nothing to the
 * bundle. Every card stays visible and individually hoverable; the selected one
 * lifts toward the viewer.
 */
export default function StackShowcase() {
  const sceneRef = useRef(null);
  const [interactive, setInteractive] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setInteractive(fine && !reduced);
    if (reduced) setPaused(true);
  }, []);

  // Cycle on its own so the section is alive before anyone touches it
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % serviceCategories.length);
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [paused]);

  // Pointer-driven tilt of the whole stack
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 140, damping: 22, mass: 0.7 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10]);

  const handleMove = (event) => {
    if (!interactive || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
    setPaused(false);
  };

  const activeCategory = serviceCategories[active];
  const ActiveIcon = activeCategory.icon;
  const mid = (serviceCategories.length - 1) / 2;

  return (
    <section className={`${sectionY} bg-white relative overflow-hidden`}>
      <div className={container}>
        <SectionHeading
          eyebrow="One team, seven domains"
          title="Layered support, not scattered vendors"
          subtitle="Most businesses end up with a different consultant for every problem. We stack all seven domains behind one point of contact."
          className="mb-12 lg:mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* 3D stack */}
          <div
            ref={sceneRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            onPointerEnter={() => setPaused(true)}
            className="relative mx-auto w-full max-w-sm"
            style={{ perspective: 1100, height: CARD_STEP * serviceCategories.length + 90 }}
          >
            <motion.div
              style={{
                rotateX: interactive ? rotateX : 0,
                rotateY: interactive ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 will-change-transform"
            >
              {serviceCategories.map((category, index) => {
                const Icon = category.icon;
                const accent = accentFor(category);
                const isActive = index === active;
                const distance = Math.abs(index - active);

                return (
                  <button
                    key={category.slug}
                    type="button"
                    onPointerEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-label={category.shortTitle}
                    aria-current={isActive}
                    className="absolute inset-x-0 w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-2xl transition-[transform,opacity] duration-500 ease-out will-change-transform"
                    style={{
                      top: index * CARD_STEP,
                      zIndex: isActive ? serviceCategories.length + 1 : index,
                      // Selected card lifts toward the viewer; the rest recede.
                      // Plain CSS transition rather than framer-motion's `animate`,
                      // which React Compiler memoisation stops from updating here.
                      transform: `translateZ(${isActive ? 70 : -distance * 14}px) scale(${
                        isActive ? 1.04 : 1
                      })`,
                      opacity: isActive ? 1 : 0.62,
                    }}
                  >
                    <div
                      className={`flex items-center gap-3.5 rounded-2xl border bg-white px-4 py-3.5 transition-shadow duration-300 ${
                        isActive
                          ? "border-slate-300 shadow-2xl"
                          : "border-slate-200 shadow-md hover:shadow-lg"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 grid place-items-center w-9 h-9 rounded-xl ${accent.chip}`}
                      >
                        <Icon className="w-4 h-4" strokeWidth={2} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold text-slate-900 truncate">
                          {category.shortTitle}
                        </span>
                        <span className="block text-xs text-slate-500">
                          {category.subcategories.length} services
                        </span>
                      </span>
                      <ArrowRight
                        className={`flex-shrink-0 w-4 h-4 transition-opacity duration-200 ${
                          isActive ? `opacity-100 ${accent.text}` : "opacity-0"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Detail for the selected domain */}
          <div>
            <motion.div
              key={activeCategory.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <span
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                  accentFor(activeCategory).chip
                }`}
              >
                <ActiveIcon className="w-6 h-6" strokeWidth={2} />
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {activeCategory.title}
              </h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                {activeCategory.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {activeCategory.subcategories.slice(0, 4).map((item) => (
                  <li
                    key={item.name}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {item.name}
                  </li>
                ))}
                {activeCategory.subcategories.length > 4 && (
                  <li className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                    +{activeCategory.subcategories.length - 4} more
                  </li>
                )}
              </ul>

              <Link
                href={getCategoryHref(activeCategory)}
                className={`${btn.primary} ${btnSize.md} mt-7`}
              >
                Explore {activeCategory.shortTitle}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <p className="mt-8 flex items-center gap-2 text-xs text-slate-400">
              <Layers className="w-3.5 h-3.5" />
              Hover or tap a card to switch domain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
