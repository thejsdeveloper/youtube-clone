import React from "react";
import { useRoute, RouteProp } from "@react-navigation/core";

import { Column, YoutubeText } from "../../components/Atoms";
import { HomeStackParamList } from "../../infrastructure/Navigation/types";
import { SafeAreaViewContainer } from "../../components/SafeAreaView";

export const VideoScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, "VideoScreen">>();
  console.log("Video Params -> ", params.videoId);
  return (
    <SafeAreaViewContainer>
      <Column background="primary">
        <YoutubeText variant="title">VideoScreen</YoutubeText>
      </Column>
    </SafeAreaViewContainer>
  );
};
