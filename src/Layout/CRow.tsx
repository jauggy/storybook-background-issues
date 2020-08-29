import React from "react";
import { CRow as _CRow } from "@coreui/react";

const CRow = (props: any) => {
  // render
  return <_CRow {...props}>{props.children}</_CRow>;
};

export default CRow;
