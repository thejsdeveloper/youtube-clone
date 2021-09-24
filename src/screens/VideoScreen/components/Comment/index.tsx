import React from "react";
import { Row, Spacer, YoutubeText } from "../../../../components/Atoms";
import { CommentContainer } from "./style";

export const Comment = () => {
  return (
    <CommentContainer>
      <Row alignItems="center">
        <Spacer position="right" size="md">
          <YoutubeText variant="body">Comments</YoutubeText>
        </Spacer>
        <YoutubeText variant="subTitle">222</YoutubeText>
      </Row>
    </CommentContainer>
  );
};
