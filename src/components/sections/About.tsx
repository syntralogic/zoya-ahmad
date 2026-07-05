import { Award, Code2, Palette, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const highlights = [
  { icon: Code2, label: "Full Stack Dev", tone: "text-primary" },
  { icon: Palette, label: "Graphic Designer", tone: "text-gold" },
  { icon: ShieldCheck, label: "Cybersecurity Learner", tone: "text-primary" },
];

const stats = [
  { value: "2+", label: "Certifications" },
  { value: "10+", label: "Projects" },
  { value: "3", label: "Disciplines" },
  { value: "100%", label: "Dedication" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="About Me" title="Where code meets creativity" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <Reveal variant="left">
            <p className="text-lg leading-relaxed text-justify text-muted-foreground">
              I'm <span className="font-semibold text-foreground">Zoya Ahmad</span> — a
              <span className="text-primary"> Certified Full Stack Web Developer</span> and a
              <span className="text-gold"> Cybersecurity enthusiast</span>. I blend engineering
              precision with design sensibility to build digital experiences that are both
              functional and beautiful.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-justify text-muted-foreground">
              My dual expertise lets me carry an idea from concept and visual identity all the way
              to a fully working, scalable and secure web application. Right now, I'm actively expanding into
              <span className="text-primary"> cybersecurity</span>, learning to secure
              applications, networks and systems through hands-on projects.
            </p>

            <ul className="mt-8 flex flex-wrap gap-3">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium"
                >
                  <h.icon size={16} className={h.tone} />
                  {h.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-gold/30 bg-card/60 px-5 py-3">
              <Award className="text-gold" size={22} />
              <span className="text-sm text-muted-foreground">
                Certified in <span className="font-semibold text-foreground">Full Stack Development</span>
              </span>
            </div>
          </Reveal>

          <Reveal variant="right" className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="hover-lift rounded-2xl border border-border bg-card/60 p-6 text-center"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="font-display text-3xl font-extrabold text-gradient">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
