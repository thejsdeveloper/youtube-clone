import React from "react";
import { View, Text, Pressable } from "react-native";

import { Image } from "./styles";
import { Video } from "../../../models";

type VideoListItemProps = {
  video: Video;
};

export const VideoListItem = ({ video }: VideoListItemProps) => {
  return (
    <Pressable>
      <View>
        <Image source={{ uri: video.thumbnail }} />
      </View>
    </Pressable>
  );
};
