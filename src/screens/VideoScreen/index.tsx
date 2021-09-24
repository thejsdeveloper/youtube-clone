import React, { useEffect, useState } from "react";
import { useRoute, RouteProp } from "@react-navigation/core";
import { View, StyleSheet } from "react-native";

import { HomeStackParamList } from "../../infrastructure/Navigation/types";
import { SafeAreaViewContainer } from "../../components/SafeAreaView";

import { Comment, Video } from "../../../models";
import { VideoPlayer } from "./styles";
import { VideoDescription } from "./components/VideoDesscription";

import { VideoList } from "../../components/VideoList/VideoList";
import { theme } from "../../infrastructure/theme";
import { useVideoListContext } from "../../services/videoList/videoListContext";
import { YoutubeText } from "../../components/Atoms";
import { colors } from "../../infrastructure/theme/colors";
import { YTLoader } from "../../components/Loader";

export const VideoScreen = () => {
  const {
    params: { videoId },
  } = useRoute<RouteProp<HomeStackParamList, "VideoScreen">>();

  const { getVideoById, videos, getCommentsByVideoId } = useVideoListContext();
  const [video, setVideo] = useState<Video | null | undefined>(null);
  const [error, setError] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getVideoAndComment = async () => {
      try {
        const commentData = await getCommentsByVideoId(videoId);
        const videoData = getVideoById(videoId);
        if (videoData) {
          setVideo(videoData);
        } else {
          setError("Error while fetching video");
        }
        if (commentData) {
          setComments(commentData);
        } else {
          setError("Error while fetching video comments");
        }
      } catch (e) {}
    };

    getVideoAndComment();

    return () => {
      setError("");
      setVideo(null);
    };
  }, [videoId]);

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
    return <YTLoader />;
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
