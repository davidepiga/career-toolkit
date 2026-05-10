// quartz/components/Footer.tsx (override)
//
// Replaces the default Quartz Footer with one that carries the toolkit-level
// attribution leading line, plus the configured links. Drop this file in
// `quartz/components/Footer.tsx` (overwrites the default).
//
// The leading line is impersonal: the toolkit attribution. Davide's name lives
// only on the About page and on the LinkedIn link below.

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p class="footer-attribution">
          Career Navigation Toolkit. Compiled from <a href="https://learning.unog.ch/interagency-career-week-2026">UN Inter-Agency Career Week 2026</a> sessions. See <a href="/about">About</a> for context.
        </p>
        <p class="footer-disclaimer">Independent resource. Not affiliated with, endorsed by, or produced by the United Nations, UNOG, or the organizers of UN Inter-Agency Career Week 2026. Written with the support of AI tools.</p>
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
