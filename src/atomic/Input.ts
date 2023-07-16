import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { FormValue } from "@util/FormValue";

type HTMLInputTypeAttr = "text" | "password" | "email";

@customElement("x-input")
export class Input extends FormValue {
  @property()
  label = "";

  @property()
  type: HTMLInputTypeAttr = "text";

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  disabled = false;

  @property()
  value = "";

  @property()
  error = "";

  @property()
  name = "";

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  firstUpdated() {
    super.firstUpdated();
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      --left-margin: 4px;
    }

    label {
      font-size: 0.875em;
      font-weight: 700;
      margin-left: var(--left-margin);
      margin-bottom: 2px;
    }

    input {
      font-family: inherit;
      font-size: 1em;
      background: var(--input-background);
      color: var(--input-color);
      border: none;
      padding: 0;
      height: 1.75em;
      padding-left: var(--left-margin);
      border-radius: var(--border-radius-default);
      line-height: 1;
    }

    input:focus {
      outline: none;
      font-weight: 500;
      background: var(--input-focus-background);
      color: var(--input-focus-color);
    }

    input:disabled {
      background: var(--input-disabled-background);
      color: var(--input-disabled-color);
    }

    input.error {
      font-weight: 500;
      background: var(--input-error-background);
      color: var(--input-error-color);
      border: 2px solid currentColor;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      padding-left: calc(var(--left-margin) - 2px);
    }

    span {
      background: var(--input-error-color);
      color: var(--input-error-hint-color);
      font-size: 0.875em;
      font-weight: 700;
      padding-left: var(--left-margin);
      padding-top: 2px;
      padding-bottom: 6px;
      border-bottom-left-radius: var(--border-radius-default);
      border-bottom-right-radius: var(--border-radius-default);
    }
  `;

  render() {
    const classes = { error: this.error !== "" };

    return html`
      <label for="input">${this.label}${this.required ? "*" : ""}</label
      ><input
        id="input"
        type=${this.type}
        value=${this.value}
        ?required=${this.required}
        ?disabled=${this.disabled}
        class=${classMap(classes)}
        @input=${(e: InputEvent) => {
          this.value = (e.target as HTMLInputElement).value;
          this._internals.setFormValue(this.value);
        }}
      />
      ${when(this.error !== "", () => html`<span>${this.error}</span>`)}
    `;
  }
}
