import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("x-multi-column")
export class MultiColumn extends LitElement {
  @property({ type: Number })
  amount = 2;

  static styles = css`
    :host {
      display: grid;
      gap: var(--gap);
      grid-template-columns: repeat(var(--amount, 2), 1fr);
    }
  `;

  render() {
    return html` <style>
        :host {
          --amount: ${this.amount};
        }
      </style>
      <slot></slot>`;
  }
}
