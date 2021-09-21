import { styled } from "../../infrastructure/theme/styled-component";
import React from "react";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

type flexProps =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

type FlexDirection = "row" | "column";

type ViewProps = {
  flexDirection: FlexDirection;
  justifyContent: flexProps;
  alignItems: flexProps;
};

type ViewContainerProps = Omit<ViewProps, "flexDirection"> & {
  children: React.ReactNode;
};

export const StyledContainer = styled.View<ViewProps>`
  ${({ flexDirection }) => `flex-direction: ${flexDirection};`}
  ${({ justifyContent }) => `justify-content: ${justifyContent};`}
  ${({ alignItems }) => `align-items: ${alignItems};`}
`;

export const Row = ({
  justifyContent,
  alignItems,
  children,
}: ViewContainerProps) => {
  return (
    <StyledContainer
      flexDirection="row"
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledContainer>
  );
};

Row.defaultProps = {
  justifyContent: "flex-start",
  alignItems: "center",
};
