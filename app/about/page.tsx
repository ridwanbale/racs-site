import { PageShell } from "@/components/site/PageShell";
import { Section } from "@/components/site/Section";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <PageShell>
      <Section className="bg-surface py-20 sm:py-24">
        <div className="max-w-[var(--container-narrow)]">
          <SectionEyebrow>About RACS</SectionEyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
            {site.fullName}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            RACS is a project-focused open-source effort exploring risk-aware
            coordination for autonomous systems, with current public evidence
            centered on a reproducible V1 simulation study.
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
