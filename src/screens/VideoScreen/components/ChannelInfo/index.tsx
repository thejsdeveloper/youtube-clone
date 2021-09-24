import React from "react";
import { View, Text } from "react-native";
import { User } from "../../../../../models";
import { Column, Row, Spacer, YoutubeText } from "../../../../components/Atoms";
import { Avatar } from "../../../../components/Avatar";
import { suffixNumber } from "../../../../utils";
import { ChannelInfoContainer } from "./styles";

type ChannelInfoProps = {
  user: User;
};
export const ChannelInfo = ({ user }: ChannelInfoProps) => {
  return (
    <ChannelInfoContainer>
      <Avatar source={{ uri: user.image }} size={40} />
      <Column flex>
        <Spacer position="left" size="lg">
          <YoutubeText variant="title">{user.name}</YoutubeText>
          {user.subscribers && (
            <Spacer position="top" size="sm">
              <YoutubeText variant="subTitle">
                {suffixNumber(user.subscribers)} subscribers
              </YoutubeText>
            </Spacer>
          )}
        </Spacer>
      </Column>
      <Column>
        <YoutubeText variant="highlight">SUBSCRIBE</YoutubeText>
      </Column>
    </ChannelInfoContainer>
  );
};
