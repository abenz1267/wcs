import "@functional/FocusTrap";
import "@visual/BackgroundProvider";
import Styles from "@/styles";
import { BackgroundType } from "@visual/BackgroundProvider";
import { customElement, property } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement("theme-provider")
export class ThemeProvider extends LitElement {
  @property()
  theme = "light-default";

  @property()
  background: BackgroundType = "modal";

  static styles = [Styles];

  render() {
    return html`
      <x-focus-trap>
        <div class="theme-${this.theme}">
          <link rel="stylesheet" href="/font.css" />
          <background-provider background=${this.background}>
            <slot></slot>
          </background-provider>
        </div>
      </x-focus-trap>
    `;
  }
}
