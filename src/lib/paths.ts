// Where the site is served from: '' locally or on its own domain,
// '/usefultech' on GitHub Pages (the `base` in astro.config.mjs).
export const root = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * prefix + path, ending in a slash before any #hash
 * ('/v3' + '/apps/maple' → '/v3/apps/maple/'), so static hosts serve
 * the page directly instead of redirecting.
 */
export const join = (prefix: string, path = '/') => {
  const [page, hash] = path.split('#');
  const slashed = page.endsWith('/') ? page : `${page}/`;
  return `${prefix}${slashed}${hash === undefined ? '' : `#${hash}`}`;
};
