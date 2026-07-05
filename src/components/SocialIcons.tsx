import { SOCIALS } from "@/lib/portfolio-data";
import { Magnetic } from "@/components/Magnetic";
import { cn } from "@/lib/utils";

/**
 * SocialIcons — magnetic, glowing social links with ARIA labels.
 */
export function SocialIcons({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const dims = size === "lg" ? "h-12 w-12" : "h-11 w-11";
  const icon = size === "lg" ? 22 : 19;

  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {SOCIALS.map((s) => (
        <li key={s.label}>
          <Magnetic strength={0.5}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className={cn(
                "group grid place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:text-primary hover:[box-shadow:var(--shadow-glow)]",
                dims,
              )}
            >
              <s.icon size={icon} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </Magnetic>
        </li>
      ))}
    </ul>
  );
}
