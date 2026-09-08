import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ReleaseIdentityBlock } from "@/components/release/ReleaseIdentityBlock";
import { ButtonLink } from "@/components/site/ButtonLink";
import { EvidenceCallout } from "@/components/site/EvidenceCallout";
import { ExternalLink } from "@/components/site/ExternalLink";
import { PageShell } from "@/components/site/PageShell";
import { Section } from "@/components/site/Section";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  candidateEvaluationContexts,
  evaluatePage,
  evaluationReleaseIdentity,
  evaluationTracks,
  publicEvaluationActions,
  reviewerQuestions,
} from "@/content/evaluate";
import { siteRoutes } from "@/content/site";

export const metadata: Metadata = {
  title: siteRoutes[2].title,
  description: siteRoutes[2].description,
  openGraph: {
    title: siteRoutes[2].title,
    description: siteRoutes[2].description,
  },
  twitter: {
    title: siteRoutes[2].title,
    description: siteRoutes[2].description,
  },
};

function TrackLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    "inline-flex min-h-10 items-center justify-center border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-strong";

  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <ButtonLink href={href} variant="secondary" className="min-h-10 px-4 py-2">
      {children}
    </ButtonLink>
  );
}

export default function EvaluatePage() {
  return (
    <PageShell>
      <Section className="border-b border-border bg-surface py-18 sm:py-24">
        <div className="max-w-[var(--container-narrow)]">
          <SectionEyebrow>{evaluatePage.eyebrow}</SectionEyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
            {evaluatePage.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {evaluatePage.intro}
          </p>
          <div className="mt-6">
            <EvidenceCallout>{evaluatePage.note}</EvidenceCallout>
          </div>
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <SectionHeader
          eyebrow="Evaluation paths"
          heading="Four ways to evaluate RACS"
        />
        <div className="mt-8 grid gap-px border border-border bg-border lg:grid-cols-2">
          {evaluationTracks.map((track) => (
            <article key={track.title} className="bg-surface p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {track.title}
                  </h2>
                  <p className="mt-2 font-mono text-sm font-semibold text-accent-strong">
                    {track.time}
                  </p>
                </div>
                <TrackLink href={track.href}>{track.cta}</TrackLink>
              </div>
              <p className="mt-5 text-base leading-7 text-muted">
                {track.description}
              </p>
              {track.candidateStacks ? (
                <div className="mt-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-strong">
                    Candidate stacks may include
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {track.candidateStacks.map((stack) => (
                      <li
                        key={stack}
                        className="border border-border bg-surface-subtle px-3 py-1.5 font-mono text-xs text-muted-strong"
                      >
                        {stack}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="mt-5 border-l-4 border-accent bg-accent-soft p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent-strong">
                  Suggested output
                </p>
                <p className="mt-2 text-sm leading-6 text-accent-strong">
                  {track.output}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-muted py-16">
        <SectionHeader
          eyebrow="Reviewer questions"
          heading={reviewerQuestions.heading}
        />
        <ol className="mt-8 grid gap-px border border-border bg-border">
          {reviewerQuestions.items.map((question, index) => (
            <li
              key={question}
              className="flex gap-4 bg-surface p-5 sm:gap-5"
            >
              <span className="shrink-0 basis-9 font-mono text-sm font-semibold text-accent-strong">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base leading-7 text-muted">{question}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface py-16">
        <ReleaseIdentityBlock identity={evaluationReleaseIdentity} />
      </Section>

      <Section className="bg-technical py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Evaluation contexts"
            heading={candidateEvaluationContexts.heading}
            body={<p>{candidateEvaluationContexts.intro}</p>}
            dark
          />
          <div className="space-y-5">
            <div className="grid gap-px border border-slate-700 bg-slate-700">
              {candidateEvaluationContexts.contexts.map((context) => (
                <article
                  key={context.title}
                  className="bg-technical-surface p-5"
                >
                  <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft">
                    {context.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-technical-muted">
                    {context.description}
                  </p>
                </article>
              ))}
            </div>
            <EvidenceCallout dark>
              {candidateEvaluationContexts.boundary}
            </EvidenceCallout>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface-muted py-16">
        <div className="border border-border bg-surface p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeader
              eyebrow="Public evaluation actions"
              heading={publicEvaluationActions.heading}
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {publicEvaluationActions.ctas.map((cta) => (
                <ButtonLink
                  key={cta.href}
                  href={cta.href}
                  variant={cta.variant}
                  className="justify-center"
                >
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
