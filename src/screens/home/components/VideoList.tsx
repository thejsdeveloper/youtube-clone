import React from "react";
import { View } from "react-native";
import { Video } from "../../../../models";
import data from "../../../../assets/data/video.json";
import { VideoListItem } from "../../../components/VideoListItem";
import {
  TimeContainer,
  TimeText,
} from "../../../components/VideoListItem/styles";
import { Avatar } from "../../../components//Avatar";

export const VideoList = () => {
  const video = data as unknown as Video;

  return (
    <View>
      <VideoListItem video={video} />
    </View>
  );
};
