import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { User } from "../../../../../models";
import { Column, Row, Spacer, YoutubeText } from "../../../../components/Atoms";
import { Avatar } from "../../../../components/Avatar";
import { suffixNumber } from "../../../../utils";
import { ChannelInfoContainer } from "./styles";

type ChannelInfoProps = {
  user: User;
};
export const ChannelInfo = ({ user }: ChannelInfoProps) => {
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const subscribe = () => {
    setSubscribed(!subscribed);
  };

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
        <Pressable onPress={subscribe}>
          {!subscribed && (
            <YoutubeText variant="boldRed">SUBSCRIBE</YoutubeText>
          )}
          {subscribed && (
            <Row>
              <YoutubeText variant="boldGrey">SUBSCRIBED</YoutubeText>
              <Spacer position="left" size="lg">
                <MaterialCommunityIcons
                  name="bell-ring-outline"
                  size={24}
                  color="grey"
                />
              </Spacer>
            </Row>
          )}
        </Pressable>
      </Column>
    </ChannelInfoContainer>
  );
};
