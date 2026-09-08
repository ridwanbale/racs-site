import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { roadmapItems, roadmapSection } from "@/content/roadmap";

export function RoadmapSection() {
  return (
    <Section className="bg-surface py-18 sm:py-24">
      <SectionHeader
        eyebrow={roadmapSection.eyebrow}
        heading={roadmapSection.heading}
        body={<p>{roadmapSection.intro}</p>}
      />
      <ol className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {roadmapItems.map((item, index) => (
          <li
            key={`${item.phase}-${item.status}`}
            className={`bg-surface p-6 ${
              index < 2 ? "border-t-4 border-t-accent" : "border-t-4 border-t-border"
            }`}
          >
            <p
              className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${
                index < 2 ? "text-accent-strong" : "text-muted-strong"
              }`}
            >
              {item.phase} &mdash; {item.status}
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">{item.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
