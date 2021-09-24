import React, { useEffect, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/core";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import { HomeStackParamList } from "../../infrastructure/Navigation/types";
import { SafeAreaViewContainer } from "../../components/SafeAreaView";

import { Comment, Video } from "../../../models";
import { LoaderContainer, VideoLoader, VideoPlayer } from "./styles";
import { VideoDescription } from "./components/VideoDesscription";

import commentsData from "../../../assets/data/comments.json";
import { VideoList } from "../../components/VideoList/VideoList";
import { theme } from "../../infrastructure/theme";
import { useVideoListContext } from "../../services/videoList/videoListContext";
import { Column, Row, YoutubeText } from "../../components/Atoms";
import { colors } from "../../infrastructure/theme/colors";

export const VideoScreen = () => {
  const {
    params: { videoId },
  } = useRoute<RouteProp<HomeStackParamList, "VideoScreen">>();

  const { getVideoById, videos } = useVideoListContext();
  const [video, setVideo] = useState<Video | null | undefined>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const result = getVideoById(videoId);
    if (result) {
      setVideo(result);
    } else {
      setError("Error while fetching video");
    }

    return () => {
      setError("");
      setVideo(null);
    };
  }, [videoId]);

  // TODO: get real data
  const comments = commentsData as unknown as Comment[];

  //TODO: Show error with error boundary
  if (error.length) {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: colors.ui.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <YoutubeText variant="label">{error}</YoutubeText>
      </View>
    );
  }

  if (!video) {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: colors.ui.primary,
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <ActivityIndicator color={colors.ui.secondary} animating={true} />
      </View>
    );
  }

  return (
    <SafeAreaViewContainer>
      <VideoPlayer
        style={{
          aspectRatio: 16 / 9,
          borderBottomColor: theme.colors.ui.tertiary,
          borderBottomWidth: 1,
        }}
        source={{ uri: video.videoUrl }}
        posterSource={{
          uri: video.thumbnail,
        }}
        resizeMode="cover"
        usePoster={false}
        useNativeControls
      />

      <VideoList
        {...{ videos }}
        ListHeaderComponent={() => (
          <VideoDescription video={video} comments={comments} />
        )}
      />
    </SafeAreaViewContainer>
  );
};
