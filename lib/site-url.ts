export function getConfiguredSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    return new URL(configuredUrl);
  }

  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }

  return undefined;
}

export function getSiteUrl() {
  return getConfiguredSiteUrl() ?? new URL("http://localhost:3000");
}

export function getAbsoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}
