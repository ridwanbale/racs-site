import { ButtonLink } from "@/components/site/ButtonLink";
import { ExternalLink } from "@/components/site/ExternalLink";

type ReleaseIdentityBlockProps = {
  identity: {
    heading: string;
    note: string;
    fields: string[][];
    links: Array<{
      label: string;
      href: string;
    }>;
  };
};

export function ReleaseIdentityBlock({ identity }: ReleaseIdentityBlockProps) {
  return (
    <div className="border border-border bg-surface">
      <div className="border-b border-border bg-surface-subtle p-5">
        <h2 className="text-2xl font-semibold text-foreground">
          {identity.heading}
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">{identity.note}</p>
      </div>
      <dl className="grid gap-px bg-border md:grid-cols-2">
        {identity.fields.map(([label, value]) => (
          <div key={label} className="bg-surface p-4">
            <dt className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              {label}
            </dt>
            <dd className="mt-2 break-words font-mono text-sm font-semibold text-foreground">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col gap-3 border-t border-border p-5 sm:flex-row sm:flex-wrap">
        {identity.links.map((link, index) =>
          link.href.startsWith("http") ? (
            <ExternalLink
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center justify-center border border-border-strong bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent-strong"
            >
              {link.label}
            </ExternalLink>
          ) : (
            <ButtonLink
              key={link.href}
              href={link.href}
              variant={index === 0 ? "primary" : "secondary"}
            >
              {link.label}
            </ButtonLink>
          ),
        )}
      </div>
    </div>
  );
}
