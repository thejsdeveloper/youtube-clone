import { Colors, colors } from "./colors";
import { space, lineHeights, Space, Lineheight } from "./spacing";
import { Sizes, sizes } from "./sizes";
import {
  fonts,
  fontWeights,
  fontSizes,
  Fonts,
  FontSizes,
  FontWeights,
} from "./fonts";

export type Theme = {
  colors: Colors;
  space: Space;
  lineHeights: Lineheight;
  sizes: Sizes;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
};

export const theme: Theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
