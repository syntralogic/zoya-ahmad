import { type ReactNode, type ElementType } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right";

const base: Record<Variant, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
};

/**
 * Reveal — scroll-triggered animation wrapper using IntersectionObserver.
 * Supports an optional stagger delay (ms).
 */
export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
  as?: ElementType;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn(base[variant], visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
