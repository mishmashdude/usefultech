// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // GitHub Pages serves the site at mishmashdude.github.io/usefultech.
  // On a custom domain: set `site` to it and remove `base`.
  site: 'https://mishmashdude.github.io',
  base: '/usefultech',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
