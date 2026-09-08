import { releaseIdentity } from "./experiment";
import { site } from "./site";

export const evaluatePage = {
  eyebrow: "EVALUATE RACS",
  heading: "Independent evaluation of RACS V1",
  intro:
    "RACS V1 is open for independent technical review, reproduction, extension, and integration assessment. The goal is to make the architecture, benchmark, assumptions, and limitations easy to inspect and challenge.",
  note:
    "V1 is a discrete-event simulation study. It is not physical-robot validation or a production deployment.",
};

export const evaluationTracks = [
  {
    title: "Architecture review",
    time: "~30 minutes",
    description:
      "Review the coordination architecture, assumptions, risk-signal design, failure model, safety gating, and potential adoption barriers.",
    output: "GitHub issue, written critique, or architecture feedback.",
    cta: "Review architecture",
    href: `${site.githubUrl}/issues`,
  },
  {
    title: "Reproduce V1",
    time: "~30\u201360 minutes",
    description:
      "Run the released seeded robustness benchmark and compare your outputs with the frozen V1 reference artifacts.",
    output: "Reproduction result, GitHub issue, or methodological feedback.",
    cta: "Reproduce V1",
    href: "/research/v1#reproduction",
  },
  {
    title: "Extend the experiment",
    time: "Open-ended",
    description:
      "Test an alternative disturbance, workload model, risk policy, recovery strategy, or experimental condition while preserving clear treatment/control separation.",
    output: "Fork, branch, experiment report, issue, or pull request.",
    cta: "View source",
    href: site.githubUrl,
  },
  {
    title: "Integration evaluation",
    time: "Open-ended",
    description:
      "Assess how the RACS coordination model could interface with a robotics or autonomous-system stack.",
    candidateStacks: [
      "ROS 2",
      "Gazebo",
      "Isaac Sim",
      "AMR fleet managers",
      "Other autonomous-system middleware",
    ],
    output: "Integration notes, design feedback, GitHub issue, or prototype.",
    cta: "Discuss an integration",
    href: `${site.githubUrl}/issues`,
  },
];

export const reviewerQuestions = {
  heading: "What should reviewers challenge?",
  items: [
    "Is the reactive baseline a credible comparison for this V1 scenario?",
    "Are the observable anomaly signals sufficiently separated from hidden simulator truth?",
    "Is the paired healthy / reactive / RACS experimental design appropriate?",
    "Are the downstream attribution metrics methodologically reasonable?",
    "What additional disturbance, workload, or policy would most increase confidence in a V2 evaluation?",
    "What would be required before considering this architecture credible for a physical multi-robot system?",
  ],
};

export const candidateEvaluationContexts = {
  heading: "Candidate evaluation contexts",
  intro:
    "RACS V1 evaluates one simulated AMR/workstation scenario. The contexts below are candidate directions for external evaluation, not demonstrated deployments.",
  contexts: [
    {
      title: "Warehouse AMR fleets",
      description:
        "Evaluate risk-aware workload redistribution when an AMR progressively degrades while shared transport demand continues.",
    },
    {
      title: "Manufacturing cells",
      description:
        "Evaluate coordination when robot or station degradation creates downstream resource pressure or starvation.",
    },
    {
      title: "Mixed autonomous fleets",
      description:
        "Evaluate shared risk signaling across heterogeneous systems operating under different local controllers.",
    },
  ],
  boundary:
    "V1 validates only the simulated AMR/workstation scenario described in the released experiment. These are future evaluation contexts, not demonstrated deployments.",
};

export const publicEvaluationActions = {
  heading: "Start an evaluation",
  ctas: [
    {
      label: "Reproduce V1",
      href: "/research/v1#reproduction",
      variant: "primary" as const,
    },
    {
      label: "Open technical issue",
      href: `${site.githubUrl}/issues`,
      variant: "secondary" as const,
    },
    {
      label: "View source",
      href: site.githubUrl,
      variant: "secondary" as const,
    },
    {
      label: "Review V1 release",
      href: site.v1ReleaseUrl,
      variant: "tertiary" as const,
    },
  ],
};

export const evaluationReleaseIdentity = releaseIdentity;
