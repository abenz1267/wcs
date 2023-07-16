import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import {
  ElementBlurEvent,
  ElementFocusEvent,
  ElementInitalFocusEvent,
} from "@functional/FocusTrap";

export class Focusable extends LitElement {
  @property({ type: Boolean })
  initialFocus = false;

  @property({ type: Boolean })
  lastFocus = false;

  firstUpdated() {
    this.tabIndex = 0;

    this.addEventListener("focus", () => {
      this.dispatchEvent(ElementFocusEvent(this));

      if (this.initialFocus) {
        this.dispatchEvent(ElementInitalFocusEvent(this));
      }
    });

    this.addEventListener("blur", () => {
      this.dispatchEvent(ElementBlurEvent(this));
    });
  }
}
