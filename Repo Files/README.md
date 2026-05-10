---
type: repo-files-index
status: live
date: 2026-05-09
covers: Drop-in code files for the Quartz repo at /Users/davide/Projects/GitHub/career-toolkit/. The bin/sync.sh script can copy these into the repo, or you can copy them by hand once.
---

# Repo Files

Three files that need to be applied to the Quartz repo to complete the toolkit's published surface.

| Source (in this folder) | Destination in the repo | What it does |
|---|---|---|
| `quartz.layout.ts` | `/Users/davide/Projects/GitHub/career-toolkit/quartz.layout.ts` | Configures the Footer component with the toolkit's social links. Apply only the `Component.Footer({...})` block; keep the rest of your existing layout file as-is. |
| `Footer.tsx` | `/Users/davide/Projects/GitHub/career-toolkit/quartz/components/Footer.tsx` | Overrides the default Footer to carry the toolkit-level attribution line (impersonal). Davide's name does not appear in this line; it appears only on the About page and as the LinkedIn link inside the footer. |
| `custom.scss` | Append to `/Users/davide/Projects/GitHub/career-toolkit/quartz/styles/custom.scss` | Adds the dimension card grid styles for the Home page, and a subtle override for the footer attribution line. |

## Applying

The simplest path is to copy by hand once. The three files are stable; once applied they should not need to change again unless the toolkit's footer text or visual register changes.

If `bin/sync.sh` is set up to copy these alongside the markdown content, that works too; the files are versioned here in Drive and treated as the canonical source.

## Verification, after applying

1. Run `npx quartz build --serve` at the repo root.
2. Open `http://localhost:8080`. The footer at the bottom of every page should read:
   > Career Navigation Toolkit. Compiled from UN Inter-Agency Career Week 2026 sessions. See About for context.
   > About · Event coverage analysis · LinkedIn · Contact
3. The Home page should show two card grids: two foundation cards side by side, and five stage cards arranged in a row that wraps responsively.
4. The cards should react on hover (border colour change, slight lift).
5. On a 360px mobile viewport, the cards should stack to one column.

If any of the three steps fails, the issue is almost certainly a Quartz-version mismatch: the import paths or component signatures in newer Quartz versions can shift slightly. Read the failing file's existing default (in `quartz/components/Footer.tsx` for example) and align the import paths to match.
