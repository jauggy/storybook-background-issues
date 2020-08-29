import { Color } from "../sharedTypes";

// Generated with util/create-component.js
export interface CardArgs extends WhiteCardArgs {
  color?: Color;
}

export interface WhiteCardArgs {
  showHeader: boolean;
  showFooter: boolean;
  bodyText: string;
  headerText: string;
  footerText: string;
  borderColor?: Color;
  accentColor?: Color;
}
