"use client";

import { useEffect } from "react";

export default function DepthEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-depth]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      layers.forEach((layer) => {
        const rect = layer.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;

        const strength = Number(layer.dataset.depth || 0.035);
        const elementCenter = rect.top + rect.height / 2;
        const shift = Math.max(-24, Math.min(24, (viewportCenter - elementCenter) * strength));
        layer.style.setProperty("--depth-y", `${shift.toFixed(2)}px`);
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
