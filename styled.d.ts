import "styled-components";
import { Colors } from "./src/infrastructure/theme/colors";
import {
  Fonts,
  FontSizes,
  FontWeights,
} from "./src/infrastructure/theme/fonts";
import { Sizes } from "./src/infrastructure/theme/sizes";
import { Lineheight, Space } from "./src/infrastructure/theme/spacing";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    space: Space;
    lineHeights: Lineheight;
    sizes: Sizes;
    fonts: Fonts;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
  }
}
