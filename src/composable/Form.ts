import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@atomic/Input";

@customElement("x-form")
export class Form extends LitElement {
  @property()
  id = "";

  static styles = css`
    ::slotted(form) {
      --gap: 0.875em;
      --col-gap: var(--gap);
      --row-gap: var(--gap);
      display: flex;
      flex-direction: column;
      gap: var(--row-gap);
    }
  `;

  firstUpdated() {
    const form = this.querySelector("form");
    const btn = this.querySelector(`x-button[target="${this.id}"]`);

    if (btn === null) {
      console.error("Missing form submit button");
    } else {
      btn.addEventListener("click", () => {
        const data = new FormData(form!);
        console.log(Object.fromEntries(data));
        form?.submit();
      });
    }

    this.addEventListener("keypress", (e) => {
      console.log(e);
    });
  }

  render() {
    return html`<slot></slot>`;
  }
}
