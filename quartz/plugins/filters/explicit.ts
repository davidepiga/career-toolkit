import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const fm = vfile.data?.frontmatter
    return (
      fm?.publish === true ||
      fm?.publish === "true" ||
      fm?.status === "published"
    )
  },
})
