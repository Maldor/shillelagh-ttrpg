import { i18n } from "../../i18n"
import { QuartzComponentConstructor, QuartzComponentProps } from "../types"

function NotFound({ cfg }: QuartzComponentProps) {
  return (
    <article class="popover-hint">
      <h1>404, nothing here</h1>
	  <p>Your journey ends here, go back the way you came.</p>
      <p>{i18n(cfg.locale, "404")}</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
