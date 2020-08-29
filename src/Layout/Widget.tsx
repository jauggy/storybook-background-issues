import { CWidgetDropdown } from "@coreui/react";
import React from "react";

export interface WidgetProps {
  color?: string;
}

const Widget = (props: WidgetProps) => {
  // render
  return (
    <CWidgetDropdown
      color={props.color}
      header="9.823"
      text="Members online"
    ></CWidgetDropdown>
  );
};

export default Widget;
