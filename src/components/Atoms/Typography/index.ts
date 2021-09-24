import { Theme } from "../../../infrastructure/theme";
import { styled } from "../../../infrastructure/theme/styled-component";

const defautTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme) => `
  font-size: ${theme.fontSizes.body};
`;

const title = (theme: Theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.bold};
`;

const subTitle = (theme: Theme) => `
color: ${theme.colors.text.secondary}
`;

const label = (theme: Theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.h5};
  font-weight: ${theme.fontWeights.bold};
`;

const tag = (theme: Theme) => `
  color: ${theme.colors.text.tags}
`;

const boldRed = (theme: Theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.h5};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.highlight}
`;

const boldGrey = (theme: Theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.h5};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.text.secondary}
`;

const button = (theme: Theme) => `
  font-size: ${theme.fontSizes.button};
`;

const variants = {
  body,
  label,
  title,
  subTitle,
  tag,
  boldRed,
  boldGrey,
  button,
};

type TextProps = {
  variant: keyof typeof variants;
  theme: Theme;
};

export const YoutubeText = styled.Text<TextProps>`
  ${({ theme }) => defautTextStyles(theme)};
  ${({ variant, theme }) => variants[variant](theme)}
`;

YoutubeText.defaultProps = {
  variant: "body",
};
