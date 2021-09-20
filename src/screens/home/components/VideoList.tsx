import React from "react";
import { View, Text } from "react-native";
import { Video } from "../../../../models";
import { Image } from "./style";
import data from "../../../../assets/data/video.json";
import { VideoListItem } from "../../../components/VideoListItem";
import {
  TimeContainer,
  TimeText,
} from "../../../components/VideoListItem/styles";

export const VideoList = () => {
  const video = data as unknown as Video;
  const minutes = Math.floor(video.duration / 60);
  const seconds = video.duration % 60;

  return (
    <View>
      <VideoListItem video={video} />
      <TimeContainer>
        <TimeText>
          {minutes}:{seconds < 10 ? "0" : ""}
          {seconds}
        </TimeText>
      </TimeContainer>
    </View>
  );
};
