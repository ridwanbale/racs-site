import type { Metadata } from "next";
import { V1OperationalFlowDiagram } from "@/components/diagrams/V1OperationalFlowDiagram";
import { FigureGrid } from "@/components/figures/FigureGrid";
import { ButtonLink } from "@/components/site/ButtonLink";
import { EvidenceCallout } from "@/components/site/EvidenceCallout";
import { ExternalLink } from "@/components/site/ExternalLink";
import { PageShell } from "@/components/site/PageShell";
import { Section } from "@/components/site/Section";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatusBadge } from "@/components/site/StatusBadge";
import {
  hypotheses,
  metricGroups,
  reproduction,
  researchV1,
  sourceLinks,
  v1Experiment,
  v1Figures,
  v1Limitations,
  v1Results,
} from "@/content/experiment";

export const metadata: Metadata = {
  title: "RACS V1 Seeded Robustness Evaluation",
  description:
    "Technical evidence page for the released RACS V1 seeded robustness evaluation.",
};

function BulletedList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-muted">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({
  rows,
  headers,
  compact = false,
}: {
  headers: string[];
  rows: string[][];
  compact?: boolean;
}) {
  return (
    <div className="overflow-x-auto border border-border bg-surface">
      <table
        className={`w-full border-collapse text-left text-sm ${
          compact ? "min-w-0" : "min-w-[36rem]"
        }`}
      >
        <thead className="bg-surface-muted text-muted-strong">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className={`border-b border-border font-mono text-xs font-semibold uppercase tracking-[0.1em] ${
                  compact ? "px-3 py-2.5" : "px-4 py-3"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-b border-border last:border-0">
              {row.map((cell, index) => (
                <td
                  key={`${cell}-${index}`}
                  className={`font-mono text-sm text-foreground ${
                    compact ? "px-3 py-2.5" : "px-4 py-3"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto border border-slate-700 bg-technical-surface p-5 text-sm leading-6 text-technical-muted">
      <code>{code}</code>
    </pre>
  );
}

export default function ResearchV1Page() {
  return (
    <PageShell>
      <Section className="border-b border-border bg-surface py-18 sm:py-24">
        <div className="max-w-[var(--container-narrow)]">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent-strong">
            {researchV1.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
            {researchV1.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {researchV1.intro}
          </p>
          <ul className="mt-5 flex flex-col gap-2 sm:flex-row">
            {researchV1.scopeNotes.map((note) => (
              <li
                key={note}
                className="border border-border bg-surface-muted px-3.5 py-2.5 text-sm font-medium text-muted-strong"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Research question"
          heading="Operational risk before hard failure"
          body={<p>{researchV1.researchQuestion}</p>}
        />
      </Section>

      <Section className="bg-surface-muted py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="System model"
            heading="AMR transport feeding downstream work"
            body={<BulletedList items={researchV1.systemModel} />}
          />
          <V1OperationalFlowDiagram />
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Experimental conditions"
          heading="Three paired conditions"
        />
        <div className="mt-8 grid gap-px border border-border bg-border lg:grid-cols-3">
          {v1Experiment.conditions.map((condition) => (
            <article key={condition.label} className="bg-surface p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent-strong">
                {condition.label}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                {condition.role}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                {condition.researchDescription}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-technical py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Observable-signal integrity"
            heading="Observable evidence only"
            dark
          />
          <div className="space-y-6">
            <EvidenceCallout dark>
              {researchV1.observableIntegrity}
            </EvidenceCallout>
            <ul className="grid gap-px border border-slate-700 bg-slate-700">
              {researchV1.observableExplanation.map((item) => (
                <li
                  key={item}
                  className="bg-technical-surface px-5 py-4 text-sm leading-6 text-technical-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Seeded robustness design"
          heading="Paired workloads across seed and WIP conditions"
          body={<p>{researchV1.seededDesign.pairingNote}</p>}
        />
        <div className="mt-8">
          <DataTable
            headers={["Design parameter", "Frozen V1 value"]}
            rows={researchV1.seededDesign.facts}
          />
        </div>
        <div className="mt-6">
          <EvidenceCallout>{researchV1.seededDesign.testNote}</EvidenceCallout>
        </div>
      </Section>

      <Section className="bg-surface-muted py-16">
        <SectionHeader eyebrow="Hypotheses" heading="Frozen V1 outcomes" />
        <div className="mt-8 grid gap-4">
          {hypotheses.map((hypothesis) => (
            <article
              key={hypothesis.id}
              className="border border-border bg-surface p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <h2 className="font-mono text-base font-semibold text-foreground">
                  {hypothesis.label}
                </h2>
                <StatusBadge
                  status={hypothesis.status}
                  tone={hypothesis.tone}
                />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Metrics"
          heading="Transport, downstream, and coordination measures"
          body={<p>Metrics are grouped by analysis role; not all metrics showed improvement.</p>}
        />
        <div className="mt-8 grid gap-px border border-border bg-border lg:grid-cols-3">
          {metricGroups.map((group) => (
            <article key={group.group} className="bg-surface p-6">
              <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-strong">
                {group.group}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.metrics.map((metric) => (
                  <li key={metric} className="text-sm leading-6 text-muted">
                    {metric}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-technical py-16">
        <SectionHeader
          eyebrow="Results"
          heading="Frozen V1 findings"
          body={<p>{v1Results.favorableNote}</p>}
          dark
        />

        <div className="mt-8 grid gap-px border border-slate-700 bg-slate-700 lg:grid-cols-3">
          {v1Results.transport.map((metric) => (
            <div key={metric.label} className="bg-technical-surface p-5">
              <p className="text-sm leading-6 text-technical-muted">
                {metric.label}
              </p>
              <p className="mt-3 font-mono text-2xl font-semibold text-white">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft">
              Intervention-before-propagation fraction
            </h2>
            <dl className="mt-4 grid gap-px border border-slate-700 bg-slate-700 sm:grid-cols-2">
              {v1Results.interventionFractions.map((item) => (
                <div key={item.label} className="bg-technical-surface p-5">
                  <dt className="font-mono text-sm text-technical-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-3 font-mono text-3xl font-semibold text-white">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft">
              Baseline causal cascade timing
            </h2>
            <div className="mt-4">
              <DataTable
                headers={["WIP", "Min", "Median", "Max"]}
                rows={v1Results.cascadeTiming.map((row) => [
                  row.wip,
                  row.min,
                  row.median,
                  row.max,
                ])}
                compact
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft">
            Conditional analysis
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-technical-muted">
            {v1Results.conditionalAnalysis.interpretation}
          </p>
          <div className="mt-6 grid gap-px border border-slate-700 bg-slate-700 lg:grid-cols-2">
            {v1Results.conditionalAnalysis.groups.map((group) => (
              <article key={group.label} className="bg-technical-surface p-5">
                <p className="font-mono text-sm font-semibold text-accent-soft">
                  {group.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {group.description}
                </h3>
                <p className="mt-2 font-mono text-sm text-technical-muted">
                  n = {group.n}
                </p>
                <dl className="mt-5 space-y-3">
                  {group.deltas.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-col gap-1 border-t border-slate-700 pt-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <dt className="text-sm text-technical-muted">{label}</dt>
                      <dd className="font-mono text-sm font-semibold text-white">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Experiment figures"
          heading="Released V1 figures"
        />
        <div className="mt-8">
          <FigureGrid figures={v1Figures} />
        </div>
      </Section>

      <Section className="bg-surface-muted py-16">
        <SectionHeader eyebrow="Negative cases" heading="Retained negative results" />
        <ul className="mt-8 grid gap-4">
          {v1Results.negativeCases.map((item) => (
            <li
              key={item}
              className="border border-border bg-surface px-5 py-4 text-base leading-7 text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Interpretation"
          heading="Scientific interpretation"
          body={<p>No significance claims are made.</p>}
        />
        <div className="mt-8 grid gap-4">
          {hypotheses.map((hypothesis) => (
            <article
              key={hypothesis.id}
              className="border border-border bg-surface-subtle p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <p className="font-mono text-sm font-semibold text-muted-strong">
                  {hypothesis.label}
                </p>
                <StatusBadge
                  status={hypothesis.status}
                  tone={hypothesis.tone}
                />
              </div>
              <p className="mt-4 text-base leading-7 text-muted">
                {hypothesis.interpretation}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-technical py-16">
        <SectionHeader
          eyebrow="Limitations"
          heading="What V1 does not establish"
          dark
        />
        <ul className="mt-8 columns-1 gap-4 space-y-3 sm:columns-2 lg:columns-3">
          {v1Limitations.map((limitation) => (
            <li
              key={limitation}
              className="break-inside-avoid border border-slate-700 bg-technical-surface px-5 py-4 text-sm leading-6 text-technical-muted"
            >
              {limitation}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Reproduction"
          heading="Reproduce without overwriting reference artifacts"
          body={<p>{reproduction.note}</p>}
        />
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-muted-strong">
              Setup
            </h2>
            <CodeBlock code={reproduction.setup} />
          </div>
          <div>
            <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-muted-strong">
              Run
            </h2>
            <CodeBlock code={reproduction.run} />
          </div>
          <div>
            <h2 className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-muted-strong">
              Plot
            </h2>
            <CodeBlock code={reproduction.plot} />
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface-muted py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            eyebrow="Source / release links"
            heading="Released artifacts"
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            {sourceLinks.map((link, index) =>
              index === 0 ? (
                <ButtonLink key={link.href} href={link.href}>
                  {link.label}
                </ButtonLink>
              ) : (
                <ExternalLink
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center justify-center border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-strong"
                >
                  {link.label}
                </ExternalLink>
              ),
            )}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
