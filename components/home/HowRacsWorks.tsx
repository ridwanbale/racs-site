import { RacsArchitectureDiagram } from "@/components/diagrams/RacsArchitectureDiagram";
import { EvidenceCallout } from "@/components/site/EvidenceCallout";
import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { howRacsWorks } from "@/content/site";

export function HowRacsWorks() {
  return (
    <Section className="bg-technical py-18 sm:py-24">
      <div className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow={howRacsWorks.eyebrow}
            heading={howRacsWorks.heading}
            body={<p>{howRacsWorks.intro}</p>}
            dark
          />
          <EvidenceCallout dark>{howRacsWorks.evidenceCallout}</EvidenceCallout>
        </div>

        <RacsArchitectureDiagram />

        <div className="border-t border-slate-700 pt-8">
          <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft">
            Coordination actions in V1
          </h3>
          <ul className="mt-4 grid gap-px border border-slate-700 bg-slate-700 sm:grid-cols-3">
            {howRacsWorks.v1Actions.map((action) => (
              <li
                key={action}
                className="bg-technical-surface px-5 py-5 text-sm font-medium text-white"
              >
                {action}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
