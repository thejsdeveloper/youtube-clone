import React from "react";
import { FlatList, View } from "react-native";

import { Video } from "../../../models";
import { VideoListItem } from "./VideoListItem";

type VideoListProps = {
  videos: Video[];
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
};

export const VideoList = ({ videos, ListHeaderComponent }: VideoListProps) => {
  return (
    <FlatList
      data={videos}
      renderItem={({ item }) => <VideoListItem video={item} />}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
