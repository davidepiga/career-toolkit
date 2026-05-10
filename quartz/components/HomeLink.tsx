import { QuartzComponent, QuartzComponentConstructor } from "./types"

const HomeLink: QuartzComponent = () => {
  return (
    <div class="home-link-wrapper">
      <a href="/" class="home-link">Home</a>
    </div>
  )
}

HomeLink.css = `
.home-link-wrapper {
  margin-bottom: 0;
}
.home-link {
  display: block;
  color: var(--dark);
  text-decoration: none;
  opacity: 0.75;
  pointer-events: all;
}
.home-link:hover {
  color: var(--tertiary);
  opacity: 1;
}
`

export default (() => HomeLink) satisfies QuartzComponentConstructor
