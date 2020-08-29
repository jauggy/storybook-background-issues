import { Color } from "../sharedTypes";

// Generated with util/create-component.js
export interface SwitchProps {
  color: Color;
  variant?: SwitchVariant;
  shape?: SwitchShape;
  labelOn?: string;
  labelOff?: string;
  size?: SwitchSize;
  disabled?: boolean;
}

const switchVariants = ["3d", "outline", "opposite"] as const;
export { switchVariants };
export type SwitchVariant = typeof switchVariants[number];

const switchShapes = ["pill"] as const;
export { switchShapes };
export type SwitchShape = typeof switchShapes[number];

const switchSizes = ["sm", "lg"] as const;
export { switchSizes };
export type SwitchSize = typeof switchSizes[number];
