import React from "react";
import { Column } from "../../components/Atoms";
import { VideoList } from "../../components/VideoList/VideoList";
import data from "../../../assets/data/videos.json";
import { Video } from "../../../models";

export const HomeScreen = () => {
  const videos = data as unknown as Video[];
  return (
    <Column background="primary">
      <VideoList {...{ videos }} />
    </Column>
  );
};
