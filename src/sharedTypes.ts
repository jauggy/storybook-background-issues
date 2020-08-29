/**
 *  "primary"|"secondary", etc.
 */
export type Color = typeof colorArray[number];
const colorArray = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "light",
  "dark",
] as const;
export { colorArray };
