// components/Loader.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ isVisible }: { isVisible: boolean }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 40);
    return () => clearInterval(interval);
  }, [isVisible]);

  const getBarColor = () => {
    return progress < 100
      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500"
      : "bg-emerald-500";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0d0c1d] via-[#1a1b2e] to-[#111111] overflow-hidden text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative flex flex-col items-center space-y-6">
            <motion.h2
              className="text-xl font-semibold tracking-wide font-space"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Preparing your content...
            </motion.h2>

            <div className="relative w-72 h-4 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className={`absolute h-full ${getBarColor()} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut", duration: 0.4 }}
              />
            </div>
            <span className="text-sm text-gray-300">{progress}%</span>

            {/* Spinning Ring */}
            <div className="w-12 h-12 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin" />
          </div>

          {/* Mouse Follower */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border-2 border-cyan-400 opacity-40 mix-blend-difference pointer-events-none"
            animate={{ x: mouse.x - 32, y: mouse.y - 32 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
