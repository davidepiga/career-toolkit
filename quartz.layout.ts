import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

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
    Component.Explorer({
      sortFn: (a, b) => {
        const filePriority: Record<string, number> = {
          "about": 0,
          "career navigation model": 1,
          "event coverage analysis": 2,
        }
        const folderPriority: Record<string, number> = {
          "dimensions": 0,
          "frameworks": 1,
        }
        if (!a.isFolder && b.isFolder) return -1
        if (a.isFolder && !b.isFolder) return 1
        if (a.isFolder && b.isFolder) {
          const ai = folderPriority[a.displayName.toLowerCase()] ?? 99
          const bi = folderPriority[b.displayName.toLowerCase()] ?? 99
          return ai !== bi ? ai - bi : a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
        }
        const ai = filePriority[a.displayName.toLowerCase()] ?? 99
        const bi = filePriority[b.displayName.toLowerCase()] ?? 99
        return ai !== bi ? ai - bi : a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
      },
    }),
    Component.DesktopOnly(Component.Graph()),
  ],
  right: [
    Component.Backlinks(),
  ],
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
    Component.Explorer({
      sortFn: (a, b) => {
        const filePriority: Record<string, number> = {
          "about": 0,
          "career navigation model": 1,
          "event coverage analysis": 2,
        }
        const folderPriority: Record<string, number> = {
          "dimensions": 0,
          "frameworks": 1,
        }
        if (!a.isFolder && b.isFolder) return -1
        if (a.isFolder && !b.isFolder) return 1
        if (a.isFolder && b.isFolder) {
          const ai = folderPriority[a.displayName.toLowerCase()] ?? 99
          const bi = folderPriority[b.displayName.toLowerCase()] ?? 99
          return ai !== bi ? ai - bi : a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
        }
        const ai = filePriority[a.displayName.toLowerCase()] ?? 99
        const bi = filePriority[b.displayName.toLowerCase()] ?? 99
        return ai !== bi ? ai - bi : a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
      },
    }),
    Component.DesktopOnly(Component.Graph()),
  ],
  right: [],
}
