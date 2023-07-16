import { html } from "lit";
import "@visual/ThemeProvider";
import "@composable/RadioButtonGroup";
import "@atomic/RadioButton";

export default {
  title: "Composed/RadioButtonGroup",
  component: "x-radio-button",
  argTypes: {
    layout: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    theme: {
      control: { type: "select" },
      options: ["light-default", "dark-default"],
    },
    background: {
      control: { type: "select" },
      options: ["modal", "modal-sub"],
    },
    disabled: { control: { type: "boolean" } },
  },
};

const Template = ({ disabled, layout, theme, background }) =>
  html`
    <theme-provider theme="${theme}" background="${background}">
      <x-radio-button-group layout="${layout}">
        <x-radio-button
          value="value1"
          name="selection"
          ${disabled ? "disabled" : ""}
          >RadioButton Selection</x-radio-button
        >
        <x-radio-button checked value="value2" name="selection"
          >RadioButton Selection</x-radio-button
        >
      </x-radio-button-group>
    </theme-provider>
  `;

export const Default = Template.bind({});
Default.args = {
  theme: "light-default",
  background: "modal",
  layout: "horizontal",
  disabled: false,
};
