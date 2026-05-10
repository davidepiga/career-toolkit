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
  margin-bottom: 0.25rem;
}
.home-link {
  display: block;
  font-size: 0.95rem;
  color: var(--dark);
  text-decoration: none;
  padding: 0.15rem 0;
  opacity: 0.85;
}
.home-link:hover {
  color: var(--secondary);
  opacity: 1;
}
`

export default (() => HomeLink) satisfies QuartzComponentConstructor
