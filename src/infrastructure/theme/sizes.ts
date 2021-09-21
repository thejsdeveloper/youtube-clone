export type Scale = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type Sizes = Record<Scale, string>;

export const sizes: Sizes = {
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "64px",
  xxl: "128px",
};
