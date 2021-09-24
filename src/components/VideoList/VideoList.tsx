import React from "react";
import { FlatList, View } from "react-native";

import { Video } from "../../../models";
import { VideoListItem } from "./VideoListItem";

type VideoListProps = {
  videos: Video[];
};

export const VideoList = ({ videos }: VideoListProps) => {
  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </View>
  );
};
