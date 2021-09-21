import React, { useMemo } from "react";
import { View, Pressable } from "react-native";

import {
  Description,
  Image,
  TimeContainer,
  TimeText,
  VideoDescriptionContainer,
} from "./styles";
import { Video } from "../../../models";
import { Avatar } from "../Avatar";
import { YoutubeText } from "../Typography";
import { Spacer } from "../Spacer";
import { Row } from "../Container";
import { Dot } from "../Dot";
import { suffixNumber } from "../../utils";
import { Entypo } from "@expo/vector-icons";

type VideoListItemProps = {
  video: Video;
};

export const VideoListItem = ({ video }: VideoListItemProps) => {
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  const viewsString = useMemo(() => suffixNumber(video.views), [video.views]);

  return (
    <Pressable>
      <View>
        <Image source={{ uri: video.thumbnail }} />
        <TimeContainer>
          <TimeText>
            {minutes}:{seconds < 10 ? "0" : ""}
            {seconds}
          </TimeText>
        </TimeContainer>
      </View>
      <VideoDescriptionContainer>
        <Avatar source={{ uri: video.user.image }} />
        <View style={{ flex: 1 }}>
          <Description>
            <Spacer position="bottom" size="sm">
              <YoutubeText variant="title">{video.title}</YoutubeText>
            </Spacer>
            <Row>
              <YoutubeText variant="subTitle">{video.user.name}</YoutubeText>
              <Dot />
              <YoutubeText variant="subTitle">{viewsString}</YoutubeText>
              <Dot />
              <YoutubeText variant="subTitle">{video.createdAt}</YoutubeText>
            </Row>
          </Description>
        </View>
        <Spacer position="top" size="sm">
          <Entypo name="dots-three-vertical" size={14} color="white" />
        </Spacer>
      </VideoDescriptionContainer>
    </Pressable>
  );
};
