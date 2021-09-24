import { styled } from "../../infrastructure/theme/styled-component";

type ImageProps = typeof Image & {
  size?: number;
};

export const Avatar = styled.Image<ImageProps>`
  width: ${({ size = 50 }) => `${size}px`}
  height: ${({ size = 50 }) => `${size}px`}
  border-radius: 9999px;
`;
