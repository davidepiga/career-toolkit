import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p class="footer-attribution">
          Career Navigation Toolkit. Compiled from <a href="https://learning.unog.ch/interagency-career-week-2026" target="_blank" rel="noopener noreferrer">UN Inter-Agency Career Week 2026</a> sessions. Made by <a href="https://www.linkedin.com/in/davidepiga" target="_blank" rel="noopener noreferrer">Davide Piga</a>. See <a href="/about">About</a> for context.
        </p>
        <p class="footer-fineprint">
          Independent resource. Not affiliated with, endorsed by, or produced by the United Nations, UNOG, or the organizers of UN Inter-Agency Career Week 2026. Written with the support of AI tools.
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }
  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
