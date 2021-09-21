export type Fonts = {
  body: string;
  heading: string;
};

export type FontWeights = {
  regular: number;
  medium: number;
  bold: number;
};

export type FontSizes = {
  caption: string;
  button: string;
  body: string; // 14
  title: string; //18
  h5: string;
  h4: string;
  h3: string;
  h2: string;
  h1: string;
};

export const fonts: Fonts = {
  body: "Roboto_400Regular",
  heading: "Roboto_500Medium",
};

export const fontWeights: FontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontSizes: FontSizes = {
  caption: "12px",
  button: "14px",
  body: "14px", // 14
  title: "18px", //18
  h5: "24px",
  h4: "34px",
  h3: "45px",
  h2: "56px",
  h1: "112px",
};
