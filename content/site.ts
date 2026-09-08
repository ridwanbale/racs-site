export const site = {
  name: "RACS",
  fullName: "Risk-Aware Coordination System",
  brandLine: "RACS \u2014 Risk-Aware Coordination System",
  title: "RACS \u2014 Risk-Aware Coordination for Autonomous Systems",
  description:
    "RACS is an open risk-aware coordination layer for autonomous systems, with reproducible evaluation of predictive coordination under operational degradation.",
  githubUrl: "https://github.com/ridwanbale/racs-protocols",
  v1ReleaseUrl:
    "https://github.com/ridwanbale/racs-protocols/releases/tag/v1.0.0",
  openSourceLabel: "Open-source project",
};

export const siteRoutes = [
  {
    path: "/",
    title: "RACS \u2014 Risk-Aware Coordination for Autonomous Systems",
    description:
      "RACS is an open risk-aware coordination layer for autonomous systems, with reproducible evaluation of predictive coordination under operational degradation.",
    priority: 1,
  },
  {
    path: "/research/v1",
    title: "RACS V1 Seeded Robustness Evaluation",
    description:
      "Technical evidence page for the released RACS V1 seeded robustness evaluation.",
    priority: 0.9,
  },
  {
    path: "/evaluate",
    title: "Evaluate RACS V1",
    description:
      "Independent technical review, reproduction, extension, and integration assessment paths for RACS V1.",
    priority: 0.8,
  },
  {
    path: "/about",
    title: "About RACS",
    description:
      "Learn about the RACS project, its principles, current state, and maintainer.",
    priority: 0.7,
  },
];

export const homepageHero = {
  brandLine: site.brandLine,
  heading: "Risk-aware coordination for autonomous systems",
  body: "RACS is an open coordination layer for detecting emerging operational risk and coordinating autonomous systems before local disruptions propagate across the broader system.",
  primaryCta: {
    label: "Explore V1 Results",
    href: "/research/v1",
  },
  secondaryCta: {
    label: "View on GitHub",
    href: site.githubUrl,
  },
};

export const credibilityItems = [
  "Open source",
  "Observable telemetry only",
  "360 simulations",
  "248 automated tests",
  "Reproducible V1",
];

export const whyRacs = {
  eyebrow: "Why RACS",
  heading: "Autonomy creates a coordination problem",
  points: [
    "Autonomous systems increasingly operate as fleets and shared workflows.",
    "Local degradation can affect queues, shared resources, and downstream processes.",
    "Conventional recovery often begins after hard failure.",
    "RACS explores whether emerging operational risk can be detected and coordinated earlier.",
  ],
  propagation: [
    "Localized degradation",
    "Delayed work",
    "Queue pressure",
    "Downstream disruption",
  ],
  reactiveRecovery: ["Hard failure", "Detect", "Recover"],
  racsRecovery: [
    "Observable degradation evidence",
    "Risk signal",
    "Coordinate",
    "Contain/recover",
  ],
};

export const howRacsWorks = {
  eyebrow: "How RACS works",
  heading: "A separate coordination layer for operational risk",
  intro:
    "RACS sits beside autonomous operations as a coordination layer, converting observable system behavior into risk signals that can inform bounded coordination actions.",
  architectureFlow: [
    "Observable telemetry",
    "Risk prediction",
    "RiskSignal",
    "NetworkBrain",
    "SafetyGate",
    "Coordination action",
    "Autonomous system",
  ],
  v1Actions: ["Predictive drain", "Cordon", "Hard-failure fallback"],
  evidenceCallout:
    "RACS decisions use observable operational evidence only. Hidden simulator degradation state is not exposed to the coordination policy.",
};

export const evaluateRacs = {
  eyebrow: "Evaluate RACS",
  heading: "Evaluate RACS",
  body: "We are inviting robotics engineers, researchers, and autonomous-systems practitioners to reproduce, critique, and extend the V1 experiment.",
  ctas: [
    {
      label: "Evaluate RACS",
      href: "/evaluate",
      variant: "primary" as const,
    },
    {
      label: "Explore V1 Results",
      href: "/research/v1",
      variant: "secondary" as const,
    },
    {
      label: "View Source",
      href: site.githubUrl,
      variant: "tertiary" as const,
    },
  ],
};

export const aboutPage = {
  eyebrow: "ABOUT RACS",
  heading: "An open initiative for risk-aware autonomous coordination",
  intro:
    "RACS explores how autonomous systems can use shared operational risk signals and bounded coordination to respond to emerging degradation before local problems become broader operational disruptions.",
  whyExists: {
    heading: "Why RACS exists",
    points: [
      "Fleets of autonomous systems create coordination challenges.",
      "Local autonomy alone does not address system-level operational propagation.",
      "RACS is exploring a separate risk-aware coordination layer.",
    ],
  },
  principles: {
    heading: "Project principles",
    items: [
      "Observable evidence",
      "Bounded coordination",
      "Reproducible evaluation",
      "Explicit limitations",
      "Open technical development",
    ],
  },
  currentState: {
    heading: "Current state",
    items: [
      "V1 is released.",
      "V1 is simulation-based.",
      "Seeded robustness evaluation is public.",
      "Source and reproduction instructions are public.",
      "External evaluation is the next phase.",
    ],
  },
  maintainer: {
    name: "Ridwan Bale",
    role: "Founder and Maintainer",
    bio: "Ridwan Bale works at the intersection of product, autonomous systems, operational risk, and robotics infrastructure. His background includes mechanical engineering, engineering management, robotics fulfillment systems, and large-scale software infrastructure.",
  },
  ctas: [
    {
      label: "View V1 Research",
      href: "/research/v1",
      variant: "primary" as const,
    },
    {
      label: "View Source",
      href: site.githubUrl,
      variant: "secondary" as const,
    },
  ],
};
