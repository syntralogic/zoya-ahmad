import { Code2, Palette, ShieldCheck, BadgeCheck, ExternalLink, type LucideIcon } from "lucide-react";
import { SECTION_NOTE } from "@/components/sections/skills-note";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { SKILL_CARDS, type SkillCard, type Bar } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  fullstack: Code2,
  design: Palette,
  cyber: ShieldCheck,
};

/** Animated progress bar that fills when scrolled into view. */
function ProgressBar({ bar, accent, delay }: { bar: Bar; accent: "primary" | "gold"; delay: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{bar.name}</span>
        <span className={accent === "gold" ? "text-gold" : "text-primary"}>{bar.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-1000 ease-out",
            accent === "gold" ? "bg-gold" : "bg-primary",
          )}
          style={{
            width: visible ? `${bar.level}%` : "0%",
            transitionDelay: `${delay}ms`,
            boxShadow:
              accent === "gold"
                ? "0 0 12px color-mix(in oklab, var(--gold) 70%, transparent)"
                : "0 0 12px color-mix(in oklab, var(--primary) 70%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

function Card({ card, index }: { card: SkillCard; index: number }) {
  const Icon = ICONS[card.key];
  const accent = card.badgeTone;
  const accentText = accent === "gold" ? "text-gold" : "text-primary";
  const accentBorder = accent === "gold" ? "hover:border-gold/50" : "hover:border-primary/50";

  return (
    <Reveal delay={index * 120}>
      <article
        className={cn(
          "hover-lift group flex h-full flex-col rounded-3xl border border-border bg-card/60 p-7",
          accentBorder,
        )}
      >
        <div className="mb-5 flex items-center justify-between">
          <span
            className={cn(
              "grid h-12 w-12 place-items-center rounded-2xl border",
              accent === "gold" ? "border-gold/40 text-gold" : "border-primary/40 text-primary",
            )}
          >
            <Icon size={24} />
          </span>
          <span
            className={cn(
              "rounded-full border px-3 py-1 text-xs font-semibold",
              card.status === "In Progress"
                ? "border-gold/40 bg-gold/10 text-gold"
                : "border-primary/40 bg-primary/10 text-primary",
            )}
          >
            {card.status}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold">{card.title}</h3>

        <p className={cn("mt-2 inline-flex items-center gap-1.5 text-sm font-semibold", accentText)}>
          <BadgeCheck size={16} />
          {card.badge}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>

        {/* Progress bars */}
        <div className="mt-6 space-y-4">
          {card.bars.map((bar, i) => (
            <ProgressBar key={bar.name} bar={bar} accent={accent} delay={i * 120} />
          ))}
        </div>

        {/* Skill groups */}
        {card.groups.length > 0 && (
          <div className="mt-6 space-y-3">
            {card.groups.map((g) => (
              <div key={g.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {g.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-foreground transition-colors group-hover:border-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {card.link && (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-gold/40 px-4 py-2 text-sm font-semibold text-gold transition-all hover:[box-shadow:var(--shadow-gold)]"
          >
            {card.link.label}
            <ExternalLink size={14} />
          </a>
        )}
      </article>
    </Reveal>
  );
}

export function Skills() {
  // Filter to show only Full Stack and Cybersecurity cards (first two)
  const filteredCards = SKILL_CARDS.filter(
    (card) => card.key === "fullstack" || card.key === "cyber"
  );

  return (
    <section id="skills" className="relative scroll-mt-20 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora opacity-20" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills & Certifications"
          title="Core Expertise"
          subtitle="Full Stack Development & Cybersecurity — building secure, scalable web applications."
        />
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {filteredCards.map((card, i) => (
            <Card key={card.key} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}