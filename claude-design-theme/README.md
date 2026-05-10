# Purposea — Quartz v4 theme package

Drop-in styling for [Quartz v4](https://quartz.jzhao.xyz/) that matches the
Purposea brand identity. Light + dark modes, brand fonts, restyled callouts,
search modal, sidebar, code blocks, tables, graph view.

## What's in here

| File | Drop into | Purpose |
|---|---|---|
| `quartz.config.colors.ts` | snippet → paste into `quartz.config.ts` | Color tokens (light + dark) |
| `custom.scss` | `quartz/styles/custom.scss` (REPLACE) | All component styling |
| `variables.scss` | `quartz/styles/variables.scss` (optional) | Width + weight overrides |
| `static/wordmark.svg` | `quartz/static/wordmark.svg` | Wordmark asset for the header |
| `static/favicon.svg` | `quartz/static/favicon.svg` | Favicon |
| `preview.html` | (don't copy — preview only) | Local fidelity check before installing |

## Install (3 steps)

### 1. Update `quartz.config.ts`

Open `quartz.config.ts` at the root of your Quartz project. Find the
`theme:` block inside the `configuration:` object. Replace it with:

```ts
theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Plus Jakarta Sans",
    body:   "Inter",
    code:   "JetBrains Mono",
  },
  colors: {
    lightMode: {
      light:         "#FAFAF7",
      lightgray:     "#E5E0D5",
      gray:          "#6B645A",
      darkgray:      "#1F3542",
      dark:          "#0B1F2A",
      secondary:     "#1F6F73",
      tertiary:      "#2FA7A0",
      highlight:     "rgba(199, 232, 229, 0.45)",
      textHighlight: "rgba(47, 167, 160, 0.20)",
    },
    darkMode: {
      light:         "#0B1F2A",
      lightgray:     "#1F3542",
      gray:          "#8B8479",
      darkgray:      "#E5E0D5",
      dark:          "#FAFAF7",
      secondary:     "#5DCDC5",
      tertiary:      "#2FA7A0",
      highlight:     "rgba(47, 167, 160, 0.12)",
      textHighlight: "rgba(47, 167, 160, 0.30)",
    },
  },
},
```

### 2. Replace `quartz/styles/custom.scss`

Copy `custom.scss` from this package into `quartz/styles/custom.scss`,
overwriting the empty default. The first line `@use "./base.scss"` keeps
Quartz's own reset; everything else is the Purposea overlay.

### 3. Add the assets

Copy `static/wordmark.svg` and `static/favicon.svg` into your project's
`quartz/static/` folder. Quartz auto-serves anything in there at the
site root.

If you want the wordmark in your page header, edit
`quartz.layout.ts` and override the title component:

```ts
import { PageTitle } from "./quartz/components"
// existing layout, change:
sharedPageComponents: {
  // ...
  pageTitle: () => (
    <a href="/">
      <img src="/wordmark.svg" alt="Purposea"
           style={{ height: 24, width: "auto", display: "block" }} />
    </a>
  ),
}
```

(Or use Quartz's existing `PageTitle` component — the SCSS will style
the text-only fallback fine via the `.page-title` rules.)

## Build

```bash
npx quartz build --serve
```

The first build pulls Plus Jakarta Sans, Inter, and JetBrains Mono from
Google Fonts. Subsequent builds use the cache (`cdnCaching: true`).

## What this does NOT do

- **Does not touch JS or routing.** Pure styling.
- **Does not change Quartz components themselves.** If you want a
  custom header layout, that's a separate Preact component edit
  (see step 3 above for the simplest version).
- **Does not ship a fallback font stack for offline.** If you need
  that, set `fontOrigin: "local"` in `quartz.config.ts` and put the
  WOFF2 files under `quartz/static/`.

## Customization knobs

Key variables you might want to tweak — all at the top of `custom.scss`:

| Variable | Default | What it controls |
|---|---|---|
| `--content-w` | `750px` | Max prose width |
| `--rail-w` | `320px` | Sidebar width |
| `--display-tracking` | `-0.025em` | Heading letter-spacing |
| `--eyebrow-fs` | `0.7rem` | Small-caps label size |

## Preview

Open `preview.html` in a browser to see all the patterns rendered
before you install. The preview is self-contained — it copies the
SCSS rules inline and uses sample markdown-style HTML.
