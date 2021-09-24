import { Video } from "expo-av";
import { ActivityIndicator } from "react-native";
import { styled } from "../../infrastructure/theme/styled-component";

export const VideoPlayer = styled(Video)`
  width: 100%;
`;

export const VideoLoader = styled(ActivityIndicator).attrs({
  animating: true,
})`
  position: absolute;
  top: 100px;
  left: 45%;
`;

export const LoaderContainer = styled.View`
  ${(props) => props.theme.colors.ui.primary}
`;
