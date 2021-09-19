type scale = "sm" | "md" | "lg" | "xl" | "xxl";

export type Sizes = Record<scale, string>;

export const sizes: Sizes = {
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "64px",
  xxl: "128px",
};
