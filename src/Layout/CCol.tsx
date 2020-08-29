import React from "react";
import { CCol as _CCol } from "@coreui/react";

const CCol = (props: any) => {
  // render
  return <_CCol {...props}>{props.children}</_CCol>;
};

export default CCol;
