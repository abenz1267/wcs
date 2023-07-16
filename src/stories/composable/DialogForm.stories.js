import { html } from "lit";
import "@visual/ThemeProvider";
import "@composable/Dialog";
import "@composable/Form";
import "@atomic/SubDialogLink";
import "@composable/RadioButtonGroup";
import "@atomic/RadioButton";
import "@composable/ButtonWrapper";
import "@atomic/Button";
import "@composable/SubDialog";

export default {
  title: "Composed/Dialog/Form",
  component: "x-dialog",
  argTypes: {
    title: {
      control: { type: "text" },
    },
    theme: {
      control: { type: "select" },
      options: ["light-default", "dark-default"],
    },
    background: {
      control: { type: "select" },
      options: ["modal", "modal-sub", "app"],
    },
  },
};

const Template = ({ theme, background, title }) =>
  html`
    <theme-provider theme="${theme}" background="${background}">
      <x-dialog title="${title}">
        <x-form id="mainform">
          <form>
            <x-input name="firstname" label="Fistname" initialFocus></x-input>
            <x-input name="lastname" label="Lastname"></x-input>
            <x-input name="email" label="Email" type="email" required></x-input>
            <x-sub-dialog-link target="sub">Open SubDialog</x-sub-dialog-link>
            <x-radio-button-group title="Selection" name="rdbtns">
              <x-radio-button value="sel1">Selection 1</x-radio-button>
              <x-radio-button value="sel2">Selection 2</x-radio-button>
            </x-radio-button-group>
            <x-button-wrapper>
              <x-button target="main" type="secondary">abort</x-button>
              <x-button target="mainform" type="primary" lastFocus
                >save</x-button
              >
            </x-button-wrapper>
          </form>
        </x-form>
        <x-sub-dialog name="sub" title="SubDialog">
          <x-form id="subform">
            <form>
              <x-input name="city" label="City" initialFocus></x-input>
              <x-input name="street" label="Street"></x-input>
              <x-button-wrapper>
                <x-button target="sub" type="secondary">abort</x-button>
                <x-button target="subform" type="primary" lastFocus
                  >save</x-button
                >
              </x-button-wrapper>
            </form>
          </x-form>
        </x-sub-dialog>
      </x-dialog>
    </theme-provider>
  `;

export const Default = Template.bind({});
Default.args = {
  theme: "light-default",
  background: "app",
  title: "Modal Dialog",
};

Default.parameters = {
  layout: "fullscreen",
};
