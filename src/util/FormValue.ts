import { Focusable } from "./Focusable";

export class FormValue extends Focusable {
  static formAssociated = true;

  _internals;

  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.setFormValue("");
  }
}
