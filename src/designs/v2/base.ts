import { join, root } from '../../lib/paths';

// All links in design 2 live under /v2.
export const base = `${root}/v2`;
export const to = (path = '/') => join(base, path);
