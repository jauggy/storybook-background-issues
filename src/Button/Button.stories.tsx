// Generated with util/create-component.js
import React from "react";
import Button from "./Button";
import { Story } from "@storybook/react/types-6-0";
import { ButtonProps } from "./Button.types";
import { Meta } from "@storybook/react/types-6-0";
import { colorArray } from "../sharedTypes";

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Normal = Template.bind({});
Normal.args = {
  color: "primary",
  children: "Button Text",
  variant: null,
};

export const Secondary = Template.bind({});
Secondary.args = { ...Normal.args, color: "secondary" };

export const Success = Template.bind({});
Success.args = { ...Normal.args, color: "success" };

export const Warning = Template.bind({});
Warning.args = { ...Normal.args, color: "warning" };

export const Danger = Template.bind({});
Danger.args = { ...Normal.args, color: "danger" };

export const Info = Template.bind({});
Info.args = { ...Normal.args, color: "info" };

export const Light = Template.bind({});
Light.args = { ...Normal.args, color: "light" };

export const Dark = Template.bind({});
Dark.args = { ...Normal.args, color: "dark" };

export const Link = Template.bind({});
Link.args = { ...Normal.args, color: "link" };

export const Disabled = Template.bind({});
Disabled.args = { ...Normal.args, disabled: true };

export const Sm = Template.bind({});
Sm.args = { ...Normal.args, size: "sm" };

export const Lg = Template.bind({});
Lg.args = { ...Normal.args, size: "lg" };

export const Outline = Template.bind({});
Outline.args = {
  color: "primary",
  children: "Button Text",
  variant: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  color: "primary",
  children: "Button Text",
  variant: "ghost",
};

export const Pill = Template.bind({});
Pill.args = {
  color: "primary",
  children: "Button Text",
  shape: "pill",
};

export default {
  title: "Components/Button",
  argTypes: {
    color: { control: { type: "select", options: colorArray } },
    variant: { control: { type: "select", options: ["outline", "ghost"] } },
    size: { control: { type: "select", options: ["sm", "lg"] } },
  },
} as Meta;
