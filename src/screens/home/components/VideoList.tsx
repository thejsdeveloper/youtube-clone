import React from "react";
import { View, Text } from "react-native";
import { Video } from "../models";
import { Image } from "./style";
import data from "../../../../assets/data/video.json";

export const VideoList = () => {
  const video = data as unknown as Video;

  return (
    <View>
      <Image source={{ uri: video.thumbnail }} />
    </View>
  );
};
