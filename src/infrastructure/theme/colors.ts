const youtubeRed = "#FF0000";
const almostBlack = "#282828";
const white = "#fff";
const grey = "#aaa";
const lightGrey = "#3d3d3d";
// const darkgrey = "#3d3d3d";
const black = "#1a1a1a";
const blue = "#3ea6ff";
// const error = "#D0421B";
// const success = "#138000";

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
  muted: string;
  transparent: string;
};

const ui: UI = {
  primary: almostBlack,
  secondary: white,
  tertiary: grey,
  quaternary: lightGrey,
  muted: black,
  transparent: "transparent",
};

export type BG = {
  primary: string;
  secondary: string;
  tertiary: string;
};

const bg: BG = {
  primary: almostBlack,
  secondary: white,
  tertiary: black,
};

export type Text = {
  primary: string;
  secondary: string;
  disabled: string;
  tags: string;
  highlight: string;
};

const text: Text = {
  primary: white,
  secondary: grey,
  disabled: grey,
  tags: blue,
  highlight: youtubeRed,
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
