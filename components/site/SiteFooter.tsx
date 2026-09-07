import { site } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-[var(--container)] flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="font-mono font-semibold text-foreground">{site.name}</p>
          <p>{site.fullName}</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <ExternalLink
            href={site.githubUrl}
            className="font-medium text-foreground transition-colors hover:text-accent-strong"
          >
            GitHub
          </ExternalLink>
          <p>{site.openSourceLabel} for risk-aware autonomous coordination.</p>
        </div>
      </div>
    </footer>
  );
}
