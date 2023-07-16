import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

export const ELEMENT_FOCUSED_EVENT = "element-focused";
export const ELEMENT_INITIAL_FOCUSED_EVENT = "element-initial-focused";
export const ELEMENT_INITIAL_FOCUSED_REMOVED_EVENT =
  "element-initial-focused-removed";
export const ELEMENT_BLUR_EVENT = "element-blur";

export const ElementInitalFocusEvent = (el: HTMLElement) => {
  return FocusEvent(ELEMENT_INITIAL_FOCUSED_EVENT, el);
};

export const ElementInitialFocusRemove = () => {
  return FocusEvent(ELEMENT_INITIAL_FOCUSED_REMOVED_EVENT);
};

export const ElementBlurEvent = (el: HTMLElement) => {
  return FocusEvent(ELEMENT_BLUR_EVENT, el);
};

export const ElementFocusEvent = (el: HTMLElement) => {
  return FocusEvent(ELEMENT_FOCUSED_EVENT, el);
};

const FocusEvent = (event: string, el: HTMLElement | null = null) => {
  return new CustomEvent(event, {
    detail: {
      element: el,
    },
    bubbles: true,
    composed: true,
  });
};

@customElement("x-focus-trap")
export class FocusTrap extends LitElement {
  @state()
  private _initialFocus: HTMLElement | null = null;

  @state()
  private _currentFocus: HTMLElement | null = null;

  firstUpdated() {
    document.addEventListener(ELEMENT_INITIAL_FOCUSED_EVENT, (event) => {
      const e = event as CustomEvent;
      e.stopPropagation();
      this._initialFocus = e.detail.element;
    });

    document.addEventListener(
      ELEMENT_INITIAL_FOCUSED_REMOVED_EVENT,
      (event) => {
        const e = event as CustomEvent;
        e.stopPropagation();
        this._initialFocus = null;
        this._currentFocus = null;
      }
    );

    document.addEventListener(ELEMENT_FOCUSED_EVENT, (event) => {
      const e = event as CustomEvent;
      e.stopPropagation();
      this._currentFocus = e.detail.element;
    });

    document.addEventListener(ELEMENT_BLUR_EVENT, (event) => {
      const e = event as CustomEvent;
      e.stopPropagation();
      this._currentFocus = null;
    });

    this.addEventListener("keydown", (event) => {
      const e = event as KeyboardEvent;

      if (e.key == "Tab") {
        if (this._currentFocus == null && this._initialFocus != null) {
          e.stopPropagation();
          e.preventDefault();
          this._initialFocus.focus();
          return;
        }

        const el: Element | null = document.activeElement;

        if (el && (el as HTMLElement).hasAttribute("lastFocus")) {
          if (this._initialFocus != null) {
            e.preventDefault();
            e.stopPropagation();
            this._initialFocus.focus();
          }
        }
      }
    });
  }

  render() {
    return html`<slot></slot>`;
  }
}
