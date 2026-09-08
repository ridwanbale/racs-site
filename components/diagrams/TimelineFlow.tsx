type TimelineFlowProps = {
  title?: string;
  items: string[];
  variant?: "light" | "dark";
  ariaLabel: string;
  desktopColumns?: 3 | 4;
};

export function TimelineFlow({
  title,
  items,
  variant = "light",
  ariaLabel,
  desktopColumns,
}: TimelineFlowProps) {
  const dark = variant === "dark";
  const columnClass =
    desktopColumns === 4
      ? "sm:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] lg:grid-cols-4"
      : desktopColumns === 3
        ? "sm:grid-cols-[repeat(auto-fit,minmax(9.5rem,1fr))] lg:grid-cols-3"
        : "sm:grid-cols-[repeat(auto-fit,minmax(9.5rem,1fr))]";
  const compact = desktopColumns === 4;

  return (
    <div
      className={`border p-5 ${
        dark
          ? "border-slate-700 bg-technical-surface"
          : "border-border bg-surface"
      }`}
    >
      {title ? (
        <h3
          className={`font-mono text-sm font-semibold uppercase tracking-[0.12em] ${
            dark ? "text-accent-soft" : "text-muted-strong"
          }`}
        >
          {title}
        </h3>
      ) : null}
      <ol
        className={`mt-5 grid gap-4 ${columnClass}`}
        aria-label={ariaLabel}
      >
        {items.map((item, index) => (
          <li key={item} className="relative">
            <div
              className={`min-h-24 border ${compact ? "p-3.5" : "p-4"} ${
                dark
                  ? "border-slate-700 bg-technical text-white"
                  : "border-border bg-surface-subtle text-foreground"
              }`}
            >
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`mt-3 block font-medium ${
                  compact ? "text-[13px] leading-5" : "text-sm leading-6"
                }`}
              >
                {item}
              </span>
            </div>
            {index < items.length - 1 ? (
              <span
                className={`hidden font-mono text-lg sm:absolute sm:right-[-0.85rem] sm:top-1/2 sm:z-10 sm:block sm:-translate-y-1/2 ${
                  dark ? "text-accent-soft" : "text-accent"
                }`}
                aria-hidden="true"
              >
                &rarr;
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
