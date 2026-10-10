import { categories, type Tone } from './categories';

// ---------------------------------------------------------------------------
// The apps. Everything in design 1 (home page, desktop, categories, app pages)
// is generated from this list, so adding an app = adding an entry here.
//
// TODO: lingo is a working name with placeholder copy (no link yet), and the
// commented-out makers need real names.
// ---------------------------------------------------------------------------

export interface Feature {
  icon: string;
  title: string;
  body: string;
}

export interface App {
  slug: string;
  name: string;
  /** what it is, in two or three words */
  kind: string;
  tagline: string;
  description: string;
  /** category slugs; the first one is the app's home category */
  categories: string[];
  tone: Tone;
  /** a Phosphor icon name, or "shell" for the custom shell glyph */
  icon: string;
  /** optional glyph colors, to echo the real app icon */
  glyph?: { fill: string; detail: string };
  /** optional real icon in /public (e.g. "/icons/maple.png"). replaces the flat icon. */
  iconImage?: string;
  platforms: string[];
  status: 'live' | 'soon';
  /** who made it (leave out to hide the credit) */
  maker?: { name: string; url?: string };
  link: { label: string; href: string };
  /** three short selling points, shown as stickers */
  highlights: string[];
  features: Feature[];
  /** a little notification that floats next to the app */
  toast: { icon: string; title: string; text: string };
  /** how the app is shown: an iPhone, a browser window or a Mac window */
  frame: 'phone' | 'browser' | 'mac';
  window: { title: string; url?: string; width: number; height: number };
  /** optional real screenshot in /public (e.g. "/screens/maple.png"). replaces the mock UI. */
  screenshot?: string;
}

export const apps: App[] = [
  {
    slug: 'maple',
    name: 'maple',
    kind: 'trip planner',
    tagline: 'turn group-chat chaos into one live, shared map.',
    description:
      'maple takes your messy group chats, confirmation emails and random notes, and puts them all on one interactive map that syncs live with your friends.',
    categories: ['travel'],
    tone: 'sky',
    icon: 'ph:map-trifold-fill',
    platforms: ['iPhone'],
    status: 'live',
    maker: { name: 'dylan' },
    link: { label: 'get maple', href: 'https://apps.apple.com/sg/app/travel-planner-maple/id6789598399' },
    highlights: ['live shared map', 'day-by-day itinerary', 'no accounts needed'],
    features: [
      {
        icon: 'ph:map-pin-area-fill',
        title: 'every stop, pinned',
        body: 'hotels, restaurants and sights become pins, so it’s obvious what’s close together and what’s across town.',
      },
      {
        icon: 'ph:users-three-fill',
        title: 'plan as a group',
        body: 'invite friends and the map updates live for everyone. no accounts to create, it all syncs over icloud.',
      },
      {
        icon: 'ph:airplane-tilt-fill',
        title: 'everything in one place',
        body: 'flights, stays, tickets and documents, plus notes and a calendar so you never double-book an afternoon.',
      },
    ],
    toast: { icon: 'ph:map-pin-fill', title: 'noor pinned a stop', text: 'fushimi inari · kyoto, day 5' },
    frame: 'phone',
    window: { title: 'maple', width: 290, height: 600 },
  },
  {
    slug: 'letsrally',
    name: 'let’s rally',
    kind: 'court finder',
    tagline: 'find a free court near you. then go play.',
    description:
      'let’s rally puts 120 tennis and badminton venues across sydney on one live map, so you can see which courts are free for your day and time, then go and book.',
    categories: ['sport', 'wellbeing'],
    tone: 'lime',
    icon: 'ph:tennis-ball-fill',
    platforms: ['web'],
    status: 'live',
    // maker: { name: '' }, // TODO: add the maker
    link: { label: 'visit let’s rally', href: 'https://letsrally.cc/' },
    highlights: ['120 venues', 'live availability', 'tennis + badminton'],
    features: [
      {
        icon: 'ph:map-trifold-fill',
        title: 'every court on one map',
        body: 'tennis and badminton venues across sydney, pinned and searchable in one place.',
      },
      {
        icon: 'ph:clock-fill',
        title: 'see what’s free',
        body: 'pick a day, court time and time of day, and see which venues still have courts open.',
      },
      {
        icon: 'ph:heart-fill',
        title: 'keep your favourites',
        body: 'save your regular clubs so the next booking is one tap away.',
      },
    ],
    toast: { icon: 'ph:check-circle-fill', title: '6 courts free', text: 'camperdown tennis · tonight' },
    frame: 'browser',
    window: { title: 'let’s rally', url: 'letsrally.cc', width: 680, height: 450 },
  },
  {
    slug: 'conscious',
    name: 'conscious',
    kind: 'screen time',
    tagline: 'pause before you scroll, and see where your time really goes.',
    description:
      'most screen-time apps either lock you out or do nothing. conscious shows you what’s really happening first, then gives you controls that actually work: gentle friction, daily limits and scheduled blocks.',
    categories: ['wellbeing'],
    tone: 'lilac',
    icon: 'shell',
    glyph: { fill: '#ffd8bd', detail: '#d9845a' },
    platforms: ['iPhone'],
    status: 'live',
    maker: { name: 'andi' },
    link: {
      label: 'get conscious',
      href: 'https://apps.apple.com/us/app/conscious-screen-time-controls/id6760968999',
    },
    highlights: ['breathing pauses', 'productivity rings', 'stays on your phone'],
    features: [
      {
        icon: 'ph:wind-fill',
        title: 'mindful friction',
        body: 'a 15-second breathing pause when you open a distracting app, with “don’t open” as the default.',
      },
      {
        icon: 'ph:hourglass-medium-fill',
        title: 'limits that hold',
        body: 'daily allowances for any app or category, plus scheduled blocks for the hours you know are risky.',
      },
      {
        icon: 'ph:chart-donut-fill',
        title: 'insights you’ll use',
        body: 'productivity rings, a 7-day chart and a timeline of where you actually picked up your phone.',
      },
    ],
    toast: { icon: 'ph:wind-fill', title: 'take a breath', text: 'social opens in 15 seconds' },
    frame: 'phone',
    window: { title: 'conscious', width: 290, height: 600 },
  },
  {
    slug: 'lingo', // working name: swap in the real one
    name: 'lingo',
    kind: 'translator',
    tagline: 'talk to anyone, anywhere, in your own words.',
    description:
      'lingo translates text, menus and real conversations, with pronunciation help so you can actually say it out loud.',
    categories: ['language', 'travel'],
    tone: 'butter',
    icon: 'ph:chat-circle-dots-fill',
    platforms: ['iPhone'],
    status: 'live',
    // maker: { name: '' }, // TODO: add the maker
    link: { label: 'get lingo', href: '#' },
    highlights: ['conversation mode', 'camera translate', 'phrasebook'],
    features: [
      {
        icon: 'ph:microphone-fill',
        title: 'conversation mode',
        body: 'talk naturally and lingo translates both sides, turn by turn.',
      },
      {
        icon: 'ph:camera-fill',
        title: 'point and translate',
        body: 'menus, signs and labels, translated right on your camera.',
      },
      {
        icon: 'ph:speaker-high-fill',
        title: 'say it right',
        body: 'phonetic spelling and slow playback for every phrase you save.',
      },
    ],
    toast: { icon: 'ph:star-fill', title: 'saved to phrasebook', text: '“where’s the nearest station?”' },
    frame: 'phone',
    window: { title: 'lingo', width: 290, height: 600 },
  },
  {
    slug: 'findery',
    name: 'the findery',
    kind: 'fashion discovery',
    tagline: 'discover australia’s best emerging fashion brands.',
    description:
      'the findery is a new home for up-and-coming australian labels, so you can find designers you won’t see on every high street. it’s launching soon: join the waitlist to be first in.',
    categories: ['style'],
    tone: 'pink',
    icon: 'ph:coat-hanger-fill',
    platforms: ['web'],
    status: 'soon',
    // maker: { name: '' }, // TODO: add the maker
    link: { label: 'join the waitlist', href: 'https://thefindery.app/' },
    highlights: ['emerging aussie labels', 'curated, not cluttered', 'launching soon'],
    features: [
      {
        icon: 'ph:sparkle-fill',
        title: 'new labels first',
        body: 'a curated edit of emerging australian designers, not the same big names as everywhere else.',
      },
      {
        icon: 'ph:map-pin-fill',
        title: 'proudly australian',
        body: 'every label is an emerging australian brand, so your next favourite might be from just down the road.',
      },
      {
        icon: 'ph:bell-ringing-fill',
        title: 'be first in',
        body: 'join the waitlist and you’ll hear the moment the findery opens its doors.',
      },
    ],
    toast: { icon: 'ph:sparkle-fill', title: 'new label added', text: 'linen sets, made in byron bay' },
    frame: 'browser',
    window: { title: 'the findery', url: 'thefindery.app', width: 660, height: 450 },
  },
];

export const getApp = (slug: string) => apps.find((a) => a.slug === slug);

export const appsIn = (categorySlug: string) =>
  apps.filter((a) => a.categories.includes(categorySlug));

export const categoriesOf = (app: App) =>
  app.categories.map((slug) => categories.find((c) => c.slug === slug)).filter((c) => c !== undefined);
