import React from "react";
import { styled } from "../../infrastructure/theme/styled-component";

type ContainerProps = React.PropsWithChildren<React.ReactNode>;

export const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
