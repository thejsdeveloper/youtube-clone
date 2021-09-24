import React from "react";
import { useRoute, RouteProp } from "@react-navigation/core";

import { Column } from "../../components/Atoms";
import { HomeStackParamList } from "../../infrastructure/Navigation/types";
import { SafeAreaViewContainer } from "../../components/SafeAreaView";
import data from "../../../assets/data/video.json";
import { Video } from "../../../models";
import { VideoPlayer } from "./styles";

export const VideoScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, "VideoScreen">>();
  const video = data as unknown as Video;
  console.log("Video Params -> ", video);
  return (
    <SafeAreaViewContainer>
      <Column>
        <VideoPlayer
          style={{
            aspectRatio: 16 / 9,
          }}
          source={{ uri: video.videoUrl }}
          resizeMode="cover"
          usePoster={false}
          useNativeControls
        />
      </Column>
    </SafeAreaViewContainer>
  );
};
