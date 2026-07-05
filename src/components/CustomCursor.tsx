import { useEffect, useRef } from "react";

/**
 * CustomCursor — glowing dot + trailing ring that follows the pointer.
 * Disabled on touch / coarse-pointer devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, textarea, [role='button']");
      ring.style.scale = interactive ? "1.8" : "1";
      ring.style.opacity = interactive ? "0.9" : "0.5";
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed -left-1 -top-1 z-[90] hidden h-2 w-2 rounded-full bg-primary md:block"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed -left-4 -top-4 z-[90] hidden h-8 w-8 rounded-full border border-primary/60 opacity-50 transition-[scale,opacity] duration-200 md:block"
      />
    </>
  );
}
