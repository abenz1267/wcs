import { html } from "lit";
import "@composable/Form";
import "@visual/ThemeProvider";
import "@visual/MultiColumn";
import "@composable/RadioButtonGroup";
import "@atomic/Button";

export default {
  title: "Composed/Form",
  component: "x-form",
  argTypes: {
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

const Template = ({ theme, background }) =>
  html`
    <theme-provider theme="${theme}" background="${background}">
      <x-form>
        <form>
          <x-input label="Label" type="text" value="" required></x-input>
          <x-input label="Label" type="text" value="" required></x-input>
          <x-multi-column amount="2">
            <x-input label="Label" type="text" value="" required></x-input>
            <x-input label="Label" type="text" value="" required></x-input>
          </x-multi-column>
          <x-multi-column amount="3">
            <x-input label="Label" type="text" value="" required></x-input>
            <x-input label="Label" type="text" value="" required></x-input>
            <x-input label="Label" type="text" value="" required></x-input>
          </x-multi-column>
          <x-multi-column amount="4">
            <x-input label="Label" type="text" value="" required></x-input>
            <x-input label="Label" type="text" value="" required></x-input>
            <x-input label="Label" type="text" value="" required></x-input>
            <x-input label="Label" type="text" value="" required></x-input>
          </x-multi-column>
          <x-input label="Label" type="text" value="" required></x-input>
          <x-radio-button-group>
            <x-radio-button value="first" name="radiobutton" checked
              >Button 1</x-radio-button
            >
            <x-radio-button value="second" name="radiobutton"
              >Button 2</x-radio-button
            >
          </x-radio-button-group>
          <x-radio-button-group title="RadioButtons with Title">
            <x-radio-button value="first" name="radiobutton2" checked
              >Button 1</x-radio-button
            >
            <x-radio-button value="second" name="radiobutton2"
              >Button 2</x-radio-button
            >
          </x-radio-button-group>
          <x-radio-button-group title="RadioButtons Vertical" layout="vertical">
            <x-radio-button value="first" name="radiobutton2" checked
              >Button 1</x-radio-button
            >
            <x-radio-button value="second" name="radiobutton2"
              >Button 2</x-radio-button
            >
          </x-radio-button-group>
          <x-button type="primary">Submit</x-button>
        </form>
      </x-form>
    </theme-provider>
  `;

export const Default = Template.bind({});
Default.args = {
  theme: "light-default",
  background: "modal",
};
