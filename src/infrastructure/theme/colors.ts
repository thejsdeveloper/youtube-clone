const brand = {
  primary: "#2182BD",
  secondary: "#5282BD",
  muted: "#C6DAF7",
};

const ui = {
  primary: "#262626",
  secondary: "#757575",
  tertiary: "#F1F1F1",
  quaternary: "#FFFFFF",
  disabled: "#DEDEDE",
  error: "#D0421B",
  success: "#138000",
};

const bg = {
  primary: "#FFFFFF",
  secondary: "#F1F1F1",
};

const text = {
  primary: "#262626",
  secondary: "#757575",
  disabled: "#9C9C9C",
  inverse: "#FFFFFF",
  error: "#D0421B",
  success: "#138000",
};

export type Colors = {
  brand: typeof brand;
  ui: typeof ui;
  bg: typeof bg;
  text: typeof text;
};

export const colors: Colors = {
  brand: brand,
  ui: ui,
  bg: bg,
  text: text,
};
