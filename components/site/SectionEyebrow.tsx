import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function SectionEyebrow({
  children,
  className = "",
}: SectionEyebrowProps) {
  return (
    <p
      className={`font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong ${className}`}
    >
      {children}
    </p>
  );
}
