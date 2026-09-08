import { EvidenceCallout } from "@/components/site/EvidenceCallout";
import { MetricCard } from "@/components/site/MetricCard";
import { Section } from "@/components/site/Section";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { studyScale } from "@/content/experiment";

export function StudyScale() {
  return (
    <Section className="border-y border-border bg-surface-muted py-14 sm:py-18">
      <SectionEyebrow>{studyScale.eyebrow}</SectionEyebrow>
      <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {studyScale.metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
          />
        ))}
      </div>
      <div className="mt-6 border border-border bg-surface p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.55fr] lg:items-stretch">
          <EvidenceCallout>{studyScale.pairingNote}</EvidenceCallout>
          <aside className="border border-border bg-surface-subtle px-4 py-3 text-sm leading-6 text-muted">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-muted-strong">
              Test scope
            </p>
            <p className="mt-2">{studyScale.testNote}</p>
          </aside>
        </div>
      </div>
    </Section>
  );
}
