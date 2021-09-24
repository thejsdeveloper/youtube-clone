import React from "react";
import { FlexStyle, StyleSheet, View } from "react-native";
import { colors, UI } from "../../../infrastructure/theme/colors";
import { styled } from "../../../infrastructure/theme/styled-component";

type ViewProps = Pick<
  FlexStyle,
  "alignItems" | "justifyContent" | "flexDirection" | "flexWrap"
> & {
  flex?: boolean;
  background?: keyof UI;
  children: React.ReactNode;
};

const ViewContainer = styled.View<ViewProps>`
  ${(props) => props.flex && `flex: 1`};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap}`};
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

export const AbsoluteFillView: React.FC = ({ children }) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: colors.ui.primary,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      {children}
    </View>
  );
};
