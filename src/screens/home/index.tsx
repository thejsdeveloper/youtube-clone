import React from "react";
import { Column } from "../../components/Atoms";
import { VideoList } from "../../components/VideoList/VideoList";
import { useVideoListContext } from "../../services/VideoList/videoListContext";

export const HomeScreen = () => {
  const { videos } = useVideoListContext();

  return (
    <Column background="primary">
      <VideoList {...{ videos }} />
    </Column>
  );
};
