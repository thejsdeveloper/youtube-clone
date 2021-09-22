import React from "react";
import { FlexStyle, StyleProp, View, ViewStyle } from "react-native";
import { UI } from "../../../infrastructure/theme/colors";
import { Space } from "../../../infrastructure/theme/spacing";
import { styled } from "../../../infrastructure/theme/styled-component";

type ViewProps = Pick<
  FlexStyle,
  "alignItems" | "justifyContent" | "flexDirection"
> & {
  flex?: boolean;
  background?: keyof UI;
  children: React.ReactNode;
};

const ViewContainer = styled.View<ViewProps>`
  ${(props) => props.flex && `flex: 1`};
  ${({ justifyContent }) => `justify-content: ${justifyContent}`};
  ${({ alignItems }) => `align-items: ${alignItems}`};
  background-color: ${({ background, theme }) =>
    background ? theme.colors.ui[background] : "transparent"};
`;

type RowProps = Omit<ViewProps, "flexDirection">;

export const Row = ({
  justifyContent = "flex-start",
  alignItems = "center",
  flex = false,
  children,
  ...props
}: RowProps) => {
  return (
    <ViewContainer
      flexDirection="row"
      flex={flex}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </ViewContainer>
  );
};

type ColumnProps = Omit<ViewProps, "flexDirection">;

export const Column = ({
  justifyContent = "center",
  alignItems = "flex-start",
  flex = false,
  children,
  ...props
}: ColumnProps) => {
  return (
    <ViewContainer
      flexDirection="column"
      flex={flex}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </ViewContainer>
  );
};
