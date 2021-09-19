const youtubeRed = "#FF0000";
const almostBlack = "#282828";
const white = "#fff";
const grey = "#aaa";
const darkgrey = "#3d3d3d";
const black = "#000";
const blue = "#3ea6ff";
const error = "#D0421B";
const success = "#138000";

const brand = {
  primary: youtubeRed,
  secondary: almostBlack,
  muted: black,
};

const ui = {
  primary: almostBlack,
  secondary: white,
  tertiary: grey,
  quaternary: darkgrey,
  tags: blue,
  disabled: grey,
  error: error,
  success: success,
};

const bg = {
  primary: almostBlack,
  secondary: white,
};

const text = {
  primary: white,
  secondary: grey,
  disabled: grey,
  inverse: white,
  error: error,
  success: success,
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
