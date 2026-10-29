import type { ImageMetadata } from 'astro';
import { categories } from './categories';

// ---------------------------------------------------------------------------
// The apps, with their real screenshots (src/assets/screens).
// Maple + Conscious: from their App Store listings. Let's Rally + The Findery:
// captures of the live sites. SayLens: a simulator capture of the app reading a
// Chinese menu. Add an app = add an entry (and its screenshots).
// ---------------------------------------------------------------------------

const files = import.meta.glob<{ default: ImageMetadata }>('../../../assets/screens/*.{jpg,png}', { eager: true });

/** a screenshot from src/assets/screens by file name */
const img = (name: string): ImageMetadata => {
  const hit = files[`../../../assets/screens/${name}`];
  if (!hit) throw new Error(`Missing screenshot: src/assets/screens/${name}`);
  return hit.default;
};

export interface Shot {
  src: ImageMetadata;
  alt: string;
  /** phone = a raw iPhone screen, store = an App Store image, browser = a website capture */
  kind: 'phone' | 'store' | 'browser';
}

export interface Feature {
  /** a Phosphor icon, e.g. "ph:map-pin" */
  icon: string;
  title: string;
  body: string;
}

export interface App {
  slug: string;
  name: string;
  /** a shorter name for tight spots, like the category previews (defaults to the name) */
  shortName?: string;
  /** one short line */
  tagline: string;
  /** one sentence, shown on the app's page */
  description: string;
  /** category slugs; the first one is the app's home category */
  categories: string[];
  platforms: string[];
  status: 'live' | 'soon';
  /** who made it (leave out to hide the credit) */
  maker?: { name: string };
  /** where to get it (leave out if there's no link yet) */
  link?: { label: string; href: string };
  /** a real icon image, or a simple monogram / glyph tile */
  icon: { image?: ImageMetadata; monogram?: { text: string; bg: string; fg: string }; glyph?: string };
  frame: 'phone' | 'browser';
  /** the address shown on website captures */
  url?: string;
  /** real screens for cards and the hero: raw phone screens, or one website capture */
  screens: Shot[];
  /** everything for the gallery on the app's page */
  gallery: Shot[];
  features: Feature[];
}

export const apps: App[] = [
  {
    slug: 'maple',
    name: 'Maple',
    tagline: 'Plan trips together on one live map.',
    description: 'Group chats, bookings and notes become one shared map that syncs live with friends.',
    categories: ['travel'],
    platforms: ['iPhone'],
    status: 'live',
    maker: { name: 'Dylan' },
    link: { label: 'App Store', href: 'https://apps.apple.com/sg/app/travel-planner-maple/id6789598399' },
    icon: { image: img('maple-icon.jpg') },
    frame: 'phone',
    screens: [
      { src: img('maple-screen-3.jpg'), alt: 'Maple: a Sydney trip with stops pinned on the map', kind: 'phone' },
      { src: img('maple-screen-1.jpg'), alt: 'Maple: a Japan itinerary on a dark map', kind: 'phone' },
      { src: img('maple-screen-4.jpg'), alt: 'Maple: details for a saved stop', kind: 'phone' },
    ],
    gallery: [
      { src: img('maple-1.jpg'), alt: 'Your entire trip, presented beautifully', kind: 'store' },
      { src: img('maple-2.jpg'), alt: 'Everything you need, organised into collections', kind: 'store' },
      { src: img('maple-3.jpg'), alt: 'All your must-visits, pinned on the map', kind: 'store' },
      { src: img('maple-4.jpg'), alt: 'Each stop, easily saved', kind: 'store' },
      { src: img('maple-5.jpg'), alt: 'All your transport at a glance', kind: 'store' },
    ],
    features: [
      { icon: 'ph:map-pin', title: 'Shared map', body: 'Every stop pinned, synced for everyone.' },
      { icon: 'ph:calendar-dots', title: 'Day by day', body: 'Swipe up for the itinerary.' },
      { icon: 'ph:cloud', title: 'No accounts', body: 'Syncs over iCloud.' },
    ],
  },
  {
    slug: 'letsrally',
    name: 'Let’s Rally',
    tagline: 'Find a free court nearby.',
    description: 'Live availability for 120 tennis and badminton venues across Sydney.',
    categories: ['sport', 'wellbeing'],
    platforms: ['Web'],
    status: 'live',
    link: { label: 'Open site', href: 'https://letsrally.cc/' },
    icon: { image: img('letsrally-icon.png') },
    frame: 'browser',
    url: 'letsrally.cc',
    screens: [
      {
        src: img('letsrally.jpg'),
        alt: 'Let’s Rally: tennis and badminton venues across Sydney on a map, with free courts',
        kind: 'browser',
      },
    ],
    gallery: [
      {
        src: img('letsrally.jpg'),
        alt: 'Let’s Rally: tennis and badminton venues across Sydney on a map, with free courts',
        kind: 'browser',
      },
    ],
    features: [
      { icon: 'ph:map-trifold', title: '120 venues', body: 'Tennis and badminton across Sydney.' },
      { icon: 'ph:clock', title: 'Live availability', body: 'Filter by day, length and time.' },
      { icon: 'ph:heart', title: 'Favourites', body: 'Your regular clubs, one tap away.' },
    ],
  },
  {
    slug: 'conscious',
    name: 'Conscious',
    tagline: 'Pause before you scroll.',
    description: 'See where your screen time goes, then change it with gentle friction, limits and schedules.',
    categories: ['wellbeing'],
    platforms: ['iPhone'],
    status: 'live',
    maker: { name: 'Andi' },
    link: { label: 'App Store', href: 'https://apps.apple.com/us/app/conscious-screen-time-controls/id6760968999' },
    icon: { image: img('conscious-icon.jpg') },
    frame: 'phone',
    screens: [
      { src: img('conscious-4.jpg'), alt: 'Conscious: today’s productivity rings, pickups and timeline', kind: 'phone' },
      { src: img('conscious-6.jpg'), alt: 'Conscious: controls, from soft nudges to hard blocks', kind: 'phone' },
      { src: img('conscious-5.jpg'), alt: 'Conscious: weekly insights and top apps', kind: 'phone' },
    ],
    gallery: [
      { src: img('conscious-1.jpg'), alt: 'Otis, your personal otter screen-time guide', kind: 'store' },
      { src: img('conscious-2.jpg'), alt: 'See progress and insights weekly', kind: 'store' },
      { src: img('conscious-3.jpg'), alt: 'Control your screen time with tailored controls', kind: 'store' },
      { src: img('conscious-4.jpg'), alt: 'Today: productivity rings, pickups and timeline', kind: 'phone' },
      { src: img('conscious-5.jpg'), alt: 'Insights: your most-used apps this week', kind: 'phone' },
      { src: img('conscious-6.jpg'), alt: 'Controls: soft nudges, friction gates and hard blocks', kind: 'phone' },
    ],
    features: [
      { icon: 'ph:wind', title: 'Mindful pauses', body: 'A 15-second breath before distracting apps.' },
      { icon: 'ph:hourglass-medium', title: 'Limits and schedules', body: 'Daily allowances and blocked hours.' },
      { icon: 'ph:lock-simple', title: 'Private', body: 'Your data stays on your phone.' },
    ],
  },
  {
    slug: 'saylens',
    name: 'SayLens',
    tagline: 'Point at Chinese. See how to say it.',
    description: 'Tone-coloured pinyin, or Cantonese romanization, appears over a menu or sign so you can say it out loud.',
    categories: ['language', 'travel'],
    platforms: ['iPhone'],
    status: 'live',
    maker: { name: 'Andi' },
    link: { label: 'App Store', href: 'https://apps.apple.com/app/saylens-language-camera/id6821531032' },
    icon: { image: img('saylens-icon.jpg') },
    frame: 'phone',
    screens: [
      {
        src: img('saylens-menu.jpg'),
        alt: 'SayLens: a Chinese menu with tone-coloured pinyin over each dish',
        kind: 'phone',
      },
    ],
    gallery: [
      {
        src: img('saylens-menu.jpg'),
        alt: 'SayLens: a Chinese menu with tone-coloured pinyin over each dish',
        kind: 'phone',
      },
    ],
    features: [
      { icon: 'ph:camera', title: 'On the photo', body: 'Pinyin sits on each line of the menu or sign.' },
      { icon: 'ph:hand-tap', title: 'Tap a line', body: 'The meaning, and a voice to hear it.' },
      { icon: 'ph:lock-simple', title: 'On your iPhone', body: 'Reading stays on the device.' },
    ],
  },
  {
    slug: 'findery',
    name: 'The Findery',
    tagline: 'Emerging Australian fashion, in one place.',
    description: 'Discover Australia’s best emerging fashion brands. Launching soon.',
    categories: ['style'],
    platforms: ['Web'],
    status: 'soon',
    link: { label: 'Join the waitlist', href: 'https://thefindery.app/' },
    icon: { monogram: { text: 'TF', bg: '#6b0d0a', fg: '#efe6da' } },
    frame: 'browser',
    url: 'thefindery.app',
    screens: [
      { src: img('thefindery.jpg'), alt: 'The Findery: coming soon, with a waitlist sign-up', kind: 'browser' },
    ],
    gallery: [
      { src: img('thefindery.jpg'), alt: 'The Findery: coming soon, with a waitlist sign-up', kind: 'browser' },
    ],
    features: [
      { icon: 'ph:sparkle', title: 'Emerging labels', body: 'Up-and-coming Australian designers.' },
      { icon: 'ph:storefront', title: 'One place', body: 'New brands without the endless scrolling.' },
      { icon: 'ph:bell', title: 'Waitlist open', body: 'Be first in when it launches.' },
    ],
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

export const appsIn = (categorySlug: string) => apps.filter((a) => a.categories.includes(categorySlug));

export const categoriesOf = (app: App) =>
  app.categories.map((slug) => categories.find((c) => c.slug === slug)).filter((c) => c !== undefined);

/** the background map in the hero (a real Let's Rally capture, search bar trimmed) */
export const heroMap = img('hero-map.jpg');
