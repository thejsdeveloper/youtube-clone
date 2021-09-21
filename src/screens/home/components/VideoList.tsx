import React from "react";
import { FlatList, View } from "react-native";
import { Video } from "../../../../models";
import data from "../../../../assets/data/videos.json";
import { VideoListItem } from "../../../components/VideoListItem";

export const VideoList = () => {
  const videos = data as unknown as Video[];

  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </View>
  );
};
