import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "@visual/BackgroundProvider";
import { ElementInitalFocusEvent } from "@functional/FocusTrap";

@customElement("x-dialog")
export class Dialog extends LitElement {
  @property()
  title = "Modal Title";

  @property()
  name = "";

  @state()
  _hasOpenSubDialog = false;

  firstUpdated() {
    this.setAttribute("role", "dialog");
    this.tabIndex = 0;

    this._addCloseListener();

    const initialFocus: HTMLElement | null =
      this.querySelector("[initialFocus]");

    // TODO: this needs a proper solution, not sure why it doesn't work
    // without the timeout, as we are in the firstUpdated() lifecycle
    // and the initialFocus element should already be present.
    // I assume the wrapped input isn't rendered yet.
    setTimeout(() => {
      initialFocus!.focus();
    }, 1);

    this.addEventListener("sub-dialog-opened", (e) => {
      e.stopPropagation();
      this._hasOpenSubDialog = true;
    });

    this.addEventListener("sub-dialog-closed", (event) => {
      const e = event as CustomEvent;

      e.stopPropagation();
      this._hasOpenSubDialog = false;

      const focusable: HTMLElement | null = this.querySelector(
        `x-sub-dialog-link[target="${e.detail.name}"]`
      );

      if (focusable) {
        focusable.focus();
      }

      this.dispatchEvent(ElementInitalFocusEvent(initialFocus!));
    });
  }

  static styles = css`
    :host {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      position: fixed;
      inset: 0;
      background: var(--modal-backdrop);
      backdrop-filter: blur(2px);
      z-index: 10000;
    }

    background-provider {
      position: relative;
      width: fit-content;
      right: 0;
      top: 0;
      bottom: 0;
      align-self: flex-end;
      z-index: 2;
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

    div {
      position: absolute;
      content: "";
      background: hsla(100 0% 0% / 0.4);
      inset: 0;
      display: none;
      z-index: 1000;
    }

    div.visible {
      display: block;
    }
  `;

  render() {
    return html`
      <background-provider background="modal">
        <div class=${this._hasOpenSubDialog ? "visible" : ""}></div>
        <h3>${this.title}</h3>
        <slot></slot>
      </background-provider>
    `;
  }

  private _addCloseListener() {
    const trigger = this.querySelector(`x-button[target="${this.name}"]`);

    trigger?.addEventListener("click", () => {
      this._emitCloseEvent();
    });

    trigger?.addEventListener("keypress", (event) => {
      const e = event as KeyboardEvent;

      switch (e.code) {
        case "Enter":
        case "Space":
          this._emitCloseEvent();
          break;
        default:
          return;
      }
    });
  }

  private _emitCloseEvent = () => {
    this.dispatchEvent(
      new CustomEvent("dialog-closed", {
        bubbles: true,
        composed: true,
      })
    );
  };
}
