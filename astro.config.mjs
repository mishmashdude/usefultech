// @ts-check
import { defineConfig } from 'astro/config';

// Netlify (DEPLOY_TARGET=netlify) serves the site at the domain root.
// GitHub Pages still builds the same repo under /usefultech/.
const onNetlify = process.env.DEPLOY_TARGET === 'netlify';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: onNetlify ? 'https://usefultech.keebbuddy.com' : 'https://mishmashdude.github.io',
  base: onNetlify ? undefined : '/usefultech',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
