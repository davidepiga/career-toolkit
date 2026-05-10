import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileTrieNode } from "./quartz/util/fileTrie"

const explorerSort = (a: FileTrieNode, b: FileTrieNode): number => {
  const filePriority: Record<string, number> = {
    "about": 0,
    "career navigation model": 1,
    "event coverage analysis": 2,
  }
  const folderPriority: Record<string, number> = {
    "dimensions": 0,
    "frameworks": 1,
  }
  const dimensionPriority: Record<string, number> = {
    "mindset": 0,
    "capability": 1,
    "direction": 2,
    "presence": 3,
    "visibility": 4,
    "choice": 5,
    "pursuit": 6,
  }

  if (!a.isFolder && b.isFolder) return -1
  if (a.isFolder && !b.isFolder) return 1

  const aKey = a.displayName.toLowerCase()
  const bKey = b.displayName.toLowerCase()
  const alpha = (x: string, y: string) =>
    x.localeCompare(y, undefined, { numeric: true, sensitivity: "base" })

  if (a.isFolder && b.isFolder) {
    const ai = folderPriority[aKey] ?? 99
    const bi = folderPriority[bKey] ?? 99
    return ai !== bi ? ai - bi : alpha(aKey, bKey)
  }

  const aDim = dimensionPriority[aKey]
  const bDim = dimensionPriority[bKey]
  if (aDim !== undefined && bDim !== undefined) return aDim - bDim

  const ai = filePriority[aKey] ?? 99
  const bi = filePriority[bKey] ?? 99
  return ai !== bi ? ai - bi : alpha(aKey, bKey)
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "About": "/about",
      "Event coverage analysis": "/event-coverage-analysis",
      "LinkedIn": "https://www.linkedin.com/in/davidepiga",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.HomeLink(),
    Component.Explorer({ sortFn: explorerSort }),
    Component.DesktopOnly(Component.Graph()),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.HomeLink(),
    Component.Explorer({ sortFn: explorerSort }),
    Component.DesktopOnly(Component.Graph()),
  ],
  right: [],
}
