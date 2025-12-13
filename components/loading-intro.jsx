"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingIntro({ onComplete, durationMs = 2600 }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Stable particle configuration (computed once, lazily)
  const [particleConfigs] = useState(() => {
    if (typeof window === "undefined") return [];
    const w = window.innerWidth;
    const h = window.innerHeight;
    const count = 12;
    const pad = 40;
    return Array.from({ length: count }).map(() => ({
      x0: pad + Math.random() * (w - pad * 2),
      y0: pad + Math.random() * (h - pad * 2),
      x1: pad + Math.random() * (w - pad * 2),
      y1: pad + Math.random() * (h - pad * 2),
      delay: Math.random() * 1.2,
      duration: 3.2 + Math.random() * 1.2,
    }));
  });

  useEffect(() => {
    const start = performance.now();

    let raf = null;
    const tick = (now) => {
      const ratio = Math.min(1, (now - start) / durationMs);
      setProgress(Math.round(ratio * 100));

      if (ratio < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // small pause so user sees 100%
        setTimeout(() => {
          // trigger exit animation
          setIsExiting(true);
        }, 220);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [durationMs]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        // call user's onComplete after exit finishes
        onComplete && onComplete();
      }}
    >
      {!isExiting && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            y: "100vh",
            opacity: 0,
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
          }}
          className="fixed inset-0 from-slate-50 to-slate-100 flex items-center justify-center text-slate-900 select-none overflow-hidden z-50"
        >
          {/* Particle background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particleConfigs.map((cfg, i) => (
              <motion.div
                key={`p-${i}`}
                className="absolute w-1.5 h-1.5 bg-slate-300 rounded-full"
                initial={{ x: cfg.x0, y: cfg.y0, opacity: 0 }}
                animate={{
                  x: [cfg.x0, cfg.x1],
                  y: [cfg.y0, cfg.y1],
                  opacity: [0, 0.35, 0],
                }}
                transition={{
                  duration: cfg.duration,
                  repeat: Infinity,
                  delay: cfg.delay + i * 0.06,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6">
            {/* Logo + orbit container */}
            <div className="relative flex items-center justify-center w-28 h-28 mb-6">
              {/* main circular brand mark */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.2, 0.9, 0.3, 1],
                  delay: 0.05,
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-slate-800 to-slate-600 flex items-center justify-center shadow-lg relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="text-white font-semibold text-xl tracking-wider"
                >
                  DD
                </motion.div>

                {/* thin animated ring */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.06, 1] }}
                  transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 rounded-full border-2 border-slate-800 border-opacity-25"
                />
              </motion.div>
            </div>

            {/* Title with character reveal */}
            <div className="flex items-center justify-center mb-2 flex-wrap">
              {"Diga Darshan".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.32,
                    delay: 0.35 + i * 0.05,
                    ease: "easeOut",
                  }}
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-none"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </div>

            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-2 mt-2"
            />

            {/* Subtitle / description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1.05 }}
              className="text-center max-w-xs"
            >
              <p className="text-sm text-slate-600 mb-1 font-medium tracking-wide">
                Secure access • Real-time processing
              </p>
              <p className="text-xs text-slate-500 font-light tracking-wide">
                Unified digital experience platform
              </p>
            </motion.div>

            {/* Decorative chips */}
            <div className="flex gap-3 mt-6">
              {["Security", "Speed", "Reliability"].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.35 + i * 0.06, duration: 0.28 }}
                  className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200"
                >
                  <span className="text-xs text-slate-600 font-medium">
                    {t}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom area: compact loading bar + text */}
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
