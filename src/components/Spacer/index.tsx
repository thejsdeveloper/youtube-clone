import React from "react";
import { View } from "react-native";
import { DefaultTheme, useTheme } from "styled-components/native";
import { Space, Theme } from "../../infrastructure/theme";
import { styled } from "../../infrastructure/theme/styled-component";

type Position = "top" | "left" | "right" | "bottom";
type Size = keyof Omit<Space, "zero">;

const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};

type SpacerProps = {
  size: Size;
  position: Position;
  children: React.ReactNode;
};

const getVariant = (position: Position, size: Size, theme: DefaultTheme) => {
  const property = positionVariant[position];
  const value = theme.space[size];
  return `${property}:${value}`;
};

type SpacerViewType = {
  variant: string;
};

const SpacerView = styled.View<SpacerViewType>`
  ${({ variant }) => variant};
`;

export const Spacer = ({ size, position, children }: SpacerProps) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
