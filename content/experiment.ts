import { currentLimitations } from "./limitations";
import { site } from "./site";

export const v1Experiment = {
  eyebrow: "V1 technical evidence",
  title: "V1 seeded robustness study",
  intro:
    "A detailed evidence page for the released RACS V1 study, including experimental design, pairing methodology, results, limitations, and reproduction instructions.",
  homepageEyebrow: "V1 experiment",
  homepageHeading: "A controlled test of predictive coordination",
  scenarioPoints: [
    "Multiple AMRs transport work.",
    "Completed transport feeds a downstream workstation.",
    "One AMR progressively loses service capacity.",
    "Workload timing varies by seeded arrival sequence.",
  ],
  operationalFlow: [
    "AMRs",
    "Transport tasks",
    "Workstation buffer",
    "Downstream processing",
  ],
  conditions: [
    {
      name: "Healthy",
      label: "HEALTHY",
      role: "Reference counterfactual",
      description:
        "No degradation is applied, providing a paired reference for the same workload realization.",
      researchDescription: "No degradation. Paired reference counterfactual.",
    },
    {
      name: "Reactive baseline",
      label: "REACTIVE BASELINE",
      role: "Hard-failure recovery",
      description:
        "Robot remains available until hard failure; stranded work is then recovered and reassigned.",
      researchDescription:
        "Degrading robot remains available until hard failure. At hard failure, stranded work is requeued and reassigned.",
    },
    {
      name: "RACS",
      label: "RACS",
      role: "Predictive coordination",
      description:
        "Observable task behavior can trigger a predictive drain before hard failure. Existing work may complete while new assignments are redirected.",
      researchDescription:
        "Observable task behavior can trigger predictive drain before hard failure. The robot receives no new work while its existing task may complete. After drain completion it is cordoned. Hard-failure fallback remains available.",
    },
  ],
};

export const researchV1 = {
  eyebrow: "RACS V1",
  heading: "Seeded robustness evaluation",
  intro:
    "RACS V1 evaluates whether observable operational degradation in an AMR-based warehouse can be detected early enough for a separate coordination layer to intervene before or during downstream propagation.",
  scopeNotes: [
    "This is a discrete-event simulation.",
    "This is not physical-robot validation.",
  ],
  researchQuestion:
    "Can a separate risk-aware coordination layer use observable operational signals to intervene during progressive AMR degradation before or during broader system propagation?",
  systemModel: [
    "Multiple AMRs transporting work",
    "Task scheduler",
    "Downstream workstation",
    "Shared task arrivals",
    "Progressive degradation of one AMR",
    "RACS as a separate risk/coordination layer",
  ],
  observableIntegrity:
    "RACS decisions use observable operational evidence only. Hidden simulator degradation state is not exposed to the coordination policy.",
  observableExplanation: [
    "Localized anomaly is derived from task-age behavior relative to peers.",
    "This supports suspect-robot anomaly attribution.",
    "It is not root-cause diagnosis.",
  ],
  seededDesign: {
    facts: [
      ["Seeds", "30"],
      ["Seed range", "1000 through 1029"],
      ["WIP conditions", "0, 1, 2, 4"],
      ["Conditions", "healthy / reactive baseline / RACS"],
      ["Total simulation runs", "360"],
      ["Tasks per workload", "exactly 51"],
      ["Max arrivals per step", "2"],
      ["Randomized factor", "only arrival timing"],
      ["Pairing", "same arrival sequence for paired conditions"],
      ["Automated tests", "248"],
    ],
    pairingNote:
      "For each seed and WIP condition, healthy, reactive-baseline, and RACS runs use the same workload realization and shared non-treatment configuration.",
    testNote:
      "Automated tests validate implementation behavior; they are not experimental trials.",
  },
};

export const studyScale = {
  eyebrow: "Study scale",
  metrics: [
    {
      value: "30",
      label: "paired workload seeds",
    },
    {
      value: "4",
      label: "disturbance-time WIP conditions",
    },
    {
      value: "3",
      label: "conditions per seed/WIP pair",
    },
    {
      value: "360",
      label: "total simulations",
    },
    {
      value: "248",
      label: "automated tests",
    },
  ],
  pairingNote: researchV1.seededDesign.pairingNote,
  testNote: researchV1.seededDesign.testNote,
};

export const hypotheses = [
  {
    id: "H1",
    label: "H1 \u2014 Transport coordination",
    status: "PARTIALLY SUPPORTED",
    tone: "partial" as const,
    interpretation:
      "Partially supported. Mean transport metrics favored RACS, but not every paired realization improved.",
  },
  {
    id: "H2",
    label: "H2 \u2014 Earlier intervention and downstream benefit",
    status: "NOT ESTABLISHED",
    tone: "negative" as const,
    interpretation:
      "Not established. Earlier intervention did not produce greater downstream benefit in this V1 study.",
  },
  {
    id: "H3",
    label: "H3 \u2014 Intervention headroom",
    status: "SUPPORTED WITHIN TESTED WIP LEVELS",
    tone: "supported" as const,
    interpretation:
      "Supported within tested WIP levels. Higher disturbance-time WIP was associated with a greater fraction of runs where RACS intervened before propagation.",
  },
];

export const metricGroups = [
  {
    group: "Transport",
    metrics: ["queue AUC", "task latency", "completed tasks", "utilization"],
  },
  {
    group: "Downstream",
    metrics: [
      "workstation starvation / missed processing",
      "paired excess missed processing",
      "net downstream service deficit",
      "downstream completion deficit",
      "causal propagation timing",
    ],
  },
  {
    group: "Coordination",
    metrics: [
      "intervention timing",
      "intervention-before-propagation margin",
    ],
  },
];

export const v1Results = {
  favorableNote: "Lower queue AUC and lower latency are favorable.",
  transport: [
    {
      label: "Mean queue AUC delta, RACS \u2212 baseline",
      value: "-2.9333",
    },
    {
      label: "Mean latency delta, RACS \u2212 baseline",
      value: "-0.0901",
    },
    {
      label: "Queue AUC regressions",
      value: "24 / 120 paired comparisons",
    },
  ],
  interventionFractions: [
    { label: "WIP 0", value: "66.7%" },
    { label: "WIP 1", value: "80.0%" },
    { label: "WIP 2", value: "93.3%" },
    { label: "WIP 4", value: "93.3%" },
  ],
  cascadeTiming: [
    { wip: "WIP 0", min: "16", median: "24", max: "38" },
    { wip: "WIP 1", min: "16", median: "25", max: "38" },
    { wip: "WIP 2", min: "17", median: "28.5", max: "45" },
    { wip: "WIP 4", min: "24", median: "44", max: "59" },
  ],
  conditionalAnalysis: {
    interpretation:
      "H2 is not established because the intervention-before-propagation group did not show greater downstream benefit than the at/after group.",
    groups: [
      {
        label: "Group A",
        description: "RACS intervention before baseline propagation",
        n: "100",
        deltas: [
          ["net missed-processing delta", "-0.130"],
          ["downstream completion deficit delta", "-0.130"],
          ["positive excess delta", "-0.180"],
          ["queue AUC delta", "-2.760"],
          ["latency delta", "-0.08692"],
        ],
      },
      {
        label: "Group B",
        description: "intervention at/after propagation",
        n: "20",
        deltas: [
          ["net missed-processing delta", "-0.150"],
          ["downstream completion deficit delta", "-0.150"],
          ["positive excess delta", "-0.150"],
          ["queue AUC delta", "-3.800"],
          ["latency delta", "-0.1058"],
        ],
      },
    ],
  },
  negativeCases: [
    "RACS worsened transport queue AUC in 24 / 120 paired comparisons.",
    "RACS worsened net downstream missed-processing deficit in 0 / 120 paired comparisons.",
    "One observed cascade prevention occurred at WIP 4, but this is not a general result.",
  ],
};

export const keyResults = {
  eyebrow: "Key results",
  heading: "What V1 found",
  favorableNote: v1Results.favorableNote,
  panels: [
    {
      label: hypotheses[0].label,
      status: hypotheses[0].status,
      tone: hypotheses[0].tone,
      copy: "RACS improved mean queue AUC and mean task latency across the seeded study, while individual workload realizations included regressions.",
      metrics: v1Results.transport,
    },
    {
      label: hypotheses[1].label,
      status: hypotheses[1].status,
      tone: hypotheses[1].tone,
      copy: "Downstream benefit was not greater in runs where RACS intervened before propagation than in runs where intervention occurred at or after propagation.",
      metrics: [],
    },
    {
      label: hypotheses[2].label,
      status: hypotheses[2].status,
      tone: hypotheses[2].tone,
      copy: "Within the tested WIP levels, greater disturbance-time WIP was associated with a higher fraction of runs in which RACS intervened before propagation.",
      metrics: [],
      wipFractions: v1Results.interventionFractions,
      note: "One cascade-prevention case was observed at WIP 4. This is a single observed outcome and is not presented as evidence that RACS generally prevents cascading failures.",
    },
  ],
};

export const v1Limitations = [
  "Discrete-event simulation",
  "No physical-robot validation",
  "Single site",
  "One degrading AMR",
  "Service-capacity degradation rather than full locomotion dynamics",
  "Deterministic robot service duration",
  "Abstract downstream workstation",
  "Only workload-arrival timing randomized",
  "30 seeds",
  "Descriptive statistics only",
  "No statistical-significance claim",
  "No ROS 2 / Gazebo validation",
  "Downstream effect sizes remain small",
];

export const homepageFigureKeys = [
  "intervention-before-propagation-by-wip",
  "queue-auc-delta-distribution",
  "baseline-cascade-timing-by-wip",
  "representative-timeline",
];

export const v1Figures: Array<{
  key: string;
  src: string;
  title: string;
  alt: string;
  takeaway: string;
  caption: string;
}> = [
  {
    key: "intervention-before-propagation-by-wip",
    src: "/figures/v1/intervention_before_propagation_by_wip.png",
    title: "Intervention before propagation by WIP",
    alt: "Bar chart showing intervention-before-propagation fractions of 66.7 percent at WIP 0, 80.0 percent at WIP 1, and 93.3 percent at WIP 2 and WIP 4.",
    takeaway:
      "Higher disturbance-time WIP was associated with more frequent intervention before baseline propagation within the tested WIP levels.",
    caption:
      "Fraction of paired RACS runs where intervention occurred before the paired reactive baseline's degradation-induced cascade start.",
  },
  {
    key: "queue-auc-delta-distribution",
    src: "/figures/v1/queue_auc_delta_distribution.png",
    title: "Queue AUC delta distribution",
    alt: "Distribution plot of queue AUC deltas for RACS minus baseline, with some positive regression cases.",
    takeaway:
      "Mean queue AUC favored RACS, while 24 of 120 paired comparisons worsened.",
    caption:
      "Paired queue AUC deltas use RACS minus reactive baseline; negative values favor RACS.",
  },
  {
    key: "latency-delta-distribution",
    src: "/figures/v1/latency_delta_distribution.png",
    title: "Latency delta distribution",
    alt: "Distribution plot of average completion latency deltas for RACS minus baseline.",
    takeaway:
      "Mean task latency favored RACS across the seeded study.",
    caption:
      "Paired latency deltas use RACS minus reactive baseline; negative values indicate lower completion latency under RACS.",
  },
  {
    key: "baseline-cascade-timing-by-wip",
    src: "/figures/v1/baseline_cascade_timing_by_wip.png",
    title: "Baseline cascade timing by WIP",
    alt: "Distribution plot showing baseline cascade start timing by WIP level, with later timing at higher WIP.",
    takeaway:
      "Baseline propagation timing varied by seeded arrivals and shifted later at higher disturbance-time WIP.",
    caption:
      "Reactive-baseline degradation-induced cascade start distributions for WIP 0, 1, 2, and 4.",
  },
  {
    key: "downstream-net-deficit-delta-distribution",
    src: "/figures/v1/downstream_net_deficit_delta_distribution.png",
    title: "Downstream net deficit delta distribution",
    alt: "Distribution plot of downstream net missed-processing deficit deltas for RACS minus baseline.",
    takeaway:
      "Downstream deficit deltas did not establish H2's earlier-intervention benefit relationship.",
    caption:
      "Paired net missed-processing deficit deltas use RACS minus reactive baseline; negative loss deltas favor RACS.",
  },
  {
    key: "representative-timeline",
    src: "/figures/v1/representative_timeline.png",
    title: "Representative timeline",
    alt: "Timeline plot for the representative seed 1012 at WIP 2 showing degradation, intervention, and propagation events.",
    takeaway:
      "The representative WIP 2 case shows the event sequence available in the frozen result artifact.",
    caption:
      "Representative case selected as the seed closest to median baseline queue AUC at WIP 2, breaking ties by lowest seed.",
  },
];

export const homepageFigures = v1Figures.filter((figure) =>
  homepageFigureKeys.includes(figure.key),
);

export const homepageFigureSection = {
  eyebrow: "V1 EVIDENCE",
  heading: "Results from the seeded robustness study",
  cta: {
    label: "View full V1 evaluation",
    href: "/research/v1",
  },
};

export const reproduction = {
  note:
    "The reproduction creates a new result directory and does not overwrite the frozen reference artifacts.",
  setup: `git clone https://github.com/ridwanbale/racs-protocols.git
cd racs-protocols
python -m venv .venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\\.venv\\Scripts\\python.exe -m pip install --upgrade pip
.\\.venv\\Scripts\\python.exe -m pip install -e ".[dev]"`,
  run: `.\\.venv\\Scripts\\python.exe -m simulations.experiments.racs_v1 \`
  --seeds 30 \`
  --first-seed 1000 \`
  --output results \`
  --experiment-id seeded_robustness_30_reproduction`,
  plot: `.\\.venv\\Scripts\\python.exe -m simulations.experiments.plot_racs_v1 \`
  --result-dir results\\seeded_robustness_30_reproduction \`
  --output-dir docs\\experiments\\figures\\racs_v1_reproduction`,
};

export const releaseIdentity = {
  heading: "Reference RACS V1",
  note:
    "Use the version and release identifiers below when referring to a specific evaluation of RACS V1.",
  fields: [
    ["Name", "RACS V1.0 \u2014 Seeded Robustness Evaluation"],
    ["Release", "v1.0.0"],
    ["Release date", "September 2026"],
    ["Release tip", "0fc41a0"],
    [
      "Frozen implementation snapshot",
      "b4764da6193e013c3c2e1f86763597498bc6253f",
    ],
    ["License", "Apache 2.0"],
    ["Maintainer", "Ridwan Bale"],
  ],
  links: [
    {
      label: "Source",
      href: site.githubUrl,
    },
    {
      label: "Release",
      href: site.v1ReleaseUrl,
    },
    {
      label: "Experiment report",
      href: "https://github.com/ridwanbale/racs-protocols/blob/main/docs/experiments/racs_v1_seeded_robustness.md",
    },
    {
      label: "Reproduction",
      href: "/research/v1#reproduction",
    },
  ],
};

export const sourceLinks = [
  {
    label: "View source",
    href: site.githubUrl,
  },
  {
    label: "V1.0.0 release",
    href: site.v1ReleaseUrl,
  },
  {
    label: "Experiment report",
    href: "https://github.com/ridwanbale/racs-protocols/blob/main/docs/experiments/racs_v1_seeded_robustness.md",
  },
];

export const v1HomepageLimitations = currentLimitations;
