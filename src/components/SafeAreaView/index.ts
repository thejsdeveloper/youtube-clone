import { SafeAreaView } from "react-native";
import { styled } from "../../infrastructure/theme/styled-component";

export const SafeAreaViewContainer = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.ui.primary};
`;
