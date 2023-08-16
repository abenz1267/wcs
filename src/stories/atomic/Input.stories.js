import { html } from "lit";
import "@visual/ThemeProvider";
import "@atomic/Input";

export default {
  title: "Atomic/Input",
  component: "x-input",
  argTypes: {
    label: { control: { type: "text" } },
    value: { control: { type: "text" } },
    error: { control: { type: "text" } },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password"],
    },
    theme: {
      control: { type: "select" },
      options: ["light-default", "dark-default"],
    },
    background: {
      control: { type: "select" },
      options: ["modal", "modal-sub"],
    },
    required: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
  },
};

const Template = ({
  label,
  type,
  value,
  required,
  disabled,
  theme,
  background,
  error,
}) =>
  html`
    <theme-provider theme="${theme}" background="${background}">
      <x-input
        label="${label}"
        type="${type}"
        value="${value}"
        .required=${required}
        .disabled=${disabled}
        error="${error}"
      ></x-input>
    </theme-provider>
  `;

export const Default = Template.bind({});
Default.args = {
  theme: "light-default",
  background: "modal",
  disabled: false,
  type: "text",
  label: "Label",
  value: "Value",
  error: "",
  required: true,
};
