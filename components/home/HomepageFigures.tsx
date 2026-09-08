import { FigureGrid } from "@/components/figures/FigureGrid";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { homepageFigureSection, homepageFigures } from "@/content/experiment";

export function HomepageFigures() {
  return (
    <Section className="border-y border-border bg-surface-muted py-18 sm:py-24">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow={homepageFigureSection.eyebrow}
          heading={homepageFigureSection.heading}
        />
        <ButtonLink
          href={homepageFigureSection.cta.href}
          variant="secondary"
          className="w-full sm:w-fit"
        >
          {homepageFigureSection.cta.label}
        </ButtonLink>
      </div>
      <FigureGrid figures={homepageFigures} />
    </Section>
  );
}
