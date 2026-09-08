type ProcessFlowProps = {
  items: string[];
  variant?: "light" | "dark";
  ariaLabel: string;
  spacious?: boolean;
};

export function ProcessFlow({
  items,
  variant = "light",
  ariaLabel,
  spacious = false,
}: ProcessFlowProps) {
  const dark = variant === "dark";

  return (
    <ol
      className={`grid gap-3 ${spacious ? "sm:grid-flow-col sm:auto-cols-fr" : "md:grid-flow-col md:auto-cols-fr"}`}
      aria-label={ariaLabel}
    >
      {items.map((item, index) => (
        <li
          key={item}
          className={`relative border text-sm font-medium leading-6 ${spacious ? "min-h-28 p-5 sm:pr-9" : "p-4 md:pr-8"} ${
            dark
              ? "border-slate-700 bg-technical-surface text-white"
              : "border-border bg-surface text-foreground"
          }`}
        >
          <span className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-2 block">{item}</span>
          {index < items.length - 1 ? (
            <span
              className={`mt-3 block font-mono text-lg ${spacious ? "sm:absolute sm:right-3 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2" : "md:absolute md:right-3 md:top-1/2 md:mt-0 md:-translate-y-1/2"} ${
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
  );
}
