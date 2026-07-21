"use client";

import { useEffect, useRef } from "react";

export default function ParallaxMap() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (layer.current) {
        const shift = Math.min(window.scrollY * 0.16, 130);
        layer.current.style.transform = `translate3d(0, ${shift}px, 0) scale(1.04)`;
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

  return (
    <div className="map-grid" ref={layer} aria-hidden="true">
      <div className="coordinate">54.9783° N<br />1.6178° W</div>
      <div className="crosshair"><span /><i /></div>
      <div className="contour contour-one" />
      <div className="contour contour-two" />
      <div className="contour contour-three" />
    </div>
  );
}
