import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import Styles from "@/styles";

export type BackgroundType = "modal" | "modal-sub" | "app" | "transparent";

@customElement("background-provider")
export class BackgroundProvider extends LitElement {
  @property()
  background: BackgroundType = "modal";

  static styles = Styles;

  render() {
    return html`
      <div part="wrapper" class="${this.background}-background">
        <slot></slot>
      </div>
    `;
  }
}
