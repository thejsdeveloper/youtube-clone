import { Theme } from "../../infrastructure/theme";
import { styled } from "../../infrastructure/theme/styled-component";

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
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.bold};
`;

const subTitle = (theme: Theme) => `
color: ${theme.colors.text.secondary}
`;

const label = (theme: Theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.bold};
`;

const caption = (theme: Theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  label,
  caption,
  title,
  subTitle,
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
