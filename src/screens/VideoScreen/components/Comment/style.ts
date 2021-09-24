import { styled } from "../../../../infrastructure/theme/styled-component";

export const CommentContainer = styled.View`
  padding: ${(props) => props.theme.space.lg};
`;

export const CommentInputWrapper = styled.View`
  flex-direction: row;
  align-items: center
  margin-top: ${(props) => props.theme.space.lg};
`;
export const InputContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.md};
  padding-left: ${(props) => props.theme.space.lg};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-radius: ${(props) => props.theme.space.sm};
`;
