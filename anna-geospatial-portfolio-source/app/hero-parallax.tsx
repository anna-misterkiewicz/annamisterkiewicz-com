"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function HeroParallax({ children }: { children: ReactNode }) {
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (content.current) {
        const progress = Math.min(window.scrollY / 820, 1);
        content.current.style.transform = `translate3d(0, ${window.scrollY * 0.28}px, 0)`;
        content.current.style.opacity = String(1 - progress * 0.42);
      }
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="hero-parallax-content" ref={content}>{children}</div>;
}
