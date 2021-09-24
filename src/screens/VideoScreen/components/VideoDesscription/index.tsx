import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { Video } from "../../../../../models";
import {
  Column,
  Dot,
  Row,
  Spacer,
  YoutubeText,
} from "../../../../components/Atoms";
import { suffixNumber } from "../../../../utils";
import { ActionRow } from "../ActionRow";
import { VideoDescriptionContainer } from "./styles";

type VideoDescriptionProps = {
  video: Video;
};

export const VideoDescription = ({ video }: VideoDescriptionProps) => {
  const viewsString = useMemo(() => suffixNumber(video.views), [video.views]);
  const hasTags = video.tags && video.tags.length;
  return (
    <VideoDescriptionContainer>
      <YoutubeText variant="label">{video.title}</YoutubeText>
      <Spacer position="top" size="md">
        <Row>
          <YoutubeText variant="subTitle">{viewsString}</YoutubeText>
          <Dot />
          <YoutubeText variant="subTitle">{video.createdAt}</YoutubeText>
          {hasTags &&
            video.tags.map((tag) => (
              <Spacer position="left" size="sm">
                <YoutubeText variant="tag">{tag}</YoutubeText>
              </Spacer>
            ))}
        </Row>
      </Spacer>
      <ActionRow />
    </VideoDescriptionContainer>
  );
};
