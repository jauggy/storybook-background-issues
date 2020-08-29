module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";
import { Story } from "@storybook/react/types-6-0";

export default {
    title: "${componentName}",
    component:${componentName}
};

`,
  extension: `.stories.tsx`,
});
