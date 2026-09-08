import type { ReactNode } from "react";
import { SectionEyebrow } from "./SectionEyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  body?: ReactNode;
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  heading,
  body,
  className = "",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <SectionEyebrow className={dark ? "text-accent-soft" : ""}>
          {eyebrow}
        </SectionEyebrow>
      ) : null}
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {heading}
      </h2>
      {body ? (
        <div
          className={`mt-5 text-base leading-7 sm:text-lg ${
            dark ? "text-technical-muted" : "text-muted"
          }`}
        >
          {body}
        </div>
      ) : null}
    </div>
  );
}
