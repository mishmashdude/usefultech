# usefultech

A little collective of apps that support your life, made by friends.

Live at **https://usefultech.keebbuddy.com/** (also still published at https://mishmashdude.github.io/usefultech/).

Built with [Astro](https://astro.build) and plain CSS. No UI framework, very little JavaScript, and every page is static HTML.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321/usefultech/
npm run build      # static site in dist/
npm run preview    # serve the built site
```

Needs Node 22.12 or newer.

## Deploy

Every push to `main` deploys to Netlify through `.github/workflows/netlify.yml`, which publishes https://usefultech.keebbuddy.com. The same push still updates GitHub Pages through `.github/workflows/deploy.yml`.

On Netlify the site is served from the domain root (`DEPLOY_TARGET=netlify` in `astro.config.mjs`). GitHub Pages still uses `/usefultech/`. Links go through `to()` (each design's `base.ts`) or `root` (`src/lib/paths.ts`), so they pick up that prefix. Never hard-code a path like `/v3/…`.

## Three designs

The site currently holds three design directions side by side. `/` is a chooser, and the pill in the bottom-left corner of every page jumps to the same page in another design.

| URL | Design | |
| --- | --- | --- |
| `/v1/` | 1 · Playful | flat colours, pop-out buttons, a playable Mac desktop with hand-built mock screens (Nunito) |
| `/v2/` | 2 · Minimal | neutral and terse, one accent colour per app, the same desktop (Inter) |
| `/v3/` | 3 · Glass | monochrome and editorial: liquid glass, rounded cards, the apps' real screenshots (Geist) |

Each design has the same pages: `/vN/`, `/vN/categories`, `/vN/categories/<slug>` and `/vN/apps/<slug>`.

### Design 3: hero options (temporary)

Design 3's home page has six hero options while one gets picked. Each has its own page, and the pill in the bottom-right corner flips between them:

| URL | Option |
| --- | --- |
| `/v3/hero/statement/` | A · one big centred line over a slow liquid backdrop, category pills below |
| `/v3/hero/rotate/` | B · dark card; the last word cycles through the categories and lights up its pill |
| `/v3/hero/inline/` | C · the categories are the headline, each with a real app icon |
| `/v3/hero/index/` | D · a giant category index; hovering one shows its app |
| `/v3/hero/combined/` | E · B's rotating tagline on A's light card; pointing at a pill previews its apps (the default) |
| `/v3/hero/original/` | the first version, with screens over a map |

`/v3/` shows `defaultHero` from `src/designs/v3/components/heroes/heroes.ts`.
To settle on one: set `defaultHero`, then delete the other `Hero*.astro` files (and their entries in `Hero.astro`), `HeroSwitcher.astro` and `src/pages/v3/hero/`.

## Where things live

```
src/
  assets/screens/   real screenshots and icons (design 3)
  components/       shared: Icon (Phosphor icons), DesignSwitcher
  designs/vN/       one folder per design: data/, components/, layouts/, styles/, base.ts
  pages/            index (the chooser), 404, and the vN/ routes
```

Each design keeps its own copy of the content in `src/designs/vN/data/` (`apps.ts`, `categories.ts`, `site.ts`), because the copy differs: design 1 is lowercase and chatty, 2 and 3 are terse.
Internal links go through `to()` from the design's `base.ts`, which adds the `/vN` prefix.

### Design 3: real screens

- Each app in `src/designs/v3/data/apps.ts` lists `screens` (cards and the page hero) and `gallery` (the strip on its page).
- Images are files in `src/assets/screens/`, referenced by file name: `img('maple-icon.jpg')`. Astro turns them into responsive WebP at build time.
- `kind` is `phone` (a raw iPhone screen), `store` (an App Store image) or `browser` (a website capture, framed in a window).
- Icons: `icon: { image: img('…') }`, or a `monogram`, or a Phosphor `glyph`.
- An app without screens shows "Screens coming soon".
- `shortName` (optional) is used where space is tight, like the hero's category previews.
- Each category in `categories.ts` has a `word` for the hero tagline ("Apps that support your travels"). New categories just need one; they get a pill and a turn in the rotation automatically.

Where the current images came from:

- Maple and Conscious: their App Store listings. `maple-screen-*.jpg` are the phone screens cropped out of Maple's marketing images.
- Let's Rally and The Findery: captures of letsrally.cc and thefindery.app. `hero-map.jpg` is the Let's Rally capture, cropped.
- SayLens: `saylens-menu.jpg` is the app reading a Chinese menu, with tone-coloured pinyin on the photo. `saylens-icon.jpg` is the app icon.

Swap in fresh exports any time: keep the file names, or update `apps.ts`.

### Designs 1 and 2: mock screens

The screens inside the desktop windows are built in HTML (`src/designs/vN/components/mocks/`).
Set `screenshot: '/screens/<slug>.png'` on an app (file in `public/screens/`) to show a real image instead, and `iconImage` for a real icon.
The desktop lives in `src/designs/vN/components/MacDesktop.astro`; window positions and which apps open first are at the top of that file.

### Styles

Each design has its own `src/designs/vN/styles/global.css`: CSS variables, with a dark theme that swaps the same tokens.

- Design 1: a pastel `tone` per app; buttons with a hard edge underneath that press down.
- Design 2: neutral; each app's `accent` is set through `data-accent` (see `accentStyle()` in `apps.ts`).
- Design 3: `.glass` is the liquid glass (translucent fill, backdrop blur and saturation, a bright rim, a sheen that drifts on hover). It also has `.btn--solid`, `.btn--glass`, `.label`, `.display` and `.title`.

## Picking one

Once you settle on design N, make it the whole site:

1. Move everything in `src/pages/vN/` up into `src/pages/`, replacing the chooser `index.astro`. Each moved file is one folder shallower, so remove one `../` from its relative imports.
2. In `src/designs/vN/base.ts`, set `base = root` (drop the `/vN`).
3. Remove `<DesignSwitcher />` from `src/designs/vN/layouts/Base.astro`.
4. Delete the other `src/designs/v*` and `src/pages/v*` folders and `src/components/DesignSwitcher.astro`. Then drop the unused fonts from `package.json` (Nunito is design 1, Inter design 2, Geist design 3).

## Still to fill in

- [ ] makers for Let's Rally and The Findery (`maker` in `apps.ts`)
- [ ] an app icon for The Findery (design 3 shows a "TF" monogram)
