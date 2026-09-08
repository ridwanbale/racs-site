import type { Metadata } from "next";
import { ButtonLink } from "@/components/site/ButtonLink";
import { PageShell } from "@/components/site/PageShell";
import { Section } from "@/components/site/Section";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { SectionHeader } from "@/components/site/SectionHeader";
import { aboutPage, siteRoutes } from "@/content/site";

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

function AboutList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-px border border-border bg-border">
      {items.map((item) => (
        <li
          key={item}
          className="bg-surface px-5 py-4 text-sm font-medium leading-6 text-muted-strong"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <PageShell>
      <Section className="border-b border-border bg-surface py-18 sm:py-24">
        <div className="max-w-[var(--container-narrow)]">
          <SectionEyebrow>{aboutPage.eyebrow}</SectionEyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-foreground sm:text-5xl">
            {aboutPage.heading}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {aboutPage.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {aboutPage.ctas.map((cta) => (
              <ButtonLink key={cta.href} href={cta.href} variant={cta.variant}>
                {cta.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Project context"
            heading={aboutPage.whyExists.heading}
          />
          <AboutList items={aboutPage.whyExists.points} />
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-muted py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Principles"
            heading={aboutPage.principles.heading}
          />
          <AboutList items={aboutPage.principles.items} />
        </div>
      </Section>

      <Section className="bg-surface py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Current state"
            heading={aboutPage.currentState.heading}
          />
          <AboutList items={aboutPage.currentState.items} />
        </div>
      </Section>

      <Section className="bg-technical py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Maintainer" heading="Maintainer" dark />
          <article className="border border-slate-700 bg-technical-surface p-6">
            <p className="text-2xl font-semibold text-white">
              {aboutPage.maintainer.name}
            </p>
            <p className="mt-2 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft">
              {aboutPage.maintainer.role}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-technical-muted">
              {aboutPage.maintainer.bio}
            </p>
          </article>
        </div>
      </Section>
    </PageShell>
  );
}
