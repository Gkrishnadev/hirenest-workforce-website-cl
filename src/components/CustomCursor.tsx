import { useEffect, useRef } from "react";

/**
 * CustomCursor
 *
 * The site hides the native mouse cursor for pointer:fine devices
 * (see the `cursor: none` rule in src/index.css). This component
 * provides the replacement cursor: a small dot that tracks the
 * mouse exactly, plus a trailing ring that eases behind it and
 * grows when hovering interactive elements.
 *
 * It auto-disables on touch devices and is skipped entirely for
 * users who prefer reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => document.body.classList.add("cursor-hover");
    const handleMouseLeave = () => document.body.classList.remove("cursor-hover");

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animateRing);

    const interactiveEls = document.querySelectorAll(
      "a, button, input, textarea, select"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="hidden [@media(pointer:fine)]:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999]"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none z-[9999] transition-[width,height,border-color] duration-150 ease-out [.cursor-hover_&]:w-11 [.cursor-hover_&]:h-11 [.cursor-hover_&]:border-cyan-400/90"
      />
    </div>
  );
}
