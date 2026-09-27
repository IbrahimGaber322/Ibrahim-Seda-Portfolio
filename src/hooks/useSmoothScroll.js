import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Shared so other components (e.g. the lightbox) can pause scrolling.
export let lenis = null;

export default function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      anchors: { offset: -72 },
    });

    return () => {
      lenis.destroy();
      lenis = null;
    };
  }, []);
}
