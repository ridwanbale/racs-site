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
      role: "Reference counterfactual",
      description:
        "No degradation is applied, providing a paired reference for the same workload realization.",
    },
    {
      name: "Reactive baseline",
      role: "Hard-failure recovery",
      description:
        "Robot remains available until hard failure; stranded work is then recovered and reassigned.",
    },
    {
      name: "RACS",
      role: "Predictive coordination",
      description:
        "Observable task behavior can trigger a predictive drain before hard failure. Existing work may complete while new assignments are redirected.",
    },
  ],
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
  pairingNote:
    "For each seed and WIP condition, healthy, reactive-baseline, and RACS runs use the same workload realization and shared non-treatment configuration.",
  testNote:
    "Automated tests validate implementation behavior; they are not experimental trials.",
};

export const keyResults = {
  eyebrow: "Key results",
  heading: "What V1 found",
  favorableNote: "Lower queue AUC and lower latency are favorable.",
  panels: [
    {
      label: "H1 \u2014 Transport coordination",
      status: "PARTIALLY SUPPORTED",
      tone: "partial" as const,
      copy: "RACS improved mean queue AUC and mean task latency across the seeded study, while individual workload realizations included regressions.",
      metrics: [
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
    },
    {
      label: "H2 \u2014 Earlier intervention and downstream benefit",
      status: "NOT ESTABLISHED",
      tone: "negative" as const,
      copy: "Downstream benefit was not greater in runs where RACS intervened before propagation than in runs where intervention occurred at or after propagation.",
      metrics: [],
    },
    {
      label: "H3 \u2014 Intervention headroom",
      status: "SUPPORTED WITHIN TESTED WIP LEVELS",
      tone: "supported" as const,
      copy: "Within the tested WIP levels, greater disturbance-time WIP was associated with a higher fraction of runs in which RACS intervened before propagation.",
      metrics: [],
      wipFractions: [
        {
          label: "WIP 0",
          value: "66.7%",
        },
        {
          label: "WIP 1",
          value: "80.0%",
        },
        {
          label: "WIP 2",
          value: "93.3%",
        },
        {
          label: "WIP 4",
          value: "93.3%",
        },
      ],
      note: "One cascade-prevention case was observed at WIP 4. This is a single observed outcome and is not presented as evidence that RACS generally prevents cascading failures.",
    },
  ],
};

export const v1Figures: Array<{
  src: string;
  title: string;
  alt: string;
  takeaway: string;
  caption: string;
}> = [];
