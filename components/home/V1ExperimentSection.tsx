import { V1OperationalFlowDiagram } from "@/components/diagrams/V1OperationalFlowDiagram";
import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { v1Experiment } from "@/content/experiment";

export function V1ExperimentSection() {
  return (
    <Section className="bg-surface py-18 sm:py-24">
      <div className="space-y-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow={v1Experiment.homepageEyebrow}
            heading={v1Experiment.homepageHeading}
            body={
              <ul className="space-y-3">
                {v1Experiment.scenarioPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            }
          />
          <V1OperationalFlowDiagram />
        </div>

        <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
          {v1Experiment.conditions.map((condition) => (
            <article key={condition.name} className="bg-surface p-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent-strong">
                {condition.role}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {condition.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted">
                {condition.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
