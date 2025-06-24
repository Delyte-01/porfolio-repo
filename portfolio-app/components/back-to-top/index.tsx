"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import gsap from "gsap";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    gsap.to(".back-to-top", {
      autoAlpha: show ? 1 : 0,
      y: show ? 0 : 50,
      duration: 0.5,
      ease: "power4.out",
    });
  }, [show]);

  const scrollToTop = () => {
    if (lenis)
      lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="back-to-top fixed bottom-6 right-6 z-50 p-3 rounded-full backdrop-blur-md bg-gradient-to-tr from-white/10 to-white/5 border border-white/20 dark:text-white text-black shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
