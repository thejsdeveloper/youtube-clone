import { TextInput } from "react-native";
import { Theme } from "../../../../infrastructure/theme";
import { styled } from "../../../../infrastructure/theme/styled-component";

export const CommentContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

export const CommentInputWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: ${(props) => props.theme.space.lg};
`;
export const InputContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.md};
  padding-left: ${(props) => props.theme.space.lg};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: ${(props) => props.theme.space.sm};
`;

export const CommentInput = styled.TextInput`
  color: ${(props) => props.theme.colors.text.primary};
  padding: ${(props) => props.theme.space.sm};
`;
