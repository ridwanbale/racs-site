import { PageShell } from "@/components/site/PageShell";
import { Section } from "@/components/site/Section";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { v1Experiment } from "@/content/experiment";

export default function ResearchV1Page() {
  return (
    <PageShell>
      <Section className="bg-surface py-20 sm:py-24">
        <div className="max-w-[var(--container-narrow)]">
          <SectionEyebrow>{v1Experiment.eyebrow}</SectionEyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
            {v1Experiment.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {v1Experiment.intro}
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
