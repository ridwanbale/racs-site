import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section className={`px-5 py-16 sm:px-8 lg:px-10 ${className}`}>
      <div
        className={`mx-auto w-full max-w-[var(--container)] ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
