import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
import { color } from "react-native-reanimated";
import { Column, Row, Spacer, YoutubeText } from "../../../../components/Atoms";
import { Avatar } from "../../../../components/Avatar";
import { colors } from "../../../../infrastructure/theme/colors";
import { CommentContainer, CommentInputWrapper, InputContainer } from "./style";

export const Comment = () => {
  //TODO: Chanage it to current user Image;
  const currentUserImage =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg";

  return (
    <CommentContainer>
      <Row>
        <Row flex alignItems="flex-end">
          <Spacer position="right" size="md">
            <YoutubeText variant="button">Comments</YoutubeText>
          </Spacer>
          <YoutubeText variant="subTitle">222</YoutubeText>
        </Row>
        <View
          style={{
            height: 20,
            width: 20,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
            }}
          >
            <MaterialIcons name="keyboard-arrow-up" size={15} color="white" />
          </View>
          <View
            style={{
              position: "absolute",
              top: 10,
            }}
          >
            <MaterialIcons name="keyboard-arrow-down" size={15} color="white" />
          </View>
        </View>
      </Row>
      <CommentInputWrapper>
        <Spacer position="right" size="md">
          <Avatar source={{ uri: currentUserImage }} size={25} />
        </Spacer>
        <InputContainer>
          <TextInput
            placeholder="Add a public comment..."
            placeholderTextColor={colors.text.disabled}
          />
        </InputContainer>
      </CommentInputWrapper>
    </CommentContainer>
  );
};
