import { EvidenceCallout } from "@/components/site/EvidenceCallout";
import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatusBadge } from "@/components/site/StatusBadge";
import { keyResults } from "@/content/experiment";

export function KeyResults() {
  return (
    <Section className="bg-surface py-18 sm:py-24">
      <SectionHeader
        eyebrow={keyResults.eyebrow}
        heading={keyResults.heading}
        body={<p>{keyResults.favorableNote}</p>}
      />

      <div className="mt-10 grid gap-6">
        {keyResults.panels.map((panel, index) => (
          <article
            key={panel.label}
            className={`border bg-surface p-6 ${
              panel.tone === "negative"
                ? "border-slate-500"
                : "border-border"
            } ${index === 0 ? "sm:p-8" : ""}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p
                  className={`font-mono font-semibold text-muted-strong ${
                    index === 0 ? "text-base" : "text-sm"
                  }`}
                >
                  {panel.label}
                </p>
                <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
                  {panel.copy}
                </p>
              </div>
              <StatusBadge status={panel.status} tone={panel.tone} />
            </div>

            {panel.metrics.length > 0 ? (
              <dl className="mt-7 grid gap-px border border-border bg-border lg:grid-cols-3">
                {panel.metrics.map((metric) => (
                  <div key={metric.label} className="bg-surface-subtle p-5">
                    <dt className="text-sm leading-6 text-muted">
                      {metric.label}
                    </dt>
                    <dd className="mt-3 font-mono text-2xl font-semibold text-foreground">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {panel.wipFractions ? (
              <dl className="mt-7 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {panel.wipFractions.map((fraction) => (
                  <div key={fraction.label} className="bg-surface-subtle p-5">
                    <dt className="font-mono text-sm text-muted">
                      {fraction.label}
                    </dt>
                    <dd className="mt-3 font-mono text-3xl font-semibold text-foreground">
                      {fraction.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {panel.note ? (
              <div className="mt-6">
                <EvidenceCallout>{panel.note}</EvidenceCallout>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
