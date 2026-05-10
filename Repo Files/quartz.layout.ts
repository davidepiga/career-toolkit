// quartz.layout.ts (snippet)
//
// Two changes from the default Quartz layout:
// 1. The Footer component is configured with the toolkit's social links.
// 2. The default site title in the page header is left as-is; the rest of the
//    branding (the leading line of the footer) lives in the Footer.tsx override
//    in `quartz/components/Footer.tsx` (see Footer.tsx.snippet in this folder).
//
// To apply, replace the existing `Component.Footer({...})` call in your
// quartz.layout.ts with the block below. Other parts of the file remain.

import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// ... existing imports ...

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "About": "/about",
      "Event coverage analysis": "/agenda-coverage-audit",
      "LinkedIn": "https://www.linkedin.com/in/davidepiga",
      "Contact": "mailto:piga.davide@gmail.com",
    },
  }),
}

// ... rest of the file unchanged (defaultContentPageLayout, defaultListPageLayout, etc.)
