import { styled } from "../../infrastructure/theme/styled-component";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
