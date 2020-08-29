// Generated with util/create-component.js
import React from "react";
import Introduction from "./Introduction";
import { Story } from "@storybook/react/types-6-0";
import { IntroductionProps } from "./Introduction.types";

export default {
  title: "Introduction",
};

const Template: Story<IntroductionProps> = (args) => {
  return <Introduction />;
};

export const Read_Me = Template.bind({});
Read_Me.parameters = {
  docs: { page: null },
};
