import Link from "next/link";
import { externalNavigation, primaryNavigation } from "@/content/navigation";
import { site } from "@/content/site";
import { ExternalLink } from "./ExternalLink";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex min-h-16 w-full max-w-[var(--container)] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-baseline gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent-strong"
          aria-label="RACS home"
        >
          <span className="font-mono text-base tracking-normal">{site.name}</span>
          <span className="hidden text-xs font-medium text-muted sm:inline">
            {site.fullName}
          </span>
        </Link>

        <nav
          className="flex items-center gap-4 text-sm font-medium text-muted-strong sm:gap-6"
          aria-label="Primary navigation"
        >
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent-strong"
            >
              {item.label}
            </Link>
          ))}
          {externalNavigation.map((item) => (
            <ExternalLink
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent-strong"
            >
              {item.label}
            </ExternalLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
