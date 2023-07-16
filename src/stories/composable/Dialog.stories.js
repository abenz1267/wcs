import { html } from "lit";
import "@visual/ThemeProvider";
import "@composable/Dialog";
import "@composable/SubDialog";
import "@atomic/SubDialogLink";

export default {
  title: "Composed/Dialog/Bare",
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
        <x-sub-dialog name="subdialog" title="Sub Modal">
          <p>This is a SubDialog</p>
        </x-sub-dialog>
        <p>This is a Dialog</p>
        <x-sub-dialog-link data-target="subdialog"
          >Link For SubDialog</x-sub-dialog-link
        >
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
