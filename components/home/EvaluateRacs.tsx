import { ButtonLink } from "@/components/site/ButtonLink";
import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { evaluateRacs } from "@/content/site";

export function EvaluateRacs() {
  return (
    <Section className="border-t border-border bg-surface-muted py-18 sm:py-24">
      <div className="border border-border bg-surface p-7 sm:p-9">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <SectionHeader
          eyebrow={evaluateRacs.eyebrow}
          heading={evaluateRacs.heading}
          body={<p>{evaluateRacs.body}</p>}
        />
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          {evaluateRacs.ctas.map((cta, index) => (
            <ButtonLink
              key={cta.href}
              href={cta.href}
              variant={
                index === 0 ? "primary" : index === 1 ? "secondary" : "tertiary"
              }
              className="justify-center"
            >
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </div>
      </div>
    </Section>
  );
}
