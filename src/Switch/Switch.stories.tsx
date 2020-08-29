// Generated with util/create-component.js
import React from "react";
import { Story } from "@storybook/react/types-6-0";
import { CSwitch } from "@coreui/react";
import {
  SwitchProps,
  switchShapes,
  switchVariants,
  switchSizes,
} from "./Switch.types";

import { colorArray } from "../sharedTypes";

export default {
  title: "Components/Switch",
  argTypes: {
    color: { control: { type: "select", options: colorArray } },
    variant: { control: { type: "select", options: switchVariants } },
    shape: { control: { type: "select", options: switchShapes } },
    size: { control: { type: "select", options: switchSizes } },
  },
};

const FullTemplate: Story<SwitchProps> = (args) => {
  return (
    <CSwitch
      disabled={args.disabled}
      size={args.size}
      className={"mx-1"}
      shape={args.shape}
      color={args.color}
      variant={args.variant}
      defaultChecked
      onChange={(e: any) => console.log(e.target.checked)}
    />
  );
};

export const Normal = FullTemplate.bind({});
Normal.args = {
  color: "primary",
};

export const _3D = FullTemplate.bind({});
_3D.args = {
  color: "primary",
  variant: "3d",
};

export const Pill = FullTemplate.bind({});
Pill.args = {
  color: "primary",
  shape: "pill",
};

export const Size = FullTemplate.bind({});
Size.args = {
  color: "primary",
  size: "sm",
};

export const Disabled = FullTemplate.bind({});
Disabled.args = {
  color: "primary",
  disabled: true,
};

const LabelTemplate: Story<SwitchProps> = (args) => {
  return (
    <CSwitch
      labelOn={args.labelOn}
      labelOff={args.labelOff}
      className={"mx-1"}
      shape={args.shape}
      color={args.color}
      variant={args.variant}
      defaultChecked
      onChange={(e: any) => console.log(e.target.checked)}
    />
  );
};

export const Label = LabelTemplate.bind({});
Label.args = { ...Normal.args, labelOn: "\u2713", labelOff: "\u2715" };
