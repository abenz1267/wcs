import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Focusable } from "@util/Focusable";

@customElement("x-radio-button")
export class RadioButton extends Focusable {
  @property()
  name = "";

  @property()
  value = "";

  @property({ type: Boolean })
  checked = false;

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static styles = css`
    :host {
      display: flex;
      align-items: center;
    }

    :is(label, input):hover {
      cursor: pointer;
    }

    div,
    input {
      font-size: 1em;
      height: 1em;
      width: 1em;
    }

    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    input {
      margin: 0;
      padding: 0;
    }

    div,
    span {
      border-radius: 50%;
    }

    span {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: var(--color-secondary);
      z-index: 1;
    }

    input:checked ~ span {
      border: 4px solid var(--color-secondary);
      background: var(--color-primary);
    }

    label {
      padding-left: 0.25em;
    }
  `;

  handleChange(e: Event) {
    {
      e.preventDefault();
      e.stopPropagation();

      if (!this.hasAttribute("checked")) {
        this.setAttribute("checked", "");
        this.setAttribute("aria-checked", this.checked.toString());
      }

      this.dispatchEvent(
        new CustomEvent("radio-button-checked", {
          detail: {
            value: (e.target as HTMLInputElement).value,
          },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  render() {
    return html`
      <div>
        <input
          type="radio"
          .checked=${this.checked}
          name=${this.name}
          value=${this.value}
          @change=${this.handleChange}
          id="input"
        />
        <span></span>
      </div>
      <label for="input"><slot></slot></label>
    `;
  }
}
