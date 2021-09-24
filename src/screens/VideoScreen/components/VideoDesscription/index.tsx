import React, { useMemo } from "react";
import { Comment, Video } from "../../../../../models";
import { Dot, Row, Spacer, YoutubeText } from "../../../../components/Atoms";
import { suffixNumber } from "../../../../utils";
import { ActionList } from "../ActionRow";
import { ChannelInfo } from "../ChannelInfo";
import { CommentSection } from "../Comment";
import { VideoDescriptionContainer } from "./styles";

type VideoDescriptionProps = {
  video: Video;
  comments: Comment[];
};

export const VideoDescription = ({
  video,
  comments,
}: VideoDescriptionProps) => {
  const viewsString = useMemo(() => suffixNumber(video.views), [video.views]);
  const hasTags = video.tags && video.tags.length;
  return (
    <>
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
      </VideoDescriptionContainer>

      <ActionList {...{ video }} />
      <ChannelInfo user={video.user} />
      <CommentSection comment={comments[0]} totalComments={comments.length} />
    </>
  );
};
