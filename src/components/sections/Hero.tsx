import { useEffect, useRef } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { PROFILE } from "@/lib/portfolio-data";
import { useTypingCycle } from "@/hooks/use-typing-cycle";
import { SocialIcons } from "@/components/SocialIcons";
import { Magnetic } from "@/components/Magnetic";

export function Hero() {
  const typed = useTypingCycle(PROFILE.titles);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Subtle mouse parallax on the hero glow layer.
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      {/* Animated gradient / aurora background */}
      <div ref={parallaxRef} className="aurora pointer-events-none absolute inset-0 -z-10 opacity-80" />
      <div
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        style={{ animation: "float-blob 9s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        style={{ animation: "float-blob 11s ease-in-out infinite reverse" }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_1fr]">
        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="reveal is-visible mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Available for freelance & collaboration
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <br/> <span className="text-gradient">{PROFILE.name}</span>
          </h1>

          <p className="mt-4 min-h-[2.2em] text-xl font-semibold text-foreground sm:text-2xl">
            <span className="text-primary caret">{typed}</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            A certified Full Stack Developer crafting scalable web apps and
            striking visuals — now diving into the world of cybersecurity.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.35}>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:[box-shadow:var(--shadow-glow)]"
              >
                View My Work
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.35}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold/60 hover:text-gold"
              >
                <Download size={16} />
                Get in Touch
              </a>
            </Magnetic>
          </div>

          <SocialIcons className="mt-9" size="lg" />
        </div>

        {/* Portrait */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-transparent to-gold/40 blur-md"
              style={{ animation: "spin-slow 14s linear infinite" }}
            />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-primary/30 [box-shadow:var(--shadow-glow)]">
              {/* TODO: replace src/assets/profile.jpg with your own picture */}
              <img
                src={profileImg}
                alt="Zoya Ahmad"
                width={800}
                height={800}
                className="h-72 w-72 object-cover sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
