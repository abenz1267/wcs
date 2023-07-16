import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("x-button-wrapper")
export class ButtonWrapper extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: space-between;
    }
  `;
  render() {
    return html`<slot></slot>`;
  }
}
