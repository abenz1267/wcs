import { css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { RadioButton } from "@atomic/RadioButton";
import { when } from "lit/directives/when.js";
import { FormValue } from "@util/FormValue";

type RadioButtonGroupLayout = "horizontal" | "vertical";

@customElement("x-radio-button-group")
export class RadioButtonGroup extends FormValue {
  @property()
  name = "";

  @property()
  title = "";

  @property({ type: Boolean })
  required = false;

  @property()
  layout: RadioButtonGroupLayout = "horizontal";

  @state()
  private _btns: NodeListOf<RadioButton> | null = null;

  constructor() {
    super();
    this.setAttribute("role", "radiogroup");
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.25em;
    }

    h3 {
      margin: 0;
      font-size: 1.125em;
      font-weight: 500;
    }
  `;

  firstUpdated() {
    this._btns = this.querySelectorAll("x-radio-button");
    this.addEventListener("radio-button-checked", this._handleChange);
  }

  private _handleChange(event: Event) {
    const e = event as CustomEvent;

    this._btns!.forEach((b: RadioButton) => {
      if (b.value !== (e as CustomEvent).detail.value) {
        b.removeAttribute("checked");
        b.setAttribute("aria-checked", "false");
      }
    });

    this._internals.setFormValue(e.detail.value);
  }

  render() {
    return html`
      <style>
        slot {
          display: flex;
          flex-direction: ${this.layout === "vertical" ? "column" : "row"};
          gap: ${this.layout === "vertical" ? "0.25em" : "1em"};
        }
      </style>
      ${when(
        this.title,
        () => html`<h3>${this.title}${this.required ? "*" : ""}</h3>`
      )}
      <slot></slot>
    `;
  }
}
