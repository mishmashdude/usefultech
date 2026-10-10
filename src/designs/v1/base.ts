import { join, root } from '../../lib/paths';

// All links in design 1 live under /v1.
export const base = `${root}/v1`;
export const to = (path = '/') => join(base, path);
