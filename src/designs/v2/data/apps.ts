import { categories } from './categories';

// ---------------------------------------------------------------------------
// The apps. Everything on the site (desktop, home, categories, app pages)
// is generated from this list, so adding an app = adding an entry here.
//
// TODO: "Lingo" is a working name with placeholder copy and no link yet.
// ---------------------------------------------------------------------------

export interface Feature {
  /** a Phosphor icon (https://phosphoricons.com), e.g. "ph:map-pin" */
  icon: string;
  title: string;
  body: string;
}

export interface App {
  slug: string;
  name: string;
  /** one short line */
  tagline: string;
  /** one sentence, shown on the app's page */
  description: string;
  /** category slugs; the first one is the app's home category */
  categories: string[];
  /** the app's one accent colour: [light theme, dark theme] */
  accent: [string, string];
  /** a Phosphor icon name, or "shell" for the custom shell glyph */
  icon: string;
  /** optional real icon in /public (e.g. "/icons/maple.png"); replaces the drawn icon */
  iconImage?: string;
  platforms: string[];
  status: 'live' | 'soon';
  /** who made it (leave out to hide the credit) */
  maker?: { name: string; url?: string };
  /** where to get it (leave out if there's no link yet) */
  link?: { label: string; href: string };
  features: Feature[];
  /** how the app is shown: an iPhone, a browser window or a Mac window */
  frame: 'phone' | 'browser' | 'mac';
  window: { title: string; url?: string; width: number; height: number };
  /** optional real screenshot in /public (e.g. "/screens/maple.png"); replaces the mock screen */
  screenshot?: string;
}

export const apps: App[] = [
  {
    slug: 'maple',
    name: 'Maple',
    tagline: 'Plan trips together on one live map.',
    description: 'Group chats, bookings and notes become one shared map that syncs live with friends.',
    categories: ['travel'],
    accent: ['#3d6ae0', '#7c9cf0'],
    icon: 'ph:map-trifold-fill',
    platforms: ['iPhone'],
    status: 'live',
    maker: { name: 'Dylan' },
    link: { label: 'App Store', href: 'https://apps.apple.com/sg/app/travel-planner-maple/id6789598399' },
    features: [
      { icon: 'ph:map-pin', title: 'Shared map', body: 'Every stop pinned, synced for everyone.' },
      { icon: 'ph:calendar-dots', title: 'Day by day', body: 'Swipe up for the itinerary.' },
      { icon: 'ph:cloud', title: 'No accounts', body: 'Syncs over iCloud.' },
    ],
    frame: 'phone',
    window: { title: 'Maple', width: 290, height: 600 },
  },
  {
    slug: 'letsrally',
    name: 'Let’s Rally',
    tagline: 'Find a free court nearby.',
    description: 'Live availability for 120 tennis and badminton venues across Sydney.',
    categories: ['sport', 'wellbeing'],
    accent: ['#527808', '#a9d14a'],
    icon: 'ph:tennis-ball-fill',
    platforms: ['Web'],
    status: 'live',
    // maker: { name: '' }, // TODO
    link: { label: 'Open site', href: 'https://letsrally.cc/' },
    features: [
      { icon: 'ph:map-trifold', title: '120 venues', body: 'Tennis and badminton across Sydney.' },
      { icon: 'ph:clock', title: 'Live availability', body: 'Filter by day, length and time.' },
      { icon: 'ph:heart', title: 'Favourites', body: 'Your regular clubs, one tap away.' },
    ],
    frame: 'browser',
    window: { title: 'Let’s Rally', url: 'letsrally.cc', width: 680, height: 450 },
  },
  {
    slug: 'conscious',
    name: 'Conscious',
    tagline: 'Pause before you scroll.',
    description: 'See where your screen time goes, then change it with gentle friction, limits and schedules.',
    categories: ['wellbeing'],
    accent: ['#6a5ae0', '#a397f4'],
    icon: 'shell',
    platforms: ['iPhone'],
    status: 'live',
    maker: { name: 'Andi' },
    link: { label: 'App Store', href: 'https://apps.apple.com/us/app/conscious-screen-time-controls/id6760968999' },
    features: [
      { icon: 'ph:wind', title: 'Mindful pauses', body: 'A 15-second breath before distracting apps.' },
      { icon: 'ph:hourglass-medium', title: 'Limits and schedules', body: 'Daily allowances and blocked hours.' },
      { icon: 'ph:lock-simple', title: 'Private', body: 'Your data stays on your phone.' },
    ],
    frame: 'phone',
    window: { title: 'Conscious', width: 290, height: 600 },
  },
  {
    slug: 'lingo', // working name
    name: 'Lingo',
    tagline: 'Talk to anyone, in any language.',
    description: 'Translate text, menus and conversations, with help saying it out loud.',
    categories: ['language', 'travel'],
    accent: ['#0e8577', '#4fc4b4'],
    icon: 'ph:translate-fill',
    platforms: ['iPhone'],
    status: 'live',
    features: [
      { icon: 'ph:microphone', title: 'Conversation mode', body: 'Both sides, turn by turn.' },
      { icon: 'ph:camera', title: 'Camera', body: 'Point at menus and signs.' },
      { icon: 'ph:speaker-high', title: 'Pronunciation', body: 'Phonetics and slow playback.' },
    ],
    frame: 'phone',
    window: { title: 'Lingo', width: 290, height: 600 },
  },
  {
    slug: 'findery',
    name: 'The Findery',
    tagline: 'Emerging Australian fashion, in one place.',
    description: 'Discover Australia’s best emerging fashion brands. Launching soon.',
    categories: ['style'],
    accent: ['#7a1a12', '#e0857a'],
    icon: 'ph:coat-hanger-fill',
    platforms: ['Web'],
    status: 'soon',
    link: { label: 'Join the waitlist', href: 'https://thefindery.app/' },
    features: [
      { icon: 'ph:sparkle', title: 'Emerging labels', body: 'Up-and-coming Australian designers.' },
      { icon: 'ph:storefront', title: 'One place', body: 'New brands without the endless scrolling.' },
      { icon: 'ph:bell', title: 'Waitlist open', body: 'Be first in when it launches.' },
    ],
    frame: 'browser',
    window: { title: 'The Findery', url: 'thefindery.app', width: 660, height: 450 },
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

export const appsIn = (categorySlug: string) => apps.filter((a) => a.categories.includes(categorySlug));

export const categoriesOf = (app: App) =>
  app.categories.map((slug) => categories.find((c) => c.slug === slug)).filter((c) => c !== undefined);

/** inline style that gives an element (and everything inside it) the app's accent */
export const accentStyle = (app: Pick<App, 'accent'>) =>
  `--accent-light:${app.accent[0]};--accent-dark:${app.accent[1]}`;
