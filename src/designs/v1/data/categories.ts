// Life areas the apps belong to. An app can live in more than one.
// `tone` picks one of the flat colors defined in ../styles/global.css.

export type Tone = 'sky' | 'lime' | 'lilac' | 'butter' | 'pink' | 'mint';

export interface Category {
  slug: string;
  name: string;
  /** short line under the name */
  blurb: string;
  description: string;
  /** any Phosphor icon, e.g. "ph:airplane-tilt-fill" (https://phosphoricons.com) */
  icon: string;
  tone: Tone;
}

export const categories: Category[] = [
  {
    slug: 'travel',
    name: 'travel',
    blurb: 'for going places',
    description: 'plan the trip, find your way, and actually talk to people when you get there.',
    icon: 'ph:airplane-tilt-fill',
    tone: 'sky',
  },
  {
    slug: 'sport',
    name: 'sport',
    blurb: 'for getting out and playing',
    description: 'less time organising games, more time actually playing them.',
    icon: 'ph:tennis-ball-fill',
    tone: 'lime',
  },
  {
    slug: 'wellbeing',
    name: 'wellbeing',
    blurb: 'for feeling more like yourself',
    description: 'tools that give you back your time and attention, and get you moving.',
    icon: 'ph:flower-lotus-fill',
    tone: 'lilac',
  },
  {
    slug: 'language',
    name: 'language',
    blurb: 'for talking to anyone',
    description: 'break the language barrier, whether you’re ordering a coffee or making a friend.',
    icon: 'ph:translate-fill',
    tone: 'butter',
  },
  {
    slug: 'style',
    name: 'style',
    blurb: 'for looking like you',
    description: 'find pieces that fit your style, size and budget without the endless scrolling.',
    icon: 'ph:coat-hanger-fill',
    tone: 'pink',
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
