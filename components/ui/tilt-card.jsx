"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

/**
 * Pointer-reactive 3D tilt.
 *
 * Deliberately transform-only (GPU composited) rather than a WebGL scene —
 * it reads as depth without shipping a 3D engine to a marketing site.
 *
 * Self-disables for touch/coarse pointers and for `prefers-reduced-motion`,
 * so it degrades to a plain card instead of misbehaving on phones.
 */
export function TiltCard({ children, className = "", maxTilt = 7, lift = 14, glare = true }) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(finePointer && !reduced);
  }, []);

  // Pointer position relative to card centre, -0.5 .. 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 260, damping: 26, mass: 0.6 };
  const sx = useSpring(px, spring);
  const sy = useSpring(py, spring);

  const rotateX = useTransform(sy, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const translateZ = useSpring(0, spring);
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 30 });

  // Glare tracks the pointer — that's what sells the surface as tilted
  const glareX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(400px circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 45%)`;

  const handleMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleEnter = () => {
    translateZ.set(lift);
    glareOpacity.set(1);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
    translateZ.set(0);
    glareOpacity.set(0);
  };

  // Hooks all run above this point, so the early return stays rule-safe.
  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      style={{ perspective: 900 }}
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY, translateZ, transformStyle: "preserve-3d" }}
        className="relative h-full will-change-transform"
      >
        {children}

        {glare && (
          <motion.span
            aria-hidden="true"
            style={{ background: glareBackground, opacity: glareOpacity }}
            className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-soft-light"
          />
        )}
      </motion.div>
    </div>
  );
}
