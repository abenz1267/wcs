import { Focusable } from "@util/Focusable";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

type ButtonType = "primary" | "secondary";
type ButtonSize = "small" | "medium";

@customElement("x-button")
export class Button extends Focusable {
  @property({ type: Boolean })
  disabled = false;

  @property()
  type: ButtonType = "primary";

  @property()
  size: ButtonSize = "medium";

  @property()
  target = "";

  constructor() {
    super();
    this.setAttribute("role", "button");
  }

  static styles = css`
    :host {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      font-size: 1em;
      height: 1.75em;
      padding-inline: 0.75em;
      font-weight: 400;
      user-select: none;
    }

    :host(:hover) {
      cursor: pointer;
    }

    :host(:focus:not(:focus-visible)) {
      outline: none;
    }

    :host(:focus) {
      outline: none;
    }

    :host([type="primary"]) {
      background: var(--button-primary-background, none);
      color: var(--button-primary-color);
    }

    :host([type="primary"]:is(:hover, :focus)) {
      background: var(--button-primary-hover-background, none);
      font-weight: 500;
    }

    :host([type="primary"]:active) {
      background: var(--button-primary-pressed-background, none);
      color: var(--button-primary-pressed-color);
      font-weight: 500;
    }

    :host([type="primary"][aria-disabled="true"]) {
      background: var(--button-primary-disabled-background, none);
      color: var(--button-primary-disabled-color);
    }

    :host([type="secondary"]) {
      background: var(--button-secondary-background, none);
      border: 1px solid currentColor;
      color: var(--button-secondary-color);
    }

    :host([type="secondary"]:is(:hover, :focus)) {
      background: var(--button-secondary-hover-background, none);
      color: var(--button-secondary-hover-color);
      font-weight: 500;
    }

    :host([type="secondary"]:active) {
      background: var(--button-secondary-pressed-background, none);
      color: var(--button-secondary-pressed-color);
      font-weight: var(--button-secondary-pressed-weight, 500);
    }

    :host([type="secondary"][aria-disabled="true"]) {
      background: var(--button-secondary-disabled-background, none);
      color: var(--button-secondary-disabled-color);
      font-weight: var(--button-secondary-disabled-weight, 400);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
