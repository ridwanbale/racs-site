import { ButtonLink } from "@/components/site/ButtonLink";
import { EvaluateRacs } from "@/components/home/EvaluateRacs";
import { HeroSystemVisual } from "@/components/diagrams/HeroSystemVisual";
import { HowRacsWorks } from "@/components/home/HowRacsWorks";
import { KeyResults } from "@/components/home/KeyResults";
import { LimitationsSection } from "@/components/home/LimitationsSection";
import { PageShell } from "@/components/site/PageShell";
import { RoadmapSection } from "@/components/home/RoadmapSection";
import { Section } from "@/components/site/Section";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { StudyScale } from "@/components/home/StudyScale";
import { V1ExperimentSection } from "@/components/home/V1ExperimentSection";
import { WhyRacs } from "@/components/home/WhyRacs";
import { credibilityItems, homepageHero } from "@/content/site";

export default function Home() {
  return (
    <PageShell>
      <Section className="border-b border-border bg-surface py-18 sm:py-22 lg:py-26">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div className="max-w-[var(--container-narrow)]">
            <SectionEyebrow>{homepageHero.brandLine}</SectionEyebrow>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl lg:text-[3.6rem]">
              {homepageHero.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              {homepageHero.body}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={homepageHero.primaryCta.href}>
                {homepageHero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={homepageHero.secondaryCta.href}
                variant="secondary"
              >
                {homepageHero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
          <HeroSystemVisual />
        </div>
      </Section>

      <Section className="bg-surface-muted py-8">
        <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {credibilityItems.map((item) => (
            <li
              key={item}
              className="bg-surface px-5 py-4 font-mono text-sm font-semibold text-muted-strong"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <WhyRacs />
      <HowRacsWorks />
      <V1ExperimentSection />
      <StudyScale />
      <KeyResults />
      <LimitationsSection />
      <RoadmapSection />
      <EvaluateRacs />
    </PageShell>
  );
}
