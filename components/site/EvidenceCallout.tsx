import type { ReactNode } from "react";

type EvidenceCalloutProps = {
  children: ReactNode;
  dark?: boolean;
};

export function EvidenceCallout({
  children,
  dark = false,
}: EvidenceCalloutProps) {
  return (
    <aside
      className={`border-l-4 p-5 text-sm font-medium leading-6 ${
        dark
          ? "border-accent-soft bg-white/5 text-white"
          : "border-accent bg-accent-soft text-accent-strong"
      }`}
    >
      {children}
    </aside>
  );
}
