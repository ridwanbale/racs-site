const telemetryNodes = [
  { label: "AMR-01", x: 36, y: 50 },
  { label: "AMR-02", x: 84, y: 30 },
  { label: "AMR-03", x: 92, y: 88 },
];

const controlNodes = [
  { label: "Telemetry", x: 164, y: 54 },
  { label: "Risk", x: 250, y: 54 },
  { label: "Coordination", x: 350, y: 54 },
];

export function HeroSystemVisual() {
  return (
    <aside
      className="border border-border bg-surface-subtle p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      aria-labelledby="hero-system-visual-title"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2
          id="hero-system-visual-title"
          className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted-strong"
        >
          Coordination schematic
        </h2>
        <span className="font-mono text-xs text-accent-strong">RACS</span>
      </div>
      <svg
        viewBox="0 0 420 180"
        role="img"
        aria-label="System schematic showing autonomous-system nodes feeding telemetry, risk, and coordination stages."
        className="h-auto w-full"
      >
        <rect
          x="1"
          y="1"
          width="418"
          height="178"
          fill="none"
          stroke="var(--border)"
        />
        <path
          d="M20 140H400M20 100H400M20 60H400M20 20H400M60 12V168M140 12V168M220 12V168M300 12V168M380 12V168"
          stroke="var(--border)"
          strokeWidth="0.75"
          opacity="0.55"
        />

        {telemetryNodes.map((node) => (
          <g key={node.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="var(--surface)"
              stroke="var(--muted)"
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 29}
              textAnchor="middle"
              className="fill-muted font-mono text-[10px]"
            >
              {node.label}
            </text>
          </g>
        ))}

        <path
          d="M48 50C82 50 114 54 146 54M96 30C116 38 130 46 146 54M104 88C120 78 132 66 146 54"
          fill="none"
          stroke="var(--muted)"
          strokeWidth="1.25"
        />

        {controlNodes.map((node, index) => (
          <g key={node.label}>
            <rect
              x={node.x - 40}
              y={node.y - 18}
              width="80"
              height="36"
              fill={index === 1 ? "var(--accent-soft)" : "var(--surface)"}
              stroke={index === 1 ? "var(--accent)" : "var(--border-strong)"}
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              className="fill-foreground font-mono text-[10px] font-semibold"
            >
              {node.label}
            </text>
          </g>
        ))}

        <path
          d="M204 54H210M290 54H310"
          stroke="var(--accent)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <path
          d="M350 74V116H96V106"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.25"
          strokeDasharray="4 4"
          markerEnd="url(#arrow)"
        />
        <rect
          x="154"
          y="112"
          width="132"
          height="34"
          fill="var(--surface)"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
        />
        <text
          x="220"
          y="133"
          textAnchor="middle"
          className="fill-muted-strong font-mono text-[10px] font-semibold"
        >
          bounded action
        </text>
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M0 0L10 5L0 10Z" fill="var(--accent)" />
          </marker>
        </defs>
      </svg>
    </aside>
  );
}
