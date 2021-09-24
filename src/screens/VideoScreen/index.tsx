import React from "react";
import { useRoute, RouteProp } from "@react-navigation/core";

import { Column } from "../../components/Atoms";
import { HomeStackParamList } from "../../infrastructure/Navigation/types";
import { SafeAreaViewContainer } from "../../components/SafeAreaView";

import { Video } from "../../../models";
import { VideoPlayer } from "./styles";
import { VideoDescription } from "./components/VideoDesscription";

import videoData from "../../../assets/data/video.json";
import videosData from "../../../assets/data/videos.json";
import { VideoList } from "../../components/VideoList/VideoList";
import { theme } from "../../infrastructure/theme";

export const VideoScreen = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList, "VideoScreen">>();
  // TODO: get real data
  const video = videoData as unknown as Video;
  const videos = videosData as unknown as Video[];

  return (
    <SafeAreaViewContainer>
      <VideoPlayer
        style={{
          aspectRatio: 16 / 9,
          borderBottomColor: theme.colors.ui.tertiary,
          borderBottomWidth: 1,
        }}
        source={{ uri: video.videoUrl }}
        resizeMode="cover"
        usePoster={false}
        useNativeControls
      />

      <VideoList
        {...{ videos }}
        ListHeaderComponent={() => <VideoDescription video={video} />}
      />
    </SafeAreaViewContainer>
  );
};
