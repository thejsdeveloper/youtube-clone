import { Scale } from "../../../infrastructure/theme/sizes";
import { styled } from "../../../infrastructure/theme/styled-component";

type DotProps = {
  size?: Scale;
  margin?: Scale;
};
export const Dot = styled.View<DotProps>`
  width: ${({ theme, size = "xxs" }) => theme.sizes[size]}};
  height: ${({ theme, size = "xxs" }) => theme.sizes[size]}};
  margin-left: ${({ theme, size = "sm" }) => theme.sizes[size]}};
  margin-right: ${({ theme, size = "sm" }) => theme.sizes[size]}};
  border-radius: 9999;
  background-color: ${(props) => props.theme.colors.ui.tertiary};
`;
