import React from "react";
import { Column } from "../../components/Atoms";
import { YTLoader } from "../../components/Loader";
import { VideoList } from "../../components/VideoList/VideoList";
import { useVideoListContext } from "../../services/videoList/videoListContext";

export const HomeScreen = () => {
  const { videos, loading } = useVideoListContext();

  if (loading) {
    return (
      <Column
        background="primary"
        flex
        justifyContent="center"
        alignItems="center"
      >
        <YTLoader />
      </Column>
    );
  }

  return (
    <Column background="primary">
      <VideoList {...{ videos }} />
    </Column>
  );
};
