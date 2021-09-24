import { styled } from "../../../../infrastructure/theme/styled-component";

export const ChannelInfoContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space.lg};
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.colors.ui.quaternary};
`;
