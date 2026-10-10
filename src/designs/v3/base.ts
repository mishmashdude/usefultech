import { join, root } from '../../lib/paths';

// All links in design 3 live under /v3.
export const base = `${root}/v3`;
export const to = (path = '/') => join(base, path);
