import { html } from "lit";
import "@atomic/Button";
import "@visual/ThemeProvider";

export default {
  title: "Atomic/Button",
  component: "x-button",
  argTypes: {
    text: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    theme: {
      control: { type: "select" },
      options: ["light-default", "dark-default"],
    },
    background: {
      control: { type: "select" },
      options: ["modal", "modal-sub"],
    },
  },
};

const Template = ({ text, type, size, disabled, theme, background }) =>
  html`
    <theme-provider theme="${theme}" background="${background}">
      <x-button type=${type} size=${size} aria-disabled=${disabled}
        >${text}</x-button
      >
    </theme-provider>
  `;

export const Default = Template.bind({});
Default.args = {
  theme: "light-default",
  background: "modal",
  disabled: false,
  text: "Button",
  type: "primary",
  size: "medium",
};
