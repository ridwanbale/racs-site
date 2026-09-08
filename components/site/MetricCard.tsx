type MetricCardProps = {
  value: string;
  label: string;
  dark?: boolean;
};

export function MetricCard({ value, label, dark = false }: MetricCardProps) {
  return (
    <div
      className={`border p-5 ${
        dark
          ? "border-slate-700 bg-technical-surface text-white"
          : "border-border bg-surface text-foreground"
      }`}
    >
      <p className="font-mono text-4xl font-semibold leading-none">{value}</p>
      <p
        className={`mt-3 text-sm leading-6 ${
          dark ? "text-technical-muted" : "text-muted"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
