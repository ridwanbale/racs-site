import { ProcessFlow } from "@/components/diagrams/ProcessFlow";
import { TimelineFlow } from "@/components/diagrams/TimelineFlow";
import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { whyRacs } from "@/content/site";

export function WhyRacs() {
  return (
    <Section className="bg-surface py-18 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeader
          eyebrow={whyRacs.eyebrow}
          heading={whyRacs.heading}
          body={
            <ul className="space-y-3">
              {whyRacs.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          }
        />

        <div className="space-y-8">
          <ProcessFlow
            items={whyRacs.propagation}
            ariaLabel="Operational progression from local degradation to downstream disruption"
            spacious
          />
          <div className="space-y-4">
            <TimelineFlow
              title="Reactive recovery"
              items={whyRacs.reactiveRecovery}
              ariaLabel="Reactive recovery flow"
            />
            <TimelineFlow
              title="RACS"
              items={whyRacs.racsRecovery}
              ariaLabel="RACS coordination flow"
              desktopColumns={4}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
