import { useState } from "react";
import { ExternalLink, Code2, Palette, ShieldCheck, Github, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Magnetic } from "@/components/Magnetic";
import { PORTFOLIO, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const CAT_ICONS: Record<string, LucideIcon> = {
  development: Code2,
  design: Palette,
  cyber: ShieldCheck,
};

function ProjectCard({
  project,
  accent,
  Icon,
  index,
}: {
  project: Project;
  accent: "primary" | "gold";
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <Reveal delay={index * 100}>
      <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/60">
        {/* Placeholder visual */}
        <div
          className={cn(
            "relative grid h-40 place-items-center overflow-hidden",
            accent === "gold"
              ? "bg-gradient-to-br from-gold/20 to-transparent"
              : "bg-gradient-to-br from-primary/20 to-transparent",
          )}
        >
          <Icon
            size={52}
            className={cn(
              "transition-transform duration-500 group-hover:scale-110",
              accent === "gold" ? "text-gold" : "text-primary",
            )}
          />
          {project.status && (
            <span className="absolute right-3 top-3 rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-xs font-semibold text-gold">
              {project.status}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h4 className="font-display text-lg font-bold">{project.title}</h4>
          <p className="text-justify mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-row gap-9">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold transition-colors",
                accent === "gold" ? "text-gold hover:text-gold/80" : "text-primary hover:text-primary/80",
              )}
            >
              <Github size={14} />
              {project.t1}
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold transition-colors",
                accent === "gold" ? "text-gold hover:text-gold/80" : "text-primary hover:text-primary/80",
              )}
            >
              {project.t2}
              <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<string>("all");
  const categories = PORTFOLIO;

  const filtered =
    active === "all" ? categories : categories.filter((c) => c.key === active);

  return (
    <section id="portfolio" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work across disciplines"
          subtitle="Development, design and cybersecurity projects — each linking out to GitHub or Linkedin."
        />

        {/* Filter tabs */}
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {[{ key: "all", label: "All" }, ...categories.map((c) => ({ key: c.key, label: c.label }))].map(
            (tab) => (
              <Magnetic key={tab.key} strength={0.25}>
                <button
                  type="button"
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                    active === tab.key
                      ? "border-primary bg-primary text-primary-foreground [box-shadow:var(--shadow-glow)]"
                      : "border-border bg-card/60 text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {tab.label}
                </button>
              </Magnetic>
            ),
          )}
        </Reveal>

        <div className="space-y-14">
          {filtered.map((cat) => {
            const Icon = CAT_ICONS[cat.key];
            return (
              <div key={cat.key}>
                <Reveal className="mb-6 flex items-center gap-3">
                  <span
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-xl border",
                      cat.accent === "gold" ? "border-gold/40 text-gold" : "border-primary/40 text-primary",
                    )}
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-xl font-bold">{cat.label}</h3>
                </Reveal>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {cat.projects.map((p, i) => (
                    <ProjectCard key={p.title} project={p} accent={cat.accent} Icon={Icon} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* GitHub section */}
        <Reveal className="mt-20 text-center">
          <p className="text-md font-medium text-muted-foreground">Wanna See My GitHub?</p>
          <div className="text-xs font-light mt-6 flex flex-wrap justify-center gap-4">
            <Magnetic strength={0.25}>
              <a
                href="https://github.com/Arooj-Ashfaq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card hover:scale-105"
              >
                <Github size={18} />
                  github/Arooj-Ashfaq
                <ExternalLink size={14} />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="https://github.com/syntralogic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card hover:scale-105"
              >
                <Github size={18} />
                  github/syntralogic
                <ExternalLink size={14} />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}