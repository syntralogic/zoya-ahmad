import { Heart } from "lucide-react";
import { SocialIcons } from "@/components/SocialIcons";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <a
          href="#home"
          className="grid h-12 w-12 place-items-center rounded-xl border border-primary/40 font-display text-lg font-bold text-primary"
        >
          ZA
        </a>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <SocialIcons />

        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Built with
          <Heart size={14} className="text-gold" fill="currentColor" />
          and clean code.
        </p>
      </div>
    </footer>
  );
}
