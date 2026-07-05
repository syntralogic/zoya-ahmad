import { useRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * Magnetic — wraps children and gently pulls them toward the cursor on hover.
 */
export function Magnetic({
  children,
  className,
  as: Tag = "div",
  strength = 0.4,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  strength?: number;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn("inline-flex transition-transform duration-300 ease-out will-change-transform", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
