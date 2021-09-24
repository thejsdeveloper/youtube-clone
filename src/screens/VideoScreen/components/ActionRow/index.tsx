import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Video } from "../../../../../models";
import { Spacer, YoutubeText } from "../../../../components/Atoms";
import { ActionListItem } from "./styles";

type ActionListProps = {
  video: Video;
};

export const ActionList = ({ video }: ActionListProps) => {
  return (
    <Spacer position="bottom" size="md">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ActionListItem>
          <AntDesign name="like1" size={24} color="lightgrey" />
          <YoutubeText variant="body">{video.likes}</YoutubeText>
        </ActionListItem>
        <ActionListItem>
          <AntDesign name="dislike2" size={24} color="lightgrey" />
          <YoutubeText variant="body">{video.dislikes}</YoutubeText>
        </ActionListItem>

        <ActionListItem>
          <MaterialCommunityIcons
            name="share-outline"
            size={24}
            color="lightgrey"
          />
          <YoutubeText variant="body">Share</YoutubeText>
        </ActionListItem>
        <ActionListItem>
          <MaterialCommunityIcons
            name="video-plus"
            size={24}
            color="lightgrey"
          />
          <YoutubeText variant="body">Create</YoutubeText>
        </ActionListItem>
        <ActionListItem>
          <AntDesign name="download" size={24} color="lightgrey" />
          <YoutubeText variant="body">Download</YoutubeText>
        </ActionListItem>

        <ActionListItem>
          <MaterialCommunityIcons
            name="plus-box-multiple-outline"
            size={24}
            color="lightgrey"
          />
          <YoutubeText variant="body">Save</YoutubeText>
        </ActionListItem>
      </ScrollView>
    </Spacer>
  );
};
