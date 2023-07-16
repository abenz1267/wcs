import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "@visual/BackgroundProvider";

@customElement("x-sub-dialog")
export class Dialog extends LitElement {
  @property()
  title = "Modal Title";

  @state()
  private _open = false;

  firstUpdated() {
    this.setAttribute("role", "dialog");

    this.tabIndex = 0;
  }

  static styles = css`
    :host {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      width: 100%;
      transition: translate 150ms ease-in-out;
    }

    background-provider::part(wrapper) {
      display: flex;
      flex-direction: column;
      gap: var(--gap, 1em);
      height: 100dvh;
      box-sizing: border-box;
      padding: var(--background-padding, 1rem);
    }

    h3 {
      margin: 0;
      font-size: 1.5em;
    }
  `;

  private _name = "";

  @property()
  set name(val: string) {
    this._name = val;
    this._addOpenListener();
    this._addCloseListener();
  }

  get name() {
    return this._name;
  }

  render() {
    return html`
      <style>
        :host {
          translate: ${this._open ? "-100" : "0"}%;
        }
      </style>
      <background-provider background="modal-sub">
        <h3>${this.title}</h3>
        <slot></slot>
      </background-provider>
    `;
  }

  private _addOpenListener() {
    const trigger = this.parentNode!.querySelector(
      `x-sub-dialog-link[target="${this._name}"]`
    );

    trigger?.addEventListener("click", () => {
      this._setOpen();
    });

    trigger?.addEventListener("keypress", (event) => {
      const e = event as KeyboardEvent;

      switch (e.code) {
        case "Enter":
        case "Space":
          e.preventDefault();
          e.stopPropagation();
          this._setOpen();
          break;
        default:
          return;
      }
    });
  }

  private _addCloseListener() {
    const trigger = this.querySelector(`x-button[target="${this._name}"]`);

    trigger?.addEventListener("click", () => {
      this._setClosed();
    });

    trigger?.addEventListener("keypress", (event) => {
      const e = event as KeyboardEvent;

      switch (e.code) {
        case "Enter":
        case "Space":
          this._setClosed();
          break;
        default:
          return;
      }
    });
  }

  private _setOpen() {
    this._open = true;

    this.dispatchEvent(
      new CustomEvent("sub-dialog-opened", {
        bubbles: true,
        composed: true,
      })
    );

    const focusable: HTMLElement | null = this.querySelector(
      "[tabindex]:not([tabindex='-1']"
    );

    if (focusable) {
      focusable.focus();
    }
  }

  private _setClosed() {
    this._open = false;

    this.dispatchEvent(
      new CustomEvent("sub-dialog-closed", {
        detail: {
          name: this.name,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
