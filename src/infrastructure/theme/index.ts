import { DefaultTheme } from "styled-components";

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

export { Sizes, Fonts, FontSizes, FontWeights, Space, Lineheight };

export interface Theme {
  colors: Colors;
  space: Space;
  lineHeights: Lineheight;
  sizes: Sizes;
  fonts: Fonts;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  variant: Record<string, any>;
}

export const theme: DefaultTheme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};
