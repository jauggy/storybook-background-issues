import { Color } from "../sharedTypes";

// Generated with util/create-component.js
export interface ButtonProps {
  color: ButtonColor;
  children: React.ReactNode;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  disabled?: boolean;
  size?: ButtonSize;
}

export type ButtonColor = Color | "link";

export type ButtonVariant = "ghost" | "outline";
export type ButtonShape = "square" | "pill";
export type ButtonSize = "sm" | "lg";
