import { howRacsWorks } from "@/content/site";

const groups = [
  {
    label: "Sense",
    items: ["Observable telemetry", "Risk prediction", "RiskSignal"],
  },
  {
    label: "Coordinate",
    items: ["NetworkBrain"],
  },
  {
    label: "Guard",
    items: ["SafetyGate"],
  },
  {
    label: "Act",
    items: ["Coordination action", "Autonomous system"],
  },
];

const emphasized = new Set(["RiskSignal", "NetworkBrain", "SafetyGate"]);

export function RacsArchitectureDiagram() {
  return (
    <div className="space-y-5" aria-labelledby="racs-architecture-title">
      <h3
        id="racs-architecture-title"
        className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft"
      >
        RACS system architecture
      </h3>
      <div
        className="grid gap-4 lg:grid-cols-[1.35fr_0.7fr_0.7fr_0.95fr]"
        role="list"
        aria-label="RACS system architecture flow"
      >
        {groups.map((group, groupIndex) => (
          <div key={group.label} className="relative" role="listitem">
            <div className="h-full border border-slate-700 bg-technical-surface p-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">
                {group.label}
              </p>
              <ol className="mt-4 grid gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`border px-4 py-3 text-sm leading-6 ${
                      emphasized.has(item)
                        ? "border-accent bg-technical font-mono font-semibold text-white"
                        : "border-slate-700 bg-technical text-technical-muted"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            {groupIndex < groups.length - 1 ? (
              <span
                className="mt-3 block font-mono text-lg text-accent-soft lg:absolute lg:right-[-0.95rem] lg:top-1/2 lg:z-10 lg:mt-0 lg:-translate-y-1/2"
                aria-hidden="true"
              >
                &rarr;
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="sr-only">{howRacsWorks.architectureFlow.join(" to ")}</p>
    </div>
  );
}
