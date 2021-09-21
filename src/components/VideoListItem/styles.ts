import styled from "styled-components/native";

export const Image = styled.Image.attrs({
  aspectRatio: 16 / 9,
})`
  width: 100%;
`;

export const TimeContainer = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: ${(props) => props.theme.colors.ui.muted};
  opacity: 0.9;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.theme.space.sm};
  padding-right: ${(props) => props.theme.space.sm};
  border-radius: ${(props) => props.theme.sizes.xxs};
`;

export const TimeText = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const VideoDescriptionContainer = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space.md};
`;

export const Description = styled.View`
  flex-direction: column;
  margin-left: ${(props) => props.theme.space.lg};
  margin-right: ${(props) => props.theme.space.md};
`;
