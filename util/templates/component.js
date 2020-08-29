module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.scss";

/**
 * The Props of this component is used by stories to tell what type the args are
 */
const ${componentName}: React.FC<${componentName}Props> = (props)  => null;

export default ${componentName};

`,
  extension: `.tsx`,
});
