import { css } from "lit";

export default css`
  * {
    box-sizing: border-box;
  }

  :host {
    font-family: "PTRootUI";
    --border-radius-default: 2px;
  }

  /* format for variables: --type-(variation)-state-property */
  .theme-light-default {
    --color-primary: #025670;
    --color-secondary: #89fba8;

    --app-background: #e7eff1;

    --modal-background: var(--color-primary);
    --modal-sub-background: #01495f;
    --modal-backdrop: rgb(155 155 155 / 0.7);
    --modal-color: #b3ccd4;
    --modal-sub-color: var(--modal-color);

    --input-background: #e7eff1;
    --input-color: #171717;
    --input-focus-background: #ffffff;
    --input-focus-color: #171717;
    --input-disabled-background: #34788c;
    --input-error-background: #dfd0d6;
    --input-error-color: #d22244;
    --input-error-hint-color: #e7eff1;

    --button-primary-background: var(--color-secondary);
    --button-primary-color: var(--color-primary);
    --button-primary-hover-background: #d1f9de;
    --button-primary-hover-color: var(--color-primary);
    --button-primary-pressed-background: #57a672;
    --button-primary-pressed-color: #013343;
    --button-primary-disabled-background: #389886;
    --button-primary-disabled-color: var(--color-primary);
    --button-secondary-color: var(--color-secondary);
    --button-secondary-hover-color: var(--color-secondary);
    --button-secondary-pressed-color: #57a672;
    --button-secondary-disabled-color: #57a672;
  }

  .theme-dark-default {
    --color-primary: #013343;
    --color-secondary: #57a672;

    --app-background: #262626;

    --modal-background: var(--color-primary);
    --modal-sub-background: #01394b;
    --modal-backdrop: rgb(155 155 155 / 0.7);
    --modal-color: #b3ccd4;
    --modal-sub-color: var(--modal-color);

    --input-background: #1a4756;
    --input-color: #d1d5db;
    --input-focus-background: #335b68;
    --input-focus-color: #f3f4f6;
    --input-disabled-background: #00232f;
    --input-disabled-color: #5e6876;
    --modal-sub-input-background: red;
    --input-error-background: #352737;
    --input-error-color: #d22244;
    --input-error-hint-color: #e7eff1;

    --button-primary-background: var(--color-secondary);
    --button-primary-color: var(--color-primary);
    --button-primary-hover-background: #d1f9de;
    --button-primary-hover-color: var(--color-primary);
    --button-primary-pressed-background: var(--color-secondary);
    --button-primary-pressed-color: var(--color-primary);
    --button-primary-disabled-background: #497d65;
    --button-primary-disabled-color: var(--color-secondary);
    --button-secondary-color: var(--color-secondary);
    --button-secondary-hover-color: #89fba8;
    --button-secondary-pressed-color: var(--color-secondary);
    --button-secondary-disabled-color: var(--color-secondary);
    --button-secondary-disabled-weight: 300;
  }

  .modal-background {
    background: var(--modal-background);
    color: var(--modal-color, inherit);
  }

  .modal-sub-background {
    background: var(--modal-sub-background);
    color: var(--modal-sub-color, inherit);
    /* --input-background: var(--modal-sub-input-background, unset); */
  }

  .app-background {
    background: var(--app-background);
  }

  .transparent-background {
    background: transparent;
  }
`;
