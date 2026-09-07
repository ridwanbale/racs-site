import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "border-accent bg-accent text-white hover:bg-accent-strong hover:border-accent-strong",
  secondary:
    "border-border-strong bg-surface text-foreground hover:border-accent hover:text-accent-strong",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center border px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`;

  if (href.startsWith("http")) {
    return (
      <ExternalLink href={href} className={classes} {...props}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
