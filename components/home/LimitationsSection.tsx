import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { currentLimitations, limitationsSection } from "@/content/limitations";

export function LimitationsSection() {
  return (
    <Section className="bg-technical py-18 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow={limitationsSection.eyebrow}
          heading={limitationsSection.heading}
          body={<p>{limitationsSection.intro}</p>}
          dark
        />
        <ul className="columns-1 gap-4 space-y-3 sm:columns-2">
          {currentLimitations.map((limitation) => (
            <li
              key={limitation}
              className="break-inside-avoid border border-slate-700 bg-technical-surface px-5 py-4 text-sm leading-6 text-technical-muted"
            >
              {limitation}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
