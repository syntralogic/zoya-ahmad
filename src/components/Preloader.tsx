import { useEffect, useState } from "react";

/** Preloader — brief animated intro shown on first paint. */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <span className="relative grid h-20 w-20 place-items-center">
          <span
            className="absolute inset-0 rounded-2xl border-2 border-primary/30 border-t-primary"
            style={{ animation: "spin-slow 0.9s linear infinite" }}
          />
          <span className="font-display text-2xl font-bold text-gradient">AA</span>
        </span>
        <span className="text-sm tracking-[0.3em] text-muted-foreground">LOADING</span>
      </div>
    </div>
  );
}
