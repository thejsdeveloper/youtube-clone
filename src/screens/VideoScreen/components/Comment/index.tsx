import React from "react";
import { Comment } from "../../../../../models";
import { Row, Spacer, YoutubeText } from "../../../../components/Atoms";
import { Avatar } from "../../../../components/Avatar";
import { colors } from "../../../../infrastructure/theme/colors";
import { ExpandIcon } from "../ExpandIcon";
import {
  CommentContainer,
  CommentInput,
  CommentInputWrapper,
  InputContainer,
} from "./style";

type CommentProps = {
  comment: Comment;
  totalComments: number;
};

export const CommentSection = ({ comment, totalComments }: CommentProps) => {
  return (
    <CommentContainer>
      <Row>
        <Row flex alignItems="flex-end">
          <Spacer position="right" size="md">
            <YoutubeText variant="button">Comments</YoutubeText>
          </Spacer>
          {!!totalComments && (
            <YoutubeText variant="subTitle">{totalComments}</YoutubeText>
          )}
        </Row>
        <ExpandIcon />
      </Row>
      <CommentInputWrapper>
        <Spacer position="right" size="md">
          <Avatar source={{ uri: comment.user.image }} size={25} />
        </Spacer>
        {!!totalComments ? (
          <YoutubeText variant="body">{comment.comment}</YoutubeText>
        ) : (
          <InputContainer>
            <CommentInput
              placeholder="Add a public comment..."
              placeholderTextColor={colors.text.disabled}
            />
          </InputContainer>
        )}
      </CommentInputWrapper>
    </CommentContainer>
  );
};
