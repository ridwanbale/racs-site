type StatusBadgeProps = {
  status: string;
  tone?: "partial" | "negative" | "supported" | "neutral";
};

const toneClasses = {
  partial: "border-amber-300 bg-amber-50 text-amber-900",
  negative: "border-slate-400 bg-slate-100 text-slate-950",
  supported: "border-teal-300 bg-teal-50 text-teal-950",
  neutral: "border-border bg-surface-muted text-muted-strong",
};

export function StatusBadge({
  status,
  tone = "neutral",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.1em] ${toneClasses[tone]}`}
    >
      {status}
    </span>
  );
}
