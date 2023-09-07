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
      btn.addEventListener("click", async () => {
        if (form == null) {
          return;
        }

        // const data = new FormData(form!);
        // console.log(Object.fromEntries(data));
        // form?.submit();
        // form?.serialize();
        const resp = await fetch(form.action, {
          method: "POST",
          body: new FormData(form!),
        });

        if (resp.headers.get("X-RedirectURL") !== null) {
          document.location.href = resp.headers.get("X-RedirectURL")!;
          return;
        }

        document.querySelector("#ajax")!.innerHTML = await resp.text();
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
