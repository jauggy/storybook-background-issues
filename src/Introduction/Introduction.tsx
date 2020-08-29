// Generated with util/create-component.js
import React from "react";

import { IntroductionProps } from "./Introduction.types";

import "./Introduction.scss";
import { CCard, CCardHeader, CCardBody, CCardFooter } from "@coreui/react";

/**
 * This comment appears in Introduction.tsx
 */
const Introduction: React.FC<IntroductionProps> = (props) => {
  return (
    <div style={{ height: "100%" }}>
      <h3>Introduction</h3>
      <p>
        Select one of the components on the sidebar. Then adjust properties of
        the component in the Controls add-on at the bottom. Finally, click Docs
        in the top menu and then click "Show code" to see how to incorporate the
        component in your own application.
      </p>
    </div>
  );
};

export default Introduction;
