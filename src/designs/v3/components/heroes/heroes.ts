// Hero options for design 3's home page, while one gets picked.
// Each has its own page at /v3/hero/<slug>; /v3 shows `defaultHero`.
export const heroes = [
  { slug: 'statement', short: 'A', name: 'Statement', note: 'One big centred line over a slow liquid backdrop' },
  { slug: 'rotate', short: 'B', name: 'Rotating', note: 'The last word cycles through the categories' },
  { slug: 'inline', short: 'C', name: 'Inline', note: 'The categories are the headline, with real app icons' },
  { slug: 'index', short: 'D', name: 'Index', note: 'A giant category index; hover one to see its app' },
  { slug: 'combined', short: 'E', name: 'Combined', note: 'B’s rotating tagline on A’s light card; pills preview their apps' },
  { slug: 'original', short: 'O', name: 'Original', note: 'The first version, with screens over a map' },
] as const;

export type HeroSlug = (typeof heroes)[number]['slug'];

export const defaultHero: HeroSlug = 'combined';
