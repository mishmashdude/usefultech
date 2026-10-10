// Life areas the apps belong to. An app can live in more than one.

export interface Category {
  slug: string;
  name: string;
  description: string;
  /** a Phosphor icon (https://phosphoricons.com), e.g. "ph:airplane-tilt" */
  icon: string;
}

export const categories: Category[] = [
  { slug: 'travel', name: 'Travel', description: 'Getting there and getting around.', icon: 'ph:airplane-tilt' },
  { slug: 'sport', name: 'Sport', description: 'Find a court and play.', icon: 'ph:tennis-ball' },
  { slug: 'wellbeing', name: 'Wellbeing', description: 'Your time and attention, back.', icon: 'ph:flower-lotus' },
  { slug: 'language', name: 'Language', description: 'Be understood anywhere.', icon: 'ph:translate' },
  { slug: 'style', name: 'Style', description: 'Labels worth discovering.', icon: 'ph:coat-hanger' },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
