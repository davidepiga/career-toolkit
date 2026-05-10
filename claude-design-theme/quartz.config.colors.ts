// ─── Purposea Quartz colors ──────────────────────────────────
// Paste this `colors` block into your quartz.config.ts inside
// `theme: { ... }`. Leave `cdnCaching`, `fontOrigin`, etc. alone.
//
// Quartz token → Purposea mapping
//   light          page background
//   lightgray      hairline borders, dividers
//   gray           secondary text, metadata, muted ui
//   darkgray       body text
//   dark           headings, strong text, primary ui
//   secondary      primary accent (links, brand)
//   tertiary       hover / visited / secondary accent
//   highlight      code-block / callout backgrounds
//   textHighlight  ::selection background
// ─────────────────────────────────────────────────────────────

const purposeaColors = {
  lightMode: {
    light:         "#FAFAF7",   // bone
    lightgray:     "#E5E0D5",   // line
    gray:          "#6B645A",   // muted
    darkgray:      "#1F3542",   // ink-soft
    dark:          "#0B1F2A",   // ink
    secondary:     "#1F6F73",   // teal-deep
    tertiary:      "#2FA7A0",   // teal
    highlight:     "rgba(199, 232, 229, 0.45)",  // teal-tint @45
    textHighlight: "rgba(47, 167, 160, 0.20)",   // teal @20
  },
  darkMode: {
    light:         "#0B1F2A",   // ink (page bg)
    lightgray:     "#1F3542",   // ink-soft (borders)
    gray:          "#8B8479",   // muted, lifted
    darkgray:      "#E5E0D5",   // line, used as body text on dark
    dark:          "#FAFAF7",   // bone (headings on dark)
    secondary:     "#5DCDC5",   // teal, lifted for AA contrast on ink
    tertiary:      "#2FA7A0",   // core teal
    highlight:     "rgba(47, 167, 160, 0.12)",
    textHighlight: "rgba(47, 167, 160, 0.30)",
  },
};

// Paste into your theme block like so:
//
//   theme: {
//     fontOrigin: "googleFonts",
//     cdnCaching: true,
//     typography: {
//       header: "Plus Jakarta Sans",
//       body:   "Inter",
//       code:   "JetBrains Mono",
//     },
//     colors: purposeaColors,
//   },
