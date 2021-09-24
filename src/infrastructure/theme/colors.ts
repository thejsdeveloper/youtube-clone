const youtubeRed = "#FF0000";
const almostBlack = "#282828";
const white = "#fff";
const grey = "#aaa";
const darkgrey = "#3d3d3d";
const black = "#000";
const blue = "#3ea6ff";
const error = "#D0421B";
const success = "#138000";

export type Brand = {
  primary: string;
  secondary: string;
  muted: string;
};

const brand: Brand = {
  primary: youtubeRed,
  secondary: almostBlack,
  muted: black,
};

export type UI = {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  disabled: string;
  muted: string;
  transparent: string;
};

const ui: UI = {
  primary: almostBlack,
  secondary: white,
  tertiary: grey,
  quaternary: darkgrey,
  disabled: grey,
  muted: black,
  transparent: "transparent",
};

export type BG = {
  primary: string;
  secondary: string;
};

const bg: BG = {
  primary: almostBlack,
  secondary: white,
};

export type Text = {
  primary: string;
  secondary: string;
  disabled: string;
  tags: string;
};

const text: Text = {
  primary: white,
  secondary: grey,
  disabled: grey,
  tags: blue,
};

export type Colors = {
  brand: Brand;
  ui: UI;
  bg: BG;
  text: Text;
};

export const colors: Colors = {
  brand: brand,
  ui: ui,
  bg: bg,
  text: text,
};
