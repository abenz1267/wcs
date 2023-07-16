import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Focusable } from "@util/Focusable";

@customElement("x-sub-dialog-link")
export class SubDialogLink extends Focusable {
  @property()
  target = "";

  static styles = css`
    :host {
      text-decoration: underline;
    }

    :host(:hover) {
      cursor: pointer;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
